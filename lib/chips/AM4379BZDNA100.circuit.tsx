import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VSS", "A1", "VSS_A1"],
  pin2: ["gpmc_wait0", "A2"],
  pin3: ["gpmc_be1n", "A3"],
  pin4: ["gpmc_a3", "A4"],
  pin5: ["gpmc_ad1", "A5"],
  pin6: ["gpmc_ad3", "A6"],
  pin7: ["gpmc_ad5", "A7"],
  pin8: ["gpmc_csn0", "A8"],
  pin9: ["gpmc_advn_ale", "A9"],
  pin10: ["gpmc_ad9", "A10"],
  pin11: ["gpmc_ad15", "A11"],
  pin12: ["gpmc_clk", "A12"],
  pin13: ["mii1_tx_en", "A13"],
  pin14: ["mii1_txd1", "A14"],
  pin15: ["mii1_rx_dv", "A15"],
  pin16: ["rmii1_ref_clk", "A16"],
  pin17: ["mdio_data", "A17"],
  pin18: ["dss_data10", "A18"],
  pin19: ["dss_data8", "A19"],
  pin20: ["dss_data4", "A20"],
  pin21: ["dss_data1", "A21"],
  pin22: ["dss_pclk", "A22"],
  pin23: ["dss_hsync", "A23"],
  pin24: ["dss_ac_bias_en", "A24"],
  pin25: ["VSS", "A25", "VSS_A25"],
  pin394: ["ddr_dqs3", "AA1"],
  pin395: ["ddr_dqsn3", "AA2"],
  pin396: ["ddr_d27", "AA3"],
  pin397: ["Reserved", "AA7", "Reserved_AA7"],
  pin398: ["Reserved", "AA9", "Reserved_AA9"],
  pin399: ["Reserved", "AA10", "Reserved_AA10"],
  pin400: ["ADC0_AIN0", "AA12"],
  pin401: ["ADC0_AIN3", "AA13"],
  pin402: ["ADC1_AIN4", "AA15"],
  pin403: ["ADC1_AIN2", "AA16"],
  pin404: ["cam0_data3", "AA18"],
  pin405: ["cam0_data9", "AA19"],
  pin406: ["VSS", "AA23", "VSS_AA23"],
  pin407: ["TDO", "AA24"],
  pin408: ["TCK", "AA25"],
  pin409: ["ddr_d29", "AB1"],
  pin410: ["ddr_d28", "AB2"],
  pin411: ["Reserved", "AB6", "Reserved_AB6"],
  pin412: ["Reserved", "AB7", "Reserved_AB7"],
  pin413: ["Reserved", "AB9", "Reserved_AB9"],
  pin414: ["Reserved", "AB10", "Reserved_AB10"],
  pin415: ["VDDA_ADC0", "AB12"],
  pin416: ["ADC0_AIN4", "AB13"],
  pin417: ["ADC1_AIN3", "AB15"],
  pin418: ["ADC1_AIN1", "AB16"],
  pin419: ["cam0_data1", "AB18"],
  pin420: ["cam0_data8", "AB19"],
  pin421: ["cam1_data0", "AB20"],
  pin422: ["I2C0_SDA", "AB24"],
  pin423: ["cam1_wen", "AB25"],
  pin424: ["ddr_d30", "AC1"],
  pin425: ["ddr_d31", "AC2"],
  pin426: ["ddr_vtp", "AC3"],
  pin427: ["Reserved", "AC5", "Reserved_AC5"],
  pin428: ["Reserved", "AC6", "Reserved_AC6"],
  pin429: ["Reserved", "AC7", "Reserved_AC7"],
  pin430: ["Reserved", "AC9", "Reserved_AC9"],
  pin431: ["Reserved", "AC10", "Reserved_AC10"],
  pin432: ["Reserved", "AC12", "Reserved_AC12"],
  pin433: ["ADC0_AIN5", "AC13"],
  pin434: ["VSSA_ADC", "AC15"],
  pin435: ["ADC1_AIN0", "AC16"],
  pin436: ["cam0_field", "AC18"],
  pin437: ["cam0_pclk", "AC20"],
  pin438: ["cam1_data1", "AC21"],
  pin439: ["cam1_vd", "AC23"],
  pin440: ["cam1_data9", "AC24"],
  pin441: ["cam1_field", "AC25"],
  pin442: ["Reserved", "AD1", "Reserved_AD1"],
  pin443: ["Reserved", "AD2", "Reserved_AD2"],
  pin444: ["CAP_VDD_RTC", "AD3"],
  pin445: ["VSS_RTC", "AD4"],
  pin446: ["VDDS_RTC", "AD5"],
  pin447: ["RTC_PMIC_EN", "AD6"],
  pin448: ["Reserved", "AD7", "Reserved_AD7"],
  pin449: ["VDDS", "AD8", "VDDS_AD8"],
  pin450: ["VDD_CORE", "AD9", "VDD_CORE_AD9"],
  pin451: ["Reserved", "AD10", "Reserved_AD10"],
  pin452: ["Reserved", "AD11", "Reserved_AD11"],
  pin453: ["VDDS", "AD12", "VDDS_AD12"],
  pin454: ["ADC0_AIN6", "AD13"],
  pin455: ["ADC0_VREFP", "AD14"],
  pin456: ["ADC1_VREFN", "AD15"],
  pin457: ["ADC1_AIN7", "AD16"],
  pin458: ["cam0_wen", "AD17"],
  pin459: ["cam0_vd", "AD18"],
  pin460: ["cam0_data5", "AD19"],
  pin461: ["cam0_data7", "AD20"],
  pin462: ["cam1_data2", "AD21"],
  pin463: ["cam1_data4", "AD22"],
  pin464: ["cam1_data6", "AD23"],
  pin465: ["cam1_data8", "AD24"],
  pin466: ["cam1_hd", "AD25"],
  pin467: ["VSS", "AE1", "VSS_AE1"],
  pin468: ["RTC_KALDO_EN", "AE2"],
  pin469: ["RTC_WAKEUP", "AE3"],
  pin470: ["RTC_XTALOUT", "AE4"],
  pin471: ["RTC_XTALIN", "AE5"],
  pin472: ["RTC_PWRONRST", "AE6"],
  pin473: ["VSS", "AE7", "VSS_AE7"],
  pin474: ["VSS", "AE8", "VSS_AE8"],
  pin475: ["Reserved", "AE9", "Reserved_AE9"],
  pin476: ["VSS", "AE10", "VSS_AE10"],
  pin477: ["Reserved", "AE11", "Reserved_AE11"],
  pin478: ["Reserved", "AE12", "Reserved_AE12"],
  pin479: ["ADC0_AIN7", "AE13"],
  pin480: ["ADC0_VREFN", "AE14"],
  pin481: ["ADC1_VREFP", "AE15"],
  pin482: ["ADC1_AIN6", "AE16"],
  pin483: ["cam0_hd", "AE17"],
  pin484: ["cam0_data0", "AE18"],
  pin485: ["cam0_data4", "AE19"],
  pin486: ["cam0_data6", "AE20"],
  pin487: ["cam1_pclk", "AE21"],
  pin488: ["cam1_data3", "AE22"],
  pin489: ["cam1_data5", "AE23"],
  pin490: ["cam1_data7", "AE24"],
  pin491: ["VSS", "AE25", "VSS_AE25"],
  pin26: ["mmc0_dat3", "B1"],
  pin27: ["mmc0_dat2", "B2"],
  pin28: ["gpmc_wpn", "B3"],
  pin29: ["gpmc_a9", "B4"],
  pin30: ["gpmc_ad0", "B5"],
  pin31: ["gpmc_ad2", "B6"],
  pin32: ["gpmc_ad4", "B7"],
  pin33: ["gpmc_ad7", "B8"],
  pin34: ["gpmc_csn1", "B9"],
  pin35: ["gpmc_ad8", "B10"],
  pin36: ["gpmc_ad14", "B11"],
  pin37: ["gpmc_csn3", "B12"],
  pin38: ["mii1_rx_er", "B13"],
  pin39: ["mii1_crs", "B14"],
  pin40: ["mii1_txd0", "B15"],
  pin41: ["mii1_rxd1", "B16"],
  pin42: ["mdio_clk", "B17"],
  pin43: ["dss_data11", "B18"],
  pin44: ["dss_data9", "B19"],
  pin45: ["dss_data5", "B20"],
  pin46: ["dss_data2", "B21"],
  pin47: ["dss_data0", "B22"],
  pin48: ["dss_vsync", "B23"],
  pin49: ["VSS_OSC", "B24"],
  pin50: ["XTALOUT", "B25"],
  pin51: ["mmc0_dat0", "C1"],
  pin52: ["mmc0_dat1", "C2"],
  pin53: ["gpmc_a0", "C3"],
  pin54: ["gpmc_a1", "C5"],
  pin55: ["gpmc_a2", "C6"],
  pin56: ["gpmc_ad6", "C8"],
  pin57: ["gpmc_be0n_cle", "C10"],
  pin58: ["gpmc_ad13", "C11"],
  pin59: ["mii1_txd2", "C13"],
  pin60: ["mii1_rxd3", "C14"],
  pin61: ["mii1_txd3", "C16"],
  pin62: ["dss_data14", "C17"],
  pin63: ["dss_data12", "C19"],
  pin64: ["dss_data6", "C20"],
  pin65: ["dss_data3", "C21"],
  pin66: ["VDDS_OSC", "C23"],
  pin67: ["xdma_event_intr1", "C24"],
  pin68: ["XTALIN", "C25"],
  pin69: ["mmc0_clk", "D1"],
  pin70: ["mmc0_cmd", "D2"],
  pin71: ["CAP_VDDS1P8V_IO", "D6"],
  pin72: ["gpmc_a4", "D7"],
  pin73: ["gpmc_a11", "D8"],
  pin74: ["gpmc_wen", "D10"],
  pin75: ["gpmc_ad11", "D11"],
  pin76: ["mii1_rx_clk", "D13"],
  pin77: ["mii1_tx_clk", "D14"],
  pin78: ["mii1_col", "D16"],
  pin79: ["dss_data15", "D17"],
  pin80: ["dss_data13", "D19"],
  pin81: ["vdd_mpu_mon", "D20"],
  pin82: ["xdma_event_intr0", "D24"],
  pin83: ["gpio5_8", "D25"],
  pin84: ["ddr_d2", "E1"],
  pin85: ["ddr_d1", "E2"],
  pin86: ["ddr_d0", "E3"],
  pin87: ["gpmc_a5", "E7"],
  pin88: ["gpmc_a6", "E8"],
  pin89: ["gpmc_oen_ren", "E10"],
  pin90: ["gpmc_ad12", "E11"],
  pin91: ["CAP_VDD_SRAM_C", "E13"],
  pin92: ["CAP_VDD_SRAM", "E14"],
  pin93: ["mii1_rxd2", "E16"],
  pin94: ["VDDS_PLL_MPU", "E17"],
  pin95: ["dss_data7", "E19"],
  pin96: ["VDDS_CLKOUT", "E23"],
  pin97: ["gpio5_13", "E24"],
  pin98: ["gpio5_12", "E25"],
  pin99: ["ddr_dqsn0", "F1"],
  pin100: ["ddr_dqs0", "F2"],
  pin101: ["ddr_d3", "F3"],
  pin102: ["ddr_dqm0", "F4"],
  pin103: ["gpmc_a7", "F6"],
  pin104: ["gpmc_a8", "F7"],
  pin105: ["VDDS3P3V_IOLDO", "F8"],
  pin106: ["gpmc_csn2", "F10"],
  pin107: ["gpmc_ad10", "F11"],
  pin108: ["VDDS_SRAM_COR", "F13"],
  pin109: ["VDDS_SRAM_MPU", "F14"],
  pin110: ["VDDSHV7", "F16"],
  pin111: ["mii1_rxd0", "F17"],
  pin112: ["CAP_VBB_MPU", "F19"],
  pin113: ["VDDS", "F20", "VDDS_F20"],
  pin114: ["VDDSHV5", "F22"],
  pin115: ["gpio5_11", "F23"],
  pin116: ["gpio5_9", "F24"],
  pin117: ["USB1_DRVVBUS", "F25"],
  pin118: ["ddr_d7", "G1"],
  pin119: ["ddr_d6", "G2"],
  pin120: ["ddr_d5", "G3"],
  pin121: ["ddr_d4", "G4"],
  pin122: ["VDDS_PLL_DDR", "G5"],
  pin123: ["VDDS", "G6", "VDDS_G6"],
  pin124: ["gpmc_a10", "G8"],
  pin125: ["VDDSHV10", "G10", "VDDSHV10_G10"],
  pin126: ["VDDSHV9", "G11", "VDDSHV9_G11"],
  pin127: ["VDDSHV8", "G13", "VDDSHV8_G13"],
  pin128: ["VDDSHV8", "G14", "VDDSHV8_G14"],
  pin129: ["VDDSHV6", "G16", "VDDSHV6_G16"],
  pin130: ["VDDSHV6", "G17", "VDDSHV6_G17"],
  pin131: ["gpio5_10", "G20"],
  pin132: ["USB0_DRVVBUS", "G21"],
  pin133: ["WARMRSTn", "G22"],
  pin134: ["eCAP0_in_PWM0_o", "G24"],
  pin135: ["EXTINTn", "G25"],
  pin136: ["ddr_d8", "H1"],
  pin137: ["ddr_dqm1", "H2"],
  pin138: ["VDDSHV11", "H8", "VDDSHV11_H8"],
  pin139: ["VDDSHV11", "H9", "VDDSHV11_H9"],
  pin140: ["VDDSHV10", "H10", "VDDSHV10_H10"],
  pin141: ["VDDSHV9", "H11", "VDDSHV9_H11"],
  pin142: ["VDDS", "H12", "VDDS_H12"],
  pin143: ["VDD_MPU", "H13", "VDD_MPU_H13"],
  pin144: ["VDD_MPU", "H14", "VDD_MPU_H14"],
  pin145: ["VSS", "H15", "VSS_H15"],
  pin146: ["VDD_MPU", "H16", "VDD_MPU_H16"],
  pin147: ["VDDSHV6", "H17", "VDDSHV6_H17"],
  pin148: ["VSS", "H18", "VSS_H18"],
  pin149: ["Reserved", "H19", "Reserved_H19"],
  pin150: ["clkreq", "H20"],
  pin151: ["Reserved", "H21", "Reserved_H21"],
  pin152: ["uart3_ctsn", "H22"],
  pin153: ["mcasp0_axr0", "H23"],
  pin154: ["uart3_txd", "H24"],
  pin155: ["uart3_rxd", "H25"],
  pin156: ["ddr_dqsn1", "J1"],
  pin157: ["ddr_dqs1", "J2"],
  pin158: ["ddr_d12", "J3"],
  pin159: ["ddr_d11", "J4"],
  pin160: ["ddr_d10", "J5"],
  pin161: ["ddr_d9", "J6"],
  pin162: ["VDDSHV1", "J7", "VDDSHV1_J7"],
  pin163: ["VDDSHV1", "J8", "VDDSHV1_J8"],
  pin164: ["VSS", "J9", "VSS_J9"],
  pin165: ["VDD_CORE", "J10", "VDD_CORE_J10"],
  pin166: ["VDD_CORE", "J11", "VDD_CORE_J11"],
  pin167: ["VSS", "J12", "VSS_J12"],
  pin168: ["VDD_MPU", "J13", "VDD_MPU_J13"],
  pin169: ["VDD_MPU", "J14", "VDD_MPU_J14"],
  pin170: ["VSS", "J15", "VSS_J15"],
  pin171: ["VDD_MPU", "J16", "VDD_MPU_J16"],
  pin172: ["VSS", "J17", "VSS_J17"],
  pin173: ["VDDSHV3", "J18", "VDDSHV3_J18"],
  pin174: ["uart0_txd", "J24"],
  pin175: ["uart0_rtsn", "J25"],
  pin176: ["ddr_ba0", "K1"],
  pin177: ["ddr_ba1", "K2"],
  pin178: ["ddr_ba2", "K3"],
  pin179: ["ddr_d15", "K4"],
  pin180: ["ddr_d14", "K5"],
  pin181: ["ddr_d13", "K6"],
  pin182: ["VDDS_DDR", "K7", "VDDS_DDR_K7"],
  pin183: ["VDDS_DDR", "K8", "VDDS_DDR_K8"],
  pin184: ["VSS", "K9", "VSS_K9"],
  pin185: ["VSS", "K11", "VSS_K11"],
  pin186: ["VSS", "K12", "VSS_K12"],
  pin187: ["VSS", "K14", "VSS_K14"],
  pin188: ["VSS", "K15", "VSS_K15"],
  pin189: ["VDDSHV3", "K17", "VDDSHV3_K17"],
  pin190: ["VDDSHV3", "K18", "VDDSHV3_K18"],
  pin191: ["VDD_MPU", "K19", "VDD_MPU_K19"],
  pin192: ["VDD_MPU", "K20", "VDD_MPU_K20"],
  pin193: ["uart1_rxd", "K21"],
  pin194: ["uart1_ctsn", "K22"],
  pin195: ["mcasp0_fsr", "K23"],
  pin196: ["uart3_rtsn", "K24"],
  pin197: ["uart0_rxd", "K25"],
  pin198: ["ddr_a1", "L1"],
  pin199: ["ddr_a2", "L2"],
  pin200: ["VSS", "L8", "VSS_L8"],
  pin201: ["VSS", "L9", "VSS_L9"],
  pin202: ["VSS", "L11", "VSS_L11"],
  pin203: ["VDD_CORE", "L12", "VDD_CORE_L12"],
  pin204: ["VDD_CORE", "L14", "VDD_CORE_L14"],
  pin205: ["VSS", "L15", "VSS_L15"],
  pin206: ["VSS", "L17", "VSS_L17"],
  pin207: ["VSS", "L18", "VSS_L18"],
  pin208: ["VDD_MPU", "L19", "VDD_MPU_L19"],
  pin209: ["VDD_MPU", "L20", "VDD_MPU_L20"],
  pin210: ["uart1_txd", "L21"],
  pin211: ["uart1_rtsn", "L22"],
  pin212: ["mcasp0_aclkr", "L23"],
  pin213: ["mcasp0_ahclkx", "L24"],
  pin214: ["uart0_ctsn", "L25"],
  pin215: ["ddr_nck", "M1"],
  pin216: ["ddr_ck", "M2"],
  pin217: ["ddr_cke0", "M3"],
  pin218: ["ddr_csn1", "M4"],
  pin219: ["ddr_csn0", "M5"],
  pin220: ["ddr_a10", "M6"],
  pin221: ["VDDS_DDR", "M7", "VDDS_DDR_M7"],
  pin222: ["VDDS_DDR", "M8", "VDDS_DDR_M8"],
  pin223: ["VDD_CORE", "M9", "VDD_CORE_M9"],
  pin224: ["VSS", "M10", "VSS_M10"],
  pin225: ["VSS", "M11", "VSS_M11"],
  pin226: ["VDD_CORE", "M12", "VDD_CORE_M12"],
  pin227: ["VSS", "M13", "VSS_M13"],
  pin228: ["VDD_CORE", "M14", "VDD_CORE_M14"],
  pin229: ["VSS", "M15", "VSS_M15"],
  pin230: ["VSS", "M16", "VSS_M16"],
  pin231: ["VDD_MPU", "M17", "VDD_MPU_M17"],
  pin232: ["VDD_MPU", "M18", "VDD_MPU_M18"],
  pin233: ["mcasp0_ahclkr", "M24"],
  pin234: ["mcasp0_axr1", "M25"],
  pin235: ["ddr_a0", "N1"],
  pin236: ["ddr_rasn", "N2"],
  pin237: ["ddr_casn", "N3"],
  pin238: ["ddr_wen", "N4"],
  pin239: ["ddr_a13", "N5"],
  pin240: ["ddr_cke1", "N6"],
  pin241: ["VDDS_DDR", "N7", "VDDS_DDR_N7"],
  pin242: ["VDDS_DDR", "N8", "VDDS_DDR_N8"],
  pin243: ["VDD_CORE", "N9", "VDD_CORE_N9"],
  pin244: ["VSS", "N10", "VSS_N10"],
  pin245: ["VSS", "N11", "VSS_N11"],
  pin246: ["VSS", "N12", "VSS_N12"],
  pin247: ["VSS", "N13", "VSS_N13"],
  pin248: ["VSS", "N14", "VSS_N14"],
  pin249: ["VSS", "N15", "VSS_N15"],
  pin250: ["VDD_CORE", "N16", "VDD_CORE_N16"],
  pin251: ["VDD_CORE", "N17", "VDD_CORE_N17"],
  pin252: ["VDDSHV3", "N18", "VDDSHV3_N18"],
  pin253: ["VDDSHV3", "N19", "VDDSHV3_N19"],
  pin254: ["spi2_sclk", "N20"],
  pin255: ["VDDS_PLL_CORE", "N21"],
  pin256: ["mcasp0_fsx", "N22"],
  pin257: ["EMU0", "N23"],
  pin258: ["mcasp0_aclkx", "N24"],
  pin259: ["spi4_cs0", "N25"],
  pin260: ["ddr_a4", "P1"],
  pin261: ["ddr_a3", "P2"],
  pin262: ["VSS", "P8", "VSS_P8"],
  pin263: ["VSS", "P9", "VSS_P9"],
  pin264: ["VSS", "P10", "VSS_P10"],
  pin265: ["VSS", "P11", "VSS_P11"],
  pin266: ["VSS", "P12", "VSS_P12"],
  pin267: ["VSS", "P13", "VSS_P13"],
  pin268: ["VSS", "P14", "VSS_P14"],
  pin269: ["VSS", "P15", "VSS_P15"],
  pin270: ["VDD_CORE", "P16", "VDD_CORE_P16"],
  pin271: ["VDD_CORE", "P17", "VDD_CORE_P17"],
  pin272: ["VDDSHV3", "P18", "VDDSHV3_P18"],
  pin273: ["VDDS", "P19", "VDDS_P19"],
  pin274: ["spi2_d1", "P20"],
  pin275: ["VPP", "P21"],
  pin276: ["spi2_d0", "P22"],
  pin277: ["spi0_sclk", "P23"],
  pin278: ["spi4_d1", "P24"],
  pin279: ["spi4_sclk", "P25"],
  pin280: ["ddr_a9", "R1"],
  pin281: ["ddr_a8", "R2"],
  pin282: ["ddr_a7", "R3"],
  pin283: ["ddr_a6", "R4"],
  pin284: ["ddr_a5", "R5"],
  pin285: ["VDDS_DDR", "R6", "VDDS_DDR_R6"],
  pin286: ["VDDS_DDR", "R7", "VDDS_DDR_R7"],
  pin287: ["VDDS_DDR", "R8", "VDDS_DDR_R8"],
  pin288: ["VDD_CORE", "R9", "VDD_CORE_R9"],
  pin289: ["VDD_CORE", "R11", "VDD_CORE_R11"],
  pin290: ["VSS", "R12", "VSS_R12"],
  pin291: ["VDD_CORE", "R14", "VDD_CORE_R14"],
  pin292: ["VSS", "R15", "VSS_R15"],
  pin293: ["VSS", "R17", "VSS_R17"],
  pin294: ["VSS", "R18", "VSS_R18"],
  pin295: ["spi4_d0", "R24"],
  pin296: ["spi0_cs1", "R25"],
  pin297: ["ddr_resetn", "T1"],
  pin298: ["ddr_a15", "T2"],
  pin299: ["ddr_a14", "T3"],
  pin300: ["ddr_a12", "T4"],
  pin301: ["ddr_a11", "T5"],
  pin302: ["ddr_vref", "T6"],
  pin303: ["VDDS_DDR", "T7", "VDDS_DDR_T7"],
  pin304: ["VDDS_DDR", "T8", "VDDS_DDR_T8"],
  pin305: ["VDD_CORE", "T9", "VDD_CORE_T9"],
  pin306: ["VDD_CORE", "T11", "VDD_CORE_T11"],
  pin307: ["VSS", "T12", "VSS_T12"],
  pin308: ["VDD_CORE", "T14", "VDD_CORE_T14"],
  pin309: ["VSS", "T15", "VSS_T15"],
  pin310: ["VSS", "T17", "VSS_T17"],
  pin311: ["VDD_CORE", "T18", "VDD_CORE_T18"],
  pin312: ["VDD_CORE", "T19", "VDD_CORE_T19"],
  pin313: ["spi0_cs0", "T20"],
  pin314: ["spi0_d1", "T21"],
  pin315: ["spi0_d0", "T22"],
  pin316: ["spi2_cs0", "T23"],
  pin317: ["EMU1", "T24"],
  pin318: ["USB1_VBUS", "T25"],
  pin319: ["ddr_odt0", "U1"],
  pin320: ["ddr_odt1", "U2"],
  pin321: ["VSS", "U8", "VSS_U8"],
  pin322: ["VSS", "U9", "VSS_U9"],
  pin323: ["VSS", "U10", "VSS_U10"],
  pin324: ["VSS", "U11", "VSS_U11"],
  pin325: ["VSS", "U12", "VSS_U12"],
  pin326: ["VSS", "U13", "VSS_U13"],
  pin327: ["VSS", "U14", "VSS_U14"],
  pin328: ["VDD_CORE", "U15", "VDD_CORE_U15"],
  pin329: ["VSS", "U16", "VSS_U16"],
  pin330: ["VSS", "U17", "VSS_U17"],
  pin331: ["VSS", "U18", "VSS_U18"],
  pin352: ["VSS", "U19", "VSS_U19"],
  pin353: ["VDDA3P3V_USB1", "U20"],
  pin354: ["VDDA1P8V_USB1", "U21"],
  pin355: ["USB1_CE", "U22"],
  pin356: ["USB0_VBUS", "U23"],
  pin332: ["USB0_ID", "U24"],
  pin333: ["USB1_ID", "U25"],
  pin334: ["ddr_d20", "V1"],
  pin335: ["ddr_d19", "V2"],
  pin336: ["ddr_d18", "V3"],
  pin337: ["ddr_d17", "V4"],
  pin338: ["ddr_d16", "V5"],
  pin339: ["ddr_dqm2", "V6"],
  pin340: ["VDDS_DDR", "V7", "VDDS_DDR_V7"],
  pin341: ["VDDS_DDR", "V8", "VDDS_DDR_V8"],
  pin342: ["VSS", "V9", "VSS_V9"],
  pin343: ["VSS", "V10", "VSS_V10"],
  pin344: ["VSS", "V11", "VSS_V11"],
  pin345: ["VSS", "V12", "VSS_V12"],
  pin346: ["VSS", "V13", "VSS_V13"],
  pin347: ["VSS", "V14", "VSS_V14"],
  pin348: ["VDD_CORE", "V15", "VDD_CORE_V15"],
  pin349: ["VDDSHV2", "V16", "VDDSHV2_V16"],
  pin350: ["VDDSHV2", "V17", "VDDSHV2_V17"],
  pin351: ["VSS", "V18", "VSS_V18"],
  pin357: ["USB1_DP", "V24"],
  pin358: ["USB1_DM", "V25"],
  pin359: ["ddr_dqs2", "W1"],
  pin360: ["ddr_dqsn2", "W2"],
  pin361: ["ddr_d21", "W4"],
  pin362: ["ddr_d22", "W5"],
  pin363: ["ddr_d23", "W6"],
  pin364: ["Reserved", "W10", "Reserved_W10"],
  pin365: ["VDD_CORE", "W12", "VDD_CORE_W12"],
  pin366: ["VDD_CORE", "W13", "VDD_CORE_W13"],
  pin367: ["VDDS", "W15", "VDDS_W15"],
  pin368: ["VDDSHV2", "W16", "VDDSHV2_W16"],
  pin369: ["VDDSHV3", "W18", "VDDSHV3_W18"],
  pin370: ["VDDA3P3V_USB0", "W20"],
  pin371: ["VDDA1P8V_USB0", "W21"],
  pin372: ["USB0_CE", "W22"],
  pin373: ["VSSA_USB", "W23"],
  pin374: ["USB0_DM", "W24"],
  pin375: ["USB0_DP", "W25"],
  pin376: ["ddr_dqm3", "Y1"],
  pin377: ["ddr_d24", "Y2"],
  pin378: ["ddr_d25", "Y3"],
  pin379: ["ddr_d26", "Y4"],
  pin380: ["Reserved", "Y6", "Reserved_Y6"],
  pin381: ["Reserved", "Y7", "Reserved_Y7"],
  pin382: ["Reserved", "Y10", "Reserved_Y10"],
  pin383: ["ADC0_AIN1", "Y12"],
  pin384: ["ADC0_AIN2", "Y13"],
  pin385: ["ADC1_AIN5", "Y15"],
  pin386: ["VDDA_ADC1", "Y16"],
  pin387: ["cam0_data2", "Y18"],
  pin388: ["VDDS", "Y19", "VDDS_Y19"],
  pin389: ["TDI", "Y20"],
  pin390: ["I2C0_SCL", "Y22"],
  pin391: ["PWRONRSTn", "Y23"],
  pin392: ["TMS", "Y24"],
  pin393: ["nTRST", "Y25"],
} as const;

