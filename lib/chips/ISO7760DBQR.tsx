import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VCC1"],
  pin2: ["INA"],
  pin3: ["INB"],
  pin4: ["INC"],
  pin5: ["IND"],
  pin6: ["INE"],
  pin7: ["INF"],
  pin8: ["GND1"],
  pin9: ["GND2"],
  pin10: ["OUTF"],
  pin11: ["OUTE"],
  pin12: ["OUTD"],
  pin13: ["OUTC"],
  pin14: ["OUTB"],
  pin15: ["OUTA"],
  pin16: ["VCC2"],
} as const;

const pinAttributes = {
  pin1: { requiresPower: true },
  pin8: { requiresGround: true },
  pin9: { requiresGround: true },
  pin16: { requiresPower: true },
} as const;

export const ISO7760DBQR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2868628"],
      }}
      manufacturerPartNumber="ISO7760DBQR"
      footprint="dfn16_pillpads_p0.635mm_w7.1244mm_pw0.3556mm_pl1.8148mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2868628.obj?uuid=7930a2c82b96440c94ac54eca19670c7",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2868628.step?uuid=7930a2c82b96440c94ac54eca19670c7",
        pcbRotationOffset: 90,
        modelOriginPosition: {
          x: -0.000012700000070253736,
          y: -0.000012700000070253736,
          z: 0.075575,
        },
      }}
      {...props}
    />
  );
};

export default ISO7760DBQR;
