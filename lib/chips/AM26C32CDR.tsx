import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["1B"],
  pin2: ["1A"],
  pin3: ["1Y"],
  pin4: ["G2"],
  pin5: ["2Y"],
  pin6: ["2A"],
  pin7: ["2B"],
  pin8: ["GND"],
  pin9: ["3B"],
  pin10: ["3A"],
  pin11: ["3Y"],
  pin12: ["G1"],
  pin13: ["4Y"],
  pin14: ["4A"],
  pin15: ["4B"],
  pin16: ["VCC"],
} as const;

const pinAttributes = {
  pin8: { requiresGround: true },
  pin16: { requiresPower: true },
} as const;

export const AM26C32CDR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2671089"],
      }}
      manufacturerPartNumber="AM26C32CDR"
      footprint="soic16_pillpads_w7.7436mm_pl1.8mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2671089.obj?uuid=19d62df4453549be81db7b702f301941",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2671089.step?uuid=19d62df4453549be81db7b702f301941",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.000012700000013410317, y: 0, z: 0.000575 },
      }}
      {...props}
    />
  );
};

export default AM26C32CDR;
