import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["PA0"],
  pin2: ["PA1"],
  pin3: ["PA28"],
  pin4: ["NRST"],
  pin5: ["VBAT"],
  pin6: ["VDD"],
  pin7: ["VSS"],
  pin8: ["PA2"],
  pin9: ["PA3"],
  pin10: ["PA4"],
  pin11: ["PA5"],
  pin12: ["PA6"],
  pin13: ["PA7"],
  pin14: ["PB2"],
  pin15: ["PB3"],
  pin16: ["PA8"],
  pin17: ["PA9"],
  pin18: ["PA10"],
  pin19: ["PA11"],
  pin20: ["PB6"],
  pin21: ["PB7"],
  pin22: ["PB8"],
  pin23: ["PB9"],
  pin24: ["PB14"],
  pin25: ["PB15"],
  pin26: ["PB16"],
  pin27: ["PA12"],
  pin28: ["PA13"],
  pin29: ["PA14"],
  pin30: ["PA15"],
  pin31: ["PA16"],
  pin32: ["PA17"],
  pin33: ["PA18"],
  pin34: ["PA19"],
  pin35: ["PA20"],
  pin36: ["PB17"],
  pin37: ["PB18"],
  pin38: ["PB19"],
  pin39: ["PA21"],
  pin40: ["PA22"],
  pin41: ["PB20"],
  pin42: ["PB24"],
  pin43: ["PA23"],
  pin44: ["PA24"],
  pin45: ["PA25"],
  pin46: ["PA26"],
  pin47: ["PA27"],
  pin48: ["VCORE"],
} as const;

const pinAttributes = {
  pin6: { requiresPower: true },
  pin7: { requiresGround: true },
} as const;

export const MSPM0L2228SPTR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C43453132"],
      }}
      manufacturerPartNumber="MSPM0L2228SPTR"
      footprint="qfn48_p0.4999mm_h9.92mm_pw0.28mm_pl1.56mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C43453132.obj?uuid=f6e68e00f55841108e921f422cf2598d",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C43453132.step?uuid=f6e68e00f55841108e921f422cf2598d",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.8 },
      }}
      {...props}
    />
  );
};

export default MSPM0L2228SPTR;
