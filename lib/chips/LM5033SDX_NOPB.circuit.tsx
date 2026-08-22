import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VIN"],
  pin2: ["REF"],
  pin3: ["COMP"],
  pin4: ["VCC"],
  pin5: ["OUT1"],
  pin6: ["OUT2"],
  pin7: ["GND"],
  pin8: ["CS"],
  pin9: ["pin9"],
  pin10: ["SS"],
  pin11: ["EP"],
} as const;

const pinAttributes = {
  pin1: { requiresPower: true },
  pin4: { requiresPower: true },
  pin7: { requiresGround: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin11: [...pinLabels["pin11"], "thermalpad"],
} as const;

export const LM5033SDX_NOPB = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2861432"],
      }}
      manufacturerPartNumber="LM5033SDX/NOPB"
      footprint="dfn10_thermalpad2.6mmx3mm_pillpads_p0.7998mm_w4.851mm_pw0.371mm_pl0.8505mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2861432.obj?uuid=f241b3ea1cd44df8b7b4d1edde10b779",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2861432.step?uuid=f241b3ea1cd44df8b7b4d1edde10b779",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  );
};

export default LM5033SDX_NOPB;
