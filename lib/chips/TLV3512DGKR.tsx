import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["IN1_P", "1"],
  pin2: ["IN1_N", "2"],
  pin3: ["IN2_N", "3"],
  pin4: ["IN2_P", "4"],
  pin7: ["OUT1", "7"],
  pin6: ["OUT2", "6"],
  pin5: ["V_N", "5"],
  pin8: ["V_P", "8"],
} as const;

const pinRoles = {
  pin1: "input",
  pin2: "input",
  pin3: "input",
  pin4: "input",
  pin7: "output",
  pin6: "output",
  pin5: "power",
  pin8: "power",
} as const;

const pinAttributes = {
  pin5: {
    requiresPower: true,
  },
  pin8: {
    requiresPower: true,
  },
} as const;

export const TLV3512DGKR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C53120583"],
      }}
      manufacturerPartNumber="TLV3512DGKR"
      footprint="dfn8_pillpads_p0.65mm_w5.8498mm_pw0.38mm_pl1.45mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C53120583.obj?uuid=745f4a63f92f44b78c4ba3925feaa542",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C53120583.step?uuid=745f4a63f92f44b78c4ba3925feaa542",
        pcbRotationOffset: 90,
        modelOriginPosition: {
          x: -0.000012700000070253736,
          y: 0,
          z: -0.149083,
        },
      }}
      {...props}
    />
  );
};

export default TLV3512DGKR;
