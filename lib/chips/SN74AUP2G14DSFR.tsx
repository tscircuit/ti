import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["1A", "1"],
  pin2: ["GND", "2"],
  pin3: ["2A", "3"],
  pin4: ["2Y", "4"],
  pin5: ["VCC", "5"],
  pin6: ["1Y", "6"],
} as const;

const pinRoles = {
  pin1: "unknown",
  pin2: "ground",
  pin3: "input",
  pin4: "output",
  pin5: "power",
  pin6: "output",
} as const;

const pinAttributes = {
  pin2: { requiresGround: true },
  pin5: { requiresPower: true },
} as const;

export const SN74AUP2G14DSFR = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing DSF0006A; donor SN74AUP1G79DSFR (JLCPCB C2677981)
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="SN74AUP2G14DSFR"
      footprint="sot963_w1.2001mm_pw0.17mm_pl0.4mm_pin1location(leftside,bottom)"
      {...props}
    />
  );
};

export default SN74AUP2G14DSFR;
