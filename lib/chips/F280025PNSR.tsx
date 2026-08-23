import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["GPIO30"],
  pin2: ["GPIO31"],
  pin3: ["GPIO29"],
  pin4: ["GPIO28"],
  pin5: ["XRSn"],
  pin6: ["GPIO46"],
  pin7: ["VDDIO1"],
  pin8: ["VDD1"],
  pin9: ["VSS1"],
  pin10: ["A6"],
  pin11: ["C6"],
  pin12: ["pin12"],
  pin13: ["pin13"],
  pin14: ["pin14"],
  pin15: ["pin15"],
  pin16: ["pin16"],
  pin17: ["pin17"],
  pin18: ["A1"],
  pin19: ["pin19"],
  pin20: ["VREFHI"],
  pin21: ["VREFLO"],
  pin22: ["pin22"],
  pin23: ["pin23"],
  pin24: ["pin24"],
  pin25: ["VSSA"],
  pin26: ["VDDA"],
  pin27: ["pin27"],
  pin28: ["pin28"],
  pin29: ["pin29"],
  pin30: ["VSS2"],
  pin31: ["VDD2"],
  pin32: ["VDDIO2"],
  pin33: ["FLT2"],
  pin34: ["FLT1"],
  pin35: ["GPIO13"],
  pin36: ["GPIO12"],
  pin37: ["GPIO11"],
  pin38: ["GPIO33"],
  pin39: ["GPIO16"],
  pin40: ["GPIO17"],
  pin41: ["GPIO24"],
  pin42: ["GPIO25"],
  pin43: ["GPIO26"],
  pin44: ["GPIO27"],
  pin45: ["TCK"],
  pin46: ["pin46"],
  pin47: ["TMS"],
  pin48: ["pin48"],
  pin49: ["GPIO32"],
  pin50: ["pin50"],
  pin51: ["pin51"],
  pin52: ["VDDIO3"],
  pin53: ["VDD3"],
  pin54: ["GPIO43"],
  pin55: ["VSS3"],
  pin56: ["GPIO39"],
  pin57: ["GPIO42"],
  pin58: ["GPIO8"],
  pin59: ["GPIO4"],
  pin60: ["GPIO3"],
  pin61: ["GPIO2"],
  pin62: ["GPIO1"],
  pin63: ["GPIO0"],
  pin64: ["GPIO40"],
  pin65: ["GPIO23"],
  pin66: ["GPIO41"],
  pin67: ["GPIO22"],
  pin68: ["GPIO7"],
  pin69: ["GPIO44"],
  pin70: ["VSS4"],
  pin71: ["VDD4"],
  pin72: ["VDDIO4"],
  pin73: ["GPIO45"],
  pin74: ["GPIO5"],
  pin75: ["GPIO9"],
  pin76: ["GPIO10"],
  pin77: ["GPIO34"],
  pin78: ["GPIO15"],
  pin79: ["GPIO14"],
  pin80: ["GPIO6"],
} as const;

const pinAttributes = {
  pin8: { requiresPower: true },
  pin9: { requiresGround: true },
  pin26: { requiresPower: true },
  pin30: { requiresGround: true },
  pin31: { requiresPower: true },
  pin53: { requiresPower: true },
  pin55: { requiresGround: true },
  pin70: { requiresGround: true },
  pin71: { requiresPower: true },
} as const;

export const F280025PNSR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C5218674"],
      }}
      manufacturerPartNumber="F280025PNSR"
      footprint="qfn80_pillpads_p0.4999mm_h15.4998mm_pw0.28mm_pl1.5mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C5218674.obj?uuid=3054dfda187d4aca8a5768d7a8f5a9ec",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C5218674.step?uuid=3054dfda187d4aca8a5768d7a8f5a9ec",
        pcbRotationOffset: 270,
        modelOriginPosition: {
          x: -0.0000762000000023022,
          y: -0.000025399999969977216,
          z: -0.149425,
        },
      }}
      {...props}
    />
  );
};

export default F280025PNSR;
