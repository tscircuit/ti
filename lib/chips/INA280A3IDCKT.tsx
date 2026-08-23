import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["OUT", "1"],
  pin2: ["GND", "2"],
  pin3: ["VS", "3"],
  pin4: ["IN", "4", "IN_4"],
  pin5: ["IN", "5", "IN_5"],
} as const;

const pinRoles = {
  pin1: "output",
  pin2: "ground",
  pin3: "power",
  pin4: "input",
  pin5: "input",
} as const;

const pinAttributes = {
  pin2: { requiresGround: true },
  pin3: { requiresPower: true },
} as const;

export const INA280A3IDCKT = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing DCK0005A; donor SN74LVC1G86DCKR (JLCPCB C52350)
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="INA280A3IDCKT"
      footprint="dfn6_missing(5)_p0.65mm_w3.1001mm_pw0.4mm_pl0.9mm_pin1location(rightside,bottom)"
      {...props}
    />
  );
};

export default INA280A3IDCKT;
