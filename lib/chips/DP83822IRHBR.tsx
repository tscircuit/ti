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

export const DP83822IRHBR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C601649"],
      }}
      manufacturerPartNumber="DP83822IRHBR"
      footprint="qfn32_thermalpad2.9mmx2.9mm_p0.4999mm_h5.8048mm_pw0.28mm_pl0.79mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C601649.obj?uuid=68a9b02eb15a4fb498189084bbc26682",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C601649.step?uuid=68a9b02eb15a4fb498189084bbc26682",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.000012699999999199463, y: 0, z: -0.02 },
      }}
      {...props}
    />
  );
};

export default DP83822IRHBR;
