import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["D"],
  pin2: ["CLK"],
  pin3: ["GND"],
  pin4: ["Q"],
  pin5: ["VCC"],
} as const;

const pinAttributes = {
  pin3: { requiresGround: true },
  pin5: { requiresPower: true },
} as const;

export const SN74AUP1G79DCKR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C206015"],
      }}
      manufacturerPartNumber="SN74AUP1G79DCKR"
      footprint="dfn6_missing(5)_p0.6502mm_w2.52mm_pw0.315mm_pl0.835mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C206015.obj?uuid=c7f70410144b4181a75d6c56456eaf60",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C206015.step?uuid=c7f70410144b4181a75d6c56456eaf60",
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

export default SN74AUP1G79DCKR;
