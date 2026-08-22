import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VOUT", "A1"],
  pin2: ["VIN", "A2"],
  pin3: ["GND", "B1"],
  pin4: ["ON", "B2"],
} as const;

const pinRoles = {
  pin1: "output",
  pin2: "input",
  pin3: "ground",
  pin4: "input",
} as const;

const pinAttributes = {
  pin3: {
    requiresGround: true,
  },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin3: [...pinLabels["pin3"], "pin2"],
  pin2: [...pinLabels["pin2"], "pin3"],
} as const;

export const TPS22910AYZVR = (props: ChipProps<typeof pinLabels>) => {
  const { name = "SW1", ...restProps } = props;

  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      name={name}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C205966"],
      }}
      manufacturerPartNumber="TPS22910AYZVR"
      footprint="bga4_p0.4999mm_pad0.184mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C205966.obj?uuid=5e818f72fcab4d7f8e9eead73fdb6903",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C205966.step?uuid=5e818f72fcab4d7f8e9eead73fdb6903",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: -0.00007619999996677507,
          y: -0.00007619999996677507,
          z: -0.48,
        },
      }}
      {...restProps}
    />
  );
};

export default TPS22910AYZVR;
