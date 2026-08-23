import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["FB"],
  pin2: ["COMP"],
  pin3: ["GND"],
  pin4: ["SW"],
  pin5: ["CTRL"],
  pin6: ["VIN"],
  pin7: ["EP"],
} as const;

const pinAttributes = {
  pin3: { requiresGround: true },
  pin6: { requiresPower: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin7: [...pinLabels["pin7"], "thermalpad"],
} as const;

export const TPS61165DRVR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C122568"],
      }}
      manufacturerPartNumber="TPS61165DRVR"
      footprint="dfn6_thermalpad1mmx1.6mm_pillpads_p0.65mm_w2.6639mm_pw0.364mm_pl0.607mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C122568.obj?uuid=c909123e4a7a4da5a0270979fee6c02c",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C122568.step?uuid=c909123e4a7a4da5a0270979fee6c02c",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  );
};

export default TPS61165DRVR;
