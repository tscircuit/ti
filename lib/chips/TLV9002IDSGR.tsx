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
  pin9: ["THERMAL_PAD", "9"],
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

const footprinterPinLabels = {
  ...pinLabels,
  pin9: [...pinLabels["pin9"], "thermalpad"],
} as const;

export const TLV9002IDSGR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2876157"],
      }}
      manufacturerPartNumber="TLV9002IDSGR"
      footprint="dfn8_thermalpad0.9mmx1.6mm_p0.5001mm_w2.3602mm_pw0.28mm_pl0.505mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2876157.obj?uuid=bdbb82cfec2f421cabcde62c239dd780",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2876157.step?uuid=bdbb82cfec2f421cabcde62c239dd780",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: -0.000012700000070253736, y: 0, z: 0 },
      }}
      {...props}
    />
  );
};

export default TLV9002IDSGR;
