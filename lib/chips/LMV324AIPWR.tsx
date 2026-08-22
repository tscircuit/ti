import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin2: ["IN_A", "2", "IN_A_2"],
  pin3: ["IN_A", "3", "IN_A_3"],
  pin6: ["IN_B", "6", "IN_B_6"],
  pin5: ["IN_B", "5", "IN_B_5"],
  pin9: ["IN_C", "9", "IN_C_9"],
  pin10: ["IN_C", "10", "IN_C_10"],
  pin13: ["IN_D", "13", "IN_D_13"],
  pin12: ["IN_D", "12", "IN_D_12"],
  pin1: ["OUT_A", "1"],
  pin7: ["OUT_B", "7"],
  pin8: ["OUT_C", "8"],
  pin14: ["OUT_D", "14"],
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

export const LMV324AIPWR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C484733"],
      }}
      manufacturerPartNumber="LMV324AIPWR"
      footprint="dfn14_p0.65mm_w6.8407mm_pw0.3048mm_pl0.9906mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C484733.obj?uuid=5377177da492449fa1a3111d646cac17",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C484733.step?uuid=5377177da492449fa1a3111d646cac17",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0.000012700000013410317, y: 0, z: -0.069083 },
      }}
      {...props}
    />
  );
};

export default LMV324AIPWR;
