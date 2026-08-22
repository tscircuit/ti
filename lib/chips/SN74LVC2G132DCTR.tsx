import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["1A"],
  pin2: ["1B"],
  pin3: ["2Y"],
  pin4: ["GND"],
  pin5: ["2A"],
  pin6: ["2B"],
  pin7: ["1Y"],
  pin8: ["VCC"],
} as const;

const pinAttributes = {
  pin4: { requiresGround: true },
  pin8: { requiresPower: true },
} as const;

export const SN74LVC2G132DCTR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2870897"],
      }}
      manufacturerPartNumber="SN74LVC2G132DCTR"
      footprint="dfn_p0.6502mm_w4.9001mm_pw0.4mm_pl1.1mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2870897.obj?uuid=825adbefddfc4135b4c94b8fa6068f43",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2870897.step?uuid=825adbefddfc4135b4c94b8fa6068f43",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.455 },
      }}
      {...props}
    />
  );
};

export default SN74LVC2G132DCTR;
