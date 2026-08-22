import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["INA"],
  pin2: ["INB"],
  pin3: ["VCCI1"],
  pin4: ["GND"],
  pin5: ["DIS"],
  pin6: ["DT"],
  pin7: ["NC1"],
  pin8: ["VCCI2"],
  pin9: ["VSSB"],
  pin10: ["OUTB"],
  pin11: ["VDDB"],
  pin12: ["NC3"],
  pin13: ["NC2"],
  pin14: ["VSSA"],
  pin15: ["OUTA"],
  pin16: ["VDDA"],
} as const;

const pinAttributes = {
  pin4: { requiresGround: true },
  pin7: { doNotConnect: true },
  pin12: { doNotConnect: true },
  pin13: { doNotConnect: true },
  pin16: { requiresPower: true },
} as const;

export const UCC21550ADWR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C22427509"],
      }}
      manufacturerPartNumber="UCC21550ADWR"
      footprint="soic16_pillpads_w11.9011mm_pw0.574mm_pl2.4005mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C22427509.obj?uuid=5eab397ba6c7470199f8f0425efad579",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C22427509.step?uuid=5eab397ba6c7470199f8f0425efad579",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0.000012700000070253736, y: 0, z: -0.049425 },
      }}
      {...props}
    />
  );
};

export default UCC21550ADWR;
