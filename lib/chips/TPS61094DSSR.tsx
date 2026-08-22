import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["OSEL"],
  pin2: ["MODE"],
  pin3: ["EN"],
  pin4: ["VIN"],
  pin5: ["SW"],
  pin6: ["SUP"],
  pin7: ["PGND"],
  pin8: ["AGND"],
  pin9: ["VOUT2"],
  pin10: ["VOUT1"],
  pin11: ["ICHG"],
  pin12: ["VCHG"],
  pin13: ["EP"],
} as const;

const pinAttributes = {
  pin4: { requiresPower: true },
  pin7: { requiresGround: true },
  pin8: { requiresGround: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin13: [...pinLabels["pin13"], "thermalpad"],
} as const;

export const TPS61094DSSR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C3034939"],
      }}
      manufacturerPartNumber="TPS61094DSSR"
      footprint="dfn12_thermalpad1mmx2.65mm_p0.4999mm_w2.4001mm_pw0.26mm_pl0.505mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C3034939.obj?uuid=e673532f99fb4687aa199193162a47d0",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C3034939.step?uuid=e673532f99fb4687aa199193162a47d0",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.02 },
      }}
      {...props}
    />
  );
};

export default TPS61094DSSR;
