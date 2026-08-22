import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["dVdt"],
  pin2: ["pin2"],
  pin3: ["IN1"],
  pin4: ["IN2"],
  pin5: ["OUT"],
  pin6: ["FLT"],
  pin7: ["ILM"],
  pin8: ["GND1"],
  pin9: ["GND2"],
} as const;

const pinAttributes = {
  pin8: { requiresGround: true },
  pin9: { requiresGround: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin9: [...pinLabels["pin9"], "thermalpad"],
} as const;

export const TPS259541DSGR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2155673"],
      }}
      manufacturerPartNumber="TPS259541DSGR"
      footprint="dfn8_thermalpad0.9mmx1.6mm_p0.5mm_w2.2784mm_pw0.254mm_pl0.5004mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2155673.obj?uuid=499ab0922b8840ff848afc6f46e17ff0",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2155673.step?uuid=499ab0922b8840ff848afc6f46e17ff0",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0, y: -0.000012699999999199463, z: 0 },
      }}
      {...props}
    />
  );
};

export default TPS259541DSGR;
