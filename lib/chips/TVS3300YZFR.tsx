import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin2: ["IN", "B1", "IN_B1"],
  pin1: ["IN", "B2", "IN_B2"],
  pin4: ["GND", "A1", "GND_A1"],
  pin3: ["GND", "A2", "GND_A2"],
} as const;

const pinRoles = {
  pin2: "input",
  pin1: "input",
  pin4: "ground",
  pin3: "ground",
} as const;

const pinAttributes = {
  pin4: {
    requiresGround: true,
  },
  pin3: {
    requiresGround: true,
  },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin4: [...pinLabels["pin4"], "pin1"],
  pin1: [...pinLabels["pin1"], "pin4"],
} as const;

export const TVS3300YZFR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2868943"],
      }}
      manufacturerPartNumber="TVS3300YZFR"
      footprint="bga4_p0.4999mm_pad0.23mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2868943.obj?uuid=c362fb6a9ad04dff8285cf86a3cfd2f2",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2868943.step?uuid=c362fb6a9ad04dff8285cf86a3cfd2f2",
        pcbRotationOffset: 90,
        modelOriginPosition: {
          x: 0.000012699999984988608,
          y: -0.000012699999999199463,
          z: -0.125,
        },
      }}
      {...props}
    />
  );
};

export default TVS3300YZFR;
