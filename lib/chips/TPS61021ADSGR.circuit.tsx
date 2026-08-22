import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["AGND"],
  pin2: ["FB"],
  pin3: ["VOUT1"],
  pin4: ["VOUT2"],
  pin5: ["EN"],
  pin6: ["SW1"],
  pin7: ["SW2"],
  pin8: ["VIN"],
  pin9: ["EPAD"],
} as const;

const pinAttributes = {
  pin1: { requiresGround: true },
  pin8: { requiresPower: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin9: [...pinLabels["pin9"], "thermalpad"],
} as const;

export const TPS61021ADSGR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C193037"],
      }}
      manufacturerPartNumber="TPS61021ADSGR"
      footprint="dfn8_thermalpad0.9mmx1.6mm_p0.5001mm_w2.4209mm_pw0.25mm_pl0.521mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C193037.obj?uuid=2be2baea8d8242eebd2ce617314d92a1",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C193037.step?uuid=2be2baea8d8242eebd2ce617314d92a1",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  );
};

export default TPS61021ADSGR;
