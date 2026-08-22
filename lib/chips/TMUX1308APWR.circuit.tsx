import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["S4"],
  pin2: ["S6"],
  pin3: ["D"],
  pin4: ["S7"],
  pin5: ["S5"],
  pin6: ["EN"],
  pin7: ["pin7"],
  pin8: ["GND"],
  pin9: ["A2"],
  pin10: ["A1"],
  pin11: ["A0"],
  pin12: ["S3"],
  pin13: ["S0"],
  pin14: ["S1"],
  pin15: ["S2"],
  pin16: ["VDD"],
} as const;

const pinAttributes = {
  pin8: { requiresGround: true },
  pin16: { requiresPower: true },
} as const;

export const TMUX1308APWR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C39707757"],
      }}
      manufacturerPartNumber="TMUX1308APWR"
      footprint="dfn16_pillpads_p0.636mm_w7.4554mm_pw0.343mm_pl1.7315mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C39707757.obj?uuid=32273a92b8074b7598b0ba89d6e41843",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C39707757.step?uuid=32273a92b8074b7598b0ba89d6e41843",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.000012699999842880061, y: 0, z: -0.6 },
      }}
      {...props}
    />
  );
};

export default TMUX1308APWR;
