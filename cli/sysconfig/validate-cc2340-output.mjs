import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { cc2340Profile } from "./cc2340-profile.mjs";

function escapeRegExp(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function requireMatch(source, pattern, setting) {
  if (!pattern.test(source)) {
    throw new Error(`TI generated output does not match ${setting}`);
  }
}

function requireLiteral(source, literal, setting) {
  if (!source.includes(literal)) {
    throw new Error(`TI generated output does not match ${setting}`);
  }
}

function getDio({ circuitJson, sourcePortId }) {
  const ports = circuitJson.filter(
    (item) =>
      item.type === "source_port" && item.source_port_id === sourcePortId,
  );
  if (ports.length !== 1) {
    throw new Error(
      `Expected one source port ${sourcePortId}; found ${ports.length}`,
    );
  }
  const dio = cc2340Profile.dioByPackagePin[ports[0].pin_number];
  if (dio === undefined) {
    throw new Error(
      `Unsupported CC2340 RGE package pin ${ports[0].pin_number}`,
    );
  }
  return dio;
}

function requireMacro(header, name, expected) {
  requireMatch(
    header,
    new RegExp(`^#define\\s+${escapeRegExp(name)}\\s+${expected}\\s*$`, "m"),
    `${name} = ${expected}`,
  );
}

function getGpioConfiguration(drivers, name) {
  const pattern = new RegExp(
    `^\\s*([^\\n]+?),\\s*/\\*\\s*${escapeRegExp(name)}\\s*\\*/\\s*$`,
    "gm",
  );
  const matches = [...drivers.matchAll(pattern)];
  if (matches.length !== 1) {
    throw new Error(
      `Expected one TI GPIO configuration for ${name}; found ${matches.length}`,
    );
  }
  return matches[0][1];
}

function validateGpio({ circuitJson, options, header, drivers, syscfg }) {
  const interruptFlags = {
    none: "GPIO_CFG_IN_INT_NONE",
    falling: "GPIO_CFG_IN_INT_FALLING",
    rising: "GPIO_CFG_IN_INT_RISING",
    both: "GPIO_CFG_IN_INT_BOTH_EDGES",
  };
  const pullFlags = {
    none: "GPIO_CFG_PULL_NONE_INTERNAL",
    up: "GPIO_CFG_PULL_UP_INTERNAL",
    down: "GPIO_CFG_PULL_DOWN_INTERNAL",
  };
  for (const [index, gpio] of options.gpios.entries()) {
    const dio = getDio({ circuitJson, sourcePortId: gpio.source_port_id });
    const instance = `GPIO${index + 1}`;
    requireLiteral(
      syscfg,
      `${instance}.$name = "${gpio.gpio_name}";`,
      gpio.gpio_name,
    );
    requireMatch(
      syscfg,
      new RegExp(
        `^${instance}\\.gpioPin\\.\\$assign = "DIO${dio}(?:_[^"]+)?";$`,
        "m",
      ),
      `${gpio.gpio_name} DIO${dio} assignment`,
    );
    requireMacro(header, gpio.gpio_name, dio);
    const configuration = getGpioConfiguration(drivers, gpio.gpio_name);
    const expectedFlags =
      gpio.direction === "output"
        ? [
            "GPIO_CFG_OUTPUT_INTERNAL",
            "GPIO_CFG_OUT_STR_MED",
            gpio.initial_state === "high"
              ? "GPIO_CFG_OUT_HIGH"
              : "GPIO_CFG_OUT_LOW",
          ]
        : [
            "GPIO_CFG_INPUT_INTERNAL",
            interruptFlags[gpio.interrupt],
            pullFlags[gpio.pull],
          ];
    for (const flag of expectedFlags) {
      requireLiteral(configuration, flag, `${gpio.gpio_name} ${flag}`);
    }
  }
}

function validateGpioNames({ options, header }) {
  const gpioStart = header.indexOf("/*\n *  ======== GPIO ========");
  const gpioEnd = header.indexOf("/* The range of pins", gpioStart);
  if (gpioStart < 0 || gpioEnd < 0) {
    throw new Error("TI generated output has no CC2340 GPIO declarations");
  }
  const section = header.slice(gpioStart, gpioEnd);
  const actual = [
    ...section.matchAll(
      /extern const uint_least8_t\s+([A-Z][A-Z0-9_]*)_CONST;/g,
    ),
  ]
    .map((match) => match[1])
    .sort();
  const expected = options.gpios.map((gpio) => gpio.gpio_name);
  if (options.i2c) {
    const prefix = `CONFIG_GPIO_${options.i2c.i2c_name.replace(/^CONFIG_/, "")}`;
    expected.push(`${prefix}_SDA`, `${prefix}_SCL`);
  }
  expected.sort();
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    throw new Error(
      `TI generated GPIO names do not match the request: expected ${expected.join(", ")}; found ${actual.join(", ")}`,
    );
  }
}

