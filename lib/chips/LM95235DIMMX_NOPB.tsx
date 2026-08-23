import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VDD"],
  pin2: ["D_POS"],
  pin3: ["D_NEG"],
  pin4: ["T_CRIT"],
  pin5: ["GND"],
  pin6: ["pin6"],
  pin7: ["SMBDAT"],
  pin8: ["SMBCLK"],
} as const;

const pinAttributes = {
  pin1: { requiresPower: true },
  pin5: { requiresGround: true },
} as const;

export const LM95235DIMMX_NOPB = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2861946"],
      }}
      manufacturerPartNumber="LM95235DIMMX/NOPB"
      footprint="dfn8_pillpads_p0.65mm_w5.8498mm_pw0.38mm_pl1.45mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2861946.obj?uuid=745f4a63f92f44b78c4ba3925feaa542",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2861946.step?uuid=745f4a63f92f44b78c4ba3925feaa542",
        pcbRotationOffset: 90,
        modelOriginPosition: {
          x: -0.000012700000070253736,
          y: 0,
          z: -0.149083,
        },
      }}
      {...props}
    />
  );
};

export default LM95235DIMMX_NOPB;
