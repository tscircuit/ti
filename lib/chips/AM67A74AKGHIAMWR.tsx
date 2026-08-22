import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["A21", "A1", "A21_A1"],
  pin2: ["WKUP_LFOSC0_XO", "A2"],
  pin3: ["WKUP_LFOSC0_XI", "A3"],
  pin4: ["VSS", "A4", "VSS_A4"],
  pin5: ["MCU_OSC0_XI", "A5"],
  pin6: ["MCU_OSC0_XO", "A6"],
  pin7: ["VSS", "A7", "VSS_A7"],
  pin8: ["PMIC_LPM_EN0", "A8"],
  pin9: ["MCU_SPI0_CLK", "A9"],
  pin10: ["MCU_PADCONFIG1", "A10"],
  pin11: ["TCK", "A11"],
  pin12: ["SERDES1_TX0_N", "A13"],
  pin13: ["SERDES1_TX0_P", "A14"],
  pin14: ["SERDES0_REFCLK0P", "A16"],
  pin15: ["SERDES0_REFCLK0N", "A17"],
  pin16: ["VSS", "A18", "VSS_A18"],
  pin17: ["SERDES0_RX0_P", "A19"],
  pin18: ["SERDES0_RX0_N", "A20"],
  pin19: ["VSS", "A21", "VSS_A21"],
  pin20: ["PADCONFIG123", "A22"],
  pin21: ["EXT_REFCLK1", "A23"],
  pin22: ["MMC1_SDWP", "A24"],
  pin23: ["MCASP0_AXR3", "A25"],
  pin24: ["MCASP0_AXR2", "A26"],
  pin25: ["A21", "A27", "A21_A27"],
  pin26: ["MCU_PADCONFIG16", "B1"],
  pin27: ["MCU_MCAN0_TX", "B2"],
  pin28: ["WKUP_UART0_RXD", "B3"],
  pin29: ["MCU_UART0_TXD", "B4"],
  pin30: ["MCU_PADCONFIG7", "B5"],
  pin31: ["RSVD16", "B6"],
  pin32: ["MCU_ERRORN", "B7"],
  pin33: ["MCU_UART0_RXD", "B8"],
  pin34: ["WKUP_I2C0_SCL", "B9"],
  pin35: ["TRSTN", "B10"],
  pin36: ["MCU_SPI0_D0", "B12"],
  pin37: ["MCU_I2C0_SCL", "B13"],
  pin38: ["SERDES1_REFCLK0N", "B15"],
  pin39: ["SERDES1_REFCLK0P", "B16"],
  pin40: ["SERDES0_TX0_P", "B18"],
  pin41: ["SERDES0_TX0_N", "B19"],
  pin42: ["SPI0_CS0", "B20"],
  pin43: ["UART0_RTSN", "B21"],
  pin44: ["PADCONFIG121", "B22"],
  pin45: ["EXTINTN", "B23"],
  pin46: ["PADCONFIG144", "B24"],
  pin47: ["MCASP0_AXR1", "B25"],
  pin48: ["USB1_DRVVBUS", "B27"],
  pin49: ["MCU_MCAN1_TX", "C1"],
  pin50: ["VSS", "C2", "VSS_C2"],
  pin51: ["MCU_PADCONFIG12", "C3"],
  pin52: ["MCU_PADCONFIG11", "C4"],
  pin53: ["MCU_UART0_RTSN", "C5"],
  pin54: ["RSVD14", "C6"],
  pin55: ["WKUP_UART0_TXD", "C8"],
  pin56: ["EMU0", "C9"],
  pin57: ["MCU_SPI0_D1", "C11"],
  pin58: ["MCU_SPI0_CS0", "C12"],
  pin59: ["SERDES1_RX0_N", "C14"],
  pin60: ["SERDES1_RX0_P", "C15"],
  pin61: ["RSVD17", "C17"],
  pin62: ["SPI0_CS1", "C20"],
  pin63: ["PADCONFIG119", "C22"],
  pin64: ["VSS", "C23", "VSS_C23"],
  pin65: ["I2C1_SCL", "C24"],
  pin66: ["MCASP0_AFSX", "C26"],
  pin67: ["MCASP0_AFSR", "C27"],
  pin68: ["VDDSHV_MCU", "D1", "VDDSHV_MCU_D1"],
  pin69: ["DDR0_DQ1", "D2"],
  pin70: ["DDR0_DQ3", "D3"],
  pin71: ["DDR0_DQ0", "D6"],
  pin72: ["MCU_PADCONFIG14", "D8"],
  pin73: ["MCU_RESETZ", "D10"],
  pin74: ["WKUP_I2C0_SDA", "D11"],
  pin75: ["RSVD20", "D13"],
  pin76: ["RSVD19", "D14"],
  pin77: ["RSVD18", "D16"],
  pin78: ["USB1_DP", "D17"],
  pin79: ["SPI0_CLK", "D20"],
  pin80: ["PADCONFIG118", "D22"],
  pin81: ["I2C0_SCL", "D23"],
  pin82: ["MCASP0_ACLKX", "D25"],
  pin83: ["A21", "D26", "A21_D26"],
  pin84: ["PORZ_OUT", "D27"],
  pin85: ["DDR0_DQS0", "E1"],
  pin86: ["DDR0_DQ5", "E2"],
  pin87: ["VSS", "E6", "VSS_E6"],
  pin88: ["MCU_PORZ", "E8"],
  pin89: ["RSVD0", "E9"],
  pin90: ["MCU_I2C0_SDA", "E11"],
  pin91: ["TDI", "E12"],
  pin92: ["MCU_RESETSTATZ", "E13"],
  pin93: ["SERDES0_REXT", "E15"],
  pin94: ["USB1_DM", "E17"],
  pin95: ["USB1_RCALIB", "E18"],
  pin96: ["PADCONFIG112", "E19"],
  pin97: ["PADCONFIG113", "E20"],
  pin98: ["UART0_CTSN", "E22"],
  pin99: ["USB0_DRVVBUS", "E25"],
  pin100: ["RESET_REQZ", "E26"],
  pin101: ["RESETSTATZ", "E27"],
  pin102: ["DDR0_DQS0_N", "F1"],
  pin103: ["VSS", "F2", "VSS_F2"],
  pin104: ["DDR0_DQ7", "F3"],
  pin105: ["DDR0_DQ2", "F6"],
  pin106: ["RSVD15", "F8"],
  pin107: ["EMU1", "F9"],
  pin108: ["TDO", "F10"],
  pin109: ["TMS", "F11"],
  pin110: ["WKUP_CLKOUT0", "F12"],
  pin111: ["SERDES1_REXT", "F14"],
  pin112: ["VSS", "F15", "VSS_F15"],
  pin113: ["A21", "F16", "A21_F16"],
  pin114: ["VSS", "F17", "VSS_F17"],
  pin115: ["USB1_VBUS", "F18"],
  pin116: ["UART0_RXD", "F19"],
  pin117: ["UART0_TXD", "F20"],
  pin118: ["VSS", "F21", "VSS_F21"],
  pin119: ["MCASP0_AXR0", "F23"],
  pin120: ["PADCONFIG108", "F24"],
  pin121: ["PCIE0_CLKREQN", "F25"],
  pin122: ["PADCONFIG73", "F26"],
  pin123: ["PADCONFIG72", "F27"],
  pin124: ["VSS", "G1", "VSS_G1"],
  pin125: ["DDR0_DM0", "G2"],
  pin126: ["A21", "G3", "A21_G3"],
  pin127: ["DDR0_DQ4", "G4"],
  pin128: ["VSS", "G5", "VSS_G5"],
  pin129: ["DDR0_DQ6", "G6"],
  pin130: ["VMON_ER_VSYS", "G7"],
  pin131: ["VSS", "G8", "VSS_G8"],
  pin132: ["VPP", "G9"],
  pin133: ["VSS", "G10", "VSS_G10"],
  pin134: ["VDDA_MCU", "G11", "VDDA_MCU_G11"],
  pin135: ["VSS", "G12", "VSS_G12"],
  pin136: ["VDDA_1P8_SERDES", "G13"],
  pin137: ["VSS", "G14", "VSS_G14"],
  pin138: ["VDDA_3P3_USB1", "G15"],
  pin139: ["VSS", "G16", "VSS_G16"],
  pin140: ["VSS", "G17", "VSS_G17"],
  pin141: ["VDDSHV0", "G18", "VDDSHV0_G18"],
  pin142: ["CAP_VDDS5", "G19"],
  pin143: ["VSS", "G20", "VSS_G20"],
  pin144: ["PADCONFIG69", "G26"],
  pin145: ["PADCONFIG68", "G27"],
  pin146: ["DDR0_DQS1", "H1"],
  pin147: ["DDR0_DQ9", "H2"],
  pin148: ["DDR0_DQ15", "H3"],
  pin149: ["VSS", "H4", "VSS_H4"],
  pin150: ["DDR0_DQ8", "H5"],
  pin151: ["DDR0_DM1", "H6"],
  pin152: ["VSS", "H7", "VSS_H7"],
  pin153: ["CAP_VDDS_CANUART", "H8"],
  pin154: ["VDDSHV_CANUART", "H9"],
  pin155: ["VDDSHV_MCU", "H10", "VDDSHV_MCU_H10"],
  pin156: ["VDDA_MCU", "H11", "VDDA_MCU_H11"],
  pin157: ["VDDA_0P85_SERDES", "H12", "VDDA_0P85_SERDES_H12"],
  pin158: ["VDDA_0P85_SERDES", "H13", "VDDA_0P85_SERDES_H13"],
  pin159: ["A21", "H14", "A21_H14"],
  pin160: ["VDDA_CORE_USB1", "H15"],
  pin161: ["VDDA_1P8_USB1", "H16"],
  pin162: ["CAP_VDDS0", "H17"],
  pin163: ["VDDSHV0", "H18", "VDDSHV0_H18"],
  pin164: ["VDDSHV5", "H19"],
  pin165: ["PADCONFIG139", "H20"],
  pin166: ["PADCONFIG74", "H21"],
  pin167: ["PADCONFIG143", "H22"],
  pin168: ["MMC1_DAT0", "H23"],
  pin169: ["PADCONFIG141", "H24"],
  pin170: ["PADCONFIG137", "H25"],
  pin171: ["MMC2_CLK", "H26"],
  pin172: ["MMC2_DAT2", "H27"],
  pin173: ["DDR0_DQS1_N", "J1"],
  pin174: ["DDR0_DQ14", "J2"],
  pin175: ["VSS", "J3", "VSS_J3"],
  pin176: ["DDR0_DQ13", "J4"],
  pin177: ["VSS", "J5", "VSS_J5"],
  pin178: ["DDR0_DQ12", "J6"],
  pin179: ["VMON_1P8_SOC", "J7"],
  pin180: ["VDD_CANUART", "J8", "VDD_CANUART_J8"],
  pin181: ["VSS", "J9", "VSS_J9"],
  pin182: ["CAP_VDDS_MCU", "J10"],
  pin183: ["J16", "J11", "J16_J11"],
  pin184: ["A21", "J12", "A21_J12"],
  pin185: ["VDDA_0P85_SERDES_C", "J13"],
  pin186: ["VDD_CANUART", "J14", "VDD_CANUART_J14"],
  pin187: ["VSS", "J15", "VSS_J15"],
  pin188: ["VDD_CANUART", "J16", "VDD_CANUART_J16"],
  pin189: ["VSS", "J17", "VSS_J17"],
  pin190: ["VDD_CANUART", "J18", "VDD_CANUART_J18"],
  pin191: ["A21", "J19", "A21_J19"],
  pin192: ["CAP_VDDS6", "J20"],
  pin193: ["VDDSHV6", "J21"],
  pin194: ["OSPI0_CSN3", "J22"],
  pin195: ["PADCONFIG138", "J23"],
  pin196: ["VSS", "J26", "VSS_J26"],
  pin197: ["PADCONFIG66", "J27"],
  pin198: ["VSS", "K1", "VSS_K1"],
  pin199: ["DDR0_DQ10", "K2"],
  pin200: ["VMON_3P3_SOC", "K7"],
  pin201: ["VDDS_OSC0", "K8"],
  pin202: ["VDD_CANUART", "K9", "VDD_CANUART_K9"],
  pin203: ["VDDA_PLL1", "K10"],
  pin204: ["VDD_CANUART", "K11", "VDD_CANUART_K11"],
  pin205: ["VDD_CANUART", "K12", "VDD_CANUART_K12"],
  pin206: ["VSS", "K13", "VSS_K13"],
  pin207: ["VDD_CANUART", "K14", "VDD_CANUART_K14"],
  pin208: ["VSS", "K15", "VSS_K15"],
  pin209: ["J16", "K16", "J16_K16"],
  pin210: ["VSS", "K17", "VSS_K17"],
  pin211: ["VDD_CANUART", "K18", "VDD_CANUART_K18"],
  pin212: ["VSS", "K19", "VSS_K19"],
  pin213: ["VDDSHV1", "K20", "VDDSHV1_K20"],
  pin214: ["OSPI0_CSN2", "K22"],
  pin215: ["OSPI0_CSN1", "K23"],
  pin216: ["OSPI0_CSN0", "K26"],
  pin217: ["OSPI0_D0", "K27"],
  pin218: ["DDR0_DQ11", "L1"],
  pin219: ["DDR0_A5", "L2"],
  pin220: ["DDR0_A3", "L3"],
  pin221: ["DDR0_A0", "L4"],
  pin222: ["RSVD10", "L5"],
  pin223: ["DDR0_A1", "L6"],
  pin224: ["VDDSHV_MCU", "L7", "VDDSHV_MCU_L7"],
  pin225: ["VDDS_DDR", "L8", "VDDS_DDR_L8"],
  pin226: ["VDDA_TEMP2", "L9"],
  pin227: ["VSS", "L10", "VSS_L10"],
  pin228: ["VSS", "L11", "VSS_L11"],
  pin229: ["VDD_CANUART", "L12", "VDD_CANUART_L12"],
  pin230: ["VSS", "L13", "VSS_L13"],
  pin231: ["VSS", "L14", "VSS_L14"],
  pin232: ["VDDA_PLL0", "L15"],
  pin233: ["A21", "L16", "A21_L16"],
  pin234: ["VDD_CANUART", "L17", "VDD_CANUART_L17"],
  pin235: ["VSS", "L18", "VSS_L18"],
  pin236: ["CAP_VDDS1", "L19"],
  pin237: ["VDDSHV1", "L20", "VDDSHV1_L20"],
  pin238: ["OSPI0_D4", "L21"],
  pin239: ["OSPI0_DQS", "L22"],
  pin240: ["OSPI0_LBCLKO", "L23"],
  pin241: ["OSPI0_CLK", "L24"],
  pin242: ["OSPI0_D3", "L25"],
  pin243: ["OSPI0_D2", "L26"],
  pin244: ["OSPI0_D1", "L27"],
  pin245: ["VSS", "M1", "VSS_M1"],
  pin246: ["RSVD21", "M2"],
  pin247: ["DDR0_RAS_N", "M3"],
  pin248: ["DDR0_CAS_N", "M4"],
  pin249: ["DDR0_A2", "M5"],
  pin250: ["RSVD11", "M6"],
  pin251: ["VSS", "M7", "VSS_M7"],
  pin252: ["VSS", "M8", "VSS_M8"],
  pin253: ["VDD_CANUART", "M9", "VDD_CANUART_M9"],
  pin254: ["VDD_CANUART", "M10", "VDD_CANUART_M10"],
  pin255: ["VSS", "M11", "VSS_M11"],
  pin256: ["VDDA_PLL2", "M12"],
  pin257: ["VDDR_CORE", "M13", "VDDR_CORE_M13"],
  pin258: ["VSS", "M14", "VSS_M14"],
  pin259: ["VDD_CANUART", "M15", "VDD_CANUART_M15"],
  pin260: ["VSS", "M16", "VSS_M16"],
  pin261: ["VDD_CANUART", "M17", "VDD_CANUART_M17"],
  pin262: ["VSS", "M18", "VSS_M18"],
  pin263: ["VDDR_CORE", "M19", "VDDR_CORE_M19"],
  pin264: ["VDDSHV3", "M20", "VDDSHV3_M20"],
  pin265: ["OSPI0_D5", "M26"],
  pin266: ["OSPI0_D7", "M27"],
  pin267: ["DDR0_CK0_N", "N1"],
  pin268: ["DDR0_A4", "N2"],
  pin269: ["VDDS_DDR", "N7", "VDDS_DDR_N7"],
  pin270: ["VDDS_DDR", "N8", "VDDS_DDR_N8"],
  pin271: ["VSS", "N9", "VSS_N9"],
  pin272: ["VDD_CANUART", "N10", "VDD_CANUART_N10"],
  pin273: ["VDD_CANUART", "N11", "VDD_CANUART_N11"],
  pin274: ["VSS", "N12", "VSS_N12"],
  pin275: ["VDDR_CORE", "N13", "VDDR_CORE_N13"],
  pin276: ["VDD_CANUART", "N14", "VDD_CANUART_N14"],
  pin277: ["VSS", "N15", "VSS_N15"],
  pin278: ["VDD_CANUART", "N16", "VDD_CANUART_N16"],
  pin279: ["VSS", "N17", "VSS_N17"],
  pin280: ["VDD_CANUART", "N18", "VDD_CANUART_N18"],
  pin281: ["VDDR_CORE", "N19", "VDDR_CORE_N19"],
  pin282: ["CAP_VDDS3", "N20"],
  pin283: ["PADCONFIG33", "N21"],
  pin284: ["GPMC0_OEN_REN", "N22"],
  pin285: ["PADCONFIG35", "N23"],
  pin286: ["PADCONFIG40", "N24"],
  pin287: ["PADCONFIG41", "N25"],
  pin288: ["VSS", "N26", "VSS_N26"],
  pin289: ["OSPI0_D6", "N27"],
  pin290: ["DDR0_CK0", "P1"],
  pin291: ["DDR0_CKE0", "P2"],
  pin292: ["DDR0_CS1_N", "P3"],
  pin293: ["DDR0_CS0_N", "P4"],
  pin294: ["VSS", "P5", "VSS_P5"],
  pin295: ["DDR0_CKE1", "P6"],
  pin296: ["VSS", "P7", "VSS_P7"],
  pin297: ["VDDS_DDR_C", "P8"],
  pin298: ["VDDA_DDR_PLL0", "P9"],
  pin299: ["VSS", "P10", "VSS_P10"],
  pin300: ["VDD_CANUART", "P11", "VDD_CANUART_P11"],
  pin301: ["VDD_CORE", "P12", "VDD_CORE_P12"],
  pin302: ["VSS", "P13", "VSS_P13"],
  pin303: ["VDD_CORE", "P14", "VDD_CORE_P14"],
  pin304: ["VSS", "P15", "VSS_P15"],
  pin305: ["VDDA_PLL5", "P16"],
  pin306: ["VSS", "P17", "VSS_P17"],
  pin307: ["VDD_CORE", "P18", "VDD_CORE_P18"],
  pin308: ["VSS", "P19", "VSS_P19"],
  pin309: ["VDDSHV3", "P20", "VDDSHV3_P20"],
  pin310: ["GPMC0_CSN1", "P21"],
  pin311: ["PADCONFIG44", "P22"],
  pin312: ["GPMC0_CSN3", "P23"],
  pin313: ["PADCONFIG37", "P26"],
  pin314: ["PADCONFIG36", "P27"],
  pin315: ["VSS", "R1", "VSS_R1"],
  pin316: ["DDR0_DQ17", "R2"],
  pin317: ["DDR0_DQ20", "R3"],
  pin318: ["VSS", "R4", "VSS_R4"],
  pin319: ["DDR0_DQ18", "R5"],
  pin320: ["DDR0_CAL0", "R6"],
  pin321: ["VSS", "R7", "VSS_R7"],
  pin322: ["VSS", "R8", "VSS_R8"],
  pin323: ["VDD_CORE", "R9", "VDD_CORE_R9"],
  pin324: ["VSS", "R10", "VSS_R10"],
  pin325: ["VDDA_PLL3", "R11"],
  pin326: ["VDD_CORE", "R12", "VDD_CORE_R12"],
  pin327: ["VDD_CORE", "R13", "VDD_CORE_R13"],
  pin328: ["VSS", "R14", "VSS_R14"],
  pin329: ["VDD_CORE", "R15", "VDD_CORE_R15"],
  pin330: ["VSS", "R16", "VSS_R16"],
  pin331: ["VDD_CORE", "R17", "VDD_CORE_R17"],
  pin332: ["VSS", "R18", "VSS_R18"],
  pin333: ["VSS", "R19", "VSS_R19"],
  pin334: ["VDDSHV3", "R20", "VDDSHV3_R20"],
  pin335: ["GPMC0_AD0", "R22"],
  pin336: ["GPMC0_AD1", "R23"],
  pin337: ["GPMC0_AD2", "R26"],
  pin338: ["GPMC0_CSN0", "R27"],
  pin339: ["DDR0_DQS2", "T1"],
  pin340: ["DDR0_DQ19", "T2"],
  pin341: ["VDDS_DDR", "T7", "VDDS_DDR_T7"],
  pin342: ["VDDS_DDR", "T8", "VDDS_DDR_T8"],
  pin343: ["VDD_CORE", "T9", "VDD_CORE_T9"],
  pin344: ["VSS", "T10", "VSS_T10"],
  pin345: ["VDDA_TEMP1", "T11"],
  pin346: ["VSS", "T12", "VSS_T12"],
  pin347: ["VDD_CORE", "T13", "VDD_CORE_T13"],
  pin348: ["VSS", "T14", "VSS_T14"],
  pin349: ["VDD_CORE", "T15", "VDD_CORE_T15"],
  pin350: ["VSS", "T16", "VSS_T16"],
  pin351: ["VDD_CORE", "T17", "VDD_CORE_T17"],
  pin352: ["VSS", "T18", "VSS_T18"],
  pin353: ["VDDSHV2", "T19", "VDDSHV2_T19"],
  pin354: ["VDDSHV2", "T20", "VDDSHV2_T20"],
  pin355: ["GPMC0_AD6", "T21"],
  pin356: ["GPMC0_AD7", "T22"],
  pin357: ["GPMC0_CLK", "T23"],
  pin358: ["GPMC0_AD5", "T24"],
  pin359: ["GPMC0_AD4", "T25"],
  pin360: ["VSS", "T26", "VSS_T26"],
  pin361: ["GPMC0_AD3", "T27"],
  pin362: ["DDR0_DQS2_N", "U1"],
  pin363: ["DDR0_DQ21", "U2"],
  pin364: ["VSS", "U3", "VSS_U3"],
  pin365: ["DDR0_DM2", "U4"],
  pin366: ["DDR0_DQ22", "U5"],
  pin367: ["DDR0_RESET0_N", "U6"],
  pin368: ["VSS", "U7", "VSS_U7"],
  pin369: ["VDD_CORE", "U8", "VDD_CORE_U8"],
  pin370: ["VSS", "U9", "VSS_U9"],
  pin371: ["VDDR_CORE", "U10", "VDDR_CORE_U10"],
  pin372: ["VSS", "U11", "VSS_U11"],
  pin373: ["VDD_CORE", "U12", "VDD_CORE_U12"],
  pin374: ["VSS", "U13", "VSS_U13"],
  pin375: ["VDD_CORE", "U14", "VDD_CORE_U14"],
  pin376: ["VSS", "U15", "VSS_U15"],
  pin377: ["VDD_CORE", "U16", "VDD_CORE_U16"],
  pin378: ["VDDR_CORE", "U17", "VDDR_CORE_U17"],
  pin379: ["VSS", "U18", "VSS_U18"],
  pin380: ["VSS", "U19", "VSS_U19"],
  pin381: ["CAP_VDDS2", "U20"],
  pin382: ["PADCONFIG24", "U26"],
  pin383: ["PADCONFIG23", "U27"],
  pin384: ["VSS", "V1", "VSS_V1"],
  pin385: ["DDR0_DQ23", "V2"],
  pin386: ["DDR0_DQ16", "V3"],
  pin387: ["VSS", "V4", "VSS_V4"],
  pin388: ["DDR0_DQ26", "V5"],
  pin389: ["DDR0_DQ28", "V6"],
  pin390: ["VSS", "V7", "VSS_V7"],
  pin391: ["VDD_CORE", "V8", "VDD_CORE_V8"],
  pin392: ["VSS", "V9", "VSS_V9"],
  pin393: ["VDDR_CORE", "V10", "VDDR_CORE_V10"],
  pin394: ["VSS", "V11", "VSS_V11"],
  pin395: ["VDD_CORE", "V12", "VDD_CORE_V12"],
  pin396: ["VSS", "V13", "VSS_V13"],
  pin397: ["VDD_CORE", "V14", "VDD_CORE_V14"],
  pin398: ["VSS", "V15", "VSS_V15"],
  pin399: ["VDD_CORE", "V16", "VDD_CORE_V16"],
  pin400: ["VDDR_CORE", "V17", "VDDR_CORE_V17"],
  pin401: ["VDDA_PLL4", "V18"],
  pin402: ["VDD_CORE", "V19", "VDD_CORE_V19"],
  pin403: ["VSS", "V20", "VSS_V20"],
  pin404: ["PADCONFIG38", "V21"],
  pin405: ["GPMC0_AD14", "V22"],
  pin406: ["GPMC0_AD15", "V23"],
  pin407: ["GPMC0_AD13", "V24"],
  pin408: ["GPMC0_AD11", "V25"],
  pin409: ["GPMC0_AD12", "V26"],
  pin410: ["GPMC0_AD10", "V27"],
  pin411: ["DDR0_DQS3", "W1"],
  pin412: ["DDR0_DQ27", "W2"],
  pin413: ["DDR0_DQ29", "W3"],
  pin414: ["DDR0_DQ25", "W4"],
  pin415: ["VSS", "W5", "VSS_W5"],
  pin416: ["USB0_VBUS", "W7"],
  pin417: ["VSS", "W8", "VSS_W8"],
  pin418: ["VDDA_0P85_DLL_MMC0", "W9"],
  pin419: ["VDD_MMC0", "W10"],
  pin420: ["VDDA_CORE_USB0", "W11"],
  pin421: ["VSS", "W12", "VSS_W12"],
  pin422: ["VDDA_1P8_CSI_DSI", "W13", "VDDA_1P8_CSI_DSI_W13"],
  pin423: ["VSS", "W14", "VSS_W14"],
  pin424: ["VDDA_CORE_CSI_DSI", "W15", "VDDA_CORE_CSI_DSI_W15"],
  pin425: ["VDDA_1P8_CSI_DSI", "W16", "VDDA_1P8_CSI_DSI_W16"],
  pin426: ["VSS", "W17", "VSS_W17"],
  pin427: ["VDDA_1P8_OLDI0", "W18", "VDDA_1P8_OLDI0_W18"],
  pin428: ["VDD_CORE", "W19", "VDD_CORE_W19"],
  pin429: ["VSS", "W20", "VSS_W20"],
  pin430: ["PADCONFIG51", "W21"],
  pin431: ["PADCONFIG50", "W22"],
  pin432: ["VOUT0_DATA3", "W23"],
  pin433: ["VOUT0_DATA2", "W24"],
  pin434: ["VOUT0_DATA1", "W25"],
  pin435: ["GPMC0_WAIT1", "W26"],
  pin436: ["VOUT0_DATA0", "W27"],
  pin437: ["DDR0_DQS3_N", "Y1"],
  pin438: ["DDR0_DQ24", "Y2"],
  pin439: ["VSS", "Y7", "VSS_Y7"],
  pin440: ["VSS", "Y8", "VSS_Y8"],
  pin441: ["VDDS_MMC0", "Y9"],
  pin442: ["VSS", "Y10", "VSS_Y10"],
  pin443: ["VDDA_3P3_USB0", "Y11"],
  pin444: ["VDDA_1P8_USB0", "Y12"],
  pin445: ["VDDA_1P8_CSI_DSI", "Y13", "VDDA_1P8_CSI_DSI_Y13"],
  pin446: ["VSS", "Y14", "VSS_Y14"],
  pin447: ["VDDA_CORE_CSI_DSI", "Y15", "VDDA_CORE_CSI_DSI_Y15"],
  pin448: ["VDDA_CORE_CSI_DSI_CLK", "Y16"],
  pin449: ["VDDA_TEMP0", "Y17"],
  pin450: ["VSS", "Y18", "VSS_Y18"],
  pin451: ["VDDA_1P8_OLDI0", "Y19", "VDDA_1P8_OLDI0_Y19"],
  pin452: ["VDD_CORE", "Y20", "VDD_CORE_Y20"],
  pin453: ["VDD_CORE", "Y21", "VDD_CORE_Y21"],
  pin454: ["VOUT0_DATA6", "Y26"],
  pin455: ["VOUT0_DATA7", "Y27"],
  pin456: ["VSS", "AA1", "VSS_AA1"],
  pin457: ["DDR0_DM3", "AA2"],
  pin458: ["DDR0_DQ30", "AA3"],
  pin459: ["VSS", "AA4", "VSS_AA4"],
  pin460: ["DDR0_DQ31", "AA5"],
  pin461: ["USB0_DP", "AA6"],
  pin462: ["USB0_RCALIB", "AA8"],
  pin463: ["CSI1_RXRCALIB", "AA10"],
  pin464: ["RSVD5", "AA12"],
  pin465: ["RSVD9", "AA14"],
  pin466: ["RSVD8", "AA15"],
  pin467: ["DSI0_TXRCALIB", "AA16"],
  pin468: ["VSS", "AA18", "VSS_AA18"],
  pin469: ["RSVD1", "AA19"],
  pin470: ["OLDI0_A7P", "AA20"],
  pin471: ["A21", "AA21", "A21_AA21"],
  pin472: ["VOUT0_DATA13", "AA22"],
  pin473: ["PADCONFIG58", "AA23"],
  pin474: ["VOUT0_DATA8", "AA24"],
  pin475: ["PADCONFIG56", "AA25"],
  pin476: ["VSS", "AA26", "VSS_AA26"],
  pin477: ["VOUT0_DATA9", "AA27"],
  pin478: ["L7", "AB1"],
  pin479: ["MMC0_DAT7", "AB2"],
  pin480: ["MMC0_DAT5", "AB3"],
  pin481: ["MMC0_DAT2", "AB4"],
  pin482: ["USB0_DM", "AB5"],
  pin483: ["RSVD2", "AB7"],
  pin484: ["CSI0_RXRCALIB", "AB8"],
  pin485: ["RSVD4", "AB10"],
  pin486: ["RSVD6", "AB12"],
  pin487: ["RSVD7", "AB13"],
  pin488: ["CSI2_RXRCALIB", "AB14"],
  pin489: ["CSI3_RXRCALIB", "AB15"],
  pin490: ["RSVD12", "AB16"],
  pin491: ["RSVD13", "AB18"],
  pin492: ["OLDI0_A7N", "AB19"],
  pin493: ["OLDI0_A2N", "AB20"],
  pin494: ["OLDI0_A2P", "AB21"],
  pin495: ["PADCONFIG64", "AB23"],
  pin496: ["VOUT0_HSYNC", "AB24"],
  pin497: ["PADCONFIG57", "AB25"],
  pin498: ["VOUT0_DATA14", "AB26"],
  pin499: ["VOUT0_DATA15", "AB27"],
  pin500: ["MMC0_CALPAD", "AC1"],
  pin501: ["MMC0_DAT3", "AC2"],
  pin502: ["MMC0_DAT4", "AC3"],
  pin503: ["RSVD3", "AC5"],
  pin504: ["CSI0_RXCLKP", "AC6"],
  pin505: ["CSI0_RXCLKN", "AC7"],
  pin506: ["CSI1_RXP3", "AC9"],
  pin507: ["CSI1_RXN3", "AC10"],
  pin508: ["CSI2_RXP3", "AC12"],
  pin509: ["CSI2_RXN3", "AC13"],
  pin510: ["CSI3_RXN3", "AC15"],
  pin511: ["CSI3_RXP3", "AC16"],
  pin512: ["DSI0_TXN3", "AC18"],
  pin513: ["DSI0_TXP3", "AC19"],
  pin514: ["OLDI0_A4P", "AC21"],
  pin515: ["MDIO0_MDC", "AC24"],
  pin516: ["RGMII1_RD0", "AC25"],
  pin517: ["VOUT0_PCLK", "AC26"],
  pin518: ["VOUT0_DE", "AC27"],
  pin519: ["MMC0_DS", "AD1"],
  pin520: ["MMC0_DAT1", "AD2"],
  pin521: ["MMC0_DAT0", "AD3"],
  pin522: ["CSI0_RXP0", "AD5"],
  pin523: ["CSI0_RXN0", "AD6"],
  pin524: ["CSI1_RXP2", "AD8"],
  pin525: ["CSI1_RXN2", "AD9"],
  pin526: ["CSI2_RXN2", "AD11"],
  pin527: ["CSI2_RXP2", "AD12"],
  pin528: ["CSI3_RXP2", "AD14"],
  pin529: ["CSI3_RXN2", "AD15"],
  pin530: ["DSI0_TXN0", "AD17"],
  pin531: ["DSI0_TXP0", "AD18"],
  pin532: ["OLDI0_CLK1N", "AD20"],
  pin533: ["OLDI0_A4N", "AD21"],
  pin534: ["RGMII1_RX_CTL", "AD23"],
  pin535: ["MDIO0_MDIO", "AD25"],
  pin536: ["VSS", "AD26", "VSS_AD26"],
  pin537: ["RGMII1_RD1", "AD27"],
  pin538: ["MMC0_CLK", "AE1"],
  pin539: ["MMC0_CMD", "AE2"],
  pin540: ["CSI0_RXP1", "AE4"],
  pin541: ["CSI0_RXN1", "AE5"],
  pin542: ["CSI1_RXP1", "AE7"],
  pin543: ["CSI1_RXN1", "AE8"],
  pin544: ["CSI2_RXN1", "AE10"],
  pin545: ["CSI2_RXP1", "AE11"],
  pin546: ["CSI3_RXP1", "AE13"],
  pin547: ["CSI3_RXN1", "AE14"],
  pin548: ["DSI0_TXCLKN", "AE16"],
  pin549: ["DSI0_TXCLKP", "AE17"],
  pin550: ["OLDI0_CLK1P", "AE19"],
  pin551: ["OLDI0_CLK0P", "AE20"],
  pin552: ["RGMII1_TD1", "AE23"],
  pin553: ["RGMII1_RD2", "AE24"],
  pin554: ["RGMII1_RD3", "AE26"],
  pin555: ["RGMII1_RXC", "AE27"],
  pin556: ["MMC0_DAT6", "AF1"],
  pin557: ["CSI0_RXP2", "AF3"],
  pin558: ["CSI0_RXN2", "AF4"],
  pin559: ["CSI1_RXP0", "AF6"],
  pin560: ["CSI1_RXN0", "AF7"],
  pin561: ["CSI2_RXN0", "AF9"],
  pin562: ["CSI2_RXP0", "AF10"],
  pin563: ["CSI3_RXP0", "AF12"],
  pin564: ["CSI3_RXN0", "AF13"],
  pin565: ["DSI0_TXN1", "AF15"],
  pin566: ["DSI0_TXP1", "AF16"],
  pin567: ["OLDI0_A5P", "AF18"],
  pin568: ["OLDI0_A5N", "AF19"],
  pin569: ["OLDI0_CLK0N", "AF21"],
  pin570: ["OLDI0_A0N", "AF23"],
  pin571: ["RGMII1_TD3", "AF24"],
  pin572: ["RGMII1_TX_CTL", "AF25"],
  pin573: ["RGMII1_TD0", "AF27"],
  pin574: ["A21", "AG1", "A21_AG1"],
  pin575: ["CSI0_RXP3", "AG2"],
  pin576: ["CSI0_RXN3", "AG3"],
  pin577: ["CSI1_RXCLKP", "AG5"],
  pin578: ["CSI1_RXCLKN", "AG6"],
  pin579: ["CSI2_RXCLKN", "AG8"],
  pin580: ["CSI2_RXCLKP", "AG9"],
  pin581: ["CSI3_RXCLKP", "AG11"],
  pin582: ["CSI3_RXCLKN", "AG12"],
  pin583: ["DSI0_TXN2", "AG14"],
  pin584: ["DSI0_TXP2", "AG15"],
  pin585: ["OLDI0_A6N", "AG17"],
  pin586: ["OLDI0_A6P", "AG18"],
  pin587: ["OLDI0_A3N", "AG20"],
  pin588: ["OLDI0_A3P", "AG21"],
  pin589: ["OLDI0_A1N", "AG22"],
  pin590: ["OLDI0_A1P", "AG23"],
  pin591: ["OLDI0_A0P", "AG24"],
  pin592: ["RGMII1_TD2", "AG25"],
  pin593: ["RGMII1_TXC", "AG26"],
  pin594: ["VSS", "AG27", "VSS_AG27"],
} as const;

