import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["RSP", "1"],
  pin2: ["VCC", "2"],
  pin3: ["NC", "3"],
  pin4: ["GND", "4"],
  pin5: ["VOUT", "5"],
  pin6: ["NC_OR_REFB", "6"],
  pin7: ["NC_OR_REFA", "7"],
  pin8: ["RSN", "8"],
} as const;

const pinRoles = {
  pin1: "input",
  pin2: "power",
  pin3: "no-connect",
  pin4: "ground",
  pin5: "output",
  pin6: "no-connect",
  pin7: "no-connect",
  pin8: "input",
} as const;

const pinAttributes = {
  pin2: { requiresPower: true },
  pin3: { doNotConnect: true },
  pin4: { requiresGround: true },
  pin6: { doNotConnect: true },
  pin7: { doNotConnect: true },
} as const;

export const LMP8480MMX_T_NOPB = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing DGK0008A; donor OPA2188AIDGKR (JLCPCB C2865632)
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="LMP8480MMX-T/NOPB"
      footprint="dfn8_pillpads_p0.65mm_w5.8498mm_pw0.38mm_pl1.45mm_pin1location(leftside,bottom)"
      {...props}
    />
  );
};

export default LMP8480MMX_T_NOPB;
