import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VDD"],
  pin2: ["ADDR"],
  pin3: ["GND"],
  pin4: ["SCL"],
  pin5: ["INT"],
  pin6: ["SDA"],
  pin7: ["EP"],
} as const;

const pinAttributes = {
  pin1: { requiresPower: true },
  pin3: { requiresGround: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin7: [...pinLabels["pin7"], "thermalpad"],
} as const;

export const OPT3004DNPR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2655153"],
      }}
      manufacturerPartNumber="OPT3004DNPR"
      footprint="dfn6_thermalpad1mmx1.6mm_pillpads_p0.65mm_w2.6639mm_pw0.364mm_pl0.607mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2655153.obj?uuid=c909123e4a7a4da5a0270979fee6c02c",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2655153.step?uuid=c909123e4a7a4da5a0270979fee6c02c",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  );
};

export default OPT3004DNPR;
