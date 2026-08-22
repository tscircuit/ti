import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["INP2"],
  pin2: ["PGND2"],
  pin3: ["PGND1"],
  pin4: ["VIN"],
  pin5: ["INN2"],
  pin6: ["INN1"],
  pin7: ["BSW"],
  pin8: ["ENP"],
  pin9: ["PSP"],
  pin10: ["ENN"],
  pin11: ["PSN"],
  pin12: ["NC2"],
  pin13: ["OUTN2"],
  pin14: ["OUTN1"],
  pin15: ["VNEG"],
  pin16: ["FBN"],
  pin17: ["VREF"],
  pin18: ["CN"],
  pin19: ["AGND"],
  pin20: ["NC1"],
  pin21: ["CP"],
  pin22: ["FBP"],
  pin23: ["VPOS"],
  pin24: ["INP1"],
  pin25: ["EP"],
} as const;

const pinAttributes = {
  pin2: { requiresGround: true },
  pin3: { requiresGround: true },
  pin4: { requiresPower: true },
  pin12: { doNotConnect: true },
  pin19: { requiresGround: true },
  pin20: { doNotConnect: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin25: [...pinLabels["pin25"], "thermalpad"],
} as const;

export const TPS65130RGER = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C54989"],
      }}
      manufacturerPartNumber="TPS65130RGER"
      footprint="qfn24_thermalpad2.7mmx2.7mm_p0.4999mm_w4.6083mm_h4.606mm_pw0.24mm_pl0.58mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C54989.obj?uuid=eebb30300a444160abfffc9895d5ba3f",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C54989.step?uuid=eebb30300a444160abfffc9895d5ba3f",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: -0.001009650000014517,
          y: 0.000012700000070253736,
          z: -0.02,
        },
      }}
      {...props}
    />
  );
};

export default TPS65130RGER;