const pinRoles = {
  pin1: "unknown",
  pin2: "unknown",
  pin3: "unknown",
  pin4: "ground",
  pin5: "unknown",
  pin6: "unknown",
  pin7: "ground",
  pin8: "control",
  pin9: "control",
  pin10: "unknown",
  pin11: "unknown",
  pin12: "output",
  pin13: "output",
  pin14: "unknown",
  pin15: "unknown",
  pin16: "ground",
  pin17: "input",
  pin18: "input",
  pin19: "ground",
  pin20: "unknown",
  pin21: "unknown",
  pin22: "unknown",
  pin23: "unknown",
  pin24: "unknown",
  pin25: "unknown",
  pin26: "unknown",
  pin27: "output",
  pin28: "input",
  pin29: "output",
  pin30: "unknown",
  pin31: "no-connect",
  pin32: "unknown",
  pin33: "input",
  pin34: "control",
  pin35: "unknown",
  pin36: "unknown",
  pin37: "control",
  pin38: "unknown",
  pin39: "unknown",
  pin40: "output",
  pin41: "output",
  pin42: "control",
  pin43: "unknown",
  pin44: "unknown",
  pin45: "unknown",
  pin46: "unknown",
  pin47: "unknown",
  pin48: "output",
  pin49: "output",
  pin50: "ground",
  pin51: "unknown",
  pin52: "unknown",
  pin53: "unknown",
  pin54: "no-connect",
  pin55: "output",
  pin56: "unknown",
  pin57: "unknown",
  pin58: "control",
  pin59: "input",
  pin60: "input",
  pin61: "no-connect",
  pin62: "control",
  pin63: "unknown",
  pin64: "ground",
  pin65: "control",
  pin66: "unknown",
  pin67: "unknown",
  pin68: "power",
  pin69: "bidirectional",
  pin70: "bidirectional",
  pin71: "bidirectional",
  pin72: "unknown",
  pin73: "control",
  pin74: "bidirectional",
  pin75: "no-connect",
  pin76: "no-connect",
  pin77: "no-connect",
  pin78: "unknown",
  pin79: "control",
  pin80: "unknown",
  pin81: "control",
  pin82: "unknown",
  pin83: "unknown",
  pin84: "output",
  pin85: "bidirectional",
  pin86: "bidirectional",
  pin87: "ground",
  pin88: "unknown",
  pin89: "no-connect",
  pin90: "bidirectional",
  pin91: "unknown",
  pin92: "control",
  pin93: "unknown",
  pin94: "unknown",
  pin95: "unknown",
  pin96: "unknown",
  pin97: "unknown",
  pin98: "unknown",
  pin99: "output",
  pin100: "control",
  pin101: "control",
  pin102: "bidirectional",
  pin103: "ground",
  pin104: "bidirectional",
  pin105: "bidirectional",
  pin106: "no-connect",
  pin107: "unknown",
  pin108: "unknown",
  pin109: "unknown",
  pin110: "control",
  pin111: "unknown",
  pin112: "ground",
  pin113: "unknown",
  pin114: "ground",
  pin115: "power",
  pin116: "input",
  pin117: "output",
  pin118: "ground",
  pin119: "unknown",
  pin120: "unknown",
  pin121: "control",
  pin122: "unknown",
  pin123: "unknown",
  pin124: "ground",
  pin125: "unknown",
  pin126: "unknown",
  pin127: "bidirectional",
  pin128: "ground",
  pin129: "bidirectional",
  pin130: "power",
  pin131: "ground",
  pin132: "power",
  pin133: "ground",
  pin134: "power",
  pin135: "ground",
  pin136: "power",
  pin137: "ground",
  pin138: "power",
  pin139: "ground",
  pin140: "ground",
  pin141: "power",
  pin142: "power",
  pin143: "ground",
  pin144: "unknown",
  pin145: "unknown",
  pin146: "bidirectional",
  pin147: "bidirectional",
  pin148: "bidirectional",
  pin149: "ground",
  pin150: "bidirectional",
  pin151: "unknown",
  pin152: "ground",
  pin153: "power",
  pin154: "power",
  pin155: "power",
  pin156: "power",
  pin157: "power",
  pin158: "power",
  pin159: "unknown",
  pin160: "power",
  pin161: "power",
  pin162: "power",
  pin163: "power",
  pin164: "power",
  pin165: "unknown",
  pin166: "unknown",
  pin167: "unknown",
  pin168: "unknown",
  pin169: "unknown",
  pin170: "unknown",
  pin171: "control",
  pin172: "unknown",
  pin173: "bidirectional",
  pin174: "bidirectional",
  pin175: "ground",
  pin176: "bidirectional",
  pin177: "ground",
  pin178: "bidirectional",
  pin179: "power",
  pin180: "power",
  pin181: "ground",
  pin182: "power",
  pin183: "unknown",
  pin184: "unknown",
  pin185: "power",
  pin186: "power",
  pin187: "ground",
  pin188: "power",
  pin189: "ground",
  pin190: "power",
  pin191: "unknown",
  pin192: "power",
  pin193: "power",
  pin194: "control",
  pin195: "unknown",
  pin196: "ground",
  pin197: "unknown",
  pin198: "ground",
  pin199: "bidirectional",
  pin200: "power",
  pin201: "power",
  pin202: "power",
  pin203: "power",
  pin204: "power",
  pin205: "power",
  pin206: "ground",
  pin207: "power",
  pin208: "ground",
  pin209: "unknown",
  pin210: "ground",
  pin211: "power",
  pin212: "ground",
  pin213: "power",
  pin214: "control",
  pin215: "control",
  pin216: "control",
  pin217: "unknown",
  pin218: "bidirectional",
  pin219: "unknown",
  pin220: "unknown",
  pin221: "unknown",
  pin222: "no-connect",
  pin223: "unknown",
  pin224: "power",
  pin225: "power",
  pin226: "power",
  pin227: "ground",
  pin228: "ground",
  pin229: "power",
  pin230: "ground",
  pin231: "ground",
  pin232: "power",
  pin233: "unknown",
  pin234: "power",
  pin235: "ground",
  pin236: "power",
  pin237: "power",
  pin238: "unknown",
  pin239: "bidirectional",
  pin240: "unknown",
  pin241: "control",
  pin242: "unknown",
  pin243: "unknown",
  pin244: "unknown",
  pin245: "ground",
  pin246: "no-connect",
  pin247: "unknown",
  pin248: "unknown",
  pin249: "unknown",
  pin250: "no-connect",
  pin251: "ground",
  pin252: "ground",
  pin253: "power",
  pin254: "power",
  pin255: "ground",
  pin256: "power",
  pin257: "power",
  pin258: "ground",
  pin259: "power",
  pin260: "ground",
  pin261: "power",
  pin262: "ground",
  pin263: "power",
  pin264: "power",
  pin265: "unknown",
  pin266: "unknown",
  pin267: "unknown",
  pin268: "unknown",
  pin269: "power",
  pin270: "power",
  pin271: "ground",
  pin272: "power",
  pin273: "power",
  pin274: "ground",
  pin275: "power",
  pin276: "power",
  pin277: "ground",
  pin278: "power",
  pin279: "ground",
  pin280: "power",
  pin281: "power",
  pin282: "power",
  pin283: "unknown",
  pin284: "control",
  pin285: "unknown",
  pin286: "unknown",
  pin287: "unknown",
  pin288: "ground",
  pin289: "unknown",
  pin290: "unknown",
  pin291: "unknown",
  pin292: "control",
  pin293: "control",
  pin294: "ground",
  pin295: "unknown",
  pin296: "ground",
  pin297: "power",
  pin298: "power",
  pin299: "ground",
  pin300: "power",
  pin301: "power",
  pin302: "ground",
  pin303: "power",
  pin304: "ground",
  pin305: "power",
  pin306: "ground",
  pin307: "power",
  pin308: "ground",
  pin309: "power",
  pin310: "control",
  pin311: "unknown",
  pin312: "control",
  pin313: "unknown",
  pin314: "unknown",
  pin315: "ground",
  pin316: "bidirectional",
  pin317: "bidirectional",
  pin318: "ground",
  pin319: "bidirectional",
  pin320: "unknown",
  pin321: "ground",
  pin322: "ground",
  pin323: "power",
  pin324: "ground",
  pin325: "power",
  pin326: "power",
  pin327: "power",
  pin328: "ground",
  pin329: "power",
  pin330: "ground",
  pin331: "power",
  pin332: "ground",
  pin333: "ground",
  pin334: "power",
  pin335: "unknown",
  pin336: "unknown",
  pin337: "unknown",
  pin338: "control",
  pin339: "bidirectional",
  pin340: "bidirectional",
  pin341: "power",
  pin342: "power",
  pin343: "power",
  pin344: "ground",
  pin345: "power",
  pin346: "ground",
  pin347: "power",
  pin348: "ground",
  pin349: "power",
  pin350: "ground",
  pin351: "power",
  pin352: "ground",
  pin353: "power",
  pin354: "power",
  pin355: "unknown",
  pin356: "unknown",
  pin357: "control",
  pin358: "unknown",
  pin359: "unknown",
  pin360: "ground",
  pin361: "unknown",
  pin362: "bidirectional",
  pin363: "bidirectional",
  pin364: "ground",
  pin365: "unknown",
  pin366: "bidirectional",
  pin367: "control",
  pin368: "ground",
  pin369: "power",
  pin370: "ground",
  pin371: "power",
  pin372: "ground",
  pin373: "power",
  pin374: "ground",
  pin375: "power",
  pin376: "ground",
  pin377: "power",
  pin378: "power",
  pin379: "ground",
  pin380: "ground",
  pin381: "power",
  pin382: "unknown",
  pin383: "unknown",
  pin384: "ground",
  pin385: "bidirectional",
  pin386: "bidirectional",
  pin387: "ground",
  pin388: "bidirectional",
  pin389: "bidirectional",
  pin390: "ground",
  pin391: "power",
  pin392: "ground",
  pin393: "power",
  pin394: "ground",
  pin395: "power",
  pin396: "ground",
  pin397: "power",
  pin398: "ground",
  pin399: "power",
  pin400: "power",
  pin401: "power",
  pin402: "power",
  pin403: "ground",
  pin404: "unknown",
  pin405: "unknown",
  pin406: "unknown",
  pin407: "unknown",
  pin408: "unknown",
  pin409: "unknown",
  pin410: "unknown",
  pin411: "bidirectional",
  pin412: "bidirectional",
  pin413: "bidirectional",
  pin414: "bidirectional",
  pin415: "ground",
  pin416: "power",
  pin417: "ground",
  pin418: "power",
  pin419: "power",
  pin420: "power",
  pin421: "ground",
  pin422: "control",
  pin423: "ground",
  pin424: "control",
  pin425: "control",
  pin426: "ground",
  pin427: "power",
  pin428: "power",
  pin429: "ground",
  pin430: "unknown",
  pin431: "unknown",
  pin432: "bidirectional",
  pin433: "bidirectional",
  pin434: "bidirectional",
  pin435: "unknown",
  pin436: "bidirectional",
  pin437: "bidirectional",
  pin438: "bidirectional",
  pin439: "ground",
  pin440: "ground",
  pin441: "power",
  pin442: "ground",
  pin443: "power",
  pin444: "power",
  pin445: "control",
  pin446: "ground",
  pin447: "control",
  pin448: "control",
  pin449: "power",
  pin450: "ground",
  pin451: "power",
  pin452: "power",
  pin453: "power",
  pin454: "bidirectional",
  pin455: "bidirectional",
  pin456: "ground",
  pin457: "unknown",
  pin458: "bidirectional",
  pin459: "ground",
  pin460: "bidirectional",
  pin461: "unknown",
  pin462: "unknown",
  pin463: "control",
  pin464: "no-connect",
  pin465: "no-connect",
  pin466: "no-connect",
  pin467: "output",
  pin468: "ground",
  pin469: "no-connect",
  pin470: "unknown",
  pin471: "unknown",
  pin472: "bidirectional",
  pin473: "unknown",
  pin474: "bidirectional",
  pin475: "unknown",
  pin476: "ground",
  pin477: "bidirectional",
  pin478: "unknown",
  pin479: "unknown",
  pin480: "unknown",
  pin481: "unknown",
  pin482: "unknown",
  pin483: "no-connect",
  pin484: "control",
  pin485: "no-connect",
  pin486: "no-connect",
  pin487: "no-connect",
  pin488: "control",
  pin489: "control",
  pin490: "no-connect",
  pin491: "no-connect",
  pin492: "unknown",
  pin493: "unknown",
  pin494: "unknown",
  pin495: "unknown",
  pin496: "output",
  pin497: "unknown",
  pin498: "bidirectional",
  pin499: "bidirectional",
  pin500: "unknown",
  pin501: "unknown",
  pin502: "unknown",
  pin503: "no-connect",
  pin504: "control",
  pin505: "control",
  pin506: "control",
  pin507: "control",
  pin508: "control",
  pin509: "control",
  pin510: "control",
  pin511: "control",
  pin512: "output",
  pin513: "output",
  pin514: "unknown",
  pin515: "unknown",
  pin516: "unknown",
  pin517: "output",
  pin518: "output",
  pin519: "unknown",
  pin520: "unknown",
  pin521: "unknown",
  pin522: "control",
  pin523: "control",
  pin524: "control",
  pin525: "control",
  pin526: "control",
  pin527: "control",
  pin528: "control",
  pin529: "control",
  pin530: "output",
  pin531: "output",
  pin532: "control",
  pin533: "unknown",
  pin534: "input",
  pin535: "unknown",
  pin536: "ground",
  pin537: "unknown",
  pin538: "control",
  pin539: "unknown",
  pin540: "control",
  pin541: "control",
  pin542: "control",
  pin543: "control",
  pin544: "control",
  pin545: "control",
  pin546: "control",
  pin547: "control",
  pin548: "output",
  pin549: "output",
  pin550: "control",
  pin551: "control",
  pin552: "unknown",
  pin553: "unknown",
  pin554: "unknown",
  pin555: "input",
  pin556: "unknown",
  pin557: "control",
  pin558: "control",
  pin559: "control",
  pin560: "control",
  pin561: "control",
  pin562: "control",
  pin563: "control",
  pin564: "control",
  pin565: "output",
  pin566: "output",
  pin567: "unknown",
  pin568: "unknown",
  pin569: "control",
  pin570: "unknown",
  pin571: "unknown",
  pin572: "output",
  pin573: "unknown",
  pin574: "unknown",
  pin575: "control",
  pin576: "control",
  pin577: "control",
  pin578: "control",
  pin579: "control",
  pin580: "control",
  pin581: "control",
  pin582: "control",
  pin583: "output",
  pin584: "output",
  pin585: "unknown",
  pin586: "unknown",
  pin587: "unknown",
  pin588: "unknown",
  pin589: "unknown",
  pin590: "unknown",
  pin591: "unknown",
  pin592: "unknown",
  pin593: "output",
  pin594: "ground",
} as const;

