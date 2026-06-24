import { ChipProps } from "tscircuit";

export const CONTROLLER_PIN_LABELS = {
  pin1: "PWM",
  pin2: "IO1",
  pin3: "IO2",
  pin4: "IO3",
  pin5: "ADC",
};

export const CONTROLLER = (props: ChipProps<any>) => (
  <chip
    {...props}
    pinLabels={CONTROLLER_PIN_LABELS}
    schPinArrangement={{
      rightSide: ["pin1", "pin2", "pin3", "pin4", "pin5"],
    }}
    schPinStyle={{
      pin2: {
        marginTop: 0.6,
        marginBottom: 0.6,
      },
      pin4: {
        marginTop: 0.6,
        marginBottom: 0.6,
      },
    }}
  />
);
