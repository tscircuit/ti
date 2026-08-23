import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["ADDR0"],
  pin2: ["AGND"],
  pin3: ["ADDR1"],
  pin4: ["VCC"],
  pin5: ["SDA"],
  pin6: ["PGND"],
  pin7: ["SCL"],
  pin8: ["EN"],
  pin9: ["IREF"],
  pin10: ["VCAP"],
  pin11: ["NC1"],
  pin12: ["OUT0"],
  pin13: ["OUT1"],
  pin14: ["OUT2"],
  pin15: ["OUT3"],
  pin16: ["OUT4"],
  pin17: ["OUT5"],
  pin18: ["DGND"],
  pin19: ["OUT6"],
  pin20: ["OUT7"],
  pin21: ["OUT8"],
  pin22: ["NC2"],
  pin23: ["NC3"],
  pin24: ["NC4"],
} as const;

const pinAttributes = {
  pin2: { requiresGround: true },
  pin4: { requiresPower: true },
  pin6: { requiresGround: true },
  pin11: { doNotConnect: true },
  pin22: { doNotConnect: true },
  pin23: { doNotConnect: true },
  pin24: { doNotConnect: true },
} as const;

export const LP5009PWR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2866302"],
      }}
      manufacturerPartNumber="LP5009PWR"
      footprint="dfn24_p0.65mm_w7.6952mm_pw0.4mm_pl1.65mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2866302.obj?uuid=4564b07290534b8ea1373eede2664361",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2866302.step?uuid=4564b07290534b8ea1373eede2664361",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0, y: 0, z: -0.019205 },
      }}
      {...props}
    />
  );
};

export default LP5009PWR;
