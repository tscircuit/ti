import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VPC"],
  pin2: ["VSC"],
  pin3: ["TBLK"],
  pin4: ["DRV"],
  pin5: ["GND"],
  pin6: ["VDD"],
} as const;

const pinAttributes = {
  pin5: { requiresGround: true },
  pin6: { requiresPower: true },
} as const;

export const UCC24636DBVR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2868874"],
      }}
      manufacturerPartNumber="UCC24636DBVR"
      footprint="sot_h1.7434mm_pl1.1304mm_pin1location(rightside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2868874.obj?uuid=229b69761e2c45dba6a83d8866dec72d",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2868874.step?uuid=229b69761e2c45dba6a83d8866dec72d",
        pcbRotationOffset: 180,
        modelOriginPosition: {
          x: 0.000025399999913133797,
          y: -0.0000889000000370288,
          z: -0.048939,
        },
      }}
      {...props}
    />
  );
};

export default UCC24636DBVR;
