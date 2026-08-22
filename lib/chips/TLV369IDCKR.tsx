import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["IN", "1", "IN_1"],
  pin2: ["V", "2", "V_2"],
  pin3: ["IN", "3", "IN_3"],
  pin4: ["OUT", "4"],
  pin5: ["V", "5", "V_5"],
} as const;

const pinRoles = {
  pin1: "input",
  pin2: "unknown",
  pin3: "input",
  pin4: "output",
  pin5: "unknown",
} as const;

export const TLV369IDCKR = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing DCK0005A; donor SN74LVC1G86DCKR (JLCPCB C52350)
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      manufacturerPartNumber="TLV369IDCKR"
      footprint="dfn6_missing(5)_p0.65mm_w3.1001mm_pw0.4mm_pl0.9mm_pin1location(rightside,bottom)"
      {...props}
    />
  );
};

export default TLV369IDCKR;