const pinRoles = {
  pin1: "ground",
  pin25: "ground",
  pin397: "no-connect",
  pin398: "no-connect",
  pin399: "no-connect",
  pin406: "ground",
  pin411: "no-connect",
  pin412: "no-connect",
  pin413: "no-connect",
  pin414: "no-connect",
  pin415: "power",
  pin427: "no-connect",
  pin428: "no-connect",
  pin429: "no-connect",
  pin430: "no-connect",
  pin431: "no-connect",
  pin432: "no-connect",
  pin434: "ground",
  pin442: "no-connect",
  pin443: "no-connect",
  pin445: "ground",
  pin446: "power",
  pin448: "no-connect",
  pin449: "power",
  pin450: "power",
  pin451: "no-connect",
  pin452: "no-connect",
  pin453: "power",
  pin467: "ground",
  pin473: "ground",
  pin474: "ground",
  pin475: "no-connect",
  pin476: "ground",
  pin477: "no-connect",
  pin478: "no-connect",
  pin491: "ground",
  pin49: "ground",
  pin66: "power",
  pin81: "power",
  pin94: "power",
  pin96: "power",
  pin105: "power",
  pin108: "power",
  pin109: "power",
  pin113: "power",
  pin122: "power",
  pin123: "power",
  pin142: "power",
  pin143: "power",
  pin144: "power",
  pin145: "ground",
  pin146: "power",
  pin148: "ground",
  pin149: "no-connect",
  pin151: "no-connect",
  pin164: "ground",
  pin165: "power",
  pin166: "power",
  pin167: "ground",
  pin168: "power",
  pin169: "power",
  pin170: "ground",
  pin171: "power",
  pin172: "ground",
  pin182: "power",
  pin183: "power",
  pin184: "ground",
  pin185: "ground",
  pin186: "ground",
  pin187: "ground",
  pin188: "ground",
  pin191: "power",
  pin192: "power",
  pin200: "ground",
  pin201: "ground",
  pin202: "ground",
  pin203: "power",
  pin204: "power",
  pin205: "ground",
  pin206: "ground",
  pin207: "ground",
  pin208: "power",
  pin209: "power",
  pin221: "power",
  pin222: "power",
  pin223: "power",
  pin224: "ground",
  pin225: "ground",
  pin226: "power",
  pin227: "ground",
  pin228: "power",
  pin229: "ground",
  pin230: "ground",
  pin231: "power",
  pin232: "power",
  pin241: "power",
  pin242: "power",
  pin243: "power",
  pin244: "ground",
  pin245: "ground",
  pin246: "ground",
  pin247: "ground",
  pin248: "ground",
  pin249: "ground",
  pin250: "power",
  pin251: "power",
  pin255: "power",
  pin262: "ground",
  pin263: "ground",
  pin264: "ground",
  pin265: "ground",
  pin266: "ground",
  pin267: "ground",
  pin268: "ground",
  pin269: "ground",
  pin270: "power",
  pin271: "power",
  pin273: "power",
  pin275: "power",
  pin285: "power",
  pin286: "power",
  pin287: "power",
  pin288: "power",
  pin289: "power",
  pin290: "ground",
  pin291: "power",
  pin292: "ground",
  pin293: "ground",
  pin294: "ground",
  pin303: "power",
  pin304: "power",
  pin305: "power",
  pin306: "power",
  pin307: "ground",
  pin308: "power",
  pin309: "ground",
  pin310: "ground",
  pin311: "power",
  pin312: "power",
  pin321: "ground",
  pin322: "ground",
  pin323: "ground",
  pin324: "ground",
  pin325: "ground",
  pin326: "ground",
  pin327: "ground",
  pin328: "power",
  pin329: "ground",
  pin330: "ground",
  pin331: "ground",
  pin352: "ground",
  pin353: "power",
  pin354: "power",
  pin340: "power",
  pin341: "power",
  pin342: "ground",
  pin343: "ground",
  pin344: "ground",
  pin345: "ground",
  pin346: "ground",
  pin347: "ground",
  pin348: "power",
  pin351: "ground",
  pin364: "no-connect",
  pin365: "power",
  pin366: "power",
  pin367: "power",
  pin370: "power",
  pin371: "power",
  pin373: "ground",
  pin380: "no-connect",
  pin381: "no-connect",
  pin382: "no-connect",
  pin386: "power",
  pin388: "power",
} as const;

