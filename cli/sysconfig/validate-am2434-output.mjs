import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { am2434Profile } from "./am2434-profile.mjs";

function escapeRegExp(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function getRequestedGpio({ circuitJson, options }) {
  const ports = circuitJson.filter(
    (item) =>
      item?.type === "source_port" &&
      item.source_port_id === options.source_port_id &&
      item.source_component_id === options.source_component_id,
  );
  if (ports.length !== 1) {
    throw new Error(
      `Expected one AM2434 source port ${options.source_port_id}; found ${ports.length}`,
    );
  }
  const labels = new Set([ports[0].name, ...(ports[0].port_hints ?? [])]);
  const balls = Object.keys(am2434Profile.gpioByBall).filter((ball) =>
    labels.has(ball),
  );
  if (balls.length !== 1) {
    throw new Error(
      `Expected one supported AM2434 ball for ${options.source_port_id}; found ${balls.join(", ") || "none"}`,
    );
  }
  const ball = balls[0];
  return { ball, ...am2434Profile.gpioByBall[ball] };
}

function requireMacro({ header, gpioName, suffix, expression }) {
  const macroName = `${gpioName}_${suffix}`;
  const expected = new RegExp(
    `^#define\\s+${escapeRegExp(macroName)}\\s+\\(\\s*${escapeRegExp(String(expression))}\\s*\\)\\s*$`,
    "m",
  );
  if (!expected.test(header)) {
    throw new Error(
      `TI generated output does not match ${macroName} (${expression})`,
    );
  }
}

function validatePinmux({ pinmux, requestedGpio }) {
  const uncommented = pinmux.replace(/\/\*[\s\S]*?\*\//g, "");
  const arrays = [
    ...uncommented.matchAll(
      /static\s+Pinmux_PerCfg_t\s+(\w+)\s*\[\s*\]\s*=\s*\{([\s\S]*?)\};/g,
    ),
  ];
  const main = arrays.find((array) => array[1] === "gPinMuxMainDomainCfg");
  const mcu = arrays.find((array) => array[1] === "gPinMuxMcuDomainCfg");
  const emptyDomain = /^\s*\{\s*PINMUX_END\s*,\s*PINMUX_END\s*\}\s*,?\s*$/;
  const requestedPin = new RegExp(
    `^\\s*\\{\\s*PIN_${escapeRegExp(requestedGpio.devicePin)}\\s*,\\s*\\(\\s*PIN_MODE\\(7\\)(?:\\s*\\|\\s*PIN_[A-Z0-9_]+)*\\s*\\)\\s*\\}\\s*,\\s*\\{\\s*PINMUX_END\\s*,\\s*PINMUX_END\\s*\\}\\s*,?\\s*$`,
  );
  if (
    arrays.length !== 2 ||
    !main ||
    !mcu ||
    !emptyDomain.test(main[2]) ||
    !requestedPin.test(mcu[2]) ||
    !uncommented.includes(
      "Pinmux_config(gPinMuxMcuDomainCfg, PINMUX_DOMAIN_ID_MCU);",
    )
  ) {
    throw new Error(
      `TI generated AM2434 pinmux does not match ${requestedGpio.ball} / ${requestedGpio.devicePin} mode 7`,
    );
  }
}

export async function validateAm2434Output({
  directory,
  circuitJson,
  options,
  syscfgPath,
}) {
  const requestedGpio = getRequestedGpio({ circuitJson, options });
  const [header, pinmux, syscfg] = await Promise.all([
    readFile(join(directory, "ti_drivers_config.h"), "utf8"),
    readFile(join(directory, "ti_pinmux_config.c"), "utf8"),
    readFile(syscfgPath, "utf8"),
  ]);
  for (const [suffix, expression] of [
    ["BASE_ADDR", `CSL_${requestedGpio.peripheral}_BASE`],
    ["PIN", requestedGpio.pin],
    ["DIR", "GPIO_DIRECTION_OUTPUT"],
  ]) {
    requireMacro({ header, gpioName: options.gpio_name, suffix, expression });
  }
  for (const assignment of [
    `gpio1.$name = "${options.gpio_name}";`,
    'gpio1.pinDir = "OUTPUT";',
    `gpio1.MCU_GPIO.$assign = "${requestedGpio.peripheral}";`,
    `gpio1.MCU_GPIO.gpioPin.$assign = "${requestedGpio.ball}";`,
  ]) {
    if (!syscfg.includes(assignment)) {
      throw new Error(`Generated AM2434 SysConfig is missing ${assignment}`);
    }
  }
  validatePinmux({ pinmux, requestedGpio });
}
