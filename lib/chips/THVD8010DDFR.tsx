import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["R", "1"],
  pin2: ["MODE", "2"],
  pin3: ["F_SET", "3"],
  pin4: ["D", "4"],
  pin5: ["GND", "5"],
  pin6: ["A", "6"],
  pin7: ["B", "7"],
  pin8: ["VCC", "8"],
} as const;

const pinRoles = {
  pin1: "output",
  pin2: "control",
  pin3: "input",
  pin4: "input",
  pin5: "ground",
  pin6: "bidirectional",
  pin7: "bidirectional",
  pin8: "power",
} as const;

const pinAttributes = {
  pin5: { requiresGround: true },
  pin8: { requiresPower: true },
} as const;

export const THVD8010DDFR = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing DDF0008A; donor INA186A2IDDFR (JLCPCB C2869854)
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="THVD8010DDFR"
      footprint="soic_p0.65mm_w3.4199mm_pw0.4mm_pl0.9mm_pin1location(leftside,bottom)"
      {...props}
    />
  );
};

export default THVD8010DDFR;
