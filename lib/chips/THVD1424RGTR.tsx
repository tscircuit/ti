import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["R"],
  pin2: ["RE"],
  pin3: ["DE"],
  pin4: ["D"],
  pin5: ["TERM_TX"],
  pin6: ["GND"],
  pin7: ["TERM_RX"],
  pin8: ["SLR"],
  pin9: ["Y"],
  pin10: ["Z"],
  pin11: ["B"],
  pin12: ["A"],
  pin13: ["VIO"],
  pin14: ["VCC"],
  pin15: ["pin15"],
  pin16: ["NC"],
  pin17: ["PAD"],
} as const;

const pinAttributes = {
  pin6: { requiresGround: true },
  pin14: { requiresPower: true },
  pin16: { doNotConnect: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin17: [...pinLabels["pin17"], "thermalpad"],
} as const;

export const THVD1424RGTR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C5359161"],
      }}
      manufacturerPartNumber="THVD1424RGTR"
      footprint="qfn16_thermalpad1.7mmx1.7mm_pillpads_pw0.28mm_pl0.8mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C5359161.obj?uuid=3393915cc74240b786c7d7578739d4d7",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C5359161.step?uuid=3393915cc74240b786c7d7578739d4d7",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: -0.000025399999991293498,
          y: 0.00002540000001260978,
          z: -0.02,
        },
      }}
      {...props}
    />
  );
};

export default THVD1424RGTR;
