import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["1OUT", "1"],
  pin2: ["1IN_N", "2"],
  pin3: ["1IN_P", "3"],
  pin4: ["GND", "4"],
  pin5: ["2IN_P", "5"],
  pin6: ["2IN_N", "6"],
  pin7: ["2OUT", "7"],
  pin8: ["VCC", "8"],
} as const;

const pinRoles = {
  pin1: "output",
  pin2: "input",
  pin3: "input",
  pin4: "ground",
  pin5: "input",
  pin6: "input",
  pin7: "output",
  pin8: "power",
} as const;

const pinAttributes = {
  pin4: {
    requiresGround: true,
  },
  pin8: {
    requiresPower: true,
  },
} as const;

export const LM2903BIDR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2869804"],
      }}
      manufacturerPartNumber="LM2903BIDR"
      footprint="soic8_pillpads_w6.9999mm_pw0.588mm_pl1.8mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2869804.obj?uuid=ec3b9f9b31a74655be3e55848dbee9c1",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2869804.step?uuid=ec3b9f9b31a74655be3e55848dbee9c1",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.000012700000070253736, y: 0, z: 0 },
      }}
      {...props}
    />
  );
};

export default LM2903BIDR;
