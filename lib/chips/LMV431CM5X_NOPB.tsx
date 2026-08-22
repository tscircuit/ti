import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["NC2"],
  pin2: ["NC1"],
  pin3: ["CATHODE"],
  pin4: ["REF"],
  pin5: ["ANODE"],
} as const;

const pinAttributes = {
  pin1: { doNotConnect: true },
  pin2: { doNotConnect: true },
} as const;

export const LMV431CM5X_NOPB = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2157652"],
      }}
      manufacturerPartNumber="LMV431CM5X/NOPB"
      footprint="dfn6_missing(5)_p0.95mm_w3.2001mm_pin1location(rightside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2157652.obj?uuid=8c971aea3af54c53b74baeb1f489d393",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2157652.step?uuid=8c971aea3af54c53b74baeb1f489d393",
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

export default LMV431CM5X_NOPB;
