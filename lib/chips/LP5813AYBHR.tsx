import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin8: ["EN", "A1"],
  pin12: ["VIN", "A2"],
  pin11: ["SW", "A3"],
  pin7: ["OUT0", "B1"],
  pin9: ["GND", "B2"],
  pin10: ["VOUT", "B3"],
  pin4: ["OUT1", "C1"],
  pin5: ["SYNC", "C2"],
  pin6: ["SCL", "C3"],
  pin3: ["OUT2", "D1"],
  pin2: ["OUT3", "D2"],
  pin1: ["SDA", "D3"],
} as const;

const pinRoles = {
  pin8: "input",
  pin12: "power",
  pin11: "power",
  pin7: "output",
  pin9: "ground",
  pin10: "power",
  pin4: "output",
  pin5: "bidirectional",
  pin6: "input",
  pin3: "output",
  pin2: "output",
  pin1: "bidirectional",
} as const;

const pinAttributes = {
  pin12: {
    requiresPower: true,
  },
  pin11: {
    requiresPower: true,
  },
  pin9: {
    requiresGround: true,
  },
  pin10: {
    requiresPower: true,
  },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin8: [...pinLabels["pin8"], "pin1"],
  pin7: [...pinLabels["pin7"], "pin2"],
  pin4: [...pinLabels["pin4"], "pin3"],
  pin3: [...pinLabels["pin3"], "pin4"],
  pin12: [...pinLabels["pin12"], "pin5"],
  pin9: [...pinLabels["pin9"], "pin6"],
  pin5: [...pinLabels["pin5"], "pin7"],
  pin2: [...pinLabels["pin2"], "pin8"],
  pin11: [...pinLabels["pin11"], "pin9"],
  pin6: [...pinLabels["pin6"], "pin11"],
  pin1: [...pinLabels["pin1"], "pin12"],
} as const;

export const LP5813AYBHR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C34893496"],
      }}
      manufacturerPartNumber="LP5813AYBHR"
      footprint="bga12_grid4x3_p0.3998mm_pad0.2mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C34893496.obj?uuid=f8d94c18ddfd48789bd3f8137b13dbf9",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C34893496.step?uuid=f8d94c18ddfd48789bd3f8137b13dbf9",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.000012700000070253736, y: 0, z: -0.195 },
      }}
      {...props}
    />
  );
};

export default LP5813AYBHR;
