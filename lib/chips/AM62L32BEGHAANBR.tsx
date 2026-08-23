import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VSS", "A1", "VSS_A1"],
  pin24: ["VSS", "A2", "VSS_A2"],
  pin47: ["MC0_DAT6", "A3"],
  pin60: ["VSS", "A4", "VSS_A4"],
  pin76: ["USB1_DRVVBUS", "A5"],
  pin87: ["ADCONFIG118", "A6"],
  pin103: ["ADCONFIG116", "A7"],
  pin116: ["CASP0_AXR3", "A8"],
  pin137: ["ADCONFIG98", "A9"],
  pin151: ["VSS", "A10", "VSS_A10"],
  pin164: ["MCASP0_ACLKX", "A11"],
  pin180: ["MCASP0_ACLKR", "A12"],
  pin195: ["VSS", "A13", "VSS_A13"],
  pin211: ["DSI0_TXCLKP", "A14"],
  pin224: ["DSI0_TXCLKN", "A15"],
  pin238: ["VSS", "A16", "VSS_A16"],
  pin259: ["DSI0_TXP1", "A17"],
  pin272: ["DSI0_TXN1", "A18"],
  pin288: ["VSS", "A19", "VSS_A19"],
  pin299: ["DSI0_TXN2", "A20"],
  pin315: ["DSI0_TXP2", "A21"],
  pin328: ["VSS", "A22", "VSS_A22"],
  pin351: ["VSS", "A23", "VSS_A23"],
  pin21: ["MMC1_DAT0", "AA1"],
  pin44: ["PADCONFIG135", "AA2"],
  pin73: ["VSS", "AA4", "VSS_AA4"],
  pin100: ["RGMII1_RD1", "AA6"],
  pin134: ["ADCONFIG80", "AA8"],
  pin177: ["RGMII1_TD3", "AA11"],
  pin192: ["ADCONFIG88", "AA12"],
  pin208: ["ADCONFIG89", "AA13"],
  pin256: ["EMU1", "AA16"],
  pin285: ["PMIC_LPM_EN0", "AA18"],
  pin312: ["VSS", "AA20", "VSS_AA20"],
  pin348: ["WKUP_I2C0_SDA", "AA22"],
  pin371: ["WKUP_UART0_TXD", "AA23"],
  pin22: ["VSS", "AB1", "VSS_AB1"],
  pin45: ["ADCONFIG134", "AB2"],
  pin58: ["USB0_RCALIB", "AB3"],
  pin74: ["USB0_DP", "AB4"],
  pin85: ["USB1_DP", "AB5"],
  pin101: ["USB1_VBUS", "AB6"],
  pin114: ["VSS", "AB7", "VSS_AB7"],
  pin135: ["ADCONFIG95", "AB8"],
  pin149: ["ADCONFIG92", "AB9"],
  pin162: ["ADCONFIG94", "AB10"],
  pin178: ["RGMII1_TX_CTL", "AB11"],
  pin193: ["ADCONFIG84", "AB12"],
  pin209: ["GMII2_TD1", "AB13"],
  pin222: ["CK", "AB14"],
  pin236: ["DO", "AB15"],
  pin257: ["RSTn", "AB16"],
  pin270: ["RSVD0", "AB17"],
  pin286: ["ORz", "AB18"],
  pin297: ["EXT_WAKEUP0", "AB19"],
  pin313: ["EXT_WAKEUP1", "AB20"],
  pin326: ["VSS", "AB21", "VSS_AB21"],
  pin349: ["WKUP_I2C0_SCL", "AB22"],
  pin372: ["E8", "AB23", "E8_AB23"],
  pin23: ["E8", "AC1", "E8_AC1"],
  pin46: ["VSS", "AC2", "VSS_AC2"],
  pin59: ["USB0_VBUS", "AC3"],
  pin75: ["USB0_DM", "AC4"],
  pin86: ["USB1_DM", "AC5"],
  pin102: ["USB1_RCALIB", "AC6"],
  pin115: ["ADCONFIG91", "AC7"],
  pin136: ["ADCONFIG90", "AC8"],
  pin150: ["GMII2_RD1", "AC9"],
  pin163: ["RGMII1_TD0", "AC10"],
  pin179: ["VSS", "AC11", "VSS_AC11"],
  pin194: ["ADCONFIG86", "AC12"],
  pin210: ["MDIO0_MDIO", "AC13"],
  pin223: ["VSS", "AC14", "VSS_AC14"],
  pin237: ["MDIO0_MDC", "AC15"],
  pin258: ["DI", "AC16"],
  pin271: ["WKUP_OSC0_XO", "AC17"],
  pin287: ["WKUP_OSC0_XI", "AC18"],
  pin298: ["VSS", "AC19", "VSS_AC19"],
  pin314: ["LFOSC0_XO", "AC20"],
  pin327: ["LFOSC0_XI", "AC21"],
  pin350: ["VSS", "AC22", "VSS_AC22"],
  pin373: ["VSS", "AC23", "VSS_AC23"],
  pin2: ["VSS", "B1", "VSS_B1"],
  pin25: ["MC0_CLK", "B2"],
  pin48: ["ADCONFIG125", "B3"],
  pin61: ["MMC0_DAT7", "B4"],
  pin77: ["VSS", "B5", "VSS_B5"],
  pin88: ["ADCONFIG141", "B6"],
  pin104: ["I2C0_SCL", "B7"],
  pin117: ["I2C2_SCL", "B8"],
  pin138: ["CASP0_AXR0", "B9"],
  pin152: ["ADCONFIG97", "B10"],
  pin165: ["CASP0_AFSX", "B11"],
  pin181: ["ADCONFIG108", "B12"],
  pin196: ["PADCONFIG112", "B13"],
  pin212: ["ADCONFIG111", "B14"],
  pin225: ["MCAN0_RX", "B15"],
  pin239: ["MCAN0_TX", "B16"],
  pin260: ["VSS", "B17", "VSS_B17"],
  pin273: ["DSI0_TXP0", "B18"],
  pin289: ["DSI0_TXN0", "B19"],
  pin300: ["VSS", "B20", "VSS_B20"],
  pin316: ["DSI0_TXP3", "B21"],
  pin329: ["DSI0_TXN3", "B22"],
  pin352: ["VSS", "B23", "VSS_B23"],
  pin3: ["MC0_DAT2", "C1"],
  pin26: ["MC0_DAT3", "C2"],
  pin62: ["MC0_DAT4", "C4"],
  pin89: ["USB0_DRVVBUS", "C6"],
  pin118: ["EXTINTn", "C8"],
  pin166: ["MCASP0_AFSR", "C11"],
  pin182: ["VSS", "C12", "VSS_C12"],
  pin197: ["UART0_TXD", "C13"],
  pin240: ["ESETSTATz", "C16"],
  pin274: ["VSS", "C18", "VSS_C18"],
  pin301: ["OSPI0_CSn0", "C20"],
  pin330: ["OSPI0_D0", "C22"],
  pin353: ["SPI0_CSn3", "C23"],
  pin4: ["VSS", "D1", "VSS_D1"],
  pin27: ["ADCONFIG133", "D2"],
  pin49: ["MC0_DAT0", "D3"],
  pin63: ["ADCONFIG129", "D4"],
  pin90: ["MC1_SDWP", "D6"],
  pin105: ["ADCONFIG117", "D7"],
  pin119: ["I2C2_SDA", "D8"],
  pin167: ["PI0_CS1", "D11"],
  pin198: ["UART0_RXD", "D13"],
  pin241: ["EXT_REFCLK1", "D16"],
  pin261: ["DSI0_TXRCALIB", "D17"],
  pin275: ["ADCONFIG28", "D18"],
  pin302: ["OSPI0_CSn1", "D20"],
  pin317: ["OSPI0_D1", "D21"],
  pin331: ["OSPI0_CLK", "D22"],
  pin354: ["OSPI0_D3", "D23"],
  pin5: ["DDR0_DQ3", "E1"],
  pin28: ["VSS", "E2", "VSS_E2"],
  pin91: ["VSS", "E6", "VSS_E6"],
  pin120: ["VSS", "E8", "VSS_E8"],
  pin139: ["VSS", "E9", "VSS_E9"],
  pin153: ["VSS", "E10", "VSS_E10"],
  pin168: ["SPI0_CS0", "E11"],
  pin183: ["ADCONFIG107", "E12"],
  pin199: ["ADCONFIG106", "E13"],
  pin213: ["VSS", "E14", "VSS_E14"],
  pin226: ["VSS", "E15", "VSS_E15"],
  pin242: ["ESETz", "E16"],
  pin276: ["OSPI0_LBCLKO", "E18"],
  pin332: ["OSPI0_DQS", "E22"],
  pin355: ["OSPI0_D2", "E23"],
  pin6: ["DDR0_DQ2", "F1"],
  pin29: ["DDR0_DM0", "F2"],
  pin50: ["DDR0_DQ1", "F3"],
  pin64: ["DDR0_DQ0", "F4"],
  pin78: ["VSS", "F5", "VSS_F5"],
  pin92: ["VSS", "F6", "VSS_F6"],
  pin277: ["VSS", "F18", "VSS_F18"],
  pin290: ["SPI0_D5", "F19"],
  pin303: ["SPI0_D7", "F20"],
  pin318: ["SPI0_D4", "F21"],
  pin333: ["GPMC0_AD14", "F22"],
  pin356: ["GPMC0_AD15", "F23"],
  pin7: ["DDR0_DQS0", "G1"],
  pin30: ["DDR0_DQS0_n", "G2"],
  pin65: ["DDR0_DQ4", "G4"],
  pin106: ["VSS", "G7", "VSS_G7"],
  pin121: ["VSS", "G8", "VSS_G8"],
  pin140: ["VSS", "G9", "VSS_G9"],
  pin154: ["VDDSHV1", "G10", "VDDSHV1_G10"],
  pin169: ["CAP_VDDS_GENERAL1", "G11"],
  pin184: ["VSS", "G12", "VSS_G12"],
  pin200: ["VDDA_CORE_DSI", "G13"],
  pin214: ["VDDA_1P8_DSI", "G14"],
  pin227: ["VSS", "G15", "VSS_G15"],
  pin243: ["VSS", "G16", "VSS_G16"],
  pin262: ["VSS", "G17", "VSS_G17"],
  pin304: ["SPI0_D6", "G20"],
  pin334: ["PADCONFIG43", "G22"],
  pin357: ["PADCONFIG42", "G23"],
  pin8: ["VSS", "H1", "VSS_H1"],
  pin31: ["DDR0_DQ6", "H2"],
  pin51: ["DDR0_DQ7", "H3"],
  pin66: ["DDR0_DQ5", "H4"],
  pin79: ["DDR0_A5", "H5"],
  pin93: ["DDR0_A1", "H6"],
  pin107: ["VSS", "H7", "VSS_H7"],
  pin122: ["VDDSHV2", "H8"],
  pin155: ["VDDSHV1", "H10", "VDDSHV1_H10"],
  pin185: ["VDDA_CORE_DSI_CLK", "H12"],
  pin215: ["VSS", "H14", "VSS_H14"],
  pin244: ["VDDS1", "H16"],
  pin263: ["VSS", "H17", "VSS_H17"],
  pin278: ["GPMC0_AD11", "H18"],
  pin291: ["PADCONFIG38", "H19"],
  pin305: ["PADCONFIG39", "H20"],
  pin319: ["PADCONFIG40", "H21"],
  pin335: ["PADCONFIG35", "H22"],
  pin358: ["PADCONFIG36", "H23"],
  pin9: ["DDR0_A4", "J1"],
  pin32: ["DDR0_RESET0_n", "J2"],
  pin123: ["CAP_VDDS_MMC0", "J8"],
  pin141: ["VDDS_WKUP", "J9", "VDDS_WKUP_J9"],
  pin170: ["VDDS_WKUP", "J11", "VDDS_WKUP_J11"],
  pin201: ["VDDS_WKUP", "J13", "VDDS_WKUP_J13"],
  pin228: ["VDDS_WKUP", "J15", "VDDS_WKUP_J15"],
  pin245: ["VDDSHV0", "J16", "VDDSHV0_J16"],
  pin336: ["GPMC0_AD7", "J22"],
  pin359: ["GPMC0_AD3", "J23"],
  pin10: ["DDR0_CKE0", "K1"],
  pin33: ["DDR0_A3", "K2"],
  pin124: ["VSS", "K8", "VSS_K8"],
  pin142: ["VSS", "K9", "VSS_K9"],
  pin156: ["VDDS_WKUP", "K10", "VDDS_WKUP_K10"],
  pin186: ["VDDA_PLL1", "K12"],
  pin216: ["VDDS_WKUP", "K14", "VDDS_WKUP_K14"],
  pin229: ["VSS", "K15", "VSS_K15"],
  pin246: ["CAP_VDDS_GPMC", "K16"],
  pin337: ["PADCONFIG32", "K22"],
  pin360: ["PADCONFIG34", "K23"],
  pin11: ["DDR0_CAS_n", "L1"],
  pin34: ["DDR0_WE_n", "L2"],
  pin52: ["DDR0_CS0_n", "L3"],
  pin67: ["DDR0_ODT0", "L4"],
  pin80: ["DDR0_A0", "L5"],
  pin94: ["DDR0_A2", "L6"],
  pin108: ["VSS", "L7", "VSS_L7"],
  pin125: ["VDDS_DDR", "L8", "VDDS_DDR_L8"],
  pin143: ["VSS", "L9", "VSS_L9"],
  pin171: ["VDDA_PLL0", "L11"],
  pin202: ["VSS", "L13", "VSS_L13"],
  pin230: ["VDD_CORE", "L15", "VDD_CORE_L15"],
  pin247: ["VSS", "L16", "VSS_L16"],
  pin264: ["VDDSHV0", "L17", "VDDSHV0_L17"],
  pin279: ["VSS", "L18", "VSS_L18"],
  pin292: ["GPMC0_CSn1", "L19"],
  pin306: ["GPMC0_CSn0", "L20"],
  pin320: ["GPMC0_CLK", "L21"],
  pin338: ["GPMC0_AD0", "L22"],
  pin361: ["GPMC0_AD1", "L23"],
  pin12: ["VSS", "M1", "VSS_M1"],
  pin35: ["DDR0_ACT_n", "M2"],
  pin53: ["DDR0_CAL0", "M3"],
  pin81: ["DDR0_RAS_n", "M5"],
  pin109: ["VDDS_DDR", "M7", "VDDS_DDR_M7"],
  pin126: ["VDDS_DDR", "M8", "VDDS_DDR_M8"],
  pin157: ["VDDA_DDR_PLL0", "M10"],
  pin187: ["VSS", "M12", "VSS_M12"],
  pin217: ["VDD_CORE", "M14", "VDD_CORE_M14"],
  pin248: ["CAP_VDDS_MMC2", "M16"],
  pin265: ["VDDSHV4", "M17"],
  pin293: ["GPMC0_WEn", "M19"],
  pin321: ["GPMC0_DIR", "M21"],
  pin339: ["GPMC0_CSn3", "M22"],
  pin362: ["GPMC0_CSn2", "M23"],
  pin13: ["DDR0_A9", "N1"],
  pin36: ["DDR0_BA1", "N2"],
  pin54: ["DDR0_BA0", "N3"],
  pin68: ["DDR0_BG1", "N4"],
  pin82: ["DDR0_BG0", "N5"],
  pin95: ["DDR0_A7", "N6"],
  pin110: ["VSS", "N7", "VSS_N7"],
  pin127: ["VDDS_DDR", "N8", "VDDS_DDR_N8"],
  pin144: ["VSS", "N9", "VSS_N9"],
  pin172: ["VSS", "N11", "VSS_N11"],
  pin203: ["VSS", "N13", "VSS_N13"],
  pin231: ["VDD_CORE", "N15", "VDD_CORE_N15"],
  pin249: ["VSS", "N16", "VSS_N16"],
  pin266: ["VDDA_ADC", "N17"],
  pin280: ["VPP", "N18"],
  pin294: ["GPMC0_ADVn_ALE", "N19"],
  pin307: ["GPMC0_OEn_REn", "N20"],
  pin322: ["PADCONFIG55", "N21"],
  pin340: ["GPMC0_WAIT1", "N22"],
  pin363: ["GPMC0_WAIT0", "N23"],
  pin14: ["DDR0_CK0", "P1"],
  pin37: ["DDR0_CK0_n", "P2"],
  pin128: ["VDDS_DDR", "P8", "VDDS_DDR_P8"],
  pin145: ["VSS", "P9", "VSS_P9"],
  pin158: ["VDD_CORE", "P10", "VDD_CORE_P10"],
  pin188: ["VDD_CORE", "P12", "VDD_CORE_P12"],
  pin218: ["VDD_CORE", "P14", "VDD_CORE_P14"],
  pin232: ["VSS", "P15", "VSS_P15"],
  pin250: ["VDDS_WKUP", "P16", "VDDS_WKUP_P16"],
  pin341: ["GPMC0_BE1n", "P22"],
  pin364: ["GPMC0_BE0n_CLE", "P23"],
  pin15: ["VSS", "R1", "VSS_R1"],
  pin38: ["DDR0_A6", "R2"],
  pin129: ["VSS", "R8", "VSS_R8"],
  pin146: ["VDD_CORE", "R9", "VDD_CORE_R9"],
  pin173: ["VDD_CORE", "R11", "VDD_CORE_R11"],
  pin204: ["VSS", "R13", "VSS_R13"],
  pin233: ["VSS", "R15", "VSS_R15"],
  pin251: ["VDDS_OSC0", "R16"],
  pin342: ["ADCONFIG61", "R22"],
  pin365: ["MC2_CLK", "R23"],
  pin16: ["DDR0_DQ10", "T1"],
  pin39: ["VSS", "T2", "VSS_T2"],
  pin55: ["DDR0_DQ9", "T3"],
  pin69: ["DDR0_A8", "T4"],
  pin83: ["DDR0_A10", "T5"],
  pin96: ["DDR0_A11", "T6"],
  pin111: ["VSS", "T7", "VSS_T7"],
  pin130: ["VSS", "T8", "VSS_T8"],
  pin159: ["VDDSHV3", "T10"],
  pin189: ["VDDA_1P8_USB", "T12"],
  pin219: ["VDDS0", "T14"],
  pin252: ["CAP_VDDSHV_MMC", "T16"],
  pin267: ["VDD_RTC", "T17"],
  pin281: ["VDDS_RTC", "T18"],
  pin295: ["VSS", "T19", "VSS_T19"],
  pin308: ["MMC2_SDCD", "T20"],
  pin323: ["ADCONFIG69", "T21"],
  pin343: ["MMC2_DAT1", "T22"],
  pin366: ["ADCONFIG62", "T23"],
  pin17: ["DDR0_DQ11", "U1"],
  pin40: ["DDR0_DQ14", "U2"],
  pin70: ["DDR0_DQ12", "U4"],
  pin112: ["VSS", "U7", "VSS_U7"],
  pin131: ["VSS", "U8", "VSS_U8"],
  pin147: ["CAP_VDDS_MMC1", "U9"],
  pin160: ["VSS", "U10", "VSS_U10"],
  pin174: ["VDDA_CORE_USB", "U11"],
  pin190: ["VDDA_3P3_USB", "U12"],
  pin205: ["VSS", "U13", "VSS_U13"],
  pin220: ["VSS", "U14", "VSS_U14"],
  pin234: ["VSS", "U15", "VSS_U15"],
  pin253: ["VDDA_3P3_SDIO", "U16"],
  pin268: ["VSS", "U17", "VSS_U17"],
  pin309: ["VSS", "U20", "VSS_U20"],
  pin344: ["MMC2_DAT0", "U22"],
  pin367: ["MC2_CMD", "U23"],
  pin18: ["DDR0_DQS1", "V1"],
  pin41: ["DDR0_DQS1_n", "V2"],
  pin56: ["VSS", "V3", "VSS_V3"],
  pin71: ["DDR0_DQ8", "V4"],
  pin84: ["DDR0_DQ13", "V5"],
  pin97: ["DDR0_A13", "V6"],
  pin282: ["VSS", "V18", "VSS_V18"],
  pin296: ["VSS", "V19", "VSS_V19"],
  pin310: ["ADC0_AIN0", "V20"],
  pin324: ["ADC0_AIN3", "V21"],
  pin345: ["ADC0_AIN1", "V22"],
  pin368: ["ADC0_AIN2", "V23"],
  pin19: ["DDR0_DQ15", "W1"],
  pin42: ["DDR0_DM1", "W2"],
  pin98: ["DDR0_A12", "W6"],
  pin132: ["ADCONFIG81", "W8"],
  pin148: ["VSS", "W9", "VSS_W9"],
  pin161: ["VSS", "W10", "VSS_W10"],
  pin175: ["RGMII1_TXC", "W11"],
  pin191: ["VSS", "W12", "VSS_W12"],
  pin206: ["RGMII1_TD1", "W13"],
  pin221: ["VSS", "W14", "VSS_W14"],
  pin235: ["VSS", "W15", "VSS_W15"],
  pin254: ["VSS", "W16", "VSS_W16"],
  pin283: ["VSS", "W18", "VSS_W18"],
  pin346: ["WKUP_UART0_RTSn", "W22"],
  pin369: ["WKUP_UART0_CTSn", "W23"],
  pin20: ["VSS", "Y1", "VSS_Y1"],
  pin43: ["ADCONFIG138", "Y2"],
  pin57: ["ADCONFIG140", "Y3"],
  pin72: ["PADCONFIG136", "Y4"],
  pin99: ["RGMII1_RX_CTL", "Y6"],
  pin113: ["RGMII1_RXC", "Y7"],
  pin133: ["RGMII1_RD0", "Y8"],
  pin176: ["RGMII1_TD2", "Y11"],
  pin207: ["ADCONFIG85", "Y13"],
  pin255: ["EMU0", "Y16"],
  pin269: ["MS", "Y17"],
  pin284: ["RTC_PORz", "Y18"],
  pin311: ["VSS", "Y20", "VSS_Y20"],
  pin325: ["VSS", "Y21", "VSS_Y21"],
  pin347: ["WKUP_UART0_RXD", "Y22"],
  pin370: ["WKUP_CLKOUT0", "Y23"],
} as const;

