import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["1A"],
  pin2: ["1B"],
  pin3: ["1Y"],
  pin4: ["2A"],
  pin5: ["2B"],
  pin6: ["2Y"],
  pin7: ["GND"],
  pin8: ["3Y"],
  pin9: ["3A"],
  pin10: ["3B"],
  pin11: ["4Y"],
  pin12: ["4A"],
  pin13: ["4B"],
  pin14: ["VCC"],
} as const;

const pinAttributes = {
  pin7: { requiresGround: true },
  pin14: { requiresPower: true },
} as const;

export const SN74LVC08ANSR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2878822"],
      }}
      manufacturerPartNumber="SN74LVC08ANSR"
      footprint="soic14_pillpads_w9.3618mm_pw0.602mm_pl2.231mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2878822.obj?uuid=d2ccf445cdb94e8ea6afcc7c8abff18b",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2878822.step?uuid=d2ccf445cdb94e8ea6afcc7c8abff18b",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: 0.0001269999999067295,
          y: -0.00007619999996677507,
          z: -1.05,
        },
      }}
      {...props}
    />
  );
};

export default SN74LVC08ANSR;
