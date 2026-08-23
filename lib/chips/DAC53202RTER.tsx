import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["FB0"],
  pin2: ["OUT0"],
  pin3: ["NC4"],
  pin4: ["NC3"],
  pin5: ["pin5"],
  pin6: ["pin6"],
  pin7: ["pin7"],
  pin8: ["pin8"],
  pin9: ["NC2"],
  pin10: ["NC1"],
  pin11: ["OUT1"],
  pin12: ["FB1"],
  pin13: ["CAP"],
  pin14: ["AGND"],
  pin15: ["VDD"],
  pin16: ["VREF"],
  pin17: ["PAD"],
} as const;

const pinAttributes = {
  pin3: { doNotConnect: true },
  pin4: { doNotConnect: true },
  pin9: { doNotConnect: true },
  pin10: { doNotConnect: true },
  pin14: { requiresGround: true },
  pin15: { requiresPower: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin17: [...pinLabels["pin17"], "thermalpad"],
} as const;

export const DAC53202RTER = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C5711651"],
      }}
      manufacturerPartNumber="DAC53202RTER"
      footprint="qfn16_thermalpad1.7mmx1.7mm_pillpads_pw0.28mm_pl0.8mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C5711651.obj?uuid=3393915cc74240b786c7d7578739d4d7",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C5711651.step?uuid=3393915cc74240b786c7d7578739d4d7",
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

export default DAC53202RTER;
