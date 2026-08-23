import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["IN_POS"],
  pin2: ["V_NEG"],
  pin3: ["IN_NEG"],
  pin4: ["OUT"],
  pin5: ["V_POS"],
} as const;

export const OPA310IDCKR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C20345589"],
      }}
      manufacturerPartNumber="OPA310IDCKR"
      footprint="dfn6_missing(5)_p0.65mm_w3.0502mm_pw0.35mm_pl0.85mm_pin1location(rightside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C20345589.obj?uuid=bf34fed377a64201a7f6265c34f66c0f",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C20345589.step?uuid=bf34fed377a64201a7f6265c34f66c0f",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0.000012699999842880061, y: 0, z: -0.53 },
      }}
      {...props}
    />
  );
};

export default OPA310IDCKR;
