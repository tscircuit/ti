import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["GPIO11"],
  pin2: ["VDDIO1"],
  pin3: ["GPIO12"],
  pin4: ["GPIO13"],
  pin5: ["GPIO14"],
  pin6: ["GPIO15"],
  pin7: ["GPIO16"],
  pin8: ["GPIO17"],
  pin9: ["GPIO18"],
  pin10: ["VDDIO2"],
  pin11: ["GPIO19"],
  pin12: ["GPIO20"],
  pin13: ["GPIO21"],
  pin14: ["GPIO99"],
  pin15: ["VDDIO3"],
  pin16: ["VDD1"],
  pin17: ["pin17"],
  pin18: ["VDDA1"],
  pin19: ["VREFHIA"],
  pin20: ["ADCINA5"],
  pin21: ["ADCINA4"],
  pin22: ["ADCINA3"],
  pin23: ["ADCINA2"],
  pin24: ["ADCINA1"],
  pin25: ["ADCINA0"],
  pin26: ["ADCIN14"],
  pin27: ["ADCIN15"],
  pin28: ["ADCINB0"],
  pin29: ["ADCINB1"],
  pin30: ["ADCINB2"],
  pin31: ["ADCINB3"],
  pin32: ["ADCINB4"],
  pin33: ["ADCINB5"],
  pin34: ["VREFLOB"],
  pin35: ["VSSA1"],
  pin36: ["VSSA2"],
  pin37: ["VREFHIB"],
  pin38: ["VDDA2"],
  pin39: ["VDD2"],
  pin40: ["VDDIO4"],
  pin41: ["VDD3VFL"],
  pin42: ["FLT1"],
  pin43: ["FLT2"],
  pin44: ["VDDIO5"],
  pin45: ["VDD3"],
  pin46: ["TDI"],
  pin47: ["TDO"],
  pin48: ["TRST"],
  pin49: ["TMS"],
  pin50: ["TCK"],
  pin51: ["GPIO41"],
  pin52: ["GPIO58"],
  pin53: ["GPIO59"],
  pin54: ["GPIO60"],
  pin55: ["VDDIO6"],
  pin56: ["GPIO61"],
  pin57: ["GPIO62"],
  pin58: ["GPIO63"],
  pin59: ["GPIO64"],
  pin60: ["GPIO65"],
  pin61: ["GPIO66"],
  pin62: ["VDDIO7"],
  pin63: ["VDD4"],
  pin64: ["VREGENZ"],
  pin65: ["VDDOSC1"],
  pin66: ["X2"],
  pin67: ["VSSOSC"],
  pin68: ["X1"],
  pin69: ["XRS"],
  pin70: ["VDDOSC2"],
  pin71: ["VDD5"],
  pin72: ["VDDIO8"],
  pin73: ["GPIO42"],
  pin74: ["GPIO43"],
  pin75: ["GPIO69"],
  pin76: ["GPIO70"],
  pin77: ["GPIO71"],
  pin78: ["VDD6"],
  pin79: ["VDDIO9"],
  pin80: ["GPIO72"],
  pin81: ["GPIO73"],
  pin82: ["GPIO78"],
  pin83: ["VDDIO10"],
  pin84: ["VDD7"],
  pin85: ["GPIO84"],
  pin86: ["GPIO85"],
  pin87: ["GPIO86"],
  pin88: ["GPIO87"],
  pin89: ["VDD8"],
  pin90: ["VDDIO11"],
  pin91: ["GPIO2"],
  pin92: ["GPIO3"],
  pin93: ["GPIO4"],
  pin94: ["VDDIO12"],
  pin95: ["VDD9"],
  pin96: ["GPIO89"],
  pin97: ["GPIO90"],
  pin98: ["GPIO91"],
  pin99: ["GPIO92"],
  pin100: ["GPIO10"],
  pin101: ["EP"],
} as const;

const pinAttributes = {
  pin16: { requiresPower: true },
  pin18: { requiresPower: true },
  pin38: { requiresPower: true },
  pin39: { requiresPower: true },
  pin45: { requiresPower: true },
  pin63: { requiresPower: true },
  pin71: { requiresPower: true },
  pin78: { requiresPower: true },
  pin84: { requiresPower: true },
  pin89: { requiresPower: true },
  pin95: { requiresPower: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin101: [...pinLabels["pin101"], "thermalpad"],
} as const;

export const TMS320F28375SPZPQ = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2869902"],
      }}
      manufacturerPartNumber="TMS320F28375SPZPQ"
      footprint="qfn100_thermalpad6.5mmx6.5mm_pillpads_p0.4999mm_h17.2mm_pw0.28mm_pl1.6mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2869902.obj?uuid=7333c3c5e1e9448193a409d5500a6bc0",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2869902.step?uuid=7333c3c5e1e9448193a409d5500a6bc0",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: 0.00016250000000006537,
          y: -0.0004622999999295274,
          z: -0.099083,
        },
      }}
      {...props}
    />
  );
};

export default TMS320F28375SPZPQ;
