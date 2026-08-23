import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["1A"],
  pin2: ["1Y"],
  pin3: ["2A"],
  pin4: ["2Y"],
  pin5: ["3A"],
  pin6: ["3Y"],
  pin7: ["GND"],
  pin8: ["4Y"],
  pin9: ["4A"],
  pin10: ["5Y"],
  pin11: ["5A"],
  pin12: ["6Y"],
  pin13: ["6A"],
  pin14: ["VCC"],
} as const;

const pinAttributes = {
  pin7: { requiresGround: true },
  pin14: { requiresPower: true },
} as const;

export const SN74LVC14ADGVR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2867313"],
      }}
      manufacturerPartNumber="SN74LVC14ADGVR"
      footprint="dfn14_p0.4mm_w7.1498mm_pw0.224mm_pl1.575mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2867313.obj?uuid=ad3d68e5d1d94b018b67cdb6d0a1cc57",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2867313.step?uuid=ad3d68e5d1d94b018b67cdb6d0a1cc57",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0.004924999999999957, y: 0, z: -0.595 },
      }}
      {...props}
    />
  );
};

export default SN74LVC14ADGVR;
