import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VSSA", "A1", "VSSA_A1"],
  pin13: ["VSSA", "A2", "VSSA_A2"],
  pin25: ["TX1", "A3"],
  pin31: ["VSSA", "A4", "VSSA_A4"],
  pin35: ["TX2", "A5"],
  pin44: ["VSSA", "A6", "VSSA_A6"],
  pin51: ["OSC_CLK_OUT", "A7"],
  pin58: ["VPP", "A8"],
  pin74: ["QSPI_CS", "A10"],
  pin82: ["QSPI_SCLK", "A11"],
  pin94: ["VSS", "A12", "VSS_A12"],
  pin2: ["CLKM", "B1"],
  pin14: ["VSSA", "B2", "VSSA_B2"],
  pin26: ["VSSA", "B3", "VSSA_B3"],
  pin32: ["VSSA", "B4", "VSSA_B4"],
  pin36: ["VSSA", "B5", "VSSA_B5"],
  pin45: ["VSSA", "B6", "VSSA_B6"],
  pin52: ["VSS", "B7", "VSS_B7"],
  pin59: ["RTC_CLK_IN", "B8", "RTC_CLK_IN_B8"],
  pin67: ["I2C_SDA", "B9", "I2C_SDA_B9"],
  pin75: ["I2C_SCL", "B10"],
  pin83: ["QSPI_D0", "B11"],
  pin95: ["EPWMB", "B12", "EPWMB_B12"],
  pin3: ["VSSA", "C1", "VSSA_C1"],
  pin15: ["VSSA", "C2", "VSSA_C2"],
  pin46: ["VIOIN_18CLK", "C6"],
  pin60: ["VIOIN_18", "C8", "VIOIN_18_C8"],
  pin68: ["VDD", "C9", "VDD_C9"],
  pin84: ["EPWMA", "C11", "EPWMA_C11"],
  pin96: ["EPWMB", "C12", "EPWMB_C12"],
  pin4: ["CLKP", "D1"],
  pin16: ["VSSA", "D2", "VSSA_D2"],
  pin27: ["VOUT_14SYNTH", "D3"],
  pin76: ["EPWMB", "D10", "EPWMB_D10"],
  pin85: ["EPWMA", "D11", "EPWMA_D11"],
  pin5: ["VSSA", "E1", "VSSA_E1"],
  pin17: ["VSSA", "E2", "VSSA_E2"],
  pin37: ["VSSA_PM", "E5"],
  pin47: ["VSS", "E6", "VSS_E6"],
  pin53: ["VSS", "E7", "VSS_E7"],
  pin61: ["VSS", "E8", "VSS_E8"],
  pin69: ["VSS", "E9", "VSS_E9"],
  pin77: ["EPWM_SYNC_IN", "E10"],
  pin86: ["TDO", "E11"],
  pin97: ["RTC_CLK_IN", "E12", "RTC_CLK_IN_E12"],
  pin6: ["RX3", "F1"],
  pin18: ["VSSA", "F2", "VSSA_F2"],
  pin28: ["VDDA_18VCO", "F3"],
  pin38: ["VSSA", "F5", "VSSA_F5"],
  pin48: ["VSS", "F6", "VSS_F6"],
  pin54: ["VSS", "F7", "VSS_F7"],
  pin62: ["VSS", "F8", "VSS_F8"],
  pin70: ["VSS", "F9", "VSS_F9"],
  pin87: ["I2C_SDA", "F11", "I2C_SDA_F11"],
  pin7: ["VSSA", "G1", "VSSA_G1"],
  pin19: ["VSSA", "G2", "VSSA_G2"],
  pin39: ["VOUT_14APLL", "G5"],
  pin55: ["VDD", "G7", "VDD_G7"],
  pin63: ["VDD", "G8", "VDD_G8"],
  pin71: ["VDD", "G9", "VDD_G9"],
  pin88: ["EPWMA", "G11", "EPWMA_G11"],
  pin98: ["VIOIN", "G12", "VIOIN_G12"],
  pin8: ["RX2", "H1"],
  pin20: ["VSSA", "H2", "VSSA_H2"],
  pin40: ["VBGAP", "H5"],
  pin64: ["VDD", "H8", "VDD_H8"],
  pin78: ["RTC_CLK_IN", "H10", "RTC_CLK_IN_H10"],
  pin89: ["PMIC_CLKOUT", "H11"],
  pin99: ["VSS", "H12", "VSS_H12"],
  pin9: ["VSSA", "J1", "VSSA_J1"],
  pin21: ["VSSA", "J2", "VSSA_J2"],
  pin41: ["VIN_18PM", "J5"],
  pin79: ["EPWMB", "J10", "EPWMB_J10"],
  pin90: ["CAN_FD_RX", "J11"],
  pin10: ["RX1", "K1"],
  pin22: ["VSSA", "K2", "VSSA_K2"],
  pin56: ["VDD", "K7", "VDD_K7"],
  pin72: ["VSS", "K9", "VSS_K9"],
  pin91: ["MCU_CLKOUT", "K11", "MCU_CLKOUT_K11"],
  pin100: ["VIOIN_18", "K12", "VIOIN_18_K12"],
  pin11: ["VSSA", "L1", "VSSA_L1"],
  pin23: ["VSSA", "L2", "VSSA_L2"],
  pin29: ["VDDA_10RF", "L3", "VDDA_10RF_L3"],
  pin33: ["VDDA_12RF", "L4", "VDDA_12RF_L4"],
  pin42: ["VDDA_18BB", "L5", "VDDA_18BB_L5"],
  pin49: ["GPADC2", "L6"],
  pin65: ["VIOIN_18", "L8", "VIOIN_18_L8"],
  pin73: ["VNWA", "L9"],
  pin80: ["NRESET", "L10"],
  pin92: ["RTC_CLK_IN", "L11", "RTC_CLK_IN_L11"],
  pin101: ["CAN_FD_TX", "L12"],
  pin12: ["VSSA", "M1", "VSSA_M1"],
  pin24: ["VSSA", "M2", "VSSA_M2"],
  pin30: ["VDDA_10RF", "M3", "VDDA_10RF_M3"],
  pin34: ["VDDA_12RF", "M4", "VDDA_12RF_M4"],
  pin43: ["VDDA_18BB", "M5", "VDDA_18BB_M5"],
  pin50: ["GPADC1", "M6"],
  pin57: ["VDD_SRAM", "M7"],
  pin66: ["VIOIN_18", "M8", "VIOIN_18_M8"],
  pin81: ["MCU_CLKOUT", "M10", "MCU_CLKOUT_M10"],
  pin93: ["VIOIN", "M11", "VIOIN_M11"],
  pin102: ["VSS", "M12", "VSS_M12"],
} as const;

