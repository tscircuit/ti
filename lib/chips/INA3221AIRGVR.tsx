import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["IN_N3"],
  pin2: ["IN_P3"],
  pin3: ["GND"],
  pin4: ["VS"],
  pin5: ["A0"],
  pin6: ["SCL"],
  pin7: ["SDA"],
  pin8: ["WARNING"],
  pin9: ["CRITICAL"],
  pin10: ["PV"],
  pin11: ["IN_N1"],
  pin12: ["IN_P1"],
  pin13: ["TC"],
  pin14: ["IN_N2"],
  pin15: ["IN_P2"],
  pin16: ["VPU"],
  pin17: ["PAD"],
} as const;

const pinAttributes = {
  pin3: { requiresGround: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin17: [...pinLabels["pin17"], "thermalpad"],
} as const;

export const INA3221AIRGVR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C181255"],
      }}
      manufacturerPartNumber="INA3221AIRGVR"
      footprint="qfn16_thermalpad2.16mmx2.16mm_pillpads_p0.65mm_h5.224mm_pw0.364mm_pl1.087mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C181255.obj?uuid=005c494a04ea483db187f9e608c0fe00",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C181255.step?uuid=005c494a04ea483db187f9e608c0fe00",
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

export default INA3221AIRGVR;
