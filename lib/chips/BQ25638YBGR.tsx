import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin15: ["ADCIN", "C5"],
  pin21: ["BAT", "E1", "BAT_E1"],
  pin22: ["BAT", "E2", "BAT_E2"],
  pin23: ["BAT", "E3", "BAT_E3"],
  pin26: ["BATP", "F1"],
  pin10: ["BTST", "B5"],
  pin27: ["CE", "F2"],
  pin29: ["TS_BIAS", "F4"],
  pin28: ["ILIM", "F3"],
  pin30: ["INT", "F5"],
  pin12: ["PG", "C2"],
  pin4: ["PGND", "A4", "PGND_A4"],
  pin9: ["PGND", "B4", "PGND_B4"],
  pin14: ["PGND", "C4", "PGND_C4"],
  pin2: ["PMID", "A2", "PMID_A2"],
  pin7: ["PMID", "B2", "PMID_B2"],
  pin19: ["QON", "D4"],
  pin5: ["REGN", "A5"],
  pin20: ["SCL", "D5"],
  pin25: ["SDA", "E5"],
  pin11: ["STAT", "C1"],
  pin3: ["SW", "A3", "SW_A3"],
  pin8: ["SW", "B3", "SW_B3"],
  pin13: ["SW", "C3", "SW_C3"],
  pin16: ["SYS", "D1", "SYS_D1"],
  pin17: ["SYS", "D2", "SYS_D2"],
  pin18: ["SYS", "D3", "SYS_D3"],
  pin24: ["TS", "E4"],
  pin1: ["VBUS", "A1", "VBUS_A1"],
  pin6: ["VBUS", "B1", "VBUS_B1"],
} as const;

const pinRoles = {
  pin21: "power",
  pin22: "power",
  pin23: "power",
  pin10: "power",
  pin4: "ground",
  pin9: "ground",
  pin14: "ground",
  pin2: "power",
  pin7: "power",
  pin5: "power",
  pin3: "power",
  pin8: "power",
  pin13: "power",
  pin16: "power",
  pin17: "power",
  pin18: "power",
  pin1: "power",
  pin6: "power",
} as const;

const pinAttributes = {
  pin21: {
    requiresPower: true,
  },
  pin22: {
    requiresPower: true,
  },
  pin23: {
    requiresPower: true,
  },
  pin10: {
    requiresPower: true,
  },
  pin4: {
    requiresGround: true,
  },
  pin9: {
    requiresGround: true,
  },
  pin14: {
    requiresGround: true,
  },
  pin2: {
    requiresPower: true,
  },
  pin7: {
    requiresPower: true,
  },
  pin5: {
    requiresPower: true,
  },
  pin3: {
    requiresPower: true,
  },
  pin8: {
    requiresPower: true,
  },
  pin13: {
    requiresPower: true,
  },
  pin16: {
    requiresPower: true,
  },
  pin17: {
    requiresPower: true,
  },
  pin18: {
    requiresPower: true,
  },
  pin1: {
    requiresPower: true,
  },
  pin6: {
    requiresPower: true,
  },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin6: [...pinLabels["pin6"], "pin2"],
  pin11: [...pinLabels["pin11"], "pin3"],
  pin16: [...pinLabels["pin16"], "pin4"],
  pin21: [...pinLabels["pin21"], "pin5"],
  pin26: [...pinLabels["pin26"], "pin6"],
  pin2: [...pinLabels["pin2"], "pin7"],
  pin7: [...pinLabels["pin7"], "pin8"],
  pin12: [...pinLabels["pin12"], "pin9"],
  pin17: [...pinLabels["pin17"], "pin10"],
  pin22: [...pinLabels["pin22"], "pin11"],
  pin27: [...pinLabels["pin27"], "pin12"],
  pin3: [...pinLabels["pin3"], "pin13"],
  pin8: [...pinLabels["pin8"], "pin14"],
  pin13: [...pinLabels["pin13"], "pin15"],
  pin18: [...pinLabels["pin18"], "pin16"],
  pin23: [...pinLabels["pin23"], "pin17"],
  pin28: [...pinLabels["pin28"], "pin18"],
  pin4: [...pinLabels["pin4"], "pin19"],
  pin9: [...pinLabels["pin9"], "pin20"],
  pin14: [...pinLabels["pin14"], "pin21"],
  pin19: [...pinLabels["pin19"], "pin22"],
  pin24: [...pinLabels["pin24"], "pin23"],
  pin29: [...pinLabels["pin29"], "pin24"],
  pin5: [...pinLabels["pin5"], "pin25"],
  pin10: [...pinLabels["pin10"], "pin26"],
  pin15: [...pinLabels["pin15"], "pin27"],
  pin20: [...pinLabels["pin20"], "pin28"],
  pin25: [...pinLabels["pin25"], "pin29"],
} as const;

export const BQ25638YBGR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C22427333"],
      }}
      manufacturerPartNumber="BQ25638YBGR"
      footprint="bga30_grid6x5_p0.4mm_pad0.19mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C22427333.obj?uuid=1d6fd9bf151744aa9a21a62bd0e04e10",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C22427333.step?uuid=1d6fd9bf151744aa9a21a62bd0e04e10",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.000012699999999199463, y: 0, z: -0.51 },
      }}
      {...props}
    />
  );
};

export default BQ25638YBGR;
