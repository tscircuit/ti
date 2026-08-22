import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["PG"],
  pin2: ["STAT"],
  pin3: ["CD"],
  pin4: ["SDA"],
  pin5: ["SCL"],
  pin6: ["INT"],
  pin7: ["TS"],
  pin8: ["ILIM"],
  pin9: ["MID"],
  pin10: ["CBSET"],
  pin11: ["REGN"],
  pin12: ["BTST"],
  pin13: ["BAT1"],
  pin14: ["BAT2"],
  pin15: ["SNS1"],
  pin16: ["SNS2"],
  pin17: ["SW1"],
  pin18: ["SW2"],
  pin19: ["GND1"],
  pin20: ["GND2"],
  pin21: ["PMID1"],
  pin22: ["PMID2"],
  pin23: ["VBUS"],
  pin24: ["PSEL"],
  pin25: ["EP"],
} as const;

const pinAttributes = {
  pin19: { requiresGround: true },
  pin20: { requiresGround: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin25: [...pinLabels["pin25"], "thermalpad"],
} as const;

export const BQ25887RGER = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2761614"],
      }}
      manufacturerPartNumber="BQ25887RGER"
      footprint="qfn24_thermalpad2.7mmx2.7mm_pillpads_p0.4999mm_pw0.28mm_pl0.8mm_pin1location(bottomside,left)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2761614.obj?uuid=78358972877945cb927aaf48cb6c1c63",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2761614.step?uuid=78358972877945cb927aaf48cb6c1c63",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  );
};

export default BQ25887RGER;
