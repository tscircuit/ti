import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VSS", "A1", "VSS_A1"],
  pin2: ["VSS", "A2", "VSS_A2"],
  pin3: ["VIN2A_D19", "A3"],
  pin4: ["VIN2A_D23", "A4"],
  pin5: ["VOUT1_D12", "A5"],
  pin6: ["VSS", "A6", "VSS_A6"],
  pin7: ["VOUT1_D18", "A7"],
  pin8: ["VOUT1_D19", "A8"],
  pin9: ["VOUT1_D21", "A9"],
  pin10: ["VOUT1_D23", "A10"],
  pin11: ["MCASP1_AXR9", "A11"],
  pin12: ["MCASP1_AXR11", "A12"],
  pin13: ["MCASP1_AXR13", "A13"],
  pin14: ["VSS", "A14", "VSS_A14"],
  pin15: ["MCASP2_AXR1", "A15"],
  pin16: ["MCASP2_AXR3", "A16"],
  pin17: ["MCASP2_AXR7", "A17"],
  pin18: ["MCASP2_FSX", "A18"],
  pin19: ["MCASP2_ACLKX", "A19"],
  pin20: ["MCASP2_FSR", "A20"],
  pin21: ["MCASP4_FSX", "A21"],
  pin22: ["SPI1_CS1", "A22"],
  pin23: ["VSS", "A23", "VSS_A23"],
  pin24: ["SPI1_CS0", "A24"],
  pin25: ["SPI1_SCLK", "A25"],
  pin26: ["SPI2_SCLK", "A26"],
  pin27: ["RESERVED", "A27", "RESERVED_A27"],
  pin28: ["VSS", "A28", "VSS_A28"],
  pin29: ["VSS", "B1", "VSS_B1"],
  pin30: ["VIN2A_D16", "B2"],
  pin31: ["VIN2A_D20", "B3"],
  pin32: ["VIN2A_D21", "B4"],
  pin33: ["VIN2A_D22", "B5"],
  pin34: ["VDDSHV2", "B6", "VDDSHV2_B6"],
  pin35: ["VOUT1_D16", "B7"],
  pin36: ["VOUT1_D17", "B8"],
  pin37: ["VOUT1_D22", "B9"],
  pin38: ["VOUT1_DE", "B10"],
  pin39: ["VOUT1_FLD", "B11"],
  pin40: ["MCASP1_AXR8", "B12"],
  pin41: ["MCASP1_AXR10", "B13"],
  pin42: ["MCASP1_ACLKR", "B14"],
  pin43: ["MCASP2_AXR0", "B15"],
  pin44: ["MCASP2_AXR5", "B16"],
  pin45: ["MCASP2_AXR6", "B17"],
  pin46: ["MCASP3_ACLKX", "B18"],
  pin47: ["MCASP3_AXR0", "B19"],
  pin48: ["SPI1_CS3", "B20"],
  pin49: ["SPI1_CS2", "B21"],
  pin50: ["SPI2_D1", "B22"],
  pin51: ["VDDSHV3", "B23", "VDDSHV3_B23"],
  pin52: ["SPI2_CS0", "B24"],
  pin53: ["SPI1_D0", "B25"],
  pin54: ["XREF_CLK2", "B26"],
  pin55: ["UART1_RXD", "B27"],
  pin56: ["RESERVED", "B28", "RESERVED_B28"],
  pin57: ["VIN2A_D6", "C1"],
  pin58: ["VIN2A_D13", "C2"],
  pin59: ["VIN2A_D14", "C3"],
  pin60: ["VIN2A_D15", "C4"],
  pin61: ["VIN2A_D18", "C5"],
  pin62: ["VOUT1_D13", "C6"],
  pin63: ["VOUT1_D15", "C7"],
  pin64: ["VOUT1_D14", "C8"],
  pin65: ["VOUT1_D20", "C9"],
  pin66: ["VOUT1_HSYNC", "C11"],
  pin67: ["MCASP1_AXR6", "C12"],
  pin68: ["MCASP1_ACLKX", "C14"],
  pin69: ["MCASP2_AXR2", "C15"],
  pin70: ["MCASP3_AXR1", "C17"],
  pin71: ["MCASP4_ACLKX", "C18"],
  pin72: ["I2C1_SCL", "C20"],
  pin73: ["I2C1_SDA", "C21"],
  pin74: ["XREF_CLK3", "C23"],
  pin75: ["VDDSHV4", "C24"],
  pin76: ["I2C2_SDA", "C25"],
  pin77: ["UART1_TXD", "C26"],
  pin78: ["UART1_RTSN", "C27"],
  pin79: ["UART2_RTSN", "C28"],
  pin80: ["VIN2A_D2", "D1"],
  pin81: ["VIN2A_D4", "D2"],
  pin82: ["VIN2A_D10", "D3"],
  pin83: ["VIN2A_D12", "D5"],
  pin84: ["VIN2A_D17", "D6"],
  pin85: ["VOUT1_D10", "D7"],
  pin86: ["VOUT1_D11", "D8"],
  pin87: ["VOUT1_D9", "D9"],
  pin88: ["VDDSHV2", "D10", "VDDSHV2_D10"],
  pin89: ["VOUT1_CLK", "D11"],
  pin90: ["MCASP1_AXR7", "D12"],
  pin91: ["VSS", "D13", "VSS_D13"],
  pin92: ["MCASP1_FSX", "D14"],
  pin93: ["MCASP2_AXR4", "D15"],
  pin94: ["VDDSHV3", "D16", "VDDSHV3_D16"],
  pin95: ["MCASP4_AXR1", "D17"],
  pin96: ["XREF_CLK0", "D18"],
  pin97: ["VSS", "D19", "VSS_D19"],
  pin98: ["TRSTN", "D20"],
  pin99: ["NMIN_DSP", "D21"],
  pin100: ["VDDSHV3", "D22", "VDDSHV3_D22"],
  pin101: ["TDI", "D23"],
  pin102: ["EMU1", "D24"],
  pin103: ["UART2_TXD", "D26"],
  pin104: ["UART2_CTSN", "D27"],
  pin105: ["UART2_RXD", "D28"],
  pin106: ["VIN2A_CLK0", "E1"],
  pin107: ["VIN2A_D3", "E2"],
  pin108: ["VDDSHV1", "E3", "VDDSHV1_E3"],
  pin109: ["VIN2A_D7", "E4"],
  pin110: ["VDDSHV1", "E5", "VDDSHV1_E5"],
  pin111: ["VIN2A_D9", "E6"],
  pin112: ["VOUT1_D7", "E7"],
  pin113: ["VOUT1_D8", "E8"],
  pin114: ["VOUT1_D4", "E9"],
  pin115: ["VDDSHV2", "E10", "VDDSHV2_E10"],
  pin116: ["VOUT1_VSYNC", "E11"],
  pin117: ["MCASP1_AXR4", "E12"],
  pin118: ["VSS", "E13", "VSS_E13"],
  pin119: ["MCASP1_AXR12", "E14"],
  pin120: ["MCASP2_ACLKR", "E15"],
  pin121: ["VDDSHV3", "E16", "VDDSHV3_E16"],
  pin122: ["XREF_CLK1", "E17"],
  pin123: ["RTCK", "E18"],
  pin124: ["VSS", "E19", "VSS_E19"],
  pin125: ["TCLK", "E20"],
  pin126: ["GPIO6_14", "E21"],
  pin127: ["VDDSHV3", "E22", "VDDSHV3_E22"],
  pin128: ["RESETN", "E23"],
  pin129: ["VDDS_DDR2", "E24", "VDDS_DDR2_E24"],
  pin130: ["UART1_CTSN", "E25"],
  pin131: ["DDR2_D0", "E26"],
  pin132: ["DDR2_D6", "E27"],
  pin133: ["DDR2_D7", "E28"],
  pin134: ["VSS", "F1", "VSS_F1"],
  pin135: ["VIN2A_D0", "F2"],
  pin136: ["VIN2A_D1", "F3"],
  pin137: ["VIN2A_D5", "F4"],
  pin138: ["VIN2A_D8", "F5"],
  pin139: ["VIN2A_D11", "F6"],
  pin140: ["VSS", "F7", "VSS_F7"],
  pin141: ["VOUT1_D6", "F8"],
  pin142: ["VOUT1_D5", "F9"],
  pin143: ["VOUT1_D2", "F10"],
  pin144: ["VOUT1_D0", "F11"],
  pin145: ["MCASP1_AXR1", "F12"],
  pin146: ["MCASP1_AXR5", "F13"],
  pin147: ["MCASP1_AXR15", "F14"],
  pin148: ["MCASP3_FSX", "F15"],
  pin149: ["SPI1_D1", "F16"],
  pin150: ["I2C2_SCL", "F17"],
  pin151: ["TMS", "F18"],
  pin152: ["TDO", "F19"],
  pin153: ["GPIO6_15", "F20"],
  pin154: ["GPIO6_16", "F21"],
  pin155: ["PORZ", "F22"],
  pin156: ["RSTOUTN", "F23"],
  pin157: ["DDR2_D3", "F24"],
  pin158: ["DDR2_D2", "F25"],
  pin159: ["DDR2_D4", "F26"],
  pin160: ["DDR2_D5", "F27"],
  pin161: ["DDR2_DQM0", "F28"],
  pin162: ["VIN2A_HSYNC0", "G1"],
  pin163: ["VIN2A_DE0", "G2"],
  pin164: ["VDDSHV1", "G4", "VDDSHV1_G4"],
  pin165: ["VDDSHV1", "G5", "VDDSHV1_G5"],
  pin166: ["VIN2A_VSYNC0", "G6"],
  pin167: ["VSS", "G7", "VSS_G7"],
  pin168: ["VSS", "G8", "VSS_G8"],
  pin169: ["VSS", "G9", "VSS_G9"],
  pin170: ["VOUT1_D1", "G10"],
  pin171: ["VOUT1_D3", "G11"],
  pin172: ["MCASP1_AXR0", "G12"],
  pin173: ["MCASP1_AXR2", "G13"],
  pin174: ["MCASP1_AXR14", "G14"],
  pin175: ["VDDSHV3", "G15", "VDDSHV3_G15"],
  pin176: ["MCASP4_AXR0", "G16"],
  pin177: ["SPI2_D0", "G17"],
  pin178: ["VDDS18V", "G18", "VDDS18V_G18"],
  pin179: ["DCAN1_RX", "G19"],
  pin180: ["DCAN1_TX", "G20"],
  pin181: ["EMU0", "G21"],
  pin182: ["VDDS_DDR2", "G22", "VDDS_DDR2_G22"],
  pin183: ["VDDS_DDR2", "G23", "VDDS_DDR2_G23"],
  pin184: ["DDR2_DQM1", "G24"],
  pin185: ["DDR2_D1", "G25"],
  pin186: ["DDR2_D12", "G26"],
  pin187: ["DDR2_DQSN0", "G27"],
  pin188: ["DDR2_DQS0", "G28"],
  pin189: ["GPMC_AD12", "H1"],
  pin190: ["GPMC_AD14", "H2"],
  pin191: ["GPMC_AD15", "H3"],
  pin192: ["GPMC_A26", "H4"],
  pin193: ["GPMC_A27", "H5"],
  pin194: ["GPMC_CS1", "H6"],
  pin195: ["VIN2A_FLD0", "H7"],
  pin196: ["VDDSHV1", "H8", "VDDSHV1_H8"],
  pin197: ["VDDSHV1", "H9", "VDDSHV1_H9"],
  pin198: ["VDDSHV2", "H10", "VDDSHV2_H10"],
  pin199: ["VDDSHV2", "H11", "VDDSHV2_H11"],
  pin200: ["VSS", "H12", "VSS_H12"],
  pin201: ["VDD", "H13", "VDD_H13"],
  pin202: ["VDD", "H14", "VDD_H14"],
  pin203: ["VDDSHV3", "H15", "VDDSHV3_H15"],
  pin204: ["VDDSHV3", "H16", "VDDSHV3_H16"],
  pin205: ["VDDS18V", "H17", "VDDS18V_H17"],
  pin206: ["VDDSHV3", "H18", "VDDSHV3_H18"],
  pin207: ["VDDSHV3", "H19", "VDDSHV3_H19"],
  pin208: ["VDDS_DDR2", "H20", "VDDS_DDR2_H20"],
  pin209: ["VDDS_DDR2", "H21", "VDDS_DDR2_H21"],
  pin210: ["VDDS_DDR2", "H22", "VDDS_DDR2_H22"],
  pin211: ["DDR2_D8", "H23"],
  pin212: ["DDR2_D10", "H24"],
  pin213: ["DDR2_D9", "H25"],
  pin214: ["DDR2_D11", "H26"],
  pin215: ["DDR2_DQS1", "H27"],
  pin216: ["DDR2_DQSN1", "H28"],
  pin217: ["GPMC_AD10", "J1"],
  pin218: ["GPMC_AD11", "J2"],
  pin219: ["GPMC_AD13", "J3"],
  pin220: ["GPMC_A24", "J4"],
  pin221: ["GPMC_A21", "J5"],
  pin222: ["GPMC_A25", "J6"],
  pin223: ["GPMC_A23", "J7"],
  pin224: ["VDDSHV11", "J8", "VDDSHV11_J8"],
  pin225: ["CAP_VDDRAM_DSPEVE2", "J9"],
  pin226: ["CAP_VDDRAM_DSPEVE1", "J10"],
  pin227: ["MCASP1_AXR3", "J11"],
  pin228: ["VSS", "J12", "VSS_J12"],
  pin229: ["VDD_DSPEVE", "J13", "VDD_DSPEVE_J13"],
  pin230: ["MCASP1_FSR", "J14"],
  pin231: ["VSS", "J15", "VSS_J15"],
  pin232: ["CAP_VBBLDO_MPU", "J16"],
  pin233: ["VDD", "J17", "VDD_J17"],
  pin234: ["VDD", "J18", "VDD_J18"],
  pin235: ["CAP_VDDRAM_CORE2", "J19"],
  pin236: ["DDR2_D23", "J20"],
  pin237: ["VDDS18V_DDR2", "J21", "VDDS18V_DDR2_J21"],
  pin238: ["VDDS18V_DDR2", "J22", "VDDS18V_DDR2_J22"],
  pin239: ["DDR2_D21", "J23"],
  pin240: ["DDR2_D15", "J24"],
  pin241: ["DDR2_D13", "J25"],
  pin242: ["DDR2_D14", "J26"],
  pin243: ["VDDS_DDR2", "J27", "VDDS_DDR2_J27"],
  pin244: ["VSS", "J28", "VSS_J28"],
  pin245: ["VSS", "K1", "VSS_K1"],
  pin246: ["GPMC_AD9", "K2"],
  pin247: ["VSS", "K4", "VSS_K4"],
  pin248: ["VSS", "K5", "VSS_K5"],
  pin249: ["GPMC_A22", "K6"],
  pin250: ["GPMC_A19", "K7"],
  pin251: ["VDDSHV11", "K8", "VDDSHV11_K8"],
  pin252: ["CAP_VBBLDO_DSPEVE", "K9"],
  pin253: ["VDD_DSPEVE", "K10", "VDD_DSPEVE_K10"],
  pin254: ["VDD_DSPEVE", "K11", "VDD_DSPEVE_K11"],
  pin255: ["VDD_DSPEVE", "K12", "VDD_DSPEVE_K12"],
  pin256: ["VDD_DSPEVE", "K13", "VDD_DSPEVE_K13"],
  pin257: ["RESERVED", "K14", "RESERVED_K14"],
  pin258: ["VSS", "K15", "VSS_K15"],
  pin259: ["CAP_VDDRAM_MPU1", "K16"],
  pin260: ["VDD_MPU", "K17", "VDD_MPU_K17"],
  pin261: ["VDD_MPU", "K18", "VDD_MPU_K18"],
  pin262: ["CAP_VDDRAM_MPU2", "K19"],
  pin263: ["DDR2_D17", "K20"],
  pin264: ["DDR2_D18", "K21"],
  pin265: ["DDR2_D22", "K22"],
  pin266: ["DDR2_DQM2", "K23"],
  pin267: ["VSS", "K24", "VSS_K24"],
  pin268: ["VSS", "K25", "VSS_K25"],
  pin269: ["DDR2_DQS2", "K27"],
  pin270: ["DDR2_DQSN2", "K28"],
  pin271: ["GPMC_AD8", "L1"],
  pin272: ["GPMC_AD7", "L2"],
  pin273: ["GPMC_AD6", "L3"],
  pin274: ["GPMC_AD5", "L4"],
  pin275: ["GPMC_AD2", "L5"],
  pin276: ["GPMC_AD4", "L6"],
  pin277: ["VDD", "L7", "VDD_L7"],
  pin278: ["VDD", "L8", "VDD_L8"],
  pin279: ["CAP_VDDRAM_CORE1", "L9"],
  pin280: ["VDD_DSPEVE", "L10", "VDD_DSPEVE_L10"],
  pin281: ["VDD_DSPEVE", "L11", "VDD_DSPEVE_L11"],
  pin282: ["VDD_DSPEVE", "L12", "VDD_DSPEVE_L12"],
  pin283: ["VSS", "L13", "VSS_L13"],
  pin284: ["VSS", "L14", "VSS_L14"],
  pin285: ["VDD_MPU", "L15", "VDD_MPU_L15"],
  pin286: ["VDD_MPU", "L16", "VDD_MPU_L16"],
  pin287: ["VDD_MPU", "L17", "VDD_MPU_L17"],
  pin288: ["VDD_MPU", "L18", "VDD_MPU_L18"],
  pin289: ["VDD_MPU", "L19", "VDD_MPU_L19"],
  pin290: ["VDDS_DDR2", "L20", "VDDS_DDR2_L20"],
  pin291: ["VDDS_DDR2", "L21", "VDDS_DDR2_L21"],
  pin292: ["DDR2_D16", "L22"],
  pin293: ["DDR2_D19", "L23"],
  pin294: ["DDR2_D20", "L24"],
  pin295: ["DDR2_D26", "L25"],
  pin296: ["DDR2_D25", "L26"],
  pin297: ["DDR2_D24", "L27"],
  pin298: ["DDR2_D27", "L28"],
  pin299: ["GPMC_AD3", "M1"],
  pin300: ["GPMC_AD1", "M2"],
  pin301: ["GPMC_WEN", "M3"],
  pin302: ["GPMC_BEN1", "M4"],
  pin303: ["GPMC_OEN_REN", "M5"],
  pin304: ["GPMC_AD0", "M6"],
  pin305: ["GPMC_A20", "M7"],
  pin306: ["VDDS18V", "M8", "VDDS18V_M8"],
  pin307: ["VDDS18V", "M9", "VDDS18V_M9"],
  pin308: ["VDD_DSPEVE", "M10", "VDD_DSPEVE_M10"],
  pin309: ["VDD_DSPEVE", "M11", "VDD_DSPEVE_M11"],
  pin310: ["VDD_DSPEVE", "M12", "VDD_DSPEVE_M12"],
  pin311: ["VDD_DSPEVE", "M13", "VDD_DSPEVE_M13"],
  pin312: ["VDDA_ABE_PER", "M14"],
  pin313: ["VDD_MPU", "M15", "VDD_MPU_M15"],
  pin314: ["VDD_MPU", "M16", "VDD_MPU_M16"],
  pin315: ["VDD_MPU", "M17", "VDD_MPU_M17"],
  pin316: ["VDD_MPU", "M18", "VDD_MPU_M18"],
  pin317: ["VSS", "M19", "VSS_M19"],
  pin318: ["VDDS_DDR2", "M20", "VDDS_DDR2_M20"],
  pin319: ["VDDS_DDR2", "M21", "VDDS_DDR2_M21"],
  pin320: ["DDR2_DQM3", "M22"],
  pin321: ["DDR2_D28", "M23"],
  pin322: ["DDR2_D29", "M24"],
  pin323: ["DDR2_D30", "M25"],
  pin324: ["DDR2_D31", "M26"],
  pin325: ["DDR2_DQSN3", "M27"],
  pin326: ["DDR2_DQS3", "M28"],
  pin327: ["GPMC_ADVN_ALE", "N1"],
  pin328: ["GPMC_WAIT0", "N2"],
  pin329: ["VDDSHV10", "N4", "VDDSHV10_N4"],
  pin330: ["VDDSHV10", "N5", "VDDSHV10_N5"],
  pin331: ["GPMC_BEN0", "N6"],
  pin332: ["GPMC_A8", "N7"],
  pin333: ["VDDS18V", "N8", "VDDS18V_N8"],
  pin334: ["GPMC_A10", "N9"],
  pin335: ["VDD", "N10", "VDD_N10"],
  pin336: ["VDDA_DEBUG", "N11"],
  pin337: ["VDDA_DSP_EVE", "N12"],
  pin338: ["VDD", "N13", "VDD_N13"],
  pin339: ["VSS", "N14", "VSS_N14"],
  pin340: ["VSS", "N15", "VSS_N15"],
  pin341: ["VDDA_MPU", "N16"],
  pin342: ["VDD_MPU", "N17", "VDD_MPU_N17"],
  pin343: ["VDD_MPU", "N18", "VDD_MPU_N18"],
  pin344: ["VSS", "N19", "VSS_N19"],
  pin345: ["DDR2_A7", "N20"],
  pin346: ["VDDS18V_DDR2", "N21", "VDDS18V_DDR2_N21"],
  pin347: ["DDR2_VREF0", "N22"],
  pin348: ["DDR2_A10", "N23"],
  pin349: ["VSS", "N24", "VSS_N24"],
  pin350: ["VSS", "N25", "VSS_N25"],
  pin351: ["DDR2_A9", "N27"],
  pin352: ["DDR2_A12", "N28"],
  pin353: ["GPMC_CS3", "P1"],
  pin354: ["GPMC_CS2", "P2"],
  pin355: ["GPMC_A17", "P3"],
  pin356: ["GPMC_A12", "P4"],
  pin357: ["GPMC_A7", "P5"],
  pin358: ["GPMC_A4", "P6"],
  pin359: ["GPMC_CLK", "P7"],
  pin360: ["VDDS18V", "P8", "VDDS18V_P8"],
  pin361: ["GPMC_A11", "P9"],
  pin362: ["VDDSHV10", "P10", "VDDSHV10_P10"],
  pin363: ["VDD", "P11", "VDD_P11"],
  pin364: ["VDD", "P12", "VDD_P12"],
  pin365: ["VDD", "P13", "VDD_P13"],
  pin366: ["VDDA_VIDEO", "P14"],
  pin367: ["VDDA_GMAC_CORE", "P15"],
  pin368: ["VDDA_DDR", "P16"],
  pin369: ["VDD_MPU", "P17", "VDD_MPU_P17"],
  pin370: ["VDD_MPU", "P18", "VDD_MPU_P18"],
  pin371: ["CAP_VDDRAM_CORE4", "P19"],
  pin372: ["VDDS18V_DDR2", "P20", "VDDS18V_DDR2_P20"],
  pin373: ["VDDS18V_DDR2", "P21", "VDDS18V_DDR2_P21"],
  pin374: ["DDR2_A5", "P22"],
  pin375: ["DDR2_A4", "P23"],
  pin376: ["DDR2_CSN0", "P24"],
  pin377: ["DDR2_A6", "P25"],
  pin378: ["DDR2_A11", "P26"],
  pin379: ["DDR2_A8", "P27"],
  pin380: ["VSS", "P28", "VSS_P28"],
  pin381: ["VSS", "R1", "VSS_R1"],
  pin382: ["GPMC_A18", "R2"],
  pin383: ["GPMC_A13", "R3"],
  pin384: ["GPMC_A9", "R4"],
  pin385: ["GPMC_A6", "R5"],
  pin386: ["GPMC_A0", "R6"],
  pin387: ["VDDSHV10", "R7", "VDDSHV10_R7"],
  pin388: ["VDDS18V", "R8", "VDDS18V_R8"],
  pin389: ["GPMC_A5", "R9"],
  pin390: ["VDDSHV10", "R10", "VDDSHV10_R10"],
  pin391: ["VDD", "R11", "VDD_R11"],
  pin392: ["VSS", "R12", "VSS_R12"],
  pin393: ["VSS", "R13", "VSS_R13"],
  pin394: ["VDDA_GPU", "R14"],
  pin395: ["VSS", "R15", "VSS_R15"],
  pin396: ["VDD", "R16", "VDD_R16"],
  pin397: ["VDDA_IVA", "R17"],
  pin398: ["VDD_MPU", "R18", "VDD_MPU_R18"],
  pin399: ["VDD", "R19", "VDD_R19"],
  pin400: ["CAP_VBBLDO_IVA", "R20"],
  pin401: ["VSS", "R21", "VSS_R21"],
  pin402: ["DDR2_A14", "R22"],
  pin403: ["DDR2_ODT0", "R23"],
  pin404: ["DDR2_RST", "R24"],
  pin405: ["DDR2_A0", "R25"],
  pin406: ["DDR2_A1", "R26"],
  pin407: ["DDR2_A3", "R27"],
  pin408: ["DDR2_A2", "R28"],
  pin409: ["GPMC_CS0", "T1"],
  pin410: ["GPMC_A14", "T2"],
  pin411: ["VDDSHV10", "T4", "VDDSHV10_T4"],
  pin412: ["VDDSHV10", "T5", "VDDSHV10_T5"],
  pin413: ["GPMC_A2", "T6"],
  pin414: ["GPMC_A3", "T7"],
  pin415: ["VDDS18V", "T8", "VDDS18V_T8"],
  pin416: ["GPMC_A1", "T9"],
  pin417: ["VSS", "T10", "VSS_T10"],
  pin418: ["VSS", "T11", "VSS_T11"],
  pin419: ["VSS", "T12", "VSS_T12"],
  pin420: ["VDD", "T13", "VDD_T13"],
  pin421: ["VSS", "T14", "VSS_T14"],
  pin422: ["VSS", "T15", "VSS_T15"],
  pin423: ["VDD", "T16", "VDD_T16"],
  pin424: ["VSS", "T17", "VSS_T17"],
  pin425: ["VSS", "T18", "VSS_T18"],
  pin426: ["VDD", "T19", "VDD_T19"],
  pin427: ["CAP_VDDRAM_IVA", "T20"],
  pin428: ["VSS", "T21", "VSS_T21"],
  pin429: ["DDR2_A13", "T22"],
  pin430: ["DDR2_RASN", "T23"],
  pin431: ["VDDS_DDR2", "T24", "VDDS_DDR2_T24"],
  pin432: ["VDDS_DDR2", "T25", "VDDS_DDR2_T25"],
  pin433: ["DDR2_NCK", "T27"],
  pin434: ["DDR2_CK", "T28"],
  pin435: ["GPMC_A16", "U1"],
  pin436: ["GPMC_A15", "U2"],
  pin437: ["RMII_MHZ_50_CLK", "U3"],
  pin438: ["MDIO_D", "U4"],
  pin439: ["RGMII0_RXC", "U5"],
  pin440: ["RGMII0_TXD0", "U6"],
  pin441: ["RGMII0_TXD2", "U7"],
  pin442: ["VDD", "U8", "VDD_U8"],
  pin443: ["VDD", "U9", "VDD_U9"],
  pin444: ["VDDSHV9", "U10", "VDDSHV9_U10"],
  pin445: ["VDD_GPU", "U11", "VDD_GPU_U11"],
  pin446: ["VDD_GPU", "U12", "VDD_GPU_U12"],
  pin447: ["VDD", "U13", "VDD_U13"],
  pin448: ["VSSA_VIDEO", "U14"],
  pin449: ["VSS", "U15", "VSS_U15"],
  pin450: ["VDD", "U16", "VDD_U16"],
  pin451: ["VSS", "U17", "VSS_U17"],
  pin452: ["VDD_IVA", "U18", "VDD_IVA_U18"],
  pin453: ["VDD_IVA", "U19", "VDD_IVA_U19"],
  pin454: ["VSS", "U20", "VSS_U20"],
  pin455: ["VSS", "U21", "VSS_U21"],
  pin456: ["DDR2_A15", "U22"],
  pin457: ["DDR2_BA0", "U23"],
  pin458: ["DDR2_CKE", "U24"],
  pin459: ["DDR2_WEN", "U25"],
  pin460: ["DDR2_BA2", "U26"],
  pin461: ["DDR2_BA1", "U27"],
  pin462: ["DDR2_CASN", "U28"],
  pin463: ["MDIO_MCLK", "V1"],
  pin464: ["UART3_RXD", "V2"],
  pin465: ["RGMII0_RXD2", "V3"],
  pin466: ["RGMII0_RXD3", "V4"],
  pin467: ["RGMII0_RXCTL", "V5"],
  pin468: ["RGMII0_TXD1", "V6"],
  pin469: ["RGMII0_TXD3", "V7"],
  pin470: ["VDD", "V8", "VDD_V8"],
  pin471: ["RGMII0_TXCTL", "V9"],
  pin472: ["VDD_GPU", "V10", "VDD_GPU_V10"],
  pin473: ["VDD_GPU", "V11", "VDD_GPU_V11"],
  pin474: ["VDDSHV5", "V12"],
  pin475: ["VDDA_SATA", "V13"],
  pin476: ["VDD_GPU", "V14", "VDD_GPU_V14"],
  pin477: ["VSS", "V15", "VSS_V15"],
  pin478: ["VDD", "V16", "VDD_V16"],
  pin479: ["VSS", "V17", "VSS_V17"],
  pin480: ["VDD_IVA", "V18", "VDD_IVA_V18"],
  pin481: ["VDD_IVA", "V19", "VDD_IVA_V19"],
  pin482: ["DDR1_D16", "V20"],
  pin483: ["VDDS18V", "V21", "VDDS18V_V21"],
  pin484: ["VDDS18V", "V22", "VDDS18V_V22"],
  pin485: ["DDR1_ECC_D1", "V23"],
  pin486: ["DDR1_ECC_D5", "V24"],
  pin487: ["DDR1_ECC_D6", "V25"],
  pin488: ["DDR1_DQM_ECC", "V26"],
  pin489: ["DDR1_DQS_ECC", "V27"],
  pin490: ["DDR1_DQSN_ECC", "V28"],
  pin491: ["VSS", "W1", "VSS_W1"],
  pin492: ["RGMII0_RXD0", "W2"],
  pin493: ["VDDSHV9", "W4", "VDDSHV9_W4"],
  pin494: ["VDDSHV9", "W5", "VDDSHV9_W5"],
  pin495: ["MMC1_CLK", "W6"],
  pin496: ["MMC1_SDCD", "W7"],
  pin497: ["VDDSHV8", "W8", "VDDSHV8_W8"],
  pin498: ["RGMII0_TXC", "W9"],
  pin499: ["VDD_GPU", "W10", "VDD_GPU_W10"],
  pin500: ["VDD_GPU", "W11", "VDD_GPU_W11"],
  pin501: ["VDDA_USB3", "W12"],
  pin502: ["VDD_GPU", "W13", "VDD_GPU_W13"],
  pin503: ["VDDA_PCIE", "W14"],
  pin504: ["VSS", "W15", "VSS_W15"],
  pin505: ["VDDS_DDR1", "W16", "VDDS_DDR1_W16"],
  pin506: ["VDDS18V", "W17", "VDDS18V_W17"],
  pin507: ["VDDS18V", "W18", "VDDS18V_W18"],
  pin508: ["DDR1_ECC_D2", "W19"],
  pin509: ["DDR1_D17", "W20"],
  pin510: ["VDDS18V_DDR1", "W21", "VDDS18V_DDR1_W21"],
  pin511: ["DDR1_ECC_D0", "W22"],
  pin512: ["DDR1_ECC_D3", "W23"],
  pin513: ["VSS", "W24", "VSS_W24"],
  pin514: ["VSS", "W25", "VSS_W25"],
  pin515: ["VDDS_DDR1", "W27", "VDDS_DDR1_W27"],
  pin516: ["VSS", "W28", "VSS_W28"],
  pin517: ["UART3_TXD", "Y1"],
  pin518: ["RGMII0_RXD1", "Y2"],
  pin519: ["MMC1_DAT3", "Y3"],
  pin520: ["MMC1_DAT1", "Y4"],
  pin521: ["RESERVED", "Y5", "RESERVED_Y5"],
  pin522: ["MMC1_CMD", "Y6"],
  pin523: ["VDDS_MLBP", "Y7", "VDDS_MLBP_Y7"],
  pin524: ["VDDSHV8", "Y8", "VDDSHV8_Y8"],
  pin525: ["MMC1_SDWP", "Y9"],
  pin526: ["RESERVED", "Y10", "RESERVED_Y10"],
  pin527: ["ON_OFF", "Y11"],
  pin528: ["VDDA33V_USB2", "Y12"],
  pin529: ["CAP_VDDRAM_GPU", "Y13"],
  pin530: ["CAP_VBBLDO_GPU", "Y14"],
  pin531: ["CAP_VDDRAM_CORE3", "Y15"],
  pin532: ["CAP_VDDRAM_CORE5", "Y16"],
  pin533: ["VDDA_HDMI", "Y17"],
  pin534: ["DDR1_VREF0", "Y18"],
  pin535: ["DDR1_D21", "Y19"],
  pin536: ["DDR1_D23", "Y20"],
  pin537: ["VDDS18V_DDR1", "Y21", "VDDS18V_DDR1_Y21"],
  pin538: ["DDR1_D25", "Y22"],
  pin539: ["DDR1_D26", "Y23"],
  pin540: ["DDR1_D28", "Y24"],
  pin541: ["DDR1_ECC_D4", "Y25"],
  pin542: ["DDR1_ECC_D7", "Y26"],
  pin543: ["DDR1_DQSN3", "Y27"],
  pin544: ["DDR1_DQS3", "Y28"],
  pin545: ["MLBP_DAT_P", "AA1"],
  pin546: ["MLBP_DAT_N", "AA2"],
  pin547: ["MCASP5_ACLKX", "AA3"],
  pin548: ["MCASP5_AXR1", "AA4"],
  pin549: ["MMC1_DAT2", "AA5"],
  pin550: ["MMC1_DAT0", "AA6"],
  pin551: ["VDDS_MLBP", "AA7", "VDDS_MLBP_AA7"],
  pin552: ["VSS", "AA8", "VSS_AA8"],
  pin553: ["VSS", "AA9", "VSS_AA9"],
  pin554: ["VSS", "AA10", "VSS_AA10"],
  pin555: ["VSSA_USB", "AA11", "VSSA_USB_AA11"],
  pin556: ["VDDA33V_USB1", "AA12"],
  pin557: ["VDDA_USB1", "AA13"],
  pin558: ["VSS", "AA14", "VSS_AA14"],
  pin559: ["VSS", "AA15", "VSS_AA15"],
  pin560: ["VDDA_PCIE1", "AA16"],
  pin561: ["VDDA_PCIE0", "AA17"],
  pin562: ["VDDS18V_DDR1", "AA18", "VDDS18V_DDR1_AA18"],
  pin563: ["VDDS18V_DDR1", "AA19", "VDDS18V_DDR1_AA19"],
  pin564: ["VSS", "AA20", "VSS_AA20"],
  pin565: ["VDDS_DDR1", "AA21", "VDDS_DDR1_AA21"],
  pin566: ["VDDS_DDR1", "AA22", "VDDS_DDR1_AA22"],
  pin567: ["DDR1_D24", "AA23"],
  pin568: ["DDR1_D27", "AA24"],
  pin569: ["DDR1_D30", "AA25"],
  pin570: ["DDR1_D29", "AA26"],
  pin571: ["DDR1_DQM3", "AA27"],
  pin572: ["DDR1_D31", "AA28"],
  pin573: ["MLBP_CLK_P", "AB1"],
  pin574: ["MLBP_CLK_N", "AB2"],
  pin575: ["MCASP5_AXR0", "AB3"],
  pin576: ["GPIO6_11", "AB4"],
  pin577: ["MMC3_DAT7", "AB5"],
  pin578: ["VDDSHV7", "AB6", "VDDSHV7_AB6"],
  pin579: ["VDDSHV7", "AB7", "VDDSHV7_AB7"],
  pin580: ["MMC3_DAT6", "AB8"],
  pin581: ["MCASP5_FSX", "AB9"],
  pin582: ["USB1_DRVVBUS", "AB10"],
  pin583: ["VSSA_USB", "AB11", "VSSA_USB_AB11"],
  pin584: ["VDDA_USB2", "AB12"],
  pin585: ["VDDA_RTC", "AB13"],
  pin586: ["VSS", "AB14", "VSS_AB14"],
  pin587: ["VDD_RTC", "AB15"],
  pin588: ["WAKEUP2", "AB16"],
  pin589: ["RTC_PORZ", "AB17"],
  pin590: ["DDR1_BA2", "AB18"],
  pin591: ["DDR1_A3", "AB19"],
  pin592: ["VSS", "AB20", "VSS_AB20"],
  pin593: ["VDDS_DDR1", "AB21", "VDDS_DDR1_AB21"],
  pin594: ["VDDS_DDR1", "AB22", "VDDS_DDR1_AB22"],
  pin595: ["DDR1_DQM1", "AB23"],
  pin596: ["VDDS_DDR1", "AB24", "VDDS_DDR1_AB24"],
  pin597: ["VDDS_DDR1", "AB25", "VDDS_DDR1_AB25"],
  pin598: ["DDR1_D22", "AB27"],
  pin599: ["DDR1_D18", "AB28"],
  pin600: ["MLBP_SIG_P", "AC1"],
  pin601: ["MLBP_SIG_N", "AC2"],
  pin602: ["MMC3_DAT3", "AC3"],
  pin603: ["MMC3_CMD", "AC4"],
  pin604: ["GPIO6_10", "AC5"],
  pin605: ["MMC3_DAT1", "AC6"],
  pin606: ["MMC3_DAT0", "AC7"],
  pin607: ["MMC3_DAT4", "AC8"],
  pin608: ["MMC3_DAT2", "AC9"],
  pin609: ["USB2_DRVVBUS", "AC10"],
  pin610: ["USB_TXN0", "AC11"],
  pin611: ["USB1_DM", "AC12"],
  pin612: ["XO_OSC1", "AC13"],
  pin613: ["VSSA_OSC1", "AC14"],
  pin614: ["XI_OSC1", "AC15"],
  pin615: ["WAKEUP3", "AC16"],
  pin616: ["WAKEUP1", "AC17"],
  pin617: ["DDR1_CASN", "AC18"],
  pin618: ["DDR1_A1", "AC19"],
  pin619: ["DDR1_A2", "AC20"],
  pin620: ["DDR1_A12", "AC21"],
  pin621: ["VDDS_DDR1", "AC22", "VDDS_DDR1_AC22"],
  pin622: ["DDR1_D8", "AC23"],
  pin623: ["DDR1_D14", "AC24"],
  pin624: ["DDR1_D13", "AC25"],
  pin625: ["DDR1_DQM2", "AC26"],
  pin626: ["DDR1_D20", "AC27"],
  pin627: ["DDR1_D19", "AC28"],
  pin628: ["VSS", "AD1", "VSS_AD1"],
  pin629: ["VIN1A_D22", "AD2"],
  pin630: ["VIN1A_D23", "AD3"],
  pin631: ["MMC3_CLK", "AD4"],
  pin632: ["VDDSHV6", "AD5", "VDDSHV6_AD5"],
  pin633: ["MMC3_DAT5", "AD6"],
  pin634: ["VDDSHV6", "AD7", "VDDSHV6_AD7"],
  pin635: ["VIN1A_D1", "AD8"],
  pin636: ["VIN1A_DE0", "AD9"],
  pin637: ["VSSA_USB3", "AD10"],
  pin638: ["USB_TXP0", "AD11"],
  pin639: ["USB1_DP", "AD12"],
  pin640: ["VSSA_PCIE", "AD13", "VSSA_PCIE_AD13"],
  pin641: ["RTC_OSC_XO", "AD14"],
  pin642: ["XO_OSC0", "AD15"],
  pin643: ["VDDA_OSC", "AD16", "VDDA_OSC_AD16"],
  pin644: ["WAKEUP0", "AD17"],
  pin645: ["DDR1_A15", "AD18"],
  pin646: ["VSSA_HDMI", "AD19", "VSSA_HDMI_AD19"],
  pin647: ["DDR1_A0", "AD20"],
  pin648: ["DDR1_A10", "AD21"],
  pin649: ["DDR1_A11", "AD22"],
  pin650: ["DDR1_DQM0", "AD23"],
  pin651: ["VSS", "AD24", "VSS_AD24"],
  pin652: ["DDR1_D15", "AD25"],
  pin653: ["VDDS_DDR1", "AD26", "VDDS_DDR1_AD26"],
  pin654: ["DDR1_DQS2", "AD27"],
  pin655: ["DDR1_DQSN2", "AD28"],
  pin656: ["VIN1A_D19", "AE1"],
  pin657: ["VIN1A_D20", "AE2"],
  pin658: ["VIN1A_D17", "AE3"],
  pin659: ["VIN1A_D18", "AE5"],
  pin660: ["VIN1A_D21", "AE6"],
  pin661: ["VDDSHV6", "AE7", "VDDSHV6_AE7"],
  pin662: ["VIN1A_D0", "AE8"],
  pin663: ["VIN1A_HSYNC0", "AE9"],
  pin664: ["VSSA_SATA", "AE10"],
  pin665: ["USB2_DP", "AE11"],
  pin666: ["USB_RXP0", "AE12"],
  pin667: ["VSSA_PCIE", "AE13", "VSSA_PCIE_AE13"],
  pin668: ["RTC_OSC_XI_CLKIN32", "AE14"],
  pin669: ["XI_OSC0", "AE15"],
  pin670: ["VDDA_OSC", "AE16", "VDDA_OSC_AE16"],
  pin671: ["DDR1_A14", "AE17"],
  pin672: ["DDR1_BA1", "AE18"],
  pin673: ["VSSA_HDMI", "AE19", "VSSA_HDMI_AE19"],
  pin674: ["DDR1_ODT0", "AE20"],
  pin675: ["DDR1_A7", "AE21"],
  pin676: ["DDR1_A9", "AE22"],
  pin677: ["DDR1_D7", "AE23"],
  pin678: ["DDR1_D5", "AE24"],
  pin679: ["DDR1_D12", "AE26"],
  pin680: ["DDR1_DQS1", "AE27"],
  pin681: ["DDR1_DQSN1", "AE28"],
  pin682: ["VIN1A_D16", "AF1"],
  pin683: ["VIN1A_D12", "AF2"],
  pin684: ["VIN1A_D14", "AF3"],
  pin685: ["VIN1A_D15", "AF4"],
  pin686: ["VDDSHV6", "AF5", "VDDSHV6_AF5"],
  pin687: ["VIN1A_D13", "AF6"],
  pin688: ["VIN1A_VSYNC0", "AF8"],
  pin689: ["VIN1A_FLD0", "AF9"],
  pin690: ["USB2_DM", "AF11"],
  pin691: ["USB_RXN0", "AF12"],
  pin692: ["RTC_ISO", "AF14"],
  pin693: ["VSSA_OSC0", "AF15"],
  pin694: ["DDR1_BA0", "AF17"],
  pin695: ["DDR1_A13", "AF18"],
  pin696: ["DDR1_RASN", "AF20"],
  pin697: ["DDR1_A4", "AF21"],
  pin698: ["DDR1_A8", "AF22"],
  pin699: ["DDR1_D6", "AF23"],
  pin700: ["DDR1_D4", "AF24"],
  pin701: ["DDR1_D0", "AF25"],
  pin702: ["DDR1_D1", "AF26"],
  pin703: ["DDR1_D9", "AF27"],
  pin704: ["DDR1_D11", "AF28"],
  pin705: ["VSS", "AG1", "VSS_AG1"],
  pin706: ["VIN1A_D9", "AG2"],
  pin707: ["VIN1A_D10", "AG3"],
  pin708: ["VIN1A_D8", "AG4"],
  pin709: ["VIN1A_D11", "AG5"],
  pin710: ["VIN1A_D6", "AG6"],
  pin711: ["VIN1A_D2", "AG7"],
  pin712: ["VIN1A_CLK0", "AG8"],
  pin713: ["SATA1_RXP0", "AG9"],
  pin714: ["SATA1_TXN0", "AG10"],
  pin715: ["PCIE_RXN1", "AG11"],
  pin716: ["PCIE_TXN1", "AG12"],
  pin717: ["PCIE_RXN0", "AG13"],
  pin718: ["PCIE_TXN0", "AG14"],
  pin719: ["LJCB_CLKP", "AG15"],
  pin720: ["HDMI1_CLOCKX", "AG16"],
  pin721: ["HDMI1_DATA0X", "AG17"],
  pin722: ["HDMI1_DATA1X", "AG18"],
  pin723: ["HDMI1_DATA2X", "AG19"],
  pin724: ["VDDS_DDR1", "AG20", "VDDS_DDR1_AG20"],
  pin725: ["DDR1_RST", "AG21"],
  pin726: ["DDR1_CKE", "AG22"],
  pin727: ["DDR1_A6", "AG23"],
  pin728: ["DDR1_CK", "AG24"],
  pin729: ["DDR1_DQSN0", "AG25"],
  pin730: ["DDR1_D2", "AG26"],
  pin731: ["DDR1_D10", "AG27"],
  pin732: ["VDDS_DDR1", "AG28", "VDDS_DDR1_AG28"],
  pin733: ["VSS", "AH1", "VSS_AH1"],
  pin734: ["VSS", "AH2", "VSS_AH2"],
  pin735: ["VIN1A_D4", "AH3"],
  pin736: ["VIN1A_D7", "AH4"],
  pin737: ["VIN1A_D5", "AH5"],
  pin738: ["VIN1A_D3", "AH6"],
  pin739: ["VIN1B_CLK1", "AH7"],
  pin740: ["VSS", "AH8", "VSS_AH8"],
  pin741: ["SATA1_RXN0", "AH9"],
  pin742: ["SATA1_TXP0", "AH10"],
  pin743: ["PCIE_RXP1", "AH11"],
  pin744: ["PCIE_TXP1", "AH12"],
  pin745: ["PCIE_RXP0", "AH13"],
  pin746: ["PCIE_TXP0", "AH14"],
  pin747: ["LJCB_CLKN", "AH15"],
  pin748: ["HDMI1_CLOCKY", "AH16"],
  pin749: ["HDMI1_DATA0Y", "AH17"],
  pin750: ["HDMI1_DATA1Y", "AH18"],
  pin751: ["HDMI1_DATA2Y", "AH19"],
  pin752: ["VSS", "AH20", "VSS_AH20"],
  pin753: ["DDR1_WEN", "AH21"],
  pin754: ["DDR1_A5", "AH22"],
  pin755: ["DDR1_CSN0", "AH23"],
  pin756: ["DDR1_NCK", "AH24"],
  pin757: ["DDR1_DQS0", "AH25"],
  pin758: ["DDR1_D3", "AH26"],
  pin759: ["VDDS_DDR1", "AH27", "VDDS_DDR1_AH27"],
  pin760: ["VSS", "AH28", "VSS_AH28"],
} as const;

