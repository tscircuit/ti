import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VDD"],
  pin2: ["GND"],
  pin3: ["OUT_NEG"],
  pin4: ["OUT_POS"],
  pin5: ["pin5"],
} as const;

const pinAttributes = {
  pin1: { requiresPower: true },
  pin2: { requiresGround: true },
} as const;

export const DS90LV011ATMF_NOPB = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C477970"],
      }}
      manufacturerPartNumber="DS90LV011ATMF/NOPB"
      footprint="dfn6_missing(5)_p0.95mm_w3.2001mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C477970.obj?uuid=de83a77687e64788a98e316d865b3813",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C477970.step?uuid=de83a77687e64788a98e316d865b3813",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.75 },
      }}
      {...props}
    />
  );
};

export default DS90LV011ATMF_NOPB;
