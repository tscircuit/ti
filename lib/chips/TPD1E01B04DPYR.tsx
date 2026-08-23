import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["IO", "1", "IO_1"],
  pin2: ["IO", "2", "IO_2"],
} as const;

const pinRoles = {
  pin1: "bidirectional",
  pin2: "bidirectional",
} as const;

const pinAttributes = {} as const;

export const TPD1E01B04DPYR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C779389"],
      }}
      manufacturerPartNumber="TPD1E01B04DPYR"
      footprint="res_p1mm_pw0.6mm_ph0.6mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C779389.obj?uuid=ccda0c11768145af9fb433a49cb8342a",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C779389.step?uuid=ccda0c11768145af9fb433a49cb8342a",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  );
};

export default TPD1E01B04DPYR;
