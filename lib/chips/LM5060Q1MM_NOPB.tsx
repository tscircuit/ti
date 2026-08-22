import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["SENSE"],
  pin2: ["VIN"],
  pin3: ["OVP"],
  pin4: ["UVLO"],
  pin5: ["EN"],
  pin6: ["GND"],
  pin7: ["TIMER"],
  pin8: ["nPGD"],
  pin9: ["OUT"],
  pin10: ["GATE"],
} as const;

const pinAttributes = {
  pin2: { requiresPower: true },
  pin6: { requiresGround: true },
} as const;

export const LM5060Q1MM_NOPB = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2653802"],
      }}
      manufacturerPartNumber="LM5060Q1MM/NOPB"
      footprint="ssop10_p0.4964mm_w4.4528mm_pw0.3023mm_pl1.3096mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2653802.obj?uuid=854098f5cce54b6caab82164a7d3deef",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2653802.step?uuid=854098f5cce54b6caab82164a7d3deef",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0.000012699999999199463, y: 0, z: -0.149083 },
      }}
      {...props}
    />
  );
};

export default LM5060Q1MM_NOPB;
