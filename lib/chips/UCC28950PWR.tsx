import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VREF"],
  pin2: ["EA_POS"],
  pin3: ["EA_NEG"],
  pin4: ["COMP"],
  pin5: ["pin5"],
  pin6: ["DELAB"],
  pin7: ["DELCD"],
  pin8: ["DELEF"],
  pin9: ["TMIN"],
  pin10: ["RT"],
  pin11: ["RSUM"],
  pin12: ["DCM"],
  pin13: ["ADELEF"],
  pin14: ["ADEL"],
  pin15: ["CS"],
  pin16: ["SYNC"],
  pin17: ["OUTF"],
  pin18: ["OUTE"],
  pin19: ["OUTD"],
  pin20: ["OUTC"],
  pin21: ["OUTB"],
  pin22: ["OUTA"],
  pin23: ["VDD"],
  pin24: ["GND"],
} as const;

const pinAttributes = {
  pin23: { requiresPower: true },
  pin24: { requiresGround: true },
} as const;

export const UCC28950PWR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C91312"],
      }}
      manufacturerPartNumber="UCC28950PWR"
      footprint="dfn24_p0.65mm_w7.6952mm_pw0.4mm_pl1.65mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C91312.obj?uuid=4564b07290534b8ea1373eede2664361",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C91312.step?uuid=4564b07290534b8ea1373eede2664361",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0, y: 0, z: -0.019205 },
      }}
      {...props}
    />
  );
};

export default UCC28950PWR;
