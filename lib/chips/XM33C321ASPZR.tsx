import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["UC13_3_SCK_SCL", "1"],
  pin2: ["UC12_RX", "2", "UC12_RX_2"],
  pin3: ["UC1_0_SDA_TX", "3", "UC1_0_SDA_TX_3"],
  pin4: ["UC13_3_POCI_RT", "4", "UC13_3_POCI_RT_4"],
  pin5: ["TIMA0_0_FAL2", "5", "TIMA0_0_FAL2_5"],
  pin6: ["NRST", "6"],
  pin7: ["VBAT", "7"],
  pin8: ["VDD", "8", "VDD_8"],
  pin9: ["VSS", "9", "VSS_9"],
  pin10: ["SDIO", "10", "SDIO_10"],
  pin11: ["SDIO", "11", "SDIO_11"],
  pin12: ["TIMG4_1_C0", "12"],
  pin13: ["TIMG4_1_C1", "13", "TIMG4_1_C1_13"],
  pin14: ["IO", "14", "IO_14"],
  pin15: ["UC12_RX", "15", "UC12_RX_15"],
  pin16: ["UC1_1_SDA_TX", "16", "UC1_1_SDA_TX_16"],
  pin17: ["UC1_1_SCL_RX", "17", "UC1_1_SCL_RX_17"],
  pin18: ["TIMG4_2_C0", "18"],
  pin19: ["TIMA0_0_C2N", "19"],
  pin20: ["UC1_0_SDA_TX", "20", "UC1_0_SDA_TX_20"],
  pin21: ["UC1_0_SCL_RX", "21"],
  pin22: ["CLK_OUT", "22", "CLK_OUT_22"],
  pin23: ["TIMA0_0_C3", "23", "TIMA0_0_C3_23"],
  pin24: ["TIMA0_0_C3N", "24"],
  pin25: ["UC1_1_SDA_TX", "25", "UC1_1_SDA_TX_25"],
  pin26: ["UC1_1_SCL_RX", "26", "UC1_1_SCL_RX_26"],
  pin27: ["UC1_0_RTS", "27"],
  pin28: ["TDO", "28"],
  pin29: ["TIMA0_0_C0", "29", "TIMA0_0_C0_29"],
  pin30: ["TIMG8_1_C0", "30", "TIMG8_1_C0_30"],
  pin31: ["TIMA0_0_C1", "31", "TIMA0_0_C1_31"],
  pin32: ["UC13_3_POCI_RT", "32", "UC13_3_POCI_RT_32"],
  pin33: ["UC2_POCI", "33"],
  pin34: ["UC2_SCK", "34"],
  pin35: ["PC16", "35"],
  pin36: ["SDIO", "36", "SDIO_36"],
  pin37: ["TIMA0_1_C1N", "37"],
  pin38: ["IO", "38", "IO_38"],
  pin39: ["SDIO", "39", "SDIO_39"],
  pin40: ["I2S1_AD0", "40"],
  pin41: ["I2S1_AD1", "41"],
  pin42: ["TIMA0_1_FAL1", "42"],
  pin43: ["I2S1_BCLK", "43", "I2S1_BCLK_43"],
  pin44: ["I2S1_MCLK", "44"],
  pin45: ["CLK_OUT", "45", "CLK_OUT_45"],
  pin46: ["UC13_0_PICO_SD", "46"],
  pin47: ["UC13_0_SCK_SCL", "47", "UC13_0_SCK_SCL_47"],
  pin48: ["TIMA0_0_C0", "48", "TIMA0_0_C0_48"],
  pin49: ["TIMA0_1_C3", "49"],
  pin50: ["TIMA0_1_C3N", "50", "TIMA0_1_C3N_50"],
  pin51: ["FCC_IN", "51"],
  pin52: ["QSPI_IO2", "52"],
  pin53: ["QSPI_IO1", "53"],
  pin54: ["UC15_1_SCL", "54"],
  pin55: ["UC1_1_SDA_TX", "55", "UC1_1_SDA_TX_55"],
  pin56: ["TIMG8_0_C0", "56"],
  pin57: ["IO", "57", "IO_57"],
  pin58: ["SDIO", "58", "SDIO_58"],
  pin59: ["SDIO", "59", "SDIO_59"],
  pin60: ["IO", "60", "IO_60"],
  pin61: ["SDIO", "61", "SDIO_61"],
  pin62: ["SDIO", "62", "SDIO_62"],
  pin63: ["VSS", "63", "VSS_63"],
  pin64: ["VDD", "64", "VDD_64"],
  pin65: ["UC13_0_SCK_SCL", "65", "UC13_0_SCK_SCL_65"],
  pin66: ["TIMG4_3_C1", "66"],
  pin67: ["IO", "67", "IO_67"],
  pin68: ["TIMA0_0_C1N", "68", "TIMA0_0_C1N_68"],
  pin69: ["TIMA0_0_C3", "69", "TIMA0_0_C3_69"],
  pin70: ["UC13_1_CS0_CTS", "70"],
  pin71: ["UC15_0_SDA", "71"],
  pin72: ["SWCLK", "72"],
  pin73: ["UC13_1_PICO_SD", "73"],
  pin74: ["UC13_1_SCK_SCL", "74"],
  pin75: ["TIMA0_1_C2", "75"],
  pin76: ["UC1_1_CTS", "76"],
  pin77: ["TDI", "77"],
  pin78: ["TIMA0_0_C0", "78", "TIMA0_0_C0_78"],
  pin79: ["TIMA0_0_C0N", "79"],
  pin80: ["TIMA0_0_C1", "80", "TIMA0_0_C1_80"],
  pin81: ["TIMA0_0_C1N", "81", "TIMA0_0_C1N_81"],
  pin82: ["TIMA0_1_C2N", "82"],
  pin83: ["CAN1_TX", "83", "CAN1_TX_83"],
  pin84: ["TIMA0_1_C3N", "84", "TIMA0_1_C3N_84"],
  pin85: ["I2S1_BCLK", "85", "I2S1_BCLK_85"],
  pin86: ["TIMG4_1_C1", "86", "TIMG4_1_C1_86"],
  pin87: ["TIMG8_1_C0", "87", "TIMG8_1_C0_87"],
  pin88: ["TIMG8_1_C1", "88"],
  pin89: ["IO", "89", "IO_89"],
  pin90: ["CAN1_TX", "90", "CAN1_TX_90"],
  pin91: ["SDIO", "91", "SDIO_91"],
  pin92: ["UC13_0_CS0_CTS", "92"],
  pin93: ["S", "93"],
  pin94: ["RX", "94"],
  pin95: ["TIMA0_0_FAL2", "95", "TIMA0_0_FAL2_95"],
  pin96: ["I2S0_MCLK", "96"],
  pin97: ["TIMG4_2_C1", "97"],
  pin98: ["A_TX", "98"],
  pin99: ["TIMA0_0_FAL2", "99", "TIMA0_0_FAL2_99"],
  pin100: ["VCORE", "100"],
} as const;

