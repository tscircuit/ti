import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["NC"],
  pin2: ["GND1"],
  pin3: ["VOUT"],
  pin4: ["V_POS"],
  pin5: ["GND2"],
} as const;

const pinAttributes = {
  pin1: { doNotConnect: true },
  pin2: { requiresGround: true },
  pin5: { requiresGround: true },
} as const;

export const TMP20AIDCKR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C485987"],
      }}
      manufacturerPartNumber="TMP20AIDCKR"
      footprint="dfn6_missing(5)_p0.6502mm_w2.52mm_pw0.315mm_pl0.835mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C485987.obj?uuid=c7f70410144b4181a75d6c56456eaf60",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C485987.step?uuid=c7f70410144b4181a75d6c56456eaf60",
        pcbRotationOffset: 90,
        modelOriginPosition: {
          x: -0.0001142999999501626,
          y: 0.000025400000026820635,
          z: -0.1,
        },
      }}
      {...props}
    />
  );
};

export default TMP20AIDCKR;
