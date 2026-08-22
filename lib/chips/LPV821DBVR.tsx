import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["OUT"],
  pin2: ["V_NEG"],
  pin3: ["IN_P"],
  pin4: ["IN_N"],
  pin5: ["V_POS"],
} as const;

export const LPV821DBVR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C2864006"],
      }}
      manufacturerPartNumber="LPV821DBVR"
      footprint="sot25_w2.559mm_pl1.0218mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2864006.obj?uuid=a3627e6db3464532a44d7578734ca5e7",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2864006.step?uuid=a3627e6db3464532a44d7578734ca5e7",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.000012699999956566899, y: 0, z: -0.675 },
      }}
      {...props}
    />
  );
};

export default LPV821DBVR;
