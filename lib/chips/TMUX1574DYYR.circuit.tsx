import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["SEL"],
  pin2: ["S1A"],
  pin3: ["S1B"],
  pin4: ["D1"],
  pin5: ["S2A"],
  pin6: ["S2B"],
  pin7: ["D2"],
  pin8: ["GND"],
  pin9: ["D3"],
  pin10: ["S3B"],
  pin11: ["S3A"],
  pin12: ["D4"],
  pin13: ["S4B"],
  pin14: ["S4A"],
  pin15: ["EN"],
  pin16: ["VDD"],
} as const;

const pinAttributes = {
  pin8: { requiresGround: true },
  pin16: { requiresPower: true },
} as const;

export const TMUX1574DYYR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C1855769"],
      }}
      manufacturerPartNumber="TMUX1574DYYR"
      footprint="dfn16_p0.4999mm_w4.1382mm_pw0.3mm_pl1.138mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C1855769.obj?uuid=e7cdc114b7ae4c6f983b9a04c85a36e5",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C1855769.step?uuid=e7cdc114b7ae4c6f983b9a04c85a36e5",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: -0.000012700000013410317, z: -0.45 },
      }}
      {...props}
    />
  );
};

export default TMUX1574DYYR;
