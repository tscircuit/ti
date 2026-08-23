import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["NC"],
  pin2: ["A"],
  pin3: ["GND"],
  pin4: ["Y"],
  pin5: ["VCC"],
} as const;

const pinAttributes = {
  pin1: { doNotConnect: true },
  pin3: { requiresGround: true },
  pin5: { requiresPower: true },
} as const;

export const SN74AUP1G14DBVR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2682131"],
      }}
      manufacturerPartNumber="SN74AUP1G14DBVR"
      footprint="dfn6_missing(5)_p0.95mm_w3.2001mm_pin1location(rightside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2682131.obj?uuid=8c971aea3af54c53b74baeb1f489d393",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2682131.step?uuid=8c971aea3af54c53b74baeb1f489d393",
        pcbRotationOffset: 90,
        modelOriginPosition: {
          x: -0.000012699999956566899,
          y: 0.00006349999989652133,
          z: -0.7,
        },
      }}
      {...props}
    />
  );
};

export default SN74AUP1G14DBVR;
