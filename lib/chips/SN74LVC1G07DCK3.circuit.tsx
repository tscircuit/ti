import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["NC"],
  pin2: ["A"],
  pin3: ["GND"],
  pin4: ["Y"],
  pin5: ["VCC"],
} as const;

const pinAttributes = {
  pin1: { doNotConnect: true },
  pin3: { requiresGround: true },
  pin5: { requiresPower: true },
} as const;

export const SN74LVC1G07DCK3 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2675591"],
      }}
      manufacturerPartNumber="SN74LVC1G07DCK3"
      footprint="dfn6_missing(5)_p0.65mm_w2.6318mm_pw0.364mm_pl0.866mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2675591.obj?uuid=fda64812555e4a76a7fad8f9d8a40234",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2675591.step?uuid=fda64812555e4a76a7fad8f9d8a40234",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: -0.000012699999984988608, z: -0.5 },
      }}
      {...props}
    />
  );
};

export default SN74LVC1G07DCK3;
