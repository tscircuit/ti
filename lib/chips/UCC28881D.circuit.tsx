import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["GND2"],
  pin2: ["GND1"],
  pin3: ["FB"],
  pin4: ["VDD"],
  pin5: ["HVIN"],
  pin6: ["NC"],
  pin8: ["DRAIN"],
} as const;

const pinAttributes = {
  pin1: { requiresGround: true },
  pin2: { requiresGround: true },
  pin4: { requiresPower: true },
  pin6: { doNotConnect: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin8: [...pinLabels["pin8"], "pin7"],
} as const;

export const UCC28881D = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2869478"],
      }}
      manufacturerPartNumber="UCC28881D"
      footprint="dfn8_missing(7)_pillpads_w7.5898mm_pw0.588mm_pl2.045mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2869478.obj?uuid=308dcec2614149658d04f24c794ad660",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2869478.step?uuid=308dcec2614149658d04f24c794ad660",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: -0.00011429999983647576,
          y: 0.00010160000010728254,
          z: -0.925,
        },
      }}
      {...props}
    />
  );
};

export default UCC28881D;