function validateI2c({ circuitJson, options, header, drivers, syscfg }) {
  const i2c = options.i2c;
  if (!i2c) return;
  const sda = getDio({ circuitJson, sourcePortId: i2c.sda_source_port_id });
  const scl = getDio({ circuitJson, sourcePortId: i2c.scl_source_port_id });
  const prefix = `CONFIG_GPIO_${i2c.i2c_name.replace(/^CONFIG_/, "")}`;
  requireMacro(header, `${prefix}_SDA`, sda);
  requireMacro(header, `${prefix}_SCL`, scl);
  requireMatch(
    header,
    new RegExp(
      `^#define\\s+${escapeRegExp(i2c.i2c_name)}_MAXSPEED\\s+\\(${i2c.max_bit_rate / 1000}U\\)`,
      "m",
    ),
    `${i2c.i2c_name} ${i2c.max_bit_rate / 1000} kbit/s`,
  );
  requireMatch(
    header,
    new RegExp(
      `^#define\\s+${escapeRegExp(i2c.i2c_name)}_MAXBITRATE\\s+\\(\\(I2C_BitRate\\)I2C_100kHz\\)`,
      "m",
    ),
    `${i2c.i2c_name} I2C_100kHz`,
  );
  requireLiteral(drivers, ".baseAddr    = I2C0_BASE", `${i2c.i2c_name} I2C0`);
  requireLiteral(
    drivers,
    `.sdaPin      = ${prefix}_SDA`,
    `${i2c.i2c_name} SDA`,
  );
  requireLiteral(
    drivers,
    `.sclPin      = ${prefix}_SCL`,
    `${i2c.i2c_name} SCL`,
  );
  requireLiteral(
    drivers,
    ".sdaPinMux   = GPIO_MUX_PORTCFG_PFUNC4",
    `${i2c.i2c_name} SDA mux`,
  );
  requireLiteral(
    drivers,
    ".sclPinMux   = GPIO_MUX_PORTCFG_PFUNC2",
    `${i2c.i2c_name} SCL mux`,
  );
  requireMatch(
    syscfg,
    new RegExp(`^I2C1\\.maxBitRate = ${i2c.max_bit_rate / 1000};$`, "m"),
    `${i2c.i2c_name} source rate`,
  );
}

function validateReservedPorts({ circuitJson, options, drivers }) {
  for (const reserved of options.reserved_ports) {
    const dio = getDio({ circuitJson, sourcePortId: reserved.source_port_id });
    const configuration = getGpioConfiguration(drivers, `DIO_${dio}`);
    if (
      !configuration.includes("GPIO_CFG_NO_DIR") &&
      !configuration.includes("GPIO_CFG_DO_NOT_CONFIG")
    ) {
      throw new Error(`TI generated output configures reserved DIO${dio}`);
    }
  }
}

function validateClockAndStartup({ options, drivers, syscfg }) {
  const clock = options.firmware.lf_clock_source;
  const selected = clock === "lf_rcosc" ? "LFOSC" : "LFXT";
  const other = clock === "lf_rcosc" ? "LFXT" : "LFOSC";
  requireLiteral(drivers, `PowerLPF3_select${selected}();`, `${clock} startup`);
  if (drivers.includes(`PowerLPF3_select${other}();`)) {
    throw new Error(
      `TI generated output selects ${other} instead of ${selected}`,
    );
  }
  requireLiteral(
    syscfg,
    "Board.generateInitializationFunctions = false;",
    "custom board startup",
  );
  if (/Board_\w*Flash|BOARD_EXT_FLASH/.test(drivers)) {
    throw new Error(
      "TI generated output includes LaunchPad external-flash startup",
    );
  }
}

export async function validateCc2340Output({
  directory,
  circuitJson,
  options,
  syscfgPath,
}) {
  const [header, drivers, syscfg] = await Promise.all([
    readFile(join(directory, "ti_drivers_config.h"), "utf8"),
    readFile(join(directory, "ti_drivers_config.c"), "utf8"),
    readFile(syscfgPath, "utf8"),
  ]);
  requireLiteral(header, "#define CONFIG_CC2340R5RGE", "CC2340R5RGE device");
  validateGpioNames({ options, header });
  validateGpio({ circuitJson, options, header, drivers, syscfg });
  validateI2c({ circuitJson, options, header, drivers, syscfg });
  validateReservedPorts({ circuitJson, options, drivers });
  validateClockAndStartup({ options, drivers, syscfg });
}
