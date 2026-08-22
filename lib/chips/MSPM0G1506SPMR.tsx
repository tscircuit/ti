import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["PB13"],
  pin2: ["PB14"],
  pin3: ["PB15"],
  pin4: ["PB16"],
  pin5: ["pin5"],
  pin6: ["PA13"],
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
  pin20: ["PB21"],
  pin21: ["PB22"],
  pin22: ["PB23"],
  pin23: ["pin23"],
  pin24: ["PA23VREF_POS"],
  pin25: ["pin25"],
  pin26: ["pin26"],
  pin27: ["pin27"],
  pin28: ["PB26"],
  pin29: ["PB27"],
  pin30: ["pin30"],
  pin31: ["pin31"],
  pin32: ["VCORE"],
  pin33: ["pin33"],
  pin34: ["PA1"],
  pin35: ["PA28"],
  pin36: ["PA29"],
  pin37: ["PA30"],
  pin38: ["NRST"],
  pin39: ["pin39"],
  pin40: ["VDD"],
  pin41: ["VSS"],
  pin42: ["pin42"],
  pin43: ["pin43"],
  pin44: ["pin44"],
  pin45: ["pin45"],
  pin46: ["pin46"],
  pin47: ["PB0"],
  pin48: ["PB1"],
  pin49: ["pin49"],
  pin50: ["PB2"],
  pin51: ["PB3"],
  pin52: ["PB4"],
  pin53: ["PB5"],
  pin54: ["PA8"],
  pin55: ["pin55"],
  pin56: ["pin56"],
  pin57: ["PA11"],
  pin58: ["PB6"],
  pin59: ["PB7"],
  pin60: ["PB8"],
  pin61: ["PB9"],
  pin62: ["PB10"],
  pin63: ["pin63"],
  pin64: ["PB12"],
} as const;

const pinAttributes = {
  pin40: { requiresPower: true },
  pin41: { requiresGround: true },
} as const;

export const MSPM0G1506SPMR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C22362615"],
      }}
      manufacturerPartNumber="MSPM0G1506SPMR"
      footprint="lga64_grid16x16_pillpads_p0.4999mm_w12.8998mm_h12.8998mm_pl1.8mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C22362615.obj?uuid=7e9b9111dcfd48d3add0eab11d882721",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C22362615.step?uuid=7e9b9111dcfd48d3add0eab11d882721",
        pcbRotationOffset: 270,
        modelOriginPosition: { x: 0, y: 0, z: 0.000795 },
      }}
      {...props}
    />
  );
};

export default MSPM0G1506SPMR;
