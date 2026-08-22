import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["DVDD"],
  pin2: ["SCLK"],
  pin3: ["SDO"],
  pin4: ["CS"],
  pin5: ["AINM"],
  pin6: ["AINP"],
  pin7: ["AVDD"],
  pin8: ["GND"],
} as const;

const pinAttributes = {
  pin8: { requiresGround: true },
} as const;

export const ADS7042IDCUT = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2863230"],
      }}
      manufacturerPartNumber="ADS7042IDCUT"
      footprint="dfn8_pillpads_p0.5001mm_w3.8498mm_pw0.25mm_pl0.75mm_pin1location(rightside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2863230.obj?uuid=714a6271b466408e99a25b85bfe66811",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2863230.step?uuid=714a6271b466408e99a25b85bfe66811",
        pcbRotationOffset: 180,
        modelOriginPosition: {
          x: -0.00013970000009067007,
          y: -0.00007619999996677507,
          z: -0.149083,
        },
      }}
      {...props}
    />
  );
};

export default ADS7042IDCUT;
