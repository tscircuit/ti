import {
  CommunicationInterface_TCAN1042_TIDA01428,
  LightDriver_TIDA01330,
  Microcontroller_MSPM0L1306Q1_TIDA020065,
  MotorDriver_DRV8305_TIDA01330,
  PositionFeedback_DRV5013_TIDA01389,
  PowerSupply_LM5050_TIDA00992,
} from "@tsci/tscircuit.ti";
import "tscircuit";

export default () => (
  <board width="200mm" height="130mm" routingDisabled>
    <PowerSupply_LM5050_TIDA00992
      name="PowerSupply"
      schX={-30}
      schY={20}
      pcbX={-70}
      pcbY={35}
    />
    <CommunicationInterface_TCAN1042_TIDA01428
      name="CommunicationInterface"
      schX={8}
      schY={20}
      pcbX={-70}
    />
    <LightDriver_TIDA01330
      name="LightDriver"
      schX={35}
      schY={20}
      pcbX={-70}
      pcbY={-30}
    />
    <Microcontroller_MSPM0L1306Q1_TIDA020065
      name="Microcontroller"
      schX={-30}
      schY={-15}
      pcbX={50}
      pcbY={35}
    />
    <PositionFeedback_DRV5013_TIDA01389
      name="PositionFeedback"
      schX={5}
      schY={-15}
      pcbX={70}
    />
    <MotorDriver_DRV8305_TIDA01330
      name="MotorDriver"
      schX={30}
      schY={-15}
      pcbX={20}
      pcbY={-35}
    />
  </board>
);
