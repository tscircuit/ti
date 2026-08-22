import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["IO1"],
  pin2: ["IO2"],
  pin3: ["IO3"],
  pin4: ["NC4"],
  pin5: ["GND"],
  pin6: ["NC3"],
  pin7: ["IO4"],
  pin8: ["IO5"],
  pin9: ["IO6"],
  pin10: ["NC2"],
  pin11: ["VCC"],
  pin12: ["NC1"],
  pin13: ["EP"],
} as const;

const pinAttributes = {
  pin4: { doNotConnect: true },
  pin5: { requiresGround: true },
  pin6: { doNotConnect: true },
  pin10: { doNotConnect: true },
  pin11: { requiresPower: true },
  pin12: { doNotConnect: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin13: [...pinLabels["pin13"], "thermalpad"],
} as const;

export const TPD6E001RSFR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C1975428"],
      }}
      manufacturerPartNumber="TPD6E001RSFR"
      footprint="qfn12_thermalpad1.7mmx1.7mm_p0.7998mm_h4.8001mm_pw0.35mm_pl0.8mm_pin1location(bottomside,left)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C1975428.obj?uuid=37d39de8af4c40e883d256aaed644d0a",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C1975428.step?uuid=37d39de8af4c40e883d256aaed644d0a",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  );
};

export default TPD6E001RSFR;
