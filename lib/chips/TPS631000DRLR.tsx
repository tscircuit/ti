import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VOUT"],
  pin2: ["LX2"],
  pin3: ["LX1"],
  pin4: ["VIN"],
  pin5: ["EN"],
  pin6: ["MODE"],
  pin7: ["GND"],
  pin8: ["FB"],
} as const;

const pinAttributes = {
  pin4: { requiresPower: true },
  pin7: { requiresGround: true },
} as const;

export const TPS631000DRLR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C5219190"],
      }}
      manufacturerPartNumber="TPS631000DRLR"
      footprint="soic_p0.5001mm_w1.9602mm_pw0.28mm_pl0.68mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C5219190.obj?uuid=9c40631a05ef402783341361e9d41aff",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C5219190.step?uuid=9c40631a05ef402783341361e9d41aff",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0.000012699999984988608, y: 0, z: -0.02 },
      }}
      {...props}
    />
  );
};

export default TPS631000DRLR;
