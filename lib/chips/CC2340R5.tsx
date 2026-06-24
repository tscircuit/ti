import type { ChipProps } from "tscircuit";

const pinLabels = {
  pin1: "VDDR",
  pin2: "DIO8",
  pin3: "DIO9",
  pin4: "DIO10",
  pin5: "DIO11",
  pin6: "DIO12",
  pin7: "DIO13",
  pin8: "VDDS",
  pin9: "DIO14",
  pin10: "DIO15",
  pin11: "DIO16_SWDIO",
  pin12: "DIO17_SWDCK",
  pin13: "DIO18",
  pin14: "DIO19",
  pin15: "DIO20_A11",
  pin16: "DIO21_A10",
  pin17: "VDDS",
  pin18: "DIO22_A9",
  pin19: "DIO23_A8",
  pin20: "DIO24_A7",
  pin21: "DIO25_A6",
  pin22: "DIO0_A5",
  pin23: "DIO1_A4",
  pin24: "DIO2_A3",
  pin25: "nRST",
  pin26: "DIO3_X32_P",
  pin27: "DIO4_X32_N",
  pin28: "VDDD",
  pin29: "DIO5_A2",
  pin30: "DCDC",
  pin31: "VDDS",
  pin32: "DIO6_A1",
  pin33: "DIO7_A0",
  pin34: "VDDR",
  pin35: "X48_P",
  pin36: "X48_N",
  pin37: "NC",
  pin38: "VDDS",
  pin39: "ANT",
  pin40: "RFGND",
  pin41: "EGP",
} as const;

export const CC2340R5 = (props: ChipProps<typeof pinLabels>) => (
  <chip
    {...props}
    footprint="qfn40_p0.4mm_thermalpad"
    manufacturerPartNumber="CC2340R53E0RKP"
    pinLabels={pinLabels}
    pinAttributes={{
      nRST: { mustBeConnected: true, requiresPower: true },
      EGP: { requiresGround: true },
      RFGND: { requiresGround: true },
    }}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: [
          "DIO16_SWDIO",
          "DIO17_SWDCK",
          "nRST",
          "DCDC",
          "pin1",
          "pin34",
          "DIO3_X32_P",
          "DIO4_X32_N",
          "NC",
          "VDDD",
          "EGP",
        ],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: [
          "pin8",
          "pin17",
          "pin31",
          "pin38",
          "ANT",
          "RFGND",
          "X48_P",
          "X48_N",
        ],
      },
    }}
    schPinStyle={{
      nRST: {
        marginBottom: 0.2,
      },
      DCDC: {
        marginBottom: 0.2,
      },
      DIO3_X32_P: {
        marginTop: 0.2,
      },
      pin8: {
        marginTop: 0,
      },
      ANT: {
        marginTop: 0.5,
      },
      RFGND: {
        marginTop: 0.2,
      },
      X48_P: {
        marginTop: 0.5,
      },
    }}
  />
);
