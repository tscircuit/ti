import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["TXD"],
  pin2: ["GND"],
  pin3: ["VCC"],
  pin4: ["RXD"],
  pin5: ["pin5"],
  pin6: ["CANL"],
  pin7: ["CANH"],
  pin8: ["STB"],
  pin9: ["Pad"],
} as const;

const pinAttributes = {
  pin2: { requiresGround: true },
  pin3: { requiresPower: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin9: [...pinLabels["pin9"], "thermalpad"],
} as const;

export const TCAN1044AVDRBRQ1 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C3234119"],
      }}
      manufacturerPartNumber="TCAN1044AVDRBRQ1"
      footprint="dfn8_thermalpad1.6mmx2.4mm_pillpads_p0.65mm_w3.8301mm_pw0.35mm_pl0.84mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C3234119.obj?uuid=3f13a5422ede4bc49f8e76552a5f4051",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C3234119.step?uuid=3f13a5422ede4bc49f8e76552a5f4051",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0.000012699999956566899, y: 0, z: 0 },
      }}
      {...props}
    />
  );
};

export default TCAN1044AVDRBRQ1;
