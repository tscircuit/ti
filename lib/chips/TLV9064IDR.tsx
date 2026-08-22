import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin2: ["IN1_N", "2"],
  pin3: ["IN1_P", "3"],
  pin6: ["IN2_N", "6"],
  pin5: ["IN2_P", "5"],
  pin9: ["IN3_N", "9"],
  pin10: ["IN3_P", "10"],
  pin13: ["IN4_N", "13"],
  pin12: ["IN4_P", "12"],
  pin1: ["OUT1", "1"],
  pin7: ["OUT2", "7"],
  pin8: ["OUT3", "8"],
  pin14: ["OUT4", "14"],
  pin11: ["V_N", "11"],
  pin4: ["V_P", "4"],
} as const;

const pinRoles = {
  pin2: "input",
  pin3: "input",
  pin6: "input",
  pin5: "input",
  pin9: "input",
  pin10: "input",
  pin13: "input",
  pin12: "input",
  pin1: "output",
  pin7: "output",
  pin8: "output",
  pin14: "output",
  pin11: "power",
  pin4: "power",
} as const;

const pinAttributes = {
  pin11: {
    requiresPower: true,
  },
  pin4: {
    requiresPower: true,
  },
} as const;

export const TLV9064IDR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C388176"],
      }}
      manufacturerPartNumber="TLV9064IDR"
      footprint="soic14_pillpads_w7.276mm_pw0.574mm_pl2.038mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C388176.obj?uuid=265efcdb862f47cf9eef6843d570fde7",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C388176.step?uuid=265efcdb862f47cf9eef6843d570fde7",
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

export default TLV9064IDR;
