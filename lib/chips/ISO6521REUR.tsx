import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VCC1"],
  pin2: ["OUTA"],
  pin3: ["INB"],
  pin4: ["GND1"],
  pin5: ["GND2"],
  pin6: ["OUTB"],
  pin7: ["INA"],
  pin8: ["VCC2"],
} as const;

const pinAttributes = {
  pin1: { requiresPower: true },
  pin4: { requiresGround: true },
  pin5: { requiresGround: true },
  pin8: { requiresPower: true },
} as const;

export const ISO6521REUR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C22428095"],
      }}
      manufacturerPartNumber="ISO6521REUR"
      footprint="dfn_p0.5001mm_w4mm_pw0.25mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C22428095.obj?uuid=677563195ab441b1897817578497e2a2",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C22428095.step?uuid=677563195ab441b1897817578497e2a2",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.02 },
      }}
      {...props}
    />
  );
};

export default ISO6521REUR;
