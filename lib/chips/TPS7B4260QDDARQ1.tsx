import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["OUT"],
  pin2: ["DNC"],
  pin3: ["GND1"],
  pin4: ["FB"],
  pin5: ["pin5"],
  pin6: ["GND2"],
  pin7: ["NC"],
  pin8: ["IN"],
  pin9: ["GND3"],
} as const;

const pinAttributes = {
  pin3: { requiresGround: true },
  pin6: { requiresGround: true },
  pin7: { doNotConnect: true },
  pin9: { requiresGround: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin9: [...pinLabels["pin9"], "thermalpad"],
} as const;

export const TPS7B4260QDDARQ1 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C47002841"],
      }}
      manufacturerPartNumber="TPS7B4260QDDARQ1"
      footprint="soic8_thermalpad2mmx2.9mm_pillpads_w7.3822mm_pw0.602mm_pl1.941mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C47002841.obj?uuid=750ae687c4344e989e641fb520230628",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C47002841.step?uuid=750ae687c4344e989e641fb520230628",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.000012700000070253736, y: 0, z: -0.91 },
      }}
      {...props}
    />
  );
};

export default TPS7B4260QDDARQ1;
