import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["OUTA"],
  pin2: ["INA_N"],
  pin3: ["INA_P"],
  pin4: ["V"],
  pin5: ["INB_P"],
  pin6: ["INB_N"],
  pin7: ["OUTB"],
  pin8: ["V_POS"],
} as const;

export const OPA2188AIDGKR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C2865632"],
      }}
      manufacturerPartNumber="OPA2188AIDGKR"
      footprint="dfn8_pillpads_p0.65mm_w5.8498mm_pw0.38mm_pl1.45mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2865632.obj?uuid=745f4a63f92f44b78c4ba3925feaa542",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2865632.step?uuid=745f4a63f92f44b78c4ba3925feaa542",
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

export default OPA2188AIDGKR;
