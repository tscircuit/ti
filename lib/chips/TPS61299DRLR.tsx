import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VIN"],
  pin2: ["SW"],
  pin3: ["EN"],
  pin4: ["VSEL"],
  pin5: ["VOUT"],
  pin6: ["GND"],
} as const;

export const TPS61299DRLR_PIN_LABELS = pinLabels;

const pinAttributes = {
  pin1: { requiresPower: true },
  pin6: { requiresGround: true },
} as const;

export const TPS61299DRLR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C41689719"],
      }}
      manufacturerPartNumber="TPS61299DRLR"
      footprint="dfn6_p0.5mm_w1.48mm_pw0.3mm_pl0.67mm_pin1location(leftside,top)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C41689719.obj?uuid=069fc0617071490c9eb00ae8845441bf",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C41689719.step?uuid=069fc0617071490c9eb00ae8845441bf",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: -0.00005080000005364127,
          y: 0.0001015999999935957,
          z: -0.55,
        },
      }}
      {...props}
    />
  );
};

export default TPS61299DRLR;
