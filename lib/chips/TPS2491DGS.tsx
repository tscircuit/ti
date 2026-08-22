import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["EN"],
  pin2: ["VREF"],
  pin3: ["PROG"],
  pin4: ["TIMER"],
  pin5: ["GND"],
  pin6: ["PG"],
  pin7: ["OUT"],
  pin8: ["GATE"],
  pin9: ["SENSE"],
  pin10: ["VCC"],
} as const;

const pinAttributes = {
  pin5: { requiresGround: true },
  pin10: { requiresPower: true },
} as const;

export const TPS2491DGS = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C1523908"],
      }}
      manufacturerPartNumber="TPS2491DGS"
      footprint="ssop10_p0.4964mm_w4.4528mm_pw0.3023mm_pl1.3096mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C1523908.obj?uuid=854098f5cce54b6caab82164a7d3deef",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C1523908.step?uuid=854098f5cce54b6caab82164a7d3deef",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0.000012699999999199463, y: 0, z: -0.149083 },
      }}
      {...props}
    />
  );
};

export default TPS2491DGS;
