import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["B"],
  pin2: ["A"],
  pin3: ["GND"],
  pin4: ["Y"],
  pin5: ["VCC"],
} as const;

const pinAttributes = {
  pin3: { requiresGround: true },
  pin5: { requiresPower: true },
} as const;

export const SN74AHCT1G08DBVR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C113521"],
      }}
      manufacturerPartNumber="SN74AHCT1G08DBVR"
      footprint="dfn6_missing(5)_p0.95mm_w3.7002mm_pl1.1mm_pin1location(rightside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C113521.obj?uuid=460193f9bf2d42e58cf3c2f675b07dc6",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C113521.step?uuid=460193f9bf2d42e58cf3c2f675b07dc6",
        pcbRotationOffset: 180,
        modelOriginPosition: {
          x: 0,
          y: -0.000012700000070253736,
          z: -0.049083,
        },
      }}
      {...props}
    />
  );
};

export default SN74AHCT1G08DBVR;