const pinRoles = {
  pin1: "control",
  pin2: "input",
  pin3: "bidirectional",
  pin4: "unknown",
  pin5: "unknown",
  pin6: "unknown",
  pin7: "power",
  pin8: "power",
  pin9: "ground",
  pin10: "bidirectional",
  pin11: "bidirectional",
  pin12: "unknown",
  pin13: "unknown",
  pin14: "bidirectional",
  pin15: "input",
  pin16: "bidirectional",
  pin17: "control",
  pin18: "unknown",
  pin19: "unknown",
  pin20: "bidirectional",
  pin21: "control",
  pin22: "control",
  pin23: "unknown",
  pin24: "unknown",
  pin25: "bidirectional",
  pin26: "control",
  pin27: "unknown",
  pin28: "unknown",
  pin29: "unknown",
  pin30: "unknown",
  pin31: "unknown",
  pin32: "unknown",
  pin33: "unknown",
  pin34: "control",
  pin35: "unknown",
  pin36: "bidirectional",
  pin37: "unknown",
  pin38: "bidirectional",
  pin39: "bidirectional",
  pin40: "unknown",
  pin41: "unknown",
  pin42: "unknown",
  pin43: "unknown",
  pin44: "unknown",
  pin45: "control",
  pin46: "unknown",
  pin47: "control",
  pin48: "unknown",
  pin49: "unknown",
  pin50: "unknown",
  pin51: "input",
  pin52: "bidirectional",
  pin53: "bidirectional",
  pin54: "control",
  pin55: "bidirectional",
  pin56: "unknown",
  pin57: "bidirectional",
  pin58: "bidirectional",
  pin59: "bidirectional",
  pin60: "bidirectional",
  pin61: "bidirectional",
  pin62: "bidirectional",
  pin63: "ground",
  pin64: "power",
  pin65: "control",
  pin66: "unknown",
  pin67: "bidirectional",
  pin68: "unknown",
  pin69: "unknown",
  pin70: "control",
  pin71: "bidirectional",
  pin72: "output",
  pin73: "unknown",
  pin74: "control",
  pin75: "unknown",
  pin76: "unknown",
  pin77: "unknown",
  pin78: "unknown",
  pin79: "unknown",
  pin80: "unknown",
  pin81: "unknown",
  pin82: "unknown",
  pin83: "output",
  pin84: "unknown",
  pin85: "unknown",
  pin86: "unknown",
  pin87: "unknown",
  pin88: "unknown",
  pin89: "bidirectional",
  pin90: "output",
  pin91: "bidirectional",
  pin92: "control",
  pin93: "unknown",
  pin94: "input",
  pin95: "unknown",
  pin96: "unknown",
  pin97: "unknown",
  pin98: "output",
  pin99: "unknown",
  pin100: "unknown",
} as const;