const pinRoles = {
  pin1: "ground",
  pin2: "ground",
  pin3: "power",
  pin4: "power",
  pin5: "output",
  pin6: "ground",
  pin7: "output",
  pin8: "output",
  pin9: "output",
  pin10: "output",
  pin11: "unknown",
  pin12: "unknown",
  pin13: "unknown",
  pin14: "ground",
  pin15: "unknown",
  pin16: "unknown",
  pin17: "unknown",
  pin18: "unknown",
  pin19: "unknown",
  pin20: "unknown",
  pin21: "unknown",
  pin22: "control",
  pin23: "ground",
  pin24: "control",
  pin25: "control",
  pin26: "control",
  pin27: "no-connect",
  pin28: "ground",
  pin29: "ground",
  pin30: "power",
  pin31: "power",
  pin32: "power",
  pin33: "power",
  pin34: "power",
  pin35: "output",
  pin36: "output",
  pin37: "output",
  pin38: "output",
  pin39: "output",
  pin40: "unknown",
  pin41: "unknown",
  pin42: "unknown",
  pin43: "unknown",
  pin44: "unknown",
  pin45: "unknown",
  pin46: "unknown",
  pin47: "unknown",
  pin48: "control",
  pin49: "control",
  pin50: "unknown",
  pin51: "power",
  pin52: "control",
  pin53: "unknown",
  pin54: "control",
  pin55: "input",
  pin56: "no-connect",
  pin57: "power",
  pin58: "power",
  pin59: "power",
  pin60: "power",
  pin61: "power",
  pin62: "output",
  pin63: "output",
  pin64: "output",
  pin65: "output",
  pin66: "output",
  pin67: "unknown",
  pin68: "unknown",
  pin69: "unknown",
  pin70: "unknown",
  pin71: "unknown",
  pin72: "control",
  pin73: "bidirectional",
  pin74: "control",
  pin75: "power",
  pin76: "bidirectional",
  pin77: "output",
  pin78: "unknown",
  pin79: "unknown",
  pin80: "power",
  pin81: "power",
  pin82: "power",
  pin83: "power",
  pin84: "power",
  pin85: "output",
  pin86: "output",
  pin87: "output",
  pin88: "power",
  pin89: "control",
  pin90: "unknown",
  pin91: "ground",
  pin92: "unknown",
  pin93: "unknown",
  pin94: "power",
  pin95: "unknown",
  pin96: "control",
  pin97: "ground",
  pin98: "unknown",
  pin99: "unknown",
  pin100: "power",
  pin101: "unknown",
  pin102: "unknown",
  pin103: "output",
  pin104: "unknown",
  pin105: "input",
  pin106: "control",
  pin107: "power",
  pin108: "power",
  pin109: "power",
  pin110: "power",
  pin111: "power",
  pin112: "output",
  pin113: "output",
  pin114: "output",
  pin115: "power",
  pin116: "output",
  pin117: "unknown",
  pin118: "ground",
  pin119: "unknown",
  pin120: "unknown",
  pin121: "power",
  pin122: "control",
  pin123: "unknown",
  pin124: "ground",
  pin125: "unknown",
  pin126: "bidirectional",
  pin127: "power",
  pin128: "control",
  pin129: "power",
  pin130: "unknown",
  pin131: "unknown",
  pin132: "unknown",
  pin133: "unknown",
  pin134: "ground",
  pin135: "power",
  pin136: "power",
  pin137: "power",
  pin138: "power",
  pin139: "power",
  pin140: "ground",
  pin141: "output",
  pin142: "output",
  pin143: "output",
  pin144: "output",
  pin145: "unknown",
  pin146: "unknown",
  pin147: "unknown",
  pin148: "unknown",
  pin149: "unknown",
  pin150: "control",
  pin151: "unknown",
  pin152: "unknown",
  pin153: "bidirectional",
  pin154: "bidirectional",
  pin155: "unknown",
  pin156: "control",
  pin157: "unknown",
  pin158: "unknown",
  pin159: "unknown",
  pin160: "unknown",
  pin161: "bidirectional",
  pin162: "power",
  pin163: "power",
  pin164: "power",
  pin165: "power",
  pin166: "power",
  pin167: "ground",
  pin168: "ground",
  pin169: "ground",
  pin170: "output",
  pin171: "output",
  pin172: "unknown",
  pin173: "unknown",
  pin174: "unknown",
  pin175: "power",
  pin176: "unknown",
  pin177: "unknown",
  pin178: "power",
  pin179: "input",
  pin180: "output",
  pin181: "unknown",
  pin182: "power",
  pin183: "power",
  pin184: "bidirectional",
  pin185: "unknown",
  pin186: "unknown",
  pin187: "bidirectional",
  pin188: "bidirectional",
  pin189: "unknown",
  pin190: "unknown",
  pin191: "unknown",
  pin192: "unknown",
  pin193: "unknown",
  pin194: "control",
  pin195: "power",
  pin196: "power",
  pin197: "power",
  pin198: "power",
  pin199: "power",
  pin200: "ground",
  pin201: "power",
  pin202: "power",
  pin203: "power",
  pin204: "power",
  pin205: "power",
  pin206: "power",
  pin207: "power",
  pin208: "power",
  pin209: "power",
  pin210: "power",
  pin211: "unknown",
  pin212: "unknown",
  pin213: "unknown",
  pin214: "unknown",
  pin215: "bidirectional",
  pin216: "bidirectional",
  pin217: "unknown",
  pin218: "unknown",
  pin219: "unknown",
  pin220: "unknown",
  pin221: "unknown",
  pin222: "unknown",
  pin223: "unknown",
  pin224: "power",
  pin225: "power",
  pin226: "power",
  pin227: "unknown",
  pin228: "ground",
  pin229: "power",
  pin230: "unknown",
  pin231: "ground",
  pin232: "unknown",
  pin233: "power",
  pin234: "power",
  pin235: "power",
  pin236: "unknown",
  pin237: "power",
  pin238: "power",
  pin239: "unknown",
  pin240: "unknown",
  pin241: "unknown",
  pin242: "unknown",
  pin243: "power",
  pin244: "ground",
  pin245: "ground",
  pin246: "unknown",
  pin247: "ground",
  pin248: "ground",
  pin249: "unknown",
  pin250: "unknown",
  pin251: "power",
  pin252: "unknown",
  pin253: "power",
  pin254: "power",
  pin255: "power",
  pin256: "power",
  pin257: "no-connect",
  pin258: "ground",
  pin259: "power",
  pin260: "power",
  pin261: "power",
  pin262: "power",
  pin263: "unknown",
  pin264: "unknown",
  pin265: "unknown",
  pin266: "bidirectional",
  pin267: "ground",
  pin268: "ground",
  pin269: "bidirectional",
  pin270: "bidirectional",
  pin271: "unknown",
  pin272: "unknown",
  pin273: "unknown",
  pin274: "unknown",
  pin275: "unknown",
  pin276: "unknown",
  pin277: "power",
  pin278: "power",
  pin279: "power",
  pin280: "power",
  pin281: "power",
  pin282: "power",
  pin283: "ground",
  pin284: "ground",
  pin285: "power",
  pin286: "power",
  pin287: "power",
  pin288: "power",
  pin289: "power",
  pin290: "power",
  pin291: "power",
  pin292: "unknown",
  pin293: "unknown",
  pin294: "unknown",
  pin295: "unknown",
  pin296: "unknown",
  pin297: "unknown",
  pin298: "unknown",
  pin299: "unknown",
  pin300: "unknown",
  pin301: "unknown",
  pin302: "unknown",
  pin303: "control",
  pin304: "unknown",
  pin305: "unknown",
  pin306: "power",
  pin307: "power",
  pin308: "power",
  pin309: "power",
  pin310: "power",
  pin311: "power",
  pin312: "power",
  pin313: "power",
  pin314: "power",
  pin315: "power",
  pin316: "power",
  pin317: "ground",
  pin318: "power",
  pin319: "power",
  pin320: "bidirectional",
  pin321: "unknown",
  pin322: "unknown",
  pin323: "unknown",
  pin324: "unknown",
  pin325: "bidirectional",
  pin326: "bidirectional",
  pin327: "unknown",
  pin328: "unknown",
  pin329: "power",
  pin330: "power",
  pin331: "unknown",
  pin332: "unknown",
  pin333: "power",
  pin334: "unknown",
  pin335: "power",
  pin336: "power",
  pin337: "power",
  pin338: "power",
  pin339: "ground",
  pin340: "ground",
  pin341: "power",
  pin342: "power",
  pin343: "power",
  pin344: "ground",
  pin345: "unknown",
  pin346: "power",
  pin347: "power",
  pin348: "unknown",
  pin349: "ground",
  pin350: "ground",
  pin351: "unknown",
  pin352: "unknown",
  pin353: "control",
  pin354: "control",
  pin355: "unknown",
  pin356: "unknown",
  pin357: "unknown",
  pin358: "unknown",
  pin359: "control",
  pin360: "power",
  pin361: "unknown",
  pin362: "power",
  pin363: "power",
  pin364: "power",
  pin365: "power",
  pin366: "power",
  pin367: "power",
  pin368: "power",
  pin369: "power",
  pin370: "power",
  pin371: "power",
  pin372: "power",
  pin373: "power",
  pin374: "unknown",
  pin375: "unknown",
  pin376: "control",
  pin377: "unknown",
  pin378: "unknown",
  pin379: "unknown",
  pin380: "ground",
  pin381: "ground",
  pin382: "unknown",
  pin383: "unknown",
  pin384: "unknown",
  pin385: "unknown",
  pin386: "unknown",
  pin387: "power",
  pin388: "power",
  pin389: "unknown",
  pin390: "power",
  pin391: "power",
  pin392: "ground",
  pin393: "ground",
  pin394: "power",
  pin395: "ground",
  pin396: "power",
  pin397: "power",
  pin398: "power",
  pin399: "power",
  pin400: "unknown",
  pin401: "ground",
  pin402: "unknown",
  pin403: "unknown",
  pin404: "control",
  pin405: "unknown",
  pin406: "unknown",
  pin407: "unknown",
  pin408: "unknown",
  pin409: "control",
  pin410: "unknown",
  pin411: "power",
  pin412: "power",
  pin413: "unknown",
  pin414: "unknown",
  pin415: "power",
  pin416: "unknown",
  pin417: "ground",
  pin418: "ground",
  pin419: "ground",
  pin420: "power",
  pin421: "ground",
  pin422: "ground",
  pin423: "power",
  pin424: "ground",
  pin425: "ground",
  pin426: "power",
  pin427: "power",
  pin428: "ground",
  pin429: "unknown",
  pin430: "unknown",
  pin431: "power",
  pin432: "power",
  pin433: "unknown",
  pin434: "unknown",
  pin435: "unknown",
  pin436: "unknown",
  pin437: "control",
  pin438: "unknown",
  pin439: "input",
  pin440: "output",
  pin441: "output",
  pin442: "power",
  pin443: "power",
  pin444: "power",
  pin445: "power",
  pin446: "power",
  pin447: "power",
  pin448: "ground",
  pin449: "ground",
  pin450: "power",
  pin451: "ground",
  pin452: "power",
  pin453: "power",
  pin454: "ground",
  pin455: "ground",
  pin456: "unknown",
  pin457: "unknown",
  pin458: "unknown",
  pin459: "unknown",
  pin460: "unknown",
  pin461: "unknown",
  pin462: "unknown",
  pin463: "unknown",
  pin464: "input",
  pin465: "input",
  pin466: "input",
  pin467: "input",
  pin468: "output",
  pin469: "output",
  pin470: "power",
  pin471: "output",
  pin472: "power",
  pin473: "power",
  pin474: "power",
  pin475: "power",
  pin476: "power",
  pin477: "ground",
  pin478: "power",
  pin479: "ground",
  pin480: "power",
  pin481: "power",
  pin482: "unknown",
  pin483: "power",
  pin484: "power",
  pin485: "unknown",
  pin486: "unknown",
  pin487: "unknown",
  pin488: "bidirectional",
  pin489: "bidirectional",
  pin490: "bidirectional",
  pin491: "ground",
  pin492: "input",
  pin493: "power",
  pin494: "power",
  pin495: "control",
  pin496: "unknown",
  pin497: "power",
  pin498: "output",
  pin499: "power",
  pin500: "power",
  pin501: "power",
  pin502: "power",
  pin503: "power",
  pin504: "ground",
  pin505: "power",
  pin506: "power",
  pin507: "power",
  pin508: "unknown",
  pin509: "unknown",
  pin510: "power",
  pin511: "unknown",
  pin512: "unknown",
  pin513: "ground",
  pin514: "ground",
  pin515: "power",
  pin516: "ground",
  pin517: "output",
  pin518: "input",
  pin519: "unknown",
  pin520: "unknown",
  pin521: "no-connect",
  pin522: "unknown",
  pin523: "power",
  pin524: "power",
  pin525: "unknown",
  pin526: "no-connect",
  pin527: "unknown",
  pin528: "power",
  pin529: "power",
  pin530: "unknown",
  pin531: "power",
  pin532: "power",
  pin533: "power",
  pin534: "power",
  pin535: "unknown",
  pin536: "unknown",
  pin537: "power",
  pin538: "unknown",
  pin539: "unknown",
  pin540: "unknown",
  pin541: "unknown",
  pin542: "unknown",
  pin543: "bidirectional",
  pin544: "bidirectional",
  pin545: "unknown",
  pin546: "unknown",
  pin547: "unknown",
  pin548: "unknown",
  pin549: "unknown",
  pin550: "unknown",
  pin551: "power",
  pin552: "ground",
  pin553: "ground",
  pin554: "ground",
  pin555: "ground",
  pin556: "power",
  pin557: "power",
  pin558: "ground",
  pin559: "ground",
  pin560: "power",
  pin561: "power",
  pin562: "power",
  pin563: "power",
  pin564: "ground",
  pin565: "power",
  pin566: "power",
  pin567: "unknown",
  pin568: "unknown",
  pin569: "unknown",
  pin570: "unknown",
  pin571: "bidirectional",
  pin572: "unknown",
  pin573: "control",
  pin574: "control",
  pin575: "unknown",
  pin576: "bidirectional",
  pin577: "unknown",
  pin578: "power",
  pin579: "power",
  pin580: "unknown",
  pin581: "unknown",
  pin582: "output",
  pin583: "ground",
  pin584: "power",
  pin585: "power",
  pin586: "ground",
  pin587: "power",
  pin588: "control",
  pin589: "unknown",
  pin590: "unknown",
  pin591: "unknown",
  pin592: "ground",
  pin593: "power",
  pin594: "power",
  pin595: "bidirectional",
  pin596: "power",
  pin597: "power",
  pin598: "unknown",
  pin599: "unknown",
  pin600: "unknown",
  pin601: "unknown",
  pin602: "unknown",
  pin603: "unknown",
  pin604: "bidirectional",
  pin605: "unknown",
  pin606: "unknown",
  pin607: "unknown",
  pin608: "unknown",
  pin609: "output",
  pin610: "output",
  pin611: "unknown",
  pin612: "unknown",
  pin613: "ground",
  pin614: "unknown",
  pin615: "control",
  pin616: "control",
  pin617: "unknown",
  pin618: "unknown",
  pin619: "unknown",
  pin620: "unknown",
  pin621: "power",
  pin622: "unknown",
  pin623: "unknown",
  pin624: "unknown",
  pin625: "bidirectional",
  pin626: "unknown",
  pin627: "unknown",
  pin628: "ground",
  pin629: "power",
  pin630: "power",
  pin631: "control",
  pin632: "power",
  pin633: "unknown",
  pin634: "power",
  pin635: "power",
  pin636: "power",
  pin637: "ground",
  pin638: "output",
  pin639: "unknown",
  pin640: "ground",
  pin641: "unknown",
  pin642: "unknown",
  pin643: "power",
  pin644: "control",
  pin645: "unknown",
  pin646: "ground",
  pin647: "unknown",
  pin648: "unknown",
  pin649: "unknown",
  pin650: "bidirectional",
  pin651: "ground",
  pin652: "unknown",
  pin653: "power",
  pin654: "bidirectional",
  pin655: "bidirectional",
  pin656: "power",
  pin657: "power",
  pin658: "power",
  pin659: "power",
  pin660: "power",
  pin661: "power",
  pin662: "power",
  pin663: "power",
  pin664: "ground",
  pin665: "unknown",
  pin666: "input",
  pin667: "ground",
  pin668: "control",
  pin669: "unknown",
  pin670: "power",
  pin671: "unknown",
  pin672: "unknown",
  pin673: "ground",
  pin674: "unknown",
  pin675: "unknown",
  pin676: "unknown",
  pin677: "unknown",
  pin678: "unknown",
  pin679: "unknown",
  pin680: "bidirectional",
  pin681: "bidirectional",
  pin682: "power",
  pin683: "power",
  pin684: "power",
  pin685: "power",
  pin686: "power",
  pin687: "power",
  pin688: "power",
  pin689: "power",
  pin690: "unknown",
  pin691: "input",
  pin692: "unknown",
  pin693: "ground",
  pin694: "unknown",
  pin695: "unknown",
  pin696: "unknown",
  pin697: "unknown",
  pin698: "unknown",
  pin699: "unknown",
  pin700: "unknown",
  pin701: "unknown",
  pin702: "unknown",
  pin703: "unknown",
  pin704: "unknown",
  pin705: "ground",
  pin706: "power",
  pin707: "power",
  pin708: "power",
  pin709: "power",
  pin710: "power",
  pin711: "power",
  pin712: "control",
  pin713: "input",
  pin714: "output",
  pin715: "input",
  pin716: "output",
  pin717: "input",
  pin718: "output",
  pin719: "control",
  pin720: "control",
  pin721: "bidirectional",
  pin722: "bidirectional",
  pin723: "bidirectional",
  pin724: "power",
  pin725: "control",
  pin726: "unknown",
  pin727: "unknown",
  pin728: "unknown",
  pin729: "bidirectional",
  pin730: "unknown",
  pin731: "unknown",
  pin732: "power",
  pin733: "ground",
  pin734: "ground",
  pin735: "power",
  pin736: "power",
  pin737: "power",
  pin738: "power",
  pin739: "control",
  pin740: "ground",
  pin741: "input",
  pin742: "output",
  pin743: "input",
  pin744: "output",
  pin745: "input",
  pin746: "output",
  pin747: "control",
  pin748: "control",
  pin749: "bidirectional",
  pin750: "bidirectional",
  pin751: "bidirectional",
  pin752: "ground",
  pin753: "unknown",
  pin754: "unknown",
  pin755: "control",
  pin756: "unknown",
  pin757: "bidirectional",
  pin758: "unknown",
  pin759: "power",
  pin760: "ground",
} as const;

