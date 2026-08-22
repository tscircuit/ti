import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["CS"],
  pin2: ["VA"],
  pin3: ["AGND"],
  pin4: ["IN0"],
  pin5: ["IN1"],
  pin6: ["IN2"],
  pin7: ["IN3"],
  pin8: ["IN4"],
  pin9: ["IN5"],
  pin10: ["IN6"],
  pin11: ["IN7"],
  pin12: ["DGND"],
  pin13: ["VD"],
  pin14: ["DIN"],
  pin15: ["DOUT"],
  pin16: ["SCLK"],
} as const;

const pinAttributes = {
  pin3: { requiresGround: true },
} as const;

export const ADC128S022CIMTX_NOPB = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C180424"],
      }}
      manufacturerPartNumber="ADC128S022CIMTX/NOPB"
      footprint="dfn16_pillpads_p0.65mm_w7.463mm_pw0.343mm_pl1.7315mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C180424.obj?uuid=534f03d8fe164fbab551f91e5a792e30",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C180424.step?uuid=534f03d8fe164fbab551f91e5a792e30",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: -0.00012700000002041634, y: 0, z: -0.019205 },
      }}
      {...props}
    />
  );
};

export default ADC128S022CIMTX_NOPB;
