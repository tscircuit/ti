import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["I7"],
  pin3: ["I6"],
  pin4: ["I5"],
  pin5: ["I4"],
  pin6: ["I3"],
  pin7: ["I2"],
  pin8: ["I1"],
  pin9: ["I0"],
  pin10: ["S0"],
  pin11: ["S1"],
  pin12: ["GND"],
  pin13: ["S3"],
  pin14: ["S2"],
  pin15: ["E"],
  pin16: ["I15"],
  pin17: ["I14"],
  pin18: ["I13"],
  pin19: ["I12"],
  pin20: ["I11"],
  pin21: ["I10"],
  pin22: ["I9"],
  pin23: ["I8"],
  pin24: ["VCC"],
} as const;

const pinAttributes = {
  pin12: { requiresGround: true },
  pin24: { requiresPower: true },
} as const;

export const CD74HC4067SM96 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C98457"],
      }}
      manufacturerPartNumber="CD74HC4067SM96"
      footprint="dfn24_pillpads_p0.65mm_w8.4482mm_pw0.308mm_pl1.324mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C98457.obj?uuid=44cbf0bf34924619a9a3f811509fb70e",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C98457.step?uuid=44cbf0bf34924619a9a3f811509fb70e",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  );
};

export default CD74HC4067SM96;
