import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["2Y0"],
  pin2: ["2Y2"],
  pin3: ["2_COM"],
  pin4: ["2Y3"],
  pin5: ["2Y1"],
  pin6: ["INH"],
  pin7: ["GND2"],
  pin8: ["GND1"],
  pin9: ["B"],
  pin10: ["A"],
  pin11: ["1Y3"],
  pin12: ["1Y0"],
  pin13: ["1_COM"],
  pin14: ["1Y1"],
  pin15: ["1Y2"],
  pin16: ["VCC"],
} as const;

const pinAttributes = {
  pin7: { requiresGround: true },
  pin8: { requiresGround: true },
  pin16: { requiresPower: true },
} as const;

export const SN74LV4052ADYYR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C41558097"],
      }}
      manufacturerPartNumber="SN74LV4052ADYYR"
      footprint="dfn16_pillpads_p0.4999mm_w4mm_pw0.3mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C41558097.obj?uuid=b99867c24fa6448caf92db6374eac467",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C41558097.step?uuid=b99867c24fa6448caf92db6374eac467",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: -0.00007619999996677507,
          y: -0.0001142999999501626,
          z: -0.7,
        },
      }}
      {...props}
    />
  );
};

export default SN74LV4052ADYYR;
