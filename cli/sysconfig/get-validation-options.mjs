/** Keep SDK defaults omitted; validate only declarations resolved by the converter. */
export function getValidationOptions({ configuration, circuitJson }) {
  const cc2340 = configuration.cc2340;
  if (!cc2340) return configuration.gpio;
  const reservedPorts =
    cc2340.options?.reserved_ports ??
    (cc2340.lfCrystal
      ? circuitJson
          .filter(
            (element) =>
              element.type === "source_port" &&
              element.source_component_id ===
                configuration.component.source_component_id &&
              cc2340.target.lfCrystalPins.includes(element.pin_number),
          )
          .map((port) => ({
            source_port_id: port.source_port_id,
            reason: "External LF crystal",
          }))
      : []);
  return {
    source_component_id: configuration.component.source_component_id,
    gpios: cc2340.gpios.map(({ request }) => request),
    ...(cc2340.i2c ? { i2c: cc2340.i2c.request } : {}),
    reserved_ports: reservedPorts,
    ...(cc2340.options?.firmware
      ? { firmware: cc2340.options.firmware }
      : cc2340.lfCrystal
        ? { firmware: { lf_clock_source: "lf_xosc" } }
        : {}),
  };
}
