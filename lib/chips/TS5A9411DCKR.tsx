import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["IN"],
  pin2: ["VCC"],
  pin3: ["GND"],
  pin4: ["NC"],
  pin5: ["COM"],
  pin6: ["NO"],
} as const;

const pinAttributes = {
  pin2: { requiresPower: true },
  pin3: { requiresGround: true },
  pin4: { doNotConnect: true },
} as const;

export const TS5A9411DCKR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C414621"],
      }}
      manufacturerPartNumber="TS5A9411DCKR"
      footprint="dfn6_p0.65mm_w2.4999mm_pw0.42mm_pl0.6mm_pin1location(rightside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C414621.obj?uuid=a5d40c04f23243b2af27dc3bf34f18d3",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C414621.step?uuid=a5d40c04f23243b2af27dc3bf34f18d3",
        pcbRotationOffset: 180,
        modelOriginPosition: { x: 0.000012700000013410317, y: 0, z: -0.1 },
      }}
      {...props}
    />
  );
};

export default TS5A9411DCKR;
