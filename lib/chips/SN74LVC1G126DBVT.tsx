import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["OE"],
  pin2: ["A"],
  pin3: ["GND"],
  pin4: ["Y"],
  pin5: ["VCC"],
} as const;

const pinAttributes = {
  pin3: { requiresGround: true },
  pin5: { requiresPower: true },
} as const;

export const SN74LVC1G126DBVT = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2676070"],
      }}
      manufacturerPartNumber="SN74LVC1G126DBVT"
      footprint="dfn6_missing(5)_p0.95mm_w3.6999mm_pl1.1mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2676070.obj?uuid=ba304048957a4ddf80723501e9ecd54e",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2676070.step?uuid=ba304048957a4ddf80723501e9ecd54e",
        pcbRotationOffset: 270,
        modelOriginPosition: {
          x: 0.00011430000017753628,
          y: -0.000025400000140507473,
          z: -0.75,
        },
      }}
      {...props}
    />
  );
};

export default SN74LVC1G126DBVT;
