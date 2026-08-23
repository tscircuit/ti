import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["pin4"],
  pin5: ["pin5"],
  pin6: ["pin6"],
  pin7: ["VDD1"],
  pin8: ["VSS1"],
  pin9: ["XRS"],
  pin10: ["TRST"],
  pin11: ["ADCINA7"],
  pin12: ["pin12"],
  pin13: ["ADCINA5"],
  pin14: ["pin14"],
  pin15: ["ADCINA3"],
  pin16: ["pin16"],
  pin17: ["ADCINA1"],
  pin18: ["ADCINA0"],
  pin19: ["VREFHI"],
  pin20: ["VDDA"],
  pin21: ["VSSA"],
  pin22: ["VREFLO"],
  pin23: ["ADCINB0"],
  pin24: ["ADCINB1"],
  pin25: ["pin25"],
  pin26: ["ADCINB3"],
  pin27: ["pin27"],
  pin28: ["ADCINB5"],
  pin29: ["pin29"],
  pin30: ["ADCINB7"],
  pin31: ["pin31"],
  pin32: ["pin32"],
  pin33: ["pin33"],
  pin34: ["pin34"],
  pin35: ["VSS2"],
  pin36: ["VDDIO1"],
  pin37: ["pin37"],
  pin38: ["TEST2"],
  pin39: ["pin39"],
  pin40: ["pin40"],
  pin41: ["pin41"],
  pin42: ["pin42"],
  pin43: ["pin43"],
  pin44: ["pin44"],
  pin45: ["GPIO44"],
  pin46: ["pin46"],
  pin47: ["pin47"],
  pin48: ["pin48"],
  pin49: ["pin49"],
  pin50: ["pin50"],
  pin51: ["X2"],
  pin52: ["X1"],
  pin53: ["VSS3"],
  pin54: ["VDD2"],
  pin55: ["pin55"],
  pin56: ["GPIO39"],
  pin57: ["pin57"],
  pin58: ["pin58"],
  pin59: ["pin59"],
  pin60: ["pin60"],
  pin61: ["pin61"],
  pin62: ["pin62"],
  pin63: ["pin63"],
  pin64: ["pin64"],
  pin65: ["pin65"],
  pin66: ["pin66"],
  pin67: ["pin67"],
  pin68: ["pin68"],
  pin69: ["pin69"],
  pin70: ["VDDIO2"],
  pin71: ["VSS4"],
  pin72: ["VDD3"],
  pin73: ["VREGENZ"],
  pin74: ["pin74"],
  pin75: ["pin75"],
  pin76: ["pin76"],
  pin77: ["pin77"],
  pin78: ["pin78"],
  pin79: ["pin79"],
  pin80: ["pin80"],
} as const;

const pinAttributes = {
  pin7: { requiresPower: true },
  pin8: { requiresGround: true },
  pin20: { requiresPower: true },
  pin35: { requiresGround: true },
  pin53: { requiresGround: true },
  pin54: { requiresPower: true },
  pin71: { requiresGround: true },
  pin72: { requiresPower: true },
} as const;

export const TMS320F28035PNQ = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C485990"],
      }}
      manufacturerPartNumber="TMS320F28035PNQ"
      footprint="qfn80_pillpads_p0.4999mm_h15.2mm_pw0.28mm_pl1.6mm_pin1location(bottomside,left)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C485990.obj?uuid=128cc954bd984cc28844982e687ae4e8",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C485990.step?uuid=128cc954bd984cc28844982e687ae4e8",
        pcbRotationOffset: 90,
        modelOriginPosition: {
          x: 0.00021080000004358723,
          y: -0.0006525000000001668,
          z: 0.000917,
        },
      }}
      {...props}
    />
  );
};

export default TMS320F28035PNQ;
