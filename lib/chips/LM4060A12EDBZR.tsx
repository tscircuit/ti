import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["CATHODE", "1"],
  pin2: ["ANODE", "2"],
  pin3: ["DNC", "3"],
} as const;

const pinRoles = {
  pin1: "bidirectional",
  pin2: "output",
  pin3: "no-connect",
} as const;

const pinAttributes = {
  pin3: { doNotConnect: true },
} as const;

export const LM4060A12EDBZR = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing DBZ0003A; donor TLV803SDBZR (JLCPCB C132016)
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="LM4060A12EDBZR"
      footprint="sot23w_p0.9813mm_pw0.6494mm_pin1location(rightside,bottom)"
      {...props}
    />
  );
};

export default LM4060A12EDBZR;
