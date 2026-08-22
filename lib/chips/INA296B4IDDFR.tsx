import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["IN_NEG"],
  pin2: ["GND"],
  pin3: ["REF2"],
  pin4: ["NC"],
  pin5: ["OUT"],
  pin6: ["VS"],
  pin7: ["REF1"],
  pin8: ["IN_POS"],
} as const;

const pinAttributes = {
  pin2: { requiresGround: true },
  pin4: { doNotConnect: true },
} as const;

export const INA296B4IDDFR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C20345453"],
      }}
      manufacturerPartNumber="INA296B4IDDFR"
      footprint="dfn8_pillpads_p0.65mm_w3.7041mm_pw0.35mm_pl1.252mm_pin1location(rightside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C20345453.obj?uuid=7304035254c941188b587adb626783d8",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C20345453.step?uuid=7304035254c941188b587adb626783d8",
        pcbRotationOffset: 180,
        modelOriginPosition: {
          x: 0,
          y: -0.000012699999956566899,
          z: -0.049083,
        },
      }}
      {...props}
    />
  );
};

export default INA296B4IDDFR;
