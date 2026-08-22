import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["SENSE"],
  pin2: ["VIN"],
  pin3: ["UVLO"],
  pin4: ["OVLO"],
  pin5: ["GND"],
  pin6: ["TIMER"],
  pin7: ["PWR"],
  pin8: ["PGD"],
  pin9: ["OUT"],
  pin10: ["GATE"],
} as const;

const pinAttributes = {
  pin2: { requiresPower: true },
  pin5: { requiresGround: true },
} as const;

export const LM5069MM_1_NOPB = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C486026"],
      }}
      manufacturerPartNumber="LM5069MM-1/NOPB"
      footprint="dfn10_p0.4999mm_w5.5999mm_pw0.2997mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C486026.obj?uuid=7e1008479d3946c0bb169ece11479296",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C486026.step?uuid=7e1008479d3946c0bb169ece11479296",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: 0.00012700000000620548,
          y: 0.000012700000013410317,
          z: 0,
        },
      }}
      {...props}
    />
  );
};

export default LM5069MM_1_NOPB;
