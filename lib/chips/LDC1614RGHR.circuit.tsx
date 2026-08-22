import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["SCL"],
  pin2: ["SDA"],
  pin3: ["CLKIN"],
  pin4: ["ADDR"],
  pin5: ["INTB"],
  pin6: ["SD"],
  pin7: ["VDD"],
  pin8: ["GND"],
  pin9: ["IN0A"],
  pin10: ["IN0B"],
  pin11: ["IN1A"],
  pin12: ["IN1B"],
  pin13: ["IN2A"],
  pin14: ["IN2B"],
  pin15: ["IN3A"],
  pin16: ["IN3B"],
  pin17: ["EP"],
} as const;

const pinAttributes = {
  pin7: { requiresPower: true },
  pin8: { requiresGround: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin17: [...pinLabels["pin17"], "thermalpad"],
} as const;

export const LDC1614RGHR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C968448"],
      }}
      manufacturerPartNumber="LDC1614RGHR"
      footprint="qfn16_thermalpad2.6mmx2.6mm_p0.5001mm_h4.6801mm_pw0.28mm_pl0.665mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C968448.obj?uuid=0bfbea00a90648588cbb28ccdefac02e",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C968448.step?uuid=0bfbea00a90648588cbb28ccdefac02e",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.8 },
      }}
      {...props}
    />
  );
};

export default LDC1614RGHR;
