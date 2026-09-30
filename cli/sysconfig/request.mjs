const CC2340_MPN = "CC2340R52E0RGER";
const AM2434_MPN = "AM2434BSDFHIALVR";

function assertObject(value, label) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new Error(`${label} must be a JSON object`);
  }
}

function assertOnlyKeys(value, allowed, label) {
  const unknown = Object.keys(value).filter((key) => !allowed.has(key));
  if (unknown.length) {
    throw new Error(
      `${label} contains unsupported field(s): ${unknown.join(", ")}`,
    );
  }
}

function selectComponent(circuitJson, selector) {
  if (typeof selector !== "string" || !selector.trim()) {
    throw new Error("SysConfig request component must be a non-empty string");
  }
  const matches = circuitJson.filter(
    (item) =>
      item?.type === "source_component" &&
      item.ftype === "simple_chip" &&
      (item.source_component_id === selector ||
        item.name === selector ||
        item.manufacturer_part_number === selector),
  );
  if (matches.length !== 1) {
    throw new Error(
      `Expected exactly one simple-chip component matching ${JSON.stringify(selector)}; found ${matches.length}`,
    );
  }
  return matches[0];
}

function getPortLabels(port) {
  return [
    port.name,
    ...(Array.isArray(port.port_hints) ? port.port_hints : []),
  ];
}

function resolvePort(circuitJson, component, selector) {
  if (typeof selector !== "string" || !selector.trim()) {
    throw new Error(
      "Every SysConfig source selector must be a non-empty string",
    );
  }

  const componentPorts = circuitJson.filter(
    (item) =>
      item?.type === "source_port" &&
      item.source_component_id === component.source_component_id,
  );
  const candidateIds = new Set();

  for (const port of componentPorts) {
    if (
      port.source_port_id === selector ||
      getPortLabels(port).includes(selector) ||
      (port.pin_number !== undefined && String(port.pin_number) === selector)
    ) {
      candidateIds.add(port.source_port_id);
    }
  }

  const netIds = new Set(
    circuitJson
      .filter((item) => item?.type === "source_net" && item.name === selector)
      .map((item) => item.source_net_id),
  );
  for (const trace of circuitJson) {
    if (
      trace?.type !== "source_trace" ||
      !Array.isArray(trace.connected_source_net_ids) ||
      !trace.connected_source_net_ids.some((id) => netIds.has(id))
    ) {
      continue;
    }
    for (const portId of trace.connected_source_port_ids ?? []) {
      if (componentPorts.some((port) => port.source_port_id === portId)) {
        candidateIds.add(portId);
      }
    }
  }

  const matches = componentPorts.filter((port) =>
    candidateIds.has(port.source_port_id),
  );
  if (matches.length !== 1) {
    throw new Error(
      `Expected ${JSON.stringify(selector)} to resolve to one port on ${component.name}; found ${matches.length}`,
    );
  }
  return matches[0];
}

function parseRawGpio(gpio, index) {
  assertObject(gpio, `gpios[${index}]`);
  assertOnlyKeys(
    gpio,
    new Set([
      "source",
      "gpio_name",
      "direction",
      "initial_state",
      "pull",
      "interrupt",
    ]),
    `gpios[${index}]`,
  );
  if (typeof gpio.source !== "string" || !gpio.source.trim()) {
    throw new Error(`gpios[${index}].source must be a non-empty string`);
  }
  if (typeof gpio.gpio_name !== "string" || !gpio.gpio_name.trim()) {
    throw new Error(`gpios[${index}].gpio_name must be a non-empty string`);
  }
  if (gpio.direction !== "input" && gpio.direction !== "output") {
    throw new Error(`gpios[${index}].direction must be input or output`);
  }
  return gpio;
}

function parseI2c(i2c) {
  if (i2c === undefined) return undefined;
  assertObject(i2c, "i2c");
  assertOnlyKeys(
    i2c,
    new Set([
      "i2c_name",
      "sda",
      "scl",
      "max_bit_rate",
      "peripheral_assignment",
    ]),
    "i2c",
  );
  for (const field of ["i2c_name", "sda", "scl", "peripheral_assignment"]) {
    if (typeof i2c[field] !== "string" || !i2c[field].trim()) {
      throw new Error(`i2c.${field} must be a non-empty string`);
    }
  }
  if (!Number.isFinite(i2c.max_bit_rate) || i2c.max_bit_rate <= 0) {
    throw new Error("i2c.max_bit_rate must be a positive number in bits/s");
  }
  return i2c;
}

