import { SystemPowerSupply } from "@tsci/tscircuit.ti";
import "tscircuit";

export default () => (
  <board routingDisabled>
    <SystemPowerSupply name="system_power_supply" />
  </board>
);