const pinAttributes = {
  pin1: { requiresGround: true },
  pin2: { requiresGround: true },
  pin3: { requiresPower: true },
  pin4: { requiresPower: true },
  pin6: { requiresGround: true },
  pin14: { requiresGround: true },
  pin23: { requiresGround: true },
  pin27: { doNotConnect: true },
  pin28: { requiresGround: true },
  pin29: { requiresGround: true },
  pin30: { requiresPower: true },
  pin31: { requiresPower: true },
  pin32: { requiresPower: true },
  pin33: { requiresPower: true },
  pin34: { requiresPower: true },
  pin51: { requiresPower: true },
  pin56: { doNotConnect: true },
  pin57: { requiresPower: true },
  pin58: { requiresPower: true },
  pin59: { requiresPower: true },
  pin60: { requiresPower: true },
  pin61: { requiresPower: true },
  pin75: { requiresPower: true },
  pin80: { requiresPower: true },
  pin81: { requiresPower: true },
  pin82: { requiresPower: true },
  pin83: { requiresPower: true },
  pin84: { requiresPower: true },
  pin88: { requiresPower: true },
  pin91: { requiresGround: true },
  pin94: { requiresPower: true },
  pin97: { requiresGround: true },
  pin100: { requiresPower: true },
  pin107: { requiresPower: true },
  pin108: { requiresPower: true },
  pin109: { requiresPower: true },
  pin110: { requiresPower: true },
  pin111: { requiresPower: true },
  pin115: { requiresPower: true },
  pin118: { requiresGround: true },
  pin121: { requiresPower: true },
  pin124: { requiresGround: true },
  pin127: { requiresPower: true },
  pin129: { requiresPower: true },
  pin134: { requiresGround: true },
  pin135: { requiresPower: true },
  pin136: { requiresPower: true },
  pin137: { requiresPower: true },
  pin138: { requiresPower: true },
  pin139: { requiresPower: true },
  pin140: { requiresGround: true },
  pin162: { requiresPower: true },
  pin163: { requiresPower: true },
  pin164: { requiresPower: true },
  pin165: { requiresPower: true },
  pin166: { requiresPower: true },
  pin167: { requiresGround: true },
  pin168: { requiresGround: true },
  pin169: { requiresGround: true },
  pin175: { requiresPower: true },
  pin178: { requiresPower: true },
  pin182: { requiresPower: true },
  pin183: { requiresPower: true },
  pin195: { requiresPower: true },
  pin196: { requiresPower: true },
  pin197: { requiresPower: true },
  pin198: { requiresPower: true },
  pin199: { requiresPower: true },
  pin200: { requiresGround: true },
  pin201: { requiresPower: true },
  pin202: { requiresPower: true },
  pin203: { requiresPower: true },
  pin204: { requiresPower: true },
  pin205: { requiresPower: true },
  pin206: { requiresPower: true },
  pin207: { requiresPower: true },
  pin208: { requiresPower: true },
  pin209: { requiresPower: true },
  pin210: { requiresPower: true },
  pin224: { requiresPower: true },
  pin225: { requiresPower: true },
  pin226: { requiresPower: true },
  pin228: { requiresGround: true },
  pin229: { requiresPower: true },
  pin231: { requiresGround: true },
  pin233: { requiresPower: true },
  pin234: { requiresPower: true },
  pin235: { requiresPower: true },
  pin237: { requiresPower: true },
  pin238: { requiresPower: true },
  pin243: { requiresPower: true },
  pin244: { requiresGround: true },
  pin245: { requiresGround: true },
  pin247: { requiresGround: true },
  pin248: { requiresGround: true },
  pin251: { requiresPower: true },
  pin253: { requiresPower: true },
  pin254: { requiresPower: true },
  pin255: { requiresPower: true },
  pin256: { requiresPower: true },
  pin257: { doNotConnect: true },
  pin258: { requiresGround: true },
  pin259: { requiresPower: true },
  pin260: { requiresPower: true },
  pin261: { requiresPower: true },
  pin262: { requiresPower: true },
  pin267: { requiresGround: true },
  pin268: { requiresGround: true },
  pin277: { requiresPower: true },
  pin278: { requiresPower: true },
  pin279: { requiresPower: true },
  pin280: { requiresPower: true },
  pin281: { requiresPower: true },
  pin282: { requiresPower: true },
  pin283: { requiresGround: true },
  pin284: { requiresGround: true },
  pin285: { requiresPower: true },
  pin286: { requiresPower: true },
  pin287: { requiresPower: true },
  pin288: { requiresPower: true },
  pin289: { requiresPower: true },
  pin290: { requiresPower: true },
  pin291: { requiresPower: true },
  pin306: { requiresPower: true },
  pin307: { requiresPower: true },
  pin308: { requiresPower: true },
  pin309: { requiresPower: true },
  pin310: { requiresPower: true },
  pin311: { requiresPower: true },
  pin312: { requiresPower: true },
  pin313: { requiresPower: true },
  pin314: { requiresPower: true },
  pin315: { requiresPower: true },
  pin316: { requiresPower: true },
  pin317: { requiresGround: true },
  pin318: { requiresPower: true },
  pin319: { requiresPower: true },
  pin329: { requiresPower: true },
  pin330: { requiresPower: true },
  pin333: { requiresPower: true },
  pin335: { requiresPower: true },
  pin336: { requiresPower: true },
  pin337: { requiresPower: true },
  pin338: { requiresPower: true },
  pin339: { requiresGround: true },
  pin340: { requiresGround: true },
  pin341: { requiresPower: true },
  pin342: { requiresPower: true },
  pin343: { requiresPower: true },
  pin344: { requiresGround: true },
  pin346: { requiresPower: true },
  pin347: { requiresPower: true },
  pin349: { requiresGround: true },
  pin350: { requiresGround: true },
  pin360: { requiresPower: true },
  pin362: { requiresPower: true },
  pin363: { requiresPower: true },
  pin364: { requiresPower: true },
  pin365: { requiresPower: true },
  pin366: { requiresPower: true },
  pin367: { requiresPower: true },
  pin368: { requiresPower: true },
  pin369: { requiresPower: true },
  pin370: { requiresPower: true },
  pin371: { requiresPower: true },
  pin372: { requiresPower: true },
  pin373: { requiresPower: true },
  pin380: { requiresGround: true },
  pin381: { requiresGround: true },
  pin387: { requiresPower: true },
  pin388: { requiresPower: true },
  pin390: { requiresPower: true },
  pin391: { requiresPower: true },
  pin392: { requiresGround: true },
  pin393: { requiresGround: true },
  pin394: { requiresPower: true },
  pin395: { requiresGround: true },
  pin396: { requiresPower: true },
  pin397: { requiresPower: true },
  pin398: { requiresPower: true },
  pin399: { requiresPower: true },
  pin401: { requiresGround: true },
  pin411: { requiresPower: true },
  pin412: { requiresPower: true },
  pin415: { requiresPower: true },
  pin417: { requiresGround: true },
  pin418: { requiresGround: true },
  pin419: { requiresGround: true },
  pin420: { requiresPower: true },
  pin421: { requiresGround: true },
  pin422: { requiresGround: true },
  pin423: { requiresPower: true },
  pin424: { requiresGround: true },
  pin425: { requiresGround: true },
  pin426: { requiresPower: true },
  pin427: { requiresPower: true },
  pin428: { requiresGround: true },
  pin431: { requiresPower: true },
  pin432: { requiresPower: true },
  pin442: { requiresPower: true },
  pin443: { requiresPower: true },
  pin444: { requiresPower: true },
  pin445: { requiresPower: true },
  pin446: { requiresPower: true },
  pin447: { requiresPower: true },
  pin448: { requiresGround: true },
  pin449: { requiresGround: true },
  pin450: { requiresPower: true },
  pin451: { requiresGround: true },
  pin452: { requiresPower: true },
  pin453: { requiresPower: true },
  pin454: { requiresGround: true },
  pin455: { requiresGround: true },
  pin470: { requiresPower: true },
  pin472: { requiresPower: true },
  pin473: { requiresPower: true },
  pin474: { requiresPower: true },
  pin475: { requiresPower: true },
  pin476: { requiresPower: true },
  pin477: { requiresGround: true },
  pin478: { requiresPower: true },
  pin479: { requiresGround: true },
  pin480: { requiresPower: true },
  pin481: { requiresPower: true },
  pin483: { requiresPower: true },
  pin484: { requiresPower: true },
  pin491: { requiresGround: true },
  pin493: { requiresPower: true },
  pin494: { requiresPower: true },
  pin497: { requiresPower: true },
  pin499: { requiresPower: true },
  pin500: { requiresPower: true },
  pin501: { requiresPower: true },
  pin502: { requiresPower: true },
  pin503: { requiresPower: true },
  pin504: { requiresGround: true },
  pin505: { requiresPower: true },
  pin506: { requiresPower: true },
  pin507: { requiresPower: true },
  pin510: { requiresPower: true },
  pin513: { requiresGround: true },
  pin514: { requiresGround: true },
  pin515: { requiresPower: true },
  pin516: { requiresGround: true },
  pin521: { doNotConnect: true },
  pin523: { requiresPower: true },
  pin524: { requiresPower: true },
  pin526: { doNotConnect: true },
  pin528: { requiresPower: true },
  pin529: { requiresPower: true },
  pin531: { requiresPower: true },
  pin532: { requiresPower: true },
  pin533: { requiresPower: true },
  pin534: { requiresPower: true },
  pin537: { requiresPower: true },
  pin551: { requiresPower: true },
  pin552: { requiresGround: true },
  pin553: { requiresGround: true },
  pin554: { requiresGround: true },
  pin555: { requiresGround: true },
  pin556: { requiresPower: true },
  pin557: { requiresPower: true },
  pin558: { requiresGround: true },
  pin559: { requiresGround: true },
  pin560: { requiresPower: true },
  pin561: { requiresPower: true },
  pin562: { requiresPower: true },
  pin563: { requiresPower: true },
  pin564: { requiresGround: true },
  pin565: { requiresPower: true },
  pin566: { requiresPower: true },
  pin578: { requiresPower: true },
  pin579: { requiresPower: true },
  pin583: { requiresGround: true },
  pin584: { requiresPower: true },
  pin585: { requiresPower: true },
  pin586: { requiresGround: true },
  pin587: { requiresPower: true },
  pin592: { requiresGround: true },
  pin593: { requiresPower: true },
  pin594: { requiresPower: true },
  pin596: { requiresPower: true },
  pin597: { requiresPower: true },
  pin613: { requiresGround: true },
  pin621: { requiresPower: true },
  pin628: { requiresGround: true },
  pin629: { requiresPower: true },
  pin630: { requiresPower: true },
  pin632: { requiresPower: true },
  pin634: { requiresPower: true },
  pin635: { requiresPower: true },
  pin636: { requiresPower: true },
  pin637: { requiresGround: true },
  pin640: { requiresGround: true },
  pin643: { requiresPower: true },
  pin646: { requiresGround: true },
  pin651: { requiresGround: true },
  pin653: { requiresPower: true },
  pin656: { requiresPower: true },
  pin657: { requiresPower: true },
  pin658: { requiresPower: true },
  pin659: { requiresPower: true },
  pin660: { requiresPower: true },
  pin661: { requiresPower: true },
  pin662: { requiresPower: true },
  pin663: { requiresPower: true },
  pin664: { requiresGround: true },
  pin667: { requiresGround: true },
  pin670: { requiresPower: true },
  pin673: { requiresGround: true },
  pin682: { requiresPower: true },
  pin683: { requiresPower: true },
  pin684: { requiresPower: true },
  pin685: { requiresPower: true },
  pin686: { requiresPower: true },
  pin687: { requiresPower: true },
  pin688: { requiresPower: true },
  pin689: { requiresPower: true },
  pin693: { requiresGround: true },
  pin705: { requiresGround: true },
  pin706: { requiresPower: true },
  pin707: { requiresPower: true },
  pin708: { requiresPower: true },
  pin709: { requiresPower: true },
  pin710: { requiresPower: true },
  pin711: { requiresPower: true },
  pin724: { requiresPower: true },
  pin732: { requiresPower: true },
  pin733: { requiresGround: true },
  pin734: { requiresGround: true },
  pin735: { requiresPower: true },
  pin736: { requiresPower: true },
  pin737: { requiresPower: true },
  pin738: { requiresPower: true },
  pin740: { requiresGround: true },
  pin752: { requiresGround: true },
  pin759: { requiresPower: true },
  pin760: { requiresGround: true },
} as const;

