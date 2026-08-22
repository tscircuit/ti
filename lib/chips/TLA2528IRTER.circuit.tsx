import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["pin4"],
  pin5: ["pin5"],
  pin6: ["pin6"],
  pin7: ["AVDD"],
  pin8: ["DECAP"],
  pin9: ["GND2"],
  pin10: ["DVDD"],
  pin11: ["ADDR"],
  pin12: ["NC"],
  pin13: ["SCL"],
  pin14: ["SDA"],
  pin15: ["pin15"],
  pin16: ["pin16"],
  pin17: ["GND1"],
} as const;

const pinAttributes = {
  pin9: { requiresGround: true },
  pin12: { doNotConnect: true },
  pin17: { requiresGround: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin17: [...pinLabels["pin17"], "thermalpad"],
} as const;

export const TLA2528IRTER = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2866175"],
      }}
      manufacturerPartNumber="TLA2528IRTER"
      footprint="qfn16_thermalpad1.7mmx1.7mm_p0.4999mm_pw0.28mm_pl0.8mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2866175.obj?uuid=8f6bcfe84b5f47c1b11eda1233a27108",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2866175.step?uuid=8f6bcfe84b5f47c1b11eda1233a27108",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: -0.000025399999998398926,
          y: 0.000025399999998398926,
          z: -0.8,
        },
      }}
      {...props}
    />
  );
};

export default TLA2528IRTER;
