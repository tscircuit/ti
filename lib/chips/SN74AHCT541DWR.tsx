import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["OE1"],
  pin2: ["A1"],
  pin3: ["A2"],
  pin4: ["A3"],
  pin5: ["A4"],
  pin6: ["A5"],
  pin7: ["A6"],
  pin8: ["A7"],
  pin9: ["A8"],
  pin10: ["GND"],
  pin11: ["Y8"],
  pin12: ["Y7"],
  pin13: ["Y6"],
  pin14: ["Y5"],
  pin15: ["Y4"],
  pin16: ["Y3"],
  pin17: ["Y2"],
  pin18: ["Y1"],
  pin19: ["OE2"],
  pin20: ["VCC"],
} as const;

const pinAttributes = {
  pin10: { requiresGround: true },
  pin20: { requiresPower: true },
} as const;

export const SN74AHCT541DWR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2682058"],
      }}
      manufacturerPartNumber="SN74AHCT541DWR"
      footprint="soic20_pillpads_w11.7mm_pl2.3mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2682058.obj?uuid=f802a94fc95e42bebc73c20bec55bb23",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2682058.step?uuid=f802a94fc95e42bebc73c20bec55bb23",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0.000012699999956566899, z: -1.35 },
      }}
      {...props}
    />
  );
};

export default SN74AHCT541DWR;