const pinAttributes = {
  pin4: { requiresGround: true },
  pin7: { requiresGround: true },
  pin16: { requiresGround: true },
  pin19: { requiresGround: true },
  pin31: { doNotConnect: true },
  pin50: { requiresGround: true },
  pin54: { doNotConnect: true },
  pin61: { doNotConnect: true },
  pin64: { requiresGround: true },
  pin68: { requiresPower: true },
  pin75: { doNotConnect: true },
  pin76: { doNotConnect: true },
  pin77: { doNotConnect: true },
  pin87: { requiresGround: true },
  pin89: { doNotConnect: true },
  pin103: { requiresGround: true },
  pin106: { doNotConnect: true },
  pin112: { requiresGround: true },
  pin114: { requiresGround: true },
  pin115: { requiresPower: true },
  pin118: { requiresGround: true },
  pin124: { requiresGround: true },
  pin128: { requiresGround: true },
  pin130: { requiresPower: true },
  pin131: { requiresGround: true },
  pin132: { requiresPower: true },
  pin133: { requiresGround: true },
  pin134: { requiresPower: true },
  pin135: { requiresGround: true },
  pin136: { requiresPower: true },
  pin137: { requiresGround: true },
  pin138: { requiresPower: true },
  pin139: { requiresGround: true },
  pin140: { requiresGround: true },
  pin141: { requiresPower: true },
  pin142: { requiresPower: true },
  pin143: { requiresGround: true },
  pin149: { requiresGround: true },
  pin152: { requiresGround: true },
  pin153: { requiresPower: true },
  pin154: { requiresPower: true },
  pin155: { requiresPower: true },
  pin156: { requiresPower: true },
  pin157: { requiresPower: true },
  pin158: { requiresPower: true },
  pin160: { requiresPower: true },
  pin161: { requiresPower: true },
  pin162: { requiresPower: true },
  pin163: { requiresPower: true },
  pin164: { requiresPower: true },
  pin175: { requiresGround: true },
  pin177: { requiresGround: true },
  pin179: { requiresPower: true },
  pin180: { requiresPower: true },
  pin181: { requiresGround: true },
  pin182: { requiresPower: true },
  pin185: { requiresPower: true },
  pin186: { requiresPower: true },
  pin187: { requiresGround: true },
  pin188: { requiresPower: true },
  pin189: { requiresGround: true },
  pin190: { requiresPower: true },
  pin192: { requiresPower: true },
  pin193: { requiresPower: true },
  pin196: { requiresGround: true },
  pin198: { requiresGround: true },
  pin200: { requiresPower: true },
  pin201: { requiresPower: true },
  pin202: { requiresPower: true },
  pin203: { requiresPower: true },
  pin204: { requiresPower: true },
  pin205: { requiresPower: true },
  pin206: { requiresGround: true },
  pin207: { requiresPower: true },
  pin208: { requiresGround: true },
  pin210: { requiresGround: true },
  pin211: { requiresPower: true },
  pin212: { requiresGround: true },
  pin213: { requiresPower: true },
  pin222: { doNotConnect: true },
  pin224: { requiresPower: true },
  pin225: { requiresPower: true },
  pin226: { requiresPower: true },
  pin227: { requiresGround: true },
  pin228: { requiresGround: true },
  pin229: { requiresPower: true },
  pin230: { requiresGround: true },
  pin231: { requiresGround: true },
  pin232: { requiresPower: true },
  pin234: { requiresPower: true },
  pin235: { requiresGround: true },
  pin236: { requiresPower: true },
  pin237: { requiresPower: true },
  pin245: { requiresGround: true },
  pin246: { doNotConnect: true },
  pin250: { doNotConnect: true },
  pin251: { requiresGround: true },
  pin252: { requiresGround: true },
  pin253: { requiresPower: true },
  pin254: { requiresPower: true },
  pin255: { requiresGround: true },
  pin256: { requiresPower: true },
  pin257: { requiresPower: true },
  pin258: { requiresGround: true },
  pin259: { requiresPower: true },
  pin260: { requiresGround: true },
  pin261: { requiresPower: true },
  pin262: { requiresGround: true },
  pin263: { requiresPower: true },
  pin264: { requiresPower: true },
  pin269: { requiresPower: true },
  pin270: { requiresPower: true },
  pin271: { requiresGround: true },
  pin272: { requiresPower: true },
  pin273: { requiresPower: true },
  pin274: { requiresGround: true },
  pin275: { requiresPower: true },
  pin276: { requiresPower: true },
  pin277: { requiresGround: true },
  pin278: { requiresPower: true },
  pin279: { requiresGround: true },
  pin280: { requiresPower: true },
  pin281: { requiresPower: true },
  pin282: { requiresPower: true },
  pin288: { requiresGround: true },
  pin294: { requiresGround: true },
  pin296: { requiresGround: true },
  pin297: { requiresPower: true },
  pin298: { requiresPower: true },
  pin299: { requiresGround: true },
  pin300: { requiresPower: true },
  pin301: { requiresPower: true },
  pin302: { requiresGround: true },
  pin303: { requiresPower: true },
  pin304: { requiresGround: true },
  pin305: { requiresPower: true },
  pin306: { requiresGround: true },
  pin307: { requiresPower: true },
  pin308: { requiresGround: true },
  pin309: { requiresPower: true },
  pin315: { requiresGround: true },
  pin318: { requiresGround: true },
  pin321: { requiresGround: true },
  pin322: { requiresGround: true },
  pin323: { requiresPower: true },
  pin324: { requiresGround: true },
  pin325: { requiresPower: true },
  pin326: { requiresPower: true },
  pin327: { requiresPower: true },
  pin328: { requiresGround: true },
  pin329: { requiresPower: true },
  pin330: { requiresGround: true },
  pin331: { requiresPower: true },
  pin332: { requiresGround: true },
  pin333: { requiresGround: true },
  pin334: { requiresPower: true },
  pin341: { requiresPower: true },
  pin342: { requiresPower: true },
  pin343: { requiresPower: true },
  pin344: { requiresGround: true },
  pin345: { requiresPower: true },
  pin346: { requiresGround: true },
  pin347: { requiresPower: true },
  pin348: { requiresGround: true },
  pin349: { requiresPower: true },
  pin350: { requiresGround: true },
  pin351: { requiresPower: true },
  pin352: { requiresGround: true },
  pin353: { requiresPower: true },
  pin354: { requiresPower: true },
  pin360: { requiresGround: true },
  pin364: { requiresGround: true },
  pin368: { requiresGround: true },
  pin369: { requiresPower: true },
  pin370: { requiresGround: true },
  pin371: { requiresPower: true },
  pin372: { requiresGround: true },
  pin373: { requiresPower: true },
  pin374: { requiresGround: true },
  pin375: { requiresPower: true },
  pin376: { requiresGround: true },
  pin377: { requiresPower: true },
  pin378: { requiresPower: true },
  pin379: { requiresGround: true },
  pin380: { requiresGround: true },
  pin381: { requiresPower: true },
  pin384: { requiresGround: true },
  pin387: { requiresGround: true },
  pin390: { requiresGround: true },
  pin391: { requiresPower: true },
  pin392: { requiresGround: true },
  pin393: { requiresPower: true },
  pin394: { requiresGround: true },
  pin395: { requiresPower: true },
  pin396: { requiresGround: true },
  pin397: { requiresPower: true },
  pin398: { requiresGround: true },
  pin399: { requiresPower: true },
  pin400: { requiresPower: true },
  pin401: { requiresPower: true },
  pin402: { requiresPower: true },
  pin403: { requiresGround: true },
  pin415: { requiresGround: true },
  pin416: { requiresPower: true },
  pin417: { requiresGround: true },
  pin418: { requiresPower: true },
  pin419: { requiresPower: true },
  pin420: { requiresPower: true },
  pin421: { requiresGround: true },
  pin423: { requiresGround: true },
  pin426: { requiresGround: true },
  pin427: { requiresPower: true },
  pin428: { requiresPower: true },
  pin429: { requiresGround: true },
  pin439: { requiresGround: true },
  pin440: { requiresGround: true },
  pin441: { requiresPower: true },
  pin442: { requiresGround: true },
  pin443: { requiresPower: true },
  pin444: { requiresPower: true },
  pin446: { requiresGround: true },
  pin449: { requiresPower: true },
  pin450: { requiresGround: true },
  pin451: { requiresPower: true },
  pin452: { requiresPower: true },
  pin453: { requiresPower: true },
  pin456: { requiresGround: true },
  pin459: { requiresGround: true },
  pin464: { doNotConnect: true },
  pin465: { doNotConnect: true },
  pin466: { doNotConnect: true },
  pin468: { requiresGround: true },
  pin469: { doNotConnect: true },
  pin476: { requiresGround: true },
  pin483: { doNotConnect: true },
  pin485: { doNotConnect: true },
  pin486: { doNotConnect: true },
  pin487: { doNotConnect: true },
  pin490: { doNotConnect: true },
  pin491: { doNotConnect: true },
  pin503: { doNotConnect: true },
  pin536: { requiresGround: true },
  pin594: { requiresGround: true },
} as const;

