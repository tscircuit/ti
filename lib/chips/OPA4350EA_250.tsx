import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["OutA"],
  pin2: ["pin2"],
  pin3: ["InA_P"],
  pin4: ["V_P"],
  pin5: ["InB_P"],
  pin6: ["pin6"],
  pin7: ["OutB"],
  pin8: ["NC2"],
  pin9: ["NC1"],
  pin10: ["OutC"],
  pin11: ["pin11"],
  pin12: ["InC_P"],
  pin13: ["pin13"],
  pin14: ["InD_P"],
  pin15: ["pin15"],
  pin16: ["OutD"],
} as const;

const pinAttributes = {
  pin8: { doNotConnect: true },
  pin9: { doNotConnect: true },
} as const;

export const OPA4350EA_250 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C181497"],
      }}
      manufacturerPartNumber="OPA4350EA/250"
      footprint="dfn16_pillpads_p0.635mm_w7.1244mm_pw0.3556mm_pl1.8148mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C181497.obj?uuid=7930a2c82b96440c94ac54eca19670c7",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C181497.step?uuid=7930a2c82b96440c94ac54eca19670c7",
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

export default OPA4350EA_250;
