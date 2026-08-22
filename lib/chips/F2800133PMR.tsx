import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["GPIO29"],
  pin2: ["pin2"],
  pin3: ["XRSn"],
  pin4: ["VDD1"],
  pin5: ["VSS1"],
  pin6: ["pin6"],
  pin7: ["pin7"],
  pin8: ["pin8"],
  pin9: ["pin9"],
  pin10: ["pin10"],
  pin11: ["pin11"],
  pin12: ["pin12"],
  pin13: ["pin13"],
  pin14: ["A1"],
  pin15: ["pin15"],
  pin16: ["VREFHI"],
  pin17: ["VREFLO"],
  pin18: ["pin18"],
  pin19: ["pin19"],
  pin20: ["pin20"],
  pin21: ["VSSA"],
  pin22: ["VDDA"],
  pin23: ["pin23"],
  pin24: ["pin24"],
  pin25: ["pin25"],
  pin26: ["VSS2"],
  pin27: ["pin27"],
  pin28: ["pin28"],
  pin29: ["pin29"],
  pin30: ["pin30"],
  pin31: ["GPIO11"],
  pin32: ["GPIO33"],
  pin33: ["GPIO16"],
  pin34: ["GPIO17"],
  pin35: ["GPIO24"],
  pin36: ["TCK"],
  pin37: ["pin37"],
  pin38: ["TMS"],
  pin39: ["pin39"],
  pin40: ["GPIO32"],
  pin41: ["pin41"],
  pin42: ["pin42"],
  pin43: ["VDDIO1"],
  pin44: ["VDD2"],
  pin45: ["VSS3"],
  pin46: ["GPIO39"],
  pin47: ["GPIO8"],
  pin48: ["GPIO4"],
  pin49: ["GPIO3"],
  pin50: ["GPIO2"],
  pin51: ["GPIO1"],
  pin52: ["GPIO0"],
  pin53: ["GPIO40"],
  pin54: ["GPIO23"],
  pin55: ["GPIO41"],
  pin56: ["GPIO22"],
  pin57: ["GPIO7"],
  pin58: ["VSS4"],
  pin59: ["VDD3"],
  pin60: ["VDDIO2"],
  pin61: ["GPIO5"],
  pin62: ["GPIO9"],
  pin63: ["GPIO10"],
  pin64: ["GPIO6"],
} as const;

const pinAttributes = {
  pin4: { requiresPower: true },
  pin5: { requiresGround: true },
  pin22: { requiresPower: true },
  pin26: { requiresGround: true },
  pin44: { requiresPower: true },
  pin45: { requiresGround: true },
  pin58: { requiresGround: true },
  pin59: { requiresPower: true },
} as const;

export const F2800133PMR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C34124423"],
      }}
      manufacturerPartNumber="F2800133PMR"
      footprint="lga64_grid16x16_pillpads_p0.4999mm_w13.4996mm_h13.4996mm_pw0.3mm_pl2mm_pin1location(bottomside,left)"
      {...props}
    />
  );
};

export default F2800133PMR;
