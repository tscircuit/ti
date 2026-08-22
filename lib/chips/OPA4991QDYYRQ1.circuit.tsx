import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin3: ["IN1_P", "3"],
  pin2: ["IN1_N", "2"],
  pin5: ["IN2_P", "5"],
  pin6: ["IN2_N", "6"],
  pin10: ["IN3_P", "10"],
  pin9: ["IN3_N", "9"],
  pin12: ["IN4_P", "12"],
  pin13: ["IN4_N", "13"],
  pin1: ["OUT1", "1"],
  pin7: ["OUT2", "7"],
  pin8: ["OUT3", "8"],
  pin14: ["OUT4", "14"],
  pin4: ["V_P", "4"],
  pin11: ["V_N", "11"],
} as const;

const pinRoles = {
  pin3: "input",
  pin2: "input",
  pin5: "input",
  pin6: "input",
  pin10: "input",
  pin9: "input",
  pin12: "input",
  pin13: "input",
  pin1: "output",
  pin7: "output",
  pin8: "output",
  pin14: "output",
  pin4: "power",
  pin11: "power",
} as const;

const pinAttributes = {
  pin4: {
    requiresPower: true,
  },
  pin11: {
    requiresPower: true,
  },
} as const;

export const OPA4991QDYYRQ1 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C4370092"],
      }}
      manufacturerPartNumber="OPA4991QDYYRQ1"
      footprint="dfn14_p0.4999mm_w3.8358mm_pw0.28mm_pl1.118mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C4370092.obj?uuid=78d98f106fd14884b73037acee5654da",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C4370092.step?uuid=78d98f106fd14884b73037acee5654da",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: -0.000025399999998398926,
          y: -0.00003810000001180924,
          z: -0.7,
        },
      }}
      {...props}
    />
  );
};

export default OPA4991QDYYRQ1;
