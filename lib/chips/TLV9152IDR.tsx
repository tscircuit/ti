import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin3: ["IN_A", "3", "IN_A_3"],
  pin5: ["IN_B", "5", "IN_B_5"],
  pin2: ["IN_A", "2", "IN_A_2"],
  pin6: ["IN_B", "6", "IN_B_6"],
  pin1: ["OUT_A", "1"],
  pin7: ["OUT_B", "7"],
  pin8: ["V_P", "8"],
  pin4: ["V_N", "4"],
} as const;

const pinRoles = {
  pin3: "input",
  pin5: "input",
  pin2: "input",
  pin6: "input",
  pin1: "output",
  pin7: "output",
  pin8: "power",
  pin4: "power",
} as const;

const pinAttributes = {
  pin8: {
    requiresPower: true,
  },
  pin4: {
    requiresPower: true,
  },
} as const;

export const TLV9152IDR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C882649"],
      }}
      manufacturerPartNumber="TLV9152IDR"
      footprint="soic8_pillpads_w6.9999mm_pw0.588mm_pl1.8mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C882649.obj?uuid=ec3b9f9b31a74655be3e55848dbee9c1",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C882649.step?uuid=ec3b9f9b31a74655be3e55848dbee9c1",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.000012700000070253736, y: 0, z: 0 },
      }}
      {...props}
    />
  );
};

export default TLV9152IDR;