export const AM5726BABCXA = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing ABC0760A; official source https://www.ti.com/lit/gpn/AM5726 pages 414,415,416
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="AM5726BABCXA"
      footprint={
        <footprint>
          <smtpad
            portHints={["A1"]}
            pcbX="-10.8mm"
            pcbY="10.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["A2"]}
            pcbX="-10mm"
            pcbY="10.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["A3"]}
            pcbX="-9.2mm"
            pcbY="10.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["A4"]}
            pcbX="-8.4mm"
            pcbY="10.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["A5"]}
            pcbX="-7.6mm"
            pcbY="10.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["A6"]}
            pcbX="-6.8mm"
            pcbY="10.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["A7"]}
            pcbX="-6mm"
            pcbY="10.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["A8"]}
            pcbX="-5.2mm"
            pcbY="10.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["A9"]}
            pcbX="-4.4mm"
            pcbY="10.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["A10"]}
            pcbX="-3.6mm"
            pcbY="10.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["A11"]}
            pcbX="-2.8mm"
            pcbY="10.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["A12"]}
            pcbX="-2mm"
            pcbY="10.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["A13"]}
            pcbX="-1.2mm"
            pcbY="10.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["A14"]}
            pcbX="-0.4mm"
            pcbY="10.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["A15"]}
            pcbX="0.4mm"
            pcbY="10.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["A16"]}
            pcbX="1.2mm"
            pcbY="10.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["A17"]}
            pcbX="2mm"
            pcbY="10.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["A18"]}
            pcbX="2.8mm"
            pcbY="10.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["A19"]}
            pcbX="3.6mm"
            pcbY="10.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["A20"]}
            pcbX="4.4mm"
            pcbY="10.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["A21"]}
            pcbX="5.2mm"
            pcbY="10.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["A22"]}
            pcbX="6mm"
            pcbY="10.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["A23"]}
            pcbX="6.8mm"
            pcbY="10.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["A24"]}
            pcbX="7.6mm"
            pcbY="10.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["A25"]}
            pcbX="8.4mm"
            pcbY="10.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["A26"]}
            pcbX="9.2mm"
            pcbY="10.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["A27"]}
            pcbX="10mm"
            pcbY="10.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["A28"]}
            pcbX="10.8mm"
            pcbY="10.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["B1"]}
            pcbX="-10.8mm"
            pcbY="10mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["B2"]}
            pcbX="-10mm"
            pcbY="10mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["B3"]}
            pcbX="-9.2mm"
            pcbY="10mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["B4"]}
            pcbX="-8.4mm"
            pcbY="10mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["B5"]}
            pcbX="-7.6mm"
            pcbY="10mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["B6"]}
            pcbX="-6.8mm"
            pcbY="10mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["B7"]}
            pcbX="-6mm"
            pcbY="10mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["B8"]}
            pcbX="-5.2mm"
            pcbY="10mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["B9"]}
            pcbX="-4.4mm"
            pcbY="10mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["B10"]}
            pcbX="-3.6mm"
            pcbY="10mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["B11"]}
            pcbX="-2.8mm"
            pcbY="10mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["B12"]}
            pcbX="-2mm"
            pcbY="10mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["B13"]}
            pcbX="-1.2mm"
            pcbY="10mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["B14"]}
            pcbX="-0.4mm"
            pcbY="10mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["B15"]}
            pcbX="0.4mm"
            pcbY="10mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["B16"]}
            pcbX="1.2mm"
            pcbY="10mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["B17"]}
            pcbX="2mm"
            pcbY="10mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["B18"]}
            pcbX="2.8mm"
            pcbY="10mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["B19"]}
            pcbX="3.6mm"
            pcbY="10mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["B20"]}
            pcbX="4.4mm"
            pcbY="10mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["B21"]}
            pcbX="5.2mm"
            pcbY="10mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["B22"]}
            pcbX="6mm"
            pcbY="10mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["B23"]}
            pcbX="6.8mm"
            pcbY="10mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["B24"]}
            pcbX="7.6mm"
            pcbY="10mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["B25"]}
            pcbX="8.4mm"
            pcbY="10mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["B26"]}
            pcbX="9.2mm"
            pcbY="10mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["B27"]}
            pcbX="10mm"
            pcbY="10mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["B28"]}
            pcbX="10.8mm"
            pcbY="10mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["C1"]}
            pcbX="-10.8mm"
            pcbY="9.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["C2"]}
            pcbX="-10mm"
            pcbY="9.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["C3"]}
            pcbX="-9.2mm"
            pcbY="9.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["C4"]}
            pcbX="-8.4mm"
            pcbY="9.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["C5"]}
            pcbX="-7.6mm"
            pcbY="9.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["C6"]}
            pcbX="-6.8mm"
            pcbY="9.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["C7"]}
            pcbX="-6mm"
            pcbY="9.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["C8"]}
            pcbX="-5.2mm"
            pcbY="9.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["C9"]}
            pcbX="-4.4mm"
            pcbY="9.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["C11"]}
            pcbX="-2.8mm"
            pcbY="9.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["C12"]}
            pcbX="-2mm"
            pcbY="9.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["C14"]}
            pcbX="-0.4mm"
            pcbY="9.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["C15"]}
            pcbX="0.4mm"
            pcbY="9.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["C17"]}
            pcbX="2mm"
            pcbY="9.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["C18"]}
            pcbX="2.8mm"
            pcbY="9.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["C20"]}
            pcbX="4.4mm"
            pcbY="9.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["C21"]}
            pcbX="5.2mm"
            pcbY="9.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["C23"]}
            pcbX="6.8mm"
            pcbY="9.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["C24"]}
            pcbX="7.6mm"
            pcbY="9.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["C25"]}
            pcbX="8.4mm"
            pcbY="9.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["C26"]}
            pcbX="9.2mm"
            pcbY="9.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["C27"]}
            pcbX="10mm"
            pcbY="9.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["C28"]}
            pcbX="10.8mm"
            pcbY="9.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["D1"]}
            pcbX="-10.8mm"
            pcbY="8.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["D2"]}
            pcbX="-10mm"
            pcbY="8.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["D3"]}
            pcbX="-9.2mm"
            pcbY="8.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["D5"]}
            pcbX="-7.6mm"
            pcbY="8.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["D6"]}
            pcbX="-6.8mm"
            pcbY="8.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["D7"]}
            pcbX="-6mm"
            pcbY="8.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["D8"]}
            pcbX="-5.2mm"
            pcbY="8.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["D9"]}
            pcbX="-4.4mm"
            pcbY="8.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["D10"]}
            pcbX="-3.6mm"
            pcbY="8.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["D11"]}
            pcbX="-2.8mm"
            pcbY="8.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["D12"]}
            pcbX="-2mm"
            pcbY="8.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["D13"]}
            pcbX="-1.2mm"
            pcbY="8.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["D14"]}
            pcbX="-0.4mm"
            pcbY="8.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["D15"]}
            pcbX="0.4mm"
            pcbY="8.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["D16"]}
            pcbX="1.2mm"
            pcbY="8.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["D17"]}
            pcbX="2mm"
            pcbY="8.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["D18"]}
            pcbX="2.8mm"
            pcbY="8.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["D19"]}
            pcbX="3.6mm"
            pcbY="8.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["D20"]}
            pcbX="4.4mm"
            pcbY="8.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["D21"]}
            pcbX="5.2mm"
            pcbY="8.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["D22"]}
            pcbX="6mm"
            pcbY="8.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["D23"]}
            pcbX="6.8mm"
            pcbY="8.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["D24"]}
            pcbX="7.6mm"
            pcbY="8.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["D26"]}
            pcbX="9.2mm"
            pcbY="8.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["D27"]}
            pcbX="10mm"
            pcbY="8.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["D28"]}
            pcbX="10.8mm"
            pcbY="8.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["E1"]}
            pcbX="-10.8mm"
            pcbY="7.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["E2"]}
            pcbX="-10mm"
            pcbY="7.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["E3"]}
            pcbX="-9.2mm"
            pcbY="7.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["E4"]}
            pcbX="-8.4mm"
            pcbY="7.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["E5"]}
            pcbX="-7.6mm"
            pcbY="7.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["E6"]}
            pcbX="-6.8mm"
            pcbY="7.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["E7"]}
            pcbX="-6mm"
            pcbY="7.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["E8"]}
            pcbX="-5.2mm"
            pcbY="7.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["E9"]}
            pcbX="-4.4mm"
            pcbY="7.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["E10"]}
            pcbX="-3.6mm"
            pcbY="7.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["E11"]}
            pcbX="-2.8mm"
            pcbY="7.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["E12"]}
            pcbX="-2mm"
            pcbY="7.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["E13"]}
            pcbX="-1.2mm"
            pcbY="7.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["E14"]}
            pcbX="-0.4mm"
            pcbY="7.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["E15"]}
            pcbX="0.4mm"
            pcbY="7.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["E16"]}
            pcbX="1.2mm"
            pcbY="7.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["E17"]}
            pcbX="2mm"
            pcbY="7.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["E18"]}
            pcbX="2.8mm"
            pcbY="7.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["E19"]}
            pcbX="3.6mm"
            pcbY="7.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["E20"]}
            pcbX="4.4mm"
            pcbY="7.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["E21"]}
            pcbX="5.2mm"
            pcbY="7.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["E22"]}
            pcbX="6mm"
            pcbY="7.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["E23"]}
            pcbX="6.8mm"
            pcbY="7.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["E24"]}
            pcbX="7.6mm"
            pcbY="7.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["E25"]}
            pcbX="8.4mm"
            pcbY="7.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["E26"]}
            pcbX="9.2mm"
            pcbY="7.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["E27"]}
            pcbX="10mm"
            pcbY="7.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["E28"]}
            pcbX="10.8mm"
            pcbY="7.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["F1"]}
            pcbX="-10.8mm"
            pcbY="6.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["F2"]}
            pcbX="-10mm"
            pcbY="6.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["F3"]}
            pcbX="-9.2mm"
            pcbY="6.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["F4"]}
            pcbX="-8.4mm"
            pcbY="6.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["F5"]}
            pcbX="-7.6mm"
            pcbY="6.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["F6"]}
            pcbX="-6.8mm"
            pcbY="6.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["F7"]}
            pcbX="-6mm"
            pcbY="6.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["F8"]}
            pcbX="-5.2mm"
            pcbY="6.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["F9"]}
            pcbX="-4.4mm"
            pcbY="6.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["F10"]}
            pcbX="-3.6mm"
            pcbY="6.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["F11"]}
            pcbX="-2.8mm"
            pcbY="6.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["F12"]}
            pcbX="-2mm"
            pcbY="6.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["F13"]}
            pcbX="-1.2mm"
            pcbY="6.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["F14"]}
            pcbX="-0.4mm"
            pcbY="6.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["F15"]}
            pcbX="0.4mm"
            pcbY="6.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["F16"]}
            pcbX="1.2mm"
            pcbY="6.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["F17"]}
            pcbX="2mm"
            pcbY="6.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["F18"]}
            pcbX="2.8mm"
            pcbY="6.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["F19"]}
            pcbX="3.6mm"
            pcbY="6.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["F20"]}
            pcbX="4.4mm"
            pcbY="6.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["F21"]}
            pcbX="5.2mm"
            pcbY="6.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["F22"]}
            pcbX="6mm"
            pcbY="6.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["F23"]}
            pcbX="6.8mm"
            pcbY="6.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["F24"]}
            pcbX="7.6mm"
            pcbY="6.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["F25"]}
            pcbX="8.4mm"
            pcbY="6.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["F26"]}
            pcbX="9.2mm"
            pcbY="6.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["F27"]}
            pcbX="10mm"
            pcbY="6.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["F28"]}
            pcbX="10.8mm"
            pcbY="6.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["G1"]}
            pcbX="-10.8mm"
            pcbY="6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["G2"]}
            pcbX="-10mm"
            pcbY="6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["G4"]}
            pcbX="-8.4mm"
            pcbY="6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["G5"]}
            pcbX="-7.6mm"
            pcbY="6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["G6"]}
            pcbX="-6.8mm"
            pcbY="6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["G7"]}
            pcbX="-6mm"
            pcbY="6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["G8"]}
            pcbX="-5.2mm"
            pcbY="6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["G9"]}
            pcbX="-4.4mm"
            pcbY="6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["G10"]}
            pcbX="-3.6mm"
            pcbY="6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["G11"]}
            pcbX="-2.8mm"
            pcbY="6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["G12"]}
            pcbX="-2mm"
            pcbY="6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["G13"]}
            pcbX="-1.2mm"
            pcbY="6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["G14"]}
            pcbX="-0.4mm"
            pcbY="6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["G15"]}
            pcbX="0.4mm"
            pcbY="6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["G16"]}
            pcbX="1.2mm"
            pcbY="6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["G17"]}
            pcbX="2mm"
            pcbY="6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["G18"]}
            pcbX="2.8mm"
            pcbY="6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["G19"]}
            pcbX="3.6mm"
            pcbY="6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["G20"]}
            pcbX="4.4mm"
            pcbY="6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["G21"]}
            pcbX="5.2mm"
            pcbY="6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["G22"]}
            pcbX="6mm"
            pcbY="6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["G23"]}
            pcbX="6.8mm"
            pcbY="6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["G24"]}
            pcbX="7.6mm"
            pcbY="6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["G25"]}
            pcbX="8.4mm"
            pcbY="6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["G26"]}
            pcbX="9.2mm"
            pcbY="6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["G27"]}
            pcbX="10mm"
            pcbY="6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["G28"]}
            pcbX="10.8mm"
            pcbY="6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["H1"]}
            pcbX="-10.8mm"
            pcbY="5.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["H2"]}
            pcbX="-10mm"
            pcbY="5.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["H3"]}
            pcbX="-9.2mm"
            pcbY="5.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["H4"]}
            pcbX="-8.4mm"
            pcbY="5.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["H5"]}
            pcbX="-7.6mm"
            pcbY="5.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["H6"]}
            pcbX="-6.8mm"
            pcbY="5.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["H7"]}
            pcbX="-6mm"
            pcbY="5.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["H8"]}
            pcbX="-5.2mm"
            pcbY="5.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["H9"]}
            pcbX="-4.4mm"
            pcbY="5.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["H10"]}
            pcbX="-3.6mm"
            pcbY="5.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["H11"]}
            pcbX="-2.8mm"
            pcbY="5.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["H12"]}
            pcbX="-2mm"
            pcbY="5.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["H13"]}
            pcbX="-1.2mm"
            pcbY="5.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["H14"]}
            pcbX="-0.4mm"
            pcbY="5.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["H15"]}
            pcbX="0.4mm"
            pcbY="5.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["H16"]}
            pcbX="1.2mm"
            pcbY="5.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["H17"]}
            pcbX="2mm"
            pcbY="5.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["H18"]}
            pcbX="2.8mm"
            pcbY="5.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["H19"]}
            pcbX="3.6mm"
            pcbY="5.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["H20"]}
            pcbX="4.4mm"
            pcbY="5.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["H21"]}
            pcbX="5.2mm"
            pcbY="5.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["H22"]}
            pcbX="6mm"
            pcbY="5.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["H23"]}
            pcbX="6.8mm"
            pcbY="5.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["H24"]}
            pcbX="7.6mm"
            pcbY="5.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["H25"]}
            pcbX="8.4mm"
            pcbY="5.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["H26"]}
            pcbX="9.2mm"
            pcbY="5.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["H27"]}
            pcbX="10mm"
            pcbY="5.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["H28"]}
            pcbX="10.8mm"
            pcbY="5.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["J1"]}
            pcbX="-10.8mm"
            pcbY="4.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["J2"]}
            pcbX="-10mm"
            pcbY="4.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["J3"]}
            pcbX="-9.2mm"
            pcbY="4.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["J4"]}
            pcbX="-8.4mm"
            pcbY="4.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["J5"]}
            pcbX="-7.6mm"
            pcbY="4.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["J6"]}
            pcbX="-6.8mm"
            pcbY="4.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["J7"]}
            pcbX="-6mm"
            pcbY="4.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["J8"]}
            pcbX="-5.2mm"
            pcbY="4.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["J9"]}
            pcbX="-4.4mm"
            pcbY="4.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["J10"]}
            pcbX="-3.6mm"
            pcbY="4.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["J11"]}
            pcbX="-2.8mm"
            pcbY="4.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["J12"]}
            pcbX="-2mm"
            pcbY="4.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["J13"]}
            pcbX="-1.2mm"
            pcbY="4.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["J14"]}
            pcbX="-0.4mm"
            pcbY="4.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["J15"]}
            pcbX="0.4mm"
            pcbY="4.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["J16"]}
            pcbX="1.2mm"
            pcbY="4.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["J17"]}
            pcbX="2mm"
            pcbY="4.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["J18"]}
            pcbX="2.8mm"
            pcbY="4.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["J19"]}
            pcbX="3.6mm"
            pcbY="4.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["J20"]}
            pcbX="4.4mm"
            pcbY="4.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["J21"]}
            pcbX="5.2mm"
            pcbY="4.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["J22"]}
            pcbX="6mm"
            pcbY="4.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["J23"]}
            pcbX="6.8mm"
            pcbY="4.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["J24"]}
            pcbX="7.6mm"
            pcbY="4.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["J25"]}
            pcbX="8.4mm"
            pcbY="4.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["J26"]}
            pcbX="9.2mm"
            pcbY="4.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["J27"]}
            pcbX="10mm"
            pcbY="4.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["J28"]}
            pcbX="10.8mm"
            pcbY="4.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["K1"]}
            pcbX="-10.8mm"
            pcbY="3.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["K2"]}
            pcbX="-10mm"
            pcbY="3.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["K4"]}
            pcbX="-8.4mm"
            pcbY="3.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["K5"]}
            pcbX="-7.6mm"
            pcbY="3.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["K6"]}
            pcbX="-6.8mm"
            pcbY="3.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["K7"]}
            pcbX="-6mm"
            pcbY="3.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["K8"]}
            pcbX="-5.2mm"
            pcbY="3.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["K9"]}
            pcbX="-4.4mm"
            pcbY="3.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["K10"]}
            pcbX="-3.6mm"
            pcbY="3.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["K11"]}
            pcbX="-2.8mm"
            pcbY="3.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["K12"]}
            pcbX="-2mm"
            pcbY="3.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["K13"]}
            pcbX="-1.2mm"
            pcbY="3.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["K14"]}
            pcbX="-0.4mm"
            pcbY="3.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["K15"]}
            pcbX="0.4mm"
            pcbY="3.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["K16"]}
            pcbX="1.2mm"
            pcbY="3.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["K17"]}
            pcbX="2mm"
            pcbY="3.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["K18"]}
            pcbX="2.8mm"
            pcbY="3.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["K19"]}
            pcbX="3.6mm"
            pcbY="3.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["K20"]}
            pcbX="4.4mm"
            pcbY="3.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["K21"]}
            pcbX="5.2mm"
            pcbY="3.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["K22"]}
            pcbX="6mm"
            pcbY="3.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["K23"]}
            pcbX="6.8mm"
            pcbY="3.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["K24"]}
            pcbX="7.6mm"
            pcbY="3.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["K25"]}
            pcbX="8.4mm"
            pcbY="3.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["K27"]}
            pcbX="10mm"
            pcbY="3.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["K28"]}
            pcbX="10.8mm"
            pcbY="3.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["L1"]}
            pcbX="-10.8mm"
            pcbY="2.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["L2"]}
            pcbX="-10mm"
            pcbY="2.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["L3"]}
            pcbX="-9.2mm"
            pcbY="2.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["L4"]}
            pcbX="-8.4mm"
            pcbY="2.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["L5"]}
            pcbX="-7.6mm"
            pcbY="2.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["L6"]}
            pcbX="-6.8mm"
            pcbY="2.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["L7"]}
            pcbX="-6mm"
            pcbY="2.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["L8"]}
            pcbX="-5.2mm"
            pcbY="2.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["L9"]}
            pcbX="-4.4mm"
            pcbY="2.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["L10"]}
            pcbX="-3.6mm"
            pcbY="2.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["L11"]}
            pcbX="-2.8mm"
            pcbY="2.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["L12"]}
            pcbX="-2mm"
            pcbY="2.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["L13"]}
            pcbX="-1.2mm"
            pcbY="2.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["L14"]}
            pcbX="-0.4mm"
            pcbY="2.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["L15"]}
            pcbX="0.4mm"
            pcbY="2.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["L16"]}
            pcbX="1.2mm"
            pcbY="2.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["L17"]}
            pcbX="2mm"
            pcbY="2.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["L18"]}
            pcbX="2.8mm"
            pcbY="2.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["L19"]}
            pcbX="3.6mm"
            pcbY="2.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["L20"]}
            pcbX="4.4mm"
            pcbY="2.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["L21"]}
            pcbX="5.2mm"
            pcbY="2.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["L22"]}
            pcbX="6mm"
            pcbY="2.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["L23"]}
            pcbX="6.8mm"
            pcbY="2.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["L24"]}
            pcbX="7.6mm"
            pcbY="2.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["L25"]}
            pcbX="8.4mm"
            pcbY="2.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["L26"]}
            pcbX="9.2mm"
            pcbY="2.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["L27"]}
            pcbX="10mm"
            pcbY="2.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["L28"]}
            pcbX="10.8mm"
            pcbY="2.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["M1"]}
            pcbX="-10.8mm"
            pcbY="2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["M2"]}
            pcbX="-10mm"
            pcbY="2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["M3"]}
            pcbX="-9.2mm"
            pcbY="2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["M4"]}
            pcbX="-8.4mm"
            pcbY="2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["M5"]}
            pcbX="-7.6mm"
            pcbY="2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["M6"]}
            pcbX="-6.8mm"
            pcbY="2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["M7"]}
            pcbX="-6mm"
            pcbY="2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["M8"]}
            pcbX="-5.2mm"
            pcbY="2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["M9"]}
            pcbX="-4.4mm"
            pcbY="2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["M10"]}
            pcbX="-3.6mm"
            pcbY="2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["M11"]}
            pcbX="-2.8mm"
            pcbY="2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["M12"]}
            pcbX="-2mm"
            pcbY="2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["M13"]}
            pcbX="-1.2mm"
            pcbY="2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["M14"]}
            pcbX="-0.4mm"
            pcbY="2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["M15"]}
            pcbX="0.4mm"
            pcbY="2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["M16"]}
            pcbX="1.2mm"
            pcbY="2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["M17"]}
            pcbX="2mm"
            pcbY="2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["M18"]}
            pcbX="2.8mm"
            pcbY="2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["M19"]}
            pcbX="3.6mm"
            pcbY="2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["M20"]}
            pcbX="4.4mm"
            pcbY="2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["M21"]}
            pcbX="5.2mm"
            pcbY="2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["M22"]}
            pcbX="6mm"
            pcbY="2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["M23"]}
            pcbX="6.8mm"
            pcbY="2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["M24"]}
            pcbX="7.6mm"
            pcbY="2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["M25"]}
            pcbX="8.4mm"
            pcbY="2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["M26"]}
            pcbX="9.2mm"
            pcbY="2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["M27"]}
            pcbX="10mm"
            pcbY="2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["M28"]}
            pcbX="10.8mm"
            pcbY="2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["N1"]}
            pcbX="-10.8mm"
            pcbY="1.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["N2"]}
            pcbX="-10mm"
            pcbY="1.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["N4"]}
            pcbX="-8.4mm"
            pcbY="1.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["N5"]}
            pcbX="-7.6mm"
            pcbY="1.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["N6"]}
            pcbX="-6.8mm"
            pcbY="1.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["N7"]}
            pcbX="-6mm"
            pcbY="1.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["N8"]}
            pcbX="-5.2mm"
            pcbY="1.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["N9"]}
            pcbX="-4.4mm"
            pcbY="1.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["N10"]}
            pcbX="-3.6mm"
            pcbY="1.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["N11"]}
            pcbX="-2.8mm"
            pcbY="1.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["N12"]}
            pcbX="-2mm"
            pcbY="1.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["N13"]}
            pcbX="-1.2mm"
            pcbY="1.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["N14"]}
            pcbX="-0.4mm"
            pcbY="1.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["N15"]}
            pcbX="0.4mm"
            pcbY="1.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["N16"]}
            pcbX="1.2mm"
            pcbY="1.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["N17"]}
            pcbX="2mm"
            pcbY="1.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["N18"]}
            pcbX="2.8mm"
            pcbY="1.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["N19"]}
            pcbX="3.6mm"
            pcbY="1.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["N20"]}
            pcbX="4.4mm"
            pcbY="1.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["N21"]}
            pcbX="5.2mm"
            pcbY="1.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["N22"]}
            pcbX="6mm"
            pcbY="1.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["N23"]}
            pcbX="6.8mm"
            pcbY="1.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["N24"]}
            pcbX="7.6mm"
            pcbY="1.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["N25"]}
            pcbX="8.4mm"
            pcbY="1.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["N27"]}
            pcbX="10mm"
            pcbY="1.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["N28"]}
            pcbX="10.8mm"
            pcbY="1.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["P1"]}
            pcbX="-10.8mm"
            pcbY="0.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["P2"]}
            pcbX="-10mm"
            pcbY="0.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["P3"]}
            pcbX="-9.2mm"
            pcbY="0.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["P4"]}
            pcbX="-8.4mm"
            pcbY="0.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["P5"]}
            pcbX="-7.6mm"
            pcbY="0.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["P6"]}
            pcbX="-6.8mm"
            pcbY="0.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["P7"]}
            pcbX="-6mm"
            pcbY="0.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["P8"]}
            pcbX="-5.2mm"
            pcbY="0.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["P9"]}
            pcbX="-4.4mm"
            pcbY="0.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["P10"]}
            pcbX="-3.6mm"
            pcbY="0.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["P11"]}
            pcbX="-2.8mm"
            pcbY="0.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["P12"]}
            pcbX="-2mm"
            pcbY="0.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["P13"]}
            pcbX="-1.2mm"
            pcbY="0.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["P14"]}
            pcbX="-0.4mm"
            pcbY="0.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["P15"]}
            pcbX="0.4mm"
            pcbY="0.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["P16"]}
            pcbX="1.2mm"
            pcbY="0.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["P17"]}
            pcbX="2mm"
            pcbY="0.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["P18"]}
            pcbX="2.8mm"
            pcbY="0.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["P19"]}
            pcbX="3.6mm"
            pcbY="0.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["P20"]}
            pcbX="4.4mm"
            pcbY="0.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["P21"]}
            pcbX="5.2mm"
            pcbY="0.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["P22"]}
            pcbX="6mm"
            pcbY="0.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["P23"]}
            pcbX="6.8mm"
            pcbY="0.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["P24"]}
            pcbX="7.6mm"
            pcbY="0.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["P25"]}
            pcbX="8.4mm"
            pcbY="0.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["P26"]}
            pcbX="9.2mm"
            pcbY="0.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["P27"]}
            pcbX="10mm"
            pcbY="0.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["P28"]}
            pcbX="10.8mm"
            pcbY="0.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["R1"]}
            pcbX="-10.8mm"
            pcbY="-0.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["R2"]}
            pcbX="-10mm"
            pcbY="-0.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["R3"]}
            pcbX="-9.2mm"
            pcbY="-0.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["R4"]}
            pcbX="-8.4mm"
            pcbY="-0.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["R5"]}
            pcbX="-7.6mm"
            pcbY="-0.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["R6"]}
            pcbX="-6.8mm"
            pcbY="-0.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["R7"]}
            pcbX="-6mm"
            pcbY="-0.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["R8"]}
            pcbX="-5.2mm"
            pcbY="-0.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["R9"]}
            pcbX="-4.4mm"
            pcbY="-0.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["R10"]}
            pcbX="-3.6mm"
            pcbY="-0.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["R11"]}
            pcbX="-2.8mm"
            pcbY="-0.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["R12"]}
            pcbX="-2mm"
            pcbY="-0.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["R13"]}
            pcbX="-1.2mm"
            pcbY="-0.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["R14"]}
            pcbX="-0.4mm"
            pcbY="-0.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["R15"]}
            pcbX="0.4mm"
            pcbY="-0.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["R16"]}
            pcbX="1.2mm"
            pcbY="-0.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["R17"]}
            pcbX="2mm"
            pcbY="-0.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["R18"]}
            pcbX="2.8mm"
            pcbY="-0.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["R19"]}
            pcbX="3.6mm"
            pcbY="-0.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["R20"]}
            pcbX="4.4mm"
            pcbY="-0.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["R21"]}
            pcbX="5.2mm"
            pcbY="-0.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["R22"]}
            pcbX="6mm"
            pcbY="-0.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["R23"]}
            pcbX="6.8mm"
            pcbY="-0.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["R24"]}
            pcbX="7.6mm"
            pcbY="-0.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["R25"]}
            pcbX="8.4mm"
            pcbY="-0.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["R26"]}
            pcbX="9.2mm"
            pcbY="-0.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["R27"]}
            pcbX="10mm"
            pcbY="-0.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["R28"]}
            pcbX="10.8mm"
            pcbY="-0.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["T1"]}
            pcbX="-10.8mm"
            pcbY="-1.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["T2"]}
            pcbX="-10mm"
            pcbY="-1.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["T4"]}
            pcbX="-8.4mm"
            pcbY="-1.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["T5"]}
            pcbX="-7.6mm"
            pcbY="-1.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["T6"]}
            pcbX="-6.8mm"
            pcbY="-1.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["T7"]}
            pcbX="-6mm"
            pcbY="-1.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["T8"]}
            pcbX="-5.2mm"
            pcbY="-1.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["T9"]}
            pcbX="-4.4mm"
            pcbY="-1.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["T10"]}
            pcbX="-3.6mm"
            pcbY="-1.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["T11"]}
            pcbX="-2.8mm"
            pcbY="-1.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["T12"]}
            pcbX="-2mm"
            pcbY="-1.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["T13"]}
            pcbX="-1.2mm"
            pcbY="-1.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["T14"]}
            pcbX="-0.4mm"
            pcbY="-1.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["T15"]}
            pcbX="0.4mm"
            pcbY="-1.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["T16"]}
            pcbX="1.2mm"
            pcbY="-1.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["T17"]}
            pcbX="2mm"
            pcbY="-1.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["T18"]}
            pcbX="2.8mm"
            pcbY="-1.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["T19"]}
            pcbX="3.6mm"
            pcbY="-1.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["T20"]}
            pcbX="4.4mm"
            pcbY="-1.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["T21"]}
            pcbX="5.2mm"
            pcbY="-1.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["T22"]}
            pcbX="6mm"
            pcbY="-1.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["T23"]}
            pcbX="6.8mm"
            pcbY="-1.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["T24"]}
            pcbX="7.6mm"
            pcbY="-1.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["T25"]}
            pcbX="8.4mm"
            pcbY="-1.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["T27"]}
            pcbX="10mm"
            pcbY="-1.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["T28"]}
            pcbX="10.8mm"
            pcbY="-1.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["U1"]}
            pcbX="-10.8mm"
            pcbY="-2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["U2"]}
            pcbX="-10mm"
            pcbY="-2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["U3"]}
            pcbX="-9.2mm"
            pcbY="-2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["U4"]}
            pcbX="-8.4mm"
            pcbY="-2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["U5"]}
            pcbX="-7.6mm"
            pcbY="-2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["U6"]}
            pcbX="-6.8mm"
            pcbY="-2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["U7"]}
            pcbX="-6mm"
            pcbY="-2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["U8"]}
            pcbX="-5.2mm"
            pcbY="-2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["U9"]}
            pcbX="-4.4mm"
            pcbY="-2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["U10"]}
            pcbX="-3.6mm"
            pcbY="-2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["U11"]}
            pcbX="-2.8mm"
            pcbY="-2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["U12"]}
            pcbX="-2mm"
            pcbY="-2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["U13"]}
            pcbX="-1.2mm"
            pcbY="-2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["U14"]}
            pcbX="-0.4mm"
            pcbY="-2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["U15"]}
            pcbX="0.4mm"
            pcbY="-2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["U16"]}
            pcbX="1.2mm"
            pcbY="-2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["U17"]}
            pcbX="2mm"
            pcbY="-2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["U18"]}
            pcbX="2.8mm"
            pcbY="-2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["U19"]}
            pcbX="3.6mm"
            pcbY="-2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["U20"]}
            pcbX="4.4mm"
            pcbY="-2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["U21"]}
            pcbX="5.2mm"
            pcbY="-2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["U22"]}
            pcbX="6mm"
            pcbY="-2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["U23"]}
            pcbX="6.8mm"
            pcbY="-2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["U24"]}
            pcbX="7.6mm"
            pcbY="-2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["U25"]}
            pcbX="8.4mm"
            pcbY="-2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["U26"]}
            pcbX="9.2mm"
            pcbY="-2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["U27"]}
            pcbX="10mm"
            pcbY="-2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["U28"]}
            pcbX="10.8mm"
            pcbY="-2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["V1"]}
            pcbX="-10.8mm"
            pcbY="-2.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["V2"]}
            pcbX="-10mm"
            pcbY="-2.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["V3"]}
            pcbX="-9.2mm"
            pcbY="-2.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["V4"]}
            pcbX="-8.4mm"
            pcbY="-2.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["V5"]}
            pcbX="-7.6mm"
            pcbY="-2.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["V6"]}
            pcbX="-6.8mm"
            pcbY="-2.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["V7"]}
            pcbX="-6mm"
            pcbY="-2.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["V8"]}
            pcbX="-5.2mm"
            pcbY="-2.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["V9"]}
            pcbX="-4.4mm"
            pcbY="-2.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["V10"]}
            pcbX="-3.6mm"
            pcbY="-2.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["V11"]}
            pcbX="-2.8mm"
            pcbY="-2.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["V12"]}
            pcbX="-2mm"
            pcbY="-2.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["V13"]}
            pcbX="-1.2mm"
            pcbY="-2.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["V14"]}
            pcbX="-0.4mm"
            pcbY="-2.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["V15"]}
            pcbX="0.4mm"
            pcbY="-2.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["V16"]}
            pcbX="1.2mm"
            pcbY="-2.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["V17"]}
            pcbX="2mm"
            pcbY="-2.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["V18"]}
            pcbX="2.8mm"
            pcbY="-2.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["V19"]}
            pcbX="3.6mm"
            pcbY="-2.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["V20"]}
            pcbX="4.4mm"
            pcbY="-2.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["V21"]}
            pcbX="5.2mm"
            pcbY="-2.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["V22"]}
            pcbX="6mm"
            pcbY="-2.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["V23"]}
            pcbX="6.8mm"
            pcbY="-2.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["V24"]}
            pcbX="7.6mm"
            pcbY="-2.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["V25"]}
            pcbX="8.4mm"
            pcbY="-2.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["V26"]}
            pcbX="9.2mm"
            pcbY="-2.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["V27"]}
            pcbX="10mm"
            pcbY="-2.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["V28"]}
            pcbX="10.8mm"
            pcbY="-2.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["W1"]}
            pcbX="-10.8mm"
            pcbY="-3.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["W2"]}
            pcbX="-10mm"
            pcbY="-3.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["W4"]}
            pcbX="-8.4mm"
            pcbY="-3.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["W5"]}
            pcbX="-7.6mm"
            pcbY="-3.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["W6"]}
            pcbX="-6.8mm"
            pcbY="-3.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["W7"]}
            pcbX="-6mm"
            pcbY="-3.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["W8"]}
            pcbX="-5.2mm"
            pcbY="-3.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["W9"]}
            pcbX="-4.4mm"
            pcbY="-3.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["W10"]}
            pcbX="-3.6mm"
            pcbY="-3.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["W11"]}
            pcbX="-2.8mm"
            pcbY="-3.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["W12"]}
            pcbX="-2mm"
            pcbY="-3.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["W13"]}
            pcbX="-1.2mm"
            pcbY="-3.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["W14"]}
            pcbX="-0.4mm"
            pcbY="-3.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["W15"]}
            pcbX="0.4mm"
            pcbY="-3.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["W16"]}
            pcbX="1.2mm"
            pcbY="-3.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["W17"]}
            pcbX="2mm"
            pcbY="-3.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["W18"]}
            pcbX="2.8mm"
            pcbY="-3.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["W19"]}
            pcbX="3.6mm"
            pcbY="-3.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["W20"]}
            pcbX="4.4mm"
            pcbY="-3.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["W21"]}
            pcbX="5.2mm"
            pcbY="-3.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["W22"]}
            pcbX="6mm"
            pcbY="-3.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["W23"]}
            pcbX="6.8mm"
            pcbY="-3.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["W24"]}
            pcbX="7.6mm"
            pcbY="-3.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["W25"]}
            pcbX="8.4mm"
            pcbY="-3.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["W27"]}
            pcbX="10mm"
            pcbY="-3.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["W28"]}
            pcbX="10.8mm"
            pcbY="-3.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["Y1"]}
            pcbX="-10.8mm"
            pcbY="-4.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["Y2"]}
            pcbX="-10mm"
            pcbY="-4.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["Y3"]}
            pcbX="-9.2mm"
            pcbY="-4.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["Y4"]}
            pcbX="-8.4mm"
            pcbY="-4.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["Y5"]}
            pcbX="-7.6mm"
            pcbY="-4.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["Y6"]}
            pcbX="-6.8mm"
            pcbY="-4.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["Y7"]}
            pcbX="-6mm"
            pcbY="-4.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["Y8"]}
            pcbX="-5.2mm"
            pcbY="-4.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["Y9"]}
            pcbX="-4.4mm"
            pcbY="-4.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["Y10"]}
            pcbX="-3.6mm"
            pcbY="-4.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["Y11"]}
            pcbX="-2.8mm"
            pcbY="-4.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["Y12"]}
            pcbX="-2mm"
            pcbY="-4.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["Y13"]}
            pcbX="-1.2mm"
            pcbY="-4.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["Y14"]}
            pcbX="-0.4mm"
            pcbY="-4.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["Y15"]}
            pcbX="0.4mm"
            pcbY="-4.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["Y16"]}
            pcbX="1.2mm"
            pcbY="-4.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["Y17"]}
            pcbX="2mm"
            pcbY="-4.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["Y18"]}
            pcbX="2.8mm"
            pcbY="-4.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["Y19"]}
            pcbX="3.6mm"
            pcbY="-4.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["Y20"]}
            pcbX="4.4mm"
            pcbY="-4.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["Y21"]}
            pcbX="5.2mm"
            pcbY="-4.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["Y22"]}
            pcbX="6mm"
            pcbY="-4.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["Y23"]}
            pcbX="6.8mm"
            pcbY="-4.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["Y24"]}
            pcbX="7.6mm"
            pcbY="-4.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["Y25"]}
            pcbX="8.4mm"
            pcbY="-4.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["Y26"]}
            pcbX="9.2mm"
            pcbY="-4.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["Y27"]}
            pcbX="10mm"
            pcbY="-4.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["Y28"]}
            pcbX="10.8mm"
            pcbY="-4.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AA1"]}
            pcbX="-10.8mm"
            pcbY="-5.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AA2"]}
            pcbX="-10mm"
            pcbY="-5.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AA3"]}
            pcbX="-9.2mm"
            pcbY="-5.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AA4"]}
            pcbX="-8.4mm"
            pcbY="-5.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AA5"]}
            pcbX="-7.6mm"
            pcbY="-5.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AA6"]}
            pcbX="-6.8mm"
            pcbY="-5.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AA7"]}
            pcbX="-6mm"
            pcbY="-5.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AA8"]}
            pcbX="-5.2mm"
            pcbY="-5.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AA9"]}
            pcbX="-4.4mm"
            pcbY="-5.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AA10"]}
            pcbX="-3.6mm"
            pcbY="-5.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AA11"]}
            pcbX="-2.8mm"
            pcbY="-5.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AA12"]}
            pcbX="-2mm"
            pcbY="-5.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AA13"]}
            pcbX="-1.2mm"
            pcbY="-5.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AA14"]}
            pcbX="-0.4mm"
            pcbY="-5.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AA15"]}
            pcbX="0.4mm"
            pcbY="-5.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AA16"]}
            pcbX="1.2mm"
            pcbY="-5.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AA17"]}
            pcbX="2mm"
            pcbY="-5.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AA18"]}
            pcbX="2.8mm"
            pcbY="-5.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AA19"]}
            pcbX="3.6mm"
            pcbY="-5.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AA20"]}
            pcbX="4.4mm"
            pcbY="-5.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AA21"]}
            pcbX="5.2mm"
            pcbY="-5.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AA22"]}
            pcbX="6mm"
            pcbY="-5.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AA23"]}
            pcbX="6.8mm"
            pcbY="-5.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AA24"]}
            pcbX="7.6mm"
            pcbY="-5.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AA25"]}
            pcbX="8.4mm"
            pcbY="-5.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AA26"]}
            pcbX="9.2mm"
            pcbY="-5.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AA27"]}
            pcbX="10mm"
            pcbY="-5.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AA28"]}
            pcbX="10.8mm"
            pcbY="-5.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AB1"]}
            pcbX="-10.8mm"
            pcbY="-6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AB2"]}
            pcbX="-10mm"
            pcbY="-6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AB3"]}
            pcbX="-9.2mm"
            pcbY="-6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AB4"]}
            pcbX="-8.4mm"
            pcbY="-6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AB5"]}
            pcbX="-7.6mm"
            pcbY="-6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AB6"]}
            pcbX="-6.8mm"
            pcbY="-6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AB7"]}
            pcbX="-6mm"
            pcbY="-6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AB8"]}
            pcbX="-5.2mm"
            pcbY="-6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AB9"]}
            pcbX="-4.4mm"
            pcbY="-6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AB10"]}
            pcbX="-3.6mm"
            pcbY="-6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AB11"]}
            pcbX="-2.8mm"
            pcbY="-6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AB12"]}
            pcbX="-2mm"
            pcbY="-6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AB13"]}
            pcbX="-1.2mm"
            pcbY="-6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AB14"]}
            pcbX="-0.4mm"
            pcbY="-6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AB15"]}
            pcbX="0.4mm"
            pcbY="-6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AB16"]}
            pcbX="1.2mm"
            pcbY="-6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AB17"]}
            pcbX="2mm"
            pcbY="-6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AB18"]}
            pcbX="2.8mm"
            pcbY="-6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AB19"]}
            pcbX="3.6mm"
            pcbY="-6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AB20"]}
            pcbX="4.4mm"
            pcbY="-6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AB21"]}
            pcbX="5.2mm"
            pcbY="-6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AB22"]}
            pcbX="6mm"
            pcbY="-6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AB23"]}
            pcbX="6.8mm"
            pcbY="-6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AB24"]}
            pcbX="7.6mm"
            pcbY="-6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AB25"]}
            pcbX="8.4mm"
            pcbY="-6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AB27"]}
            pcbX="10mm"
            pcbY="-6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AB28"]}
            pcbX="10.8mm"
            pcbY="-6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AC1"]}
            pcbX="-10.8mm"
            pcbY="-6.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AC2"]}
            pcbX="-10mm"
            pcbY="-6.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AC3"]}
            pcbX="-9.2mm"
            pcbY="-6.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AC4"]}
            pcbX="-8.4mm"
            pcbY="-6.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AC5"]}
            pcbX="-7.6mm"
            pcbY="-6.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AC6"]}
            pcbX="-6.8mm"
            pcbY="-6.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AC7"]}
            pcbX="-6mm"
            pcbY="-6.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AC8"]}
            pcbX="-5.2mm"
            pcbY="-6.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AC9"]}
            pcbX="-4.4mm"
            pcbY="-6.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AC10"]}
            pcbX="-3.6mm"
            pcbY="-6.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AC11"]}
            pcbX="-2.8mm"
            pcbY="-6.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AC12"]}
            pcbX="-2mm"
            pcbY="-6.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AC13"]}
            pcbX="-1.2mm"
            pcbY="-6.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AC14"]}
            pcbX="-0.4mm"
            pcbY="-6.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AC15"]}
            pcbX="0.4mm"
            pcbY="-6.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AC16"]}
            pcbX="1.2mm"
            pcbY="-6.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AC17"]}
            pcbX="2mm"
            pcbY="-6.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AC18"]}
            pcbX="2.8mm"
            pcbY="-6.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AC19"]}
            pcbX="3.6mm"
            pcbY="-6.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AC20"]}
            pcbX="4.4mm"
            pcbY="-6.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AC21"]}
            pcbX="5.2mm"
            pcbY="-6.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AC22"]}
            pcbX="6mm"
            pcbY="-6.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AC23"]}
            pcbX="6.8mm"
            pcbY="-6.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AC24"]}
            pcbX="7.6mm"
            pcbY="-6.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AC25"]}
            pcbX="8.4mm"
            pcbY="-6.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AC26"]}
            pcbX="9.2mm"
            pcbY="-6.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AC27"]}
            pcbX="10mm"
            pcbY="-6.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AC28"]}
            pcbX="10.8mm"
            pcbY="-6.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AD1"]}
            pcbX="-10.8mm"
            pcbY="-7.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AD2"]}
            pcbX="-10mm"
            pcbY="-7.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AD3"]}
            pcbX="-9.2mm"
            pcbY="-7.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AD4"]}
            pcbX="-8.4mm"
            pcbY="-7.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AD5"]}
            pcbX="-7.6mm"
            pcbY="-7.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AD6"]}
            pcbX="-6.8mm"
            pcbY="-7.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AD7"]}
            pcbX="-6mm"
            pcbY="-7.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AD8"]}
            pcbX="-5.2mm"
            pcbY="-7.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AD9"]}
            pcbX="-4.4mm"
            pcbY="-7.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AD10"]}
            pcbX="-3.6mm"
            pcbY="-7.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AD11"]}
            pcbX="-2.8mm"
            pcbY="-7.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AD12"]}
            pcbX="-2mm"
            pcbY="-7.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AD13"]}
            pcbX="-1.2mm"
            pcbY="-7.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AD14"]}
            pcbX="-0.4mm"
            pcbY="-7.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AD15"]}
            pcbX="0.4mm"
            pcbY="-7.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AD16"]}
            pcbX="1.2mm"
            pcbY="-7.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AD17"]}
            pcbX="2mm"
            pcbY="-7.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AD18"]}
            pcbX="2.8mm"
            pcbY="-7.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AD19"]}
            pcbX="3.6mm"
            pcbY="-7.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AD20"]}
            pcbX="4.4mm"
            pcbY="-7.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AD21"]}
            pcbX="5.2mm"
            pcbY="-7.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AD22"]}
            pcbX="6mm"
            pcbY="-7.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AD23"]}
            pcbX="6.8mm"
            pcbY="-7.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AD24"]}
            pcbX="7.6mm"
            pcbY="-7.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AD25"]}
            pcbX="8.4mm"
            pcbY="-7.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AD26"]}
            pcbX="9.2mm"
            pcbY="-7.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AD27"]}
            pcbX="10mm"
            pcbY="-7.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AD28"]}
            pcbX="10.8mm"
            pcbY="-7.6mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AE1"]}
            pcbX="-10.8mm"
            pcbY="-8.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AE2"]}
            pcbX="-10mm"
            pcbY="-8.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AE3"]}
            pcbX="-9.2mm"
            pcbY="-8.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AE5"]}
            pcbX="-7.6mm"
            pcbY="-8.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AE6"]}
            pcbX="-6.8mm"
            pcbY="-8.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AE7"]}
            pcbX="-6mm"
            pcbY="-8.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AE8"]}
            pcbX="-5.2mm"
            pcbY="-8.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AE9"]}
            pcbX="-4.4mm"
            pcbY="-8.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AE10"]}
            pcbX="-3.6mm"
            pcbY="-8.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AE11"]}
            pcbX="-2.8mm"
            pcbY="-8.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AE12"]}
            pcbX="-2mm"
            pcbY="-8.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AE13"]}
            pcbX="-1.2mm"
            pcbY="-8.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AE14"]}
            pcbX="-0.4mm"
            pcbY="-8.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AE15"]}
            pcbX="0.4mm"
            pcbY="-8.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AE16"]}
            pcbX="1.2mm"
            pcbY="-8.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AE17"]}
            pcbX="2mm"
            pcbY="-8.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AE18"]}
            pcbX="2.8mm"
            pcbY="-8.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AE19"]}
            pcbX="3.6mm"
            pcbY="-8.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AE20"]}
            pcbX="4.4mm"
            pcbY="-8.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AE21"]}
            pcbX="5.2mm"
            pcbY="-8.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AE22"]}
            pcbX="6mm"
            pcbY="-8.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AE23"]}
            pcbX="6.8mm"
            pcbY="-8.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AE24"]}
            pcbX="7.6mm"
            pcbY="-8.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AE26"]}
            pcbX="9.2mm"
            pcbY="-8.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AE27"]}
            pcbX="10mm"
            pcbY="-8.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AE28"]}
            pcbX="10.8mm"
            pcbY="-8.4mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AF1"]}
            pcbX="-10.8mm"
            pcbY="-9.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AF2"]}
            pcbX="-10mm"
            pcbY="-9.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AF3"]}
            pcbX="-9.2mm"
            pcbY="-9.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AF4"]}
            pcbX="-8.4mm"
            pcbY="-9.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AF5"]}
            pcbX="-7.6mm"
            pcbY="-9.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AF6"]}
            pcbX="-6.8mm"
            pcbY="-9.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AF8"]}
            pcbX="-5.2mm"
            pcbY="-9.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AF9"]}
            pcbX="-4.4mm"
            pcbY="-9.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AF11"]}
            pcbX="-2.8mm"
            pcbY="-9.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AF12"]}
            pcbX="-2mm"
            pcbY="-9.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AF14"]}
            pcbX="-0.4mm"
            pcbY="-9.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AF15"]}
            pcbX="0.4mm"
            pcbY="-9.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AF17"]}
            pcbX="2mm"
            pcbY="-9.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AF18"]}
            pcbX="2.8mm"
            pcbY="-9.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AF20"]}
            pcbX="4.4mm"
            pcbY="-9.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AF21"]}
            pcbX="5.2mm"
            pcbY="-9.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AF22"]}
            pcbX="6mm"
            pcbY="-9.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AF23"]}
            pcbX="6.8mm"
            pcbY="-9.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AF24"]}
            pcbX="7.6mm"
            pcbY="-9.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AF25"]}
            pcbX="8.4mm"
            pcbY="-9.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AF26"]}
            pcbX="9.2mm"
            pcbY="-9.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AF27"]}
            pcbX="10mm"
            pcbY="-9.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AF28"]}
            pcbX="10.8mm"
            pcbY="-9.2mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AG1"]}
            pcbX="-10.8mm"
            pcbY="-10mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AG2"]}
            pcbX="-10mm"
            pcbY="-10mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AG3"]}
            pcbX="-9.2mm"
            pcbY="-10mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AG4"]}
            pcbX="-8.4mm"
            pcbY="-10mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AG5"]}
            pcbX="-7.6mm"
            pcbY="-10mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AG6"]}
            pcbX="-6.8mm"
            pcbY="-10mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AG7"]}
            pcbX="-6mm"
            pcbY="-10mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AG8"]}
            pcbX="-5.2mm"
            pcbY="-10mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AG9"]}
            pcbX="-4.4mm"
            pcbY="-10mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AG10"]}
            pcbX="-3.6mm"
            pcbY="-10mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AG11"]}
            pcbX="-2.8mm"
            pcbY="-10mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AG12"]}
            pcbX="-2mm"
            pcbY="-10mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AG13"]}
            pcbX="-1.2mm"
            pcbY="-10mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AG14"]}
            pcbX="-0.4mm"
            pcbY="-10mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AG15"]}
            pcbX="0.4mm"
            pcbY="-10mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AG16"]}
            pcbX="1.2mm"
            pcbY="-10mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AG17"]}
            pcbX="2mm"
            pcbY="-10mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AG18"]}
            pcbX="2.8mm"
            pcbY="-10mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AG19"]}
            pcbX="3.6mm"
            pcbY="-10mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AG20"]}
            pcbX="4.4mm"
            pcbY="-10mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AG21"]}
            pcbX="5.2mm"
            pcbY="-10mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AG22"]}
            pcbX="6mm"
            pcbY="-10mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AG23"]}
            pcbX="6.8mm"
            pcbY="-10mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AG24"]}
            pcbX="7.6mm"
            pcbY="-10mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AG25"]}
            pcbX="8.4mm"
            pcbY="-10mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AG26"]}
            pcbX="9.2mm"
            pcbY="-10mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AG27"]}
            pcbX="10mm"
            pcbY="-10mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AG28"]}
            pcbX="10.8mm"
            pcbY="-10mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AH1"]}
            pcbX="-10.8mm"
            pcbY="-10.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AH2"]}
            pcbX="-10mm"
            pcbY="-10.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AH3"]}
            pcbX="-9.2mm"
            pcbY="-10.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AH4"]}
            pcbX="-8.4mm"
            pcbY="-10.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AH5"]}
            pcbX="-7.6mm"
            pcbY="-10.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AH6"]}
            pcbX="-6.8mm"
            pcbY="-10.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AH7"]}
            pcbX="-6mm"
            pcbY="-10.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AH8"]}
            pcbX="-5.2mm"
            pcbY="-10.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AH9"]}
            pcbX="-4.4mm"
            pcbY="-10.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AH10"]}
            pcbX="-3.6mm"
            pcbY="-10.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AH11"]}
            pcbX="-2.8mm"
            pcbY="-10.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AH12"]}
            pcbX="-2mm"
            pcbY="-10.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AH13"]}
            pcbX="-1.2mm"
            pcbY="-10.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AH14"]}
            pcbX="-0.4mm"
            pcbY="-10.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AH15"]}
            pcbX="0.4mm"
            pcbY="-10.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AH16"]}
            pcbX="1.2mm"
            pcbY="-10.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AH17"]}
            pcbX="2mm"
            pcbY="-10.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AH18"]}
            pcbX="2.8mm"
            pcbY="-10.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AH19"]}
            pcbX="3.6mm"
            pcbY="-10.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AH20"]}
            pcbX="4.4mm"
            pcbY="-10.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AH21"]}
            pcbX="5.2mm"
            pcbY="-10.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AH22"]}
            pcbX="6mm"
            pcbY="-10.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AH23"]}
            pcbX="6.8mm"
            pcbY="-10.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AH24"]}
            pcbX="7.6mm"
            pcbY="-10.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AH25"]}
            pcbX="8.4mm"
            pcbY="-10.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AH26"]}
            pcbX="9.2mm"
            pcbY="-10.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AH27"]}
            pcbX="10mm"
            pcbY="-10.8mm"
            radius="0.2mm"
            shape="circle"
          />
          <smtpad
            portHints={["AH28"]}
            pcbX="10.8mm"
            pcbY="-10.8mm"
            radius="0.2mm"
            shape="circle"
          />
        </footprint>
      }
      {...props}
    />
  );
};

export default AM5726BABCXA;
