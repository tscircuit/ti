import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["1B"],
  pin2: ["2B"],
  pin3: ["3B"],
  pin4: ["4B"],
  pin5: ["5B"],
  pin6: ["6B"],
  pin7: ["7B"],
  pin8: ["8B"],
  pin9: ["GND"],
  pin10: ["NC2"],
  pin11: ["NC1"],
  pin12: ["COM"],
  pin13: ["8C"],
  pin14: ["7C"],
  pin15: ["6C"],
  pin16: ["5C"],
  pin17: ["4C"],
  pin18: ["3C"],
  pin19: ["2C"],
  pin20: ["1C"],
} as const;

const pinAttributes = {
  pin9: { requiresGround: true },
  pin10: { doNotConnect: true },
  pin11: { doNotConnect: true },
} as const;

export const ULN2803CDWR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C7494313"],
      }}
      manufacturerPartNumber="ULN2803CDWR"
      footprint="soic20_pillpads_w11.7mm_pl2.3mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C7494313.obj?uuid=f802a94fc95e42bebc73c20bec55bb23",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C7494313.step?uuid=f802a94fc95e42bebc73c20bec55bb23",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0.000012699999956566899, z: -1.35 },
      }}
      {...props}
    />
  );
};

export default ULN2803CDWR;
