import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VBUS"],
  pin2: ["ACN"],
  pin3: ["ACP"],
  pin4: ["CHRG_OK"],
  pin5: ["pin5"],
  pin6: ["ILIM_HIZ"],
  pin7: ["VDDA"],
  pin8: ["IADPT"],
  pin9: ["IBAT"],
  pin10: ["PSYS"],
  pin11: ["PROCHOT"],
  pin12: ["SDA"],
  pin13: ["SCL"],
  pin14: ["CMPIN"],
  pin15: ["CMPOUT"],
  pin16: ["COMP1"],
  pin17: ["COMP2"],
  pin18: ["CELL_BATPRESZ"],
  pin19: ["SRN"],
  pin20: ["SRP"],
  pin21: ["NC"],
  pin22: ["VSYS"],
  pin23: ["SW2"],
  pin24: ["HIDRV2"],
  pin25: ["BTST2"],
  pin26: ["LODRV2"],
  pin27: ["PGND"],
  pin28: ["REGN"],
  pin29: ["LODRV1"],
  pin30: ["BTST1"],
  pin31: ["HIDRV1"],
  pin32: ["SW1"],
  pin33: ["EP"],
} as const;

const pinAttributes = {
  pin7: { requiresPower: true },
  pin21: { doNotConnect: true },
  pin27: { requiresGround: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin33: [...pinLabels["pin33"], "thermalpad"],
} as const;

export const BQ25731RSNR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2871872"],
      }}
      manufacturerPartNumber="BQ25731RSNR"
      footprint="qfn32_thermalpad2.8mmx2.8mm_pillpads_p0.4mm_h5.0001mm_pw0.2mm_pl0.7mm_pin1location(bottomside,left)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2871872.obj?uuid=6dd4b697c6114e499488df6aa2ee6458",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2871872.step?uuid=6dd4b697c6114e499488df6aa2ee6458",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  );
};

export default BQ25731RSNR;
