import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["AIN0P"],
  pin2: ["AIN0N"],
  pin3: ["AIN1N"],
  pin4: ["AIN1P"],
  pin5: ["AIN2P"],
  pin6: ["AIN2N"],
  pin7: ["NC1"],
  pin8: ["NC2"],
  pin9: ["pin9"],
  pin10: ["CS"],
  pin11: ["DRDY"],
  pin12: ["SCLK"],
  pin13: ["DOUT"],
  pin14: ["DIN"],
  pin15: ["CLKIN"],
  pin16: ["CAP"],
  pin17: ["DGND"],
  pin18: ["DVDD"],
  pin19: ["AVDD"],
  pin20: ["AGND"],
  pin21: ["EP"],
} as const;

const pinAttributes = {
  pin7: { doNotConnect: true },
  pin8: { doNotConnect: true },
  pin20: { requiresGround: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin21: [...pinLabels["pin21"], "thermalpad"],
} as const;

export const ADS131M03IRUKR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C5116472"],
      }}
      manufacturerPartNumber="ADS131M03IRUKR"
      footprint="qfn20_thermalpad1.65mmx1.65mm_p0.4mm_h3.6798mm_pw0.2mm_pl0.665mm_pin1location(bottomside,left)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C5116472.obj?uuid=61b6ae921434449696dbd4fc3f995851",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C5116472.step?uuid=61b6ae921434449696dbd4fc3f995851",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.02 },
      }}
      {...props}
    />
  );
};

export default ADS131M03IRUKR;
