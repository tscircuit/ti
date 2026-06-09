import { ChipProps } from "tscircuit";

export const TPSM82823_PIN_LABELS = {
  pin1: "VIN",
  pin2: "EN",
  pin3: "GND",
  pin4: "PG",
  pin5: "FB",
  pin6: "VOUT",
};

export const TPSM82823 = (props: ChipProps<any>) => (
  <chip
    {...props}
    pinLabels={TPSM82823_PIN_LABELS}
    schPinStyle={{
      GND: {
        marginTop: 1.3,
      },
      VOUT: {
        marginBottom: 1.3,
      },
      EN: {
        marginTop: 0.3,
      },
      PG: {
        marginTop: 0.3,
      },
    }}
  />
);