const pinRoles = {
  pin1: "ground",
  pin13: "ground",
  pin31: "ground",
  pin44: "ground",
  pin58: "power",
  pin74: "output",
  pin82: "bidirectional",
  pin94: "ground",
  pin14: "ground",
  pin26: "ground",
  pin32: "ground",
  pin36: "ground",
  pin45: "ground",
  pin52: "ground",
  pin59: "input",
  pin67: "bidirectional",
  pin75: "bidirectional",
  pin83: "bidirectional",
  pin95: "output",
  pin3: "ground",
  pin15: "ground",
  pin46: "power",
  pin60: "power",
  pin68: "power",
  pin84: "output",
  pin96: "output",
  pin16: "ground",
  pin76: "output",
  pin85: "output",
  pin5: "ground",
  pin17: "ground",
  pin37: "ground",
  pin47: "ground",
  pin53: "ground",
  pin61: "ground",
  pin69: "ground",
  pin77: "input",
  pin86: "output",
  pin97: "input",
  pin18: "ground",
  pin28: "power",
  pin38: "ground",
  pin48: "ground",
  pin54: "ground",
  pin62: "ground",
  pin70: "ground",
  pin87: "bidirectional",
  pin7: "ground",
  pin19: "ground",
  pin55: "power",
  pin63: "power",
  pin71: "power",
  pin88: "output",
  pin98: "power",
  pin20: "ground",
  pin64: "power",
  pin78: "input",
  pin89: "output",
  pin99: "ground",
  pin9: "ground",
  pin21: "ground",
  pin41: "power",
  pin79: "output",
  pin90: "input",
  pin22: "ground",
  pin56: "power",
  pin72: "ground",
  pin91: "output",
  pin100: "power",
  pin11: "ground",
  pin23: "ground",
  pin33: "power",
  pin42: "power",
  pin65: "power",
  pin73: "power",
  pin101: "output",
  pin12: "ground",
  pin24: "ground",
  pin34: "power",
  pin43: "power",
  pin57: "power",
  pin66: "power",
  pin81: "output",
  pin93: "power",
  pin102: "ground",
} as const;

