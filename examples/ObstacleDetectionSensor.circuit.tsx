import {
  AutomotiveBatteryFrontEnd,
  RadarFrontEndProcessing,
} from "@tsci/tscircuit.ti";
import "tscircuit";

export default () => (
  <board routingDisabled>
    <schematicsheet
      name="power_supply"
      displayName="Power Supply - TIDA-00699"
      sheetSize="ANSI_B"
    />
    <AutomotiveBatteryFrontEnd
      name="power_supply"
      schSheetName="power_supply"
    />
    <RadarFrontEndProcessing name="radar_front_end_processing" />
  </board>
);
