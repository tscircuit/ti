import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["INT"],
  pin2: ["A1"],
  pin3: ["A2"],
  pin4: ["P00"],
  pin5: ["P01"],
  pin6: ["P02"],
  pin7: ["P03"],
  pin8: ["P04"],
  pin9: ["P05"],
  pin10: ["P06"],
  pin11: ["P07"],
  pin12: ["GND"],
  pin13: ["P10"],
  pin14: ["P11"],
  pin15: ["P12"],
  pin16: ["P13"],
  pin17: ["P14"],
  pin18: ["P15"],
  pin19: ["P16"],
  pin20: ["P17"],
  pin21: ["A0"],
  pin22: ["SCL"],
  pin23: ["SDA"],
  pin24: ["VCC"],
} as const;

const pinAttributes = {
  pin12: { requiresGround: true },
  pin24: { requiresPower: true },
} as const;

export const TCA9535DBR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2652322"],
      }}
      manufacturerPartNumber="TCA9535DBR"
      footprint="dfn24_pillpads_p0.65mm_w8.4482mm_pw0.308mm_pl1.324mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2652322.obj?uuid=44cbf0bf34924619a9a3f811509fb70e",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2652322.step?uuid=44cbf0bf34924619a9a3f811509fb70e",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  );
};

export default TCA9535DBR;
