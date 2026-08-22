import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["DCLKout0"],
  pin2: ["pin2"],
  pin3: ["SDCLKout1"],
  pin4: ["pin4"],
  pin5: ["pin5"],
  pin6: ["pin6"],
  pin7: ["NC3"],
  pin8: ["NC2"],
  pin9: ["NC1"],
  pin10: ["Vcc1_VCO"],
  pin11: ["LDObyp1"],
  pin12: ["LDObyp2"],
  pin13: ["SDCLKout3"],
  pin14: ["pin14"],
  pin15: ["DCLKout2"],
  pin16: ["pin16"],
  pin17: ["Vcc2_CG1"],
  pin18: ["pin18"],
  pin19: ["SCK"],
  pin20: ["SDIO"],
  pin21: ["Vcc3_SYSREF"],
  pin22: ["SDCLKout5"],
  pin23: ["pin23"],
  pin24: ["DCLKout4"],
  pin25: ["pin25"],
  pin26: ["Vcc4_CG2"],
  pin27: ["DCLKout6"],
  pin28: ["pin28"],
  pin29: ["SDCLKout7"],
  pin30: ["pin30"],
  pin31: ["Status_LD1"],
  pin32: ["CPout1"],
  pin33: ["Vcc5_DIG"],
  pin34: ["pin34"],
  pin35: ["pin35"],
  pin36: ["Vcc6_PLL1"],
  pin37: ["CLKin0"],
  pin38: ["pin38"],
  pin39: ["Vcc7_OSCout"],
  pin40: ["pin40"],
  pin41: ["pin41"],
  pin42: ["Vcc8_OSCin"],
  pin43: ["OSCin"],
  pin44: ["pin44"],
  pin45: ["Vcc9_CP2"],
  pin46: ["CPout2"],
  pin47: ["Vcc10_PLL2"],
  pin48: ["Status_LD2"],
  pin49: ["SDCLKout9"],
  pin50: ["pin50"],
  pin51: ["DCLKout8"],
  pin52: ["pin52"],
  pin53: ["Vcc11_CG3"],
  pin54: ["DCLKout10"],
  pin55: ["pin55"],
  pin56: ["SDCLKout11"],
  pin57: ["pin57"],
  pin58: ["CLKin_SEL0"],
  pin59: ["CLKin_SEL1"],
  pin60: ["SDCLKout13"],
  pin61: ["pin61"],
  pin62: ["DCLKout12"],
  pin63: ["pin63"],
  pin64: ["Vcc12_CG0"],
  pin65: ["EP"],
} as const;

const pinAttributes = {
  pin7: { doNotConnect: true },
  pin8: { doNotConnect: true },
  pin9: { doNotConnect: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin65: [...pinLabels["pin65"], "thermalpad"],
} as const;

export const LMK04828BISQE_NOPB = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2651217"],
      }}
      manufacturerPartNumber="LMK04828BISQE/NOPB"
      footprint="qfn64_thermalpad7.15mmx7.15mm_pillpads_p0.4999mm_h9.8001mm_pl0.75mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2651217.obj?uuid=e8161daf0a1f4108902e7d1923931fcd",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2651217.step?uuid=e8161daf0a1f4108902e7d1923931fcd",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.95 },
      }}
      {...props}
    />
  );
};

export default LMK04828BISQE_NOPB;
