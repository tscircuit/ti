import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VIN"],
  pin2: ["FB"],
  pin3: ["COMP"],
  pin4: ["VCC"],
  pin5: ["OUT"],
  pin6: ["GND"],
  pin7: ["UVLO"],
  pin8: ["CS"],
  pin9: ["pin9"],
  pin10: ["SS"],
} as const;

const pinAttributes = {
  pin1: { requiresPower: true },
  pin4: { requiresPower: true },
  pin6: { requiresGround: true },
} as const;

export const LM5020MM_2_NOPB = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C527524"],
      }}
      manufacturerPartNumber="LM5020MM-2/NOPB"
      footprint="ssop10_p0.4964mm_w4.4528mm_pw0.3023mm_pl1.3096mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C527524.obj?uuid=854098f5cce54b6caab82164a7d3deef",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C527524.step?uuid=854098f5cce54b6caab82164a7d3deef",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0.000012699999999199463, y: 0, z: -0.149083 },
      }}
      {...props}
    />
  );
};

export default LM5020MM_2_NOPB;