const pinRoles = {
  pin1: "ground",
  pin24: "ground",
  pin60: "ground",
  pin151: "ground",
  pin195: "ground",
  pin238: "ground",
  pin288: "ground",
  pin328: "ground",
  pin351: "ground",
  pin73: "ground",
  pin312: "ground",
  pin22: "ground",
  pin114: "ground",
  pin326: "ground",
  pin46: "ground",
  pin179: "ground",
  pin223: "ground",
  pin298: "ground",
  pin350: "ground",
  pin373: "ground",
  pin2: "ground",
  pin77: "ground",
  pin260: "ground",
  pin300: "ground",
  pin352: "ground",
  pin182: "ground",
  pin274: "ground",
  pin4: "ground",
  pin28: "ground",
  pin91: "ground",
  pin120: "ground",
  pin139: "ground",
  pin153: "ground",
  pin213: "ground",
  pin226: "ground",
  pin78: "ground",
  pin92: "ground",
  pin277: "ground",
  pin106: "ground",
  pin121: "ground",
  pin140: "ground",
  pin184: "ground",
  pin200: "power",
  pin214: "power",
  pin227: "ground",
  pin243: "ground",
  pin262: "ground",
  pin8: "ground",
  pin107: "ground",
  pin185: "power",
  pin215: "ground",
  pin244: "power",
  pin263: "ground",
  pin141: "power",
  pin170: "power",
  pin201: "power",
  pin228: "power",
  pin124: "ground",
  pin142: "ground",
  pin156: "power",
  pin186: "power",
  pin216: "power",
  pin229: "ground",
  pin108: "ground",
  pin125: "power",
  pin143: "ground",
  pin171: "power",
  pin202: "ground",
  pin230: "power",
  pin247: "ground",
  pin279: "ground",
  pin12: "ground",
  pin109: "power",
  pin126: "power",
  pin157: "power",
  pin187: "ground",
  pin217: "power",
  pin110: "ground",
  pin127: "power",
  pin144: "ground",
  pin172: "ground",
  pin203: "ground",
  pin231: "power",
  pin249: "ground",
  pin266: "power",
  pin280: "power",
  pin128: "power",
  pin145: "ground",
  pin158: "power",
  pin188: "power",
  pin218: "power",
  pin232: "ground",
  pin250: "power",
  pin15: "ground",
  pin129: "ground",
  pin146: "power",
  pin173: "power",
  pin204: "ground",
  pin233: "ground",
  pin251: "power",
  pin39: "ground",
  pin111: "ground",
  pin130: "ground",
  pin189: "power",
  pin219: "power",
  pin267: "power",
  pin281: "power",
  pin295: "ground",
  pin112: "ground",
  pin131: "ground",
  pin160: "ground",
  pin174: "power",
  pin190: "power",
  pin205: "ground",
  pin220: "ground",
  pin234: "ground",
  pin253: "power",
  pin268: "ground",
  pin309: "ground",
  pin56: "ground",
  pin282: "ground",
  pin296: "ground",
  pin148: "ground",
  pin161: "ground",
  pin191: "ground",
  pin221: "ground",
  pin235: "ground",
  pin254: "ground",
  pin283: "ground",
  pin20: "ground",
  pin311: "ground",
  pin325: "ground",
} as const;

