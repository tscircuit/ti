import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["IN_NEG"],
  pin2: ["GND"],
  pin3: ["REF2"],
  pin4: ["NC"],
  pin5: ["OUT"],
  pin6: ["Vs"],
  pin7: ["REF1"],
  pin8: ["IN_POS"],
} as const;

const pinAttributes = {
  pin2: { requiresGround: true },
  pin4: { doNotConnect: true },
} as const;

export const INA296A4IDDFR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C20345449"],
      }}
      manufacturerPartNumber="INA296A4IDDFR"
      footprint="soic_p0.65mm_w3.4199mm_pw0.4mm_pl0.9mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C20345449.obj?uuid=f4961c1aca354ff3a77dcfdea41511db",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C20345449.step?uuid=f4961c1aca354ff3a77dcfdea41511db",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0, y: 0.000012699999984988608, z: 0.050795 },
      }}
      {...props}
    />
  );
};

export default INA296A4IDDFR;
