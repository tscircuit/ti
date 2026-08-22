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
  pin9: ["EP"],
} as const;

const pinAttributes = {
  pin3: { requiresGround: true },
  pin4: { requiresPower: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin9: [...pinLabels["pin9"], "thermalpad"],
} as const;

export const MSPM0C1103SDSGR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C36387670"],
      }}
      manufacturerPartNumber="MSPM0C1103SDSGR"
      footprint="dfn8_thermalpad0.9mmx1.6mm_p0.4999mm_w2.6mm_pw0.25mm_pl0.6mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C36387670.obj?uuid=8d71a56ace154772b834ba1b3996914f",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C36387670.step?uuid=8d71a56ace154772b834ba1b3996914f",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: 0.00011430000002121687,
          y: -0.00012699999999199463,
          z: -0.02,
        },
      }}
      {...props}
    />
  );
};

export default MSPM0C1103SDSGR;