const pinAttributes = {
  pin1: {
    requiresGround: true,
  },
  pin24: {
    requiresGround: true,
  },
  pin60: {
    requiresGround: true,
  },
  pin151: {
    requiresGround: true,
  },
  pin195: {
    requiresGround: true,
  },
  pin238: {
    requiresGround: true,
  },
  pin288: {
    requiresGround: true,
  },
  pin328: {
    requiresGround: true,
  },
  pin351: {
    requiresGround: true,
  },
  pin73: {
    requiresGround: true,
  },
  pin312: {
    requiresGround: true,
  },
  pin22: {
    requiresGround: true,
  },
  pin114: {
    requiresGround: true,
  },
  pin326: {
    requiresGround: true,
  },
  pin46: {
    requiresGround: true,
  },
  pin179: {
    requiresGround: true,
  },
  pin223: {
    requiresGround: true,
  },
  pin298: {
    requiresGround: true,
  },
  pin350: {
    requiresGround: true,
  },
  pin373: {
    requiresGround: true,
  },
  pin2: {
    requiresGround: true,
  },
  pin77: {
    requiresGround: true,
  },
  pin260: {
    requiresGround: true,
  },
  pin300: {
    requiresGround: true,
  },
  pin352: {
    requiresGround: true,
  },
  pin182: {
    requiresGround: true,
  },
  pin274: {
    requiresGround: true,
  },
  pin4: {
    requiresGround: true,
  },
  pin28: {
    requiresGround: true,
  },
  pin91: {
    requiresGround: true,
  },
  pin120: {
    requiresGround: true,
  },
  pin139: {
    requiresGround: true,
  },
  pin153: {
    requiresGround: true,
  },
  pin213: {
    requiresGround: true,
  },
  pin226: {
    requiresGround: true,
  },
  pin78: {
    requiresGround: true,
  },
  pin92: {
    requiresGround: true,
  },
  pin277: {
    requiresGround: true,
  },
  pin106: {
    requiresGround: true,
  },
  pin121: {
    requiresGround: true,
  },
  pin140: {
    requiresGround: true,
  },
  pin184: {
    requiresGround: true,
  },
  pin200: {
    requiresPower: true,
  },
  pin214: {
    requiresPower: true,
  },
  pin227: {
    requiresGround: true,
  },
  pin243: {
    requiresGround: true,
  },
  pin262: {
    requiresGround: true,
  },
  pin8: {
    requiresGround: true,
  },
  pin107: {
    requiresGround: true,
  },
  pin185: {
    requiresPower: true,
  },
  pin215: {
    requiresGround: true,
  },
  pin244: {
    requiresPower: true,
  },
  pin263: {
    requiresGround: true,
  },
  pin141: {
    requiresPower: true,
  },
  pin170: {
    requiresPower: true,
  },
  pin201: {
    requiresPower: true,
  },
  pin228: {
    requiresPower: true,
  },
  pin124: {
    requiresGround: true,
  },
  pin142: {
    requiresGround: true,
  },
  pin156: {
    requiresPower: true,
  },
  pin186: {
    requiresPower: true,
  },
  pin216: {
    requiresPower: true,
  },
  pin229: {
    requiresGround: true,
  },
  pin108: {
    requiresGround: true,
  },
  pin125: {
    requiresPower: true,
  },
  pin143: {
    requiresGround: true,
  },
  pin171: {
    requiresPower: true,
  },
  pin202: {
    requiresGround: true,
  },
  pin230: {
    requiresPower: true,
  },
  pin247: {
    requiresGround: true,
  },
  pin279: {
    requiresGround: true,
  },
  pin12: {
    requiresGround: true,
  },
  pin109: {
    requiresPower: true,
  },
  pin126: {
    requiresPower: true,
  },
  pin157: {
    requiresPower: true,
  },
  pin187: {
    requiresGround: true,
  },
  pin217: {
    requiresPower: true,
  },
  pin110: {
    requiresGround: true,
  },
  pin127: {
    requiresPower: true,
  },
  pin144: {
    requiresGround: true,
  },
  pin172: {
    requiresGround: true,
  },
  pin203: {
    requiresGround: true,
  },
  pin231: {
    requiresPower: true,
  },
  pin249: {
    requiresGround: true,
  },
  pin266: {
    requiresPower: true,
  },
  pin280: {
    requiresPower: true,
  },
  pin128: {
    requiresPower: true,
  },
  pin145: {
    requiresGround: true,
  },
  pin158: {
    requiresPower: true,
  },
  pin188: {
    requiresPower: true,
  },
  pin218: {
    requiresPower: true,
  },
  pin232: {
    requiresGround: true,
  },
  pin250: {
    requiresPower: true,
  },
  pin15: {
    requiresGround: true,
  },
  pin129: {
    requiresGround: true,
  },
  pin146: {
    requiresPower: true,
  },
  pin173: {
    requiresPower: true,
  },
  pin204: {
    requiresGround: true,
  },
  pin233: {
    requiresGround: true,
  },
  pin251: {
    requiresPower: true,
  },
  pin39: {
    requiresGround: true,
  },
  pin111: {
    requiresGround: true,
  },
  pin130: {
    requiresGround: true,
  },
  pin189: {
    requiresPower: true,
  },
  pin219: {
    requiresPower: true,
  },
  pin267: {
    requiresPower: true,
  },
  pin281: {
    requiresPower: true,
  },
  pin295: {
    requiresGround: true,
  },
  pin112: {
    requiresGround: true,
  },
  pin131: {
    requiresGround: true,
  },
  pin160: {
    requiresGround: true,
  },
  pin174: {
    requiresPower: true,
  },
  pin190: {
    requiresPower: true,
  },
  pin205: {
    requiresGround: true,
  },
  pin220: {
    requiresGround: true,
  },
  pin234: {
    requiresGround: true,
  },
  pin253: {
    requiresPower: true,
  },
  pin268: {
    requiresGround: true,
  },
  pin309: {
    requiresGround: true,
  },
  pin56: {
    requiresGround: true,
  },
  pin282: {
    requiresGround: true,
  },
  pin296: {
    requiresGround: true,
  },
  pin148: {
    requiresGround: true,
  },
  pin161: {
    requiresGround: true,
  },
  pin191: {
    requiresGround: true,
  },
  pin221: {
    requiresGround: true,
  },
  pin235: {
    requiresGround: true,
  },
  pin254: {
    requiresGround: true,
  },
  pin283: {
    requiresGround: true,
  },
  pin20: {
    requiresGround: true,
  },
  pin311: {
    requiresGround: true,
  },
  pin325: {
    requiresGround: true,
  },
} as const;

