import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VDD_A"],
  pin2: ["VIN"],
  pin3: ["VDD_RF"],
  pin4: ["VDD_PA"],
  pin5: ["TX_OUT"],
  pin6: ["VSS_PA"],
  pin7: ["VSS_RX"],
  pin8: ["RX_IN1"],
  pin9: ["RX_IN2"],
  pin10: ["Vss"],
  pin11: ["BAND_GAP"],
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
  pin33: ["EP"],
} as const;

const pinAttributes = {
  pin2: { requiresPower: true },
  pin10: { requiresGround: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin33: [...pinLabels["pin33"], "thermalpad"],
} as const;

export const TRF7970ARHBR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C117004"],
      }}
      manufacturerPartNumber="TRF7970ARHBR"
      footprint="qfn32_thermalpad3.6mmx3.6mm_pillpads_p0.4999mm_pw0.28mm_pl0.8mm_pin1location(bottomside,left)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C117004.obj?uuid=fd060a8d6128465884d1a5229a9dc05e",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C117004.step?uuid=fd060a8d6128465884d1a5229a9dc05e",
        pcbRotationOffset: 90,
        modelOriginPosition: {
          x: -0.00020320000001561311,
          y: -0.00021590000001481258,
          z: -0.02,
        },
      }}
      {...props}
    />
  );
};

export default TRF7970ARHBR;
