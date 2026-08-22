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

export const UCC21330ADR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C41498903"],
      }}
      manufacturerPartNumber="UCC21330ADR"
      footprint="soic16_pillpads_w7.4421mm_pw0.602mm_pl1.971mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C41498903.obj?uuid=9adfdf34b7774b23880141fd3e8b4dbb",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C41498903.step?uuid=9adfdf34b7774b23880141fd3e8b4dbb",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.000012699999842880061, y: 0, z: 0.000575 },
      }}
      {...props}
    />
  );
};

export default UCC21330ADR;