export const AM62L32BEGHAANBR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C52091703"],
      }}
      manufacturerPartNumber="AM62L32BEGHAANBR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-5.499989mm"
            pcbY="5.499989mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-5.499989mm"
            pcbY="5.000117mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-5.499989mm"
            pcbY="4.499991mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-5.499989mm"
            pcbY="4.000119mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-5.499989mm"
            pcbY="3.499993mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-5.499989mm"
            pcbY="3.000121mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-5.499989mm"
            pcbY="2.499995mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-5.499989mm"
            pcbY="2.000123mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="-5.499989mm"
            pcbY="1.499997mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="-5.499989mm"
            pcbY="1.000125mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="-5.499989mm"
            pcbY="0.499999mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="-5.499989mm"
            pcbY="0.000127mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="-5.499989mm"
            pcbY="-0.499999mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="-5.499989mm"
            pcbY="-0.999871mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="-5.499989mm"
            pcbY="-1.499997mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="-5.499989mm"
            pcbY="-1.999869mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="-5.499989mm"
            pcbY="-2.499995mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="-5.499989mm"
            pcbY="-2.999867mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin19"]}
            pcbX="-5.499989mm"
            pcbY="-3.499993mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin20"]}
            pcbX="-5.499989mm"
            pcbY="-3.999865mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin21"]}
            pcbX="-5.499989mm"
            pcbY="-4.499991mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin22"]}
            pcbX="-5.499989mm"
            pcbY="-4.999863mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin23"]}
            pcbX="-5.499989mm"
            pcbY="-5.499989mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin24"]}
            pcbX="-5.000117mm"
            pcbY="5.499989mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin25"]}
            pcbX="-5.000117mm"
            pcbY="5.000117mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin26"]}
            pcbX="-5.000117mm"
            pcbY="4.499991mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin27"]}
            pcbX="-5.000117mm"
            pcbY="4.000119mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin28"]}
            pcbX="-5.000117mm"
            pcbY="3.499993mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin29"]}
            pcbX="-5.000117mm"
            pcbY="3.000121mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin30"]}
            pcbX="-5.000117mm"
            pcbY="2.499995mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin31"]}
            pcbX="-5.000117mm"
            pcbY="2.000123mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin32"]}
            pcbX="-5.000117mm"
            pcbY="1.499997mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin33"]}
            pcbX="-5.000117mm"
            pcbY="1.000125mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin34"]}
            pcbX="-5.000117mm"
            pcbY="0.499999mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin35"]}
            pcbX="-5.000117mm"
            pcbY="0.000127mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin36"]}
            pcbX="-5.000117mm"
            pcbY="-0.499999mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin37"]}
            pcbX="-5.000117mm"
            pcbY="-0.999871mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin38"]}
            pcbX="-5.000117mm"
            pcbY="-1.499997mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin39"]}
            pcbX="-5.000117mm"
            pcbY="-1.999869mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin40"]}
            pcbX="-5.000117mm"
            pcbY="-2.499995mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin41"]}
            pcbX="-5.000117mm"
            pcbY="-2.999867mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin42"]}
            pcbX="-5.000117mm"
            pcbY="-3.499993mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin43"]}
            pcbX="-5.000117mm"
            pcbY="-3.999865mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin44"]}
            pcbX="-5.000117mm"
            pcbY="-4.499991mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin45"]}
            pcbX="-5.000117mm"
            pcbY="-4.999863mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin46"]}
            pcbX="-5.000117mm"
            pcbY="-5.499989mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin47"]}
            pcbX="-4.499991mm"
            pcbY="5.499989mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin48"]}
            pcbX="-4.499991mm"
            pcbY="5.000117mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin49"]}
            pcbX="-4.499991mm"
            pcbY="4.000119mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin50"]}
            pcbX="-4.499991mm"
            pcbY="3.000121mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin51"]}
            pcbX="-4.499991mm"
            pcbY="2.000123mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin52"]}
            pcbX="-4.499991mm"
            pcbY="0.499999mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin53"]}
            pcbX="-4.499991mm"
            pcbY="0.000127mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin54"]}
            pcbX="-4.499991mm"
            pcbY="-0.499999mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin55"]}
            pcbX="-4.499991mm"
            pcbY="-1.999869mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin56"]}
            pcbX="-4.499991mm"
            pcbY="-2.999867mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin57"]}
            pcbX="-4.499991mm"
            pcbY="-3.999865mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin58"]}
            pcbX="-4.499991mm"
            pcbY="-4.999863mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin59"]}
            pcbX="-4.499991mm"
            pcbY="-5.499989mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin60"]}
            pcbX="-4.000119mm"
            pcbY="5.499989mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin61"]}
            pcbX="-4.000119mm"
            pcbY="5.000117mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin62"]}
            pcbX="-4.000119mm"
            pcbY="4.499991mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin63"]}
            pcbX="-4.000119mm"
            pcbY="4.000119mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin64"]}
            pcbX="-4.000119mm"
            pcbY="3.000121mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin65"]}
            pcbX="-4.000119mm"
            pcbY="2.499995mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin66"]}
            pcbX="-4.000119mm"
            pcbY="2.000123mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin67"]}
            pcbX="-4.000119mm"
            pcbY="0.499999mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin68"]}
            pcbX="-4.000119mm"
            pcbY="-0.499999mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin69"]}
            pcbX="-4.000119mm"
            pcbY="-1.999869mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin70"]}
            pcbX="-4.000119mm"
            pcbY="-2.499995mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin71"]}
            pcbX="-4.000119mm"
            pcbY="-2.999867mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin72"]}
            pcbX="-4.000119mm"
            pcbY="-3.999865mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin73"]}
            pcbX="-4.000119mm"
            pcbY="-4.499991mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin74"]}
            pcbX="-4.000119mm"
            pcbY="-4.999863mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin75"]}
            pcbX="-4.000119mm"
            pcbY="-5.499989mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin76"]}
            pcbX="-3.499993mm"
            pcbY="5.499989mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin77"]}
            pcbX="-3.499993mm"
            pcbY="5.000117mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin78"]}
            pcbX="-3.499993mm"
            pcbY="3.000121mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin79"]}
            pcbX="-3.499993mm"
            pcbY="2.000123mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin80"]}
            pcbX="-3.499993mm"
            pcbY="0.499999mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin81"]}
            pcbX="-3.499993mm"
            pcbY="0.000127mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin82"]}
            pcbX="-3.499993mm"
            pcbY="-0.499999mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin83"]}
            pcbX="-3.499993mm"
            pcbY="-1.999869mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin84"]}
            pcbX="-3.499993mm"
            pcbY="-2.999867mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin85"]}
            pcbX="-3.499993mm"
            pcbY="-4.999863mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin86"]}
            pcbX="-3.499993mm"
            pcbY="-5.499989mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin87"]}
            pcbX="-3.000121mm"
            pcbY="5.499989mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin88"]}
            pcbX="-3.000121mm"
            pcbY="5.000117mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin89"]}
            pcbX="-3.000121mm"
            pcbY="4.499991mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin90"]}
            pcbX="-3.000121mm"
            pcbY="4.000119mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin91"]}
            pcbX="-3.000121mm"
            pcbY="3.499993mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin92"]}
            pcbX="-3.000121mm"
            pcbY="3.000121mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin93"]}
            pcbX="-3.000121mm"
            pcbY="2.000123mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin94"]}
            pcbX="-3.000121mm"
            pcbY="0.499999mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin95"]}
            pcbX="-3.000121mm"
            pcbY="-0.499999mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin96"]}
            pcbX="-3.000121mm"
            pcbY="-1.999869mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin97"]}
            pcbX="-3.000121mm"
            pcbY="-2.999867mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin98"]}
            pcbX="-3.000121mm"
            pcbY="-3.499993mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin99"]}
            pcbX="-3.000121mm"
            pcbY="-3.999865mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin100"]}
            pcbX="-3.000121mm"
            pcbY="-4.499991mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin101"]}
            pcbX="-3.000121mm"
            pcbY="-4.999863mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin102"]}
            pcbX="-3.000121mm"
            pcbY="-5.499989mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin103"]}
            pcbX="-2.499995mm"
            pcbY="5.499989mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin104"]}
            pcbX="-2.499995mm"
            pcbY="5.000117mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin105"]}
            pcbX="-2.499995mm"
            pcbY="4.000119mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin106"]}
            pcbX="-2.499995mm"
            pcbY="2.499995mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin107"]}
            pcbX="-2.499995mm"
            pcbY="2.000123mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin108"]}
            pcbX="-2.499995mm"
            pcbY="0.499999mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin109"]}
            pcbX="-2.499995mm"
            pcbY="0.000127mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin110"]}
            pcbX="-2.499995mm"
            pcbY="-0.499999mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin111"]}
            pcbX="-2.499995mm"
            pcbY="-1.999869mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin112"]}
            pcbX="-2.499995mm"
            pcbY="-2.499995mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin113"]}
            pcbX="-2.499995mm"
            pcbY="-3.999865mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin114"]}
            pcbX="-2.499995mm"
            pcbY="-4.999863mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin115"]}
            pcbX="-2.499995mm"
            pcbY="-5.499989mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin116"]}
            pcbX="-2.000123mm"
            pcbY="5.499989mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin117"]}
            pcbX="-2.000123mm"
            pcbY="5.000117mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin118"]}
            pcbX="-2.000123mm"
            pcbY="4.499991mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin119"]}
            pcbX="-2.000123mm"
            pcbY="4.000119mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin120"]}
            pcbX="-2.000123mm"
            pcbY="3.499993mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin121"]}
            pcbX="-2.000123mm"
            pcbY="2.499995mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin122"]}
            pcbX="-2.000123mm"
            pcbY="2.000123mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin123"]}
            pcbX="-2.000123mm"
            pcbY="1.499997mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin124"]}
            pcbX="-2.000123mm"
            pcbY="1.000125mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin125"]}
            pcbX="-2.000123mm"
            pcbY="0.499999mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin126"]}
            pcbX="-2.000123mm"
            pcbY="0.000127mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin127"]}
            pcbX="-2.000123mm"
            pcbY="-0.499999mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin128"]}
            pcbX="-2.000123mm"
            pcbY="-0.999871mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin129"]}
            pcbX="-2.000123mm"
            pcbY="-1.499997mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin130"]}
            pcbX="-2.000123mm"
            pcbY="-1.999869mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin131"]}
            pcbX="-2.000123mm"
            pcbY="-2.499995mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin132"]}
            pcbX="-2.000123mm"
            pcbY="-3.499993mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin133"]}
            pcbX="-2.000123mm"
            pcbY="-3.999865mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin134"]}
            pcbX="-2.000123mm"
            pcbY="-4.499991mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin135"]}
            pcbX="-2.000123mm"
            pcbY="-4.999863mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin136"]}
            pcbX="-2.000123mm"
            pcbY="-5.499989mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin137"]}
            pcbX="-1.499997mm"
            pcbY="5.499989mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin138"]}
            pcbX="-1.499997mm"
            pcbY="5.000117mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin139"]}
            pcbX="-1.499997mm"
            pcbY="3.499993mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin140"]}
            pcbX="-1.499997mm"
            pcbY="2.499995mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin141"]}
            pcbX="-1.499997mm"
            pcbY="1.499997mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin142"]}
            pcbX="-1.499997mm"
            pcbY="1.000125mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin143"]}
            pcbX="-1.499997mm"
            pcbY="0.499999mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin144"]}
            pcbX="-1.499997mm"
            pcbY="-0.499999mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin145"]}
            pcbX="-1.499997mm"
            pcbY="-0.999871mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin146"]}
            pcbX="-1.499997mm"
            pcbY="-1.499997mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin147"]}
            pcbX="-1.499997mm"
            pcbY="-2.499995mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin148"]}
            pcbX="-1.499997mm"
            pcbY="-3.499993mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin149"]}
            pcbX="-1.499997mm"
            pcbY="-4.999863mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin150"]}
            pcbX="-1.499997mm"
            pcbY="-5.499989mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin151"]}
            pcbX="-1.000125mm"
            pcbY="5.499989mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin152"]}
            pcbX="-1.000125mm"
            pcbY="5.000117mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin153"]}
            pcbX="-1.000125mm"
            pcbY="3.499993mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin154"]}
            pcbX="-1.000125mm"
            pcbY="2.499995mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin155"]}
            pcbX="-1.000125mm"
            pcbY="2.000123mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin156"]}
            pcbX="-1.000125mm"
            pcbY="1.000125mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin157"]}
            pcbX="-1.000125mm"
            pcbY="0.000127mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin158"]}
            pcbX="-1.000125mm"
            pcbY="-0.999871mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin159"]}
            pcbX="-1.000125mm"
            pcbY="-1.999869mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin160"]}
            pcbX="-1.000125mm"
            pcbY="-2.499995mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin161"]}
            pcbX="-1.000125mm"
            pcbY="-3.499993mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin162"]}
            pcbX="-1.000125mm"
            pcbY="-4.999863mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin163"]}
            pcbX="-1.000125mm"
            pcbY="-5.499989mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin164"]}
            pcbX="-0.499999mm"
            pcbY="5.499989mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin165"]}
            pcbX="-0.499999mm"
            pcbY="5.000117mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin166"]}
            pcbX="-0.499999mm"
            pcbY="4.499991mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin167"]}
            pcbX="-0.499999mm"
            pcbY="4.000119mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin168"]}
            pcbX="-0.499999mm"
            pcbY="3.499993mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin169"]}
            pcbX="-0.499999mm"
            pcbY="2.499995mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin170"]}
            pcbX="-0.499999mm"
            pcbY="1.499997mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin171"]}
            pcbX="-0.499999mm"
            pcbY="0.499999mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin172"]}
            pcbX="-0.499999mm"
            pcbY="-0.499999mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin173"]}
            pcbX="-0.499999mm"
            pcbY="-1.499997mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin174"]}
            pcbX="-0.499999mm"
            pcbY="-2.499995mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin175"]}
            pcbX="-0.499999mm"
            pcbY="-3.499993mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin176"]}
            pcbX="-0.499999mm"
            pcbY="-3.999865mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin177"]}
            pcbX="-0.499999mm"
            pcbY="-4.499991mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin178"]}
            pcbX="-0.499999mm"
            pcbY="-4.999863mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin179"]}
            pcbX="-0.499999mm"
            pcbY="-5.499989mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin180"]}
            pcbX="-0.000127mm"
            pcbY="5.499989mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin181"]}
            pcbX="-0.000127mm"
            pcbY="5.000117mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin182"]}
            pcbX="-0.000127mm"
            pcbY="4.499991mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin183"]}
            pcbX="-0.000127mm"
            pcbY="3.499993mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin184"]}
            pcbX="-0.000127mm"
            pcbY="2.499995mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin185"]}
            pcbX="-0.000127mm"
            pcbY="2.000123mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin186"]}
            pcbX="-0.000127mm"
            pcbY="1.000125mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin187"]}
            pcbX="-0.000127mm"
            pcbY="0.000127mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin188"]}
            pcbX="-0.000127mm"
            pcbY="-0.999871mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin189"]}
            pcbX="-0.000127mm"
            pcbY="-1.999869mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin190"]}
            pcbX="-0.000127mm"
            pcbY="-2.499995mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin191"]}
            pcbX="-0.000127mm"
            pcbY="-3.499993mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin192"]}
            pcbX="-0.000127mm"
            pcbY="-4.499991mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin193"]}
            pcbX="-0.000127mm"
            pcbY="-4.999863mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin194"]}
            pcbX="-0.000127mm"
            pcbY="-5.499989mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin195"]}
            pcbX="0.499999mm"
            pcbY="5.499989mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin196"]}
            pcbX="0.499999mm"
            pcbY="5.000117mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin197"]}
            pcbX="0.499999mm"
            pcbY="4.499991mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin198"]}
            pcbX="0.499999mm"
            pcbY="4.000119mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin199"]}
            pcbX="0.499999mm"
            pcbY="3.499993mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin200"]}
            pcbX="0.499999mm"
            pcbY="2.499995mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin201"]}
            pcbX="0.499999mm"
            pcbY="1.499997mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin202"]}
            pcbX="0.499999mm"
            pcbY="0.499999mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin203"]}
            pcbX="0.499999mm"
            pcbY="-0.499999mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin204"]}
            pcbX="0.499999mm"
            pcbY="-1.499997mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin205"]}
            pcbX="0.499999mm"
            pcbY="-2.499995mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin206"]}
            pcbX="0.499999mm"
            pcbY="-3.499993mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin207"]}
            pcbX="0.499999mm"
            pcbY="-3.999865mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin208"]}
            pcbX="0.499999mm"
            pcbY="-4.499991mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin209"]}
            pcbX="0.499999mm"
            pcbY="-4.999863mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin210"]}
            pcbX="0.499999mm"
            pcbY="-5.499989mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin211"]}
            pcbX="0.999871mm"
            pcbY="5.499989mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin212"]}
            pcbX="0.999871mm"
            pcbY="5.000117mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin213"]}
            pcbX="0.999871mm"
            pcbY="3.499993mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin214"]}
            pcbX="0.999871mm"
            pcbY="2.499995mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin215"]}
            pcbX="0.999871mm"
            pcbY="2.000123mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin216"]}
            pcbX="0.999871mm"
            pcbY="1.000125mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin217"]}
            pcbX="0.999871mm"
            pcbY="0.000127mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin218"]}
            pcbX="0.999871mm"
            pcbY="-0.999871mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin219"]}
            pcbX="0.999871mm"
            pcbY="-1.999869mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin220"]}
            pcbX="0.999871mm"
            pcbY="-2.499995mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin221"]}
            pcbX="0.999871mm"
            pcbY="-3.499993mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin222"]}
            pcbX="0.999871mm"
            pcbY="-4.999863mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin223"]}
            pcbX="0.999871mm"
            pcbY="-5.499989mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin224"]}
            pcbX="1.499997mm"
            pcbY="5.499989mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin225"]}
            pcbX="1.499997mm"
            pcbY="5.000117mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin226"]}
            pcbX="1.499997mm"
            pcbY="3.499993mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin227"]}
            pcbX="1.499997mm"
            pcbY="2.499995mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin228"]}
            pcbX="1.499997mm"
            pcbY="1.499997mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin229"]}
            pcbX="1.499997mm"
            pcbY="1.000125mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin230"]}
            pcbX="1.499997mm"
            pcbY="0.499999mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin231"]}
            pcbX="1.499997mm"
            pcbY="-0.499999mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin232"]}
            pcbX="1.499997mm"
            pcbY="-0.999871mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin233"]}
            pcbX="1.499997mm"
            pcbY="-1.499997mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin234"]}
            pcbX="1.499997mm"
            pcbY="-2.499995mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin235"]}
            pcbX="1.499997mm"
            pcbY="-3.499993mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin236"]}
            pcbX="1.499997mm"
            pcbY="-4.999863mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin237"]}
            pcbX="1.499997mm"
            pcbY="-5.499989mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin238"]}
            pcbX="1.999869mm"
            pcbY="5.499989mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin239"]}
            pcbX="1.999869mm"
            pcbY="5.000117mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin240"]}
            pcbX="1.999869mm"
            pcbY="4.499991mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin241"]}
            pcbX="1.999869mm"
            pcbY="4.000119mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin242"]}
            pcbX="1.999869mm"
            pcbY="3.499993mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin243"]}
            pcbX="1.999869mm"
            pcbY="2.499995mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin244"]}
            pcbX="1.999869mm"
            pcbY="2.000123mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin245"]}
            pcbX="1.999869mm"
            pcbY="1.499997mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin246"]}
            pcbX="1.999869mm"
            pcbY="1.000125mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin247"]}
            pcbX="1.999869mm"
            pcbY="0.499999mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin248"]}
            pcbX="1.999869mm"
            pcbY="0.000127mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin249"]}
            pcbX="1.999869mm"
            pcbY="-0.499999mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin250"]}
            pcbX="1.999869mm"
            pcbY="-0.999871mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin251"]}
            pcbX="1.999869mm"
            pcbY="-1.499997mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin252"]}
            pcbX="1.999869mm"
            pcbY="-1.999869mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin253"]}
            pcbX="1.999869mm"
            pcbY="-2.499995mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin254"]}
            pcbX="1.999869mm"
            pcbY="-3.499993mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin255"]}
            pcbX="1.999869mm"
            pcbY="-3.999865mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin256"]}
            pcbX="1.999869mm"
            pcbY="-4.499991mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin257"]}
            pcbX="1.999869mm"
            pcbY="-4.999863mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin258"]}
            pcbX="1.999869mm"
            pcbY="-5.499989mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin259"]}
            pcbX="2.499995mm"
            pcbY="5.499989mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin260"]}
            pcbX="2.499995mm"
            pcbY="5.000117mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin261"]}
            pcbX="2.499995mm"
            pcbY="4.000119mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin262"]}
            pcbX="2.499995mm"
            pcbY="2.499995mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin263"]}
            pcbX="2.499995mm"
            pcbY="2.000123mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin264"]}
            pcbX="2.499995mm"
            pcbY="0.499999mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin265"]}
            pcbX="2.499995mm"
            pcbY="0.000127mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin266"]}
            pcbX="2.499995mm"
            pcbY="-0.499999mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin267"]}
            pcbX="2.499995mm"
            pcbY="-1.999869mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin268"]}
            pcbX="2.499995mm"
            pcbY="-2.499995mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin269"]}
            pcbX="2.499995mm"
            pcbY="-3.999865mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin270"]}
            pcbX="2.499995mm"
            pcbY="-4.999863mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin271"]}
            pcbX="2.499995mm"
            pcbY="-5.499989mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin272"]}
            pcbX="2.999867mm"
            pcbY="5.499989mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin273"]}
            pcbX="2.999867mm"
            pcbY="5.000117mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin274"]}
            pcbX="2.999867mm"
            pcbY="4.499991mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin275"]}
            pcbX="2.999867mm"
            pcbY="4.000119mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin276"]}
            pcbX="2.999867mm"
            pcbY="3.499993mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin277"]}
            pcbX="2.999867mm"
            pcbY="3.000121mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin278"]}
            pcbX="2.999867mm"
            pcbY="2.000123mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin279"]}
            pcbX="2.999867mm"
            pcbY="0.499999mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin280"]}
            pcbX="2.999867mm"
            pcbY="-0.499999mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin281"]}
            pcbX="2.999867mm"
            pcbY="-1.999869mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin282"]}
            pcbX="2.999867mm"
            pcbY="-2.999867mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin283"]}
            pcbX="2.999867mm"
            pcbY="-3.499993mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin284"]}
            pcbX="2.999867mm"
            pcbY="-3.999865mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin285"]}
            pcbX="2.999867mm"
            pcbY="-4.499991mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin286"]}
            pcbX="2.999867mm"
            pcbY="-4.999863mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin287"]}
            pcbX="2.999867mm"
            pcbY="-5.499989mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin288"]}
            pcbX="3.499993mm"
            pcbY="5.499989mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin289"]}
            pcbX="3.499993mm"
            pcbY="5.000117mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin290"]}
            pcbX="3.499993mm"
            pcbY="3.000121mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin291"]}
            pcbX="3.499993mm"
            pcbY="2.000123mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin292"]}
            pcbX="3.499993mm"
            pcbY="0.499999mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin293"]}
            pcbX="3.499993mm"
            pcbY="0.000127mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin294"]}
            pcbX="3.499993mm"
            pcbY="-0.499999mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin295"]}
            pcbX="3.499993mm"
            pcbY="-1.999869mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin296"]}
            pcbX="3.499993mm"
            pcbY="-2.999867mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin297"]}
            pcbX="3.499993mm"
            pcbY="-4.999863mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin298"]}
            pcbX="3.499993mm"
            pcbY="-5.499989mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin299"]}
            pcbX="3.999865mm"
            pcbY="5.499989mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin300"]}
            pcbX="3.999865mm"
            pcbY="5.000117mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin301"]}
            pcbX="3.999865mm"
            pcbY="4.499991mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin302"]}
            pcbX="3.999865mm"
            pcbY="4.000119mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin303"]}
            pcbX="3.999865mm"
            pcbY="3.000121mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin304"]}
            pcbX="3.999865mm"
            pcbY="2.499995mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin305"]}
            pcbX="3.999865mm"
            pcbY="2.000123mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin306"]}
            pcbX="3.999865mm"
            pcbY="0.499999mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin307"]}
            pcbX="3.999865mm"
            pcbY="-0.499999mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin308"]}
            pcbX="3.999865mm"
            pcbY="-1.999869mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin309"]}
            pcbX="3.999865mm"
            pcbY="-2.499995mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin310"]}
            pcbX="3.999865mm"
            pcbY="-2.999867mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin311"]}
            pcbX="3.999865mm"
            pcbY="-3.999865mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin312"]}
            pcbX="3.999865mm"
            pcbY="-4.499991mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin313"]}
            pcbX="3.999865mm"
            pcbY="-4.999863mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin314"]}
            pcbX="3.999865mm"
            pcbY="-5.499989mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin315"]}
            pcbX="4.499991mm"
            pcbY="5.499989mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin316"]}
            pcbX="4.499991mm"
            pcbY="5.000117mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin317"]}
            pcbX="4.499991mm"
            pcbY="4.000119mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin318"]}
            pcbX="4.499991mm"
            pcbY="3.000121mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin319"]}
            pcbX="4.499991mm"
            pcbY="2.000123mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin320"]}
            pcbX="4.499991mm"
            pcbY="0.499999mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin321"]}
            pcbX="4.499991mm"
            pcbY="0.000127mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin322"]}
            pcbX="4.499991mm"
            pcbY="-0.499999mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin323"]}
            pcbX="4.499991mm"
            pcbY="-1.999869mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin324"]}
            pcbX="4.499991mm"
            pcbY="-2.999867mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin325"]}
            pcbX="4.499991mm"
            pcbY="-3.999865mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin326"]}
            pcbX="4.499991mm"
            pcbY="-4.999863mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin327"]}
            pcbX="4.499991mm"
            pcbY="-5.499989mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin328"]}
            pcbX="4.999863mm"
            pcbY="5.499989mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin329"]}
            pcbX="4.999863mm"
            pcbY="5.000117mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin330"]}
            pcbX="4.999863mm"
            pcbY="4.499991mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin331"]}
            pcbX="4.999863mm"
            pcbY="4.000119mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin332"]}
            pcbX="4.999863mm"
            pcbY="3.499993mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin333"]}
            pcbX="4.999863mm"
            pcbY="3.000121mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin334"]}
            pcbX="4.999863mm"
            pcbY="2.499995mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin335"]}
            pcbX="4.999863mm"
            pcbY="2.000123mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin336"]}
            pcbX="4.999863mm"
            pcbY="1.499997mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin337"]}
            pcbX="4.999863mm"
            pcbY="1.000125mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin338"]}
            pcbX="4.999863mm"
            pcbY="0.499999mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin339"]}
            pcbX="4.999863mm"
            pcbY="0.000127mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin340"]}
            pcbX="4.999863mm"
            pcbY="-0.499999mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin341"]}
            pcbX="4.999863mm"
            pcbY="-0.999871mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin342"]}
            pcbX="4.999863mm"
            pcbY="-1.499997mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin343"]}
            pcbX="4.999863mm"
            pcbY="-1.999869mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin344"]}
            pcbX="4.999863mm"
            pcbY="-2.499995mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin345"]}
            pcbX="4.999863mm"
            pcbY="-2.999867mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin346"]}
            pcbX="4.999863mm"
            pcbY="-3.499993mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin347"]}
            pcbX="4.999863mm"
            pcbY="-3.999865mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin348"]}
            pcbX="4.999863mm"
            pcbY="-4.499991mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin349"]}
            pcbX="4.999863mm"
            pcbY="-4.999863mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin350"]}
            pcbX="4.999863mm"
            pcbY="-5.499989mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin351"]}
            pcbX="5.499989mm"
            pcbY="5.499989mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin352"]}
            pcbX="5.499989mm"
            pcbY="5.000117mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin353"]}
            pcbX="5.499989mm"
            pcbY="4.499991mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin354"]}
            pcbX="5.499989mm"
            pcbY="4.000119mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin355"]}
            pcbX="5.499989mm"
            pcbY="3.499993mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin356"]}
            pcbX="5.499989mm"
            pcbY="3.000121mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin357"]}
            pcbX="5.499989mm"
            pcbY="2.499995mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin358"]}
            pcbX="5.499989mm"
            pcbY="2.000123mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin359"]}
            pcbX="5.499989mm"
            pcbY="1.499997mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin360"]}
            pcbX="5.499989mm"
            pcbY="1.000125mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin361"]}
            pcbX="5.499989mm"
            pcbY="0.499999mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin362"]}
            pcbX="5.499989mm"
            pcbY="0.000127mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin363"]}
            pcbX="5.499989mm"
            pcbY="-0.499999mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin364"]}
            pcbX="5.499989mm"
            pcbY="-0.999871mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin365"]}
            pcbX="5.499989mm"
            pcbY="-1.499997mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin366"]}
            pcbX="5.499989mm"
            pcbY="-1.999869mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin367"]}
            pcbX="5.499989mm"
            pcbY="-2.499995mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin368"]}
            pcbX="5.499989mm"
            pcbY="-2.999867mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin369"]}
            pcbX="5.499989mm"
            pcbY="-3.499993mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin370"]}
            pcbX="5.499989mm"
            pcbY="-3.999865mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin371"]}
            pcbX="5.499989mm"
            pcbY="-4.499991mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin372"]}
            pcbX="5.499989mm"
            pcbY="-4.999863mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin373"]}
            pcbX="5.499989mm"
            pcbY="-5.499989mm"
            radius="0.1200023mm"
            shape="circle"
          />
          <silkscreenpath
            route={[
              { x: -6.026302399999992, y: 6.026302400000006 },
              { x: 6.026073800000006, y: 6.026302400000006 },
              { x: 6.026073800000006, y: -6.026073799999992 },
              { x: -6.026302399999992, y: -6.026073799999992 },
              { x: -6.026302399999992, y: 6.026302400000006 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -6.3763905999999935, y: 5.499988999999999 },
              { x: -6.381502148576374, y: 5.4611629338784695 },
              { x: -6.396488450717328, y: 5.424982800000009 },
              { x: -6.420328214697932, y: 5.393914214697929 },
              { x: -6.451396799999998, y: 5.3700744507173255 },
              { x: -6.487576933878458, y: 5.3550881485763995 },
              { x: -6.526402999999988, y: 5.349976600000005 },
              { x: -6.565229066121532, y: 5.3550881485763995 },
              { x: -6.601409199999992, y: 5.3700744507173255 },
              { x: -6.632477785302072, y: 5.393914214697929 },
              { x: -6.656317549282676, y: 5.424982800000009 },
              { x: -6.671303851423602, y: 5.4611629338784695 },
              { x: -6.676415399999996, y: 5.499988999999999 },
              { x: -6.671303851423602, y: 5.538815066121543 },
              { x: -6.656317549282676, y: 5.574995200000004 },
              { x: -6.632477785302072, y: 5.606063785302069 },
              { x: -6.601409199999992, y: 5.629903549282687 },
              { x: -6.565229066121532, y: 5.644889851423599 },
              { x: -6.526402999999988, y: 5.650001399999994 },
              { x: -6.487576933878458, y: 5.644889851423599 },
              { x: -6.451396799999998, y: 5.629903549282687 },
              { x: -6.420328214697932, y: 5.606063785302069 },
              { x: -6.396488450717328, y: 5.574995200000004 },
              { x: -6.381502148576374, y: 5.538815066121543 },
              { x: -6.3763905999999935, y: 5.499988999999999 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -6.254902399999992, y: 5.666308199999989 },
              { x: -6.254902399999992, y: 6.254902399999992 },
              { x: -5.666308199999975, y: 6.254902399999992 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.330327mm"
            pcbY="7.248527mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -6.930326999999991, y: 6.498526999999996 },
              { x: 6.269673000000012, y: 6.498526999999996 },
              { x: 6.269673000000012, y: -6.295072999999988 },
              { x: -6.930326999999991, y: -6.295072999999988 },
              { x: -6.930326999999991, y: 6.498526999999996 },
            ]}
          />
        </footprint>
      }
      {...props}
    />
  );
};

export default AM62L32BEGHAANBR;
