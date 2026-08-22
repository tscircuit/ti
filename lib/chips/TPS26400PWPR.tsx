import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["IN1"],
  pin2: ["IN2"],
  pin3: ["UVLO"],
  pin4: ["NC1"],
  pin5: ["OVP"],
  pin6: ["MODE"],
  pin7: ["SHDN"],
  pin8: ["RTN"],
  pin9: ["GND"],
  pin10: ["IMON"],
  pin11: ["ILIM"],
  pin12: ["dVdT"],
  pin13: ["NC2"],
  pin14: ["FLT"],
  pin15: ["OUT2"],
  pin16: ["OUT1"],
  pin17: ["PAD"],
} as const;

const pinAttributes = {
  pin4: { doNotConnect: true },
  pin9: { requiresGround: true },
  pin13: { doNotConnect: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin17: [...pinLabels["pin17"], "thermalpad"],
} as const;

export const TPS26400PWPR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C3662862"],
      }}
      manufacturerPartNumber="TPS26400PWPR"
      footprint="dfn16_thermalpad2.51mmx2.3mm_pillpads_p0.65mm_w7.463mm_pw0.343mm_pl1.7315mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C3662862.obj?uuid=d4db5918918043f092f303406a6e9440",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C3662862.step?uuid=d4db5918918043f092f303406a6e9440",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.65 },
      }}
      {...props}
    />
  );
};

export default TPS26400PWPR;