const pinAttributes = {
  pin1: {
    requiresGround: true,
  },
  pin13: {
    requiresGround: true,
  },
  pin31: {
    requiresGround: true,
  },
  pin44: {
    requiresGround: true,
  },
  pin58: {
    requiresPower: true,
  },
  pin94: {
    requiresGround: true,
  },
  pin14: {
    requiresGround: true,
  },
  pin26: {
    requiresGround: true,
  },
  pin32: {
    requiresGround: true,
  },
  pin36: {
    requiresGround: true,
  },
  pin45: {
    requiresGround: true,
  },
  pin52: {
    requiresGround: true,
  },
  pin3: {
    requiresGround: true,
  },
  pin15: {
    requiresGround: true,
  },
  pin46: {
    requiresPower: true,
  },
  pin60: {
    requiresPower: true,
  },
  pin68: {
    requiresPower: true,
  },
  pin16: {
    requiresGround: true,
  },
  pin5: {
    requiresGround: true,
  },
  pin17: {
    requiresGround: true,
  },
  pin37: {
    requiresGround: true,
  },
  pin47: {
    requiresGround: true,
  },
  pin53: {
    requiresGround: true,
  },
  pin61: {
    requiresGround: true,
  },
  pin69: {
    requiresGround: true,
  },
  pin18: {
    requiresGround: true,
  },
  pin28: {
    requiresPower: true,
  },
  pin38: {
    requiresGround: true,
  },
  pin48: {
    requiresGround: true,
  },
  pin54: {
    requiresGround: true,
  },
  pin62: {
    requiresGround: true,
  },
  pin70: {
    requiresGround: true,
  },
  pin7: {
    requiresGround: true,
  },
  pin19: {
    requiresGround: true,
  },
  pin55: {
    requiresPower: true,
  },
  pin63: {
    requiresPower: true,
  },
  pin71: {
    requiresPower: true,
  },
  pin98: {
    requiresPower: true,
  },
  pin20: {
    requiresGround: true,
  },
  pin64: {
    requiresPower: true,
  },
  pin99: {
    requiresGround: true,
  },
  pin9: {
    requiresGround: true,
  },
  pin21: {
    requiresGround: true,
  },
  pin41: {
    requiresPower: true,
  },
  pin22: {
    requiresGround: true,
  },
  pin56: {
    requiresPower: true,
  },
  pin72: {
    requiresGround: true,
  },
  pin100: {
    requiresPower: true,
  },
  pin11: {
    requiresGround: true,
  },
  pin23: {
    requiresGround: true,
  },
  pin33: {
    requiresPower: true,
  },
  pin42: {
    requiresPower: true,
  },
  pin65: {
    requiresPower: true,
  },
  pin73: {
    requiresPower: true,
  },
  pin12: {
    requiresGround: true,
  },
  pin24: {
    requiresGround: true,
  },
  pin34: {
    requiresPower: true,
  },
  pin43: {
    requiresPower: true,
  },
  pin57: {
    requiresPower: true,
  },
  pin66: {
    requiresPower: true,
  },
  pin93: {
    requiresPower: true,
  },
  pin102: {
    requiresGround: true,
  },
} as const;

