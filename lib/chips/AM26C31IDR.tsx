import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["1A"],
  pin2: ["1Y"],
  pin3: ["1Z"],
  pin4: ["G1"],
  pin5: ["2Z"],
  pin6: ["2Y"],
  pin7: ["2A"],
  pin8: ["GND"],
  pin9: ["3A"],
  pin10: ["3Y"],
  pin11: ["3Z"],
  pin12: ["G2"],
  pin13: ["4Z"],
  pin14: ["4Y"],
  pin15: ["4A"],
  pin16: ["VCC"],
} as const;

const pinAttributes = {
  pin8: { requiresGround: true },
  pin16: { requiresPower: true },
} as const;

export const AM26C31IDR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C34923"],
      }}
      manufacturerPartNumber="AM26C31IDR"
      footprint="soic16_pillpads_w7.4421mm_pw0.602mm_pl1.971mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C34923.obj?uuid=9adfdf34b7774b23880141fd3e8b4dbb",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C34923.step?uuid=9adfdf34b7774b23880141fd3e8b4dbb",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.000012699999842880061, y: 0, z: 0.000575 },
      }}
      {...props}
    />
  );
};

export default AM26C31IDR;
