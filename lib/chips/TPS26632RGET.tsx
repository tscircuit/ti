import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["IN2"],
  pin2: ["IN1"],
  pin3: ["B_GATE"],
  pin4: ["DRV"],
  pin5: ["IN_SYS"],
  pin6: ["UVLO"],
  pin7: ["PLIM"],
  pin8: ["GND"],
  pin9: ["dVdT"],
  pin10: ["ILIM"],
  pin11: ["MODE"],
  pin12: ["SHDN"],
  pin13: ["IMON"],
  pin14: ["FLT"],
  pin15: ["PGTH"],
  pin16: ["PGOOD"],
  pin17: ["OUT2"],
  pin18: ["OUT1"],
  pin19: ["pin19"],
  pin20: ["pin20"],
  pin21: ["pin21"],
  pin22: ["pin22"],
  pin23: ["pin23"],
  pin24: ["pin24"],
  pin25: ["EP"],
} as const;

const pinAttributes = {
  pin8: { requiresGround: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin25: [...pinLabels["pin25"], "thermalpad"],
} as const;

export const TPS26632RGET = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2862529"],
      }}
      manufacturerPartNumber="TPS26632RGET"
      footprint="qfn24_thermalpad2.7mmx2.7mm_p0.4999mm_h4.6562mm_pw0.28mm_pl0.633mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2862529.obj?uuid=1265dd8b7b8c4a2f9161079a5a7b672c",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2862529.step?uuid=1265dd8b7b8c4a2f9161079a5a7b672c",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.00010159999987990886, y: 0, z: 0 },
      }}
      {...props}
    />
  );
};

export default TPS26632RGET;
