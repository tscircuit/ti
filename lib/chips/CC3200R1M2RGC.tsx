import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["GPIO10"],
  pin2: ["GPIO11"],
  pin3: ["GPIO12"],
  pin4: ["GPIO13"],
  pin5: ["GPIO14"],
  pin6: ["GPIO15"],
  pin7: ["GPIO16"],
  pin8: ["GPIO17"],
  pin9: ["VDD_DIG1"],
  pin10: ["VIN_IO1"],
  pin11: ["FLASH_SPI_CLK"],
  pin12: ["FLASH_SPI_DOUT"],
  pin13: ["FLASH_SPI_DIN"],
  pin14: ["FLASH_SPI_CS"],
  pin15: ["GPIO22"],
  pin16: ["TDI"],
  pin17: ["TDO"],
  pin18: ["GPIO28"],
  pin19: ["TCK"],
  pin20: ["TMS"],
  pin21: ["SOP2"],
  pin22: ["WLAN_TXAL_N"],
  pin23: ["WLAN_TXAL_P"],
  pin24: ["VDD_PLL"],
  pin25: ["LDO_IN2"],
  pin26: ["NC3"],
  pin27: ["NC2"],
  pin28: ["NC1"],
  pin29: ["ANTSEL1"],
  pin30: ["ANTSEL2"],
  pin31: ["RF_BG"],
  pin32: ["nRESET"],
  pin33: ["VDD_PA_IN"],
  pin34: ["SOP1"],
  pin35: ["SOP0"],
  pin36: ["LDO_IN1"],
  pin37: ["VIN_DCDC_ANA"],
  pin38: ["DCDC_ANA_SW"],
  pin39: ["VIN_DCDC_PA"],
  pin40: ["DCDC_PA_SW_P"],
  pin41: ["DCDC_PA_SW_N"],
  pin42: ["DCDC_PA_OUT"],
  pin43: ["DCDC_DIG_SW"],
  pin44: ["VIN_DCDC_DIG"],
  pin45: ["DCDC_ANA2_SW_P"],
  pin46: ["DCDC_ANA2_SW_N"],
  pin47: ["VDD_ANA2"],
  pin48: ["VDD_ANA1"],
  pin49: ["VDD_RAM"],
  pin50: ["GPIO0"],
  pin51: ["RTC_XTAL_P"],
  pin52: ["RTC_XTAL_N"],
  pin53: ["GPIO30"],
  pin54: ["VIN_IO2"],
  pin55: ["GPIO1"],
  pin56: ["VDD_DIG2"],
  pin57: ["GPIO2"],
  pin58: ["GPIO3"],
  pin59: ["GPIO4"],
  pin60: ["GPIO5"],
  pin61: ["GPIO6"],
  pin62: ["GPIO7"],
  pin63: ["GPIO8"],
  pin64: ["GPIO9"],
  pin65: ["EP"],
} as const;

const pinAttributes = {
  pin26: { doNotConnect: true },
  pin27: { doNotConnect: true },
  pin28: { doNotConnect: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin65: [...pinLabels["pin65"], "thermalpad"],
} as const;

export const CC3200R1M2RGC = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C1526162"],
      }}
      manufacturerPartNumber="CC3200R1M2RGC"
      footprint="qfn64_thermalpad7.3mmx7.3mm_p0.4999mm_h9.6798mm_pw0.28mm_pl0.665mm_pin1location(bottomside,left)"
      {...props}
    />
  );
};

export default CC3200R1M2RGC;
