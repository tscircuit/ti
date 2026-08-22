import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["SCL"],
  pin2: ["SDA"],
  pin3: ["CLKIN"],
  pin4: ["ADDR"],
  pin5: ["INTB"],
  pin6: ["SD"],
  pin7: ["VDD"],
  pin8: ["GND1"],
  pin9: ["IN0A"],
  pin10: ["IN0B"],
  pin11: ["IN1A"],
  pin12: ["IN1B"],
  pin13: ["GND2"],
} as const;

const pinAttributes = {
  pin7: { requiresPower: true },
  pin8: { requiresGround: true },
  pin13: { requiresGround: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin13: [...pinLabels["pin13"], "thermalpad"],
} as const;

export const FDC2212DNTR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C968585"],
      }}
      manufacturerPartNumber="FDC2212DNTR"
      footprint="dfn12_thermalpad2.6mmx3mm_p0.4999mm_w4.5001mm_pw0.28mm_pl0.7mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C968585.obj?uuid=ea761ec020744233b31159d14a1bfa97",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C968585.step?uuid=ea761ec020744233b31159d14a1bfa97",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: -0.00007619999996677507,
          y: 0.00005079999993995443,
          z: -0.75,
        },
      }}
      {...props}
    />
  );
};

export default FDC2212DNTR;
