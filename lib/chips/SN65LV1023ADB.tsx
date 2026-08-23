import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["SYNC1"],
  pin2: ["SYNC2"],
  pin3: ["DIN0"],
  pin4: ["DIN1"],
  pin5: ["DIN2"],
  pin6: ["DIN3"],
  pin7: ["DIN4"],
  pin8: ["DIN5"],
  pin9: ["DIN6"],
  pin10: ["DIN7"],
  pin11: ["DIN8"],
  pin12: ["DIN9"],
  pin13: ["pin13"],
  pin14: ["TCLK"],
  pin15: ["DGND2"],
  pin16: ["DGND1"],
  pin17: ["AVCC2"],
  pin18: ["AGND4"],
  pin19: ["DEN"],
  pin20: ["AGND3"],
  pin21: ["pin21"],
  pin22: ["DO_POS"],
  pin23: ["AGND2"],
  pin24: ["PWRDN"],
  pin25: ["AGND1"],
  pin26: ["AVCC1"],
  pin27: ["DVCC2"],
  pin28: ["DVCC1"],
} as const;

const pinAttributes = {
  pin18: { requiresGround: true },
  pin20: { requiresGround: true },
  pin23: { requiresGround: true },
  pin25: { requiresGround: true },
} as const;

export const SN65LV1023ADB = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2863118"],
      }}
      manufacturerPartNumber="SN65LV1023ADB"
      footprint="dfn28_pillpads_p0.65mm_w8.9258mm_pw0.364mm_pl2.0155mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2863118.obj?uuid=f6684975c608438e85ae4e120e588908",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2863118.step?uuid=f6684975c608438e85ae4e120e588908",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  );
};

export default SN65LV1023ADB;
