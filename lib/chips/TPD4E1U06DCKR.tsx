import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["D1_POS"],
  pin2: ["GND"],
  pin3: ["D2_POS"],
  pin4: ["D2_NEG"],
  pin5: ["NC"],
  pin6: ["D1_NEG"],
} as const;

const pinAttributes = {
  pin2: { requiresGround: true },
  pin5: { doNotConnect: true },
} as const;

export const TPD4E1U06DCKR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C194628"],
      }}
      manufacturerPartNumber="TPD4E1U06DCKR"
      footprint="sot363_pl0.78mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C194628.obj?uuid=e8c049de0bbc469ba32d5592f1765e02",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C194628.step?uuid=e8c049de0bbc469ba32d5592f1765e02",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: -0.000012700000070253736, y: 0, z: -0.1 },
      }}
      {...props}
    />
  );
};

export default TPD4E1U06DCKR;
