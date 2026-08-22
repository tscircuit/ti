import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["GPIO11"],
  pin2: ["GPIO100"],
  pin3: ["GPIO12"],
  pin4: ["GPIO13"],
  pin5: ["GPIO14"],
  pin6: ["GPIO15"],
  pin7: ["VDDIO7"],
  pin8: ["VDD5"],
  pin9: ["pin9"],
  pin10: ["pin10"],
  pin11: ["pin11"],
  pin12: ["pin12"],
  pin13: ["pin13"],
  pin14: ["pin14"],
  pin15: ["C2"],
  pin16: ["pin16"],
  pin17: ["VSSA2"],
  pin18: ["VDDA2"],
  pin19: ["pin19"],
  pin20: ["A5"],
  pin21: ["A4"],
  pin22: ["A3"],
  pin23: ["A2"],
  pin24: ["A1"],
  pin25: ["pin25"],
  pin26: ["pin26"],
  pin27: ["pin27"],
  pin28: ["pin28"],
  pin29: ["pin29"],
  pin30: ["B2"],
  pin31: ["B3"],
  pin32: ["VREFLOB"],
  pin33: ["VSSA1"],
  pin34: ["VREFHIB"],
  pin35: ["VDDA1"],
  pin36: ["pin36"],
  pin37: ["pin37"],
  pin38: ["pin38"],
  pin39: ["pin39"],
  pin40: ["pin40"],
  pin41: ["VDDIO6"],
  pin42: ["GPIO34"],
  pin43: ["GPIO35"],
  pin44: ["VDD3VFL"],
  pin45: ["VDD4"],
  pin46: ["pin46"],
  pin47: ["pin47"],
  pin48: ["GPIO30"],
  pin49: ["TMS"],
  pin50: ["TCK"],
  pin51: ["GPIO41"],
  pin52: ["GPIO58"],
  pin53: ["GPIO59"],
  pin54: ["GPIO60"],
  pin55: ["VDDIO5"],
  pin56: ["GPIO61"],
  pin57: ["GPIO62"],
  pin58: ["GPIO63"],
  pin59: ["GPIO64"],
  pin60: ["GPIO65"],
  pin61: ["GPIO66"],
  pin62: ["VDDIO4"],
  pin63: ["VDD3"],
  pin64: ["VREGENZ"],
  pin65: ["VDDOSC"],
  pin66: ["pin66"],
  pin67: ["VSSOSC"],
  pin68: ["pin68"],
  pin69: ["XRSn"],
  pin70: ["VDDIO3"],
  pin71: ["GPIO46"],
  pin72: ["GPIO47"],
  pin73: ["GPIO42"],
  pin74: ["GPIO43"],
  pin75: ["GPIO69"],
  pin76: ["GPIO70"],
  pin77: ["GPIO71"],
  pin78: ["VDD2"],
  pin79: ["VDDIO2"],
  pin80: ["GPIO72"],
  pin81: ["GPIO73"],
  pin82: ["GPIO78"],
  pin83: ["GPIO80"],
  pin84: ["GPIO25"],
  pin85: ["GPIO84"],
  pin86: ["GPIO85"],
  pin87: ["GPIO86"],
  pin88: ["GPIO87"],
  pin89: ["GPIO0"],
  pin90: ["GPIO1"],
  pin91: ["GPIO2"],
  pin92: ["GPIO3"],
  pin93: ["GPIO4"],
  pin94: ["VDDIO1"],
  pin95: ["VDD1"],
  pin96: ["GPIO89"],
  pin97: ["GPIO90"],
  pin98: ["GPIO91"],
  pin99: ["GPIO92"],
  pin100: ["GPIO10"],
  pin101: ["VSS"],
} as const;

const pinAttributes = {
  pin8: { requiresPower: true },
  pin18: { requiresPower: true },
  pin35: { requiresPower: true },
  pin45: { requiresPower: true },
  pin63: { requiresPower: true },
  pin78: { requiresPower: true },
  pin95: { requiresPower: true },
  pin101: { requiresGround: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin101: [...pinLabels["pin101"], "thermalpad"],
} as const;

export const F28P650DK6PZPR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C34481522"],
      }}
      manufacturerPartNumber="F28P650DK6PZPR"
      footprint="qfn100_thermalpad6.7mmx6.7mm_pillpads_p0.4999mm_h17.2mm_pw0.28mm_pl1.6mm_pin1location(bottomside,left)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C34481522.obj?uuid=513640041996468ebaab51c7ebce3464",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C34481522.step?uuid=513640041996468ebaab51c7ebce3464",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.6 },
      }}
      {...props}
    />
  );
};

export default F28P650DK6PZPR;
