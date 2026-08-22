import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["AIN"],
  pin2: ["DESAT"],
  pin3: ["COM"],
  pin4: ["OUTH"],
  pin5: ["VDD"],
  pin6: ["OUTL"],
  pin7: ["CLMPI"],
  pin8: ["VEE"],
  pin9: ["GND"],
  pin10: ["IN_POS"],
  pin11: ["IN_NEG"],
  pin12: ["RDY"],
  pin13: ["FLT"],
  pin14: ["pin14"],
  pin15: ["VCC"],
  pin16: ["APWM"],
} as const;

const pinAttributes = {
  pin5: { requiresPower: true },
  pin9: { requiresGround: true },
  pin15: { requiresPower: true },
} as const;

export const UCC21750DWR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C5216339"],
      }}
      manufacturerPartNumber="UCC21750DWR"
      footprint="soic16_pillpads_w11.9011mm_pw0.574mm_pl2.4005mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C5216339.obj?uuid=5eab397ba6c7470199f8f0425efad579",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C5216339.step?uuid=5eab397ba6c7470199f8f0425efad579",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0.000012700000070253736, y: 0, z: -0.049425 },
      }}
      {...props}
    />
  );
};

export default UCC21750DWR;
