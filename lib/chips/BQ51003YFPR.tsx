import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin6: ["AC1", "B3", "AC1_B3"],
  pin5: ["AC1", "B4", "AC1_B4"],
  pin8: ["AC2", "B1", "AC2_B1"],
  pin7: ["AC2", "B2", "AC2_B2"],
  pin13: ["AD", "G4"],
  pin23: ["AD_EN", "F3"],
  pin9: ["BOOT1", "C4"],
  pin16: ["BOOT2", "C1"],
  pin12: ["CHG", "F4"],
  pin20: ["CLAMP1", "E3"],
  pin21: ["CLAMP2", "E2"],
  pin11: ["COMM1", "E4"],
  pin22: ["COMM2", "E1"],
  pin26: ["EN1", "G3"],
  pin27: ["EN2", "G2"],
  pin24: ["FOD", "F2"],
  pin28: ["ILIM", "G1"],
  pin19: ["OUT", "D1", "OUT_D1"],
  pin18: ["OUT", "D2", "OUT_D2"],
  pin17: ["OUT", "D3", "OUT_D3"],
  pin10: ["OUT", "D4", "OUT_D4"],
  pin4: ["PGND", "A1", "PGND_A1"],
  pin3: ["PGND", "A2", "PGND_A2"],
  pin2: ["PGND", "A3", "PGND_A3"],
  pin1: ["PGND", "A4", "PGND_A4"],
  pin15: ["RECT", "C2", "RECT_C2"],
  pin14: ["RECT", "C3", "RECT_C3"],
  pin25: ["TS_CTRL", "F1"],
} as const;

const pinRoles = {
  pin6: "input",
  pin5: "input",
  pin8: "input",
  pin7: "input",
  pin13: "input",
  pin23: "output",
  pin9: "output",
  pin16: "output",
  pin12: "power",
  pin20: "power",
  pin21: "output",
  pin11: "output",
  pin22: "output",
  pin26: "input",
  pin27: "input",
  pin24: "input",
  pin28: "power",
  pin19: "output",
  pin18: "output",
  pin17: "output",
  pin10: "output",
  pin4: "ground",
  pin3: "ground",
  pin2: "ground",
  pin1: "ground",
  pin15: "output",
  pin14: "output",
  pin25: "input",
} as const;

const pinAttributes = {
  pin12: {
    requiresPower: true,
  },
  pin20: {
    requiresPower: true,
  },
  pin28: {
    requiresPower: true,
  },
  pin4: {
    requiresGround: true,
  },
  pin3: {
    requiresGround: true,
  },
  pin2: {
    requiresGround: true,
  },
  pin1: {
    requiresGround: true,
  },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin13: [...pinLabels["pin13"], "pin1"],
  pin12: [...pinLabels["pin12"], "pin2"],
  pin11: [...pinLabels["pin11"], "pin3"],
  pin10: [...pinLabels["pin10"], "pin4"],
  pin9: [...pinLabels["pin9"], "pin5"],
  pin5: [...pinLabels["pin5"], "pin6"],
  pin1: [...pinLabels["pin1"], "pin7"],
  pin26: [...pinLabels["pin26"], "pin8"],
  pin23: [...pinLabels["pin23"], "pin9"],
  pin20: [...pinLabels["pin20"], "pin10"],
  pin17: [...pinLabels["pin17"], "pin11"],
  pin14: [...pinLabels["pin14"], "pin12"],
  pin6: [...pinLabels["pin6"], "pin13"],
  pin2: [...pinLabels["pin2"], "pin14"],
  pin27: [...pinLabels["pin27"], "pin15"],
  pin24: [...pinLabels["pin24"], "pin16"],
  pin21: [...pinLabels["pin21"], "pin17"],
  pin15: [...pinLabels["pin15"], "pin19"],
  pin7: [...pinLabels["pin7"], "pin20"],
  pin3: [...pinLabels["pin3"], "pin21"],
  pin28: [...pinLabels["pin28"], "pin22"],
  pin25: [...pinLabels["pin25"], "pin23"],
  pin22: [...pinLabels["pin22"], "pin24"],
  pin19: [...pinLabels["pin19"], "pin25"],
  pin16: [...pinLabels["pin16"], "pin26"],
  pin8: [...pinLabels["pin8"], "pin27"],
  pin4: [...pinLabels["pin4"], "pin28"],
} as const;

export const BQ51003YFPR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C134093"],
      }}
      manufacturerPartNumber="BQ51003YFPR"
      footprint="bga28_grid7x4_p0.3998mm_pad0.19mm_pin1location(rightside,top)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C134093.obj?uuid=0f493b34f63d4e10bc9384aab42c2abb",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C134093.step?uuid=0f493b34f63d4e10bc9384aab42c2abb",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: 0.006477000000018052,
          y: 0.011430000000018481,
          z: -0.48,
        },
      }}
      {...props}
    />
  );
};

export default BQ51003YFPR;
