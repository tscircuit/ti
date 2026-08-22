import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["FB1"],
  pin2: ["FB4"],
  pin3: ["BASE"],
  pin4: ["VIN"],
  pin5: ["SW1"],
  pin6: ["SW2"],
  pin7: ["PGND1"],
  pin8: ["PGND2"],
  pin9: ["SUP"],
  pin10: ["VCOM"],
  pin11: ["VCOMIN"],
  pin12: ["FB3"],
  pin13: ["OUT3"],
  pin14: ["C2_POS"],
  pin15: ["pin15"],
  pin16: ["C1_POS"],
  pin17: ["C1_NEG"],
  pin18: ["DRV"],
  pin19: ["EP"],
  pin20: ["REF"],
  pin21: ["FB2"],
  pin22: ["COMP"],
  pin23: ["ENR"],
  pin24: ["EN"],
  pin25: ["pin25"],
} as const;

const pinAttributes = {
  pin4: { requiresPower: true },
  pin7: { requiresGround: true },
  pin8: { requiresGround: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin25: [...pinLabels["pin25"], "thermalpad"],
} as const;

export const TPS65105PWPR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C181658"],
      }}
      manufacturerPartNumber="TPS65105PWPR"
      footprint="dfn24_thermalpad2.005mmx4.64mm_pillpads_p0.65mm_w7.493mm_pw0.343mm_pl1.7465mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C181658.obj?uuid=201b76eaa53c49c78e9369cc2765b531",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C181658.step?uuid=201b76eaa53c49c78e9369cc2765b531",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.65 },
      }}
      {...props}
    />
  );
};

export default TPS65105PWPR;
