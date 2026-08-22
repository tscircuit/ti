import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["IN_DCDC1"],
  pin2: ["SDA"],
  pin3: ["SCL"],
  pin4: ["LDO1"],
  pin5: ["IN_LDO1"],
  pin6: ["IN_LS3"],
  pin7: ["LS3"],
  pin8: ["PGOOD"],
  pin9: ["AC_DET"],
  pin10: ["nPFO"],
  pin11: ["GPIO1"],
  pin12: ["IN_DCDC4"],
  pin13: ["L4A"],
  pin14: ["L4B"],
  pin15: ["DCDC4"],
  pin16: ["PFI"],
  pin17: ["DC34_SEL"],
  pin18: ["IN_nCC"],
  pin19: ["PGOOD_BU"],
  pin20: ["L5"],
  pin21: ["FB5"],
  pin22: ["FB6"],
  pin23: ["L6"],
  pin24: ["SYS_BU"],
  pin25: ["CC"],
  pin26: ["GPIO3"],
  pin27: ["IN_BU"],
  pin28: ["pin28"],
  pin29: ["pin29"],
  pin30: ["LS1"],
  pin31: ["IN_LS1"],
  pin32: ["IN_LS2"],
  pin33: ["LS2"],
  pin34: ["GPO2"],
  pin35: ["INT_LDO"],
  pin36: ["IN_BIAS"],
  pin37: ["IN_DCDC3"],
  pin38: ["L3"],
  pin39: ["FB3"],
  pin40: ["nWAKEUP"],
  pin41: ["FB2"],
  pin42: ["L2"],
  pin43: ["IN_DCDC2"],
  pin44: ["PB"],
  pin45: ["nINT"],
  pin46: ["PWR_EN"],
  pin47: ["FB1"],
  pin48: ["L1"],
  pin49: ["EP"],
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin49: [...pinLabels["pin49"], "thermalpad"],
} as const;

export const TPS6521815RSLR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C1852160"],
      }}
      manufacturerPartNumber="TPS6521815RSLR"
      footprint="qfn48_thermalpad4.4mmx4.4mm_p0.4mm_h6.6801mm_pw0.2mm_pl0.665mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C1852160.obj?uuid=74f933cd7a0a499ebd0b1497f072358a",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C1852160.step?uuid=74f933cd7a0a499ebd0b1497f072358a",
        pcbRotationOffset: 270,
        modelOriginPosition: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  );
};

export default TPS6521815RSLR;
