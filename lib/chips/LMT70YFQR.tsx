import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin4: ["GND", "A1"],
  pin3: ["VDD", "A2"],
  pin2: ["TAO", "B1"],
  pin1: ["T_ON", "B2"],
} as const;

const pinRoles = {
  pin4: "ground",
  pin3: "power",
} as const;

const pinAttributes = {
  pin4: {
    requiresGround: true,
  },
  pin3: {
    requiresPower: true,
  },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin4: [...pinLabels["pin4"], "pin1"],
  pin1: [...pinLabels["pin1"], "pin4"],
} as const;

export const LMT70YFQR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2862351"],
      }}
      manufacturerPartNumber="LMT70YFQR"
      footprint="bga4_p0.3998mm_pad0.184mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2862351.obj?uuid=b0075f66469b43d6ad9da14e58b17d2f",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2862351.step?uuid=b0075f66469b43d6ad9da14e58b17d2f",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.004999999999886318, y: 0, z: -0.18 },
      }}
      {...props}
    />
  );
};

export default LMT70YFQR;
