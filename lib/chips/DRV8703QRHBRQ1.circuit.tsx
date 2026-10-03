import type { ChipProps } from "@tscircuit/props";
import "tscircuit";

export const DRV8703QRHBRQ1_PIN_LABELS = {
  pin1: ["GND", "GND_1"],
  pin2: "IN1_PH",
  pin3: "IN2_EN",
  pin4: "SDO",
  pin5: ["SCS", "nSCS"],
  pin6: "SDI",
  pin7: "SCLK",
  pin8: ["SLEEP", "nSLEEP"],
  pin9: ["WDFLT", "nWDFLT"],
  pin10: ["FAULT", "nFAULT"],
  pin11: "MODE",
  pin12: "DVDD",
  pin13: ["GND", "GND_2"],
  pin14: "AVDD",
  pin15: "VREF",
  pin16: "SO",
  pin17: ["GND", "GND_3"],
  pin18: "GH1",
  pin19: "SH1",
  pin20: "GL1",
  pin21: "SP",
  pin22: "SN",
  pin23: "SL2",
  pin24: "GL2",
  pin25: "SH2",
  pin26: "GH2",
  pin27: "VDRAIN",
  pin28: ["PVDD", "VM"],
  pin29: "VCP",
  pin30: "CPH",
  pin31: "CPL",
  pin32: "NC",
  pin33: ["PAD", "THERMAL_PAD"],
} as const;

/** DRV8703-Q1 automotive H-bridge gate driver in the 32-pin RHB VQFN. */
export const DRV8703QRHBRQ1 = (
  props: ChipProps<typeof DRV8703QRHBRQ1_PIN_LABELS>,
) => (
  <chip
    pinLabels={DRV8703QRHBRQ1_PIN_LABELS}
    manufacturerPartNumber="DRV8703QRHBRQ1"
    datasheetUrl="https://www.ti.com/lit/ds/symlink/drv8703-q1.pdf"
    footprint="kicad:Package_DFN_QFN/Texas_RHB0032E_VQFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm"
    schWidth={2.2}
    schHeight={5.85}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: [14, 12, 28, 27, 29, 30, 31, 2, 3, 8, 11, 9, 7, 6, 4, 5],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: [
          18, 19, 20, 26, 25, 24, 23, 21, 22, 16, 15, 10, 32, 1, 13, 17, 33,
        ],
      },
    }}
    schPinStyle={{
      pin14: { marginBottom: 0.165563 },
      pin12: { marginBottom: 0.165563 },
      pin28: { marginBottom: 0.165562 },
      pin27: { marginBottom: 0.165563 },
      // Separate the VCP, CPH and CPL autorouter lanes without shifting IN1/PH.
      pin29: { marginBottom: 0.265563 },
      pin30: { marginBottom: 0.448344 },
      pin31: { marginBottom: -0.034437 },
      pin2: { marginBottom: 0.165563 },
      pin3: { marginBottom: 0.165562 },
      pin8: { marginBottom: 0.165563 },
      pin11: { marginBottom: 0.165563 },
      pin9: { marginBottom: 0.165563 },
      pin7: { marginBottom: -0.017219 },
      pin6: { marginBottom: -0.017219 },
      pin4: { marginBottom: -0.017218 },
      pin18: { marginBottom: 0.165563 },
      pin19: { marginBottom: 0.165563 },
      pin20: { marginBottom: 0.165562 },
      pin26: { marginBottom: 0.165563 },
      pin25: { marginBottom: 0.165563 },
      pin24: { marginBottom: 0.165563 },
      pin23: { marginBottom: 0.165562 },
      pin21: { marginBottom: 0.165563 },
      pin22: { marginBottom: 0.165563 },
      pin16: { marginBottom: 0.165563 },
      pin15: { marginBottom: 0.165563 },
      pin10: { marginBottom: 0.165562 },
      pin32: { marginBottom: 0.165563 },
      pin1: { marginBottom: -0.017219 },
      pin13: { marginBottom: -0.017219 },
      pin17: { marginBottom: -0.017218 },
    }}
    {...props}
  />
);

export default DRV8703QRHBRQ1;
