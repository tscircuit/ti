import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["GND"],
  pin2: ["SDI"],
  pin3: ["CLK"],
  pin4: ["pin4"],
  pin5: ["OUT0"],
  pin6: ["OUT1"],
  pin7: ["OUT2"],
  pin8: ["OUT3"],
  pin9: ["OUT4"],
  pin10: ["OUT5"],
  pin11: ["OUT6"],
  pin12: ["OUT7"],
  pin13: ["pin13"],
  pin14: ["SDO"],
  pin15: ["R_EXT"],
  pin16: ["VDD"],
} as const;

const pinAttributes = {
  pin1: { requiresGround: true },
  pin16: { requiresPower: true },
} as const;

export const TLC5916IPWR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C193571"],
      }}
      manufacturerPartNumber="TLC5916IPWR"
      footprint="dfn16_pillpads_p0.65mm_w7.463mm_pw0.343mm_pl1.7315mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C193571.obj?uuid=534f03d8fe164fbab551f91e5a792e30",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C193571.step?uuid=534f03d8fe164fbab551f91e5a792e30",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: -0.00012700000002041634, y: 0, z: -0.019205 },
      }}
      {...props}
    />
  );
};

export default TLC5916IPWR;
