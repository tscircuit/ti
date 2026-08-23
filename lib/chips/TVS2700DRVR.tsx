import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["GND4"],
  pin2: ["GND3"],
  pin3: ["GND2"],
  pin4: ["IN3"],
  pin5: ["IN2"],
  pin6: ["IN1"],
  pin7: ["GND1"],
} as const;

const pinAttributes = {
  pin1: { requiresGround: true },
  pin2: { requiresGround: true },
  pin3: { requiresGround: true },
  pin7: { requiresGround: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin7: [...pinLabels["pin7"], "thermalpad"],
} as const;

export const TVS2700DRVR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C523797"],
      }}
      manufacturerPartNumber="TVS2700DRVR"
      footprint="dfn6_thermalpad1mmx1.6mm_p0.65mm_w2.4002mm_pw0.4mm_pl0.45mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C523797.obj?uuid=c909123e4a7a4da5a0270979fee6c02c",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C523797.step?uuid=c909123e4a7a4da5a0270979fee6c02c",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: -0.000012700000013410317, y: 0, z: 0 },
      }}
      {...props}
    />
  );
};

export default TVS2700DRVR;
