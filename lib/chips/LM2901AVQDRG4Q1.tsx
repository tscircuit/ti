import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["OUT1", "1"],
  pin2: ["OUT2", "2"],
  pin3: ["VCC", "3"],
  pin4: ["IN2_N", "4"],
  pin5: ["IN2_P", "5"],
  pin6: ["IN1_N", "6"],
  pin7: ["IN1_P", "7"],
  pin8: ["IN3_N", "8"],
  pin9: ["IN3_P", "9"],
  pin10: ["IN4_N", "10"],
  pin11: ["IN4_P", "11"],
  pin12: ["GND", "12"],
  pin13: ["OUT4", "13"],
  pin14: ["OUT3", "14"],
} as const;

const pinRoles = {
  pin1: "output",
  pin2: "output",
  pin3: "power",
  pin4: "input",
  pin5: "input",
  pin6: "input",
  pin7: "input",
  pin8: "input",
  pin9: "input",
  pin10: "input",
  pin11: "input",
  pin12: "ground",
  pin13: "output",
  pin14: "output",
} as const;

const pinAttributes = {
  pin3: {
    requiresPower: true,
  },
  pin12: {
    requiresGround: true,
  },
} as const;

export const LM2901AVQDRG4Q1 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2878678"],
      }}
      manufacturerPartNumber="LM2901AVQDRG4Q1"
      footprint="soic14_pillpads_w7.276mm_pw0.574mm_pl2.038mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2878678.obj?uuid=265efcdb862f47cf9eef6843d570fde7",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2878678.step?uuid=265efcdb862f47cf9eef6843d570fde7",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: 0,
          y: -0.000025399999913133797,
          z: -0.099425,
        },
      }}
      {...props}
    />
  );
};

export default LM2901AVQDRG4Q1;
