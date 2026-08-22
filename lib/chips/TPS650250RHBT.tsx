import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VDCDC3"],
  pin2: ["PGND3"],
  pin3: ["L3"],
  pin4: ["VINDCDC3"],
  pin5: ["VINDCDC1"],
  pin6: ["L1"],
  pin7: ["PGND1"],
  pin8: ["VDCDC1"],
  pin9: ["DEFDCDC1"],
  pin10: ["pin10"],
  pin11: ["pin11"],
  pin12: ["VDD_ALIVE"],
  pin13: ["AGND2"],
  pin14: ["VLDO2"],
  pin15: ["VINLDO"],
  pin16: ["VLDO1"],
  pin17: ["pin17"],
  pin18: ["pin18"],
  pin19: ["pin19"],
  pin20: ["pin20"],
  pin21: ["PWRFAIL"],
  pin22: ["DEFDCDC2"],
  pin23: ["MODE"],
  pin24: ["EN_VDD_alive"],
  pin25: ["VDCDC2"],
  pin26: ["PGND2"],
  pin27: ["L2"],
  pin28: ["VINDCDC2"],
  pin29: ["VCC"],
  pin30: ["pin30"],
  pin31: ["AGND1"],
  pin32: ["DEFDCDC3"],
  pin33: ["EP"],
} as const;

const pinAttributes = {
  pin2: { requiresGround: true },
  pin7: { requiresGround: true },
  pin13: { requiresGround: true },
  pin26: { requiresGround: true },
  pin29: { requiresPower: true },
  pin31: { requiresGround: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin33: [...pinLabels["pin33"], "thermalpad"],
} as const;

export const TPS650250RHBT = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C702301"],
      }}
      manufacturerPartNumber="TPS650250RHBT"
      footprint="qfn32_thermalpad3.5mmx3.5mm_p0.4999mm_h5.6798mm_pw0.28mm_pl0.665mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C702301.obj?uuid=5adfeada1ad649a799027e41dc9e81f9",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C702301.step?uuid=5adfeada1ad649a799027e41dc9e81f9",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0.000012699999956566899, y: 0, z: -0.02 },
      }}
      {...props}
    />
  );
};

export default TPS650250RHBT;
