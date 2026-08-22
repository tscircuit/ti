import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["1OE"],
  pin2: ["1A"],
  pin3: ["2Y"],
  pin4: ["GND"],
  pin5: ["2A"],
  pin6: ["1Y"],
  pin7: ["2OE"],
  pin8: ["VCC"],
} as const;

const pinAttributes = {
  pin4: { requiresGround: true },
  pin8: { requiresPower: true },
} as const;

export const SN74LVC2G240DCTR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2675797"],
      }}
      manufacturerPartNumber="SN74LVC2G240DCTR"
      footprint="dfn8_pillpads_p0.65mm_w4.85mm_pw0.4mm_pl1.2mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2675797.obj?uuid=676f5e35950f4d7c8e9fec7736465692",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2675797.step?uuid=676f5e35950f4d7c8e9fec7736465692",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.6 },
      }}
      {...props}
    />
  );
};

export default SN74LVC2G240DCTR;
