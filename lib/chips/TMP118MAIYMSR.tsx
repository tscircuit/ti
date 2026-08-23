import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VDD", "A1"],
  pin3: ["SDA", "B1"],
  pin2: ["GND", "A2"],
  pin4: ["SCL", "B2"],
} as const;

const pinRoles = {
  pin1: "power",
  pin3: "bidirectional",
  pin2: "ground",
  pin4: "input",
} as const;

const pinAttributes = {
  pin1: {
    requiresPower: true,
  },
  pin2: {
    requiresGround: true,
  },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin3: [...pinLabels["pin3"], "pin2"],
  pin2: [...pinLabels["pin2"], "pin3"],
} as const;

export const TMP118MAIYMSR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C43693843"],
      }}
      manufacturerPartNumber="TMP118MAIYMSR"
      footprint="bga4_p0.3002mm_pad0.136mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C43693843.obj?uuid=48677e56e83d4b1abd5fdddd21adc9c0",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C43693843.step?uuid=48677e56e83d4b1abd5fdddd21adc9c0",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.075 },
      }}
      {...props}
    />
  );
};

export default TMP118MAIYMSR;