export const IWRL6432BDBAAMFR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C22428198"],
      }}
      manufacturerPartNumber="IWRL6432BDBAAMFR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-2.750058mm"
            pcbY="2.750058mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-2.750058mm"
            pcbY="2.249932mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-2.750058mm"
            pcbY="1.75006mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-2.750058mm"
            pcbY="1.249934mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-2.750058mm"
            pcbY="0.750062mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-2.750058mm"
            pcbY="0.249936mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-2.750058mm"
            pcbY="-0.249936mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-2.750058mm"
            pcbY="-0.750062mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="-2.750058mm"
            pcbY="-1.249934mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="-2.750058mm"
            pcbY="-1.75006mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="-2.750058mm"
            pcbY="-2.249932mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="-2.750058mm"
            pcbY="-2.750058mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="-2.249932mm"
            pcbY="2.750058mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="-2.249932mm"
            pcbY="2.249932mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="-2.249932mm"
            pcbY="1.75006mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="-2.249932mm"
            pcbY="1.249934mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="-2.249932mm"
            pcbY="0.750062mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="-2.249932mm"
            pcbY="0.249936mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin19"]}
            pcbX="-2.249932mm"
            pcbY="-0.249936mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin20"]}
            pcbX="-2.249932mm"
            pcbY="-0.750062mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin21"]}
            pcbX="-2.249932mm"
            pcbY="-1.249934mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin22"]}
            pcbX="-2.249932mm"
            pcbY="-1.75006mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin23"]}
            pcbX="-2.249932mm"
            pcbY="-2.249932mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin24"]}
            pcbX="-2.249932mm"
            pcbY="-2.750058mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin25"]}
            pcbX="-1.75006mm"
            pcbY="2.750058mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin26"]}
            pcbX="-1.75006mm"
            pcbY="2.249932mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin27"]}
            pcbX="-1.75006mm"
            pcbY="1.249934mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin28"]}
            pcbX="-1.75006mm"
            pcbY="0.249936mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin29"]}
            pcbX="-1.75006mm"
            pcbY="-2.249932mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin30"]}
            pcbX="-1.75006mm"
            pcbY="-2.750058mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin31"]}
            pcbX="-1.249934mm"
            pcbY="2.750058mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin32"]}
            pcbX="-1.249934mm"
            pcbY="2.249932mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin33"]}
            pcbX="-1.249934mm"
            pcbY="-2.249932mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin34"]}
            pcbX="-1.249934mm"
            pcbY="-2.750058mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin35"]}
            pcbX="-0.750062mm"
            pcbY="2.750058mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin36"]}
            pcbX="-0.750062mm"
            pcbY="2.249932mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin37"]}
            pcbX="-0.750062mm"
            pcbY="0.750062mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin38"]}
            pcbX="-0.750062mm"
            pcbY="0.249936mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin39"]}
            pcbX="-0.750062mm"
            pcbY="-0.249936mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin40"]}
            pcbX="-0.750062mm"
            pcbY="-0.750062mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin41"]}
            pcbX="-0.750062mm"
            pcbY="-1.249934mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin42"]}
            pcbX="-0.750062mm"
            pcbY="-2.249932mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin43"]}
            pcbX="-0.750062mm"
            pcbY="-2.750058mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin44"]}
            pcbX="-0.249936mm"
            pcbY="2.750058mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin45"]}
            pcbX="-0.249936mm"
            pcbY="2.249932mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin46"]}
            pcbX="-0.249936mm"
            pcbY="1.75006mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin47"]}
            pcbX="-0.249936mm"
            pcbY="0.750062mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin48"]}
            pcbX="-0.249936mm"
            pcbY="0.249936mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin49"]}
            pcbX="-0.249936mm"
            pcbY="-2.249932mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin50"]}
            pcbX="-0.249936mm"
            pcbY="-2.750058mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin51"]}
            pcbX="0.249936mm"
            pcbY="2.750058mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin52"]}
            pcbX="0.249936mm"
            pcbY="2.249932mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin53"]}
            pcbX="0.249936mm"
            pcbY="0.750062mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin54"]}
            pcbX="0.249936mm"
            pcbY="0.249936mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin55"]}
            pcbX="0.249936mm"
            pcbY="-0.249936mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin56"]}
            pcbX="0.249936mm"
            pcbY="-1.75006mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin57"]}
            pcbX="0.249936mm"
            pcbY="-2.750058mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin58"]}
            pcbX="0.750062mm"
            pcbY="2.750058mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin59"]}
            pcbX="0.750062mm"
            pcbY="2.249932mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin60"]}
            pcbX="0.750062mm"
            pcbY="1.75006mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin61"]}
            pcbX="0.750062mm"
            pcbY="0.750062mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin62"]}
            pcbX="0.750062mm"
            pcbY="0.249936mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin63"]}
            pcbX="0.750062mm"
            pcbY="-0.249936mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin64"]}
            pcbX="0.750062mm"
            pcbY="-0.750062mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin65"]}
            pcbX="0.750062mm"
            pcbY="-2.249932mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin66"]}
            pcbX="0.750062mm"
            pcbY="-2.750058mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin67"]}
            pcbX="1.249934mm"
            pcbY="2.249932mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin68"]}
            pcbX="1.249934mm"
            pcbY="1.75006mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin69"]}
            pcbX="1.249934mm"
            pcbY="0.750062mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin70"]}
            pcbX="1.249934mm"
            pcbY="0.249936mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin71"]}
            pcbX="1.249934mm"
            pcbY="-0.249936mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin72"]}
            pcbX="1.249934mm"
            pcbY="-1.75006mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin73"]}
            pcbX="1.249934mm"
            pcbY="-2.249932mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin74"]}
            pcbX="1.75006mm"
            pcbY="2.750058mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin75"]}
            pcbX="1.75006mm"
            pcbY="2.249932mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin76"]}
            pcbX="1.75006mm"
            pcbY="1.249934mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin77"]}
            pcbX="1.75006mm"
            pcbY="0.750062mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin78"]}
            pcbX="1.75006mm"
            pcbY="-0.750062mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin79"]}
            pcbX="1.75006mm"
            pcbY="-1.249934mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin80"]}
            pcbX="1.75006mm"
            pcbY="-2.249932mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin81"]}
            pcbX="1.75006mm"
            pcbY="-2.750058mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin82"]}
            pcbX="2.249932mm"
            pcbY="2.750058mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin83"]}
            pcbX="2.249932mm"
            pcbY="2.249932mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin84"]}
            pcbX="2.249932mm"
            pcbY="1.75006mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin85"]}
            pcbX="2.249932mm"
            pcbY="1.249934mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin86"]}
            pcbX="2.249932mm"
            pcbY="0.750062mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin87"]}
            pcbX="2.249932mm"
            pcbY="0.249936mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin88"]}
            pcbX="2.249932mm"
            pcbY="-0.249936mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin89"]}
            pcbX="2.249932mm"
            pcbY="-0.750062mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin90"]}
            pcbX="2.249932mm"
            pcbY="-1.249934mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin91"]}
            pcbX="2.249932mm"
            pcbY="-1.75006mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin92"]}
            pcbX="2.249932mm"
            pcbY="-2.249932mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin93"]}
            pcbX="2.249932mm"
            pcbY="-2.750058mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin94"]}
            pcbX="2.750058mm"
            pcbY="2.750058mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin95"]}
            pcbX="2.750058mm"
            pcbY="2.249932mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin96"]}
            pcbX="2.750058mm"
            pcbY="1.75006mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin97"]}
            pcbX="2.750058mm"
            pcbY="0.750062mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin98"]}
            pcbX="2.750058mm"
            pcbY="-0.249936mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin99"]}
            pcbX="2.750058mm"
            pcbY="-0.750062mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin100"]}
            pcbX="2.750058mm"
            pcbY="-1.75006mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin101"]}
            pcbX="2.750058mm"
            pcbY="-2.249932mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin102"]}
            pcbX="2.750058mm"
            pcbY="-2.750058mm"
            radius="0.1440053mm"
            shape="circle"
          />
          <silkscreenpath
            route={[
              { x: -3.3011872000000153, y: 3.301187199999987 },
              { x: 3.301187200000001, y: 3.301187199999987 },
              { x: 3.301187200000001, y: -3.3011872000000153 },
              { x: -3.3011872000000153, y: -3.3011872000000153 },
              { x: -3.3011872000000153, y: 3.301187199999987 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -3.7510719999999935, y: 2.7500579999999957 },
              { x: -3.7527770035041357, y: 2.7371072126211544 },
              { x: -3.757775820845424, y: 2.7250389999999953 },
              { x: -3.7657277908829627, y: 2.7146757908829784 },
              { x: -3.7760909999999797, y: 2.7067238208454114 },
              { x: -3.788159212621167, y: 2.701725003504137 },
              { x: -3.801109999999994, y: 2.7000199999999808 },
              { x: -3.8140607873788355, y: 2.701725003504137 },
              { x: -3.8261289999999946, y: 2.7067238208454114 },
              { x: -3.8364922091170115, y: 2.7146757908829784 },
              { x: -3.8444441791545643, y: 2.7250389999999953 },
              { x: -3.8494429964958385, y: 2.7371072126211544 },
              { x: -3.851147999999995, y: 2.7500579999999957 },
              { x: -3.8494429964958385, y: 2.7630087873788227 },
              { x: -3.8444441791545643, y: 2.775076999999982 },
              { x: -3.8364922091170115, y: 2.785440209117013 },
              { x: -3.8261289999999946, y: 2.7933921791545657 },
              { x: -3.8140607873788355, y: 2.79839099649584 },
              { x: -3.801109999999994, y: 2.8000959999999964 },
              { x: -3.788159212621167, y: 2.79839099649584 },
              { x: -3.7760909999999797, y: 2.7933921791545657 },
              { x: -3.7657277908829627, y: 2.785440209117013 },
              { x: -3.757775820845424, y: 2.775076999999982 },
              { x: -3.7527770035041357, y: 2.7630087873788227 },
              { x: -3.7510719999999935, y: 2.7500579999999957 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -3.529787199999987, y: 2.921203200000008 },
              { x: -3.529787199999987, y: 3.529787199999987 },
              { x: -2.9212031999999937, y: 3.529787199999987 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.2794mm"
            pcbY="4.5306mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -4.110799999999983, y: 3.7805999999999926 },
              { x: 3.5520000000000067, y: 3.7805999999999926 },
              { x: 3.5520000000000067, y: -3.5520000000000067 },
              { x: -4.110799999999983, y: -3.5520000000000067 },
              { x: -4.110799999999983, y: 3.7805999999999926 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C22428198.obj?uuid=1edb7ac7e74746818cc2223cfe263b22",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C22428198.step?uuid=1edb7ac7e74746818cc2223cfe263b22",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: -0.000012699999984988608,
          y: -0.000012699999984988608,
          z: -0.47,
        },
      }}
      {...props}
    />
  );
};

export default IWRL6432BDBAAMFR;
