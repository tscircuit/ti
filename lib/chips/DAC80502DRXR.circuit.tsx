import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VDD"],
  pin2: ["VOUTA"],
  pin3: ["RSTSEL"],
  pin4: ["AGND"],
  pin5: ["SPI2C"],
  pin6: ["pin6"],
  pin7: ["pin7"],
  pin8: ["pin8"],
  pin9: ["VOUTB"],
  pin10: ["VREFIO"],
} as const;

const pinAttributes = {
  pin1: { requiresPower: true },
  pin4: { requiresGround: true },
} as const;

export const DAC80502DRXR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C1880990"],
      }}
      manufacturerPartNumber="DAC80502DRXR"
      footprint="dfn10_p0.4999mm_w2.9003mm_pw0.24mm_pl1.2mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C1880990.obj?uuid=bca21d86fc68411682e84b496500e764",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C1880990.step?uuid=bca21d86fc68411682e84b496500e764",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0, y: 0.000012700000070253736, z: -0.02 },
      }}
      {...props}
    />
  );
};

export default DAC80502DRXR;