function resolveCc2340Options(circuitJson, component, request) {
  assertOnlyKeys(
    request,
    new Set(["component", "gpios", "i2c", "reserved_ports", "firmware"]),
    "SysConfig request",
  );

  const rawGpios = Array.isArray(request.gpios)
    ? request.gpios.map(parseRawGpio)
    : [];
  const gpios = rawGpios.map((gpio) => {
    const port = resolvePort(circuitJson, component, gpio.source);
    if (gpio.direction === "output") {
      if (gpio.initial_state !== "low" && gpio.initial_state !== "high") {
        throw new Error(
          `Output ${gpio.gpio_name} requires initial_state low or high`,
        );
      }
      if (gpio.pull !== undefined || gpio.interrupt !== undefined) {
        throw new Error(
          `Output ${gpio.gpio_name} does not accept pull or interrupt options`,
        );
      }
      return {
        source_port_id: port.source_port_id,
        gpio_name: gpio.gpio_name,
        direction: "output",
        initial_state: gpio.initial_state,
      };
    }

    if (!["none", "up", "down"].includes(gpio.pull)) {
      throw new Error(
        `Input ${gpio.gpio_name} requires pull none, up, or down`,
      );
    }
    if (!["none", "falling", "rising", "both"].includes(gpio.interrupt)) {
      throw new Error(
        `Input ${gpio.gpio_name} requires interrupt none, falling, rising, or both`,
      );
    }
    if (gpio.initial_state !== undefined) {
      throw new Error(`Input ${gpio.gpio_name} does not accept initial_state`);
    }
    return {
      source_port_id: port.source_port_id,
      gpio_name: gpio.gpio_name,
      direction: "input",
      pull: gpio.pull,
      interrupt: gpio.interrupt,
    };
  });

  const rawI2c = parseI2c(request.i2c);
  const i2c = rawI2c
    ? {
        i2c_name: rawI2c.i2c_name,
        sda_source_port_id: resolvePort(circuitJson, component, rawI2c.sda)
          .source_port_id,
        scl_source_port_id: resolvePort(circuitJson, component, rawI2c.scl)
          .source_port_id,
        max_bit_rate: rawI2c.max_bit_rate,
        peripheral_assignment: rawI2c.peripheral_assignment,
      }
    : undefined;

  const rawReserved = request.reserved_ports ?? [];
  if (!Array.isArray(rawReserved)) {
    throw new Error("reserved_ports must be an array");
  }
  const reserved_ports = rawReserved.map((entry, index) => {
    assertObject(entry, `reserved_ports[${index}]`);
    assertOnlyKeys(
      entry,
      new Set(["source", "reason"]),
      `reserved_ports[${index}]`,
    );
    if (typeof entry.source !== "string" || !entry.source.trim()) {
      throw new Error(
        `reserved_ports[${index}].source must be a non-empty string`,
      );
    }
    if (typeof entry.reason !== "string" || !entry.reason.trim()) {
      throw new Error(
        `reserved_ports[${index}].reason must be a non-empty string`,
      );
    }
    return {
      source_port_id: resolvePort(circuitJson, component, entry.source)
        .source_port_id,
      reason: entry.reason,
    };
  });

  assertObject(request.firmware, "firmware");
  assertOnlyKeys(request.firmware, new Set(["rtos"]), "firmware");
  if (request.firmware.rtos !== "nortos") {
    throw new Error(
      "The current CC2340 converter scope requires firmware.rtos to be nortos",
    );
  }

  return {
    target: "cc2340",
    options: {
      source_component_id: component.source_component_id,
      gpios,
      ...(i2c ? { i2c } : {}),
      reserved_ports,
      firmware: { rtos: "nortos" },
    },
  };
}

function resolveAm2434Options(circuitJson, component, request) {
  assertOnlyKeys(
    request,
    new Set(["component", "gpios", "i2c", "reserved_ports", "firmware"]),
    "SysConfig request",
  );
  if (request.i2c !== undefined) {
    throw new Error("AM2434 CLI conversion does not support I2C yet");
  }
  if ((request.reserved_ports ?? []).length) {
    throw new Error(
      "AM2434 CLI conversion does not support reserved_ports yet",
    );
  }
  if (request.firmware !== undefined) {
    throw new Error("AM2434 CLI conversion does not accept firmware settings");
  }
  if (!Array.isArray(request.gpios) || request.gpios.length !== 1) {
    throw new Error("AM2434 CLI conversion requires exactly one GPIO request");
  }

  const gpio = parseRawGpio(request.gpios[0], 0);
  if (gpio.direction !== "output") {
    throw new Error("AM2434 CLI conversion supports only an output GPIO");
  }
  if (
    gpio.initial_state !== undefined ||
    gpio.pull !== undefined ||
    gpio.interrupt !== undefined
  ) {
    throw new Error(
      "AM2434 output startup/pull/interrupt settings are not supported by the converter",
    );
  }

  return {
    target: "am2434",
    options: {
      source_component_id: component.source_component_id,
      source_port_id: resolvePort(circuitJson, component, gpio.source)
        .source_port_id,
      gpio_name: gpio.gpio_name,
      direction: "output",
    },
  };
}

export function resolveConverterOptions(circuitJson, request) {
  assertObject(request, "SysConfig request");
  const component = selectComponent(circuitJson, request.component);

  if (component.manufacturer_part_number === CC2340_MPN) {
    return {
      component,
      ...resolveCc2340Options(circuitJson, component, request),
    };
  }
  if (component.manufacturer_part_number === AM2434_MPN) {
    return {
      component,
      ...resolveAm2434Options(circuitJson, component, request),
    };
  }

  throw new Error(
    `Unsupported TI target ${JSON.stringify(component.manufacturer_part_number)}. Current converter targets are ${CC2340_MPN} and ${AM2434_MPN}.`,
  );
}
