import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["1B"],
  pin2: ["2B"],
  pin3: ["3B"],
  pin4: ["4B"],
  pin5: ["5B"],
  pin6: ["6B"],
  pin7: ["7B"],
  pin8: ["E"],
  pin9: ["COM"],
  pin10: ["7C"],
  pin11: ["6C"],
  pin12: ["5C"],
  pin13: ["4C"],
  pin14: ["3C"],
  pin15: ["2C"],
  pin16: ["1C"],
} as const;

export const ULN2003AIDR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C94832"],
      }}
      manufacturerPartNumber="ULN2003AIDR"
      footprint="soic16_pillpads_w7.4421mm_pw0.602mm_pl1.971mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C94832.obj?uuid=9adfdf34b7774b23880141fd3e8b4dbb",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C94832.step?uuid=9adfdf34b7774b23880141fd3e8b4dbb",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.000012699999842880061, y: 0, z: 0.000575 },
      }}
      {...props}
    />
  );
};

export default ULN2003AIDR;
