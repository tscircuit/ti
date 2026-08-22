import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["OUTA"],
  pin2: ["INA_NEG"],
  pin3: ["INA_POS"],
  pin4: ["V_NEG"],
  pin5: ["INB_POS"],
  pin6: ["INB_NEG"],
  pin7: ["OUTB"],
  pin8: ["V_POS"],
} as const;

export const OPA2237UA_2K5 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C140316"],
      }}
      manufacturerPartNumber="OPA2237UA/2K5"
      footprint="dfn8_pillpads_w7.23mm_pw0.63mm_pl1.865mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C140316.obj?uuid=a8bf75347d3a44d9bc6814f39c22bf07",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C140316.step?uuid=a8bf75347d3a44d9bc6814f39c22bf07",
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

export default OPA2237UA_2K5;
