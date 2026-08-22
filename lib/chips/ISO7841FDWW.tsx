import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VCC1"],
  pin2: ["GND11"],
  pin3: ["INA"],
  pin4: ["INB"],
  pin5: ["INC"],
  pin6: ["OUTD"],
  pin7: ["EN1"],
  pin8: ["GND12"],
  pin9: ["GND22"],
  pin10: ["EN2"],
  pin11: ["IND"],
  pin12: ["OUTC"],
  pin13: ["OUTB"],
  pin14: ["OUTA"],
  pin15: ["GND21"],
  pin16: ["VCC2"],
} as const;

const pinAttributes = {
  pin1: { requiresPower: true },
  pin2: { requiresGround: true },
  pin8: { requiresGround: true },
  pin9: { requiresGround: true },
  pin15: { requiresGround: true },
  pin16: { requiresPower: true },
} as const;

export const ISO7841FDWW = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2878479"],
      }}
      manufacturerPartNumber="ISO7841FDWW"
      footprint="soic16_pillpads_w19.0792mm_pl2.3mm_pin1location(leftside,bottom)"
      {...props}
    />
  );
};

export default ISO7841FDWW;
