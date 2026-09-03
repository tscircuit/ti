import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";
import { ReverseBatteryProtection_TLV1805_SQJ461EP } from "./ReverseBatteryProtection_TLV1805_SQJ461EP.circuit.tsx";
import { SupervisorWatchdog_TPS3850 } from "./SupervisorWatchdog_TPS3850.circuit.tsx";
import { VoltageRegulator_LM73605 } from "./VoltageRegulator_LM73605.circuit.tsx";

// Both sheet-2 children use source-relative coordinates. Their documented
// Altium-origin difference is (0.509, -12.192) mm. Keep the source X offset and
// add a documented +1.6-mm native-sheet Y packing translation to bring the
// complete 3.3-V System Supply section closer to Reverse Battery Protection.
const REGULATOR_SHEET_2_OFFSET = { x: 0.509, y: -10.592 } as const;

// Uniformly place the complete source layout in the vertical center of the
// enlarged native sheet frame. This parent-only translation preserves every
// child coordinate and the exact relative offset between the two sections.
const MAIN_SUPPLY_SHEET_Y_OFFSET = 6.2;

/**
 * Automotive-window-module power-supply composite backed by the verified
 * shared nets in TI TIDA-050008:
 *
 * VBATT -> reverse protection / EMI filter -> VIN1 -> LM73605 -> +3.3V
 * +3.3V -> TPS3850 supply monitor and window watchdog
 *
 * The native schematic sheets mirror the authoritative TIDA-050008 CAD:
 * reverse-battery protection and the regulator remain on "Main Supply"
 * (source sheet 2), while the TPS3850 remains on "Watchdog and Vref" (source
 * sheet 3). The child sections keep their source-relative layouts. This
 * parent joins only the verified sheet nets; it does not synthesize
 * thresholds, timing, dividers, or grounding arrangements.
 *
 * Main Supply keeps the larger native ANSI-B frame needed by its layout.
 * Watchdog and Vref fits on the default A4 sheet. A uniform +6.2-mm parent
 * translation centers the Main Supply layout vertically. The regulator child
 * additionally receives the documented +1.6-mm Y packing translation above;
 * no child geometry is scaled.
 */
export const PowerSupply_WindowModule = (props: SubcircuitProps) => (
  <subcircuit routingDisabled {...props}>
    <schematicsheet
      name="main_supply"
      displayName="Main Supply"
      sheetIndex={0}
      sheetSize="ANSI_B"
    />
    <schematicsheet
      name="watchdog_and_vref"
      displayName="Watchdog and Vref"
      sheetIndex={1}
    />

    <net name="GND" isPowerNet isGroundNet />
    <net name="V3_3" isPowerNet />

    <ReverseBatteryProtection_TLV1805_SQJ461EP
      name="reverseBattery"
      schSheetName="main_supply"
      schY={MAIN_SUPPLY_SHEET_Y_OFFSET}
    />
    <VoltageRegulator_LM73605
      name="regulator"
      schSheetName="main_supply"
      schX={REGULATOR_SHEET_2_OFFSET.x}
      schY={REGULATOR_SHEET_2_OFFSET.y + MAIN_SUPPLY_SHEET_Y_OFFSET}
    />
    <SupervisorWatchdog_TPS3850
      name="supervisorWatchdog"
      schSheetName="watchdog_and_vref"
    />

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
      from=".regulator > .V3_3"
      to="net.V3_3"
    />
    <trace
      name="V3_3"
      schDisplayLabel="+3.3V"
      from=".supervisorWatchdog > .V3_3"
      to="net.V3_3"
    />
    <trace
      name="GND"
      path={[".reverseBattery > .GND", ".regulator > .GND", "net.GND"]}
    />
    <trace name="GND" from=".supervisorWatchdog > .GND" to="net.GND" />
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
