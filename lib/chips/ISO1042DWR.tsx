import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VCC1"],
  pin2: ["GND11"],
  pin3: ["TXD"],
  pin4: ["NC1"],
  pin5: ["RXD"],
  pin6: ["NC2"],
  pin7: ["NC3"],
  pin8: ["GND12"],
  pin9: ["GND23"],
  pin10: ["GND22"],
  pin11: ["VCC22"],
  pin12: ["CANL"],
  pin13: ["CANH"],
  pin14: ["NC4"],
  pin15: ["GND21"],
  pin16: ["VCC21"],
} as const;

const pinAttributes = {
  pin1: { requiresPower: true },
  pin2: { requiresGround: true },
  pin4: { doNotConnect: true },
  pin6: { doNotConnect: true },
  pin7: { doNotConnect: true },
  pin8: { requiresGround: true },
  pin9: { requiresGround: true },
  pin10: { requiresGround: true },
  pin11: { requiresPower: true },
  pin14: { doNotConnect: true },
  pin15: { requiresGround: true },
  pin16: { requiresPower: true },
} as const;

export const ISO1042DWR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C1848126"],
      }}
      manufacturerPartNumber="ISO1042DWR"
      footprint="soic16_pillpads_w11.9011mm_pw0.574mm_pl2.4005mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C1848126.obj?uuid=5eab397ba6c7470199f8f0425efad579",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C1848126.step?uuid=5eab397ba6c7470199f8f0425efad579",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0.000012700000070253736, y: 0, z: -0.049425 },
      }}
      {...props}
    />
  );
};

export default ISO1042DWR;
