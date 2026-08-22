import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["ENA"],
  pin2: ["INA"],
  pin3: ["GND"],
  pin4: ["INB"],
  pin5: ["OUTB"],
  pin6: ["VDD"],
  pin7: ["OUTA"],
  pin8: ["ENB"],
  pin9: ["EP"],
} as const;

const pinAttributes = {
  pin3: { requiresGround: true },
  pin6: { requiresPower: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin9: [...pinLabels["pin9"], "thermalpad"],
} as const;

export const UCC27624DSDR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C52919127"],
      }}
      manufacturerPartNumber="UCC27624DSDR"
      footprint="dfn8_thermalpad1.6mmx2.4mm_p0.65mm_w3.5763mm_pw0.3556mm_pl0.7112mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C52919127.obj?uuid=ad6ede4a18d240ca90307eb82853853e",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C52919127.step?uuid=ad6ede4a18d240ca90307eb82853853e",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  );
};

export default UCC27624DSDR;
