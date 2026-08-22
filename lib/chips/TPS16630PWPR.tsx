import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["IN1"],
  pin2: ["IN2"],
  pin3: ["IN3"],
  pin4: ["pin4"],
  pin5: ["pin5"],
  pin6: ["P_IN"],
  pin7: ["UVLO"],
  pin8: ["OVP"],
  pin9: ["GND"],
  pin10: ["dVdT"],
  pin11: ["ILIM"],
  pin12: ["MODE"],
  pin13: ["SHDN"],
  pin14: ["IMON"],
  pin15: ["FLT"],
  pin16: ["PGOOD"],
  pin17: ["pin17"],
  pin18: ["OUT3"],
  pin19: ["OUT2"],
  pin20: ["OUT1"],
  pin21: ["EP"],
} as const;

const pinAttributes = {
  pin9: { requiresGround: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin21: [...pinLabels["pin21"], "thermalpad"],
} as const;

export const TPS16630PWPR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C1849461"],
      }}
      manufacturerPartNumber="TPS16630PWPR"
      footprint="dfn20_thermalpad2.585mmx2.585mm_pillpads_p0.65mm_w7.4935mm_pw0.343mm_pl1.747mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C1849461.obj?uuid=8e6015adf3634b5f88b85fbae678277b",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C1849461.step?uuid=8e6015adf3634b5f88b85fbae678277b",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: -0.000012700000070253736,
          y: 0.000012699999956566899,
          z: -0.099083,
        },
      }}
      {...props}
    />
  );
};

export default TPS16630PWPR;