const pinAttributes = {
  pin7: { requiresPower: true },
  pin8: { requiresPower: true },
  pin9: { requiresGround: true },
  pin63: { requiresGround: true },
  pin64: { requiresPower: true },
} as const;

export const XM33C321ASPZR = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing PZ0100A; official source https://www.ti.com/lit/gpn/MSPM33C321A pages 111
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="XM33C321ASPZR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-6.95mm"
            pcbY="6mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin26"]}
            pcbX="-6mm"
            pcbY="-6.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin75"]}
            pcbX="6.95mm"
            pcbY="-6mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin100"]}
            pcbX="6mm"
            pcbY="6.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-6.95mm"
            pcbY="5.5mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin27"]}
            pcbX="-5.5mm"
            pcbY="-6.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin74"]}
            pcbX="6.95mm"
            pcbY="-5.5mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin99"]}
            pcbX="5.5mm"
            pcbY="6.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-6.95mm"
            pcbY="5mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin28"]}
            pcbX="-5mm"
            pcbY="-6.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin73"]}
            pcbX="6.95mm"
            pcbY="-5mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin98"]}
            pcbX="5mm"
            pcbY="6.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-6.95mm"
            pcbY="4.5mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin29"]}
            pcbX="-4.5mm"
            pcbY="-6.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin72"]}
            pcbX="6.95mm"
            pcbY="-4.5mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin97"]}
            pcbX="4.5mm"
            pcbY="6.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-6.95mm"
            pcbY="4mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin30"]}
            pcbX="-4mm"
            pcbY="-6.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin71"]}
            pcbX="6.95mm"
            pcbY="-4mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin96"]}
            pcbX="4mm"
            pcbY="6.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-6.95mm"
            pcbY="3.5mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin31"]}
            pcbX="-3.5mm"
            pcbY="-6.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin70"]}
            pcbX="6.95mm"
            pcbY="-3.5mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin95"]}
            pcbX="3.5mm"
            pcbY="6.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-6.95mm"
            pcbY="3mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin32"]}
            pcbX="-3mm"
            pcbY="-6.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin69"]}
            pcbX="6.95mm"
            pcbY="-3mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin94"]}
            pcbX="3mm"
            pcbY="6.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-6.95mm"
            pcbY="2.5mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin33"]}
            pcbX="-2.5mm"
            pcbY="-6.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin68"]}
            pcbX="6.95mm"
            pcbY="-2.5mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin93"]}
            pcbX="2.5mm"
            pcbY="6.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="-6.95mm"
            pcbY="2mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin34"]}
            pcbX="-2mm"
            pcbY="-6.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin67"]}
            pcbX="6.95mm"
            pcbY="-2mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin92"]}
            pcbX="2mm"
            pcbY="6.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="-6.95mm"
            pcbY="1.5mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin35"]}
            pcbX="-1.5mm"
            pcbY="-6.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin66"]}
            pcbX="6.95mm"
            pcbY="-1.5mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin91"]}
            pcbX="1.5mm"
            pcbY="6.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="-6.95mm"
            pcbY="1mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin36"]}
            pcbX="-1mm"
            pcbY="-6.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin65"]}
            pcbX="6.95mm"
            pcbY="-1mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin90"]}
            pcbX="1mm"
            pcbY="6.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="-6.95mm"
            pcbY="0.5mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin37"]}
            pcbX="-0.5mm"
            pcbY="-6.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin64"]}
            pcbX="6.95mm"
            pcbY="-0.5mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin89"]}
            pcbX="0.5mm"
            pcbY="6.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="-6.95mm"
            pcbY="0mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin38"]}
            pcbX="0mm"
            pcbY="-6.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin63"]}
            pcbX="6.95mm"
            pcbY="0mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin88"]}
            pcbX="0mm"
            pcbY="6.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="-6.95mm"
            pcbY="-0.5mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin39"]}
            pcbX="0.5mm"
            pcbY="-6.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin62"]}
            pcbX="6.95mm"
            pcbY="0.5mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin87"]}
            pcbX="-0.5mm"
            pcbY="6.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="-6.95mm"
            pcbY="-1mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin40"]}
            pcbX="1mm"
            pcbY="-6.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin61"]}
            pcbX="6.95mm"
            pcbY="1mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin86"]}
            pcbX="-1mm"
            pcbY="6.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="-6.95mm"
            pcbY="-1.5mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin41"]}
            pcbX="1.5mm"
            pcbY="-6.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin60"]}
            pcbX="6.95mm"
            pcbY="1.5mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin85"]}
            pcbX="-1.5mm"
            pcbY="6.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="-6.95mm"
            pcbY="-2mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin42"]}
            pcbX="2mm"
            pcbY="-6.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin59"]}
            pcbX="6.95mm"
            pcbY="2mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin84"]}
            pcbX="-2mm"
            pcbY="6.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="-6.95mm"
            pcbY="-2.5mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin43"]}
            pcbX="2.5mm"
            pcbY="-6.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin58"]}
            pcbX="6.95mm"
            pcbY="2.5mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin83"]}
            pcbX="-2.5mm"
            pcbY="6.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin19"]}
            pcbX="-6.95mm"
            pcbY="-3mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin44"]}
            pcbX="3mm"
            pcbY="-6.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin57"]}
            pcbX="6.95mm"
            pcbY="3mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin82"]}
            pcbX="-3mm"
            pcbY="6.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin20"]}
            pcbX="-6.95mm"
            pcbY="-3.5mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin45"]}
            pcbX="3.5mm"
            pcbY="-6.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin56"]}
            pcbX="6.95mm"
            pcbY="3.5mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin81"]}
            pcbX="-3.5mm"
            pcbY="6.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin21"]}
            pcbX="-6.95mm"
            pcbY="-4mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin46"]}
            pcbX="4mm"
            pcbY="-6.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin55"]}
            pcbX="6.95mm"
            pcbY="4mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin80"]}
            pcbX="-4mm"
            pcbY="6.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin22"]}
            pcbX="-6.95mm"
            pcbY="-4.5mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin47"]}
            pcbX="4.5mm"
            pcbY="-6.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin54"]}
            pcbX="6.95mm"
            pcbY="4.5mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin79"]}
            pcbX="-4.5mm"
            pcbY="6.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin23"]}
            pcbX="-6.95mm"
            pcbY="-5mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin48"]}
            pcbX="5mm"
            pcbY="-6.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin53"]}
            pcbX="6.95mm"
            pcbY="5mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin78"]}
            pcbX="-5mm"
            pcbY="6.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin24"]}
            pcbX="-6.95mm"
            pcbY="-5.5mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin49"]}
            pcbX="5.5mm"
            pcbY="-6.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin52"]}
            pcbX="6.95mm"
            pcbY="5.5mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin77"]}
            pcbX="-5.5mm"
            pcbY="6.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin25"]}
            pcbX="-6.95mm"
            pcbY="-6mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin50"]}
            pcbX="6mm"
            pcbY="-6.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin51"]}
            pcbX="6.95mm"
            pcbY="6mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin76"]}
            pcbX="-6mm"
            pcbY="6.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
        </footprint>
      }
      {...props}
    />
  );
};

export default XM33C321ASPZR;
