import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["A1"],
  pin2: ["A0"],
  pin3: ["ALERT"],
  pin4: ["SDA"],
  pin5: ["SCL"],
  pin6: ["VS"],
  pin7: ["GND"],
  pin8: ["VBUS"],
  pin9: ["pin9"],
  pin10: ["IN_POS"],
} as const;

const pinAttributes = {
  pin7: { requiresGround: true },
} as const;

export const INA228AIDGSR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2887910"],
      }}
      manufacturerPartNumber="INA228AIDGSR"
      footprint="ssop10_p0.4964mm_w4.4528mm_pw0.3023mm_pl1.3096mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2887910.obj?uuid=854098f5cce54b6caab82164a7d3deef",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2887910.step?uuid=854098f5cce54b6caab82164a7d3deef",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0.000012699999999199463, y: 0, z: -0.149083 },
      }}
      {...props}
    />
  );
};

export default INA228AIDGSR;
