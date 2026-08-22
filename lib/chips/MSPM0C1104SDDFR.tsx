import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["VSS"],
  pin4: ["VDD"],
  pin5: ["PA0"],
  pin6: ["pin6"],
  pin7: ["pin7"],
  pin8: ["pin8"],
} as const;

const pinAttributes = {
  pin3: { requiresGround: true },
  pin4: { requiresPower: true },
} as const;

export const MSPM0C1104SDDFR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C32886006"],
      }}
      manufacturerPartNumber="MSPM0C1104SDDFR"
      footprint="dfn8_pillpads_p0.65mm_w3.7041mm_pw0.35mm_pl1.252mm_pin1location(rightside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C32886006.obj?uuid=7304035254c941188b587adb626783d8",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C32886006.step?uuid=7304035254c941188b587adb626783d8",
        pcbRotationOffset: 180,
        modelOriginPosition: {
          x: 0,
          y: -0.000012699999956566899,
          z: -0.049083,
        },
      }}
      {...props}
    />
  );
};

export default MSPM0C1104SDDFR;
