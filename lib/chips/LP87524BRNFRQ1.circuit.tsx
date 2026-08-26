import type { ChipProps } from "@tscircuit/props";
import "tscircuit";

const pinLabels = {
  pin1: "FB_B2",
  pin2: "EN3",
  pin3: "CLKIN",
  pin4: "AGND1",
  pin5: "SCL",
  pin6: "SDA",
  pin7: "EN1",
  pin8: "FB_B0",
  pin9: "VIN_B0",
  pin10: "SW_B0",
  pin11: "PGND_B01",
  pin12: "SW_B1",
  pin13: "VIN_B1",
  pin14: "FB_B1",
  pin15: "EN2",
  pin16: "PGOOD",
  pin17: "AGND2",
  pin18: "VANA",
  pin19: ["NINT", "nINT"],
  pin20: ["NRST", "nRST"],
  pin21: "FB_B3",
  pin22: "VIN_B3",
  pin23: "SW_B3",
  pin24: "PGND_B23",
  pin25: "SW_B2",
  pin26: "VIN_B2",
  pin27: ["EP", "PAD", "thermalpad"],
} as const;

const sourcePinPitch = 0.549591052;
const standardPinGap = sourcePinPitch - 0.2;

/** Four-phase automotive buck PMIC in TI's 26-pin RNF VQFN-HR package. */
export const LP87524BRNFRQ1 = (props: ChipProps<typeof pinLabels>) => (
  <chip
    manufacturerPartNumber="LP87524BRNFRQ1"
    datasheetUrl="https://www.ti.com/lit/ds/symlink/lp87524b-q1.pdf"
    footprint="qfn26_w4.5mm_h4mm_p0.5mm_pw0.25mm_pl0.7mm_thermalpad3.2mmx2.7mm"
    pinLabels={pinLabels}
    pinAttributes={{
      VIN_B0: { requiresPower: true },
      VIN_B1: { requiresPower: true },
      VIN_B2: { requiresPower: true },
      VIN_B3: { requiresPower: true },
      VANA: { requiresPower: true },
      AGND1: { requiresGround: true },
      AGND2: { requiresGround: true },
      PGND_B01: { requiresGround: true },
      PGND_B23: { requiresGround: true },
      EP: { requiresGround: true },
    }}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: [3, 5, 20, 9, 13, 26, 22, 7, 15, 2],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: [18, 6, 16, 19, 8, 14, 1, 21, 10, 12, 25, 23, 4, 17, 27, 11, 24],
      },
    }}
    schWidth={6.045502}
    schHeight={10.44223}
    schPinStyle={{
      CLKIN: { marginBottom: standardPinGap },
      SCL: { marginBottom: standardPinGap },
      NRST: { marginBottom: 1.448773233 },
      VIN_B0: { marginBottom: standardPinGap },
      VIN_B1: { marginBottom: standardPinGap },
      VIN_B2: { marginBottom: standardPinGap },
      VIN_B3: { marginBottom: 1.998364285 },
      EN1: { marginBottom: standardPinGap },
      EN2: { marginBottom: standardPinGap },
      EN3: { marginBottom: sourcePinPitch },
      SDA: { marginTop: 0.899182142 },
      PGOOD: { marginTop: standardPinGap },
      NINT: { marginTop: standardPinGap },
      FB_B0: { marginTop: standardPinGap },
      FB_B1: { marginTop: standardPinGap },
      FB_B2: { marginTop: standardPinGap },
      FB_B3: { marginTop: standardPinGap },
      SW_B0: { marginTop: standardPinGap },
      SW_B1: { marginTop: standardPinGap },
      SW_B2: { marginTop: standardPinGap },
      SW_B3: { marginTop: standardPinGap },
      AGND1: { marginTop: standardPinGap },
      AGND2: { marginTop: standardPinGap },
      EP: { marginTop: standardPinGap },
      PGND_B01: { marginTop: standardPinGap },
      PGND_B23: { marginTop: standardPinGap },
      VANA: { marginTop: sourcePinPitch },
    }}
    {...props}
  />
);

export default LP87524BRNFRQ1;
