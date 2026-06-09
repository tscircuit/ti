import { ChipProps } from "tscircuit";

export const TPS6293_PIN_LABELS = {
  pin1: "VIN",
  pin2: "EN",
  pin3: "SS",
  pin4: "RT",
  pin5: "GND",
  pin6: "FB",
  pin7: "SW",
  pin8: "BST",
};

export const TPS6293 = (props: ChipProps<any>) => (
  <chip
    {...props}
    pinLabels={TPS6293_PIN_LABELS}
    schPinStyle={{
      VIN: {
        marginBottom: 0.2,
      },
      EN: {
        marginBottom: 0.2,
      },
      SS: {
        marginBottom: 0.2,
      },
      BST: {
        marginBottom: 0.2,
      },
      SW: {
        marginBottom: 0.2,
      },
      FB: {
        marginBottom: 0.2,
      },
    }}
  />
);
