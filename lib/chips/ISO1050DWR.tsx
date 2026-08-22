import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VCC1"],
  pin2: ["GND11"],
  pin3: ["RXD"],
  pin4: ["NC1"],
  pin5: ["NC2"],
  pin6: ["TXD"],
  pin7: ["GND12"],
  pin8: ["GND13"],
  pin9: ["GND23"],
  pin10: ["GND22"],
  pin11: ["NC4"],
  pin12: ["CANL"],
  pin13: ["CANH"],
  pin14: ["NC3"],
  pin15: ["GND21"],
  pin16: ["VCC2"],
} as const;

const pinAttributes = {
  pin1: { requiresPower: true },
  pin2: { requiresGround: true },
  pin4: { doNotConnect: true },
  pin5: { doNotConnect: true },
  pin7: { requiresGround: true },
  pin8: { requiresGround: true },
  pin9: { requiresGround: true },
  pin10: { requiresGround: true },
  pin11: { doNotConnect: true },
  pin14: { doNotConnect: true },
  pin15: { requiresGround: true },
  pin16: { requiresPower: true },
} as const;

export const ISO1050DWR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C93718"],
      }}
      manufacturerPartNumber="ISO1050DWR"
      footprint="soic16_pillpads_w11.9011mm_pw0.574mm_pl2.4005mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C93718.obj?uuid=5eab397ba6c7470199f8f0425efad579",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C93718.step?uuid=5eab397ba6c7470199f8f0425efad579",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0.000012700000070253736, y: 0, z: -0.049425 },
      }}
      {...props}
    />
  );
};

export default ISO1050DWR;
