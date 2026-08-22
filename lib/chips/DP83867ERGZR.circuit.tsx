import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["TD_P_A"],
  pin2: ["TD_M_A"],
  pin3: ["VDDA2P52"],
  pin4: ["TD_P_B"],
  pin5: ["TD_M_B"],
  pin6: ["VDD1P04"],
  pin7: ["TD_P_C"],
  pin8: ["TD_M_C"],
  pin9: ["VDDA2P51"],
  pin10: ["TD_P_D"],
  pin11: ["TD_M_D"],
  pin12: ["RBIAS"],
  pin13: ["VDDA1P82"],
  pin14: ["XO"],
  pin15: ["XI"],
  pin16: ["MDC"],
  pin17: ["MDIO"],
  pin18: ["CLK_OUT"],
  pin19: ["VDDIO3"],
  pin20: ["JTAG_CLK"],
  pin21: ["JTAG_TDO"],
  pin22: ["JTAG_TMS"],
  pin23: ["JTAG_TDI"],
  pin24: ["VDD1P03"],
  pin25: ["TX_D3"],
  pin26: ["TX_D2"],
  pin27: ["pin27"],
  pin28: ["pin28"],
  pin29: ["GTX_CLK"],
  pin30: ["VDDIO2"],
  pin31: ["VDD1P02"],
  pin32: ["RX_CLK"],
  pin33: ["pin33"],
  pin34: ["pin34"],
  pin35: ["pin35"],
  pin36: ["pin36"],
  pin37: ["TX_CTRL"],
  pin38: ["RX_CTRL"],
  pin39: ["GPIO_0"],
  pin40: ["GPIO_1"],
  pin41: ["VDDIO1"],
  pin42: ["VDD1P01"],
  pin43: ["RESET_N"],
  pin44: ["pin44"],
  pin45: ["LED_2"],
  pin46: ["LED_1"],
  pin47: ["LED_0"],
  pin48: ["VDDA1P81"],
  pin49: ["GND"],
} as const;

const pinAttributes = {
  pin49: { requiresGround: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin49: [...pinLabels["pin49"], "thermalpad"],
} as const;

export const DP83867ERGZR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C913839"],
      }}
      manufacturerPartNumber="DP83867ERGZR"
      footprint="qfn48_thermalpad4.1mmx4.1mm_pillpads_p0.5004mm_h7.9995mm_pw0.28mm_pl0.85mm_pin1location(bottomside,left)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C913839.obj?uuid=a15eda73ea7f47929551e29f3e8b577a",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C913839.step?uuid=a15eda73ea7f47929551e29f3e8b577a",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.000012699999842880061, y: 0, z: -0.02 },
      }}
      {...props}
    />
  );
};

export default DP83867ERGZR;
