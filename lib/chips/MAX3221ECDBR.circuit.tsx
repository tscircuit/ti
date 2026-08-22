import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["EN"],
  pin2: ["C1_POS"],
  pin3: ["V_POS"],
  pin4: ["pin4"],
  pin5: ["C2_POS"],
  pin6: ["pin6"],
  pin7: ["pin7"],
  pin8: ["RIN"],
  pin9: ["ROUT"],
  pin10: ["INVALID"],
  pin11: ["DIN"],
  pin12: ["FORCEON"],
  pin13: ["DOUT"],
  pin14: ["GND"],
  pin15: ["VCC"],
  pin16: ["FORCEOFF"],
} as const;

const pinAttributes = {
  pin14: { requiresGround: true },
  pin15: { requiresPower: true },
} as const;

export const MAX3221ECDBR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2149503"],
      }}
      manufacturerPartNumber="MAX3221ECDBR"
      footprint="dfn16_pillpads_p0.65mm_w9.0002mm_pw0.4mm_pl2.1mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2149503.obj?uuid=e68da2a1e3cb458897aa15108dc78818",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2149503.step?uuid=e68da2a1e3cb458897aa15108dc78818",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: 0.025 },
      }}
      {...props}
    />
  );
};

export default MAX3221ECDBR;
