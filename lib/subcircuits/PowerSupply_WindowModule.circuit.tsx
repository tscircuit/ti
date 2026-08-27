import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";
import { ReverseBatteryProtection_TLV1805_SQJ461EP } from "./ReverseBatteryProtection_TLV1805_SQJ461EP.circuit.tsx";
import { SupervisorWatchdog_TPS3850 } from "./SupervisorWatchdog_TPS3850.circuit.tsx";
import { VoltageRegulator_LM73605 } from "./VoltageRegulator_LM73605.circuit.tsx";

/**
 * Automotive-window-module power-supply composite backed by the verified
 * shared nets in TI TIDA-050008:
 *
 * VBATT -> reverse protection / EMI filter -> VIN1 -> LM73605 -> +3.3V
 * +3.3V -> TPS3850 supply monitor and window watchdog
 *
 * The child sections keep their source-relative layouts. This parent joins
 * only the TIDA-050008 sheet nets; it does not synthesize thresholds, timing,
 * dividers, or grounding arrangements.
 */
export const PowerSupply_WindowModule = (props: SubcircuitProps) => (
  <subcircuit routingDisabled {...props}>
    <net name="GND" isPowerNet isGroundNet />
    <net name="V3_3" isPowerNet />

    <ReverseBatteryProtection_TLV1805_SQJ461EP name="reverseBattery" schY={7} />
    <VoltageRegulator_LM73605 name="regulator" schX={-4} schY={-8} />
    <SupervisorWatchdog_TPS3850 name="supervisorWatchdog" schX={23} schY={-8} />

    <trace
      name="VBATT"
      schDisplayLabel="VBATT"
      from=".reverseBattery > .VBATT"
      to="net.VBATT"
    />
    <trace
      name="VIN1"
      schDisplayLabel="VIN1"
      path={[".reverseBattery > .VIN1", ".regulator > .VIN1", "net.VIN1"]}
    />
    <trace
      name="V3_3"
      schDisplayLabel="+3.3V"
      path={[".regulator > .V3_3", ".supervisorWatchdog > .V3_3", "net.V3_3"]}
    />
    <trace
      name="GND"
      path={[
        ".reverseBattery > .GND",
        ".regulator > .GND",
        ".supervisorWatchdog > .GND",
        "net.GND",
      ]}
    />
    <trace
      name="V_CTRL1"
      schDisplayLabel="V_CTRL1"
      from=".regulator > .V_CTRL1"
      to="net.V_CTRL1"
    />
    <trace
      name="WDI"
      schDisplayLabel="WDI"
      from=".supervisorWatchdog > .WDI"
      to="net.WDI"
    />
    <trace
      name="WDO"
      schDisplayLabel="WDO"
      from=".supervisorWatchdog > .WDO"
      to="net.WDO"
    />
    <trace
      name="RESET_3V3"
      schDisplayLabel="3.3RESET"
      from=".supervisorWatchdog > .RESET_3V3"
      to="net.RESET_3V3"
    />

    <port name="VBATT" direction="left" connectsTo="reverseBattery.VBATT" />
    <port name="GND" direction="left" connectsTo="reverseBattery.GND" />
    <port name="V3_3" direction="right" connectsTo="regulator.V3_3" />
    <port name="V_CTRL1" direction="right" connectsTo="regulator.V_CTRL1" />
    <port name="WDI" direction="left" connectsTo="supervisorWatchdog.WDI" />
    <port name="WDO" direction="right" connectsTo="supervisorWatchdog.WDO" />
    <port
      name="RESET_3V3"
      direction="right"
      connectsTo="supervisorWatchdog.RESET_3V3"
    />
  </subcircuit>
);

export default PowerSupply_WindowModule;
