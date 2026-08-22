import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["AMUXOUT"],
  pin2: ["VOUT_LDOVINT"],
  pin3: ["VOUT_LDOVRTC"],
  pin4: ["VCCA"],
  pin5: ["REFGND1"],
  pin6: ["REFGND2"],
  pin7: ["VOUT_LDO4"],
  pin8: ["PVIN_LDO4"],
  pin9: ["VOUT_LDO3"],
  pin10: ["PVIN_LDO3"],
  pin11: ["VOUT_LDO2"],
  pin12: ["PVIN_LDO12"],
  pin13: ["VOUT_LDO1"],
  pin14: ["nINT"],
  pin15: ["SW_B21"],
  pin16: ["SW_B22"],
  pin17: ["PVIN_B2"],
  pin18: ["GPIO7"],
  pin19: ["GPIO9"],
  pin20: ["pin20"],
  pin21: ["FB_B2"],
  pin22: ["FB_B1"],
  pin23: ["GPIO5"],
  pin24: ["GPIO6"],
  pin25: ["nRSTOUT"],
  pin26: ["PVIN_B1"],
  pin27: ["SW_B11"],
  pin28: ["SW_B12"],
  pin29: ["EN_DRV"],
  pin30: ["pin30"],
  pin31: ["pin31"],
  pin32: ["GPIO1"],
  pin33: ["GPIO2"],
  pin34: ["SW_B5"],
  pin35: ["PVIN_B5"],
  pin36: ["VBACKUP"],
  pin37: ["FB_B5"],
  pin38: ["OSC32KIN"],
  pin39: ["OSC32KOUT"],
  pin40: ["OSC32KCAP"],
  pin41: ["GPIO8"],
  pin42: ["GPIO10"],
  pin43: ["SW_B31"],
  pin44: ["SW_B32"],
  pin45: ["PVIN_B3"],
  pin46: ["GPIO3"],
  pin47: ["GPIO4"],
  pin48: ["VIO_IN"],
  pin49: ["FB_B3"],
  pin50: ["FB_B4"],
  pin51: ["GND1"],
  pin52: ["GND2"],
  pin53: ["GPIO11"],
  pin54: ["PVIN_B4"],
  pin55: ["SW_B41"],
  pin56: ["SW_B42"],
  pin57: ["GND3"],
} as const;

const pinAttributes = {
  pin51: { requiresGround: true },
  pin52: { requiresGround: true },
  pin57: { requiresGround: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin57: [...pinLabels["pin57"], "thermalpad"],
} as const;

export const TPS65931211RWERQ1 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C32712894"],
      }}
      manufacturerPartNumber="TPS65931211RWERQ1"
      footprint="qfn56_thermalpad5.6mmx5.6mm_pillpads_p0.4999mm_h8.8051mm_pw0.28mm_pl0.79mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C32712894.obj?uuid=27d7c08a7afd411da11713f896fdf7c8",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C32712894.step?uuid=27d7c08a7afd411da11713f896fdf7c8",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.000012700000070253736, y: 0, z: -0.02 },
      }}
      {...props}
    />
  );
};

export default TPS65931211RWERQ1;
