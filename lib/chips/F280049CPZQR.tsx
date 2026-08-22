import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["GPIO28"],
  pin2: ["XRSn"],
  pin3: ["VDDIO4"],
  pin4: ["VDD4"],
  pin5: ["VSS4"],
  pin6: ["pin6"],
  pin7: ["pin7"],
  pin8: ["pin8"],
  pin9: ["pin9"],
  pin10: ["A3"],
  pin11: ["VDDA2"],
  pin12: ["VSSA2"],
  pin13: ["PGA5_GND"],
  pin14: ["PGA1_GND"],
  pin15: ["PGA3_GND"],
  pin16: ["PGA5_IN"],
  pin17: ["C4"],
  pin18: ["PGA1_IN"],
  pin19: ["C0"],
  pin20: ["PGA3_IN"],
  pin21: ["C2"],
  pin22: ["pin22"],
  pin23: ["pin23"],
  pin24: ["pin24"],
  pin25: ["VREFHIA"],
  pin26: ["pin26"],
  pin27: ["VREFLOA"],
  pin28: ["pin28"],
  pin29: ["C1"],
  pin30: ["PGA2_IN"],
  pin31: ["pin31"],
  pin32: ["pin32"],
  pin33: ["VSSA1"],
  pin34: ["VDDA1"],
  pin35: ["A5"],
  pin36: ["pin36"],
  pin37: ["pin37"],
  pin38: ["A9"],
  pin39: ["pin39"],
  pin40: ["pin40"],
  pin41: ["B0"],
  pin42: ["PGA7_GND"],
  pin43: ["PGA7_IN"],
  pin44: ["C14"],
  pin45: ["VSS3"],
  pin46: ["VDD3"],
  pin47: ["VDDIO3"],
  pin48: ["FLT2"],
  pin49: ["FLT1"],
  pin50: ["GPIO13"],
  pin51: ["GPIO12"],
  pin52: ["GPIO11"],
  pin53: ["GPIO33"],
  pin54: ["GPIO16"],
  pin55: ["GPIO17"],
  pin56: ["GPIO24"],
  pin57: ["GPIO25"],
  pin58: ["GPIO26"],
  pin59: ["GPIO27"],
  pin60: ["TCK"],
  pin61: ["pin61"],
  pin62: ["TMS"],
  pin63: ["pin63"],
  pin64: ["GPIO32"],
  pin65: ["GPIO56"],
  pin66: ["GPIO57"],
  pin67: ["GPIO58"],
  pin68: ["GPIO18_X2"],
  pin69: ["X1"],
  pin70: ["VDDIO2"],
  pin71: ["VDD2"],
  pin72: ["VSS2"],
  pin73: ["VREGENZ"],
  pin74: ["GPIO8"],
  pin75: ["GPIO4"],
  pin76: ["GPIO3"],
  pin77: ["GPIO2"],
  pin78: ["GPIO1"],
  pin79: ["GPIO0"],
  pin80: ["VDDIO_SW"],
  pin81: ["GPIO23_VSW"],
  pin82: ["VSS_SW"],
  pin83: ["GPIO22_VFBSW"],
  pin84: ["GPIO7"],
  pin85: ["GPIO40"],
  pin86: ["VSS1"],
  pin87: ["VDD1"],
  pin88: ["VDDIO1"],
  pin89: ["GPIO5"],
  pin90: ["GPIO9"],
  pin91: ["GPIO39"],
  pin92: ["GPIO59"],
  pin93: ["GPIO10"],
  pin94: ["GPIO34"],
  pin95: ["GPIO15"],
  pin96: ["GPIO14"],
  pin97: ["GPIO6"],
  pin98: ["GPIO30"],
  pin99: ["GPIO31"],
  pin100: ["GPIO29"],
} as const;

const pinAttributes = {
  pin4: { requiresPower: true },
  pin5: { requiresGround: true },
  pin11: { requiresPower: true },
  pin34: { requiresPower: true },
  pin45: { requiresGround: true },
  pin46: { requiresPower: true },
  pin71: { requiresPower: true },
  pin72: { requiresGround: true },
  pin86: { requiresGround: true },
  pin87: { requiresPower: true },
} as const;

export const F280049CPZQR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C1880111"],
      }}
      manufacturerPartNumber="F280049CPZQR"
      footprint="qfn100_pillpads_p0.4999mm_h17.2996mm_pw0.3mm_pl1.6mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C1880111.obj?uuid=b5ab355f3fc14a5dabbe2fb50a362a90",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C1880111.step?uuid=b5ab355f3fc14a5dabbe2fb50a362a90",
        pcbRotationOffset: 270,
        modelOriginPosition: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  );
};

export default F280049CPZQR;
