import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VDD1"],
  pin2: ["IN"],
  pin3: ["GND11"],
  pin4: ["GND12"],
  pin5: ["GND2"],
  pin6: ["OUTN"],
  pin7: ["OUTP"],
  pin8: ["VDD2"],
} as const;

const pinAttributes = {
  pin1: { requiresPower: true },
  pin3: { requiresGround: true },
  pin4: { requiresGround: true },
  pin5: { requiresGround: true },
  pin8: { requiresPower: true },
} as const;

export const AMC1351QDWVRQ1 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C5214207"],
      }}
      manufacturerPartNumber="AMC1351QDWVRQ1"
      footprint="soic8_pillpads_w12.7002mm_pl1.8mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C5214207.obj?uuid=0c2b0c5769684830a3d8e8d39172fb8a",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C5214207.step?uuid=0c2b0c5769684830a3d8e8d39172fb8a",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: -0.000012700000070253736, y: 0, z: 0 },
      }}
      {...props}
    />
  );
};

export default AMC1351QDWVRQ1;
