import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["REF"],
  pin2: ["GND"],
  pin3: ["V_POS"],
  pin4: ["IN_POS"],
  pin5: ["IN_NEG"],
  pin6: ["OUT"],
} as const;

const pinAttributes = {
  pin2: { requiresGround: true },
} as const;

export const INA199A3DCKR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C132098"],
      }}
      manufacturerPartNumber="INA199A3DCKR"
      footprint="dfn6_p0.65mm_w2.6998mm_pw0.4mm_pl0.9mm_pin1location(rightside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C132098.obj?uuid=c48363a009b446bc89c236a3f3be363d",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C132098.step?uuid=c48363a009b446bc89c236a3f3be363d",
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

export default INA199A3DCKR;
