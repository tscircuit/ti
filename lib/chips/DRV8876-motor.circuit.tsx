import { ChipProps } from "tscircuit";

export const MOTOR_PIN_LABELS = {
  pin1: "pin1",
  pin2: "pin2",
};

export const MOTOR = (props: ChipProps<any>) => (
  <chip {...props} pinLabels={MOTOR_PIN_LABELS} />
);
