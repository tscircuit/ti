import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["EN", "A1"],
  pin4: ["REG", "A2"],
  pin7: ["OUT_P", "A3"],
  pin2: ["IN_TRIG", "B1"],
  pin5: ["SDA", "B2"],
  pin8: ["GND", "B3"],
  pin3: ["SCL", "C1"],
  pin9: ["OUT_N", "C3"],
  pin6: ["VDD", "C2"],
} as const;

const pinRoles = {
  pin1: "input",
  pin4: "output",
  pin7: "output",
  pin2: "input",
  pin5: "bidirectional",
  pin8: "ground",
  pin3: "input",
  pin9: "output",
  pin6: "power",
} as const;

const pinAttributes = {
  pin8: {
    requiresGround: true,
  },
  pin6: {
    requiresPower: true,
  },
} as const;

export const DRV2605YZFR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C81079"],
      }}
      manufacturerPartNumber="DRV2605YZFR"
      footprint="bga9_p0.4999mm_pad0.24mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C81079.obj?uuid=c8ba48956b1e4bae9f15785ae42980b7",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C81079.step?uuid=c8ba48956b1e4bae9f15785ae42980b7",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: 0.00011430000017753628,
          y: -0.00013969999997698324,
          z: -0.605,
        },
      }}
      {...props}
    />
  );
};

export default DRV2605YZFR;
