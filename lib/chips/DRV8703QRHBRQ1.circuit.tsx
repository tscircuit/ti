import type { ChipProps } from "@tscircuit/props";
import "tscircuit";

export const DRV8703QRHBRQ1_PIN_LABELS = {
  pin1: "GND_1",
  pin2: "IN1_PH",
  pin3: "IN2_EN",
  pin4: "SDO",
  pin5: ["nSCS", "SCS"],
  pin6: "SDI",
  pin7: "SCLK",
  pin8: ["nSLEEP", "SLEEP"],
  pin9: ["nWDFLT", "WDFLT"],
  pin10: ["nFAULT", "FAULT"],
  pin11: "MODE",
  pin12: "DVDD",
  pin13: "GND_2",
  pin14: "AVDD",
  pin15: "VREF",
  pin16: "SO",
  pin17: "GND_3",
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
    manufacturerPartNumber="DRV8703QRHBRQ1"
    datasheetUrl="https://www.ti.com/lit/ds/symlink/drv8703-q1.pdf"
    footprint="kicad:Package_DFN_QFN/Texas_RHB0032E_VQFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm"
    schWidth="2.193377mm"
    schHeight="5.849004mm"
    pinLabels={DRV8703QRHBRQ1_PIN_LABELS}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: [14, 12, 28, 27, 29, 30, 31, 2, 3, 8, 11, 9, 7, 6, 4, 5],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: [18, 19, 20, 26, 25, 24, 23, 21, 22, 16, 15, 10, 32],
      },
      bottomSide: {
        direction: "left-to-right",
        pins: [1, 13, 17, 33],
      },
    }}
    {...props}
  />
);

export default DRV8703QRHBRQ1;
