import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["GND"],
  pin2: ["EN"],
  pin3: ["DIAG_EN"],
  pin4: ["Fault"],
  pin5: ["LATCH"],
  pin6: ["SNS"],
  pin7: ["ILIM"],
  pin8: ["NC1"],
  pin9: ["VOUT1"],
  pin10: ["VOUT2"],
  pin11: ["NC2"],
  pin12: ["VBB1"],
  pin13: ["VBB2"],
  pin14: ["NC3"],
  pin15: ["EP"],
} as const;

const pinAttributes = {
  pin1: { requiresGround: true },
  pin8: { doNotConnect: true },
  pin11: { doNotConnect: true },
  pin14: { doNotConnect: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin15: [...pinLabels["pin15"], "thermalpad"],
} as const;

export const TPS1HC100BQPWPRQ1 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C3230071"],
      }}
      manufacturerPartNumber="TPS1HC100BQPWPRQ1"
      footprint="dfn14_thermalpad2.46mmx2.31mm_pillpads_p0.65mm_w7.463mm_pw0.343mm_pl1.7315mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C3230071.obj?uuid=eeaefb9dd4784aac84005d52f9c63fdb",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C3230071.step?uuid=eeaefb9dd4784aac84005d52f9c63fdb",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.0000029999999999752447, y: 0, z: -0.15 },
      }}
      {...props}
    />
  );
};

export default TPS1HC100BQPWPRQ1;
