import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["1A"],
  pin2: ["3Y"],
  pin3: ["2A"],
  pin4: ["GND"],
  pin5: ["2Y"],
  pin6: ["3A"],
  pin7: ["1Y"],
  pin8: ["VCC"],
} as const;

const pinAttributes = {
  pin4: { requiresGround: true },
  pin8: { requiresPower: true },
} as const;

export const SN74LVC3G07DCUR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C131955"],
      }}
      manufacturerPartNumber="SN74LVC3G07DCUR"
      footprint="dfn8_pillpads_p0.5001mm_w3.7102mm_pw0.28mm_pl0.905mm_pin1location(rightside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C131955.obj?uuid=4ba1a5485b0b4bfe8267dec7566677a7",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C131955.step?uuid=4ba1a5485b0b4bfe8267dec7566677a7",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0, y: 0.000012699999956566899, z: -0.535 },
      }}
      {...props}
    />
  );
};

export default SN74LVC3G07DCUR;
