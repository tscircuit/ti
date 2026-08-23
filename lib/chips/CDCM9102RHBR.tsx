import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VDD2"],
  pin2: ["OUT1N"],
  pin3: ["OUT1P"],
  pin4: ["VDD1"],
  pin5: ["OUT0N"],
  pin6: ["OUT0P"],
  pin7: ["OE"],
  pin8: ["NC12"],
  pin9: ["VDD3"],
  pin10: ["OS1"],
  pin11: ["OS0"],
  pin12: ["RESET"],
  pin13: ["NC1"],
  pin14: ["GND2"],
  pin15: ["NC2"],
  pin16: ["VDD4"],
  pin17: ["REGCAP2"],
  pin18: ["VDD5"],
  pin19: ["REGCAP1"],
  pin20: ["VDD6"],
  pin21: ["XIN"],
  pin22: ["GND3"],
  pin23: ["OSCOUT"],
  pin24: ["NC11"],
  pin25: ["NC3"],
  pin26: ["NC4"],
  pin27: ["NC5"],
  pin28: ["NC6"],
  pin29: ["NC7"],
  pin30: ["NC8"],
  pin31: ["NC9"],
  pin32: ["NC10"],
  pin33: ["GND1"],
} as const;

const pinAttributes = {
  pin1: { requiresPower: true },
  pin4: { requiresPower: true },
  pin8: { doNotConnect: true },
  pin9: { requiresPower: true },
  pin13: { doNotConnect: true },
  pin14: { requiresGround: true },
  pin15: { doNotConnect: true },
  pin16: { requiresPower: true },
  pin18: { requiresPower: true },
  pin20: { requiresPower: true },
  pin22: { requiresGround: true },
  pin24: { doNotConnect: true },
  pin25: { doNotConnect: true },
  pin26: { doNotConnect: true },
  pin27: { doNotConnect: true },
  pin28: { doNotConnect: true },
  pin29: { doNotConnect: true },
  pin30: { doNotConnect: true },
  pin31: { doNotConnect: true },
  pin32: { doNotConnect: true },
  pin33: { requiresGround: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin33: [...pinLabels["pin33"], "thermalpad"],
} as const;

export const CDCM9102RHBR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C882839"],
      }}
      manufacturerPartNumber="CDCM9102RHBR"
      footprint="qfn32_thermalpad3.6mmx3.6mm_pillpads_p0.4999mm_pw0.28mm_pl0.8mm_pin1location(bottomside,left)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C882839.obj?uuid=fd060a8d6128465884d1a5229a9dc05e",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C882839.step?uuid=fd060a8d6128465884d1a5229a9dc05e",
        pcbRotationOffset: 90,
        modelOriginPosition: {
          x: -0.00020320000001561311,
          y: -0.00021590000001481258,
          z: -0.02,
        },
      }}
      {...props}
    />
  );
};

export default CDCM9102RHBR;
