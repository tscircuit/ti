import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["OUT"],
  pin2: ["GND3"],
  pin3: ["SENSE"],
  pin4: ["GND2"],
  pin5: ["VDD"],
  pin6: ["GND1"],
} as const;

const pinAttributes = {
  pin2: { requiresGround: true },
  pin4: { requiresGround: true },
  pin5: { requiresPower: true },
  pin6: { requiresGround: true },
} as const;

export const TPS3710DDCR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C140262"],
      }}
      manufacturerPartNumber="TPS3710DDCR"
      footprint="dfn6_p0.95mm_w3.6mm_pw0.55mm_pl1.2mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C140262.obj?uuid=222e8593009c495bb3d3af0c08fa5e6a",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C140262.step?uuid=222e8593009c495bb3d3af0c08fa5e6a",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0, y: 0.000012700000013410317, z: 0.050795 },
      }}
      {...props}
    />
  );
};

export default TPS3710DDCR;
