import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["1OE_N", "1"],
  pin2: ["1A", "2"],
  pin3: ["2Y", "3"],
  pin4: ["GND", "4"],
  pin5: ["2A", "5"],
  pin6: ["1Y", "6"],
  pin7: ["2OE_N", "7"],
  pin8: ["VCC", "8"],
} as const;

const pinRoles = {
  pin1: "input",
  pin2: "input",
  pin3: "output",
  pin4: "ground",
  pin5: "input",
  pin6: "output",
  pin7: "input",
  pin8: "power",
} as const;

const pinAttributes = {
  pin4: { requiresGround: true },
  pin8: { requiresPower: true },
} as const;

export const SN74AUP2G240DCUR = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing DCU0008A; donor SN74LVC2G08DCUR (JLCPCB C91875)
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="SN74AUP2G240DCUR"
      footprint="dfn8_pillpads_p0.5001mm_w3.8498mm_pw0.25mm_pl0.75mm_pin1location(rightside,bottom)"
      {...props}
    />
  );
};

export default SN74AUP2G240DCUR;
