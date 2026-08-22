import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["pin4"],
  pin5: ["pin5"],
  pin6: ["pin6"],
  pin7: ["pin7"],
  pin8: ["pin8"],
  pin9: ["pin9"],
  pin10: ["pin10"],
  pin11: ["AVCC1"],
  pin12: ["pin12"],
  pin13: ["pin13"],
  pin14: ["AVSS1"],
  pin15: ["pin15"],
  pin16: ["pin16"],
  pin17: ["pin17"],
  pin18: ["DVCC1"],
  pin19: ["DVSS1"],
  pin20: ["VCORE"],
  pin21: ["pin21"],
  pin22: ["pin22"],
  pin23: ["pin23"],
  pin24: ["pin24"],
  pin25: ["pin25"],
  pin26: ["pin26"],
  pin27: ["pin27"],
  pin28: ["pin28"],
  pin29: ["pin29"],
  pin30: ["pin30"],
  pin31: ["pin31"],
  pin32: ["pin32"],
  pin33: ["pin33"],
  pin34: ["pin34"],
  pin35: ["pin35"],
  pin36: ["pin36"],
  pin37: ["pin37"],
  pin38: ["pin38"],
  pin39: ["pin39"],
  pin40: ["pin40"],
  pin41: ["pin41"],
  pin42: ["pin42"],
  pin43: ["pin43"],
  pin44: ["pin44"],
  pin45: ["pin45"],
  pin46: ["pin46"],
  pin47: ["pin47"],
  pin48: ["pin48"],
  pin49: ["DVSS2"],
  pin50: ["DVCC2"],
  pin51: ["pin51"],
  pin52: ["pin52"],
  pin53: ["pin53"],
  pin54: ["pin54"],
  pin55: ["pin55"],
  pin56: ["pin56"],
  pin57: ["pin57"],
  pin58: ["pin58"],
  pin59: ["pin59"],
  pin60: ["pin60"],
  pin61: ["VSSU"],
  pin62: ["pin62"],
  pin63: ["PUR"],
  pin64: ["pin64"],
  pin65: ["VBUS"],
  pin66: ["VUSB"],
  pin67: ["V18"],
  pin68: ["AVSS2"],
  pin69: ["pin69"],
  pin70: ["pin70"],
  pin71: ["pin71"],
  pin72: ["pin72"],
  pin73: ["pin73"],
  pin74: ["pin74"],
  pin75: ["pin75"],
  pin76: ["pin76"],
  pin77: ["pin77"],
  pin78: ["pin78"],
  pin79: ["pin79"],
  pin80: ["pin80"],
} as const;

export const MSP430F5529IPN = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C75712"],
      }}
      manufacturerPartNumber="MSP430F5529IPN"
      footprint="qfn80_pillpads_p0.4999mm_h15.4998mm_pw0.28mm_pl1.5mm_pin1location(bottomside,left)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C75712.obj?uuid=3054dfda187d4aca8a5768d7a8f5a9ec",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C75712.step?uuid=3054dfda187d4aca8a5768d7a8f5a9ec",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.149425 },
      }}
      {...props}
    />
  );
};

export default MSP430F5529IPN;
