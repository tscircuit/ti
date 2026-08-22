import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin2: ["IN1_N", "2"],
  pin3: ["IN1_P", "3"],
  pin6: ["IN2_N", "6"],
  pin5: ["IN2_P", "5"],
  pin1: ["OUT1", "1"],
  pin7: ["OUT2", "7"],
  pin4: ["V_N", "4"],
  pin8: ["V_P", "8"],
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

export const OPA2310IDR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C5214284"],
      }}
      manufacturerPartNumber="OPA2310IDR"
      footprint="dfn8_pillpads_w7.23mm_pw0.63mm_pl1.865mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C5214284.obj?uuid=a8bf75347d3a44d9bc6814f39c22bf07",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C5214284.step?uuid=a8bf75347d3a44d9bc6814f39c22bf07",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: 0.0099948999999242,
          y: -0.06982459999994717,
          z: -0.8,
        },
      }}
      {...props}
    />
  );
};

export default OPA2310IDR;
