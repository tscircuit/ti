import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["MR"],
  pin2: ["CWD"],
  pin3: ["CRST"],
  pin4: ["GND"],
  pin5: ["SET0"],
  pin6: ["WDI"],
  pin7: ["RESET"],
  pin8: ["VDD"],
} as const;

const pinAttributes = {
  pin4: { requiresGround: true },
  pin8: { requiresPower: true },
} as const;

export const TPS35AA38AGADDFRQ1 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C34753423"],
      }}
      manufacturerPartNumber="TPS35AA38AGADDFRQ1"
      footprint="soic_p0.65mm_w3.4199mm_pw0.4mm_pl0.9mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C34753423.obj?uuid=f4961c1aca354ff3a77dcfdea41511db",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C34753423.step?uuid=f4961c1aca354ff3a77dcfdea41511db",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0, y: 0.000012699999984988608, z: 0.050795 },
      }}
      {...props}
    />
  );
};

export default TPS35AA38AGADDFRQ1;
