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
  pin13: ["EP"],
} as const;

const pinAttributes = {
  pin7: { requiresPower: true },
  pin8: { requiresGround: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin13: [...pinLabels["pin13"], "thermalpad"],
} as const;

export const LDC1312DNTR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2667270"],
      }}
      manufacturerPartNumber="LDC1312DNTR"
      footprint="dfn12_thermalpad2.6mmx3mm_p0.4999mm_w4.4801mm_pw0.28mm_pl0.665mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2667270.obj?uuid=166aa7eeee024366b1ff7a19072abe75",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2667270.step?uuid=166aa7eeee024366b1ff7a19072abe75",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  );
};

export default LDC1312DNTR;
