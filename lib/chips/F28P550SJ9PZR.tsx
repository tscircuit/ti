import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["XRSn"],
  pin3: ["VDDIO3"],
  pin4: ["VDD3"],
  pin5: ["VSS4"],
  pin6: ["GPIO47"],
  pin7: ["GPIO48"],
  pin8: ["GPIO49"],
  pin9: ["GPIO50"],
  pin10: ["GPIO51"],
  pin11: ["GPIO52"],
  pin12: ["GPIO53"],
  pin13: ["GPIO54"],
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
  pin33: ["VSSA"],
  pin34: ["VDDA"],
  pin35: ["A5"],
  pin36: ["pin36"],
  pin37: ["A8"],
  pin38: ["pin38"],
  pin39: ["pin39"],
  pin40: ["pin40"],
  pin41: ["pin41"],
  pin42: ["pin42"],
  pin43: ["GPIO55"],
  pin44: ["GPIO60"],
  pin45: ["VSS3"],
  pin46: ["GPIO62"],
  pin47: ["GPIO63"],
  pin48: ["pin48"],
  pin49: ["pin49"],
  pin50: ["pin50"],
  pin51: ["pin51"],
  pin52: ["pin52"],
  pin53: ["pin53"],
  pin54: ["pin54"],
  pin55: ["pin55"],
  pin56: ["pin56"],
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
  pin68: ["pin68"],
  pin69: ["pin69"],
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
  pin80: ["GPIO40"],
  pin81: ["GPIO23"],
  pin82: ["GPIO41"],
  pin83: ["GPIO22"],
  pin84: ["GPIO7"],
  pin85: ["GPIO44"],
  pin86: ["VSS1"],
  pin87: ["VDD1"],
  pin88: ["VDDIO1"],
  pin89: ["GPIO5"],
  pin90: ["GPIO9"],
  pin91: ["GPIO61"],
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
  pin34: { requiresPower: true },
  pin45: { requiresGround: true },
  pin71: { requiresPower: true },
  pin72: { requiresGround: true },
  pin86: { requiresGround: true },
  pin87: { requiresPower: true },
} as const;

export const F28P550SJ9PZR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C42272835"],
      }}
      manufacturerPartNumber="F28P550SJ9PZR"
      footprint="qfn100_pillpads_p0.4999mm_h16.8998mm_pw0.3mm_pl1.6mm_pin1location(bottomside,left)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C42272835.obj?uuid=dcc1c7ac602c4975b215b1407bde4684",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C42272835.step?uuid=dcc1c7ac602c4975b215b1407bde4684",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  );
};

export default F28P550SJ9PZR;
