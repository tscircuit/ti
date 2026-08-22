import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["OUTA"],
  pin2: ["INA_N"],
  pin3: ["INA_P"],
  pin4: ["V_POS"],
  pin5: ["INB_P"],
  pin6: ["INB_N"],
  pin7: ["OUTB"],
  pin8: ["OUTC"],
  pin9: ["INC_N"],
  pin10: ["INC_P"],
  pin11: ["V_NEG"],
  pin12: ["IND_P"],
  pin13: ["IND_N"],
  pin14: ["OUTD"],
} as const;

export const OPA4192IDR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C2057908"],
      }}
      manufacturerPartNumber="OPA4192IDR"
      footprint="soic14_pillpads_w7.276mm_pw0.574mm_pl2.038mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2057908.obj?uuid=265efcdb862f47cf9eef6843d570fde7",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2057908.step?uuid=265efcdb862f47cf9eef6843d570fde7",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: 0,
          y: -0.000025399999913133797,
          z: -0.099425,
        },
      }}
      {...props}
    />
  );
};

export default OPA4192IDR;
