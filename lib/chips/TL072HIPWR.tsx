import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin2: ["1IN_N", "2"],
  pin3: ["1IN_P", "3"],
  pin1: ["1OUT", "1"],
  pin6: ["2IN_N", "6"],
  pin5: ["2IN_P", "5"],
  pin7: ["2OUT", "7"],
  pin4: ["VCC_N", "4"],
  pin8: ["VCC_P", "8"],
} as const;

const pinRoles = {
  pin2: "input",
  pin3: "input",
  pin1: "output",
  pin6: "input",
  pin5: "input",
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

export const TL072HIPWR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C4370341"],
      }}
      manufacturerPartNumber="TL072HIPWR"
      footprint="dfn8_pillpads_p0.65mm_w7.3082mm_pw0.353mm_pl1.454mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C4370341.obj?uuid=2d0fd2703afb4f81a9dfc54e2181a624",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C4370341.step?uuid=2d0fd2703afb4f81a9dfc54e2181a624",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  );
};

export default TL072HIPWR;
