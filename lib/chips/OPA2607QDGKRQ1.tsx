import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin2: ["IN1_N", "2"],
  pin3: ["IN1_P", "3"],
  pin6: ["IN2_N", "6"],
  pin5: ["IN2_P", "5"],
  pin1: ["OUT1", "1"],
  pin7: ["OUT2", "7"],
  pin4: ["VS_N", "4"],
  pin8: ["VS_P", "8"],
} as const;

const pinRoles = {
  pin2: "input",
  pin3: "input",
  pin6: "input",
  pin5: "input",
  pin1: "output",
  pin7: "output",
  pin4: "power",
  pin8: "power",
} as const;

const pinAttributes = {
  pin4: {
    requiresPower: true,
  },
  pin8: {
    requiresPower: true,
  },
} as const;

export const OPA2607QDGKRQ1 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C4368827"],
      }}
      manufacturerPartNumber="OPA2607QDGKRQ1"
      footprint="dfn8_pillpads_p0.65mm_w5.8498mm_pw0.38mm_pl1.45mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C4368827.obj?uuid=745f4a63f92f44b78c4ba3925feaa542",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C4368827.step?uuid=745f4a63f92f44b78c4ba3925feaa542",
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

export default OPA2607QDGKRQ1;
