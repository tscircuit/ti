import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["Ch1_In"],
  pin2: ["Ch2_In"],
  pin3: ["Ch3_In"],
  pin4: ["Ch4_In"],
  pin5: ["Ch4_Out"],
  pin6: ["Ch3_Out"],
  pin7: ["Ch2_Out"],
  pin8: ["Ch1_Out"],
  pin9: ["GND"],
} as const;

const pinAttributes = {
  pin9: { requiresGround: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin9: [...pinLabels["pin9"], "thermalpad"],
} as const;

export const TPD4F003DQDR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C398926"],
      }}
      manufacturerPartNumber="TPD4F003DQDR"
      footprint="dfn8_thermalpad0.4mmx1.2mm_p0.4001mm_w1.7503mm_pw0.2mm_pl0.45mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C398926.obj?uuid=a4030eafd3224e69a07efcc2b88f2bec",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C398926.step?uuid=a4030eafd3224e69a07efcc2b88f2bec",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: -0.000012700000070253736,
          y: -0.000038099999983387534,
          z: 0,
        },
      }}
      {...props}
    />
  );
};

export default TPD4F003DQDR;
