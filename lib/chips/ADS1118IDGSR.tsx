import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["SCLK"],
  pin2: ["pin2"],
  pin3: ["GND"],
  pin4: ["AIN0"],
  pin5: ["AIN1"],
  pin6: ["AIN2"],
  pin7: ["AIN3"],
  pin8: ["VDD"],
  pin9: ["pin9"],
  pin10: ["DIN"],
} as const;

const pinAttributes = {
  pin3: { requiresGround: true },
  pin8: { requiresPower: true },
} as const;

export const ADS1118IDGSR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C55347"],
      }}
      manufacturerPartNumber="ADS1118IDGSR"
      footprint="ssop10_p0.4964mm_w4.4528mm_pw0.3023mm_pl1.3096mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C55347.obj?uuid=854098f5cce54b6caab82164a7d3deef",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C55347.step?uuid=854098f5cce54b6caab82164a7d3deef",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0.000012699999999199463, y: 0, z: -0.149083 },
      }}
      {...props}
    />
  );
};

export default ADS1118IDGSR;
