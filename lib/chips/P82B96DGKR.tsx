import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["Sx"],
  pin2: ["Rx"],
  pin3: ["Tx"],
  pin4: ["GND"],
  pin5: ["Ty"],
  pin6: ["Ry"],
  pin7: ["Sy"],
  pin8: ["VCC"],
} as const;

const pinAttributes = {
  pin4: { requiresGround: true },
  pin8: { requiresPower: true },
} as const;

export const P82B96DGKR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2652360"],
      }}
      manufacturerPartNumber="P82B96DGKR"
      footprint="dfn8_pillpads_p0.65mm_w5.8498mm_pw0.38mm_pl1.45mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2652360.obj?uuid=745f4a63f92f44b78c4ba3925feaa542",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2652360.step?uuid=745f4a63f92f44b78c4ba3925feaa542",
        pcbRotationOffset: 90,
        modelOriginPosition: {
          x: -0.000012700000070253736,
          y: 0,
          z: -0.149083,
        },
      }}
      {...props}
    />
  );
};

export default P82B96DGKR;
