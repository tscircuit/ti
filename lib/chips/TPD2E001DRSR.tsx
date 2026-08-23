import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VCC"],
  pin2: ["pin2"],
  pin3: ["IO1"],
  pin4: ["GND1"],
  pin5: ["pin5"],
  pin6: ["IO2"],
  pin7: ["GND2"],
} as const;

const pinAttributes = {
  pin1: { requiresPower: true },
  pin4: { requiresGround: true },
  pin7: { requiresGround: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin7: [...pinLabels["pin7"], "thermalpad"],
} as const;

export const TPD2E001DRSR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2867394"],
      }}
      manufacturerPartNumber="TPD2E001DRSR"
      footprint="dfn6_thermalpad1.2mmx1.9mm_pillpads_p0.95mm_w3.9702mm_pw0.49mm_pl0.91mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2867394.obj?uuid=5150b09636a64cc5a00a1c09e9e4f887",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2867394.step?uuid=5150b09636a64cc5a00a1c09e9e4f887",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: 0.000025399999913133797,
          y: 0.000025399999913133797,
          z: 0,
        },
      }}
      {...props}
    />
  );
};

export default TPD2E001DRSR;
