import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VOUT"],
  pin2: ["GND"],
  pin3: ["OC"],
  pin4: ["ON"],
  pin5: ["VIN"],
} as const;

export const TPS22945DCKR = (props: ChipProps<typeof pinLabels>) => {
  const { name = "SW1", ...restProps } = props;

  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      name={name}
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C47507"],
      }}
      manufacturerPartNumber="TPS22945DCKR"
      footprint="dfn6_missing(5)_p0.6502mm_w2.52mm_pw0.315mm_pl0.835mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C47507.obj?uuid=c7f70410144b4181a75d6c56456eaf60",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C47507.step?uuid=c7f70410144b4181a75d6c56456eaf60",
        pcbRotationOffset: 90,
        modelOriginPosition: {
          x: -0.0001142999999501626,
          y: 0.000025400000026820635,
          z: -0.1,
        },
      }}
      {...restProps}
    />
  );
};

export default TPS22945DCKR;
