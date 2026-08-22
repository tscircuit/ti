import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["ANODE"],
  pin2: ["pin2"],
  pin3: ["CATHODE"],
  pin4: ["NC1"],
  pin5: ["NC2"],
} as const;

const pinAttributes = {
  pin4: { doNotConnect: true },
  pin5: { doNotConnect: true },
} as const;

export const LM4041CIDCKR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2156783"],
      }}
      manufacturerPartNumber="LM4041CIDCKR"
      footprint="dfn6_missing(5)_p0.65mm_w3.0502mm_pw0.35mm_pl0.85mm_pin1location(rightside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2156783.obj?uuid=bf34fed377a64201a7f6265c34f66c0f",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2156783.step?uuid=bf34fed377a64201a7f6265c34f66c0f",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0.000012699999842880061, y: 0, z: -0.53 },
      }}
      {...props}
    />
  );
};

export default LM4041CIDCKR;
