import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin9: ["BAT", "C3"],
  pin2: ["BIN", "B1"],
  pin1: ["GPOUT", "A1"],
  pin7: ["SCL", "A3"],
  pin4: ["SDA", "A2"],
  pin6: ["SRN", "C2"],
  pin3: ["SRP", "C1"],
  pin8: ["VDD", "B3"],
  pin5: ["VSS", "B2"],
} as const;

const pinRoles = {
  pin8: "power",
  pin5: "ground",
} as const;

const pinAttributes = {
  pin8: {
    requiresPower: true,
  },
  pin5: {
    requiresGround: true,
  },
} as const;

export const BQ27426YZFR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C165137"],
      }}
      manufacturerPartNumber="BQ27426YZFR"
      footprint="bga9_p0.4999mm_pad0.24mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C165137.obj?uuid=c8ba48956b1e4bae9f15785ae42980b7",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C165137.step?uuid=c8ba48956b1e4bae9f15785ae42980b7",
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

export default BQ27426YZFR;
