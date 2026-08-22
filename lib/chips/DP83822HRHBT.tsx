import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["TX_CLK"],
  pin3: ["pin3"],
  pin4: ["TX_D0"],
  pin5: ["TX_D1"],
  pin6: ["TX_D2"],
  pin7: ["TX_D3"],
  pin8: ["pin8"],
  pin9: ["RD_M"],
  pin10: ["RD_P"],
  pin11: ["TD_M"],
  pin12: ["TD_P"],
  pin13: ["NC1"],
  pin14: ["AVD"],
  pin15: ["NC2"],
  pin16: ["RBIAS"],
  pin17: ["LED_0"],
  pin18: ["RESET_N"],
  pin19: ["MDIO"],
  pin20: ["MDC"],
  pin21: ["VDDIO"],
  pin22: ["XO"],
  pin23: ["XI"],
  pin24: ["pin24"],
  pin25: ["RX_CLK"],
  pin26: ["pin26"],
  pin27: ["pin27"],
  pin28: ["RX_ER"],
  pin29: ["pin29"],
  pin30: ["RX_D0"],
  pin31: ["RX_D1"],
  pin32: ["RX_D2"],
  pin33: ["GND"],
} as const;

const pinAttributes = {
  pin13: { doNotConnect: true },
  pin15: { doNotConnect: true },
  pin33: { requiresGround: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin33: [...pinLabels["pin33"], "thermalpad"],
} as const;

export const DP83822HRHBT = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2867658"],
      }}
      manufacturerPartNumber="DP83822HRHBT"
      footprint="qfn32_thermalpad3mmx3mm_pillpads_p0.4999mm_h5.7998mm_pw0.28mm_pl0.785mm_pin1location(bottomside,left)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2867658.obj?uuid=ba400aceec1545ae9fdf78beb46ea57c",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2867658.step?uuid=ba400aceec1545ae9fdf78beb46ea57c",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0.000012699999999199463, z: -0.02 },
      }}
      {...props}
    />
  );
};

export default DP83822HRHBT;