const pinAttributes = {
  pin1: {
    requiresGround: true,
  },
  pin25: {
    requiresGround: true,
  },
  pin397: {
    doNotConnect: true,
  },
  pin398: {
    doNotConnect: true,
  },
  pin399: {
    doNotConnect: true,
  },
  pin406: {
    requiresGround: true,
  },
  pin411: {
    doNotConnect: true,
  },
  pin412: {
    doNotConnect: true,
  },
  pin413: {
    doNotConnect: true,
  },
  pin414: {
    doNotConnect: true,
  },
  pin415: {
    requiresPower: true,
  },
  pin427: {
    doNotConnect: true,
  },
  pin428: {
    doNotConnect: true,
  },
  pin429: {
    doNotConnect: true,
  },
  pin430: {
    doNotConnect: true,
  },
  pin431: {
    doNotConnect: true,
  },
  pin432: {
    doNotConnect: true,
  },
  pin434: {
    requiresGround: true,
  },
  pin442: {
    doNotConnect: true,
  },
  pin443: {
    doNotConnect: true,
  },
  pin445: {
    requiresGround: true,
  },
  pin446: {
    requiresPower: true,
  },
  pin448: {
    doNotConnect: true,
  },
  pin449: {
    requiresPower: true,
  },
  pin450: {
    requiresPower: true,
  },
  pin451: {
    doNotConnect: true,
  },
  pin452: {
    doNotConnect: true,
  },
  pin453: {
    requiresPower: true,
  },
  pin467: {
    requiresGround: true,
  },
  pin473: {
    requiresGround: true,
  },
  pin474: {
    requiresGround: true,
  },
  pin475: {
    doNotConnect: true,
  },
  pin476: {
    requiresGround: true,
  },
  pin477: {
    doNotConnect: true,
  },
  pin478: {
    doNotConnect: true,
  },
  pin491: {
    requiresGround: true,
  },
  pin49: {
    requiresGround: true,
  },
  pin66: {
    requiresPower: true,
  },
  pin81: {
    requiresPower: true,
  },
  pin94: {
    requiresPower: true,
  },
  pin96: {
    requiresPower: true,
  },
  pin105: {
    requiresPower: true,
  },
  pin108: {
    requiresPower: true,
  },
  pin109: {
    requiresPower: true,
  },
  pin113: {
    requiresPower: true,
  },
  pin122: {
    requiresPower: true,
  },
  pin123: {
    requiresPower: true,
  },
  pin142: {
    requiresPower: true,
  },
  pin143: {
    requiresPower: true,
  },
  pin144: {
    requiresPower: true,
  },
  pin145: {
    requiresGround: true,
  },
  pin146: {
    requiresPower: true,
  },
  pin148: {
    requiresGround: true,
  },
  pin149: {
    doNotConnect: true,
  },
  pin151: {
    doNotConnect: true,
  },
  pin164: {
    requiresGround: true,
  },
  pin165: {
    requiresPower: true,
  },
  pin166: {
    requiresPower: true,
  },
  pin167: {
    requiresGround: true,
  },
  pin168: {
    requiresPower: true,
  },
  pin169: {
    requiresPower: true,
  },
  pin170: {
    requiresGround: true,
  },
  pin171: {
    requiresPower: true,
  },
  pin172: {
    requiresGround: true,
  },
  pin182: {
    requiresPower: true,
  },
  pin183: {
    requiresPower: true,
  },
  pin184: {
    requiresGround: true,
  },
  pin185: {
    requiresGround: true,
  },
  pin186: {
    requiresGround: true,
  },
  pin187: {
    requiresGround: true,
  },
  pin188: {
    requiresGround: true,
  },
  pin191: {
    requiresPower: true,
  },
  pin192: {
    requiresPower: true,
  },
  pin200: {
    requiresGround: true,
  },
  pin201: {
    requiresGround: true,
  },
  pin202: {
    requiresGround: true,
  },
  pin203: {
    requiresPower: true,
  },
  pin204: {
    requiresPower: true,
  },
  pin205: {
    requiresGround: true,
  },
  pin206: {
    requiresGround: true,
  },
  pin207: {
    requiresGround: true,
  },
  pin208: {
    requiresPower: true,
  },
  pin209: {
    requiresPower: true,
  },
  pin221: {
    requiresPower: true,
  },
  pin222: {
    requiresPower: true,
  },
  pin223: {
    requiresPower: true,
  },
  pin224: {
    requiresGround: true,
  },
  pin225: {
    requiresGround: true,
  },
  pin226: {
    requiresPower: true,
  },
  pin227: {
    requiresGround: true,
  },
  pin228: {
    requiresPower: true,
  },
  pin229: {
    requiresGround: true,
  },
  pin230: {
    requiresGround: true,
  },
  pin231: {
    requiresPower: true,
  },
  pin232: {
    requiresPower: true,
  },
  pin241: {
    requiresPower: true,
  },
  pin242: {
    requiresPower: true,
  },
  pin243: {
    requiresPower: true,
  },
  pin244: {
    requiresGround: true,
  },
  pin245: {
    requiresGround: true,
  },
  pin246: {
    requiresGround: true,
  },
  pin247: {
    requiresGround: true,
  },
  pin248: {
    requiresGround: true,
  },
  pin249: {
    requiresGround: true,
  },
  pin250: {
    requiresPower: true,
  },
  pin251: {
    requiresPower: true,
  },
  pin255: {
    requiresPower: true,
  },
  pin262: {
    requiresGround: true,
  },
  pin263: {
    requiresGround: true,
  },
  pin264: {
    requiresGround: true,
  },
  pin265: {
    requiresGround: true,
  },
  pin266: {
    requiresGround: true,
  },
  pin267: {
    requiresGround: true,
  },
  pin268: {
    requiresGround: true,
  },
  pin269: {
    requiresGround: true,
  },
  pin270: {
    requiresPower: true,
  },
  pin271: {
    requiresPower: true,
  },
  pin273: {
    requiresPower: true,
  },
  pin275: {
    requiresPower: true,
  },
  pin285: {
    requiresPower: true,
  },
  pin286: {
    requiresPower: true,
  },
  pin287: {
    requiresPower: true,
  },
  pin288: {
    requiresPower: true,
  },
  pin289: {
    requiresPower: true,
  },
  pin290: {
    requiresGround: true,
  },
  pin291: {
    requiresPower: true,
  },
  pin292: {
    requiresGround: true,
  },
  pin293: {
    requiresGround: true,
  },
  pin294: {
    requiresGround: true,
  },
  pin303: {
    requiresPower: true,
  },
  pin304: {
    requiresPower: true,
  },
  pin305: {
    requiresPower: true,
  },
  pin306: {
    requiresPower: true,
  },
  pin307: {
    requiresGround: true,
  },
  pin308: {
    requiresPower: true,
  },
  pin309: {
    requiresGround: true,
  },
  pin310: {
    requiresGround: true,
  },
  pin311: {
    requiresPower: true,
  },
  pin312: {
    requiresPower: true,
  },
  pin321: {
    requiresGround: true,
  },
  pin322: {
    requiresGround: true,
  },
  pin323: {
    requiresGround: true,
  },
  pin324: {
    requiresGround: true,
  },
  pin325: {
    requiresGround: true,
  },
  pin326: {
    requiresGround: true,
  },
  pin327: {
    requiresGround: true,
  },
  pin328: {
    requiresPower: true,
  },
  pin329: {
    requiresGround: true,
  },
  pin330: {
    requiresGround: true,
  },
  pin331: {
    requiresGround: true,
  },
  pin352: {
    requiresGround: true,
  },
  pin353: {
    requiresPower: true,
  },
  pin354: {
    requiresPower: true,
  },
  pin340: {
    requiresPower: true,
  },
  pin341: {
    requiresPower: true,
  },
  pin342: {
    requiresGround: true,
  },
  pin343: {
    requiresGround: true,
  },
  pin344: {
    requiresGround: true,
  },
  pin345: {
    requiresGround: true,
  },
  pin346: {
    requiresGround: true,
  },
  pin347: {
    requiresGround: true,
  },
  pin348: {
    requiresPower: true,
  },
  pin351: {
    requiresGround: true,
  },
  pin364: {
    doNotConnect: true,
  },
  pin365: {
    requiresPower: true,
  },
  pin366: {
    requiresPower: true,
  },
  pin367: {
    requiresPower: true,
  },
  pin370: {
    requiresPower: true,
  },
  pin371: {
    requiresPower: true,
  },
  pin373: {
    requiresGround: true,
  },
  pin380: {
    doNotConnect: true,
  },
  pin381: {
    doNotConnect: true,
  },
  pin382: {
    doNotConnect: true,
  },
  pin386: {
    requiresPower: true,
  },
  pin388: {
    requiresPower: true,
  },
} as const;

