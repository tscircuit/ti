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
  <subcircuit schTraceAutoLabelEnabled={false} routingDisabled {...props}>
    <net name="GND" isPowerNet isGroundNet />

    <ReverseBatteryProtection_TLV1805_SQJ461EP
      name="reverseBattery"
      schY={7}
      connections={{
        VBATT: "net.VBATT",
        GND: "net.GND",
        VIN1: "net.VIN1",
      }}
    />
    <VoltageRegulator_LM73605
      name="regulator"
      schX={-4}
      schY={-8}
      connections={{
        VIN1: "net.VIN1",
        V3P3: "net.V3P3",
        GND: "net.GND",
        V_CTRL1: "net.V_CTRL1",
      }}
    />
    <SupervisorWatchdog_TPS3850
      name="supervisorWatchdog"
      schX={23}
      schY={-8}
      connections={{
        V3P3: "net.V3P3",
        GND: "net.GND",
        WDI: "net.WDI",
        WDO: "net.WDO",
        RESET_3V3: "net.RESET_3V3",
      }}
    />

    <trace from=".reverseBattery > .VIN1" to=".regulator > .VIN1" />
    <trace from=".regulator > .V3P3" to=".supervisorWatchdog > .V3P3" />
    <trace from=".reverseBattery > .GND" to=".regulator > .GND" />
    <trace from=".regulator > .GND" to=".supervisorWatchdog > .GND" />

    <port name="VBATT" direction="left" connectsTo="reverseBattery.VBATT" />
    <port name="GND" direction="left" connectsTo="reverseBattery.GND" />
    <port name="V3P3" direction="right" connectsTo="regulator.V3P3" />
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
