import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["LAT"],
  pin2: ["OUT0"],
  pin3: ["OUT1"],
  pin4: ["OUT2"],
  pin5: ["OUT3"],
  pin6: ["OUT4"],
  pin7: ["OUT5"],
  pin8: ["OUT6"],
  pin9: ["OUT7"],
  pin10: ["GND"],
  pin11: ["OUT8"],
  pin12: ["OUT9"],
  pin13: ["OUT10"],
  pin14: ["OUT11"],
  pin15: ["OUT12"],
  pin16: ["OUT13"],
  pin17: ["OUT14"],
  pin18: ["OUT15"],
  pin19: ["SOUT"],
  pin20: ["GCLK"],
  pin21: ["IREF"],
  pin22: ["VCC"],
  pin23: ["SIN"],
  pin24: ["SCLK"],
  pin25: ["EP"],
} as const;

const pinAttributes = {
  pin10: { requiresGround: true },
  pin22: { requiresPower: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin25: [...pinLabels["pin25"], "thermalpad"],
} as const;

export const TLC6946RGER = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C1850310"],
      }}
      manufacturerPartNumber="TLC6946RGER"
      footprint="qfn24_thermalpad2.7mmx2.7mm_p0.4999mm_h4.6562mm_pw0.28mm_pl0.633mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C1850310.obj?uuid=1265dd8b7b8c4a2f9161079a5a7b672c",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C1850310.step?uuid=1265dd8b7b8c4a2f9161079a5a7b672c",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.00010159999987990886, y: 0, z: 0 },
      }}
      {...props}
    />
  );
};

export default TLC6946RGER;
