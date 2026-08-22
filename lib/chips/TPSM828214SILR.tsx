import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VIN1"],
  pin2: ["VIN2"],
  pin3: ["EN"],
  pin4: ["PG"],
  pin5: ["VOUT2"],
  pin6: ["VOUT3"],
  pin7: ["VOUT1"],
  pin8: ["FB"],
  pin9: ["GND2"],
  pin10: ["GND1"],
} as const;

const pinAttributes = {
  pin1: { requiresPower: true },
  pin2: { requiresPower: true },
  pin9: { requiresGround: true },
  pin10: { requiresGround: true },
} as const;

export const TPSM828214SILR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2876792"],
      }}
      manufacturerPartNumber="TPSM828214SILR"
      footprint="dfn10_p0.4999mm_w2.78mm_pw0.25mm_pl1.065mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2876792.obj?uuid=f8dc55bb8e7e4af3a65abaa0221e33c1",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2876792.step?uuid=f8dc55bb8e7e4af3a65abaa0221e33c1",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0, y: 0.000012699999999199463, z: -0.01 },
      }}
      {...props}
    />
  );
};

export default TPSM828214SILR;
