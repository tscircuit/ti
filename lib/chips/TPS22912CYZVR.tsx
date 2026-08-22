import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin4: ["VOUT", "A1"],
  pin3: ["VIN", "A2"],
  pin2: ["GND", "B1"],
  pin1: ["ON", "B2"],
} as const;

const pinRoles = {
  pin4: "output",
  pin3: "input",
  pin2: "ground",
  pin1: "input",
} as const;

const pinAttributes = {
  pin2: {
    requiresGround: true,
  },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin3: [...pinLabels["pin3"], "pin2"],
  pin2: [...pinLabels["pin2"], "pin3"],
} as const;

export const TPS22912CYZVR = (props: ChipProps<typeof pinLabels>) => {
  const { name = "SW1", ...restProps } = props;

  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      name={name}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C183088"],
      }}
      manufacturerPartNumber="TPS22912CYZVR"
      footprint="bga4_p0.4999mm_pad0.23mm_pin1location(rightside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C183088.obj?uuid=4563cd2a76e34c6fb9be249fef817707",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C183088.step?uuid=4563cd2a76e34c6fb9be249fef817707",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.5125 },
      }}
      {...restProps}
    />
  );
};

export default TPS22912CYZVR;
