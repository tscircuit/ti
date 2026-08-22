import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["A"],
  pin3: ["GND"],
  pin4: ["Y"],
  pin5: ["VCC"],
} as const;

const pinAttributes = {
  pin3: { requiresGround: true },
  pin5: { requiresPower: true },
} as const;

export const SN74LVC1G17DBVT = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2862344"],
      }}
      manufacturerPartNumber="SN74LVC1G17DBVT"
      footprint="dfn6_missing(5)_p0.95mm_w3.2001mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2862344.obj?uuid=de83a77687e64788a98e316d865b3813",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2862344.step?uuid=de83a77687e64788a98e316d865b3813",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.75 },
      }}
      {...props}
    />
  );
};

export default SN74LVC1G17DBVT;
