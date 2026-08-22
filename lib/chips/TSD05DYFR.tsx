import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["IO"],
  pin2: ["GND"],
} as const;

const pinAttributes = {
  pin2: { requiresGround: true },
} as const;

export const TSD05DYFR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C22396185"],
      }}
      manufacturerPartNumber="TSD05DYFR"
      footprint="res_p2.5999mm_pw0.9mm_ph0.5mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C22396185.obj?uuid=ca55f7f4aa2143938eb241550bbe4129",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C22396185.step?uuid=ca55f7f4aa2143938eb241550bbe4129",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.55 },
      }}
      {...props}
    />
  );
};

export default TSD05DYFR;
