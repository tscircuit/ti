import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VDD"],
  pin2: ["HB"],
  pin3: ["HO"],
  pin4: ["HS"],
  pin5: ["NC"],
  pin6: ["RDT"],
  pin7: ["EN"],
  pin8: ["IN"],
  pin9: ["VSS"],
  pin10: ["LO"],
} as const;

const pinAttributes = {
  pin1: { requiresPower: true },
  pin5: { doNotConnect: true },
  pin9: { requiresGround: true },
} as const;

export const LM5106MMX_NOPB = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C91879"],
      }}
      manufacturerPartNumber="LM5106MMX/NOPB"
      footprint="ssop10_p0.4964mm_w4.4528mm_pw0.3023mm_pl1.3096mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C91879.obj?uuid=854098f5cce54b6caab82164a7d3deef",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C91879.step?uuid=854098f5cce54b6caab82164a7d3deef",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0.000012699999999199463, y: 0, z: -0.149083 },
      }}
      {...props}
    />
  );
};

export default LM5106MMX_NOPB;
