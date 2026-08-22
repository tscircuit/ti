import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["GND1"],
  pin2: ["RF_N"],
  pin3: ["RF_P"],
  pin4: ["GND2"],
  pin5: ["PA_EN"],
  pin6: ["LNA_EN"],
  pin7: ["HGM"],
  pin8: ["BIAS"],
  pin9: ["GND3"],
  pin10: ["ANT"],
  pin11: ["GND4"],
  pin12: ["GND5"],
  pin13: ["VDD_LNA"],
  pin14: ["VDD_BIAS"],
  pin15: ["VDD_PA"],
  pin16: ["GND6"],
  pin17: ["pin17"],
} as const;

const pinAttributes = {
  pin1: { requiresGround: true },
  pin4: { requiresGround: true },
  pin9: { requiresGround: true },
  pin11: { requiresGround: true },
  pin12: { requiresGround: true },
  pin16: { requiresGround: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin17: [...pinLabels["pin17"], "thermalpad"],
} as const;

export const CC2592RGVR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C53274"],
      }}
      manufacturerPartNumber="CC2592RGVR"
      footprint="qfn16_thermalpad2.16mmx2.16mm_pillpads_p0.65mm_h5.224mm_pw0.364mm_pl1.087mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C53274.obj?uuid=005c494a04ea483db187f9e608c0fe00",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C53274.step?uuid=005c494a04ea483db187f9e608c0fe00",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: 0.000012700000070253736,
          y: -0.000012700000070253736,
          z: 0.01,
        },
      }}
      {...props}
    />
  );
};

export default CC2592RGVR;
