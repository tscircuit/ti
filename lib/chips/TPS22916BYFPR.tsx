import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin2: ["VOUT", "A1"],
  pin4: ["VIN", "A2"],
  pin1: ["GND", "B1"],
  pin3: ["ON", "B2"],
} as const;

const pinRoles = {
  pin2: "power",
  pin4: "power",
  pin1: "ground",
} as const;

const pinAttributes = {
  pin2: {
    requiresPower: true,
  },
  pin4: {
    requiresPower: true,
  },
  pin1: {
    requiresGround: true,
  },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin3: [...pinLabels["pin3"], "pin2"],
  pin2: [...pinLabels["pin2"], "pin3"],
} as const;

export const TPS22916BYFPR = (props: ChipProps<typeof pinLabels>) => {
  const { name = "SW1", ...restProps } = props;

  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      name={name}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2150095"],
      }}
      manufacturerPartNumber="TPS22916BYFPR"
      footprint="bga4_p0.3998mm_pad0.18mm_pin1location(rightside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2150095.obj?uuid=f0303b2735bb4bad84b043b8a9896361",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2150095.step?uuid=f0303b2735bb4bad84b043b8a9896361",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: -0.000012699999956566899, z: -0.48 },
      }}
      {...restProps}
    />
  );
};

export default TPS22916BYFPR;
