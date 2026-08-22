import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VCCA"],
  pin2: ["1DIR"],
  pin3: ["2DIR"],
  pin4: ["1A1"],
  pin5: ["1A2"],
  pin6: ["2A1"],
  pin7: ["2A2"],
  pin8: ["GND1"],
  pin9: ["GND2"],
  pin10: ["2B2"],
  pin11: ["2B1"],
  pin12: ["1B2"],
  pin13: ["1B1"],
  pin14: ["2OE"],
  pin15: ["1OE"],
  pin16: ["VCCB"],
} as const;

const pinAttributes = {
  pin8: { requiresGround: true },
  pin9: { requiresGround: true },
} as const;

export const SN74AXC4T245PWR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2867798"],
      }}
      manufacturerPartNumber="SN74AXC4T245PWR"
      footprint="dfn16_pillpads_p0.65mm_w7.463mm_pw0.343mm_pl1.7315mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2867798.obj?uuid=534f03d8fe164fbab551f91e5a792e30",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2867798.step?uuid=534f03d8fe164fbab551f91e5a792e30",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: -0.00012700000002041634, y: 0, z: -0.019205 },
      }}
      {...props}
    />
  );
};

export default SN74AXC4T245PWR;
