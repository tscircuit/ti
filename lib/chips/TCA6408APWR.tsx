import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VCCI"],
  pin2: ["ADDR"],
  pin3: ["RESET"],
  pin4: ["P0"],
  pin5: ["P1"],
  pin6: ["P2"],
  pin7: ["P3"],
  pin8: ["GND"],
  pin9: ["P4"],
  pin10: ["P5"],
  pin11: ["P6"],
  pin12: ["P7"],
  pin13: ["INT"],
  pin14: ["SCL"],
  pin15: ["SDA"],
  pin16: ["VCCP"],
} as const;

const pinAttributes = {
  pin8: { requiresGround: true },
} as const;

export const TCA6408APWR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C206177"],
      }}
      manufacturerPartNumber="TCA6408APWR"
      footprint="dfn16_pillpads_p0.65mm_w7.463mm_pw0.343mm_pl1.7315mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C206177.obj?uuid=534f03d8fe164fbab551f91e5a792e30",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C206177.step?uuid=534f03d8fe164fbab551f91e5a792e30",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: -0.00012700000002041634, y: 0, z: -0.019205 },
      }}
      {...props}
    />
  );
};

export default TCA6408APWR;
