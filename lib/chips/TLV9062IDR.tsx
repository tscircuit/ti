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

export const TLV9062IDR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C398355"],
      }}
      manufacturerPartNumber="TLV9062IDR"
      footprint="soic8_pillpads_w7.3604mm_pw0.5684mm_pl1.9502mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C398355.obj?uuid=7abc64c95a1a4a04a4ef38f9097c870b",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C398355.step?uuid=7abc64c95a1a4a04a4ef38f9097c870b",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0.000012700000070253736, y: 0, z: 0 },
      }}
      {...props}
    />
  );
};

export default TLV9062IDR;
