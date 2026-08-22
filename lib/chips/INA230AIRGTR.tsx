import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["A1"],
  pin2: ["A0"],
  pin3: ["ALERT"],
  pin4: ["SDA"],
  pin5: ["SCL"],
  pin6: ["NC6"],
  pin7: ["NC5"],
  pin8: ["NC4"],
  pin9: ["VS"],
  pin10: ["GND"],
  pin11: ["VBUS"],
  pin12: ["IN_NEG"],
  pin13: ["IN_POS"],
  pin14: ["NC3"],
  pin15: ["NC2"],
  pin16: ["NC1"],
  pin17: ["EP"],
} as const;

const pinAttributes = {
  pin6: { doNotConnect: true },
  pin7: { doNotConnect: true },
  pin8: { doNotConnect: true },
  pin10: { requiresGround: true },
  pin14: { doNotConnect: true },
  pin15: { doNotConnect: true },
  pin16: { doNotConnect: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin17: [...pinLabels["pin17"], "thermalpad"],
} as const;

export const INA230AIRGTR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C882784"],
      }}
      manufacturerPartNumber="INA230AIRGTR"
      footprint="qfn16_thermalpad1.7mmx1.7mm_pillpads_pw0.28mm_pl0.8mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C882784.obj?uuid=3393915cc74240b786c7d7578739d4d7",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C882784.step?uuid=3393915cc74240b786c7d7578739d4d7",
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

export default INA230AIRGTR;
