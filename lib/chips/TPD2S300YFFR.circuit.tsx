import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["C_CC1", "A1"],
  pin2: ["VBIAS", "A2"],
  pin3: ["C_CC2", "A3"],
  pin4: ["CC1", "B1"],
  pin5: ["GND", "B2"],
  pin6: ["CC2", "B3"],
  pin7: ["FLT", "C1"],
  pin8: ["VPWR", "C2"],
  pin9: ["VM", "C3"],
} as const;

const pinRoles = {
  pin1: "bidirectional",
  pin2: "power",
  pin3: "bidirectional",
  pin4: "bidirectional",
  pin5: "ground",
  pin6: "bidirectional",
  pin7: "output",
  pin8: "power",
  pin9: "input",
} as const;

const pinAttributes = {
  pin2: {
    requiresPower: true,
  },
  pin5: {
    requiresGround: true,
  },
  pin8: {
    requiresPower: true,
  },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin4: [...pinLabels["pin4"], "pin2"],
  pin7: [...pinLabels["pin7"], "pin3"],
  pin2: [...pinLabels["pin2"], "pin4"],
  pin8: [...pinLabels["pin8"], "pin6"],
  pin3: [...pinLabels["pin3"], "pin7"],
  pin6: [...pinLabels["pin6"], "pin8"],
} as const;

export const TPD2S300YFFR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2650411"],
      }}
      manufacturerPartNumber="TPD2S300YFFR"
      footprint="bga9_p0.4mm_pad0.184mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2650411.obj?uuid=f86a8ab636c14685aa93c6f80c42ebbe",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2650411.step?uuid=f86a8ab636c14685aa93c6f80c42ebbe",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: -0.000012699999999199463,
          y: -0.02496820000000355,
          z: -0.58,
        },
      }}
      {...props}
    />
  );
};

export default TPD2S300YFFR;
