import { ChipProps } from "tscircuit";

export const DRV8876_PIN_LABELS = {
  pin1: "EN",
  pin2: "PH",
  pin3: "nSLEEP",
  pin4: "nFAULT",
  pin5: "VREF",
  pin6: "IPROPI",
  pin7: "IMODE",
  pin8: "OUT1",
  pin9: "PGND",
  pin10: "OUT2",
  pin11: "VM",
  pin12: "VCP",
  pin13: "CPH",
  pin14: "CPL",
  pin15: "GND",
  pin16: "PMODE",
};

export const DRV8876 = (props: ChipProps<any>) => (
  <chip
    {...props}
    pinLabels={DRV8876_PIN_LABELS}
    schPinStyle={{
      GND: {
        marginTop: 0.6,
        marginBottom: 0.6,
      },
      CPH: {
        marginTop: 0.6,
        marginBottom: 0.6,
      },
      VM: {
        marginTop: 0.6,
        marginBottom: 0.6,
      },
      OUT2: {
        marginBottom: 0.6,
      },
      IMODE: {
        marginTop: 0.6,
        marginBottom: 0.6,
      },
      nSLEEP: {
        marginTop: 0.6,
        marginBottom: 0.6,
      },
      VREF: {
        marginTop: 0.6,
        marginBottom: 0.6,
      },
      PH: {
        marginTop: 0.6,
      },
    }}
  />
);
