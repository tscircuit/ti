import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["NC"],
  pin2: ["GND1"],
  pin3: ["VO"],
  pin4: ["V_POS"],
  pin5: ["GND2"],
} as const;

const pinAttributes = {
  pin1: { doNotConnect: true },
  pin2: { requiresGround: true },
  pin5: { requiresGround: true },
} as const;

export const LMT88DCKR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C543065"],
      }}
      manufacturerPartNumber="LMT88DCKR"
      footprint="dfn6_missing(5)_p0.65mm_w3.1001mm_pw0.4mm_pl0.9mm_pin1location(rightside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C543065.obj?uuid=57a52c7c59524d2a8f4328bf1d262d36",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C543065.step?uuid=57a52c7c59524d2a8f4328bf1d262d36",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: -0.000012699999842880061,
          y: 0.00005080000005364127,
          z: -0.58,
        },
      }}
      {...props}
    />
  );
};

export default LMT88DCKR;
