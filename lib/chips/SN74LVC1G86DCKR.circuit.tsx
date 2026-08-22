import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["A"],
  pin2: ["B"],
  pin3: ["GND"],
  pin4: ["Y"],
  pin5: ["VCC"],
} as const;

const pinAttributes = {
  pin3: { requiresGround: true },
  pin5: { requiresPower: true },
} as const;

export const SN74LVC1G86DCKR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C52350"],
      }}
      manufacturerPartNumber="SN74LVC1G86DCKR"
      footprint="dfn6_missing(5)_p0.65mm_w3.1001mm_pw0.4mm_pl0.9mm_pin1location(rightside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C52350.obj?uuid=2a221d464efb4ebcb99e4ea11aff9052",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C52350.step?uuid=2a221d464efb4ebcb99e4ea11aff9052",
        pcbRotationOffset: 180,
        modelOriginPosition: {
          x: 0.000012699999842880061,
          y: 0.00005080000005364127,
          z: -0.1,
        },
      }}
      {...props}
    />
  );
};

export default SN74LVC1G86DCKR;
