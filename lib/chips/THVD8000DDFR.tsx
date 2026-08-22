import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["R"],
  pin2: ["MODE"],
  pin3: ["F_SET"],
  pin4: ["D"],
  pin5: ["GND"],
  pin6: ["A"],
  pin7: ["B"],
  pin8: ["VCC"],
} as const;

const pinAttributes = {
  pin5: { requiresGround: true },
  pin8: { requiresPower: true },
} as const;

export const THVD8000DDFR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2848812"],
      }}
      manufacturerPartNumber="THVD8000DDFR"
      footprint="soic_p0.65mm_w3.4199mm_pw0.45mm_pl0.9mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2848812.obj?uuid=f4961c1aca354ff3a77dcfdea41511db",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2848812.step?uuid=f4961c1aca354ff3a77dcfdea41511db",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0, y: 0.000012699999956566899, z: 0.050795 },
      }}
      {...props}
    />
  );
};

export default THVD8000DDFR;
