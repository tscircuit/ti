import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VOS"],
  pin2: ["SW"],
  pin3: ["MODE"],
  pin4: ["VSET"],
  pin5: ["EN"],
  pin6: ["VIN"],
  pin7: ["NC"],
  pin8: ["GND"],
  pin9: ["EP"],
} as const;

const pinAttributes = {
  pin6: { requiresPower: true },
  pin7: { doNotConnect: true },
  pin8: { requiresGround: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin9: [...pinLabels["pin9"], "thermalpad"],
} as const;

export const TPS62842DGRR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2873354"],
      }}
      manufacturerPartNumber="TPS62842DGRR"
      footprint="vssop8_thermalpad1.5mmx1.8mm_pw0.364mm_pl1.43mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2873354.obj?uuid=623c28a9e7234740a83ac7ee7c966295",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2873354.step?uuid=623c28a9e7234740a83ac7ee7c966295",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0.000012699999999199463, z: -0.6 },
      }}
      {...props}
    />
  );
};

export default TPS62842DGRR;
