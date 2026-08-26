import {
  CommunicationInterface_TCAN1042_TIDA01428,
  ElectrochromicMirrorDriver_TIDA01539,
  LampDriver_TPS92638_TIDA00356,
  LightSensor_OPT3001_TIDA01539,
  TemperatureSensor_LM50HV_Q1,
} from "@tsci/tscircuit.ti";
import "tscircuit";

export default () => (
  <board routingDisabled>
    <CommunicationInterface_TCAN1042_TIDA01428 name="communication_interface" />
    <ElectrochromicMirrorDriver_TIDA01539 name="mirror_driver" />
    <LightSensor_OPT3001_TIDA01539 name="light_sensor" />
    <LampDriver_TPS92638_TIDA00356 name="lamp_driver" />
    <TemperatureSensor_LM50HV_Q1 name="temperature_sensor" />
  </board>
);
