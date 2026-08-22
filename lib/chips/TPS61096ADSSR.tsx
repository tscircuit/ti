import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["LV1"],
  pin2: ["LV2"],
  pin3: ["VIN"],
  pin4: ["SW"],
  pin5: ["ILIM"],
  pin6: ["EN"],
  pin7: ["FB"],
  pin8: ["VOSNS"],
  pin9: ["VOUT"],
  pin10: ["GND"],
  pin11: ["HVO2"],
  pin12: ["HVO1"],
  pin13: ["EP"],
} as const;

const pinAttributes = {
  pin3: { requiresPower: true },
  pin10: { requiresGround: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin13: [...pinLabels["pin13"], "thermalpad"],
} as const;

export const TPS61096ADSSR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2862062"],
      }}
      manufacturerPartNumber="TPS61096ADSSR"
      footprint="dfn12_thermalpad1mmx2.65mm_p0.4999mm_w2.4001mm_pw0.26mm_pl0.505mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2862062.obj?uuid=b66ca8630b9c42479415c97dbd5b209d",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2862062.step?uuid=b66ca8630b9c42479415c97dbd5b209d",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: -0.000012699999842880061, y: 0, z: -0.02 },
      }}
      {...props}
    />
  );
};

export default TPS61096ADSSR;
