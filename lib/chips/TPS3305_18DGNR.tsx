import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["SENSE1"],
  pin2: ["SENSE2"],
  pin3: ["WDI"],
  pin4: ["GND"],
  pin5: ["RESET1"],
  pin6: ["RESET2"],
  pin7: ["MR"],
  pin8: ["VDD"],
  pin9: ["EP"],
} as const;

const pinAttributes = {
  pin4: { requiresGround: true },
  pin8: { requiresPower: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin9: [...pinLabels["pin9"], "thermalpad"],
} as const;

export const TPS3305_18DGNR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2066987"],
      }}
      manufacturerPartNumber="TPS3305-18DGNR"
      footprint="vssop8_thermalpad1.5mmx1.8mm_pw0.364mm_pl1.43mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2066987.obj?uuid=623c28a9e7234740a83ac7ee7c966295",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2066987.step?uuid=623c28a9e7234740a83ac7ee7c966295",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0.000012699999999199463, z: -0.6 },
      }}
      {...props}
    />
  );
};

export default TPS3305_18DGNR;
