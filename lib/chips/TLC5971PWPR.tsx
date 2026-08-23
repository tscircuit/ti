import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["IREF"],
  pin2: ["GND"],
  pin3: ["OUTR0"],
  pin4: ["OUTG0"],
  pin5: ["OUTB0"],
  pin6: ["OUTR1"],
  pin7: ["OUTG1"],
  pin8: ["OUTB1"],
  pin9: ["SDTI"],
  pin10: ["SCKI"],
  pin11: ["SCKO"],
  pin12: ["SDTO"],
  pin13: ["OUTR2"],
  pin14: ["OUTG2"],
  pin15: ["OUTB2"],
  pin16: ["OUTR3"],
  pin17: ["OUTG3"],
  pin18: ["OUTB3"],
  pin19: ["VCC"],
  pin20: ["VREG"],
  pin21: ["EPAD"],
} as const;

const pinAttributes = {
  pin2: { requiresGround: true },
  pin19: { requiresPower: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin21: [...pinLabels["pin21"], "thermalpad"],
} as const;

export const TLC5971PWPR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C181236"],
      }}
      manufacturerPartNumber="TLC5971PWPR"
      footprint="dfn20_thermalpad3mmx4.2mm_pillpads_p0.65mm_w7.493mm_pw0.343mm_pl1.7465mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C181236.obj?uuid=8e6015adf3634b5f88b85fbae678277b",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C181236.step?uuid=8e6015adf3634b5f88b85fbae678277b",
        pcbRotationOffset: 90,
        modelOriginPosition: {
          x: -0.000012700000070253736,
          y: 0.000012700000070253736,
          z: -0.099083,
        },
      }}
      {...props}
    />
  );
};

export default TLC5971PWPR;
