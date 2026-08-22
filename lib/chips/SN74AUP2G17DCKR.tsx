import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["1A"],
  pin2: ["GND"],
  pin3: ["2A"],
  pin4: ["2Y"],
  pin5: ["VCC"],
  pin6: ["1Y"],
} as const;

const pinAttributes = {
  pin2: { requiresGround: true },
  pin5: { requiresPower: true },
} as const;

export const SN74AUP2G17DCKR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C507231"],
      }}
      manufacturerPartNumber="SN74AUP2G17DCKR"
      footprint="sot363_pl0.78mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C507231.obj?uuid=e8c049de0bbc469ba32d5592f1765e02",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C507231.step?uuid=e8c049de0bbc469ba32d5592f1765e02",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: -0.000012700000070253736, y: 0, z: -0.1 },
      }}
      {...props}
    />
  );
};

export default SN74AUP2G17DCKR;
