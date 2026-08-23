import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["MR"],
  pin2: ["CT4"],
  pin3: ["CT3"],
  pin4: ["CT2"],
  pin5: ["CT1"],
  pin6: ["SENSE4H"],
  pin7: ["SENSE4L"],
  pin8: ["SENSE3"],
  pin9: ["SENSE2"],
  pin10: ["SENSE1"],
  pin11: ["NC"],
  pin12: ["GND"],
  pin13: ["VREF"],
  pin14: ["VDD"],
  pin15: ["RESET1"],
  pin16: ["RESET2"],
  pin17: ["RESET3"],
  pin18: ["RESET4"],
  pin19: ["WDO"],
  pin20: ["WDI"],
  pin21: ["EP"],
} as const;

const pinAttributes = {
  pin11: { doNotConnect: true },
  pin12: { requiresGround: true },
  pin14: { requiresPower: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin21: [...pinLabels["pin21"], "thermalpad"],
} as const;

export const TPS386000RGPR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C702221"],
      }}
      manufacturerPartNumber="TPS386000RGPR"
      footprint="qfn20_thermalpad2.2mmx2.2mm_pillpads_p0.4999mm_h4.8051mm_pw0.28mm_pl0.79mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C702221.obj?uuid=af1c0cfd0324454f81767134fb219858",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C702221.step?uuid=af1c0cfd0324454f81767134fb219858",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: 0.03825239999991936,
          y: -0.037998399999992216,
          z: -0.02,
        },
      }}
      {...props}
    />
  );
};

export default TPS386000RGPR;
