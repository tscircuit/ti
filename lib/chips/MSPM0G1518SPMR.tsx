import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["PB13"],
  pin2: ["PB14"],
  pin3: ["PB15"],
  pin4: ["PB16"],
  pin5: ["PA12"],
  pin6: ["PA13"],
  pin7: ["PA14"],
  pin8: ["PA15"],
  pin9: ["PA16"],
  pin10: ["PA17"],
  pin11: ["PA18"],
  pin12: ["PA19"],
  pin13: ["PA20"],
  pin14: ["PB17"],
  pin15: ["PB18"],
  pin16: ["PB19"],
  pin17: ["PA21"],
  pin18: ["PA22"],
  pin19: ["PB20"],
  pin20: ["PB21"],
  pin21: ["PB22"],
  pin22: ["PB23"],
  pin23: ["PB24"],
  pin24: ["PA23"],
  pin25: ["PA24"],
  pin26: ["PA25"],
  pin27: ["PB25"],
  pin28: ["PB26"],
  pin29: ["PB27"],
  pin30: ["PA26"],
  pin31: ["PA27"],
  pin32: ["VCORE"],
  pin33: ["PA0"],
  pin34: ["PA1"],
  pin35: ["PA28"],
  pin36: ["PA29"],
  pin37: ["PA30"],
  pin38: ["NRST"],
  pin39: ["PA31"],
  pin40: ["VDD"],
  pin41: ["VSS"],
  pin42: ["PA2"],
  pin43: ["PA3"],
  pin44: ["PA4"],
  pin45: ["PA5"],
  pin46: ["PA6"],
  pin47: ["PB0"],
  pin48: ["PB1"],
  pin49: ["PA7"],
  pin50: ["PB2"],
  pin51: ["PB3"],
  pin52: ["PB4"],
  pin53: ["PB5"],
  pin54: ["PA8"],
  pin55: ["PA9"],
  pin56: ["PA10"],
  pin57: ["PA11"],
  pin58: ["PB6"],
  pin59: ["PB7"],
  pin60: ["PB8"],
  pin61: ["PB9"],
  pin62: ["PB10"],
  pin63: ["PB11"],
  pin64: ["PB12"],
} as const;

const pinAttributes = {
  pin40: { requiresPower: true },
  pin41: { requiresGround: true },
} as const;

export const MSPM0G1518SPMR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C49262733"],
      }}
      manufacturerPartNumber="MSPM0G1518SPMR"
      footprint="lga64_grid16x16_pillpads_p0.4999mm_w12.8998mm_h12.8998mm_pl1.8mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C49262733.obj?uuid=ad237d82361743bc9055963a6e2e986f",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C49262733.step?uuid=ad237d82361743bc9055963a6e2e986f",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: -0.0006631000000227871,
          y: -0.000953500000007157,
          z: 0.000917,
        },
      }}
      {...props}
    />
  );
};

export default MSPM0G1518SPMR;
