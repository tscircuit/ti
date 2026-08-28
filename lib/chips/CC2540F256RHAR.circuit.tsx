import type { ChipProps } from "@tscircuit/props";
import "tscircuit";

export const CC2540F256RHAR_PIN_LABELS = {
  pin1: ["DGND_USB", "GND_USB"],
  pin2: ["USB_P", "PA_DP"],
  pin3: ["USB_N", "PA_DM"],
  pin4: "DVDD_USB",
  pin5: "P1_5",
  pin6: "P1_4",
  pin7: "P1_3",
  pin8: "P1_2",
  pin9: "P1_1",
  pin10: "DVDD2",
  pin11: "P1_0",
  pin12: "P0_7",
  pin13: "P0_6",
  pin14: "P0_5",
  pin15: "P0_4",
  pin16: "P0_3",
  pin17: "P0_2",
  pin18: "P0_1",
  pin19: "P0_0",
  pin20: ["RESET_N", "nRESET"],
  pin21: "AVDD5",
  pin22: "XOSC_Q1",
  pin23: "XOSC_Q2",
  pin24: "AVDD3",
  pin25: "RF_P",
  pin26: "RF_N",
  pin27: "AVDD2",
  pin28: "AVDD1",
  pin29: "AVDD4",
  pin30: "RBIAS",
  pin31: "AVDD6",
  pin32: "P2_4",
  pin33: "P2_3",
  pin34: "P2_2",
  pin35: "P2_1",
  pin36: "P2_0",
  pin37: "P1_7",
  pin38: "P1_6",
  pin39: "DVDD1",
  pin40: "DCOUPL",
  pin41: ["GND", "EPAD", "thermalpad"],
} as const;

/** CC2540 BLE system-on-chip in TI's 40-pin RHA VQFN package. */
export const CC2540F256RHAR = (
  props: ChipProps<typeof CC2540F256RHAR_PIN_LABELS>,
) => (
  <chip
    manufacturerPartNumber="CC2540F256RHAR"
    pinLabels={CC2540F256RHAR_PIN_LABELS}
    footprint="qfn40_thermalpad4.7mmx4.7mm_p0.5001mm_h7.1mm_pl0.9mm"
    schWidth="5.2mm"
    schHeight="12.8mm"
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: [
          10, 39, 1, 2, 3, 4, 36, 35, 34, 11, 9, 8, 7, 6, 5, 38, 37, 19, 18, 17,
          16, 15, 14, 13, 12, 20,
        ],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: [21, 24, 27, 28, 29, 31, 25, 26, 32, 33, 22, 23, 40, 30, 41],
      },
    }}
    schPinStyle={{
      pin4: { marginBottom: 0.25 },
      pin34: { marginBottom: 0.25 },
      pin37: { marginBottom: 0.25 },
      pin20: { marginBottom: 0.2 },
      pin31: { marginBottom: 0.45 },
      pin26: { marginBottom: 0.45 },
      pin33: { marginBottom: 0.35 },
      pin23: { marginBottom: 0.35 },
      pin41: { marginBottom: 0.2 },
    }}
    noConnect={["P2_4", "P2_3"]}
    {...props}
  />
);

export default CC2540F256RHAR;
