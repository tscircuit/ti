import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["D1"],
  pin2: ["VCC"],
  pin3: ["D2"],
  pin4: ["GND"],
  pin5: ["EN"],
  pin6: ["CLK"],
} as const;

const pinAttributes = {
  pin2: { requiresPower: true },
  pin4: { requiresGround: true },
} as const;

export const SN6505BDBVT = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2156022"],
      }}
      manufacturerPartNumber="SN6505BDBVT"
      footprint="sot_h1.7434mm_pl1.1304mm_pin1location(rightside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2156022.obj?uuid=229b69761e2c45dba6a83d8866dec72d",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2156022.step?uuid=229b69761e2c45dba6a83d8866dec72d",
        pcbRotationOffset: 180,
        modelOriginPosition: {
          x: 0.000025399999913133797,
          y: -0.0000889000000370288,
          z: -0.048939,
        },
      }}
      {...props}
    />
  );
};

export default SN6505BDBVT;
