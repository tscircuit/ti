import { PowerSupply_TIDA00699 } from "@tsci/tscircuit.ti";
import "tscircuit";

export default () => (
  <board routingDisabled>
    <schematicsheet name="power" displayName="Power Supply" sheetIndex={0} />
    <PowerSupply_TIDA00699 name="power_supply" schSheetName="power" />
  </board>
);
