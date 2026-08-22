import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VCC1"],
  pin2: ["GND11"],
  pin3: ["INA"],
  pin4: ["INB"],
  pin5: ["INC"],
  pin6: ["OUTD"],
  pin7: ["EN1"],
  pin8: ["GND12"],
  pin9: ["GND22"],
  pin10: ["EN2"],
  pin11: ["IND"],
  pin12: ["OUTC"],
  pin13: ["OUTB"],
  pin14: ["OUTA"],
  pin15: ["GND21"],
  pin16: ["VCC2"],
} as const;

const pinAttributes = {
  pin1: { requiresPower: true },
  pin2: { requiresGround: true },
  pin8: { requiresGround: true },
  pin9: { requiresGround: true },
  pin15: { requiresGround: true },
  pin16: { requiresPower: true },
} as const;

export const ISO6441DWR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C49303131"],
      }}
      manufacturerPartNumber="ISO6441DWR"
      footprint="soic16_pillpads_w11.9011mm_pw0.574mm_pl2.4005mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C49303131.obj?uuid=5eab397ba6c7470199f8f0425efad579",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C49303131.step?uuid=5eab397ba6c7470199f8f0425efad579",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0.000012700000070253736, y: 0, z: -0.049425 },
      }}
      {...props}
    />
  );
};

export default ISO6441DWR;
