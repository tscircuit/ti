import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["ADDR"],
  pin2: ["pin2"],
  pin3: ["GND"],
  pin4: ["AIN0"],
  pin5: ["AIN1"],
  pin6: ["AIN2"],
  pin7: ["AIN3"],
  pin8: ["VDD"],
  pin9: ["SDA"],
  pin10: ["SCL"],
} as const;

const pinAttributes = {
  pin3: { requiresGround: true },
  pin8: { requiresPower: true },
} as const;

export const ADS1114IDGST = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C206016"],
      }}
      manufacturerPartNumber="ADS1114IDGST"
      footprint="ssop10_p0.4964mm_w4.4528mm_pw0.3023mm_pl1.3096mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C206016.obj?uuid=854098f5cce54b6caab82164a7d3deef",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C206016.step?uuid=854098f5cce54b6caab82164a7d3deef",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0.000012699999999199463, y: 0, z: -0.149083 },
      }}
      {...props}
    />
  );
};

export default ADS1114IDGST;
