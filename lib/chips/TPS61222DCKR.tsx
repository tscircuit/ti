import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VIN"],
  pin2: ["FB"],
  pin3: ["GND"],
  pin4: ["VOUT"],
  pin5: ["L"],
  pin6: ["EN"],
} as const;

const pinAttributes = {
  pin1: { requiresPower: true },
  pin3: { requiresGround: true },
} as const;

export const TPS61222DCKR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C116461"],
      }}
      manufacturerPartNumber="TPS61222DCKR"
      footprint="dfn6_p0.65mm_w2.2mm_pw0.4mm_pl0.9mm_pin1location(rightside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C116461.obj?uuid=a5d40c04f23243b2af27dc3bf34f18d3",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C116461.step?uuid=a5d40c04f23243b2af27dc3bf34f18d3",
        pcbRotationOffset: 180,
        modelOriginPosition: { x: 0.000012700000013410317, y: 0, z: -0.1 },
      }}
      {...props}
    />
  );
};

export default TPS61222DCKR;
