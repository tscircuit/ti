import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VREF", "A1"],
  pin2: ["OUT3", "A2"],
  pin3: ["OUT2", "A3"],
  pin4: ["GPIO_SDO", "A4"],
  pin8: ["VDD", "B1"],
  pin7: ["FB3", "B2"],
  pin6: ["FB2", "B3"],
  pin5: ["SCL_SYNC", "B4"],
  pin9: ["AGND", "C1"],
  pin10: ["FB0", "C2"],
  pin11: ["FB1", "C3"],
  pin12: ["A0_SDI", "C4"],
  pin16: ["CAP", "D1"],
  pin15: ["OUT0", "D2"],
  pin14: ["OUT1", "D3"],
  pin13: ["SDA_SCLK", "D4"],
} as const;

const pinRoles = {
  pin1: "power",
  pin2: "output",
  pin3: "output",
  pin8: "power",
  pin7: "input",
  pin6: "input",
  pin5: "output",
  pin9: "ground",
  pin10: "input",
  pin11: "input",
  pin12: "input",
  pin16: "power",
  pin15: "output",
  pin14: "output",
} as const;

const pinAttributes = {
  pin1: {
    requiresPower: true,
  },
  pin8: {
    requiresPower: true,
  },
  pin9: {
    requiresGround: true,
  },
  pin16: {
    requiresPower: true,
  },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin13: [...pinLabels["pin13"], "pin1"],
  pin12: [...pinLabels["pin12"], "pin2"],
  pin5: [...pinLabels["pin5"], "pin3"],
  pin14: [...pinLabels["pin14"], "pin5"],
  pin11: [...pinLabels["pin11"], "pin6"],
  pin6: [...pinLabels["pin6"], "pin7"],
  pin3: [...pinLabels["pin3"], "pin8"],
  pin15: [...pinLabels["pin15"], "pin9"],
  pin7: [...pinLabels["pin7"], "pin11"],
  pin2: [...pinLabels["pin2"], "pin12"],
  pin16: [...pinLabels["pin16"], "pin13"],
  pin9: [...pinLabels["pin9"], "pin14"],
  pin8: [...pinLabels["pin8"], "pin15"],
  pin1: [...pinLabels["pin1"], "pin16"],
} as const;

export const DAC53204YBHR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C6019631"],
      }}
      manufacturerPartNumber="DAC53204YBHR"
      footprint="bga16_p0.4mm_pad0.2mm_pin1location(rightside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C6019631.obj?uuid=d0fedb56068641d3b1235be07e84a4d3",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C6019631.step?uuid=d0fedb56068641d3b1235be07e84a4d3",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: -0.000012699999956566899, z: -0.58 },
      }}
      {...props}
    />
  );
};

export default DAC53204YBHR;
