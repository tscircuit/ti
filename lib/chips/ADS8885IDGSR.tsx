import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["REF"],
  pin2: ["AVDD"],
  pin3: ["AINP"],
  pin4: ["AINN"],
  pin5: ["GND"],
  pin6: ["CONVST"],
  pin7: ["DOUT"],
  pin8: ["SCLK"],
  pin9: ["DIN"],
  pin10: ["DVDD"],
} as const;

const pinAttributes = {
  pin5: { requiresGround: true },
} as const;

export const ADS8885IDGSR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C1542875"],
      }}
      manufacturerPartNumber="ADS8885IDGSR"
      footprint="ssop10_p0.4964mm_w4.4528mm_pw0.3023mm_pl1.3096mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C1542875.obj?uuid=854098f5cce54b6caab82164a7d3deef",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C1542875.step?uuid=854098f5cce54b6caab82164a7d3deef",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0.000012699999999199463, y: 0, z: -0.149083 },
      }}
      {...props}
    />
  );
};

export default ADS8885IDGSR;
