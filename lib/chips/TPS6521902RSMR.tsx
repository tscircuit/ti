import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["FB_B1"],
  pin2: ["LX_B1_1"],
  pin3: ["LX_B1_2"],
  pin4: ["PVIN_B1_1"],
  pin5: ["PVIN_B1_2"],
  pin6: ["PVIN_LDO1"],
  pin7: ["VLDO1"],
  pin8: ["GPO1"],
  pin9: ["SDA"],
  pin10: ["SCL"],
  pin11: ["nINT"],
  pin12: ["pin12"],
  pin13: ["VSYS"],
  pin14: ["VDD1P8"],
  pin15: ["AGND"],
  pin16: ["GPIO"],
  pin17: ["GPO2"],
  pin18: ["nRSTOUT"],
  pin19: ["VLDO2"],
  pin20: ["PVIN_LDO2"],
  pin21: ["VLDO3"],
  pin22: ["PVIN_LDO34"],
  pin23: ["VLDO4"],
  pin24: ["FB_B3"],
  pin25: ["pin25"],
  pin26: ["PVIN_B3"],
  pin27: ["LX_B3"],
  pin28: ["pin28"],
  pin29: ["LX_B2"],
  pin30: ["PVIN_B2"],
  pin31: ["pin31"],
  pin32: ["FB_B2"],
  pin33: ["GND"],
} as const;

const pinAttributes = {
  pin15: { requiresGround: true },
  pin33: { requiresGround: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin33: [...pinLabels["pin33"], "thermalpad"],
} as const;

export const TPS6521902RSMR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C31249530"],
      }}
      manufacturerPartNumber="TPS6521902RSMR"
      footprint="qfn32_thermalpad3.7mmx3.7mm_p0.4999mm_h5.6001mm_pw0.28mm_pl0.6mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C31249530.obj?uuid=3fa40488405b45669cd2299eddc1f29e",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C31249530.step?uuid=3fa40488405b45669cd2299eddc1f29e",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0.000012699999956566899, y: 0, z: -0.02 },
      }}
      {...props}
    />
  );
};

export default TPS6521902RSMR;
