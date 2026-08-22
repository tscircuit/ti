import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["COMP"],
  pin2: ["FB"],
  pin3: ["CS"],
  pin4: ["pin4"],
  pin5: ["GND"],
  pin6: ["OUT"],
  pin7: ["VDD"],
  pin8: ["VREF"],
} as const;

const pinAttributes = {
  pin5: { requiresGround: true },
  pin7: { requiresPower: true },
} as const;

export const UCC38C45DR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C575552"],
      }}
      manufacturerPartNumber="UCC38C45DR"
      footprint="soic8_pillpads_w7.3604mm_pw0.5684mm_pl1.9502mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C575552.obj?uuid=7abc64c95a1a4a04a4ef38f9097c870b",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C575552.step?uuid=7abc64c95a1a4a04a4ef38f9097c870b",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0.000012700000070253736, y: 0, z: 0 },
      }}
      {...props}
    />
  );
};

export default UCC38C45DR;
