import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["REF"],
  pin2: ["GND"],
  pin3: ["V_POS"],
  pin4: ["IN_POS"],
  pin5: ["IN_NEG"],
  pin6: ["OUT"],
} as const;

const pinAttributes = {
  pin2: { requiresGround: true },
} as const;

export const INA213BIDCKT = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2057401"],
      }}
      manufacturerPartNumber="INA213BIDCKT"
      footprint="dfn6_p0.65mm_w2.4999mm_pw0.42mm_pl0.6mm_pin1location(rightside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2057401.obj?uuid=a5d40c04f23243b2af27dc3bf34f18d3",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2057401.step?uuid=a5d40c04f23243b2af27dc3bf34f18d3",
        pcbRotationOffset: 180,
        modelOriginPosition: { x: 0.000012700000013410317, y: 0, z: -0.1 },
      }}
      {...props}
    />
  );
};

export default INA213BIDCKT;