export const AM4379BZDNA100 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C1522310"],
      }}
      manufacturerPartNumber="AM4379BZDNA100"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="7.800086mm"
            pcbY="-7.800086mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="7.1501mm"
            pcbY="-7.800086mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="6.500114mm"
            pcbY="-7.800086mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="5.849874mm"
            pcbY="-7.800086mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="5.199888mm"
            pcbY="-7.800086mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="4.549902mm"
            pcbY="-7.800086mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="3.899916mm"
            pcbY="-7.800086mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="3.24993mm"
            pcbY="-7.800086mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="2.599944mm"
            pcbY="-7.800086mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="1.949958mm"
            pcbY="-7.800086mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="1.299972mm"
            pcbY="-7.800086mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="0.649986mm"
            pcbY="-7.800086mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="0mm"
            pcbY="-7.800086mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="-0.649986mm"
            pcbY="-7.800086mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="-1.299972mm"
            pcbY="-7.800086mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="-1.949958mm"
            pcbY="-7.800086mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="-2.599944mm"
            pcbY="-7.800086mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="-3.24993mm"
            pcbY="-7.800086mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin19"]}
            pcbX="-3.899916mm"
            pcbY="-7.800086mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin20"]}
            pcbX="-4.549902mm"
            pcbY="-7.800086mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin21"]}
            pcbX="-5.199888mm"
            pcbY="-7.800086mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin22"]}
            pcbX="-5.849874mm"
            pcbY="-7.800086mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin23"]}
            pcbX="-6.49986mm"
            pcbY="-7.800086mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin24"]}
            pcbX="-7.1501mm"
            pcbY="-7.800086mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin25"]}
            pcbX="-7.800086mm"
            pcbY="-7.800086mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin26"]}
            pcbX="7.800086mm"
            pcbY="-7.1501mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin27"]}
            pcbX="7.1501mm"
            pcbY="-7.1501mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin28"]}
            pcbX="6.500114mm"
            pcbY="-7.1501mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin29"]}
            pcbX="5.849874mm"
            pcbY="-7.1501mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin30"]}
            pcbX="5.199888mm"
            pcbY="-7.1501mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin31"]}
            pcbX="4.549902mm"
            pcbY="-7.1501mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin32"]}
            pcbX="3.899916mm"
            pcbY="-7.1501mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin33"]}
            pcbX="3.24993mm"
            pcbY="-7.1501mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin34"]}
            pcbX="2.599944mm"
            pcbY="-7.1501mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin35"]}
            pcbX="1.949958mm"
            pcbY="-7.1501mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin36"]}
            pcbX="1.299972mm"
            pcbY="-7.1501mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin37"]}
            pcbX="0.649986mm"
            pcbY="-7.1501mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin38"]}
            pcbX="0mm"
            pcbY="-7.1501mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin39"]}
            pcbX="-0.649986mm"
            pcbY="-7.1501mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin40"]}
            pcbX="-1.299972mm"
            pcbY="-7.1501mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin41"]}
            pcbX="-1.949958mm"
            pcbY="-7.1501mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin42"]}
            pcbX="-2.599944mm"
            pcbY="-7.1501mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin43"]}
            pcbX="-3.24993mm"
            pcbY="-7.1501mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin44"]}
            pcbX="-3.899916mm"
            pcbY="-7.1501mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin45"]}
            pcbX="-4.549902mm"
            pcbY="-7.1501mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin46"]}
            pcbX="-5.199888mm"
            pcbY="-7.1501mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin47"]}
            pcbX="-5.849874mm"
            pcbY="-7.1501mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin48"]}
            pcbX="-6.49986mm"
            pcbY="-7.1501mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin49"]}
            pcbX="-7.1501mm"
            pcbY="-7.1501mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin50"]}
            pcbX="-7.800086mm"
            pcbY="-7.1501mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin51"]}
            pcbX="7.800086mm"
            pcbY="-6.49986mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin52"]}
            pcbX="7.1501mm"
            pcbY="-6.49986mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin53"]}
            pcbX="6.500114mm"
            pcbY="-6.49986mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin54"]}
            pcbX="5.199888mm"
            pcbY="-6.49986mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin55"]}
            pcbX="4.549902mm"
            pcbY="-6.49986mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin56"]}
            pcbX="3.24993mm"
            pcbY="-6.49986mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin57"]}
            pcbX="1.949958mm"
            pcbY="-6.49986mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin58"]}
            pcbX="1.299972mm"
            pcbY="-6.49986mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin59"]}
            pcbX="0mm"
            pcbY="-6.49986mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin60"]}
            pcbX="-0.649986mm"
            pcbY="-6.49986mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin61"]}
            pcbX="-1.949958mm"
            pcbY="-6.49986mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin62"]}
            pcbX="-2.599944mm"
            pcbY="-6.49986mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin63"]}
            pcbX="-3.899916mm"
            pcbY="-6.49986mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin64"]}
            pcbX="-4.549902mm"
            pcbY="-6.49986mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin65"]}
            pcbX="-5.199888mm"
            pcbY="-6.49986mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin66"]}
            pcbX="-6.49986mm"
            pcbY="-6.49986mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin67"]}
            pcbX="-7.1501mm"
            pcbY="-6.49986mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin68"]}
            pcbX="-7.800086mm"
            pcbY="-6.49986mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin69"]}
            pcbX="7.800086mm"
            pcbY="-5.849874mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin70"]}
            pcbX="7.1501mm"
            pcbY="-5.849874mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin71"]}
            pcbX="4.549902mm"
            pcbY="-5.849874mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin72"]}
            pcbX="3.899916mm"
            pcbY="-5.849874mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin73"]}
            pcbX="3.24993mm"
            pcbY="-5.849874mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin74"]}
            pcbX="1.949958mm"
            pcbY="-5.849874mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin75"]}
            pcbX="1.299972mm"
            pcbY="-5.849874mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin76"]}
            pcbX="0mm"
            pcbY="-5.849874mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin77"]}
            pcbX="-0.649986mm"
            pcbY="-5.849874mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin78"]}
            pcbX="-1.949958mm"
            pcbY="-5.849874mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin79"]}
            pcbX="-2.599944mm"
            pcbY="-5.849874mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin80"]}
            pcbX="-3.899916mm"
            pcbY="-5.849874mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin81"]}
            pcbX="-4.549902mm"
            pcbY="-5.849874mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin82"]}
            pcbX="-7.1501mm"
            pcbY="-5.849874mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin83"]}
            pcbX="-7.800086mm"
            pcbY="-5.849874mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin84"]}
            pcbX="7.800086mm"
            pcbY="-5.199888mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin85"]}
            pcbX="7.1501mm"
            pcbY="-5.199888mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin86"]}
            pcbX="6.500114mm"
            pcbY="-5.199888mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin87"]}
            pcbX="3.899916mm"
            pcbY="-5.199888mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin88"]}
            pcbX="3.24993mm"
            pcbY="-5.199888mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin89"]}
            pcbX="1.949958mm"
            pcbY="-5.199888mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin90"]}
            pcbX="1.299972mm"
            pcbY="-5.199888mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin91"]}
            pcbX="0mm"
            pcbY="-5.199888mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin92"]}
            pcbX="-0.649986mm"
            pcbY="-5.199888mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin93"]}
            pcbX="-1.949958mm"
            pcbY="-5.199888mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin94"]}
            pcbX="-2.599944mm"
            pcbY="-5.199888mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin95"]}
            pcbX="-3.899916mm"
            pcbY="-5.199888mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin96"]}
            pcbX="-6.49986mm"
            pcbY="-5.199888mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin97"]}
            pcbX="-7.1501mm"
            pcbY="-5.199888mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin98"]}
            pcbX="-7.800086mm"
            pcbY="-5.199888mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin99"]}
            pcbX="7.800086mm"
            pcbY="-4.549902mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin100"]}
            pcbX="7.1501mm"
            pcbY="-4.549902mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin101"]}
            pcbX="6.500114mm"
            pcbY="-4.549902mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin102"]}
            pcbX="5.849874mm"
            pcbY="-4.549902mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin103"]}
            pcbX="4.549902mm"
            pcbY="-4.549902mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin104"]}
            pcbX="3.899916mm"
            pcbY="-4.549902mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin105"]}
            pcbX="3.24993mm"
            pcbY="-4.549902mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin106"]}
            pcbX="1.949958mm"
            pcbY="-4.549902mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin107"]}
            pcbX="1.299972mm"
            pcbY="-4.549902mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin108"]}
            pcbX="0mm"
            pcbY="-4.549902mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin109"]}
            pcbX="-0.649986mm"
            pcbY="-4.549902mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin110"]}
            pcbX="-1.949958mm"
            pcbY="-4.549902mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin111"]}
            pcbX="-2.599944mm"
            pcbY="-4.549902mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin112"]}
            pcbX="-3.899916mm"
            pcbY="-4.549902mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin113"]}
            pcbX="-4.549902mm"
            pcbY="-4.549902mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin114"]}
            pcbX="-5.849874mm"
            pcbY="-4.549902mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin115"]}
            pcbX="-6.49986mm"
            pcbY="-4.549902mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin116"]}
            pcbX="-7.1501mm"
            pcbY="-4.549902mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin117"]}
            pcbX="-7.800086mm"
            pcbY="-4.549902mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin118"]}
            pcbX="7.800086mm"
            pcbY="-3.899916mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin119"]}
            pcbX="7.1501mm"
            pcbY="-3.899916mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin120"]}
            pcbX="6.500114mm"
            pcbY="-3.899916mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin121"]}
            pcbX="5.849874mm"
            pcbY="-3.899916mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin122"]}
            pcbX="5.199888mm"
            pcbY="-3.899916mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin123"]}
            pcbX="4.549902mm"
            pcbY="-3.899916mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin124"]}
            pcbX="3.24993mm"
            pcbY="-3.899916mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin125"]}
            pcbX="1.949958mm"
            pcbY="-3.899916mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin126"]}
            pcbX="1.299972mm"
            pcbY="-3.899916mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin127"]}
            pcbX="0mm"
            pcbY="-3.899916mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin128"]}
            pcbX="-0.649986mm"
            pcbY="-3.899916mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin129"]}
            pcbX="-1.949958mm"
            pcbY="-3.899916mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin130"]}
            pcbX="-2.599944mm"
            pcbY="-3.899916mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin131"]}
            pcbX="-4.549902mm"
            pcbY="-3.899916mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin132"]}
            pcbX="-5.199888mm"
            pcbY="-3.899916mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin133"]}
            pcbX="-5.849874mm"
            pcbY="-3.899916mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin134"]}
            pcbX="-7.1501mm"
            pcbY="-3.899916mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin135"]}
            pcbX="-7.800086mm"
            pcbY="-3.899916mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin136"]}
            pcbX="7.800086mm"
            pcbY="-3.24993mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin137"]}
            pcbX="7.1501mm"
            pcbY="-3.24993mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin138"]}
            pcbX="3.24993mm"
            pcbY="-3.24993mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin139"]}
            pcbX="2.599944mm"
            pcbY="-3.24993mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin140"]}
            pcbX="1.949958mm"
            pcbY="-3.24993mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin141"]}
            pcbX="1.299972mm"
            pcbY="-3.24993mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin142"]}
            pcbX="0.649986mm"
            pcbY="-3.24993mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin143"]}
            pcbX="0mm"
            pcbY="-3.24993mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin144"]}
            pcbX="-0.649986mm"
            pcbY="-3.24993mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin145"]}
            pcbX="-1.299972mm"
            pcbY="-3.24993mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin146"]}
            pcbX="-1.949958mm"
            pcbY="-3.24993mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin147"]}
            pcbX="-2.599944mm"
            pcbY="-3.24993mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin148"]}
            pcbX="-3.24993mm"
            pcbY="-3.24993mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin149"]}
            pcbX="-3.899916mm"
            pcbY="-3.24993mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin150"]}
            pcbX="-4.549902mm"
            pcbY="-3.24993mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin151"]}
            pcbX="-5.199888mm"
            pcbY="-3.24993mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin152"]}
            pcbX="-5.849874mm"
            pcbY="-3.24993mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin153"]}
            pcbX="-6.49986mm"
            pcbY="-3.24993mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin154"]}
            pcbX="-7.1501mm"
            pcbY="-3.24993mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin155"]}
            pcbX="-7.800086mm"
            pcbY="-3.24993mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin156"]}
            pcbX="7.800086mm"
            pcbY="-2.599944mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin157"]}
            pcbX="7.1501mm"
            pcbY="-2.599944mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin158"]}
            pcbX="6.500114mm"
            pcbY="-2.599944mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin159"]}
            pcbX="5.849874mm"
            pcbY="-2.599944mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin160"]}
            pcbX="5.199888mm"
            pcbY="-2.599944mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin161"]}
            pcbX="4.549902mm"
            pcbY="-2.599944mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin162"]}
            pcbX="3.899916mm"
            pcbY="-2.599944mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin163"]}
            pcbX="3.24993mm"
            pcbY="-2.599944mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin164"]}
            pcbX="2.599944mm"
            pcbY="-2.599944mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin165"]}
            pcbX="1.949958mm"
            pcbY="-2.599944mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin166"]}
            pcbX="1.299972mm"
            pcbY="-2.599944mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin167"]}
            pcbX="0.649986mm"
            pcbY="-2.599944mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin168"]}
            pcbX="0mm"
            pcbY="-2.599944mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin169"]}
            pcbX="-0.649986mm"
            pcbY="-2.599944mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin170"]}
            pcbX="-1.299972mm"
            pcbY="-2.599944mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin171"]}
            pcbX="-1.949958mm"
            pcbY="-2.599944mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin172"]}
            pcbX="-2.599944mm"
            pcbY="-2.599944mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin173"]}
            pcbX="-3.24993mm"
            pcbY="-2.599944mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin174"]}
            pcbX="-7.1501mm"
            pcbY="-2.599944mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin175"]}
            pcbX="-7.800086mm"
            pcbY="-2.599944mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin176"]}
            pcbX="7.800086mm"
            pcbY="-1.949958mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin177"]}
            pcbX="7.1501mm"
            pcbY="-1.949958mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin178"]}
            pcbX="6.500114mm"
            pcbY="-1.949958mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin179"]}
            pcbX="5.849874mm"
            pcbY="-1.949958mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin180"]}
            pcbX="5.199888mm"
            pcbY="-1.949958mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin181"]}
            pcbX="4.549902mm"
            pcbY="-1.949958mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin182"]}
            pcbX="3.899916mm"
            pcbY="-1.949958mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin183"]}
            pcbX="3.24993mm"
            pcbY="-1.949958mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin184"]}
            pcbX="2.599944mm"
            pcbY="-1.949958mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin185"]}
            pcbX="1.299972mm"
            pcbY="-1.949958mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin186"]}
            pcbX="0.649986mm"
            pcbY="-1.949958mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin187"]}
            pcbX="-0.649986mm"
            pcbY="-1.949958mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin188"]}
            pcbX="-1.299972mm"
            pcbY="-1.949958mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin189"]}
            pcbX="-2.599944mm"
            pcbY="-1.949958mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin190"]}
            pcbX="-3.24993mm"
            pcbY="-1.949958mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin191"]}
            pcbX="-3.899916mm"
            pcbY="-1.949958mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin192"]}
            pcbX="-4.549902mm"
            pcbY="-1.949958mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin193"]}
            pcbX="-5.199888mm"
            pcbY="-1.949958mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin194"]}
            pcbX="-5.849874mm"
            pcbY="-1.949958mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin195"]}
            pcbX="-6.49986mm"
            pcbY="-1.949958mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin196"]}
            pcbX="-7.1501mm"
            pcbY="-1.949958mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin197"]}
            pcbX="-7.800086mm"
            pcbY="-1.949958mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin198"]}
            pcbX="7.800086mm"
            pcbY="-1.299972mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin199"]}
            pcbX="7.1501mm"
            pcbY="-1.299972mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin200"]}
            pcbX="3.24993mm"
            pcbY="-1.299972mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin201"]}
            pcbX="2.599944mm"
            pcbY="-1.299972mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin202"]}
            pcbX="1.299972mm"
            pcbY="-1.299972mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin203"]}
            pcbX="0.649986mm"
            pcbY="-1.299972mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin204"]}
            pcbX="-0.649986mm"
            pcbY="-1.299972mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin205"]}
            pcbX="-1.299972mm"
            pcbY="-1.299972mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin206"]}
            pcbX="-2.599944mm"
            pcbY="-1.299972mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin207"]}
            pcbX="-3.24993mm"
            pcbY="-1.299972mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin208"]}
            pcbX="-3.899916mm"
            pcbY="-1.299972mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin209"]}
            pcbX="-4.549902mm"
            pcbY="-1.299972mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin210"]}
            pcbX="-5.199888mm"
            pcbY="-1.299972mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin211"]}
            pcbX="-5.849874mm"
            pcbY="-1.299972mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin212"]}
            pcbX="-6.49986mm"
            pcbY="-1.299972mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin213"]}
            pcbX="-7.1501mm"
            pcbY="-1.299972mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin214"]}
            pcbX="-7.800086mm"
            pcbY="-1.299972mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin215"]}
            pcbX="7.800086mm"
            pcbY="-0.649986mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin216"]}
            pcbX="7.1501mm"
            pcbY="-0.649986mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin217"]}
            pcbX="6.500114mm"
            pcbY="-0.649986mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin218"]}
            pcbX="5.849874mm"
            pcbY="-0.649986mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin219"]}
            pcbX="5.199888mm"
            pcbY="-0.649986mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin220"]}
            pcbX="4.549902mm"
            pcbY="-0.649986mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin221"]}
            pcbX="3.899916mm"
            pcbY="-0.649986mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin222"]}
            pcbX="3.24993mm"
            pcbY="-0.649986mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin223"]}
            pcbX="2.599944mm"
            pcbY="-0.649986mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin224"]}
            pcbX="1.949958mm"
            pcbY="-0.649986mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin225"]}
            pcbX="1.299972mm"
            pcbY="-0.649986mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin226"]}
            pcbX="0.649986mm"
            pcbY="-0.649986mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin227"]}
            pcbX="0mm"
            pcbY="-0.649986mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin228"]}
            pcbX="-0.649986mm"
            pcbY="-0.649986mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin229"]}
            pcbX="-1.299972mm"
            pcbY="-0.649986mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin230"]}
            pcbX="-1.949958mm"
            pcbY="-0.649986mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin231"]}
            pcbX="-2.599944mm"
            pcbY="-0.649986mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin232"]}
            pcbX="-3.24993mm"
            pcbY="-0.649986mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin233"]}
            pcbX="-7.1501mm"
            pcbY="-0.649986mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin234"]}
            pcbX="-7.800086mm"
            pcbY="-0.649986mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin235"]}
            pcbX="7.800086mm"
            pcbY="0mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin236"]}
            pcbX="7.1501mm"
            pcbY="0mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin237"]}
            pcbX="6.500114mm"
            pcbY="0mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin238"]}
            pcbX="5.849874mm"
            pcbY="0mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin239"]}
            pcbX="5.199888mm"
            pcbY="0mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin240"]}
            pcbX="4.549902mm"
            pcbY="0mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin241"]}
            pcbX="3.899916mm"
            pcbY="0mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin242"]}
            pcbX="3.24993mm"
            pcbY="0mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin243"]}
            pcbX="2.599944mm"
            pcbY="0mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin244"]}
            pcbX="1.949958mm"
            pcbY="0mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin245"]}
            pcbX="1.299972mm"
            pcbY="0mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin246"]}
            pcbX="0.649986mm"
            pcbY="0mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin247"]}
            pcbX="0mm"
            pcbY="0mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin248"]}
            pcbX="-0.649986mm"
            pcbY="0mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin249"]}
            pcbX="-1.299972mm"
            pcbY="0mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin250"]}
            pcbX="-1.949958mm"
            pcbY="0mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin251"]}
            pcbX="-2.599944mm"
            pcbY="0mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin252"]}
            pcbX="-3.24993mm"
            pcbY="0mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin253"]}
            pcbX="-3.899916mm"
            pcbY="0mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin254"]}
            pcbX="-4.549902mm"
            pcbY="0mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin255"]}
            pcbX="-5.199888mm"
            pcbY="0mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin256"]}
            pcbX="-5.849874mm"
            pcbY="0mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin257"]}
            pcbX="-6.49986mm"
            pcbY="0mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin258"]}
            pcbX="-7.1501mm"
            pcbY="0mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin259"]}
            pcbX="-7.800086mm"
            pcbY="0mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin260"]}
            pcbX="7.800086mm"
            pcbY="0.649986mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin261"]}
            pcbX="7.1501mm"
            pcbY="0.649986mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin262"]}
            pcbX="3.24993mm"
            pcbY="0.649986mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin263"]}
            pcbX="2.599944mm"
            pcbY="0.649986mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin264"]}
            pcbX="1.949958mm"
            pcbY="0.649986mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin265"]}
            pcbX="1.299972mm"
            pcbY="0.649986mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin266"]}
            pcbX="0.649986mm"
            pcbY="0.649986mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin267"]}
            pcbX="0mm"
            pcbY="0.649986mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin268"]}
            pcbX="-0.649986mm"
            pcbY="0.649986mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin269"]}
            pcbX="-1.299972mm"
            pcbY="0.649986mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin270"]}
            pcbX="-1.949958mm"
            pcbY="0.649986mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin271"]}
            pcbX="-2.599944mm"
            pcbY="0.649986mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin272"]}
            pcbX="-3.24993mm"
            pcbY="0.649986mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin273"]}
            pcbX="-3.899916mm"
            pcbY="0.649986mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin274"]}
            pcbX="-4.549902mm"
            pcbY="0.649986mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin275"]}
            pcbX="-5.199888mm"
            pcbY="0.649986mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin276"]}
            pcbX="-5.849874mm"
            pcbY="0.649986mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin277"]}
            pcbX="-6.49986mm"
            pcbY="0.649986mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin278"]}
            pcbX="-7.1501mm"
            pcbY="0.649986mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin279"]}
            pcbX="-7.800086mm"
            pcbY="0.649986mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin280"]}
            pcbX="7.800086mm"
            pcbY="1.299972mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin281"]}
            pcbX="7.1501mm"
            pcbY="1.299972mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin282"]}
            pcbX="6.500114mm"
            pcbY="1.299972mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin283"]}
            pcbX="5.849874mm"
            pcbY="1.299972mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin284"]}
            pcbX="5.199888mm"
            pcbY="1.299972mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin285"]}
            pcbX="4.549902mm"
            pcbY="1.299972mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin286"]}
            pcbX="3.899916mm"
            pcbY="1.299972mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin287"]}
            pcbX="3.24993mm"
            pcbY="1.299972mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin288"]}
            pcbX="2.599944mm"
            pcbY="1.299972mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin289"]}
            pcbX="1.299972mm"
            pcbY="1.299972mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin290"]}
            pcbX="0.649986mm"
            pcbY="1.299972mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin291"]}
            pcbX="-0.649986mm"
            pcbY="1.299972mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin292"]}
            pcbX="-1.299972mm"
            pcbY="1.299972mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin293"]}
            pcbX="-2.599944mm"
            pcbY="1.299972mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin294"]}
            pcbX="-3.24993mm"
            pcbY="1.299972mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin295"]}
            pcbX="-7.1501mm"
            pcbY="1.299972mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin296"]}
            pcbX="-7.800086mm"
            pcbY="1.299972mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin297"]}
            pcbX="7.800086mm"
            pcbY="1.949958mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin298"]}
            pcbX="7.1501mm"
            pcbY="1.949958mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin299"]}
            pcbX="6.500114mm"
            pcbY="1.949958mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin300"]}
            pcbX="5.849874mm"
            pcbY="1.949958mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin301"]}
            pcbX="5.199888mm"
            pcbY="1.949958mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin302"]}
            pcbX="4.549902mm"
            pcbY="1.949958mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin303"]}
            pcbX="3.899916mm"
            pcbY="1.949958mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin304"]}
            pcbX="3.24993mm"
            pcbY="1.949958mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin305"]}
            pcbX="2.599944mm"
            pcbY="1.949958mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin306"]}
            pcbX="1.299972mm"
            pcbY="1.949958mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin307"]}
            pcbX="0.649986mm"
            pcbY="1.949958mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin308"]}
            pcbX="-0.649986mm"
            pcbY="1.949958mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin309"]}
            pcbX="-1.299972mm"
            pcbY="1.949958mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin310"]}
            pcbX="-2.599944mm"
            pcbY="1.949958mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin311"]}
            pcbX="-3.24993mm"
            pcbY="1.949958mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin312"]}
            pcbX="-3.899916mm"
            pcbY="1.949958mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin313"]}
            pcbX="-4.549902mm"
            pcbY="1.949958mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin314"]}
            pcbX="-5.199888mm"
            pcbY="1.949958mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin315"]}
            pcbX="-5.849874mm"
            pcbY="1.949958mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin316"]}
            pcbX="-6.49986mm"
            pcbY="1.949958mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin317"]}
            pcbX="-7.1501mm"
            pcbY="1.949958mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin318"]}
            pcbX="-7.800086mm"
            pcbY="1.949958mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin319"]}
            pcbX="7.800086mm"
            pcbY="2.599944mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin320"]}
            pcbX="7.1501mm"
            pcbY="2.599944mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin321"]}
            pcbX="3.24993mm"
            pcbY="2.599944mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin322"]}
            pcbX="2.599944mm"
            pcbY="2.599944mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin323"]}
            pcbX="1.949958mm"
            pcbY="2.599944mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin324"]}
            pcbX="1.299972mm"
            pcbY="2.599944mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin325"]}
            pcbX="0.649986mm"
            pcbY="2.599944mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin326"]}
            pcbX="0mm"
            pcbY="2.599944mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin327"]}
            pcbX="-0.649986mm"
            pcbY="2.599944mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin328"]}
            pcbX="-1.299972mm"
            pcbY="2.599944mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin329"]}
            pcbX="-1.949958mm"
            pcbY="2.599944mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin330"]}
            pcbX="-2.599944mm"
            pcbY="2.599944mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin331"]}
            pcbX="-3.24993mm"
            pcbY="2.599944mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin332"]}
            pcbX="-7.1501mm"
            pcbY="2.599944mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin333"]}
            pcbX="-7.800086mm"
            pcbY="2.599944mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin334"]}
            pcbX="7.800086mm"
            pcbY="3.24993mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin335"]}
            pcbX="7.1501mm"
            pcbY="3.24993mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin336"]}
            pcbX="6.500114mm"
            pcbY="3.24993mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin337"]}
            pcbX="5.849874mm"
            pcbY="3.24993mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin338"]}
            pcbX="5.199888mm"
            pcbY="3.24993mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin339"]}
            pcbX="4.549902mm"
            pcbY="3.24993mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin340"]}
            pcbX="3.899916mm"
            pcbY="3.24993mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin341"]}
            pcbX="3.24993mm"
            pcbY="3.24993mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin342"]}
            pcbX="2.599944mm"
            pcbY="3.24993mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin343"]}
            pcbX="1.949958mm"
            pcbY="3.24993mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin344"]}
            pcbX="1.299972mm"
            pcbY="3.24993mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin345"]}
            pcbX="0.649986mm"
            pcbY="3.24993mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin346"]}
            pcbX="0mm"
            pcbY="3.24993mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin347"]}
            pcbX="-0.649986mm"
            pcbY="3.24993mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin348"]}
            pcbX="-1.299972mm"
            pcbY="3.24993mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin349"]}
            pcbX="-1.949958mm"
            pcbY="3.24993mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin350"]}
            pcbX="-2.599944mm"
            pcbY="3.24993mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin351"]}
            pcbX="-3.24993mm"
            pcbY="3.24993mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin352"]}
            pcbX="-3.899916mm"
            pcbY="2.599944mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin353"]}
            pcbX="-4.549902mm"
            pcbY="2.599944mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin354"]}
            pcbX="-5.199888mm"
            pcbY="2.599944mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin355"]}
            pcbX="-5.849874mm"
            pcbY="2.599944mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin356"]}
            pcbX="-6.49986mm"
            pcbY="2.599944mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin357"]}
            pcbX="-7.1501mm"
            pcbY="3.24993mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin358"]}
            pcbX="-7.800086mm"
            pcbY="3.24993mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin359"]}
            pcbX="7.800086mm"
            pcbY="3.899916mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin360"]}
            pcbX="7.1501mm"
            pcbY="3.899916mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin361"]}
            pcbX="5.849874mm"
            pcbY="3.899916mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin362"]}
            pcbX="5.199888mm"
            pcbY="3.899916mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin363"]}
            pcbX="4.549902mm"
            pcbY="3.899916mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin364"]}
            pcbX="1.949958mm"
            pcbY="3.899916mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin365"]}
            pcbX="0.649986mm"
            pcbY="3.899916mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin366"]}
            pcbX="0mm"
            pcbY="3.899916mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin367"]}
            pcbX="-1.299972mm"
            pcbY="3.899916mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin368"]}
            pcbX="-1.949958mm"
            pcbY="3.899916mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin369"]}
            pcbX="-3.24993mm"
            pcbY="3.899916mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin370"]}
            pcbX="-4.549902mm"
            pcbY="3.899916mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin371"]}
            pcbX="-5.199888mm"
            pcbY="3.899916mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin372"]}
            pcbX="-5.849874mm"
            pcbY="3.899916mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin373"]}
            pcbX="-6.49986mm"
            pcbY="3.899916mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin374"]}
            pcbX="-7.1501mm"
            pcbY="3.899916mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin375"]}
            pcbX="-7.800086mm"
            pcbY="3.899916mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin376"]}
            pcbX="7.800086mm"
            pcbY="4.549902mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin377"]}
            pcbX="7.1501mm"
            pcbY="4.549902mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin378"]}
            pcbX="6.500114mm"
            pcbY="4.549902mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin379"]}
            pcbX="5.849874mm"
            pcbY="4.549902mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin380"]}
            pcbX="4.549902mm"
            pcbY="4.549902mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin381"]}
            pcbX="3.899916mm"
            pcbY="4.549902mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin382"]}
            pcbX="1.949958mm"
            pcbY="4.549902mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin383"]}
            pcbX="0.649986mm"
            pcbY="4.549902mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin384"]}
            pcbX="0mm"
            pcbY="4.549902mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin385"]}
            pcbX="-1.299972mm"
            pcbY="4.549902mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin386"]}
            pcbX="-1.949958mm"
            pcbY="4.549902mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin387"]}
            pcbX="-3.24993mm"
            pcbY="4.549902mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin388"]}
            pcbX="-3.899916mm"
            pcbY="4.549902mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin389"]}
            pcbX="-4.549902mm"
            pcbY="4.549902mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin390"]}
            pcbX="-5.849874mm"
            pcbY="4.549902mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin391"]}
            pcbX="-6.49986mm"
            pcbY="4.549902mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin392"]}
            pcbX="-7.1501mm"
            pcbY="4.549902mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin393"]}
            pcbX="-7.800086mm"
            pcbY="4.549902mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin394"]}
            pcbX="7.800086mm"
            pcbY="5.199888mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin395"]}
            pcbX="7.1501mm"
            pcbY="5.199888mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin396"]}
            pcbX="6.500114mm"
            pcbY="5.199888mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin397"]}
            pcbX="3.899916mm"
            pcbY="5.199888mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin398"]}
            pcbX="2.599944mm"
            pcbY="5.199888mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin399"]}
            pcbX="1.949958mm"
            pcbY="5.199888mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin400"]}
            pcbX="0.649986mm"
            pcbY="5.199888mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin401"]}
            pcbX="0mm"
            pcbY="5.199888mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin402"]}
            pcbX="-1.299972mm"
            pcbY="5.199888mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin403"]}
            pcbX="-1.949958mm"
            pcbY="5.199888mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin404"]}
            pcbX="-3.24993mm"
            pcbY="5.199888mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin405"]}
            pcbX="-3.899916mm"
            pcbY="5.199888mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin406"]}
            pcbX="-6.49986mm"
            pcbY="5.199888mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin407"]}
            pcbX="-7.1501mm"
            pcbY="5.199888mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin408"]}
            pcbX="-7.800086mm"
            pcbY="5.199888mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin409"]}
            pcbX="7.800086mm"
            pcbY="5.849874mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin410"]}
            pcbX="7.1501mm"
            pcbY="5.849874mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin411"]}
            pcbX="4.549902mm"
            pcbY="5.849874mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin412"]}
            pcbX="3.899916mm"
            pcbY="5.849874mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin413"]}
            pcbX="2.599944mm"
            pcbY="5.849874mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin414"]}
            pcbX="1.949958mm"
            pcbY="5.849874mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin415"]}
            pcbX="0.649986mm"
            pcbY="5.849874mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin416"]}
            pcbX="0mm"
            pcbY="5.849874mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin417"]}
            pcbX="-1.299972mm"
            pcbY="5.849874mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin418"]}
            pcbX="-1.949958mm"
            pcbY="5.849874mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin419"]}
            pcbX="-3.24993mm"
            pcbY="5.849874mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin420"]}
            pcbX="-3.899916mm"
            pcbY="5.849874mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin421"]}
            pcbX="-4.549902mm"
            pcbY="5.849874mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin422"]}
            pcbX="-7.1501mm"
            pcbY="5.849874mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin423"]}
            pcbX="-7.800086mm"
            pcbY="5.849874mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin424"]}
            pcbX="7.800086mm"
            pcbY="6.500114mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin425"]}
            pcbX="7.1501mm"
            pcbY="6.500114mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin426"]}
            pcbX="6.500114mm"
            pcbY="6.500114mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin427"]}
            pcbX="5.199888mm"
            pcbY="6.500114mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin428"]}
            pcbX="4.549902mm"
            pcbY="6.500114mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin429"]}
            pcbX="3.899916mm"
            pcbY="6.500114mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin430"]}
            pcbX="2.599944mm"
            pcbY="6.500114mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin431"]}
            pcbX="1.949958mm"
            pcbY="6.500114mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin432"]}
            pcbX="0.649986mm"
            pcbY="6.500114mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin433"]}
            pcbX="0mm"
            pcbY="6.500114mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin434"]}
            pcbX="-1.299972mm"
            pcbY="6.500114mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin435"]}
            pcbX="-1.949958mm"
            pcbY="6.500114mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin436"]}
            pcbX="-3.24993mm"
            pcbY="6.500114mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin437"]}
            pcbX="-4.549902mm"
            pcbY="6.500114mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin438"]}
            pcbX="-5.199888mm"
            pcbY="6.500114mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin439"]}
            pcbX="-6.49986mm"
            pcbY="6.500114mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin440"]}
            pcbX="-7.1501mm"
            pcbY="6.500114mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin441"]}
            pcbX="-7.800086mm"
            pcbY="6.500114mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin442"]}
            pcbX="7.800086mm"
            pcbY="7.1501mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin443"]}
            pcbX="7.1501mm"
            pcbY="7.1501mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin444"]}
            pcbX="6.500114mm"
            pcbY="7.1501mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin445"]}
            pcbX="5.849874mm"
            pcbY="7.1501mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin446"]}
            pcbX="5.199888mm"
            pcbY="7.1501mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin447"]}
            pcbX="4.549902mm"
            pcbY="7.1501mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin448"]}
            pcbX="3.899916mm"
            pcbY="7.1501mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin449"]}
            pcbX="3.24993mm"
            pcbY="7.1501mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin450"]}
            pcbX="2.599944mm"
            pcbY="7.1501mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin451"]}
            pcbX="1.949958mm"
            pcbY="7.1501mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin452"]}
            pcbX="1.299972mm"
            pcbY="7.1501mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin453"]}
            pcbX="0.649986mm"
            pcbY="7.1501mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin454"]}
            pcbX="0mm"
            pcbY="7.1501mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin455"]}
            pcbX="-0.649986mm"
            pcbY="7.1501mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin456"]}
            pcbX="-1.299972mm"
            pcbY="7.1501mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin457"]}
            pcbX="-1.949958mm"
            pcbY="7.1501mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin458"]}
            pcbX="-2.599944mm"
            pcbY="7.1501mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin459"]}
            pcbX="-3.24993mm"
            pcbY="7.1501mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin460"]}
            pcbX="-3.899916mm"
            pcbY="7.1501mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin461"]}
            pcbX="-4.549902mm"
            pcbY="7.1501mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin462"]}
            pcbX="-5.199888mm"
            pcbY="7.1501mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin463"]}
            pcbX="-5.849874mm"
            pcbY="7.1501mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin464"]}
            pcbX="-6.49986mm"
            pcbY="7.1501mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin465"]}
            pcbX="-7.1501mm"
            pcbY="7.1501mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin466"]}
            pcbX="-7.800086mm"
            pcbY="7.1501mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin467"]}
            pcbX="7.800086mm"
            pcbY="7.800086mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin468"]}
            pcbX="7.1501mm"
            pcbY="7.800086mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin469"]}
            pcbX="6.500114mm"
            pcbY="7.800086mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin470"]}
            pcbX="5.849874mm"
            pcbY="7.800086mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin471"]}
            pcbX="5.199888mm"
            pcbY="7.800086mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin472"]}
            pcbX="4.549902mm"
            pcbY="7.800086mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin473"]}
            pcbX="3.899916mm"
            pcbY="7.800086mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin474"]}
            pcbX="3.24993mm"
            pcbY="7.800086mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin475"]}
            pcbX="2.599944mm"
            pcbY="7.800086mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin476"]}
            pcbX="1.949958mm"
            pcbY="7.800086mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin477"]}
            pcbX="1.299972mm"
            pcbY="7.800086mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin478"]}
            pcbX="0.649986mm"
            pcbY="7.800086mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin479"]}
            pcbX="0mm"
            pcbY="7.800086mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin480"]}
            pcbX="-0.649986mm"
            pcbY="7.800086mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin481"]}
            pcbX="-1.299972mm"
            pcbY="7.800086mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin482"]}
            pcbX="-1.949958mm"
            pcbY="7.800086mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin483"]}
            pcbX="-2.599944mm"
            pcbY="7.800086mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin484"]}
            pcbX="-3.24993mm"
            pcbY="7.800086mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin485"]}
            pcbX="-3.899916mm"
            pcbY="7.800086mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin486"]}
            pcbX="-4.549902mm"
            pcbY="7.800086mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin487"]}
            pcbX="-5.199888mm"
            pcbY="7.800086mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin488"]}
            pcbX="-5.849874mm"
            pcbY="7.800086mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin489"]}
            pcbX="-6.49986mm"
            pcbY="7.800086mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin490"]}
            pcbX="-7.1501mm"
            pcbY="7.800086mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin491"]}
            pcbX="-7.800086mm"
            pcbY="7.800086mm"
            radius="0.1639951mm"
            shape="circle"
          />
          <silkscreenpath
            route={[
              { x: -8.576132200000004, y: -8.57613219999999 },
              { x: -8.576132200000004, y: 8.576233800000011 },
              { x: 8.576233799999997, y: 8.576233800000011 },
              { x: 8.576233799999997, y: -8.57613219999999 },
              { x: -8.576132200000004, y: -8.57613219999999 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 8.016239999999996, y: -8.80473219999999 },
              { x: 8.804833800000011, y: -8.80473219999999 },
              { x: 8.804833800000011, y: -8.016138400000003 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 9.12621999999999, y: -7.800085999999993 },
              { x: 9.124514996495847, y: -7.8130367873788344 },
              { x: 9.119516179154573, y: -7.8251049999999935 },
              { x: 9.11156420911702, y: -7.8354682091170105 },
              { x: 9.101201000000003, y: -7.843420179154563 },
              { x: 9.08913278737883, y: -7.8484189964958375 },
              { x: 9.076182000000003, y: -7.850123999999994 },
              { x: 9.063231212621147, y: -7.8484189964958375 },
              { x: 9.051162999999988, y: -7.843420179154563 },
              { x: 9.040799790882986, y: -7.8354682091170105 },
              { x: 9.032847820845419, y: -7.8251049999999935 },
              { x: 9.027849003504159, y: -7.8130367873788344 },
              { x: 9.026143999999988, y: -7.800085999999993 },
              { x: 9.027849003504159, y: -7.787135212621166 },
              { x: 9.032847820845419, y: -7.775067000000007 },
              { x: 9.040799790882986, y: -7.764703790882976 },
              { x: 9.051162999999988, y: -7.756751820845423 },
              { x: 9.063231212621147, y: -7.751753003504135 },
              { x: 9.076182000000003, y: -7.7500479999999925 },
              { x: 9.08913278737883, y: -7.751753003504135 },
              { x: 9.101201000000003, y: -7.756751820845423 },
              { x: 9.11156420911702, y: -7.764703790882976 },
              { x: 9.119516179154573, y: -7.775067000000007 },
              { x: 9.124514996495847, y: -7.787135212621166 },
              { x: 9.12621999999999, y: -7.800085999999993 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 8.632063000000002, y: -7.873949199999984 },
              { x: 8.623544040867344, y: -7.938657118867965 },
              { x: 8.598567716456031, y: -7.9989552999999916 },
              { x: 8.558836121999377, y: -8.05073452199936 },
              { x: 8.507056899999995, y: -8.090466116456014 },
              { x: 8.446758718867983, y: -8.11544244086734 },
              { x: 8.382050800000002, y: -8.123961399999985 },
              { x: 8.31734288113202, y: -8.11544244086734 },
              { x: 8.257044699999994, y: -8.090466116456014 },
              { x: 8.205265478000626, y: -8.05073452199936 },
              { x: 8.165533883543972, y: -7.9989552999999916 },
              { x: 8.140557559132645, y: -7.938657118867965 },
              { x: 8.132038600000001, y: -7.873949199999984 },
              { x: 8.140557559132645, y: -7.809241281132003 },
              { x: 8.165533883543972, y: -7.748943099999991 },
              { x: 8.205265478000626, y: -7.697163878000609 },
              { x: 8.257044699999994, y: -7.6574322835439546 },
              { x: 8.31734288113202, y: -7.632455959132642 },
              { x: 8.382050800000002, y: -7.623936999999984 },
              { x: 8.446758718867983, y: -7.632455959132642 },
              { x: 8.507056899999995, y: -7.6574322835439546 },
              { x: 8.558836121999377, y: -7.697163878000609 },
              { x: 8.598567716456031, y: -7.748943099999991 },
              { x: 8.623544040867344, y: -7.809241281132003 },
              { x: 8.632063000000002, y: -7.873949199999984 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="0.275082mm"
            pcbY="9.568182mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -8.826818000000003, y: 8.818182000000007 },
              { x: 9.376981999999998, y: 8.818182000000007 },
              { x: 9.376981999999998, y: -9.055417999999975 },
              { x: -8.826818000000003, y: -9.055417999999975 },
              { x: -8.826818000000003, y: 8.818182000000007 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C1522310.obj?uuid=31ff4bad0f934917b11ca31c0ffdb105",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C1522310.step?uuid=31ff4bad0f934917b11ca31c0ffdb105",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: -0.00005079999999679785,
          y: -0.00005079999999679785,
          z: -0.48,
        },
      }}
      {...props}
    />
  );
};

export default AM4379BZDNA100;
