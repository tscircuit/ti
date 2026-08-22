import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["GND"],
} as const;

const pinAttributes = {
  pin2: { requiresGround: true },
} as const;

export const ESD321DPYR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2868952"],
      }}
      manufacturerPartNumber="ESD321DPYR"
      footprint="res_p0.65mm_pw0.4mm_ph0.6mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2868952.obj?uuid=6b949832b6e54429b6fc36202eac00ba",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2868952.step?uuid=6b949832b6e54429b6fc36202eac00ba",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.03 },
      }}
      {...props}
    />
  );
};

export default ESD321DPYR;
