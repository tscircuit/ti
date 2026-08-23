import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["AIN0"],
  pin2: ["AIN1"],
  pin3: ["AIN2"],
  pin4: ["AIN3"],
  pin5: ["pin5"],
  pin6: ["pin6"],
  pin7: ["pin7"],
  pin8: ["pin8"],
  pin9: ["CS"],
  pin10: ["pin10"],
  pin11: ["SDI"],
  pin12: ["SCLK"],
  pin13: ["DVDD"],
  pin14: ["GND"],
  pin15: ["AVDD"],
  pin16: ["REFOUT"],
  pin17: ["EP"],
} as const;

const pinAttributes = {
  pin14: { requiresGround: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin17: [...pinLabels["pin17"], "thermalpad"],
} as const;

export const ADS122S14IRTER = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C53283827"],
      }}
      manufacturerPartNumber="ADS122S14IRTER"
      footprint="qfn16_thermalpad1.7mmx1.7mm_p0.5004mm_pw0.28mm_pl0.8mm_pin1location(bottomside,left)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C53283827.obj?uuid=37ef10450bfb4a448c033cf71cc95b98",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C53283827.step?uuid=37ef10450bfb4a448c033cf71cc95b98",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0.000012699999999199463, y: 0, z: -0.02 },
      }}
      {...props}
    />
  );
};

export default ADS122S14IRTER;
