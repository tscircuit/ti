import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["FB0"],
  pin2: ["OUT0"],
  pin3: ["NC4"],
  pin4: ["NC3"],
  pin5: ["pin5"],
  pin6: ["pin6"],
  pin7: ["pin7"],
  pin8: ["pin8"],
  pin9: ["NC2"],
  pin10: ["NC1"],
  pin11: ["pin11"],
  pin12: ["pin12"],
  pin13: ["CAP"],
  pin14: ["AGND"],
  pin15: ["VDD"],
  pin16: ["VREF"],
  pin17: ["EP"],
} as const;

const pinAttributes = {
  pin3: { doNotConnect: true },
  pin4: { doNotConnect: true },
  pin9: { doNotConnect: true },
  pin10: { doNotConnect: true },
  pin14: { requiresGround: true },
  pin15: { requiresPower: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin17: [...pinLabels["pin17"], "thermalpad"],
} as const;

export const DAC63001RTER = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C20345345"],
      }}
      manufacturerPartNumber="DAC63001RTER"
      footprint="qfn16_thermalpad1.7mmx1.7mm_p0.4999mm_pw0.28mm_pl0.8mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C20345345.obj?uuid=8f6bcfe84b5f47c1b11eda1233a27108",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C20345345.step?uuid=8f6bcfe84b5f47c1b11eda1233a27108",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: -0.000025399999998398926,
          y: 0.000025399999998398926,
          z: -0.8,
        },
      }}
      {...props}
    />
  );
};

export default DAC63001RTER;
