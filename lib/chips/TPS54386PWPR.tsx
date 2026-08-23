import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["PVDD1"],
  pin2: ["BOOT1"],
  pin3: ["SW1"],
  pin4: ["GND"],
  pin5: ["EN1"],
  pin6: ["EN2"],
  pin7: ["FB1"],
  pin8: ["FB2"],
  pin9: ["ILIM2"],
  pin10: ["SEQ"],
  pin11: ["BP"],
  pin12: ["SW2"],
  pin13: ["BOOT2"],
  pin14: ["PVDD2"],
  pin15: ["EP"],
} as const;

const pinAttributes = {
  pin4: { requiresGround: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin15: [...pinLabels["pin15"], "thermalpad"],
} as const;

export const TPS54386PWPR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C54433"],
      }}
      manufacturerPartNumber="TPS54386PWPR"
      footprint="dfn14_thermalpad2.055mmx1.83mm_pillpads_p0.65mm_w7.463mm_pw0.343mm_pl1.7315mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C54433.obj?uuid=e28c83e0d6364fc9bab44164bfc1fe25",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C54433.step?uuid=e28c83e0d6364fc9bab44164bfc1fe25",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: -0.00011430000006384944, y: 0, z: -0.099083 },
      }}
      {...props}
    />
  );
};

export default TPS54386PWPR;
