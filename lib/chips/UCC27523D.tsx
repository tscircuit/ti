import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["ENA"],
  pin2: ["INA"],
  pin3: ["GND"],
  pin4: ["INB"],
  pin5: ["OUTB"],
  pin6: ["VDD"],
  pin7: ["OUTA"],
  pin8: ["ENB"],
} as const;

const pinAttributes = {
  pin3: { requiresGround: true },
  pin6: { requiresPower: true },
} as const;

export const UCC27523D = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C206023"],
      }}
      manufacturerPartNumber="UCC27523D"
      footprint="soic8_pillpads_w6.9999mm_pw0.588mm_pl1.8mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C206023.obj?uuid=ec3b9f9b31a74655be3e55848dbee9c1",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C206023.step?uuid=ec3b9f9b31a74655be3e55848dbee9c1",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.000012700000070253736, y: 0, z: 0 },
      }}
      {...props}
    />
  );
};

export default UCC27523D;
