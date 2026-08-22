import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VDD"],
  pin2: ["HB"],
  pin3: ["HO"],
  pin4: ["HS"],
  pin5: ["HI"],
  pin6: ["LI"],
  pin7: ["VSS"],
  pin8: ["LO"],
  pin9: ["EP"],
} as const;

const pinAttributes = {
  pin1: { requiresPower: true },
  pin7: { requiresGround: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin9: [...pinLabels["pin9"], "thermalpad"],
} as const;

export const UCC27201ADDAR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2653809"],
      }}
      manufacturerPartNumber="UCC27201ADDAR"
      footprint="soic8_thermalpad2.5mmx3.2mm_pillpads_w7.6mm_pl1.6mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2653809.obj?uuid=8a93c3c8e269400f8c283f37d8055e89",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2653809.step?uuid=8a93c3c8e269400f8c283f37d8055e89",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0.000012700000070253736, y: 0, z: -0.91 },
      }}
      {...props}
    />
  );
};

export default UCC27201ADDAR;
