import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["GND"],
  pin2: ["VIN"],
  pin3: ["DIM"],
  pin4: ["VCC"],
  pin5: ["COMP"],
  pin6: ["CSP"],
  pin7: ["CSN"],
  pin8: ["SW"],
  pin9: ["EP"],
} as const;

const pinAttributes = {
  pin1: { requiresGround: true },
  pin2: { requiresPower: true },
  pin4: { requiresPower: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin9: [...pinLabels["pin9"], "thermalpad"],
} as const;

export const TPS922051D1DGNR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C48922727"],
      }}
      manufacturerPartNumber="TPS922051D1DGNR"
      footprint="vssop8_thermalpad1.5mmx1.8mm_pw0.364mm_pl1.43mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C48922727.obj?uuid=623c28a9e7234740a83ac7ee7c966295",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C48922727.step?uuid=623c28a9e7234740a83ac7ee7c966295",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0.000012699999999199463, z: -0.6 },
      }}
      {...props}
    />
  );
};

export default TPS922051D1DGNR;
