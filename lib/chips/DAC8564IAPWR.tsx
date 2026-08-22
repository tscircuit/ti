import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VOUTA"],
  pin2: ["VOUTB"],
  pin3: ["pin3"],
  pin4: ["AVDD"],
  pin5: ["VREFL"],
  pin6: ["GND"],
  pin7: ["VOUTC"],
  pin8: ["VOUTD"],
  pin9: ["SYNC"],
  pin10: ["SCLK"],
  pin11: ["DIN"],
  pin12: ["IOVDD"],
  pin13: ["A0"],
  pin14: ["A1"],
  pin15: ["ENABLE"],
  pin16: ["LDAC"],
} as const;

const pinAttributes = {
  pin6: { requiresGround: true },
} as const;

export const DAC8564IAPWR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2680186"],
      }}
      manufacturerPartNumber="DAC8564IAPWR"
      footprint="dfn16_pillpads_p0.65mm_w7.463mm_pw0.343mm_pl1.7315mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2680186.obj?uuid=534f03d8fe164fbab551f91e5a792e30",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2680186.step?uuid=534f03d8fe164fbab551f91e5a792e30",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: -0.00012700000002041634, y: 0, z: -0.019205 },
      }}
      {...props}
    />
  );
};

export default DAC8564IAPWR;