export const AM67A74AKGHIAMWR = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing AMW0594A; official source https://www.ti.com/lit/gpn/AM67A pages 244,245,246
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="AM67A74AKGHIAMWR"
      footprint={
        <footprint>
          <smtpad
            portHints={["A1"]}
            pcbX="-8.45mm"
            pcbY="8.45mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["A2"]}
            pcbX="-7.8mm"
            pcbY="8.45mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["A3"]}
            pcbX="-7.15mm"
            pcbY="8.45mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["A4"]}
            pcbX="-6.5mm"
            pcbY="8.45mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["A5"]}
            pcbX="-5.85mm"
            pcbY="8.45mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["A6"]}
            pcbX="-5.2mm"
            pcbY="8.45mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["A7"]}
            pcbX="-4.55mm"
            pcbY="8.45mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["A8"]}
            pcbX="-3.9mm"
            pcbY="8.45mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["A9"]}
            pcbX="-3.25mm"
            pcbY="8.45mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["A10"]}
            pcbX="-2.6mm"
            pcbY="8.45mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["A11"]}
            pcbX="-1.95mm"
            pcbY="8.45mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["A13"]}
            pcbX="-0.65mm"
            pcbY="8.45mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["A14"]}
            pcbX="0mm"
            pcbY="8.45mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["A16"]}
            pcbX="1.3mm"
            pcbY="8.45mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["A17"]}
            pcbX="1.95mm"
            pcbY="8.45mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["A18"]}
            pcbX="2.6mm"
            pcbY="8.45mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["A19"]}
            pcbX="3.25mm"
            pcbY="8.45mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["A20"]}
            pcbX="3.9mm"
            pcbY="8.45mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["A21"]}
            pcbX="4.55mm"
            pcbY="8.45mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["A22"]}
            pcbX="5.2mm"
            pcbY="8.45mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["A23"]}
            pcbX="5.85mm"
            pcbY="8.45mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["A24"]}
            pcbX="6.5mm"
            pcbY="8.45mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["A25"]}
            pcbX="7.15mm"
            pcbY="8.45mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["A26"]}
            pcbX="7.8mm"
            pcbY="8.45mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["A27"]}
            pcbX="8.45mm"
            pcbY="8.45mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["B1"]}
            pcbX="-8.45mm"
            pcbY="7.8mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["B2"]}
            pcbX="-7.8mm"
            pcbY="7.8mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["B3"]}
            pcbX="-7.15mm"
            pcbY="7.8mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["B4"]}
            pcbX="-6.5mm"
            pcbY="7.8mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["B5"]}
            pcbX="-5.85mm"
            pcbY="7.8mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["B6"]}
            pcbX="-5.2mm"
            pcbY="7.8mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["B7"]}
            pcbX="-4.55mm"
            pcbY="7.8mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["B8"]}
            pcbX="-3.9mm"
            pcbY="7.8mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["B9"]}
            pcbX="-3.25mm"
            pcbY="7.8mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["B10"]}
            pcbX="-2.6mm"
            pcbY="7.8mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["B12"]}
            pcbX="-1.3mm"
            pcbY="7.8mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["B13"]}
            pcbX="-0.65mm"
            pcbY="7.8mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["B15"]}
            pcbX="0.65mm"
            pcbY="7.8mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["B16"]}
            pcbX="1.3mm"
            pcbY="7.8mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["B18"]}
            pcbX="2.6mm"
            pcbY="7.8mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["B19"]}
            pcbX="3.25mm"
            pcbY="7.8mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["B20"]}
            pcbX="3.9mm"
            pcbY="7.8mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["B21"]}
            pcbX="4.55mm"
            pcbY="7.8mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["B22"]}
            pcbX="5.2mm"
            pcbY="7.8mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["B23"]}
            pcbX="5.85mm"
            pcbY="7.8mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["B24"]}
            pcbX="6.5mm"
            pcbY="7.8mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["B25"]}
            pcbX="7.15mm"
            pcbY="7.8mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["B27"]}
            pcbX="8.45mm"
            pcbY="7.8mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["C1"]}
            pcbX="-8.45mm"
            pcbY="7.15mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["C2"]}
            pcbX="-7.8mm"
            pcbY="7.15mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["C3"]}
            pcbX="-7.15mm"
            pcbY="7.15mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["C4"]}
            pcbX="-6.5mm"
            pcbY="7.15mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["C5"]}
            pcbX="-5.85mm"
            pcbY="7.15mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["C6"]}
            pcbX="-5.2mm"
            pcbY="7.15mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["C8"]}
            pcbX="-3.9mm"
            pcbY="7.15mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["C9"]}
            pcbX="-3.25mm"
            pcbY="7.15mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["C11"]}
            pcbX="-1.95mm"
            pcbY="7.15mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["C12"]}
            pcbX="-1.3mm"
            pcbY="7.15mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["C14"]}
            pcbX="0mm"
            pcbY="7.15mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["C15"]}
            pcbX="0.65mm"
            pcbY="7.15mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["C17"]}
            pcbX="1.95mm"
            pcbY="7.15mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["C20"]}
            pcbX="3.9mm"
            pcbY="7.15mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["C22"]}
            pcbX="5.2mm"
            pcbY="7.15mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["C23"]}
            pcbX="5.85mm"
            pcbY="7.15mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["C24"]}
            pcbX="6.5mm"
            pcbY="7.15mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["C26"]}
            pcbX="7.8mm"
            pcbY="7.15mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["C27"]}
            pcbX="8.45mm"
            pcbY="7.15mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["D1"]}
            pcbX="-8.45mm"
            pcbY="6.5mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["D2"]}
            pcbX="-7.8mm"
            pcbY="6.5mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["D3"]}
            pcbX="-7.15mm"
            pcbY="6.5mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["D6"]}
            pcbX="-5.2mm"
            pcbY="6.5mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["D8"]}
            pcbX="-3.9mm"
            pcbY="6.5mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["D10"]}
            pcbX="-2.6mm"
            pcbY="6.5mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["D11"]}
            pcbX="-1.95mm"
            pcbY="6.5mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["D13"]}
            pcbX="-0.65mm"
            pcbY="6.5mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["D14"]}
            pcbX="0mm"
            pcbY="6.5mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["D16"]}
            pcbX="1.3mm"
            pcbY="6.5mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["D17"]}
            pcbX="1.95mm"
            pcbY="6.5mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["D20"]}
            pcbX="3.9mm"
            pcbY="6.5mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["D22"]}
            pcbX="5.2mm"
            pcbY="6.5mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["D23"]}
            pcbX="5.85mm"
            pcbY="6.5mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["D25"]}
            pcbX="7.15mm"
            pcbY="6.5mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["D26"]}
            pcbX="7.8mm"
            pcbY="6.5mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["D27"]}
            pcbX="8.45mm"
            pcbY="6.5mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["E1"]}
            pcbX="-8.45mm"
            pcbY="5.85mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["E2"]}
            pcbX="-7.8mm"
            pcbY="5.85mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["E6"]}
            pcbX="-5.2mm"
            pcbY="5.85mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["E8"]}
            pcbX="-3.9mm"
            pcbY="5.85mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["E9"]}
            pcbX="-3.25mm"
            pcbY="5.85mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["E11"]}
            pcbX="-1.95mm"
            pcbY="5.85mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["E12"]}
            pcbX="-1.3mm"
            pcbY="5.85mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["E13"]}
            pcbX="-0.65mm"
            pcbY="5.85mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["E15"]}
            pcbX="0.65mm"
            pcbY="5.85mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["E17"]}
            pcbX="1.95mm"
            pcbY="5.85mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["E18"]}
            pcbX="2.6mm"
            pcbY="5.85mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["E19"]}
            pcbX="3.25mm"
            pcbY="5.85mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["E20"]}
            pcbX="3.9mm"
            pcbY="5.85mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["E22"]}
            pcbX="5.2mm"
            pcbY="5.85mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["E25"]}
            pcbX="7.15mm"
            pcbY="5.85mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["E26"]}
            pcbX="7.8mm"
            pcbY="5.85mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["E27"]}
            pcbX="8.45mm"
            pcbY="5.85mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["F1"]}
            pcbX="-8.45mm"
            pcbY="5.2mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["F2"]}
            pcbX="-7.8mm"
            pcbY="5.2mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["F3"]}
            pcbX="-7.15mm"
            pcbY="5.2mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["F6"]}
            pcbX="-5.2mm"
            pcbY="5.2mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["F8"]}
            pcbX="-3.9mm"
            pcbY="5.2mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["F9"]}
            pcbX="-3.25mm"
            pcbY="5.2mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["F10"]}
            pcbX="-2.6mm"
            pcbY="5.2mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["F11"]}
            pcbX="-1.95mm"
            pcbY="5.2mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["F12"]}
            pcbX="-1.3mm"
            pcbY="5.2mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["F14"]}
            pcbX="0mm"
            pcbY="5.2mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["F15"]}
            pcbX="0.65mm"
            pcbY="5.2mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["F16"]}
            pcbX="1.3mm"
            pcbY="5.2mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["F17"]}
            pcbX="1.95mm"
            pcbY="5.2mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["F18"]}
            pcbX="2.6mm"
            pcbY="5.2mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["F19"]}
            pcbX="3.25mm"
            pcbY="5.2mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["F20"]}
            pcbX="3.9mm"
            pcbY="5.2mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["F21"]}
            pcbX="4.55mm"
            pcbY="5.2mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["F23"]}
            pcbX="5.85mm"
            pcbY="5.2mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["F24"]}
            pcbX="6.5mm"
            pcbY="5.2mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["F25"]}
            pcbX="7.15mm"
            pcbY="5.2mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["F26"]}
            pcbX="7.8mm"
            pcbY="5.2mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["F27"]}
            pcbX="8.45mm"
            pcbY="5.2mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["G1"]}
            pcbX="-8.45mm"
            pcbY="4.55mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["G2"]}
            pcbX="-7.8mm"
            pcbY="4.55mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["G3"]}
            pcbX="-7.15mm"
            pcbY="4.55mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["G4"]}
            pcbX="-6.5mm"
            pcbY="4.55mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["G5"]}
            pcbX="-5.85mm"
            pcbY="4.55mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["G6"]}
            pcbX="-5.2mm"
            pcbY="4.55mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["G7"]}
            pcbX="-4.55mm"
            pcbY="4.55mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["G8"]}
            pcbX="-3.9mm"
            pcbY="4.55mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["G9"]}
            pcbX="-3.25mm"
            pcbY="4.55mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["G10"]}
            pcbX="-2.6mm"
            pcbY="4.55mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["G11"]}
            pcbX="-1.95mm"
            pcbY="4.55mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["G12"]}
            pcbX="-1.3mm"
            pcbY="4.55mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["G13"]}
            pcbX="-0.65mm"
            pcbY="4.55mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["G14"]}
            pcbX="0mm"
            pcbY="4.55mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["G15"]}
            pcbX="0.65mm"
            pcbY="4.55mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["G16"]}
            pcbX="1.3mm"
            pcbY="4.55mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["G17"]}
            pcbX="1.95mm"
            pcbY="4.55mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["G18"]}
            pcbX="2.6mm"
            pcbY="4.55mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["G19"]}
            pcbX="3.25mm"
            pcbY="4.55mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["G20"]}
            pcbX="3.9mm"
            pcbY="4.55mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["G26"]}
            pcbX="7.8mm"
            pcbY="4.55mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["G27"]}
            pcbX="8.45mm"
            pcbY="4.55mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["H1"]}
            pcbX="-8.45mm"
            pcbY="3.9mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["H2"]}
            pcbX="-7.8mm"
            pcbY="3.9mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["H3"]}
            pcbX="-7.15mm"
            pcbY="3.9mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["H4"]}
            pcbX="-6.5mm"
            pcbY="3.9mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["H5"]}
            pcbX="-5.85mm"
            pcbY="3.9mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["H6"]}
            pcbX="-5.2mm"
            pcbY="3.9mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["H7"]}
            pcbX="-4.55mm"
            pcbY="3.9mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["H8"]}
            pcbX="-3.9mm"
            pcbY="3.9mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["H9"]}
            pcbX="-3.25mm"
            pcbY="3.9mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["H10"]}
            pcbX="-2.6mm"
            pcbY="3.9mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["H11"]}
            pcbX="-1.95mm"
            pcbY="3.9mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["H12"]}
            pcbX="-1.3mm"
            pcbY="3.9mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["H13"]}
            pcbX="-0.65mm"
            pcbY="3.9mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["H14"]}
            pcbX="0mm"
            pcbY="3.9mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["H15"]}
            pcbX="0.65mm"
            pcbY="3.9mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["H16"]}
            pcbX="1.3mm"
            pcbY="3.9mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["H17"]}
            pcbX="1.95mm"
            pcbY="3.9mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["H18"]}
            pcbX="2.6mm"
            pcbY="3.9mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["H19"]}
            pcbX="3.25mm"
            pcbY="3.9mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["H20"]}
            pcbX="3.9mm"
            pcbY="3.9mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["H21"]}
            pcbX="4.55mm"
            pcbY="3.9mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["H22"]}
            pcbX="5.2mm"
            pcbY="3.9mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["H23"]}
            pcbX="5.85mm"
            pcbY="3.9mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["H24"]}
            pcbX="6.5mm"
            pcbY="3.9mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["H25"]}
            pcbX="7.15mm"
            pcbY="3.9mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["H26"]}
            pcbX="7.8mm"
            pcbY="3.9mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["H27"]}
            pcbX="8.45mm"
            pcbY="3.9mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["J1"]}
            pcbX="-8.45mm"
            pcbY="3.25mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["J2"]}
            pcbX="-7.8mm"
            pcbY="3.25mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["J3"]}
            pcbX="-7.15mm"
            pcbY="3.25mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["J4"]}
            pcbX="-6.5mm"
            pcbY="3.25mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["J5"]}
            pcbX="-5.85mm"
            pcbY="3.25mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["J6"]}
            pcbX="-5.2mm"
            pcbY="3.25mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["J7"]}
            pcbX="-4.55mm"
            pcbY="3.25mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["J8"]}
            pcbX="-3.9mm"
            pcbY="3.25mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["J9"]}
            pcbX="-3.25mm"
            pcbY="3.25mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["J10"]}
            pcbX="-2.6mm"
            pcbY="3.25mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["J11"]}
            pcbX="-1.95mm"
            pcbY="3.25mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["J12"]}
            pcbX="-1.3mm"
            pcbY="3.25mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["J13"]}
            pcbX="-0.65mm"
            pcbY="3.25mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["J14"]}
            pcbX="0mm"
            pcbY="3.25mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["J15"]}
            pcbX="0.65mm"
            pcbY="3.25mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["J16"]}
            pcbX="1.3mm"
            pcbY="3.25mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["J17"]}
            pcbX="1.95mm"
            pcbY="3.25mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["J18"]}
            pcbX="2.6mm"
            pcbY="3.25mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["J19"]}
            pcbX="3.25mm"
            pcbY="3.25mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["J20"]}
            pcbX="3.9mm"
            pcbY="3.25mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["J21"]}
            pcbX="4.55mm"
            pcbY="3.25mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["J22"]}
            pcbX="5.2mm"
            pcbY="3.25mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["J23"]}
            pcbX="5.85mm"
            pcbY="3.25mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["J26"]}
            pcbX="7.8mm"
            pcbY="3.25mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["J27"]}
            pcbX="8.45mm"
            pcbY="3.25mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["K1"]}
            pcbX="-8.45mm"
            pcbY="2.6mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["K2"]}
            pcbX="-7.8mm"
            pcbY="2.6mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["K7"]}
            pcbX="-4.55mm"
            pcbY="2.6mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["K8"]}
            pcbX="-3.9mm"
            pcbY="2.6mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["K9"]}
            pcbX="-3.25mm"
            pcbY="2.6mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["K10"]}
            pcbX="-2.6mm"
            pcbY="2.6mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["K11"]}
            pcbX="-1.95mm"
            pcbY="2.6mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["K12"]}
            pcbX="-1.3mm"
            pcbY="2.6mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["K13"]}
            pcbX="-0.65mm"
            pcbY="2.6mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["K14"]}
            pcbX="0mm"
            pcbY="2.6mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["K15"]}
            pcbX="0.65mm"
            pcbY="2.6mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["K16"]}
            pcbX="1.3mm"
            pcbY="2.6mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["K17"]}
            pcbX="1.95mm"
            pcbY="2.6mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["K18"]}
            pcbX="2.6mm"
            pcbY="2.6mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["K19"]}
            pcbX="3.25mm"
            pcbY="2.6mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["K20"]}
            pcbX="3.9mm"
            pcbY="2.6mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["K22"]}
            pcbX="5.2mm"
            pcbY="2.6mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["K23"]}
            pcbX="5.85mm"
            pcbY="2.6mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["K26"]}
            pcbX="7.8mm"
            pcbY="2.6mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["K27"]}
            pcbX="8.45mm"
            pcbY="2.6mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["L1"]}
            pcbX="-8.45mm"
            pcbY="1.95mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["L2"]}
            pcbX="-7.8mm"
            pcbY="1.95mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["L3"]}
            pcbX="-7.15mm"
            pcbY="1.95mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["L4"]}
            pcbX="-6.5mm"
            pcbY="1.95mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["L5"]}
            pcbX="-5.85mm"
            pcbY="1.95mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["L6"]}
            pcbX="-5.2mm"
            pcbY="1.95mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["L7"]}
            pcbX="-4.55mm"
            pcbY="1.95mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["L8"]}
            pcbX="-3.9mm"
            pcbY="1.95mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["L9"]}
            pcbX="-3.25mm"
            pcbY="1.95mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["L10"]}
            pcbX="-2.6mm"
            pcbY="1.95mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["L11"]}
            pcbX="-1.95mm"
            pcbY="1.95mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["L12"]}
            pcbX="-1.3mm"
            pcbY="1.95mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["L13"]}
            pcbX="-0.65mm"
            pcbY="1.95mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["L14"]}
            pcbX="0mm"
            pcbY="1.95mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["L15"]}
            pcbX="0.65mm"
            pcbY="1.95mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["L16"]}
            pcbX="1.3mm"
            pcbY="1.95mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["L17"]}
            pcbX="1.95mm"
            pcbY="1.95mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["L18"]}
            pcbX="2.6mm"
            pcbY="1.95mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["L19"]}
            pcbX="3.25mm"
            pcbY="1.95mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["L20"]}
            pcbX="3.9mm"
            pcbY="1.95mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["L21"]}
            pcbX="4.55mm"
            pcbY="1.95mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["L22"]}
            pcbX="5.2mm"
            pcbY="1.95mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["L23"]}
            pcbX="5.85mm"
            pcbY="1.95mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["L24"]}
            pcbX="6.5mm"
            pcbY="1.95mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["L25"]}
            pcbX="7.15mm"
            pcbY="1.95mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["L26"]}
            pcbX="7.8mm"
            pcbY="1.95mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["L27"]}
            pcbX="8.45mm"
            pcbY="1.95mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["M1"]}
            pcbX="-8.45mm"
            pcbY="1.3mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["M2"]}
            pcbX="-7.8mm"
            pcbY="1.3mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["M3"]}
            pcbX="-7.15mm"
            pcbY="1.3mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["M4"]}
            pcbX="-6.5mm"
            pcbY="1.3mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["M5"]}
            pcbX="-5.85mm"
            pcbY="1.3mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["M6"]}
            pcbX="-5.2mm"
            pcbY="1.3mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["M7"]}
            pcbX="-4.55mm"
            pcbY="1.3mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["M8"]}
            pcbX="-3.9mm"
            pcbY="1.3mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["M9"]}
            pcbX="-3.25mm"
            pcbY="1.3mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["M10"]}
            pcbX="-2.6mm"
            pcbY="1.3mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["M11"]}
            pcbX="-1.95mm"
            pcbY="1.3mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["M12"]}
            pcbX="-1.3mm"
            pcbY="1.3mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["M13"]}
            pcbX="-0.65mm"
            pcbY="1.3mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["M14"]}
            pcbX="0mm"
            pcbY="1.3mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["M15"]}
            pcbX="0.65mm"
            pcbY="1.3mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["M16"]}
            pcbX="1.3mm"
            pcbY="1.3mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["M17"]}
            pcbX="1.95mm"
            pcbY="1.3mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["M18"]}
            pcbX="2.6mm"
            pcbY="1.3mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["M19"]}
            pcbX="3.25mm"
            pcbY="1.3mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["M20"]}
            pcbX="3.9mm"
            pcbY="1.3mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["M26"]}
            pcbX="7.8mm"
            pcbY="1.3mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["M27"]}
            pcbX="8.45mm"
            pcbY="1.3mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["N1"]}
            pcbX="-8.45mm"
            pcbY="0.65mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["N2"]}
            pcbX="-7.8mm"
            pcbY="0.65mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["N7"]}
            pcbX="-4.55mm"
            pcbY="0.65mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["N8"]}
            pcbX="-3.9mm"
            pcbY="0.65mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["N9"]}
            pcbX="-3.25mm"
            pcbY="0.65mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["N10"]}
            pcbX="-2.6mm"
            pcbY="0.65mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["N11"]}
            pcbX="-1.95mm"
            pcbY="0.65mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["N12"]}
            pcbX="-1.3mm"
            pcbY="0.65mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["N13"]}
            pcbX="-0.65mm"
            pcbY="0.65mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["N14"]}
            pcbX="0mm"
            pcbY="0.65mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["N15"]}
            pcbX="0.65mm"
            pcbY="0.65mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["N16"]}
            pcbX="1.3mm"
            pcbY="0.65mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["N17"]}
            pcbX="1.95mm"
            pcbY="0.65mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["N18"]}
            pcbX="2.6mm"
            pcbY="0.65mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["N19"]}
            pcbX="3.25mm"
            pcbY="0.65mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["N20"]}
            pcbX="3.9mm"
            pcbY="0.65mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["N21"]}
            pcbX="4.55mm"
            pcbY="0.65mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["N22"]}
            pcbX="5.2mm"
            pcbY="0.65mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["N23"]}
            pcbX="5.85mm"
            pcbY="0.65mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["N24"]}
            pcbX="6.5mm"
            pcbY="0.65mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["N25"]}
            pcbX="7.15mm"
            pcbY="0.65mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["N26"]}
            pcbX="7.8mm"
            pcbY="0.65mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["N27"]}
            pcbX="8.45mm"
            pcbY="0.65mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["P1"]}
            pcbX="-8.45mm"
            pcbY="0mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["P2"]}
            pcbX="-7.8mm"
            pcbY="0mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["P3"]}
            pcbX="-7.15mm"
            pcbY="0mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["P4"]}
            pcbX="-6.5mm"
            pcbY="0mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["P5"]}
            pcbX="-5.85mm"
            pcbY="0mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["P6"]}
            pcbX="-5.2mm"
            pcbY="0mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["P7"]}
            pcbX="-4.55mm"
            pcbY="0mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["P8"]}
            pcbX="-3.9mm"
            pcbY="0mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["P9"]}
            pcbX="-3.25mm"
            pcbY="0mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["P10"]}
            pcbX="-2.6mm"
            pcbY="0mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["P11"]}
            pcbX="-1.95mm"
            pcbY="0mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["P12"]}
            pcbX="-1.3mm"
            pcbY="0mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["P13"]}
            pcbX="-0.65mm"
            pcbY="0mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["P14"]}
            pcbX="0mm"
            pcbY="0mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["P15"]}
            pcbX="0.65mm"
            pcbY="0mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["P16"]}
            pcbX="1.3mm"
            pcbY="0mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["P17"]}
            pcbX="1.95mm"
            pcbY="0mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["P18"]}
            pcbX="2.6mm"
            pcbY="0mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["P19"]}
            pcbX="3.25mm"
            pcbY="0mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["P20"]}
            pcbX="3.9mm"
            pcbY="0mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["P21"]}
            pcbX="4.55mm"
            pcbY="0mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["P22"]}
            pcbX="5.2mm"
            pcbY="0mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["P23"]}
            pcbX="5.85mm"
            pcbY="0mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["P26"]}
            pcbX="7.8mm"
            pcbY="0mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["P27"]}
            pcbX="8.45mm"
            pcbY="0mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["R1"]}
            pcbX="-8.45mm"
            pcbY="-0.65mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["R2"]}
            pcbX="-7.8mm"
            pcbY="-0.65mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["R3"]}
            pcbX="-7.15mm"
            pcbY="-0.65mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["R4"]}
            pcbX="-6.5mm"
            pcbY="-0.65mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["R5"]}
            pcbX="-5.85mm"
            pcbY="-0.65mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["R6"]}
            pcbX="-5.2mm"
            pcbY="-0.65mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["R7"]}
            pcbX="-4.55mm"
            pcbY="-0.65mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["R8"]}
            pcbX="-3.9mm"
            pcbY="-0.65mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["R9"]}
            pcbX="-3.25mm"
            pcbY="-0.65mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["R10"]}
            pcbX="-2.6mm"
            pcbY="-0.65mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["R11"]}
            pcbX="-1.95mm"
            pcbY="-0.65mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["R12"]}
            pcbX="-1.3mm"
            pcbY="-0.65mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["R13"]}
            pcbX="-0.65mm"
            pcbY="-0.65mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["R14"]}
            pcbX="0mm"
            pcbY="-0.65mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["R15"]}
            pcbX="0.65mm"
            pcbY="-0.65mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["R16"]}
            pcbX="1.3mm"
            pcbY="-0.65mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["R17"]}
            pcbX="1.95mm"
            pcbY="-0.65mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["R18"]}
            pcbX="2.6mm"
            pcbY="-0.65mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["R19"]}
            pcbX="3.25mm"
            pcbY="-0.65mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["R20"]}
            pcbX="3.9mm"
            pcbY="-0.65mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["R22"]}
            pcbX="5.2mm"
            pcbY="-0.65mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["R23"]}
            pcbX="5.85mm"
            pcbY="-0.65mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["R26"]}
            pcbX="7.8mm"
            pcbY="-0.65mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["R27"]}
            pcbX="8.45mm"
            pcbY="-0.65mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["T1"]}
            pcbX="-8.45mm"
            pcbY="-1.3mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["T2"]}
            pcbX="-7.8mm"
            pcbY="-1.3mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["T7"]}
            pcbX="-4.55mm"
            pcbY="-1.3mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["T8"]}
            pcbX="-3.9mm"
            pcbY="-1.3mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["T9"]}
            pcbX="-3.25mm"
            pcbY="-1.3mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["T10"]}
            pcbX="-2.6mm"
            pcbY="-1.3mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["T11"]}
            pcbX="-1.95mm"
            pcbY="-1.3mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["T12"]}
            pcbX="-1.3mm"
            pcbY="-1.3mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["T13"]}
            pcbX="-0.65mm"
            pcbY="-1.3mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["T14"]}
            pcbX="0mm"
            pcbY="-1.3mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["T15"]}
            pcbX="0.65mm"
            pcbY="-1.3mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["T16"]}
            pcbX="1.3mm"
            pcbY="-1.3mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["T17"]}
            pcbX="1.95mm"
            pcbY="-1.3mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["T18"]}
            pcbX="2.6mm"
            pcbY="-1.3mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["T19"]}
            pcbX="3.25mm"
            pcbY="-1.3mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["T20"]}
            pcbX="3.9mm"
            pcbY="-1.3mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["T21"]}
            pcbX="4.55mm"
            pcbY="-1.3mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["T22"]}
            pcbX="5.2mm"
            pcbY="-1.3mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["T23"]}
            pcbX="5.85mm"
            pcbY="-1.3mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["T24"]}
            pcbX="6.5mm"
            pcbY="-1.3mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["T25"]}
            pcbX="7.15mm"
            pcbY="-1.3mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["T26"]}
            pcbX="7.8mm"
            pcbY="-1.3mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["T27"]}
            pcbX="8.45mm"
            pcbY="-1.3mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["U1"]}
            pcbX="-8.45mm"
            pcbY="-1.95mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["U2"]}
            pcbX="-7.8mm"
            pcbY="-1.95mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["U3"]}
            pcbX="-7.15mm"
            pcbY="-1.95mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["U4"]}
            pcbX="-6.5mm"
            pcbY="-1.95mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["U5"]}
            pcbX="-5.85mm"
            pcbY="-1.95mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["U6"]}
            pcbX="-5.2mm"
            pcbY="-1.95mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["U7"]}
            pcbX="-4.55mm"
            pcbY="-1.95mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["U8"]}
            pcbX="-3.9mm"
            pcbY="-1.95mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["U9"]}
            pcbX="-3.25mm"
            pcbY="-1.95mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["U10"]}
            pcbX="-2.6mm"
            pcbY="-1.95mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["U11"]}
            pcbX="-1.95mm"
            pcbY="-1.95mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["U12"]}
            pcbX="-1.3mm"
            pcbY="-1.95mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["U13"]}
            pcbX="-0.65mm"
            pcbY="-1.95mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["U14"]}
            pcbX="0mm"
            pcbY="-1.95mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["U15"]}
            pcbX="0.65mm"
            pcbY="-1.95mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["U16"]}
            pcbX="1.3mm"
            pcbY="-1.95mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["U17"]}
            pcbX="1.95mm"
            pcbY="-1.95mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["U18"]}
            pcbX="2.6mm"
            pcbY="-1.95mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["U19"]}
            pcbX="3.25mm"
            pcbY="-1.95mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["U20"]}
            pcbX="3.9mm"
            pcbY="-1.95mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["U26"]}
            pcbX="7.8mm"
            pcbY="-1.95mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["U27"]}
            pcbX="8.45mm"
            pcbY="-1.95mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["V1"]}
            pcbX="-8.45mm"
            pcbY="-2.6mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["V2"]}
            pcbX="-7.8mm"
            pcbY="-2.6mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["V3"]}
            pcbX="-7.15mm"
            pcbY="-2.6mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["V4"]}
            pcbX="-6.5mm"
            pcbY="-2.6mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["V5"]}
            pcbX="-5.85mm"
            pcbY="-2.6mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["V6"]}
            pcbX="-5.2mm"
            pcbY="-2.6mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["V7"]}
            pcbX="-4.55mm"
            pcbY="-2.6mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["V8"]}
            pcbX="-3.9mm"
            pcbY="-2.6mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["V9"]}
            pcbX="-3.25mm"
            pcbY="-2.6mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["V10"]}
            pcbX="-2.6mm"
            pcbY="-2.6mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["V11"]}
            pcbX="-1.95mm"
            pcbY="-2.6mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["V12"]}
            pcbX="-1.3mm"
            pcbY="-2.6mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["V13"]}
            pcbX="-0.65mm"
            pcbY="-2.6mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["V14"]}
            pcbX="0mm"
            pcbY="-2.6mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["V15"]}
            pcbX="0.65mm"
            pcbY="-2.6mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["V16"]}
            pcbX="1.3mm"
            pcbY="-2.6mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["V17"]}
            pcbX="1.95mm"
            pcbY="-2.6mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["V18"]}
            pcbX="2.6mm"
            pcbY="-2.6mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["V19"]}
            pcbX="3.25mm"
            pcbY="-2.6mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["V20"]}
            pcbX="3.9mm"
            pcbY="-2.6mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["V21"]}
            pcbX="4.55mm"
            pcbY="-2.6mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["V22"]}
            pcbX="5.2mm"
            pcbY="-2.6mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["V23"]}
            pcbX="5.85mm"
            pcbY="-2.6mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["V24"]}
            pcbX="6.5mm"
            pcbY="-2.6mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["V25"]}
            pcbX="7.15mm"
            pcbY="-2.6mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["V26"]}
            pcbX="7.8mm"
            pcbY="-2.6mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["V27"]}
            pcbX="8.45mm"
            pcbY="-2.6mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["W1"]}
            pcbX="-8.45mm"
            pcbY="-3.25mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["W2"]}
            pcbX="-7.8mm"
            pcbY="-3.25mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["W3"]}
            pcbX="-7.15mm"
            pcbY="-3.25mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["W4"]}
            pcbX="-6.5mm"
            pcbY="-3.25mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["W5"]}
            pcbX="-5.85mm"
            pcbY="-3.25mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["W7"]}
            pcbX="-4.55mm"
            pcbY="-3.25mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["W8"]}
            pcbX="-3.9mm"
            pcbY="-3.25mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["W9"]}
            pcbX="-3.25mm"
            pcbY="-3.25mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["W10"]}
            pcbX="-2.6mm"
            pcbY="-3.25mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["W11"]}
            pcbX="-1.95mm"
            pcbY="-3.25mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["W12"]}
            pcbX="-1.3mm"
            pcbY="-3.25mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["W13"]}
            pcbX="-0.65mm"
            pcbY="-3.25mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["W14"]}
            pcbX="0mm"
            pcbY="-3.25mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["W15"]}
            pcbX="0.65mm"
            pcbY="-3.25mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["W16"]}
            pcbX="1.3mm"
            pcbY="-3.25mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["W17"]}
            pcbX="1.95mm"
            pcbY="-3.25mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["W18"]}
            pcbX="2.6mm"
            pcbY="-3.25mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["W19"]}
            pcbX="3.25mm"
            pcbY="-3.25mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["W20"]}
            pcbX="3.9mm"
            pcbY="-3.25mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["W21"]}
            pcbX="4.55mm"
            pcbY="-3.25mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["W22"]}
            pcbX="5.2mm"
            pcbY="-3.25mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["W23"]}
            pcbX="5.85mm"
            pcbY="-3.25mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["W24"]}
            pcbX="6.5mm"
            pcbY="-3.25mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["W25"]}
            pcbX="7.15mm"
            pcbY="-3.25mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["W26"]}
            pcbX="7.8mm"
            pcbY="-3.25mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["W27"]}
            pcbX="8.45mm"
            pcbY="-3.25mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["Y1"]}
            pcbX="-8.45mm"
            pcbY="-3.9mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["Y2"]}
            pcbX="-7.8mm"
            pcbY="-3.9mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["Y7"]}
            pcbX="-4.55mm"
            pcbY="-3.9mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["Y8"]}
            pcbX="-3.9mm"
            pcbY="-3.9mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["Y9"]}
            pcbX="-3.25mm"
            pcbY="-3.9mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["Y10"]}
            pcbX="-2.6mm"
            pcbY="-3.9mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["Y11"]}
            pcbX="-1.95mm"
            pcbY="-3.9mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["Y12"]}
            pcbX="-1.3mm"
            pcbY="-3.9mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["Y13"]}
            pcbX="-0.65mm"
            pcbY="-3.9mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["Y14"]}
            pcbX="0mm"
            pcbY="-3.9mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["Y15"]}
            pcbX="0.65mm"
            pcbY="-3.9mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["Y16"]}
            pcbX="1.3mm"
            pcbY="-3.9mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["Y17"]}
            pcbX="1.95mm"
            pcbY="-3.9mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["Y18"]}
            pcbX="2.6mm"
            pcbY="-3.9mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["Y19"]}
            pcbX="3.25mm"
            pcbY="-3.9mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["Y20"]}
            pcbX="3.9mm"
            pcbY="-3.9mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["Y21"]}
            pcbX="4.55mm"
            pcbY="-3.9mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["Y26"]}
            pcbX="7.8mm"
            pcbY="-3.9mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["Y27"]}
            pcbX="8.45mm"
            pcbY="-3.9mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AA1"]}
            pcbX="-8.45mm"
            pcbY="-4.55mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AA2"]}
            pcbX="-7.8mm"
            pcbY="-4.55mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AA3"]}
            pcbX="-7.15mm"
            pcbY="-4.55mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AA4"]}
            pcbX="-6.5mm"
            pcbY="-4.55mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AA5"]}
            pcbX="-5.85mm"
            pcbY="-4.55mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AA6"]}
            pcbX="-5.2mm"
            pcbY="-4.55mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AA8"]}
            pcbX="-3.9mm"
            pcbY="-4.55mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AA10"]}
            pcbX="-2.6mm"
            pcbY="-4.55mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AA12"]}
            pcbX="-1.3mm"
            pcbY="-4.55mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AA14"]}
            pcbX="0mm"
            pcbY="-4.55mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AA15"]}
            pcbX="0.65mm"
            pcbY="-4.55mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AA16"]}
            pcbX="1.3mm"
            pcbY="-4.55mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AA18"]}
            pcbX="2.6mm"
            pcbY="-4.55mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AA19"]}
            pcbX="3.25mm"
            pcbY="-4.55mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AA20"]}
            pcbX="3.9mm"
            pcbY="-4.55mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AA21"]}
            pcbX="4.55mm"
            pcbY="-4.55mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AA22"]}
            pcbX="5.2mm"
            pcbY="-4.55mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AA23"]}
            pcbX="5.85mm"
            pcbY="-4.55mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AA24"]}
            pcbX="6.5mm"
            pcbY="-4.55mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AA25"]}
            pcbX="7.15mm"
            pcbY="-4.55mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AA26"]}
            pcbX="7.8mm"
            pcbY="-4.55mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AA27"]}
            pcbX="8.45mm"
            pcbY="-4.55mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AB1"]}
            pcbX="-8.45mm"
            pcbY="-5.2mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AB2"]}
            pcbX="-7.8mm"
            pcbY="-5.2mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AB3"]}
            pcbX="-7.15mm"
            pcbY="-5.2mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AB4"]}
            pcbX="-6.5mm"
            pcbY="-5.2mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AB5"]}
            pcbX="-5.85mm"
            pcbY="-5.2mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AB7"]}
            pcbX="-4.55mm"
            pcbY="-5.2mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AB8"]}
            pcbX="-3.9mm"
            pcbY="-5.2mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AB10"]}
            pcbX="-2.6mm"
            pcbY="-5.2mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AB12"]}
            pcbX="-1.3mm"
            pcbY="-5.2mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AB13"]}
            pcbX="-0.65mm"
            pcbY="-5.2mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AB14"]}
            pcbX="0mm"
            pcbY="-5.2mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AB15"]}
            pcbX="0.65mm"
            pcbY="-5.2mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AB16"]}
            pcbX="1.3mm"
            pcbY="-5.2mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AB18"]}
            pcbX="2.6mm"
            pcbY="-5.2mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AB19"]}
            pcbX="3.25mm"
            pcbY="-5.2mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AB20"]}
            pcbX="3.9mm"
            pcbY="-5.2mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AB21"]}
            pcbX="4.55mm"
            pcbY="-5.2mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AB23"]}
            pcbX="5.85mm"
            pcbY="-5.2mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AB24"]}
            pcbX="6.5mm"
            pcbY="-5.2mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AB25"]}
            pcbX="7.15mm"
            pcbY="-5.2mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AB26"]}
            pcbX="7.8mm"
            pcbY="-5.2mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AB27"]}
            pcbX="8.45mm"
            pcbY="-5.2mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AC1"]}
            pcbX="-8.45mm"
            pcbY="-5.85mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AC2"]}
            pcbX="-7.8mm"
            pcbY="-5.85mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AC3"]}
            pcbX="-7.15mm"
            pcbY="-5.85mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AC5"]}
            pcbX="-5.85mm"
            pcbY="-5.85mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AC6"]}
            pcbX="-5.2mm"
            pcbY="-5.85mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AC7"]}
            pcbX="-4.55mm"
            pcbY="-5.85mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AC9"]}
            pcbX="-3.25mm"
            pcbY="-5.85mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AC10"]}
            pcbX="-2.6mm"
            pcbY="-5.85mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AC12"]}
            pcbX="-1.3mm"
            pcbY="-5.85mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AC13"]}
            pcbX="-0.65mm"
            pcbY="-5.85mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AC15"]}
            pcbX="0.65mm"
            pcbY="-5.85mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AC16"]}
            pcbX="1.3mm"
            pcbY="-5.85mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AC18"]}
            pcbX="2.6mm"
            pcbY="-5.85mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AC19"]}
            pcbX="3.25mm"
            pcbY="-5.85mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AC21"]}
            pcbX="4.55mm"
            pcbY="-5.85mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AC24"]}
            pcbX="6.5mm"
            pcbY="-5.85mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AC25"]}
            pcbX="7.15mm"
            pcbY="-5.85mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AC26"]}
            pcbX="7.8mm"
            pcbY="-5.85mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AC27"]}
            pcbX="8.45mm"
            pcbY="-5.85mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AD1"]}
            pcbX="-8.45mm"
            pcbY="-6.5mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AD2"]}
            pcbX="-7.8mm"
            pcbY="-6.5mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AD3"]}
            pcbX="-7.15mm"
            pcbY="-6.5mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AD5"]}
            pcbX="-5.85mm"
            pcbY="-6.5mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AD6"]}
            pcbX="-5.2mm"
            pcbY="-6.5mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AD8"]}
            pcbX="-3.9mm"
            pcbY="-6.5mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AD9"]}
            pcbX="-3.25mm"
            pcbY="-6.5mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AD11"]}
            pcbX="-1.95mm"
            pcbY="-6.5mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AD12"]}
            pcbX="-1.3mm"
            pcbY="-6.5mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AD14"]}
            pcbX="0mm"
            pcbY="-6.5mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AD15"]}
            pcbX="0.65mm"
            pcbY="-6.5mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AD17"]}
            pcbX="1.95mm"
            pcbY="-6.5mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AD18"]}
            pcbX="2.6mm"
            pcbY="-6.5mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AD20"]}
            pcbX="3.9mm"
            pcbY="-6.5mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AD21"]}
            pcbX="4.55mm"
            pcbY="-6.5mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AD23"]}
            pcbX="5.85mm"
            pcbY="-6.5mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AD25"]}
            pcbX="7.15mm"
            pcbY="-6.5mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AD26"]}
            pcbX="7.8mm"
            pcbY="-6.5mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AD27"]}
            pcbX="8.45mm"
            pcbY="-6.5mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AE1"]}
            pcbX="-8.45mm"
            pcbY="-7.15mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AE2"]}
            pcbX="-7.8mm"
            pcbY="-7.15mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AE4"]}
            pcbX="-6.5mm"
            pcbY="-7.15mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AE5"]}
            pcbX="-5.85mm"
            pcbY="-7.15mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AE7"]}
            pcbX="-4.55mm"
            pcbY="-7.15mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AE8"]}
            pcbX="-3.9mm"
            pcbY="-7.15mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AE10"]}
            pcbX="-2.6mm"
            pcbY="-7.15mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AE11"]}
            pcbX="-1.95mm"
            pcbY="-7.15mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AE13"]}
            pcbX="-0.65mm"
            pcbY="-7.15mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AE14"]}
            pcbX="0mm"
            pcbY="-7.15mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AE16"]}
            pcbX="1.3mm"
            pcbY="-7.15mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AE17"]}
            pcbX="1.95mm"
            pcbY="-7.15mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AE19"]}
            pcbX="3.25mm"
            pcbY="-7.15mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AE20"]}
            pcbX="3.9mm"
            pcbY="-7.15mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AE23"]}
            pcbX="5.85mm"
            pcbY="-7.15mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AE24"]}
            pcbX="6.5mm"
            pcbY="-7.15mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AE26"]}
            pcbX="7.8mm"
            pcbY="-7.15mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AE27"]}
            pcbX="8.45mm"
            pcbY="-7.15mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AF1"]}
            pcbX="-8.45mm"
            pcbY="-7.8mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AF3"]}
            pcbX="-7.15mm"
            pcbY="-7.8mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AF4"]}
            pcbX="-6.5mm"
            pcbY="-7.8mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AF6"]}
            pcbX="-5.2mm"
            pcbY="-7.8mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AF7"]}
            pcbX="-4.55mm"
            pcbY="-7.8mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AF9"]}
            pcbX="-3.25mm"
            pcbY="-7.8mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AF10"]}
            pcbX="-2.6mm"
            pcbY="-7.8mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AF12"]}
            pcbX="-1.3mm"
            pcbY="-7.8mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AF13"]}
            pcbX="-0.65mm"
            pcbY="-7.8mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AF15"]}
            pcbX="0.65mm"
            pcbY="-7.8mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AF16"]}
            pcbX="1.3mm"
            pcbY="-7.8mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AF18"]}
            pcbX="2.6mm"
            pcbY="-7.8mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AF19"]}
            pcbX="3.25mm"
            pcbY="-7.8mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AF21"]}
            pcbX="4.55mm"
            pcbY="-7.8mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AF23"]}
            pcbX="5.85mm"
            pcbY="-7.8mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AF24"]}
            pcbX="6.5mm"
            pcbY="-7.8mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AF25"]}
            pcbX="7.15mm"
            pcbY="-7.8mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AF27"]}
            pcbX="8.45mm"
            pcbY="-7.8mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AG1"]}
            pcbX="-8.45mm"
            pcbY="-8.45mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AG2"]}
            pcbX="-7.8mm"
            pcbY="-8.45mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AG3"]}
            pcbX="-7.15mm"
            pcbY="-8.45mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AG5"]}
            pcbX="-5.85mm"
            pcbY="-8.45mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AG6"]}
            pcbX="-5.2mm"
            pcbY="-8.45mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AG8"]}
            pcbX="-3.9mm"
            pcbY="-8.45mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AG9"]}
            pcbX="-3.25mm"
            pcbY="-8.45mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AG11"]}
            pcbX="-1.95mm"
            pcbY="-8.45mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AG12"]}
            pcbX="-1.3mm"
            pcbY="-8.45mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AG14"]}
            pcbX="0mm"
            pcbY="-8.45mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AG15"]}
            pcbX="0.65mm"
            pcbY="-8.45mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AG17"]}
            pcbX="1.95mm"
            pcbY="-8.45mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AG18"]}
            pcbX="2.6mm"
            pcbY="-8.45mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AG20"]}
            pcbX="3.9mm"
            pcbY="-8.45mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AG21"]}
            pcbX="4.55mm"
            pcbY="-8.45mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AG22"]}
            pcbX="5.2mm"
            pcbY="-8.45mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AG23"]}
            pcbX="5.85mm"
            pcbY="-8.45mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AG24"]}
            pcbX="6.5mm"
            pcbY="-8.45mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AG25"]}
            pcbX="7.15mm"
            pcbY="-8.45mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AG26"]}
            pcbX="7.8mm"
            pcbY="-8.45mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["AG27"]}
            pcbX="8.45mm"
            pcbY="-8.45mm"
            radius="0.175mm"
            shape="circle"
          />
        </footprint>
      }
      {...props}
    />
  );
};

export default AM67A74AKGHIAMWR;
