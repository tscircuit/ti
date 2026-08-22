import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["AGND1"],
  pin2: ["AD13"],
  pin3: ["AD12"],
  pin4: ["AD10"],
  pin5: ["AD07"],
  pin6: ["AD06"],
  pin7: ["AD04"],
  pin8: ["AD03"],
  pin9: ["V33DIO1"],
  pin10: ["DGND1"],
  pin11: ["RESET"],
  pin12: ["pin12"],
  pin13: ["SCI_RX0"],
  pin14: ["SCI_TX0"],
  pin15: ["pin15"],
  pin16: ["pin16"],
  pin17: ["DPWM0A"],
  pin18: ["DPWM0B"],
  pin19: ["DPWM1A"],
  pin20: ["DPWM1B"],
  pin21: ["DPWM2A"],
  pin22: ["DPWM2B"],
  pin23: ["DPWM3A"],
  pin24: ["DPWM3B"],
  pin25: ["DGND2"],
  pin26: ["pin26"],
  pin27: ["PMBUS_ALERT"],
  pin28: ["PMBUS_CTRL"],
  pin29: ["pin29"],
  pin30: ["pin30"],
  pin31: ["PWM0"],
  pin32: ["PWM1"],
  pin33: ["DGND3"],
  pin34: ["INT_EXT"],
  pin35: ["FAULT0"],
  pin36: ["FAULT1"],
  pin37: ["pin37"],
  pin38: ["pin38"],
  pin39: ["pin39"],
  pin40: ["TMS"],
  pin41: ["TCAP"],
  pin42: ["FAULT2"],
  pin43: ["FAULT3"],
  pin44: ["DGND4"],
  pin45: ["V33DIO2"],
  pin46: ["BP18"],
  pin47: ["V33D"],
  pin48: ["AGND2"],
  pin49: ["AGND3"],
  pin50: ["EAP0"],
  pin51: ["EAN0"],
  pin52: ["EAP1"],
  pin53: ["EAN1"],
  pin54: ["EAP2"],
  pin55: ["EAN2"],
  pin56: ["AGND4"],
  pin57: ["V33A"],
  pin58: ["AD00"],
  pin59: ["AD01"],
  pin60: ["AD02"],
  pin61: ["AD05"],
  pin62: ["AD08"],
  pin63: ["AD09"],
  pin64: ["AD11"],
  pin65: ["EP"],
} as const;

const pinAttributes = {
  pin1: { requiresGround: true },
  pin48: { requiresGround: true },
  pin49: { requiresGround: true },
  pin56: { requiresGround: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin65: [...pinLabels["pin65"], "thermalpad"],
} as const;

export const UCD3138ARGCR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2657884"],
      }}
      manufacturerPartNumber="UCD3138ARGCR"
      footprint="qfn64_thermalpad4.3mmx4.3mm_p0.4999mm_h9.6798mm_pw0.28mm_pl0.665mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2657884.obj?uuid=6c2af9d3f6594413b4109d6a55288186",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2657884.step?uuid=6c2af9d3f6594413b4109d6a55288186",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: 0.0000889000000370288,
          y: 0.00007619999996677507,
          z: 0.01,
        },
      }}
      {...props}
    />
  );
};

export default UCD3138ARGCR;
