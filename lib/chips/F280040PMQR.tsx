import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["GPIO29"],
  pin2: ["GPIO28"],
  pin3: ["XRSn"],
  pin4: ["VDD4"],
  pin5: ["VSS4"],
  pin6: ["pin6"],
  pin7: ["pin7"],
  pin8: ["pin8"],
  pin9: ["pin9"],
  pin10: ["pin10"],
  pin11: ["pin11"],
  pin12: ["pin12"],
  pin13: ["pin13"],
  pin14: ["pin14"],
  pin15: ["pin15"],
  pin16: ["pin16"],
  pin17: ["pin17"],
  pin18: ["pin18"],
  pin19: ["pin19"],
  pin20: ["pin20"],
  pin21: ["VSSA"],
  pin22: ["VDDA"],
  pin23: ["pin23"],
  pin24: ["pin24"],
  pin25: ["pin25"],
  pin26: ["VSS3"],
  pin27: ["VDD3"],
  pin28: ["VDDIO3"],
  pin29: ["FLT2"],
  pin30: ["FLT1"],
  pin31: ["GPIO11"],
  pin32: ["GPIO33"],
  pin33: ["GPIO16"],
  pin34: ["GPIO17"],
  pin35: ["GPIO24"],
  pin36: ["TCK"],
  pin37: ["pin37"],
  pin38: ["TMS"],
  pin39: ["pin39"],
  pin40: ["GPIO32"],
  pin41: ["GPIO18_X2"],
  pin42: ["X1"],
  pin43: ["VDDIO2"],
  pin44: ["VDD2"],
  pin45: ["VSS2"],
  pin46: ["VREGENZ"],
  pin47: ["GPIO8"],
  pin48: ["GPIO4"],
  pin49: ["GPIO3"],
  pin50: ["GPIO2"],
  pin51: ["GPIO1"],
  pin52: ["GPIO0"],
  pin53: ["VDDIO_SW"],
  pin54: ["GPIO23_VSW"],
  pin55: ["VSS_SW"],
  pin56: ["GPIO22_VFBSW"],
  pin57: ["GPIO7"],
  pin58: ["VSS1"],
  pin59: ["VDD1"],
  pin60: ["VDDIO1"],
  pin61: ["GPIO5"],
  pin62: ["GPIO9"],
  pin63: ["GPIO10"],
  pin64: ["GPIO6"],
} as const;

const pinAttributes = {
  pin4: { requiresPower: true },
  pin5: { requiresGround: true },
  pin22: { requiresPower: true },
  pin26: { requiresGround: true },
  pin27: { requiresPower: true },
  pin44: { requiresPower: true },
  pin45: { requiresGround: true },
  pin58: { requiresGround: true },
  pin59: { requiresPower: true },
} as const;

export const F280040PMQR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2055973"],
      }}
      manufacturerPartNumber="F280040PMQR"
      footprint="lga64_grid16x16_pillpads_p0.4999mm_w12.8998mm_h12.8998mm_pl1.8mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2055973.obj?uuid=7e9b9111dcfd48d3add0eab11d882721",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2055973.step?uuid=7e9b9111dcfd48d3add0eab11d882721",
        pcbRotationOffset: 270,
        modelOriginPosition: { x: 0, y: 0, z: 0.000795 },
      }}
      {...props}
    />
  );
};

export default F280040PMQR;
