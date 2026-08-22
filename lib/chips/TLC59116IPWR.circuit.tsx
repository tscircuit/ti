import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["REXT"],
  pin2: ["A0"],
  pin3: ["A1"],
  pin4: ["A2"],
  pin5: ["A3"],
  pin6: ["OUT0"],
  pin7: ["OUT1"],
  pin8: ["OUT2"],
  pin9: ["OUT3"],
  pin10: ["GND1"],
  pin11: ["OUT4"],
  pin12: ["OUT5"],
  pin13: ["OUT6"],
  pin14: ["OUT7"],
  pin15: ["OUT8"],
  pin16: ["OUT9"],
  pin17: ["OUT10"],
  pin18: ["OUT11"],
  pin19: ["GND2"],
  pin20: ["OUT12"],
  pin21: ["OUT13"],
  pin22: ["OUT14"],
  pin23: ["OUT15"],
  pin24: ["GND3"],
  pin25: ["RESET"],
  pin26: ["SCL"],
  pin27: ["SDA"],
  pin28: ["VCC"],
} as const;

const pinAttributes = {
  pin10: { requiresGround: true },
  pin19: { requiresGround: true },
  pin24: { requiresGround: true },
  pin28: { requiresPower: true },
} as const;

export const TLC59116IPWR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{ jlcpcb: ["C131194"] }}
      manufacturerPartNumber="TLC59116IPWR"
      footprint="tssop28_w2.8mm_p0.65mm_pw0.45mm_pl1.5mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C131194.obj?uuid=2053e8d1858d4177b198d2a6a51e42a9",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C131194.step?uuid=2053e8d1858d4177b198d2a6a51e42a9",
        pcbRotationOffset: 90,
        modelOriginPosition: {
          x: 0.013093699999998876,
          y: 0.0007112000000120133,
          z: -0.2,
        },
      }}
      {...props}
    />
  );
};

export default TLC59116IPWR;
