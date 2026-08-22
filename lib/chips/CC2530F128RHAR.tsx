import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["GND1"],
  pin2: ["GND2"],
  pin3: ["GND3"],
  pin4: ["GND4"],
  pin5: ["P1_5"],
  pin6: ["P1_4"],
  pin7: ["P1_3"],
  pin8: ["P1_2"],
  pin9: ["P1_1"],
  pin10: ["DVDD2"],
  pin11: ["P1_0"],
  pin12: ["P0_7"],
  pin13: ["P0_6"],
  pin14: ["P0_5"],
  pin15: ["P0_4"],
  pin16: ["P0_3"],
  pin17: ["P0_2"],
  pin18: ["P0_1"],
  pin19: ["P0_0"],
  pin20: ["RESET_N"],
  pin21: ["AVDD5"],
  pin22: ["XOSC_Q1"],
  pin23: ["XOSC_Q2"],
  pin24: ["AVDD3"],
  pin25: ["RF_P"],
  pin26: ["RF_N"],
  pin27: ["AVDD2"],
  pin28: ["AVDD1"],
  pin29: ["AVDD4"],
  pin30: ["RBIAS"],
  pin31: ["AVDD6"],
  pin32: ["pin32"],
  pin33: ["pin33"],
  pin34: ["P2_2"],
  pin35: ["P2_1"],
  pin36: ["P2_0"],
  pin37: ["P1_7"],
  pin38: ["P1_6"],
  pin39: ["DVDD1"],
  pin40: ["DCOUPL"],
  pin41: ["GND5"],
} as const;

const pinAttributes = {
  pin1: { requiresGround: true },
  pin2: { requiresGround: true },
  pin3: { requiresGround: true },
  pin4: { requiresGround: true },
  pin41: { requiresGround: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin41: [...pinLabels["pin41"], "thermalpad"],
} as const;

export const CC2530F128RHAR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2151584"],
      }}
      manufacturerPartNumber="CC2530F128RHAR"
      footprint="qfn40_thermalpad4.5mmx4.5mm_p0.4999mm_h6.6801mm_pw0.28mm_pl0.665mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2151584.obj?uuid=06520a4956e044679a0f1d3accab8c7e",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2151584.step?uuid=06520a4956e044679a0f1d3accab8c7e",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0.000012700000070253736, y: 0, z: -0.02 },
      }}
      {...props}
    />
  );
};

export default CC2530F128RHAR;
