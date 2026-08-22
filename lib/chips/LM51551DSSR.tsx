import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["BIAS"],
  pin2: ["VCC"],
  pin3: ["GATE"],
  pin4: ["PGND"],
  pin5: ["CS"],
  pin6: ["COMP"],
  pin7: ["AGND"],
  pin8: ["FB"],
  pin9: ["SS"],
  pin10: ["RT"],
  pin11: ["PGOOD"],
  pin12: ["pin12"],
  pin13: ["EP"],
} as const;

const pinAttributes = {
  pin2: { requiresPower: true },
  pin4: { requiresGround: true },
  pin7: { requiresGround: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin13: [...pinLabels["pin13"], "thermalpad"],
} as const;

export const LM51551DSSR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C778612"],
      }}
      manufacturerPartNumber="LM51551DSSR"
      footprint="dfn12_thermalpad1mmx2.65mm_p0.4999mm_w2.4001mm_pw0.26mm_pl0.505mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C778612.obj?uuid=8a5e00977b1a4453aacc8e1656ee00b2",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C778612.step?uuid=8a5e00977b1a4453aacc8e1656ee00b2",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.00005079999993995443, y: 0, z: -0.02 },
      }}
      {...props}
    />
  );
};

export default LM51551DSSR;
