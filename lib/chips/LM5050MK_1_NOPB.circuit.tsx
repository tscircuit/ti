import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VS"],
  pin2: ["GND"],
  pin3: ["OFF"],
  pin4: ["IN"],
  pin5: ["GATE"],
  pin6: ["OUT"],
} as const;

export const LM5050MK_1_NOPB = (props: ChipProps<typeof pinLabels>) => {
  const { name = "SW1", ...restProps } = props;

  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      name={name}
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C129323"],
      }}
      manufacturerPartNumber="LM5050MK-1/NOPB"
      footprint="dfn6_p0.95mm_w3.2mm_pw0.532mm_pl0.8mm_pin1location(rightside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C129323.obj?uuid=222e8593009c495bb3d3af0c08fa5e6a",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C129323.step?uuid=222e8593009c495bb3d3af0c08fa5e6a",
        pcbRotationOffset: 180,
        modelOriginPosition: {
          x: -0.0001269999999067295,
          y: -0.000012699999956566899,
          z: 0.050795,
        },
      }}
      {...restProps}
    />
  );
};

export default LM5050MK_1_NOPB;
