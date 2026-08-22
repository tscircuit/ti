import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["REF"],
  pin2: ["CATHODE"],
  pin3: ["ANODE"],
} as const;

export const LMV431BIMFX_NOPB = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C473352"],
      }}
      manufacturerPartNumber="LMV431BIMFX/NOPB"
      footprint="sot23w_p0.9813mm_pl1.2487mm_pin1location(rightside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C473352.obj?uuid=03da3cd600804f46962c3731df988fe5",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C473352.step?uuid=03da3cd600804f46962c3731df988fe5",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: -0.000012700000070253736, z: -0.4 },
      }}
      {...props}
    />
  );
};

export default LMV431BIMFX_NOPB;
