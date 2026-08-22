import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["SYNC"],
  pin2: ["SCLK"],
  pin3: ["DIN"],
  pin4: ["pin4"],
  pin5: ["GND"],
  pin6: ["VOUT"],
} as const;

const pinAttributes = {
  pin5: { requiresGround: true },
} as const;

export const DAC8411IDCKT = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C181257"],
      }}
      manufacturerPartNumber="DAC8411IDCKT"
      footprint="dfn6_p0.65mm_w2.6998mm_pw0.4mm_pl0.9mm_pin1location(rightside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C181257.obj?uuid=c48363a009b446bc89c236a3f3be363d",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C181257.step?uuid=c48363a009b446bc89c236a3f3be363d",
        pcbRotationOffset: 90,
        modelOriginPosition: {
          x: 0.0001015999999935957,
          y: 0.00008889999999439624,
          z: 0,
        },
      }}
      {...props}
    />
  );
};

export default DAC8411IDCKT;
