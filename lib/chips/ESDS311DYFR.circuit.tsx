import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["K"],
  pin2: ["A"],
} as const;

export const ESDS311DYFR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C30938562"],
      }}
      manufacturerPartNumber="ESDS311DYFR"
      footprint="res_p2.2799mm_pw0.83mm_ph0.63mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C30938562.obj?uuid=ca55f7f4aa2143938eb241550bbe4129",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C30938562.step?uuid=ca55f7f4aa2143938eb241550bbe4129",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.55 },
      }}
      {...props}
    />
  );
};

export default ESDS311DYFR;
