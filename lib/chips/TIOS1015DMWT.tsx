import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["NFAULT"],
  pin3: ["NC1"],
  pin4: ["IN"],
  pin5: ["EN"],
  pin6: ["ILIM_ADJ"],
  pin7: ["GND"],
  pin8: ["OUT"],
  pin9: ["VCC"],
  pin10: ["NC2"],
  pin11: ["EP"],
} as const;

const pinAttributes = {
  pin3: { doNotConnect: true },
  pin7: { requiresGround: true },
  pin9: { requiresPower: true },
  pin10: { doNotConnect: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin11: [...pinLabels["pin11"], "thermalpad"],
} as const;

export const TIOS1015DMWT = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C1879693"],
      }}
      manufacturerPartNumber="TIOS1015DMWT"
      footprint="dfn10_thermalpad1.95mmx1.65mm_p0.4999mm_w3.45mm_pw0.28mm_pl0.625mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C1879693.obj?uuid=de52ebbe058e494fa1fa23b31f270f08",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C1879693.step?uuid=de52ebbe058e494fa1fa23b31f270f08",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: -0.000012700000070253736, z: -0.92 },
      }}
      {...props}
    />
  );
};

export default TIOS1015DMWT;
