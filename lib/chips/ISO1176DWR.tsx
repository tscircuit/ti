import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VCC1"],
  pin2: ["GND11"],
  pin3: ["R"],
  pin4: ["RE"],
  pin5: ["DE"],
  pin6: ["D"],
  pin7: ["PV"],
  pin8: ["GND12"],
  pin9: ["GND22"],
  pin10: ["ISODE"],
  pin11: ["NC2"],
  pin12: ["A"],
  pin13: ["B"],
  pin14: ["NC1"],
  pin15: ["GND21"],
  pin16: ["VCC"],
} as const;

const pinAttributes = {
  pin1: { requiresPower: true },
  pin2: { requiresGround: true },
  pin8: { requiresGround: true },
  pin9: { requiresGround: true },
  pin11: { doNotConnect: true },
  pin14: { doNotConnect: true },
  pin15: { requiresGround: true },
  pin16: { requiresPower: true },
} as const;

export const ISO1176DWR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C529278"],
      }}
      manufacturerPartNumber="ISO1176DWR"
      footprint="soic16_pillpads_w11.9011mm_pw0.574mm_pl2.4005mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C529278.obj?uuid=5eab397ba6c7470199f8f0425efad579",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C529278.step?uuid=5eab397ba6c7470199f8f0425efad579",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0.000012700000070253736, y: 0, z: -0.049425 },
      }}
      {...props}
    />
  );
};

export default ISO1176DWR;
