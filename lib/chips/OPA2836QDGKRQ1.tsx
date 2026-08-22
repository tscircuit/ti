import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin3: ["VIN1_P", "3"],
  pin2: ["VIN1_N", "2"],
  pin5: ["VIN2_P", "5"],
  pin6: ["VIN2_N", "6"],
  pin1: ["VOUT1", "1"],
  pin7: ["VOUT2", "7"],
  pin8: ["VS_P", "8"],
  pin4: ["VS_N", "4"],
} as const;

const pinRoles = {
  pin3: "input",
  pin2: "input",
  pin5: "input",
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

export const OPA2836QDGKRQ1 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2060679"],
      }}
      manufacturerPartNumber="OPA2836QDGKRQ1"
      footprint="dfn8_pillpads_p0.65mm_w5.8498mm_pw0.38mm_pl1.45mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2060679.obj?uuid=745f4a63f92f44b78c4ba3925feaa542",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2060679.step?uuid=745f4a63f92f44b78c4ba3925feaa542",
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

export default OPA2836QDGKRQ1;
