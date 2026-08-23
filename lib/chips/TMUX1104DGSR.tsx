import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["A0"],
  pin2: ["S1"],
  pin3: ["GND"],
  pin4: ["S3"],
  pin5: ["EN"],
  pin6: ["VDD"],
  pin7: ["S4"],
  pin8: ["D"],
  pin9: ["S2"],
  pin10: ["A1"],
} as const;

const pinAttributes = {
  pin3: { requiresGround: true },
  pin6: { requiresPower: true },
} as const;

export const TMUX1104DGSR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2879206"],
      }}
      manufacturerPartNumber="TMUX1104DGSR"
      footprint="ssop10_p0.4964mm_w4.4528mm_pw0.3023mm_pl1.3096mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2879206.obj?uuid=854098f5cce54b6caab82164a7d3deef",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2879206.step?uuid=854098f5cce54b6caab82164a7d3deef",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0.000012699999999199463, y: 0, z: -0.149083 },
      }}
      {...props}
    />
  );
};

export default TMUX1104DGSR;
