import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["DFO"],
  pin2: ["PD"],
  pin3: ["ST"],
  pin4: ["PIXS"],
  pin5: ["GND3"],
  pin6: ["DVDD3"],
  pin7: ["STAG"],
  pin8: ["SCDT"],
  pin9: ["PDO"],
  pin10: ["QE0"],
  pin11: ["QE1"],
  pin12: ["QE2"],
  pin13: ["QE3"],
  pin14: ["QE4"],
  pin15: ["QE5"],
  pin16: ["QE6"],
  pin17: ["QE7"],
  pin18: ["OVDD5"],
  pin19: ["OGND5"],
  pin20: ["QE8"],
  pin21: ["QE9"],
  pin22: ["QE10"],
  pin23: ["QE11"],
  pin24: ["QE12"],
  pin25: ["QE13"],
  pin26: ["QE14"],
  pin27: ["QE15"],
  pin28: ["OGND4"],
  pin29: ["OVDD4"],
  pin30: ["QE16"],
  pin31: ["QE17"],
  pin32: ["QE18"],
  pin33: ["QE19"],
  pin34: ["QE20"],
  pin35: ["QE21"],
  pin36: ["QE22"],
  pin37: ["QE23"],
  pin38: ["DVDD2"],
  pin39: ["GND2"],
  pin40: ["CTL1"],
  pin41: ["CTL2"],
  pin42: ["CTL3"],
  pin43: ["OVDD3"],
  pin44: ["ODCK"],
  pin45: ["OGND3"],
  pin46: ["DE"],
  pin47: ["VSYNC"],
  pin48: ["HSYNC"],
  pin49: ["QO0"],
  pin50: ["QO1"],
  pin51: ["QO2"],
  pin52: ["QO3"],
  pin53: ["QO4"],
  pin54: ["QO5"],
  pin55: ["QO6"],
  pin56: ["QO7"],
  pin57: ["OVDD2"],
  pin58: ["OGND2"],
  pin59: ["QO8"],
  pin60: ["QO9"],
  pin61: ["QO10"],
  pin62: ["QO11"],
  pin63: ["QO12"],
  pin64: ["QO13"],
  pin65: ["QO14"],
  pin66: ["QO15"],
  pin67: ["DVDD1"],
  pin68: ["GND1"],
  pin69: ["QO16"],
  pin70: ["QO17"],
  pin71: ["QO18"],
  pin72: ["QO19"],
  pin73: ["QO20"],
  pin74: ["QO21"],
  pin75: ["QO22"],
  pin76: ["OGND1"],
  pin77: ["QO23"],
  pin78: ["OVDD1"],
  pin79: ["AGND5"],
  pin80: ["Rx2_POS"],
  pin81: ["Rx2_NEG"],
  pin82: ["AVDD4"],
  pin83: ["AGND4"],
  pin84: ["AVDD3"],
  pin85: ["Rx1_POS"],
  pin86: ["Rx1_NEG"],
  pin87: ["AGND3"],
  pin88: ["AVDD2"],
  pin89: ["AGND2"],
  pin90: ["Rx0_POS"],
  pin91: ["Rx0_NEG"],
  pin92: ["AGND1"],
  pin93: ["RxC_POS"],
  pin94: ["RxC_NEG"],
  pin95: ["AVDD1"],
  pin96: ["EXT_RES"],
  pin97: ["PVDD"],
  pin98: ["PGND"],
  pin99: ["RSVD"],
  pin100: ["OCK_INV"],
  pin101: ["PAD"],
} as const;

const pinAttributes = {
  pin5: { requiresGround: true },
  pin39: { requiresGround: true },
  pin68: { requiresGround: true },
  pin79: { requiresGround: true },
  pin83: { requiresGround: true },
  pin87: { requiresGround: true },
  pin89: { requiresGround: true },
  pin92: { requiresGround: true },
  pin98: { requiresGround: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin101: [...pinLabels["pin101"], "thermalpad"],
} as const;

export const TFP401PZP = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2867606"],
      }}
      manufacturerPartNumber="TFP401PZP"
      footprint="qfn100_thermalpad5.2mmx5.2mm_pillpads_p0.4999mm_h17.2mm_pw0.28mm_pl1.6mm_pin1location(bottomside,left)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2867606.obj?uuid=1473684ab1b8432dac5468e959daa7bb",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2867606.step?uuid=1473684ab1b8432dac5468e959daa7bb",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.6 },
      }}
      {...props}
    />
  );
};

export default TFP401PZP;
