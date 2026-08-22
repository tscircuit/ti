import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin2: ["INA_N", "2"],
  pin3: ["INA_P", "3"],
  pin6: ["INB_N", "6"],
  pin5: ["INB_P", "5"],
  pin1: ["OUTA", "1"],
  pin7: ["OUTB", "7"],
  pin4: ["VEE", "4"],
  pin8: ["VCC", "8"],
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

export const TLV7042DGKR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2760466"],
      }}
      manufacturerPartNumber="TLV7042DGKR"
      footprint="dfn8_pillpads_p0.65mm_w5.9241mm_pw0.364mm_pl1.662mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2760466.obj?uuid=745f4a63f92f44b78c4ba3925feaa542",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2760466.step?uuid=745f4a63f92f44b78c4ba3925feaa542",
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

export default TLV7042DGKR;
