import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VDD1"],
  pin2: ["VIN"],
  pin3: ["SHTDN"],
  pin4: ["GND1"],
  pin5: ["GND2"],
  pin6: ["VOUTN"],
  pin7: ["VOUTP"],
  pin8: ["VDD2"],
} as const;

const pinAttributes = {
  pin1: { requiresPower: true },
  pin2: { requiresPower: true },
  pin4: { requiresGround: true },
  pin5: { requiresGround: true },
  pin8: { requiresPower: true },
} as const;

export const AMC1211AQDWVQ1 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C1545676"],
      }}
      manufacturerPartNumber="AMC1211AQDWVQ1"
      footprint="soic_w12.9002mm_pw0.7mm_pl2mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C1545676.obj?uuid=3051e21de70541f0b411376247814d35",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C1545676.step?uuid=3051e21de70541f0b411376247814d35",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: -0.000012699999842880061,
          y: -0.000012699999842880061,
          z: -1.265,
        },
      }}
      {...props}
    />
  );
};

export default AMC1211AQDWVQ1;
