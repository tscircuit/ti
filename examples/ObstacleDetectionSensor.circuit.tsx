import { PowerSupply_TIDA00699 } from "@tsci/tscircuit.ti";
import "tscircuit";

export default () => (
  <board routingDisabled>
    <schematicsheet
      name="power_supply"
      displayName="Power Supply - TIDA-00699"
    />
    <PowerSupply_TIDA00699 name="power_supply" schSheetName="power_supply" />
  </board>
);
