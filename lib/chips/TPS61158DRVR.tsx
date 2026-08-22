import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["CTRL"],
  pin2: ["VIN"],
  pin3: ["VOUT"],
  pin4: ["FB"],
  pin5: ["GND"],
  pin6: ["LX"],
  pin7: ["EP"],
} as const;

const pinAttributes = {
  pin2: { requiresPower: true },
  pin5: { requiresGround: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin7: [...pinLabels["pin7"], "thermalpad"],
} as const;

export const TPS61158DRVR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C702280"],
      }}
      manufacturerPartNumber="TPS61158DRVR"
      footprint="dfn6_thermalpad1mmx1.6mm_p0.65mm_w2.4002mm_pw0.4mm_pl0.45mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C702280.obj?uuid=c909123e4a7a4da5a0270979fee6c02c",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C702280.step?uuid=c909123e4a7a4da5a0270979fee6c02c",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: -0.000012700000013410317, y: 0, z: 0 },
      }}
      {...props}
    />
  );
};

export default TPS61158DRVR;
