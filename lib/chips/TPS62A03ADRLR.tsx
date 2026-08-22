import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["GND"],
  pin2: ["SW"],
  pin3: ["VIN"],
  pin4: ["EN"],
  pin5: ["FB"],
  pin6: ["PG"],
} as const;

const pinAttributes = {
  pin1: { requiresGround: true },
  pin3: { requiresPower: true },
} as const;

export const TPS62A03ADRLR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C44545585"],
      }}
      manufacturerPartNumber="TPS62A03ADRLR"
      footprint="sot563_p0.4999mm_pw0.3mm_pl0.6mm_pin1location(rightside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C44545585.obj?uuid=ec2270bac0544bf5afe06b24e8356512",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C44545585.step?uuid=ec2270bac0544bf5afe06b24e8356512",
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

export default TPS62A03ADRLR;
