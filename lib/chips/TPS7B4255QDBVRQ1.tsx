import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["GND"],
  pin3: ["IN"],
  pin4: ["OUT"],
  pin5: ["NC"],
} as const;

const pinAttributes = {
  pin2: { requiresGround: true },
  pin5: { doNotConnect: true },
} as const;

export const TPS7B4255QDBVRQ1 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C22307806"],
      }}
      manufacturerPartNumber="TPS7B4255QDBVRQ1"
      footprint="dfn6_missing(5)_p0.95mm_w3.545mm_pw0.532mm_pl1.045mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C22307806.obj?uuid=157f692775fd4064a289b73d15e9580d",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C22307806.step?uuid=157f692775fd4064a289b73d15e9580d",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: -0.000012700000070253736, z: -0.575 },
      }}
      {...props}
    />
  );
};

export default TPS7B4255QDBVRQ1;
