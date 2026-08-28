import { SystemPowerSupply } from "@tsci/tscircuit.ti";
import { RadarFrontEndProcessing } from "@tsci/tscircuit.ti";
import "tscircuit";

export default () => (
  <board routingDisabled>
    <SystemPowerSupply name="system_power_supply" />
    <RadarFrontEndProcessing name="radar_front_end_processing" />
  </board>
);
