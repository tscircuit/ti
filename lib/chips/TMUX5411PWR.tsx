import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["SEL1"],
  pin2: ["D1"],
  pin3: ["S1"],
  pin4: ["VSS"],
  pin5: ["GND"],
  pin6: ["S4"],
  pin7: ["D4"],
  pin8: ["SEL4"],
  pin9: ["SEL3"],
  pin10: ["D3"],
  pin11: ["S3"],
  pin12: ["pin12"],
  pin13: ["VDD"],
  pin14: ["S2"],
  pin15: ["D2"],
  pin16: ["SEL2"],
} as const;

const pinAttributes = {
  pin4: { requiresGround: true },
  pin5: { requiresGround: true },
  pin13: { requiresPower: true },
} as const;

export const TMUX5411PWR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C53120586"],
      }}
      manufacturerPartNumber="TMUX5411PWR"
      footprint="ssop16_p0.6454mm_w5.3264mm_pw0.3615mm_pl1.5712mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C53120586.obj?uuid=b59f40f7d9804f4f87a352e4193ad8e9",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C53120586.step?uuid=b59f40f7d9804f4f87a352e4193ad8e9",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.6 },
      }}
      {...props}
    />
  );
};

export default TMUX5411PWR;
