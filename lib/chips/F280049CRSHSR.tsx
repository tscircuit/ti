import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["GPIO6"],
  pin2: ["GPIO29"],
  pin3: ["GPIO28"],
  pin4: ["XRSn"],
  pin5: ["VDD1"],
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
  pin19: ["VSSA"],
  pin20: ["VDDA"],
  pin21: ["pin21"],
  pin22: ["pin22"],
  pin23: ["pin23"],
  pin24: ["VDD2"],
  pin25: ["VDDIO1"],
  pin26: ["GPIO13"],
  pin27: ["GPIO12"],
  pin28: ["GPIO11"],
  pin29: ["GPIO33"],
  pin30: ["GPIO16"],
  pin31: ["GPIO17"],
  pin32: ["GPIO24"],
  pin33: ["TCK"],
  pin34: ["pin34"],
  pin35: ["TMS"],
  pin36: ["pin36"],
  pin37: ["GPIO32"],
  pin38: ["GPIO18_X2"],
  pin39: ["X1"],
  pin40: ["VDDIO2"],
  pin41: ["VDD3"],
  pin42: ["GPIO8"],
  pin43: ["GPIO4"],
  pin44: ["GPIO3"],
  pin45: ["GPIO2"],
  pin46: ["GPIO1"],
  pin47: ["GPIO0"],
  pin48: ["VDDIO_SW"],
  pin49: ["GPIO23_VSW"],
  pin50: ["VSS_SW"],
  pin51: ["GPIO22_VFBSW"],
  pin52: ["GPIO7"],
  pin53: ["VDD4"],
  pin54: ["VDDIO3"],
  pin55: ["GPIO5"],
  pin56: ["GPIO9"],
  pin57: ["VSS"],
} as const;

const pinAttributes = {
  pin5: { requiresPower: true },
  pin20: { requiresPower: true },
  pin24: { requiresPower: true },
  pin41: { requiresPower: true },
  pin53: { requiresPower: true },
  pin57: { requiresGround: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin57: [...pinLabels["pin57"], "thermalpad"],
} as const;

export const F280049CRSHSR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2054426"],
      }}
      manufacturerPartNumber="F280049CRSHSR"
      footprint="qfn56_thermalpad5.3mmx5.3mm_p0.4mm_h7.6mm_pw0.2mm_pl0.7mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2054426.obj?uuid=2dfd9c87232e4d3489a2576a117f3b04",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2054426.step?uuid=2dfd9c87232e4d3489a2576a117f3b04",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.05 },
      }}
      {...props}
    />
  );
};

export default F280049CRSHSR;
