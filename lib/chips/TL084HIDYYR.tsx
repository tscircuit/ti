import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin2: ["1IN_N", "2"],
  pin3: ["1IN_P", "3"],
  pin1: ["1OUT", "1"],
  pin6: ["2IN_N", "6"],
  pin5: ["2IN_P", "5"],
  pin7: ["2OUT", "7"],
  pin9: ["3IN_N", "9"],
  pin10: ["3IN_P", "10"],
  pin8: ["3OUT", "8"],
  pin13: ["4IN_N", "13"],
  pin12: ["4IN_P", "12"],
  pin14: ["4OUT", "14"],
  pin11: ["VCC_N", "11"],
  pin4: ["VCC_P", "4"],
} as const;

const pinRoles = {
  pin2: "input",
  pin3: "input",
  pin1: "output",
  pin6: "input",
  pin5: "input",
  pin7: "output",
  pin9: "input",
  pin10: "input",
  pin8: "output",
  pin13: "input",
  pin12: "input",
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

export const TL084HIDYYR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C5214238"],
      }}
      manufacturerPartNumber="TL084HIDYYR"
      footprint="dfn14_p0.4999mm_w3.8358mm_pw0.28mm_pl1.118mm_pin1location(rightside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C5214238.obj?uuid=65427ebb3e634bba82a758976e569e29",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C5214238.step?uuid=65427ebb3e634bba82a758976e569e29",
        pcbRotationOffset: 90,
        modelOriginPosition: {
          x: 0.000025400000026820635,
          y: 0.00005079999993995443,
          z: -0.7,
        },
      }}
      {...props}
    />
  );
};

export default TL084HIDYYR;
