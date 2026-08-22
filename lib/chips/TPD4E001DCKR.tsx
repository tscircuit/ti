import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["IO1"],
  pin2: ["GND"],
  pin3: ["IO2"],
  pin4: ["IO3"],
  pin5: ["VCC"],
  pin6: ["IO4"],
} as const;

const pinAttributes = {
  pin2: { requiresGround: true },
  pin5: { requiresPower: true },
} as const;

export const TPD4E001DCKR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C1973965"],
      }}
      manufacturerPartNumber="TPD4E001DCKR"
      footprint="sot563_p0.65mm_w3.0502mm_pl0.85mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C1973965.obj?uuid=190ec793c4fb4dd685e7d8ea6d5a8fd2",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C1973965.step?uuid=190ec793c4fb4dd685e7d8ea6d5a8fd2",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: -0.000012700000070253736, z: -0.5 },
      }}
      {...props}
    />
  );
};

export default TPD4E001DCKR;
