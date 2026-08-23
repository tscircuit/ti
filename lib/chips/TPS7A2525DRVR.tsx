import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["OUT"],
  pin2: ["NC"],
  pin3: ["PG"],
  pin4: ["EN"],
  pin5: ["GND"],
  pin6: ["IN"],
  pin7: ["EP"],
} as const;

const pinAttributes = {
  pin2: { doNotConnect: true },
  pin5: { requiresGround: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin7: [...pinLabels["pin7"], "thermalpad"],
} as const;

export const TPS7A2525DRVR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2867877"],
      }}
      manufacturerPartNumber="TPS7A2525DRVR"
      footprint="dfn6_thermalpad1mmx1.6mm_pillpads_p0.65mm_w2.6639mm_pw0.364mm_pl0.607mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2867877.obj?uuid=c909123e4a7a4da5a0270979fee6c02c",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2867877.step?uuid=c909123e4a7a4da5a0270979fee6c02c",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  );
};

export default TPS7A2525DRVR;
