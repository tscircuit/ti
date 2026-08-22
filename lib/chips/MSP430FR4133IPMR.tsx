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
  pin8: ["DVSS"],
  pin9: ["DVCC"],
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
  pin49: ["pin49"],
  pin50: ["pin50"],
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
  pin61: ["pin61"],
  pin62: ["pin62"],
  pin63: ["pin63"],
  pin64: ["pin64"],
} as const;

export const MSP430FR4133IPMR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C106759"],
      }}
      manufacturerPartNumber="MSP430FR4133IPMR"
      footprint="lga64_grid16x16_pillpads_p0.4999mm_w12.8998mm_h12.8998mm_pl1.8mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C106759.obj?uuid=7e9b9111dcfd48d3add0eab11d882721",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C106759.step?uuid=7e9b9111dcfd48d3add0eab11d882721",
        pcbRotationOffset: 270,
        modelOriginPosition: { x: 0, y: 0, z: 0.000795 },
      }}
      {...props}
    />
  );
};

export default MSP430FR4133IPMR;
