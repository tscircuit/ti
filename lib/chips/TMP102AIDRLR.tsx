import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["SCL"],
  pin2: ["GND"],
  pin3: ["ALERT"],
  pin4: ["ADD0"],
  pin5: ["V_POS"],
  pin6: ["SDA"],
} as const;

const pinAttributes = {
  pin2: { requiresGround: true },
} as const;

export const TMP102AIDRLR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C99269"],
      }}
      manufacturerPartNumber="TMP102AIDRLR"
      footprint="sot563_p0.4999mm_pw0.3mm_pl0.6mm_pin1location(rightside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C99269.obj?uuid=ec2270bac0544bf5afe06b24e8356512",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C99269.step?uuid=ec2270bac0544bf5afe06b24e8356512",
        pcbRotationOffset: 180,
        modelOriginPosition: {
          x: -0.00005079999999679785,
          y: 0.029921200000003978,
          z: 0,
        },
      }}
      {...props}
    />
  );
};

export default TMP102AIDRLR;
