import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VDD_A"],
  pin2: ["VIN"],
  pin3: ["VDD_RF"],
  pin4: ["VDD_PA"],
  pin5: ["TX_OUT"],
  pin6: ["VSS_RF"],
  pin7: ["VSS_RX"],
  pin8: ["RX_IN1"],
  pin9: ["RX_IN2"],
  pin10: ["VSS"],
  pin11: ["BG"],
  pin12: ["pin12"],
  pin13: ["IRQ"],
  pin14: ["MOD"],
  pin15: ["VSS_A"],
  pin16: ["pin16"],
  pin17: ["pin17"],
  pin18: ["pin18"],
  pin19: ["pin19"],
  pin20: ["pin20"],
  pin21: ["pin21"],
  pin22: ["pin22"],
  pin23: ["pin23"],
  pin24: ["pin24"],
  pin25: ["EN2"],
  pin26: ["DATA_CLK"],
  pin27: ["SYS_CLK"],
  pin28: ["EN"],
  pin29: ["VSS_D"],
  pin30: ["OSC_OUT"],
  pin31: ["OSC_IN"],
  pin32: ["VDD_X"],
  pin33: ["EPAD"],
} as const;

const pinAttributes = {
  pin2: { requiresPower: true },
  pin10: { requiresGround: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin33: [...pinLabels["pin33"], "thermalpad"],
} as const;

export const TRF7964ARHBR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2654840"],
      }}
      manufacturerPartNumber="TRF7964ARHBR"
      footprint="qfn32_thermalpad3.5mmx3.5mm_pillpads_p0.4999mm_pw0.28mm_pl0.8mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2654840.obj?uuid=595304ab79a843bfa03bdaf869386976",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2654840.step?uuid=595304ab79a843bfa03bdaf869386976",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: -0.000012700000070253736,
          y: -0.000012699999956566899,
          z: 0,
        },
      }}
      {...props}
    />
  );
};

export default TRF7964ARHBR;
