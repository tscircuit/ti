import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VCC1"],
  pin2: ["TXD"],
  pin3: ["RXD"],
  pin4: ["GND1"],
  pin5: ["CANL"],
  pin6: ["CANH"],
  pin7: ["GND2"],
  pin8: ["VCC2"],
} as const;

const pinAttributes = {
  pin1: { requiresPower: true },
  pin4: { requiresGround: true },
  pin7: { requiresGround: true },
  pin8: { requiresPower: true },
} as const;

export const ISO1044BD = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2878198"],
      }}
      manufacturerPartNumber="ISO1044BD"
      footprint="soic8_pillpads_w7.5898mm_pw0.588mm_pl2.045mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2878198.obj?uuid=609550b54721441492dc8db43c2597ce",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2878198.step?uuid=609550b54721441492dc8db43c2597ce",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.000012699999842880061, y: 0, z: -0.15 },
      }}
      {...props}
    />
  );
};

export default ISO1044BD;
