import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["ENA"],
  pin2: ["INA"],
  pin3: ["GND"],
  pin4: ["INB"],
  pin5: ["OUTB"],
  pin6: ["VDD"],
  pin7: ["OUTA"],
  pin8: ["ENB"],
} as const;

const pinAttributes = {
  pin3: { requiresGround: true },
  pin6: { requiresPower: true },
} as const;

export const UCC27444DR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C35949002"],
      }}
      manufacturerPartNumber="UCC27444DR"
      footprint="soic8_pillpads_w7.5898mm_pw0.588mm_pl2.045mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C35949002.obj?uuid=609550b54721441492dc8db43c2597ce",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C35949002.step?uuid=609550b54721441492dc8db43c2597ce",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.000012699999842880061, y: 0, z: -0.15 },
      }}
      {...props}
    />
  );
};

export default UCC27444DR;
