import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["R"],
  pin2: ["RE"],
  pin3: ["DE"],
  pin4: ["D"],
  pin5: ["GND"],
  pin6: ["Y"],
  pin7: ["Z"],
  pin8: ["B"],
  pin9: ["A"],
  pin10: ["VCC"],
} as const;

const pinAttributes = {
  pin5: { requiresGround: true },
  pin10: { requiresPower: true },
} as const;

export const THVD1452DGS = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C1137454"],
      }}
      manufacturerPartNumber="THVD1452DGS"
      footprint="ssop10_p0.4964mm_w4.4528mm_pw0.3023mm_pl1.3096mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C1137454.obj?uuid=854098f5cce54b6caab82164a7d3deef",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C1137454.step?uuid=854098f5cce54b6caab82164a7d3deef",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0.000012699999999199463, y: 0, z: -0.149083 },
      }}
      {...props}
    />
  );
};

export default THVD1452DGS;
