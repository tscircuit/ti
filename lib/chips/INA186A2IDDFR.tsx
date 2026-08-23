import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VS"],
  pin2: ["ENABLE"],
  pin3: ["REF"],
  pin4: ["GND"],
  pin5: ["OUT"],
  pin6: ["NC"],
  pin7: ["IN_POS"],
  pin8: ["IN_NEG"],
} as const;

const pinAttributes = {
  pin4: { requiresGround: true },
  pin6: { doNotConnect: true },
} as const;

export const INA186A2IDDFR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2869854"],
      }}
      manufacturerPartNumber="INA186A2IDDFR"
      footprint="soic_p0.65mm_w3.4199mm_pw0.4mm_pl0.9mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2869854.obj?uuid=f4961c1aca354ff3a77dcfdea41511db",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2869854.step?uuid=f4961c1aca354ff3a77dcfdea41511db",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0, y: 0.000012699999984988608, z: 0.050795 },
      }}
      {...props}
    />
  );
};

export default INA186A2IDDFR;
