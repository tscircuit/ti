import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["OUT"],
  pin2: ["GND"],
  pin3: ["IN_POS"],
  pin4: ["IN_NEG"],
  pin5: ["VS"],
} as const;

const pinAttributes = {
  pin2: { requiresGround: true },
} as const;

export const INA281A3IDBVR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C1517407"],
      }}
      manufacturerPartNumber="INA281A3IDBVR"
      footprint="dfn6_missing(5)_p0.95mm_w3.6999mm_pl1.1mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C1517407.obj?uuid=ba304048957a4ddf80723501e9ecd54e",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C1517407.step?uuid=ba304048957a4ddf80723501e9ecd54e",
        pcbRotationOffset: 270,
        modelOriginPosition: {
          x: 0.00011430000017753628,
          y: -0.000025400000140507473,
          z: -0.75,
        },
      }}
      {...props}
    />
  );
};

export default INA281A3IDBVR;
