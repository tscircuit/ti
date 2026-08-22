import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["I_O", "1"],
  pin2: ["GND", "2"],
} as const;

const pinRoles = {
  pin2: "ground",
} as const;

const pinAttributes = {
  pin2: {
    requiresGround: true,
  },
} as const;

export const TPD1E10B06DYAR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C3712135"],
      }}
      manufacturerPartNumber="TPD1E10B06DYAR"
      footprint="res_p1.4999mm_pw0.6mm_ph0.4mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C3712135.obj?uuid=1c55af31f47d4d9db45f00e5a148cdf3",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C3712135.step?uuid=1c55af31f47d4d9db45f00e5a148cdf3",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: -0.2132400000000142,
          y: -0.010919000000014195,
          z: -0.71,
        },
      }}
      {...props}
    />
  );
};

export default TPD1E10B06DYAR;
