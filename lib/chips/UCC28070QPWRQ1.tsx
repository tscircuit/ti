import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["CDR", "1"],
  pin2: ["RDM_SYNC", "2"],
  pin3: ["VAO", "3"],
  pin4: ["VSENSE", "4"],
  pin5: ["VINAC", "5"],
  pin6: ["IMO", "6"],
  pin7: ["RSYNTH", "7"],
  pin8: ["CSB", "8"],
  pin9: ["CSA", "9"],
  pin10: ["PKLMT", "10"],
  pin11: ["CAOB", "11"],
  pin12: ["CAOA", "12"],
  pin13: ["VREF", "13"],
  pin14: ["GDA", "14"],
  pin15: ["VCC", "15"],
  pin16: ["GND", "16"],
  pin17: ["GDB", "17"],
  pin18: ["SS", "18"],
  pin19: ["RT", "19"],
  pin20: ["DMAX", "20"],
} as const;

const pinRoles = {
  pin1: "input",
  pin2: "control",
  pin3: "output",
  pin4: "output",
  pin5: "power",
  pin6: "output",
  pin7: "input",
  pin8: "control",
  pin9: "control",
  pin10: "input",
  pin11: "output",
  pin12: "output",
  pin13: "output",
  pin14: "output",
  pin15: "power",
  pin16: "ground",
  pin17: "output",
  pin18: "control",
  pin19: "input",
  pin20: "input",
} as const;

const pinAttributes = {
  pin5: { requiresPower: true },
  pin15: { requiresPower: true },
  pin16: { requiresGround: true },
} as const;

export const UCC28070QPWRQ1 = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing PW0020A; donor TXS0108EPWR (JLCPCB C17206)
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="UCC28070QPWRQ1"
      footprint="dfn20_pillpads_p0.65mm_w7.4839mm_pw0.364mm_pl1.742mm_pin1location(leftside,bottom)"
      {...props}
    />
  );
};

export default UCC28070QPWRQ1;
