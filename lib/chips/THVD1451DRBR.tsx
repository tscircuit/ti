import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VCC"],
  pin2: ["R"],
  pin3: ["D"],
  pin4: ["GND"],
  pin5: ["Y"],
  pin6: ["Z"],
  pin7: ["B"],
  pin8: ["A"],
  pin9: ["EP"],
} as const;

const pinAttributes = {
  pin1: { requiresPower: true },
  pin4: { requiresGround: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin9: [...pinLabels["pin9"], "thermalpad"],
} as const;

export const THVD1451DRBR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2671344"],
      }}
      manufacturerPartNumber="THVD1451DRBR"
      footprint="dfn8_thermalpad1.6mmx2.4mm_p0.6599mm_w3.6mm_pw0.35mm_pl0.7mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2671344.obj?uuid=7224a9f24acd4fa3b0af204b6dff91eb",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2671344.step?uuid=7224a9f24acd4fa3b0af204b6dff91eb",
        pcbRotationOffset: 180,
        modelOriginPosition: {
          x: -0.000025399999913133797,
          y: -0.000381000000061249,
          z: 0,
        },
      }}
      {...props}
    />
  );
};

export default THVD1451DRBR;
