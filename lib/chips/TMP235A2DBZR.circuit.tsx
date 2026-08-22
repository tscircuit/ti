import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VDD"],
  pin2: ["VOUT"],
  pin3: ["GND"],
} as const;

const pinAttributes = {
  pin1: { requiresPower: true },
  pin3: { requiresGround: true },
} as const;

export const TMP235A2DBZR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2868808"],
      }}
      manufacturerPartNumber="TMP235A2DBZR"
      footprint="sot23w_p0.9813mm_pl1.2487mm_pin1location(rightside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2868808.obj?uuid=03da3cd600804f46962c3731df988fe5",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2868808.step?uuid=03da3cd600804f46962c3731df988fe5",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: -0.000012700000070253736, z: -0.4 },
      }}
      {...props}
    />
  );
};

export default TMP235A2DBZR;
