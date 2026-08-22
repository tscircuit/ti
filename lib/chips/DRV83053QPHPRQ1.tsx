import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["EN_GATE"],
  pin2: ["INHA"],
  pin3: ["INLA"],
  pin4: ["INHB"],
  pin5: ["INLB"],
  pin6: ["INHC"],
  pin7: ["INLC"],
  pin8: ["nFAULT"],
  pin9: ["nSCS"],
  pin10: ["SDI"],
  pin11: ["SDO"],
  pin12: ["SCLK"],
  pin13: ["PWRGD"],
  pin14: ["GND3"],
  pin15: ["AVDD"],
  pin16: ["SO1"],
  pin17: ["SO2"],
  pin18: ["SO3"],
  pin19: ["SN3"],
  pin20: ["SP3"],
  pin21: ["SN2"],
  pin22: ["SP2"],
  pin23: ["SN1"],
  pin24: ["SP1"],
  pin25: ["GLC"],
  pin26: ["SLC"],
  pin27: ["SHC"],
  pin28: ["GHC"],
  pin29: ["GHB"],
  pin30: ["SHB"],
  pin31: ["SLB"],
  pin32: ["GLB"],
  pin33: ["GLA"],
  pin34: ["SLA"],
  pin35: ["SHA"],
  pin36: ["GHA"],
  pin37: ["VCP_LSD"],
  pin38: ["VCPH"],
  pin39: ["CP2H"],
  pin40: ["CP2L"],
  pin41: ["PVDD"],
  pin42: ["CP1L"],
  pin43: ["CP1H"],
  pin44: ["VDRAIN"],
  pin45: ["GND2"],
  pin46: ["DVDD"],
  pin47: ["WAKE"],
  pin48: ["VREG"],
  pin49: ["GND1"],
} as const;

const pinAttributes = {
  pin14: { requiresGround: true },
  pin45: { requiresGround: true },
  pin49: { requiresGround: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin49: [...pinLabels["pin49"], "thermalpad"],
} as const;

export const DRV83053QPHPRQ1 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C701777"],
      }}
      manufacturerPartNumber="DRV83053QPHPRQ1"
      footprint="qfn48_thermalpad5.1mmx5.1mm_pillpads_p0.4999mm_h10.1998mm_pw0.28mm_pl1.6mm_pin1location(bottomside,left)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C701777.obj?uuid=f0220855bd3041998a0835a0b1f707e8",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C701777.step?uuid=f0220855bd3041998a0835a0b1f707e8",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.6 },
      }}
      {...props}
    />
  );
};

export default DRV83053QPHPRQ1;
