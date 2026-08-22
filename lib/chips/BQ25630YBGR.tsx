import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin5: ["BAT", "E1", "BAT_E1"],
  pin11: ["BAT", "E2", "BAT_E2"],
  pin17: ["BAT", "E3", "BAT_E3"],
  pin6: ["BATP", "F1"],
  pin26: ["BTST", "B5"],
  pin3: ["CE", "C1"],
  pin12: ["D_P", "F2"],
  pin18: ["D_N", "F3"],
  pin24: ["CC1", "F4"],
  pin30: ["CC2", "F5"],
  pin27: ["INT", "C5"],
  pin9: ["PG", "C2"],
  pin19: ["PGND", "A4", "PGND_A4"],
  pin20: ["PGND", "B4", "PGND_B4"],
  pin21: ["PGND", "C4", "PGND_C4"],
  pin7: ["PMID", "A2", "PMID_A2"],
  pin8: ["PMID", "B2", "PMID_B2"],
  pin22: ["QON", "D4"],
  pin25: ["REGN", "A5"],
  pin28: ["SCL", "D5"],
  pin29: ["SDA", "E5"],
  pin13: ["SW", "A3", "SW_A3"],
  pin14: ["SW", "B3", "SW_B3"],
  pin15: ["SW", "C3", "SW_C3"],
  pin4: ["SYS", "D1", "SYS_D1"],
  pin10: ["SYS", "D2", "SYS_D2"],
  pin16: ["SYS", "D3", "SYS_D3"],
  pin23: ["TS", "E4"],
  pin1: ["VBUS", "A1", "VBUS_A1"],
  pin2: ["VBUS", "B1", "VBUS_B1"],
} as const;

const pinRoles = {
  pin5: "power",
  pin11: "power",
  pin17: "power",
  pin26: "power",
  pin19: "ground",
  pin20: "ground",
  pin21: "ground",
  pin7: "power",
  pin8: "power",
  pin25: "power",
  pin13: "power",
  pin14: "power",
  pin15: "power",
  pin4: "power",
  pin10: "power",
  pin16: "power",
  pin1: "power",
  pin2: "power",
} as const;

const pinAttributes = {
  pin5: {
    requiresPower: true,
  },
  pin11: {
    requiresPower: true,
  },
  pin17: {
    requiresPower: true,
  },
  pin26: {
    requiresPower: true,
  },
  pin19: {
    requiresGround: true,
  },
  pin20: {
    requiresGround: true,
  },
  pin21: {
    requiresGround: true,
  },
  pin7: {
    requiresPower: true,
  },
  pin8: {
    requiresPower: true,
  },
  pin25: {
    requiresPower: true,
  },
  pin13: {
    requiresPower: true,
  },
  pin14: {
    requiresPower: true,
  },
  pin15: {
    requiresPower: true,
  },
  pin4: {
    requiresPower: true,
  },
  pin10: {
    requiresPower: true,
  },
  pin16: {
    requiresPower: true,
  },
  pin1: {
    requiresPower: true,
  },
  pin2: {
    requiresPower: true,
  },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin6: [...pinLabels["pin6"], "pin1"],
  pin12: [...pinLabels["pin12"], "pin2"],
  pin18: [...pinLabels["pin18"], "pin3"],
  pin24: [...pinLabels["pin24"], "pin4"],
  pin30: [...pinLabels["pin30"], "pin5"],
  pin5: [...pinLabels["pin5"], "pin6"],
  pin11: [...pinLabels["pin11"], "pin7"],
  pin17: [...pinLabels["pin17"], "pin8"],
  pin23: [...pinLabels["pin23"], "pin9"],
  pin29: [...pinLabels["pin29"], "pin10"],
  pin4: [...pinLabels["pin4"], "pin11"],
  pin10: [...pinLabels["pin10"], "pin12"],
  pin16: [...pinLabels["pin16"], "pin13"],
  pin22: [...pinLabels["pin22"], "pin14"],
  pin28: [...pinLabels["pin28"], "pin15"],
  pin3: [...pinLabels["pin3"], "pin16"],
  pin9: [...pinLabels["pin9"], "pin17"],
  pin15: [...pinLabels["pin15"], "pin18"],
  pin21: [...pinLabels["pin21"], "pin19"],
  pin27: [...pinLabels["pin27"], "pin20"],
  pin2: [...pinLabels["pin2"], "pin21"],
  pin8: [...pinLabels["pin8"], "pin22"],
  pin14: [...pinLabels["pin14"], "pin23"],
  pin20: [...pinLabels["pin20"], "pin24"],
  pin26: [...pinLabels["pin26"], "pin25"],
  pin1: [...pinLabels["pin1"], "pin26"],
  pin7: [...pinLabels["pin7"], "pin27"],
  pin13: [...pinLabels["pin13"], "pin28"],
  pin19: [...pinLabels["pin19"], "pin29"],
  pin25: [...pinLabels["pin25"], "pin30"],
} as const;

export const BQ25630YBGR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C53283867"],
      }}
      manufacturerPartNumber="BQ25630YBGR"
      footprint="bga30_grid5x6_p0.4mm_pad0.208mm"
      {...props}
    />
  );
};

export default BQ25630YBGR;
