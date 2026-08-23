import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["GND1"],
  pin2: ["GND2"],
  pin3: ["GND3"],
  pin4: ["IN1"],
  pin5: ["IN2"],
  pin6: ["IN3"],
  pin7: ["EP"],
} as const;

const pinAttributes = {
  pin1: { requiresGround: true },
  pin2: { requiresGround: true },
  pin3: { requiresGround: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin7: [...pinLabels["pin7"], "thermalpad"],
} as const;

export const TVS1400DRVR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C1975229"],
      }}
      manufacturerPartNumber="TVS1400DRVR"
      footprint="dfn6_thermalpad1mmx1.6mm_pillpads_p0.65mm_w2.6639mm_pw0.364mm_pl0.607mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C1975229.obj?uuid=c909123e4a7a4da5a0270979fee6c02c",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C1975229.step?uuid=c909123e4a7a4da5a0270979fee6c02c",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  );
};

export default TVS1400DRVR;
