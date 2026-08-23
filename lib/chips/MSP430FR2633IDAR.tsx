import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["DVSS"],
  pin4: ["DVCC"],
  pin5: ["pin5"],
  pin6: ["pin6"],
  pin7: ["pin7"],
  pin8: ["pin8"],
  pin9: ["pin9"],
  pin10: ["pin10"],
  pin11: ["pin11"],
  pin12: ["pin12"],
  pin13: ["pin13"],
  pin14: ["pin14"],
  pin15: ["pin15"],
  pin16: ["pin16"],
  pin17: ["pin17"],
  pin18: ["pin18"],
  pin19: ["pin19"],
  pin20: ["pin20"],
  pin21: ["pin21"],
  pin22: ["pin22"],
  pin23: ["pin23"],
  pin24: ["VREG"],
  pin25: ["pin25"],
  pin26: ["pin26"],
  pin27: ["pin27"],
  pin28: ["pin28"],
  pin29: ["pin29"],
  pin30: ["pin30"],
  pin31: ["pin31"],
  pin32: ["pin32"],
} as const;

export const MSP430FR2633IDAR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C1339290"],
      }}
      manufacturerPartNumber="MSP430FR2633IDAR"
      footprint="dfn32_pillpads_p0.65mm_w9.193mm_pw0.343mm_pl1.7465mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C1339290.obj?uuid=819e3f8e671345eebf8200f4bb04caa4",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C1339290.step?uuid=819e3f8e671345eebf8200f4bb04caa4",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: -0.00011430000006384944, z: -0.6 },
      }}
      {...props}
    />
  );
};

export default MSP430FR2633IDAR;
