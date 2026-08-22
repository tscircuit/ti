import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["GND"],
  pin2: ["EN"],
  pin3: ["NC1"],
  pin4: ["VCAP"],
  pin5: ["ANODE"],
  pin6: ["GATE"],
  pin7: ["NC2"],
  pin8: ["CATHODE"],
} as const;

const pinAttributes = {
  pin1: { requiresGround: true },
  pin3: { doNotConnect: true },
  pin7: { doNotConnect: true },
} as const;

export const LM74700QDRQ1 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C33579657"],
      }}
      manufacturerPartNumber="LM74700QDRQ1"
      footprint="soic8_pillpads_w7.3998mm_pl1.6mm_pin1location(rightside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C33579657.obj?uuid=0fe43b011800427db059974cb0251631",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C33579657.step?uuid=0fe43b011800427db059974cb0251631",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0.000012699999956566899, z: -0.86 },
      }}
      {...props}
    />
  );
};

export default LM74700QDRQ1;
