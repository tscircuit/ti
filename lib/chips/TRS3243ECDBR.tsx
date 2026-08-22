import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["C2_POS"],
  pin2: ["C2_NEG"],
  pin3: ["V_NEG"],
  pin4: ["RIN1"],
  pin5: ["RIN2"],
  pin6: ["RIN3"],
  pin7: ["RIN4"],
  pin8: ["RIN5"],
  pin9: ["DOUT1"],
  pin10: ["DOUT2"],
  pin11: ["DOUT3"],
  pin12: ["DIN3"],
  pin13: ["DIN2"],
  pin14: ["DIN1"],
  pin15: ["ROUT5"],
  pin16: ["ROUT4"],
  pin17: ["ROUT3"],
  pin18: ["ROUT2"],
  pin19: ["ROUT1"],
  pin20: ["ROUT2B"],
  pin21: ["INVALID"],
  pin22: ["FORCEOFF"],
  pin23: ["FORCEON"],
  pin24: ["C1_NEG"],
  pin25: ["GND"],
  pin26: ["VCC"],
  pin27: ["V_POS"],
  pin28: ["C1_POS"],
} as const;

const pinAttributes = {
  pin25: { requiresGround: true },
  pin26: { requiresPower: true },
} as const;

export const TRS3243ECDBR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C544326"],
      }}
      manufacturerPartNumber="TRS3243ECDBR"
      footprint="dfn28_pillpads_p0.65mm_w8.9258mm_pw0.364mm_pl2.0155mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C544326.obj?uuid=f6684975c608438e85ae4e120e588908",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C544326.step?uuid=f6684975c608438e85ae4e120e588908",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  );
};

export default TRS3243ECDBR;
