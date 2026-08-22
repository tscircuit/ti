import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["NC", "A1", "NC_A1"],
  pin2: ["No", "A2"],
  pin3: ["sdrc_a0", "A4"],
  pin4: ["sdrc_dqs0", "A5"],
  pin5: ["sdrc_dm2", "A7"],
  pin6: ["sdrc_dqs2", "A8"],
  pin7: ["sdrc_clk", "A10"],
  pin8: ["sdrc_nclk", "A11"],
  pin9: ["sdrc_dqs1", "A13"],
  pin10: ["sdrc_d14", "A14"],
  pin11: ["sdrc_dm3", "A16"],
  pin12: ["sdrc_dqs3", "A17"],
  pin13: ["sdrc_ncs0", "A19"],
  pin14: ["sdrc_nwe", "A20"],
  pin15: ["cam_hs", "A22"],
  pin16: ["uart3_cts", "A23"],
  pin17: ["hdq_sio", "A24"],
  pin353: ["mmc2_dat7", "AA1"],
  pin354: ["mmc2", "AA2", "mmc2_AA2"],
  pin355: ["sys_clkout2", "AA6"],
  pin356: ["jtag_rtck", "AA7"],
  pin357: ["jtag_tms_tmsc", "AA9"],
  pin358: ["sys_nrespwron", "AA10"],
  pin359: ["vdds_sram", "AA12"],
  pin360: ["vdda_wkup_bg_bb", "AA13"],
  pin361: ["sys_boot6", "AA15"],
  pin362: ["sys_32k", "AA16"],
  pin363: ["mcbsp_clks", "AA18"],
  pin364: ["mcbsp1_fsx", "AA19"],
  pin365: ["cvideo2_out", "AA23"],
  pin366: ["mmc2", "AB2", "mmc2_AB2"],
  pin367: ["mmc2", "AB3", "mmc2_AB3"],
  pin368: ["mmc2_cmd", "AB5"],
  pin369: ["jtag_tck", "AB6"],
  pin370: ["jtag_ntrst", "AB7"],
  pin371: ["jtag_tdo", "AB9"],
  pin372: ["jtag_tdi", "AB10"],
  pin373: ["sys_boot0", "AB12"],
  pin374: ["vdda_dac", "AB13"],
  pin375: ["vssa_dac", "AB15"],
  pin376: ["sys_boot5", "AB16"],
  pin377: ["cam_d0", "AB18"],
  pin378: ["dss_data1", "AB19"],
  pin379: ["mcbsp1_fsr", "AB20"],
  pin380: ["dss_data12", "AB22"],
  pin381: ["cvideo1_vfb", "AB23"],
  pin382: ["cvideo1_out", "AB24"],
  pin383: ["etk_clk", "AC1"],
  pin384: ["uart1_cts", "AC2"],
  pin385: ["etk_d10", "AC3"],
  pin386: ["etk_d8", "AC4"],
  pin387: ["etk_d4", "AC5"],
  pin388: ["etk_d1", "AC6"],
  pin389: ["etk_d2", "AC7"],
  pin390: ["etk_d6", "AC8"],
  pin391: ["etk_d11", "AC9"],
  pin392: ["etk_d12", "AC10"],
  pin393: ["etk_d14", "AC11"],
  pin394: ["i2c3_sda", "AC12"],
  pin395: ["i2c3_scl", "AC13"],
  pin396: ["i2c2_sda", "AC14"],
  pin397: ["i2c2_scl", "AC15"],
  pin398: ["sys_boot1", "AC16"],
  pin399: ["sys_boot4", "AC17"],
  pin400: ["cam_d1", "AC18"],
  pin401: ["dss_data0", "AC19"],
  pin402: ["dss_data3", "AC20"],
  pin403: ["dss_data5", "AC21"],
  pin404: ["dss_data10", "AC22"],
  pin405: ["dss_data11", "AC23"],
  pin406: ["jtag_emu0", "AC24"],
  pin407: ["NC", "AD1", "NC_AD1"],
  pin408: ["etk_d5", "AD2"],
  pin409: ["etk_ctl", "AD3"],
  pin410: ["etk_d9", "AD5"],
  pin411: ["etk_d0", "AD6"],
  pin412: ["etk_d3", "AD8"],
  pin413: ["etk_d7", "AD9"],
  pin414: ["etk_d13", "AD11"],
  pin415: ["etk_d15", "AD12"],
  pin416: ["sys_xtalout", "AD14"],
  pin417: ["sys_xtalin", "AD15"],
  pin418: ["sys_boot2", "AD17"],
  pin419: ["sys_boot3", "AD18"],
  pin420: ["dss_data2", "AD20"],
  pin421: ["dss_data4", "AD21"],
  pin422: ["sys_off", "AD23"],
  pin423: ["jtag_emu1", "AD24"],
  pin18: ["NC", "B1", "NC_B1"],
  pin19: ["sdrc_a4", "B2"],
  pin20: ["sdrc_a3", "B3"],
  pin21: ["sdrc_a1", "B4"],
  pin22: ["sdrc_d3", "B5"],
  pin23: ["sdrc_dm0", "B6"],
  pin24: ["sdrc_d7", "B7"],
  pin25: ["sdrc_d18", "B8"],
  pin26: ["sdrc_d19", "B9"],
  pin27: ["sdrc_d21", "B10"],
  pin28: ["sdrc_d8", "B11"],
  pin29: ["sdrc_d10", "B12"],
  pin30: ["sdrc_dm1", "B13"],
  pin31: ["sdrc_d13", "B14"],
  pin32: ["sdrc_d15", "B15"],
  pin33: ["sdrc_d27", "B16"],
  pin34: ["sdrc_d30", "B17"],
  pin35: ["sdrc_d31", "B18"],
  pin36: ["sdrc_ncs1", "B19"],
  pin37: ["sdrc_cke0", "B20"],
  pin38: ["cam_d5", "B21"],
  pin39: ["cam", "B22", "cam_B22"],
  pin40: ["uart3_rts", "B23"],
  pin41: ["uart3_rx", "B24"],
  pin42: ["gpmc_wait0", "C1"],
  pin43: ["gpmc_wait3", "C2"],
  pin44: ["sdrc_a5", "C3"],
  pin45: ["sdrc_d1", "C5"],
  pin46: ["sdrc_d2", "C6"],
  pin47: ["sdrc_d6", "C7"],
  pin48: ["sdrc_d16", "C9"],
  pin49: ["sdrc_d20", "C10"],
  pin50: ["sdrc_d9", "C12"],
  pin51: ["sdrc_d12", "C13"],
  pin52: ["sdrc_d26", "C15"],
  pin53: ["sdrc_d28", "C16"],
  pin54: ["sdrc_ba0", "C18"],
  pin55: ["sdrc_ncas", "C19"],
  pin56: ["sdrc_cke1", "C20"],
  pin57: ["cam", "C22", "cam_C22"],
  pin58: ["uart3_tx", "C23"],
  pin59: ["gpmc_ncs3", "D2"],
  pin60: ["sdrc_a2", "D6"],
  pin61: ["sdrc_d0", "D7"],
  pin62: ["sdrc_d4", "D9"],
  pin63: ["sdrc_d5", "D10"],
  pin64: ["sdrc_d22", "D12"],
  pin65: ["sdrc_d11", "D13"],
  pin66: ["sdrc_d25", "D15"],
  pin67: ["sdrc_d29", "D16"],
  pin68: ["sdrc_ba1", "D18"],
  pin69: ["sdrc_nras", "D19"],
  pin70: ["dss_data20", "D23"],
  pin71: ["dss_data6", "D24"],
  pin72: ["gpmc_nwp", "E1"],
  pin73: ["gpmc_ncs0", "E2"],
  pin74: ["sdrc_a6", "E3"],
  pin75: ["sdrc_a10", "E7"],
  pin76: ["sdrc_a9", "E9"],
  pin77: ["sdrc_a8", "E10"],
  pin78: ["sdrc_d17", "E12"],
  pin79: ["sdrc_d23", "E13"],
  pin80: ["sdrc_d24", "E15"],
  pin81: ["vdds_mem", "E16", "vdds_mem_E16"],
  pin82: ["cam_vs", "E18"],
  pin83: ["dss_hsync", "E22"],
  pin84: ["dss_data7", "E23"],
  pin85: ["dss_data8", "E24"],
  pin86: ["gpmc_nadv_ale", "F1"],
  pin87: ["gpmc_noe", "F2"],
  pin88: ["gpmc_ncs6", "F3"],
  pin89: ["gpmc_ncs4", "F4"],
  pin90: ["sdrc_a7", "F6"],
  pin91: ["sdrc_a13", "F7"],
  pin92: ["sdrc_a14", "F9"],
  pin93: ["vdd_mpu_iva", "F10", "vdd_mpu_iva_F10"],
  pin94: ["vdd_core", "F12", "vdd_core_F12"],
  pin95: ["vdd_core", "F13", "vdd_core_F13"],
  pin96: ["vdds_mem", "F15", "vdds_mem_F15"],
  pin97: ["vdds_mem", "F16", "vdds_mem_F16"],
  pin98: ["cam_wen", "F18"],
  pin99: ["cam_d3", "F19"],
  pin100: ["cam_d10", "F21"],
  pin101: ["dss_vsync", "F22"],
  pin102: ["dss_data9", "F23"],
  pin103: ["gpmc_a10", "G2"],
  pin104: ["gpmc_nwe", "G3"],
  pin105: ["gpmc_ncs7", "G4"],
  pin106: ["gpmc_ncs5", "G5"],
  pin107: ["sdrc_a11", "G6"],
  pin108: ["sdrc_a12", "G7"],
  pin109: ["vdd_mpu_iva", "G9", "vdd_mpu_iva_G9"],
  pin110: ["vdd_mpu_iva", "G10", "vdd_mpu_iva_G10"],
  pin111: ["vdd_core", "G12", "vdd_core_G12"],
  pin112: ["vdd_core", "G13", "vdd_core_G13"],
  pin113: ["vdds_mem", "G15", "vdds_mem_G15"],
  pin114: ["J6", "G16", "J6_G16"],
  pin115: ["vdda_dplls_dll", "G18"],
  pin116: ["cam_d2", "G19"],
  pin117: ["cam_d4", "G20"],
  pin118: ["cam_d11", "G21"],
  pin119: ["dss_pclk", "G22"],
  pin120: ["dss_data17", "G23"],
  pin121: ["dss_data18", "G24"],
  pin122: ["gpmc_a8", "H1"],
  pin123: ["gpmc_a9", "H2"],
  pin124: ["vdds_x", "H8"],
  pin125: ["vdd_mpu_iva", "H9", "vdd_mpu_iva_H9"],
  pin126: ["vdd_mpu_iva", "H10", "vdd_mpu_iva_H10"],
  pin127: ["vss", "H11", "vss_H11"],
  pin128: ["vdd_core", "H12", "vdd_core_H12"],
  pin129: ["vdd_core", "H13", "vdd_core_H13"],
  pin130: ["vss", "H14", "vss_H14"],
  pin131: ["J6", "H15", "J6_H15"],
  pin132: ["vss", "H16", "vss_H16"],
  pin133: ["cap_vdd_sram_core", "H17"],
  pin134: ["dss_data19", "H23"],
  pin135: ["cam_fld", "H24"],
  pin136: ["gpmc_a7", "J1"],
  pin137: ["gpmc_a6", "J2"],
  pin138: ["gpmc_a5", "J3"],
  pin139: ["gpmc_a4", "J4"],
  pin140: ["vdds_mem", "J6", "vdds_mem_J6"],
  pin141: ["vdds_mem", "J7", "vdds_mem_J7"],
  pin142: ["vdds_mem", "J8", "vdds_mem_J8"],
  pin143: ["vdd_mpu_iva", "J9", "vdd_mpu_iva_J9"],
  pin144: ["vdd_mpu_iva", "J10", "vdd_mpu_iva_J10"],
  pin145: ["vss", "J11", "vss_J11"],
  pin146: ["J14", "J12", "J14_J12"],
  pin147: ["J14", "J13", "J14_J13"],
  pin148: ["vss", "J14", "vss_J14"],
  pin149: ["J14", "J15", "J14_J15"],
  pin150: ["J14", "J16", "J14_J16"],
  pin151: ["vdd_core", "J17", "vdd_core_J17"],
  pin152: ["vdd_core", "J18", "vdd_core_J18"],
  pin153: ["cam_pclk", "J19"],
  pin154: ["cam", "J20", "cam_J20"],
  pin155: ["dss_acbias", "J21"],
  pin156: ["dss_data16", "J22"],
  pin157: ["cam_d8", "J23"],
  pin158: ["gpmc_a3", "K2"],
  pin159: ["gpmc_a2", "K3"],
  pin160: ["gpmc_a1", "K4"],
  pin161: ["gpmc_nbe0_cle", "K5"],
  pin162: ["vdds_mem", "K6", "vdds_mem_K6"],
  pin163: ["vdds_mem", "K7", "vdds_mem_K7"],
  pin164: ["vdds_mem", "K8", "vdds_mem_K8"],
  pin165: ["J14", "K10", "J14_K10"],
  pin166: ["J14", "K11", "J14_K11"],
  pin167: ["L8", "K14", "L8_K14"],
  pin168: ["L8", "K15", "L8_K15"],
  pin169: ["vdd_core", "K17", "vdd_core_K17"],
  pin170: ["vdd_core", "K18", "vdd_core_K18"],
  pin171: ["vdd_core", "K19", "vdd_core_K19"],
  pin172: ["i2c1_scl", "K20"],
  pin173: ["i2c1_sda", "K21"],
  pin174: ["dss_data21", "K22"],
  pin175: ["cam_d9", "K23"],
  pin176: ["cam_d7", "K24"],
  pin177: ["gpmc_nbe1", "L1"],
  pin178: ["gpmc_d0", "L2"],
  pin179: ["vss", "L8", "vss_L8"],
  pin180: ["L8", "L10", "L8_L10"],
  pin181: ["M6", "L11", "M6_L11"],
  pin182: ["M6", "L12", "M6_L12"],
  pin183: ["L8", "L13", "L8_L13"],
  pin184: ["vdd_core", "L14", "vdd_core_L14"],
  pin185: ["vdd_core", "L15", "vdd_core_L15"],
  pin186: ["L8", "L17", "L8_L17"],
  pin187: ["mmc1_cmd", "L23"],
  pin188: ["cam_d6", "L24"],
  pin189: ["gpmc_d1", "M1"],
  pin190: ["gpmc_d2", "M2"],
  pin191: ["gpmc_d4", "M3"],
  pin192: ["mcspi2_cs1", "M4"],
  pin193: ["mcspi2_cs0", "M5"],
  pin194: ["vdd_mpu_iva", "M6", "vdd_mpu_iva_M6"],
  pin195: ["vdd_mpu_iva", "M7", "vdd_mpu_iva_M7"],
  pin196: ["vdd_mpu_iva", "M8", "vdd_mpu_iva_M8"],
  pin197: ["L8", "M9", "L8_M9"],
  pin198: ["L8", "M10", "L8_M10"],
  pin199: ["L8", "M11", "L8_M11"],
  pin200: ["vdd_mpu_iva", "M12", "vdd_mpu_iva_M12"],
  pin201: ["L8", "M13", "L8_M13"],
  pin202: ["vdd_core", "M14", "vdd_core_M14"],
  pin203: ["vdd_core", "M15", "vdd_core_M15"],
  pin204: ["L8", "M16", "L8_M16"],
  pin205: ["vdds", "M17", "vdds_M17"],
  pin206: ["vdds", "M18", "vdds_M18"],
  pin207: ["vdds", "M19", "vdds_M19"],
  pin208: ["mmc1_dat2", "M20"],
  pin209: ["mmc1_dat1", "M21"],
  pin210: ["mmc1_dat0", "M22"],
  pin211: ["mmc1_clk", "M23"],
  pin212: ["gpmc_d3", "N2"],
  pin213: ["mcspi2", "N3", "mcspi2_N3"],
  pin214: ["mcspi2", "N4", "mcspi2_N4"],
  pin215: ["mcspi2_clk", "N5"],
  pin216: ["vdd_mpu_iva", "N6", "vdd_mpu_iva_N6"],
  pin217: ["vdd_mpu_iva", "N7", "vdd_mpu_iva_N7"],
  pin218: ["vdd_mpu_iva", "N8", "vdd_mpu_iva_N8"],
  pin219: ["L8", "N9", "L8_N9"],
  pin220: ["L8", "N10", "L8_N10"],
  pin221: ["L8", "N11", "L8_N11"],
  pin222: ["L8", "N12", "L8_N12"],
  pin223: ["L8", "N13", "L8_N13"],
  pin224: ["L8", "N14", "L8_N14"],
  pin225: ["L8", "N15", "L8_N15"],
  pin226: ["L8", "N16", "L8_N16"],
  pin227: ["vdds", "N17", "vdds_N17"],
  pin228: ["vdds", "N18", "vdds_N18"],
  pin229: ["vdds", "N19", "vdds_N19"],
  pin230: ["cap_vddu_array", "N20"],
  pin231: ["cap_vdd_bb_mpu_iv", "N21"],
  pin232: ["gpio_126", "N22"],
  pin233: ["mmc1_dat3", "N23"],
  pin234: ["vdds_mmc1", "N24"],
  pin235: ["gpmc_d5", "P1"],
  pin236: ["gpmc_d6", "P2"],
  pin237: ["P11", "P8", "P11_P8"],
  pin238: ["P11", "P10", "P11_P10"],
  pin239: ["vss", "P11", "vss_P11"],
  pin240: ["P11", "P12", "P11_P12"],
  pin241: ["P11", "P13", "P11_P13"],
  pin242: ["P11", "P14", "P11_P14"],
  pin243: ["P11", "P15", "P11_P15"],
  pin244: ["P11", "P17", "P11_P17"],
  pin245: ["hsusb0_dir", "P23"],
  pin246: ["gpio_129", "P24"],
  pin247: ["gpmc_d7", "R1"],
  pin248: ["gpmc_d8", "R2"],
  pin249: ["gpmc_d11", "R3"],
  pin250: ["mcspi1", "R4", "mcspi1_R4"],
  pin251: ["mcspi1_cs3", "R5"],
  pin252: ["vdd_mpu_iva", "R6", "vdd_mpu_iva_R6"],
  pin253: ["vdd_mpu_iva", "R7", "vdd_mpu_iva_R7"],
  pin254: ["vdd_mpu_iva", "R8", "vdd_mpu_iva_R8"],
  pin255: ["P11", "R10", "P11_R10"],
  pin256: ["P11", "R11", "P11_R11"],
  pin257: ["P11", "R14", "P11_R14"],
  pin258: ["T10", "R15", "T10_R15"],
  pin259: ["vdd_core", "R17", "vdd_core_R17"],
  pin260: ["vdd_core", "R18", "vdd_core_R18"],
  pin261: ["vdd_core", "R19", "vdd_core_R19"],
  pin262: ["mcbsp2_dx", "R20"],
  pin263: ["hsusb0_clk", "R21"],
  pin264: ["hsusb0_nxt", "R22"],
  pin265: ["hsusb0_stp", "R23"],
  pin266: ["gpmc_d9", "T2"],
  pin267: ["gpmc_d12", "T3"],
  pin268: ["mcspi1", "T4", "mcspi1_T4"],
  pin269: ["mcspi1_clk", "T5"],
  pin270: ["mcspi1_cs0", "T6"],
  pin271: ["vdd_mpu_iva", "T7", "vdd_mpu_iva_T7"],
  pin272: ["vdd_mpu_iva", "T8", "vdd_mpu_iva_T8"],
  pin273: ["T10", "T9", "T10_T9"],
  pin274: ["vss", "T10", "vss_T10"],
  pin275: ["T10", "T11", "T10_T11"],
  pin276: ["T10", "T12", "T10_T12"],
  pin277: ["T10", "T13", "T10_T13"],
  pin278: ["T10", "T14", "T10_T14"],
  pin279: ["U9", "T15", "U9_T15"],
  pin280: ["U9", "T16", "U9_T16"],
  pin281: ["vdd_core", "T17", "vdd_core_T17"],
  pin282: ["vdd_core", "T18", "vdd_core_T18"],
  pin283: ["vdd_core", "T19", "vdd_core_T19"],
  pin284: ["vdd_core", "T20", "vdd_core_T20"],
  pin285: ["mcbsp2", "T21"],
  pin286: ["hsusb0", "T22", "hsusb0_T22"],
  pin287: ["hsusb0", "T23", "hsusb0_T23"],
  pin288: ["hsusb0", "T24", "hsusb0_T24"],
  pin289: ["gpmc_d10", "U1"],
  pin290: ["gpmc_d13", "U2"],
  pin291: ["cap_vdd_sram_mpu", "U8"],
  pin292: ["vss", "U9", "vss_U9"],
  pin293: ["vdds", "U10", "vdds_U10"],
  pin294: ["U9", "U11", "U9_U11"],
  pin295: ["vdd_mpu_iva", "U12", "vdd_mpu_iva_U12"],
  pin296: ["vdd_mpu_iva", "U13", "vdd_mpu_iva_U13"],
  pin297: ["U9", "U14", "U9_U14"],
  pin298: ["U9", "U15", "U9_U15"],
  pin299: ["U9", "U16", "U9_U16"],
  pin300: ["vdda_dpll_per", "U17"],
  pin301: ["hsusb0", "U23", "hsusb0_U23"],
  pin302: ["hsusb0", "U24", "hsusb0_U24"],
  pin303: ["gpmc_d14", "V1"],
  pin304: ["gpmc_d15", "V2"],
  pin305: ["mmc2", "V3", "mmc2_V3"],
  pin306: ["mcbsp3_fsx", "V4"],
  pin307: ["mcbsp3_dr", "V5"],
  pin308: ["mcbsp3_dx", "V6"],
  pin309: ["uart1_rx", "V7"],
  pin310: ["vdds", "V9", "vdds_V9"],
  pin311: ["vdds", "V10", "vdds_V10"],
  pin312: ["vdd_mpu_iva", "V12", "vdd_mpu_iva_V12"],
  pin313: ["vdd_mpu_iva", "V13", "vdd_mpu_iva_V13"],
  pin314: ["U9", "V15", "U9_V15"],
  pin315: ["U9", "V16", "U9_V16"],
  pin316: ["mcbsp1", "V18", "mcbsp1_V18"],
  pin317: ["mcbsp2_dr", "V19"],
  pin318: ["mcbsp2_fsx", "V20"],
  pin319: ["dss_data22", "V21"],
  pin320: ["dss_data15", "V22"],
  pin321: ["hsusb0", "V23", "hsusb0_V23"],
  pin322: ["gpmc_clk", "W2"],
  pin323: ["mmc2", "W3", "mmc2_W3"],
  pin324: ["mcbsp3", "W4"],
  pin325: ["uart1_rts", "W6"],
  pin326: ["uart1_tx", "W7"],
  pin327: ["vdds", "W9", "vdds_W9"],
  pin328: ["vdds", "W10", "vdds_W10"],
  pin329: ["vdd_mpu_iva", "W12", "vdd_mpu_iva_W12"],
  pin330: ["vdd_mpu_iva", "W13", "vdd_mpu_iva_W13"],
  pin331: ["sys_xtalgnd", "W15"],
  pin332: ["sys_nirq", "W16"],
  pin333: ["mcbsp1_dx", "W18"],
  pin334: ["mcbsp1", "W19", "mcbsp1_W19"],
  pin335: ["dss_data23", "W21"],
  pin336: ["dss_data14", "W22"],
  pin337: ["hsusb0", "W23", "hsusb0_W23"],
  pin338: ["hsusb0", "W24", "hsusb0_W24"],
  pin339: ["mmc2_clk", "Y1"],
  pin340: ["mmc2_dat6", "Y2"],
  pin341: ["mmc2", "Y3", "mmc2_Y3"],
  pin342: ["sys_clkout1", "Y7"],
  pin343: ["vdds", "Y9", "vdds_Y9"],
  pin344: ["sys_nreswarm", "Y10"],
  pin345: ["cap_vddu", "Y12"],
  pin346: ["sys_clkreq", "Y13"],
  pin347: ["i2c4_sda", "Y15"],
  pin348: ["i2c4_scl", "Y16"],
  pin349: ["mcbsp1_dr", "Y18"],
  pin350: ["dss_data13", "Y22"],
  pin351: ["cvideo2_vfb", "Y23"],
  pin352: ["cvideo1_rset", "Y24"],
} as const;

const pinRoles = {
  pin1: "no-connect",
  pin359: "power",
  pin360: "power",
  pin374: "power",
  pin375: "ground",
  pin407: "no-connect",
  pin18: "no-connect",
  pin81: "power",
  pin93: "power",
  pin94: "power",
  pin95: "power",
  pin96: "power",
  pin97: "power",
  pin109: "power",
  pin110: "power",
  pin111: "power",
  pin112: "power",
  pin113: "power",
  pin115: "power",
  pin124: "power",
  pin125: "power",
  pin126: "power",
  pin127: "ground",
  pin128: "power",
  pin129: "power",
  pin130: "ground",
  pin132: "ground",
  pin140: "power",
  pin141: "power",
  pin142: "power",
  pin143: "power",
  pin144: "power",
  pin145: "ground",
  pin148: "ground",
  pin151: "power",
  pin152: "power",
  pin162: "power",
  pin163: "power",
  pin164: "power",
  pin169: "power",
  pin170: "power",
  pin171: "power",
  pin179: "ground",
  pin184: "power",
  pin185: "power",
  pin194: "power",
  pin195: "power",
  pin196: "power",
  pin200: "power",
  pin202: "power",
  pin203: "power",
  pin205: "power",
  pin206: "power",
  pin207: "power",
  pin216: "power",
  pin217: "power",
  pin218: "power",
  pin227: "power",
  pin228: "power",
  pin229: "power",
  pin234: "power",
  pin239: "ground",
  pin252: "power",
  pin253: "power",
  pin254: "power",
  pin259: "power",
  pin260: "power",
  pin261: "power",
  pin271: "power",
  pin272: "power",
  pin274: "ground",
  pin281: "power",
  pin282: "power",
  pin283: "power",
  pin284: "power",
  pin292: "ground",
  pin293: "power",
  pin295: "power",
  pin296: "power",
  pin300: "power",
  pin310: "power",
  pin311: "power",
  pin312: "power",
  pin313: "power",
  pin327: "power",
  pin328: "power",
  pin329: "power",
  pin330: "power",
  pin331: "ground",
  pin343: "power",
} as const;

const pinAttributes = {
  pin1: {
    doNotConnect: true,
  },
  pin359: {
    requiresPower: true,
  },
  pin360: {
    requiresPower: true,
  },
  pin374: {
    requiresPower: true,
  },
  pin375: {
    requiresGround: true,
  },
  pin407: {
    doNotConnect: true,
  },
  pin18: {
    doNotConnect: true,
  },
  pin81: {
    requiresPower: true,
  },
  pin93: {
    requiresPower: true,
  },
  pin94: {
    requiresPower: true,
  },
  pin95: {
    requiresPower: true,
  },
  pin96: {
    requiresPower: true,
  },
  pin97: {
    requiresPower: true,
  },
  pin109: {
    requiresPower: true,
  },
  pin110: {
    requiresPower: true,
  },
  pin111: {
    requiresPower: true,
  },
  pin112: {
    requiresPower: true,
  },
  pin113: {
    requiresPower: true,
  },
  pin115: {
    requiresPower: true,
  },
  pin124: {
    requiresPower: true,
  },
  pin125: {
    requiresPower: true,
  },
  pin126: {
    requiresPower: true,
  },
  pin127: {
    requiresGround: true,
  },
  pin128: {
    requiresPower: true,
  },
  pin129: {
    requiresPower: true,
  },
  pin130: {
    requiresGround: true,
  },
  pin132: {
    requiresGround: true,
  },
  pin140: {
    requiresPower: true,
  },
  pin141: {
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
  pin148: {
    requiresGround: true,
  },
  pin151: {
    requiresPower: true,
  },
  pin152: {
    requiresPower: true,
  },
  pin162: {
    requiresPower: true,
  },
  pin163: {
    requiresPower: true,
  },
  pin164: {
    requiresPower: true,
  },
  pin169: {
    requiresPower: true,
  },
  pin170: {
    requiresPower: true,
  },
  pin171: {
    requiresPower: true,
  },
  pin179: {
    requiresGround: true,
  },
  pin184: {
    requiresPower: true,
  },
  pin185: {
    requiresPower: true,
  },
  pin194: {
    requiresPower: true,
  },
  pin195: {
    requiresPower: true,
  },
  pin196: {
    requiresPower: true,
  },
  pin200: {
    requiresPower: true,
  },
  pin202: {
    requiresPower: true,
  },
  pin203: {
    requiresPower: true,
  },
  pin205: {
    requiresPower: true,
  },
  pin206: {
    requiresPower: true,
  },
  pin207: {
    requiresPower: true,
  },
  pin216: {
    requiresPower: true,
  },
  pin217: {
    requiresPower: true,
  },
  pin218: {
    requiresPower: true,
  },
  pin227: {
    requiresPower: true,
  },
  pin228: {
    requiresPower: true,
  },
  pin229: {
    requiresPower: true,
  },
  pin234: {
    requiresPower: true,
  },
  pin239: {
    requiresGround: true,
  },
  pin252: {
    requiresPower: true,
  },
  pin253: {
    requiresPower: true,
  },
  pin254: {
    requiresPower: true,
  },
  pin259: {
    requiresPower: true,
  },
  pin260: {
    requiresPower: true,
  },
  pin261: {
    requiresPower: true,
  },
  pin271: {
    requiresPower: true,
  },
  pin272: {
    requiresPower: true,
  },
  pin274: {
    requiresGround: true,
  },
  pin281: {
    requiresPower: true,
  },
  pin282: {
    requiresPower: true,
  },
  pin283: {
    requiresPower: true,
  },
  pin284: {
    requiresPower: true,
  },
  pin292: {
    requiresGround: true,
  },
  pin293: {
    requiresPower: true,
  },
  pin295: {
    requiresPower: true,
  },
  pin296: {
    requiresPower: true,
  },
  pin300: {
    requiresPower: true,
  },
  pin310: {
    requiresPower: true,
  },
  pin311: {
    requiresPower: true,
  },
  pin312: {
    requiresPower: true,
  },
  pin313: {
    requiresPower: true,
  },
  pin327: {
    requiresPower: true,
  },
  pin328: {
    requiresPower: true,
  },
  pin329: {
    requiresPower: true,
  },
  pin330: {
    requiresPower: true,
  },
  pin331: {
    requiresGround: true,
  },
  pin343: {
    requiresPower: true,
  },
} as const;

export const DM3730CUSD100 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2860216"],
      }}
      manufacturerPartNumber="DM3730CUSD100"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-7.474966mm"
            pcbY="7.474966mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-6.82498mm"
            pcbY="7.474966mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-5.525008mm"
            pcbY="7.474966mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-4.875022mm"
            pcbY="7.474966mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-3.57505mm"
            pcbY="7.474966mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-2.925064mm"
            pcbY="7.474966mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-1.625092mm"
            pcbY="7.474966mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-0.975106mm"
            pcbY="7.474966mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="0.32512mm"
            pcbY="7.474966mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="0.975106mm"
            pcbY="7.474966mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="2.275078mm"
            pcbY="7.474966mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="2.925064mm"
            pcbY="7.474966mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="4.225036mm"
            pcbY="7.474966mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="4.875022mm"
            pcbY="7.474966mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="6.174994mm"
            pcbY="7.474966mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="6.82498mm"
            pcbY="7.474966mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="7.474966mm"
            pcbY="7.474966mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="-7.474966mm"
            pcbY="6.82498mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin19"]}
            pcbX="-6.82498mm"
            pcbY="6.82498mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin20"]}
            pcbX="-6.174994mm"
            pcbY="6.82498mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin21"]}
            pcbX="-5.525008mm"
            pcbY="6.82498mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin22"]}
            pcbX="-4.875022mm"
            pcbY="6.82498mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin23"]}
            pcbX="-4.225036mm"
            pcbY="6.82498mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin24"]}
            pcbX="-3.57505mm"
            pcbY="6.82498mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin25"]}
            pcbX="-2.925064mm"
            pcbY="6.82498mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin26"]}
            pcbX="-2.275078mm"
            pcbY="6.82498mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin27"]}
            pcbX="-1.625092mm"
            pcbY="6.82498mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin28"]}
            pcbX="-0.975106mm"
            pcbY="6.82498mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin29"]}
            pcbX="-0.32512mm"
            pcbY="6.82498mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin30"]}
            pcbX="0.32512mm"
            pcbY="6.82498mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin31"]}
            pcbX="0.975106mm"
            pcbY="6.82498mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin32"]}
            pcbX="1.625092mm"
            pcbY="6.82498mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin33"]}
            pcbX="2.275078mm"
            pcbY="6.82498mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin34"]}
            pcbX="2.925064mm"
            pcbY="6.82498mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin35"]}
            pcbX="3.57505mm"
            pcbY="6.82498mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin36"]}
            pcbX="4.225036mm"
            pcbY="6.82498mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin37"]}
            pcbX="4.875022mm"
            pcbY="6.82498mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin38"]}
            pcbX="5.525008mm"
            pcbY="6.82498mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin39"]}
            pcbX="6.174994mm"
            pcbY="6.82498mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin40"]}
            pcbX="6.82498mm"
            pcbY="6.82498mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin41"]}
            pcbX="7.474966mm"
            pcbY="6.82498mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin42"]}
            pcbX="-7.474966mm"
            pcbY="6.174994mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin43"]}
            pcbX="-6.82498mm"
            pcbY="6.174994mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin44"]}
            pcbX="-6.174994mm"
            pcbY="6.174994mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin45"]}
            pcbX="-4.875022mm"
            pcbY="6.174994mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin46"]}
            pcbX="-4.225036mm"
            pcbY="6.174994mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin47"]}
            pcbX="-3.57505mm"
            pcbY="6.174994mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin48"]}
            pcbX="-2.275078mm"
            pcbY="6.174994mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin49"]}
            pcbX="-1.625092mm"
            pcbY="6.174994mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin50"]}
            pcbX="-0.32512mm"
            pcbY="6.174994mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin51"]}
            pcbX="0.32512mm"
            pcbY="6.174994mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin52"]}
            pcbX="1.625092mm"
            pcbY="6.174994mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin53"]}
            pcbX="2.275078mm"
            pcbY="6.174994mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin54"]}
            pcbX="3.57505mm"
            pcbY="6.174994mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin55"]}
            pcbX="4.225036mm"
            pcbY="6.174994mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin56"]}
            pcbX="4.875022mm"
            pcbY="6.174994mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin57"]}
            pcbX="6.174994mm"
            pcbY="6.174994mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin58"]}
            pcbX="6.82498mm"
            pcbY="6.174994mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin59"]}
            pcbX="-6.82498mm"
            pcbY="5.525008mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin60"]}
            pcbX="-4.225036mm"
            pcbY="5.525008mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin61"]}
            pcbX="-3.57505mm"
            pcbY="5.525008mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin62"]}
            pcbX="-2.275078mm"
            pcbY="5.525008mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin63"]}
            pcbX="-1.625092mm"
            pcbY="5.525008mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin64"]}
            pcbX="-0.32512mm"
            pcbY="5.525008mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin65"]}
            pcbX="0.32512mm"
            pcbY="5.525008mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin66"]}
            pcbX="1.625092mm"
            pcbY="5.525008mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin67"]}
            pcbX="2.275078mm"
            pcbY="5.525008mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin68"]}
            pcbX="3.57505mm"
            pcbY="5.525008mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin69"]}
            pcbX="4.225036mm"
            pcbY="5.525008mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin70"]}
            pcbX="6.82498mm"
            pcbY="5.525008mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin71"]}
            pcbX="7.474966mm"
            pcbY="5.525008mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin72"]}
            pcbX="-7.474966mm"
            pcbY="4.875022mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin73"]}
            pcbX="-6.82498mm"
            pcbY="4.875022mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin74"]}
            pcbX="-6.174994mm"
            pcbY="4.875022mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin75"]}
            pcbX="-3.57505mm"
            pcbY="4.875022mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin76"]}
            pcbX="-2.275078mm"
            pcbY="4.875022mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin77"]}
            pcbX="-1.625092mm"
            pcbY="4.875022mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin78"]}
            pcbX="-0.32512mm"
            pcbY="4.875022mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin79"]}
            pcbX="0.32512mm"
            pcbY="4.875022mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin80"]}
            pcbX="1.625092mm"
            pcbY="4.875022mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin81"]}
            pcbX="2.275078mm"
            pcbY="4.875022mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin82"]}
            pcbX="3.57505mm"
            pcbY="4.875022mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin83"]}
            pcbX="6.174994mm"
            pcbY="4.875022mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin84"]}
            pcbX="6.82498mm"
            pcbY="4.875022mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin85"]}
            pcbX="7.474966mm"
            pcbY="4.875022mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin86"]}
            pcbX="-7.474966mm"
            pcbY="4.225036mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin87"]}
            pcbX="-6.82498mm"
            pcbY="4.225036mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin88"]}
            pcbX="-6.174994mm"
            pcbY="4.225036mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin89"]}
            pcbX="-5.525008mm"
            pcbY="4.225036mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin90"]}
            pcbX="-4.225036mm"
            pcbY="4.225036mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin91"]}
            pcbX="-3.57505mm"
            pcbY="4.225036mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin92"]}
            pcbX="-2.275078mm"
            pcbY="4.225036mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin93"]}
            pcbX="-1.625092mm"
            pcbY="4.225036mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin94"]}
            pcbX="-0.32512mm"
            pcbY="4.225036mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin95"]}
            pcbX="0.32512mm"
            pcbY="4.225036mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin96"]}
            pcbX="1.625092mm"
            pcbY="4.225036mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin97"]}
            pcbX="2.275078mm"
            pcbY="4.225036mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin98"]}
            pcbX="3.57505mm"
            pcbY="4.225036mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin99"]}
            pcbX="4.225036mm"
            pcbY="4.225036mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin100"]}
            pcbX="5.525008mm"
            pcbY="4.225036mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin101"]}
            pcbX="6.174994mm"
            pcbY="4.225036mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin102"]}
            pcbX="6.82498mm"
            pcbY="4.225036mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin103"]}
            pcbX="-6.82498mm"
            pcbY="3.57505mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin104"]}
            pcbX="-6.174994mm"
            pcbY="3.57505mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin105"]}
            pcbX="-5.525008mm"
            pcbY="3.57505mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin106"]}
            pcbX="-4.875022mm"
            pcbY="3.57505mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin107"]}
            pcbX="-4.225036mm"
            pcbY="3.57505mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin108"]}
            pcbX="-3.57505mm"
            pcbY="3.57505mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin109"]}
            pcbX="-2.275078mm"
            pcbY="3.57505mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin110"]}
            pcbX="-1.625092mm"
            pcbY="3.57505mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin111"]}
            pcbX="-0.32512mm"
            pcbY="3.57505mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin112"]}
            pcbX="0.32512mm"
            pcbY="3.57505mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin113"]}
            pcbX="1.625092mm"
            pcbY="3.57505mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin114"]}
            pcbX="2.275078mm"
            pcbY="3.57505mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin115"]}
            pcbX="3.57505mm"
            pcbY="3.57505mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin116"]}
            pcbX="4.225036mm"
            pcbY="3.57505mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin117"]}
            pcbX="4.875022mm"
            pcbY="3.57505mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin118"]}
            pcbX="5.525008mm"
            pcbY="3.57505mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin119"]}
            pcbX="6.174994mm"
            pcbY="3.57505mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin120"]}
            pcbX="6.82498mm"
            pcbY="3.57505mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin121"]}
            pcbX="7.474966mm"
            pcbY="3.57505mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin122"]}
            pcbX="-7.474966mm"
            pcbY="2.925064mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin123"]}
            pcbX="-6.82498mm"
            pcbY="2.925064mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin124"]}
            pcbX="-2.925064mm"
            pcbY="2.925064mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin125"]}
            pcbX="-2.275078mm"
            pcbY="2.925064mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin126"]}
            pcbX="-1.625092mm"
            pcbY="2.925064mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin127"]}
            pcbX="-0.975106mm"
            pcbY="2.925064mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin128"]}
            pcbX="-0.32512mm"
            pcbY="2.925064mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin129"]}
            pcbX="0.32512mm"
            pcbY="2.925064mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin130"]}
            pcbX="0.975106mm"
            pcbY="2.925064mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin131"]}
            pcbX="1.625092mm"
            pcbY="2.925064mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin132"]}
            pcbX="2.275078mm"
            pcbY="2.925064mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin133"]}
            pcbX="2.925064mm"
            pcbY="2.925064mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin134"]}
            pcbX="6.82498mm"
            pcbY="2.925064mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin135"]}
            pcbX="7.474966mm"
            pcbY="2.925064mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin136"]}
            pcbX="-7.474966mm"
            pcbY="2.275078mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin137"]}
            pcbX="-6.82498mm"
            pcbY="2.275078mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin138"]}
            pcbX="-6.174994mm"
            pcbY="2.275078mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin139"]}
            pcbX="-5.525008mm"
            pcbY="2.275078mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin140"]}
            pcbX="-4.225036mm"
            pcbY="2.275078mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin141"]}
            pcbX="-3.57505mm"
            pcbY="2.275078mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin142"]}
            pcbX="-2.925064mm"
            pcbY="2.275078mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin143"]}
            pcbX="-2.275078mm"
            pcbY="2.275078mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin144"]}
            pcbX="-1.625092mm"
            pcbY="2.275078mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin145"]}
            pcbX="-0.975106mm"
            pcbY="2.275078mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin146"]}
            pcbX="-0.32512mm"
            pcbY="2.275078mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin147"]}
            pcbX="0.32512mm"
            pcbY="2.275078mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin148"]}
            pcbX="0.975106mm"
            pcbY="2.275078mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin149"]}
            pcbX="1.625092mm"
            pcbY="2.275078mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin150"]}
            pcbX="2.275078mm"
            pcbY="2.275078mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin151"]}
            pcbX="2.925064mm"
            pcbY="2.275078mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin152"]}
            pcbX="3.57505mm"
            pcbY="2.275078mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin153"]}
            pcbX="4.225036mm"
            pcbY="2.275078mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin154"]}
            pcbX="4.875022mm"
            pcbY="2.275078mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin155"]}
            pcbX="5.525008mm"
            pcbY="2.275078mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin156"]}
            pcbX="6.174994mm"
            pcbY="2.275078mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin157"]}
            pcbX="6.82498mm"
            pcbY="2.275078mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin158"]}
            pcbX="-6.82498mm"
            pcbY="1.625092mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin159"]}
            pcbX="-6.174994mm"
            pcbY="1.625092mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin160"]}
            pcbX="-5.525008mm"
            pcbY="1.625092mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin161"]}
            pcbX="-4.875022mm"
            pcbY="1.625092mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin162"]}
            pcbX="-4.225036mm"
            pcbY="1.625092mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin163"]}
            pcbX="-3.57505mm"
            pcbY="1.625092mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin164"]}
            pcbX="-2.925064mm"
            pcbY="1.625092mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin165"]}
            pcbX="-1.625092mm"
            pcbY="1.625092mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin166"]}
            pcbX="-0.975106mm"
            pcbY="1.625092mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin167"]}
            pcbX="0.975106mm"
            pcbY="1.625092mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin168"]}
            pcbX="1.625092mm"
            pcbY="1.625092mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin169"]}
            pcbX="2.925064mm"
            pcbY="1.625092mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin170"]}
            pcbX="3.57505mm"
            pcbY="1.625092mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin171"]}
            pcbX="4.225036mm"
            pcbY="1.625092mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin172"]}
            pcbX="4.875022mm"
            pcbY="1.625092mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin173"]}
            pcbX="5.525008mm"
            pcbY="1.625092mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin174"]}
            pcbX="6.174994mm"
            pcbY="1.625092mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin175"]}
            pcbX="6.82498mm"
            pcbY="1.625092mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin176"]}
            pcbX="7.474966mm"
            pcbY="1.625092mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin177"]}
            pcbX="-7.474966mm"
            pcbY="0.975106mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin178"]}
            pcbX="-6.82498mm"
            pcbY="0.975106mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin179"]}
            pcbX="-2.925064mm"
            pcbY="0.975106mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin180"]}
            pcbX="-1.625092mm"
            pcbY="0.975106mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin181"]}
            pcbX="-0.975106mm"
            pcbY="0.975106mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin182"]}
            pcbX="-0.32512mm"
            pcbY="0.975106mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin183"]}
            pcbX="0.32512mm"
            pcbY="0.975106mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin184"]}
            pcbX="0.975106mm"
            pcbY="0.975106mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin185"]}
            pcbX="1.625092mm"
            pcbY="0.975106mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin186"]}
            pcbX="2.925064mm"
            pcbY="0.975106mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin187"]}
            pcbX="6.82498mm"
            pcbY="0.975106mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin188"]}
            pcbX="7.474966mm"
            pcbY="0.975106mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin189"]}
            pcbX="-7.474966mm"
            pcbY="0.32512mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin190"]}
            pcbX="-6.82498mm"
            pcbY="0.32512mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin191"]}
            pcbX="-6.174994mm"
            pcbY="0.32512mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin192"]}
            pcbX="-5.525008mm"
            pcbY="0.32512mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin193"]}
            pcbX="-4.875022mm"
            pcbY="0.32512mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin194"]}
            pcbX="-4.225036mm"
            pcbY="0.32512mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin195"]}
            pcbX="-3.57505mm"
            pcbY="0.32512mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin196"]}
            pcbX="-2.925064mm"
            pcbY="0.32512mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin197"]}
            pcbX="-2.275078mm"
            pcbY="0.32512mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin198"]}
            pcbX="-1.625092mm"
            pcbY="0.32512mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin199"]}
            pcbX="-0.975106mm"
            pcbY="0.32512mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin200"]}
            pcbX="-0.32512mm"
            pcbY="0.32512mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin201"]}
            pcbX="0.32512mm"
            pcbY="0.32512mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin202"]}
            pcbX="0.975106mm"
            pcbY="0.32512mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin203"]}
            pcbX="1.625092mm"
            pcbY="0.32512mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin204"]}
            pcbX="2.275078mm"
            pcbY="0.32512mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin205"]}
            pcbX="2.925064mm"
            pcbY="0.32512mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin206"]}
            pcbX="3.57505mm"
            pcbY="0.32512mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin207"]}
            pcbX="4.225036mm"
            pcbY="0.32512mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin208"]}
            pcbX="4.875022mm"
            pcbY="0.32512mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin209"]}
            pcbX="5.525008mm"
            pcbY="0.32512mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin210"]}
            pcbX="6.174994mm"
            pcbY="0.32512mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin211"]}
            pcbX="6.82498mm"
            pcbY="0.32512mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin212"]}
            pcbX="-6.82498mm"
            pcbY="-0.32512mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin213"]}
            pcbX="-6.174994mm"
            pcbY="-0.32512mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin214"]}
            pcbX="-5.525008mm"
            pcbY="-0.32512mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin215"]}
            pcbX="-4.875022mm"
            pcbY="-0.32512mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin216"]}
            pcbX="-4.225036mm"
            pcbY="-0.32512mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin217"]}
            pcbX="-3.57505mm"
            pcbY="-0.32512mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin218"]}
            pcbX="-2.925064mm"
            pcbY="-0.32512mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin219"]}
            pcbX="-2.275078mm"
            pcbY="-0.32512mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin220"]}
            pcbX="-1.625092mm"
            pcbY="-0.32512mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin221"]}
            pcbX="-0.975106mm"
            pcbY="-0.32512mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin222"]}
            pcbX="-0.32512mm"
            pcbY="-0.32512mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin223"]}
            pcbX="0.32512mm"
            pcbY="-0.32512mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin224"]}
            pcbX="0.975106mm"
            pcbY="-0.32512mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin225"]}
            pcbX="1.625092mm"
            pcbY="-0.32512mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin226"]}
            pcbX="2.275078mm"
            pcbY="-0.32512mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin227"]}
            pcbX="2.925064mm"
            pcbY="-0.32512mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin228"]}
            pcbX="3.57505mm"
            pcbY="-0.32512mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin229"]}
            pcbX="4.225036mm"
            pcbY="-0.32512mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin230"]}
            pcbX="4.875022mm"
            pcbY="-0.32512mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin231"]}
            pcbX="5.525008mm"
            pcbY="-0.32512mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin232"]}
            pcbX="6.174994mm"
            pcbY="-0.32512mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin233"]}
            pcbX="6.82498mm"
            pcbY="-0.32512mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin234"]}
            pcbX="7.474966mm"
            pcbY="-0.32512mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin235"]}
            pcbX="-7.474966mm"
            pcbY="-0.975106mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin236"]}
            pcbX="-6.82498mm"
            pcbY="-0.975106mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin237"]}
            pcbX="-2.925064mm"
            pcbY="-0.975106mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin238"]}
            pcbX="-1.625092mm"
            pcbY="-0.975106mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin239"]}
            pcbX="-0.975106mm"
            pcbY="-0.975106mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin240"]}
            pcbX="-0.32512mm"
            pcbY="-0.975106mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin241"]}
            pcbX="0.32512mm"
            pcbY="-0.975106mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin242"]}
            pcbX="0.975106mm"
            pcbY="-0.975106mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin243"]}
            pcbX="1.625092mm"
            pcbY="-0.975106mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin244"]}
            pcbX="2.925064mm"
            pcbY="-0.975106mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin245"]}
            pcbX="6.82498mm"
            pcbY="-0.975106mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin246"]}
            pcbX="7.474966mm"
            pcbY="-0.975106mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin247"]}
            pcbX="-7.474966mm"
            pcbY="-1.625092mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin248"]}
            pcbX="-6.82498mm"
            pcbY="-1.625092mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin249"]}
            pcbX="-6.174994mm"
            pcbY="-1.625092mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin250"]}
            pcbX="-5.525008mm"
            pcbY="-1.625092mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin251"]}
            pcbX="-4.875022mm"
            pcbY="-1.625092mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin252"]}
            pcbX="-4.225036mm"
            pcbY="-1.625092mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin253"]}
            pcbX="-3.57505mm"
            pcbY="-1.625092mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin254"]}
            pcbX="-2.925064mm"
            pcbY="-1.625092mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin255"]}
            pcbX="-1.625092mm"
            pcbY="-1.625092mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin256"]}
            pcbX="-0.975106mm"
            pcbY="-1.625092mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin257"]}
            pcbX="0.975106mm"
            pcbY="-1.625092mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin258"]}
            pcbX="1.625092mm"
            pcbY="-1.625092mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin259"]}
            pcbX="2.925064mm"
            pcbY="-1.625092mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin260"]}
            pcbX="3.57505mm"
            pcbY="-1.625092mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin261"]}
            pcbX="4.225036mm"
            pcbY="-1.625092mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin262"]}
            pcbX="4.875022mm"
            pcbY="-1.625092mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin263"]}
            pcbX="5.525008mm"
            pcbY="-1.625092mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin264"]}
            pcbX="6.174994mm"
            pcbY="-1.625092mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin265"]}
            pcbX="6.82498mm"
            pcbY="-1.625092mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin266"]}
            pcbX="-6.82498mm"
            pcbY="-2.275078mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin267"]}
            pcbX="-6.174994mm"
            pcbY="-2.275078mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin268"]}
            pcbX="-5.525008mm"
            pcbY="-2.275078mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin269"]}
            pcbX="-4.875022mm"
            pcbY="-2.275078mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin270"]}
            pcbX="-4.225036mm"
            pcbY="-2.275078mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin271"]}
            pcbX="-3.57505mm"
            pcbY="-2.275078mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin272"]}
            pcbX="-2.925064mm"
            pcbY="-2.275078mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin273"]}
            pcbX="-2.275078mm"
            pcbY="-2.275078mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin274"]}
            pcbX="-1.625092mm"
            pcbY="-2.275078mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin275"]}
            pcbX="-0.975106mm"
            pcbY="-2.275078mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin276"]}
            pcbX="-0.32512mm"
            pcbY="-2.275078mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin277"]}
            pcbX="0.32512mm"
            pcbY="-2.275078mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin278"]}
            pcbX="0.975106mm"
            pcbY="-2.275078mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin279"]}
            pcbX="1.625092mm"
            pcbY="-2.275078mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin280"]}
            pcbX="2.275078mm"
            pcbY="-2.275078mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin281"]}
            pcbX="2.925064mm"
            pcbY="-2.275078mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin282"]}
            pcbX="3.57505mm"
            pcbY="-2.275078mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin283"]}
            pcbX="4.225036mm"
            pcbY="-2.275078mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin284"]}
            pcbX="4.875022mm"
            pcbY="-2.275078mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin285"]}
            pcbX="5.525008mm"
            pcbY="-2.275078mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin286"]}
            pcbX="6.174994mm"
            pcbY="-2.275078mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin287"]}
            pcbX="6.82498mm"
            pcbY="-2.275078mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin288"]}
            pcbX="7.474966mm"
            pcbY="-2.275078mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin289"]}
            pcbX="-7.474966mm"
            pcbY="-2.925064mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin290"]}
            pcbX="-6.82498mm"
            pcbY="-2.925064mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin291"]}
            pcbX="-2.925064mm"
            pcbY="-2.925064mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin292"]}
            pcbX="-2.275078mm"
            pcbY="-2.925064mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin293"]}
            pcbX="-1.625092mm"
            pcbY="-2.925064mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin294"]}
            pcbX="-0.975106mm"
            pcbY="-2.925064mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin295"]}
            pcbX="-0.32512mm"
            pcbY="-2.925064mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin296"]}
            pcbX="0.32512mm"
            pcbY="-2.925064mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin297"]}
            pcbX="0.975106mm"
            pcbY="-2.925064mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin298"]}
            pcbX="1.625092mm"
            pcbY="-2.925064mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin299"]}
            pcbX="2.275078mm"
            pcbY="-2.925064mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin300"]}
            pcbX="2.925064mm"
            pcbY="-2.925064mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin301"]}
            pcbX="6.82498mm"
            pcbY="-2.925064mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin302"]}
            pcbX="7.474966mm"
            pcbY="-2.925064mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin303"]}
            pcbX="-7.474966mm"
            pcbY="-3.57505mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin304"]}
            pcbX="-6.82498mm"
            pcbY="-3.57505mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin305"]}
            pcbX="-6.174994mm"
            pcbY="-3.57505mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin306"]}
            pcbX="-5.525008mm"
            pcbY="-3.57505mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin307"]}
            pcbX="-4.875022mm"
            pcbY="-3.57505mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin308"]}
            pcbX="-4.225036mm"
            pcbY="-3.57505mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin309"]}
            pcbX="-3.57505mm"
            pcbY="-3.57505mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin310"]}
            pcbX="-2.275078mm"
            pcbY="-3.57505mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin311"]}
            pcbX="-1.625092mm"
            pcbY="-3.57505mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin312"]}
            pcbX="-0.32512mm"
            pcbY="-3.57505mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin313"]}
            pcbX="0.32512mm"
            pcbY="-3.57505mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin314"]}
            pcbX="1.625092mm"
            pcbY="-3.57505mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin315"]}
            pcbX="2.275078mm"
            pcbY="-3.57505mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin316"]}
            pcbX="3.57505mm"
            pcbY="-3.57505mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin317"]}
            pcbX="4.225036mm"
            pcbY="-3.57505mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin318"]}
            pcbX="4.875022mm"
            pcbY="-3.57505mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin319"]}
            pcbX="5.525008mm"
            pcbY="-3.57505mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin320"]}
            pcbX="6.174994mm"
            pcbY="-3.57505mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin321"]}
            pcbX="6.82498mm"
            pcbY="-3.57505mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin322"]}
            pcbX="-6.82498mm"
            pcbY="-4.225036mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin323"]}
            pcbX="-6.174994mm"
            pcbY="-4.225036mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin324"]}
            pcbX="-5.525008mm"
            pcbY="-4.225036mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin325"]}
            pcbX="-4.225036mm"
            pcbY="-4.225036mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin326"]}
            pcbX="-3.57505mm"
            pcbY="-4.225036mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin327"]}
            pcbX="-2.275078mm"
            pcbY="-4.225036mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin328"]}
            pcbX="-1.625092mm"
            pcbY="-4.225036mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin329"]}
            pcbX="-0.32512mm"
            pcbY="-4.225036mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin330"]}
            pcbX="0.32512mm"
            pcbY="-4.225036mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin331"]}
            pcbX="1.625092mm"
            pcbY="-4.225036mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin332"]}
            pcbX="2.275078mm"
            pcbY="-4.225036mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin333"]}
            pcbX="3.57505mm"
            pcbY="-4.225036mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin334"]}
            pcbX="4.225036mm"
            pcbY="-4.225036mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin335"]}
            pcbX="5.525008mm"
            pcbY="-4.225036mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin336"]}
            pcbX="6.174994mm"
            pcbY="-4.225036mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin337"]}
            pcbX="6.82498mm"
            pcbY="-4.225036mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin338"]}
            pcbX="7.474966mm"
            pcbY="-4.225036mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin339"]}
            pcbX="-7.474966mm"
            pcbY="-4.875022mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin340"]}
            pcbX="-6.82498mm"
            pcbY="-4.875022mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin341"]}
            pcbX="-6.174994mm"
            pcbY="-4.875022mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin342"]}
            pcbX="-3.57505mm"
            pcbY="-4.875022mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin343"]}
            pcbX="-2.275078mm"
            pcbY="-4.875022mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin344"]}
            pcbX="-1.625092mm"
            pcbY="-4.875022mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin345"]}
            pcbX="-0.32512mm"
            pcbY="-4.875022mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin346"]}
            pcbX="0.32512mm"
            pcbY="-4.875022mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin347"]}
            pcbX="1.625092mm"
            pcbY="-4.875022mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin348"]}
            pcbX="2.275078mm"
            pcbY="-4.875022mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin349"]}
            pcbX="3.57505mm"
            pcbY="-4.875022mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin350"]}
            pcbX="6.174994mm"
            pcbY="-4.875022mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin351"]}
            pcbX="6.82498mm"
            pcbY="-4.875022mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin352"]}
            pcbX="7.474966mm"
            pcbY="-4.875022mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin353"]}
            pcbX="-7.474966mm"
            pcbY="-5.525008mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin354"]}
            pcbX="-6.82498mm"
            pcbY="-5.525008mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin355"]}
            pcbX="-4.225036mm"
            pcbY="-5.525008mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin356"]}
            pcbX="-3.57505mm"
            pcbY="-5.525008mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin357"]}
            pcbX="-2.275078mm"
            pcbY="-5.525008mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin358"]}
            pcbX="-1.625092mm"
            pcbY="-5.525008mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin359"]}
            pcbX="-0.32512mm"
            pcbY="-5.525008mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin360"]}
            pcbX="0.32512mm"
            pcbY="-5.525008mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin361"]}
            pcbX="1.625092mm"
            pcbY="-5.525008mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin362"]}
            pcbX="2.275078mm"
            pcbY="-5.525008mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin363"]}
            pcbX="3.57505mm"
            pcbY="-5.525008mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin364"]}
            pcbX="4.225036mm"
            pcbY="-5.525008mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin365"]}
            pcbX="6.82498mm"
            pcbY="-5.525008mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin366"]}
            pcbX="-6.82498mm"
            pcbY="-6.174994mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin367"]}
            pcbX="-6.174994mm"
            pcbY="-6.174994mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin368"]}
            pcbX="-4.875022mm"
            pcbY="-6.174994mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin369"]}
            pcbX="-4.225036mm"
            pcbY="-6.174994mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin370"]}
            pcbX="-3.57505mm"
            pcbY="-6.174994mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin371"]}
            pcbX="-2.275078mm"
            pcbY="-6.174994mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin372"]}
            pcbX="-1.625092mm"
            pcbY="-6.174994mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin373"]}
            pcbX="-0.32512mm"
            pcbY="-6.174994mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin374"]}
            pcbX="0.32512mm"
            pcbY="-6.174994mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin375"]}
            pcbX="1.625092mm"
            pcbY="-6.174994mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin376"]}
            pcbX="2.275078mm"
            pcbY="-6.174994mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin377"]}
            pcbX="3.57505mm"
            pcbY="-6.174994mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin378"]}
            pcbX="4.225036mm"
            pcbY="-6.174994mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin379"]}
            pcbX="4.875022mm"
            pcbY="-6.174994mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin380"]}
            pcbX="6.174994mm"
            pcbY="-6.174994mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin381"]}
            pcbX="6.82498mm"
            pcbY="-6.174994mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin382"]}
            pcbX="7.474966mm"
            pcbY="-6.174994mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin383"]}
            pcbX="-7.474966mm"
            pcbY="-6.82498mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin384"]}
            pcbX="-6.82498mm"
            pcbY="-6.82498mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin385"]}
            pcbX="-6.174994mm"
            pcbY="-6.82498mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin386"]}
            pcbX="-5.525008mm"
            pcbY="-6.82498mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin387"]}
            pcbX="-4.875022mm"
            pcbY="-6.82498mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin388"]}
            pcbX="-4.225036mm"
            pcbY="-6.82498mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin389"]}
            pcbX="-3.57505mm"
            pcbY="-6.82498mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin390"]}
            pcbX="-2.925064mm"
            pcbY="-6.82498mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin391"]}
            pcbX="-2.275078mm"
            pcbY="-6.82498mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin392"]}
            pcbX="-1.625092mm"
            pcbY="-6.82498mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin393"]}
            pcbX="-0.975106mm"
            pcbY="-6.82498mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin394"]}
            pcbX="-0.32512mm"
            pcbY="-6.82498mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin395"]}
            pcbX="0.32512mm"
            pcbY="-6.82498mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin396"]}
            pcbX="0.975106mm"
            pcbY="-6.82498mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin397"]}
            pcbX="1.625092mm"
            pcbY="-6.82498mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin398"]}
            pcbX="2.275078mm"
            pcbY="-6.82498mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin399"]}
            pcbX="2.925064mm"
            pcbY="-6.82498mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin400"]}
            pcbX="3.57505mm"
            pcbY="-6.82498mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin401"]}
            pcbX="4.225036mm"
            pcbY="-6.82498mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin402"]}
            pcbX="4.875022mm"
            pcbY="-6.82498mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin403"]}
            pcbX="5.525008mm"
            pcbY="-6.82498mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin404"]}
            pcbX="6.174994mm"
            pcbY="-6.82498mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin405"]}
            pcbX="6.82498mm"
            pcbY="-6.82498mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin406"]}
            pcbX="7.474966mm"
            pcbY="-6.82498mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin407"]}
            pcbX="-7.474966mm"
            pcbY="-7.474966mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin408"]}
            pcbX="-6.82498mm"
            pcbY="-7.474966mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin409"]}
            pcbX="-6.174994mm"
            pcbY="-7.474966mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin410"]}
            pcbX="-4.875022mm"
            pcbY="-7.474966mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin411"]}
            pcbX="-4.225036mm"
            pcbY="-7.474966mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin412"]}
            pcbX="-2.925064mm"
            pcbY="-7.474966mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin413"]}
            pcbX="-2.275078mm"
            pcbY="-7.474966mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin414"]}
            pcbX="-0.975106mm"
            pcbY="-7.474966mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin415"]}
            pcbX="-0.32512mm"
            pcbY="-7.474966mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin416"]}
            pcbX="0.975106mm"
            pcbY="-7.474966mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin417"]}
            pcbX="1.625092mm"
            pcbY="-7.474966mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin418"]}
            pcbX="2.925064mm"
            pcbY="-7.474966mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin419"]}
            pcbX="3.57505mm"
            pcbY="-7.474966mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin420"]}
            pcbX="4.875022mm"
            pcbY="-7.474966mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin421"]}
            pcbX="5.525008mm"
            pcbY="-7.474966mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin422"]}
            pcbX="6.82498mm"
            pcbY="-7.474966mm"
            radius="0.175006mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin423"]}
            pcbX="7.474966mm"
            pcbY="-7.474966mm"
            radius="0.175006mm"
            shape="circle"
          />
          <silkscreenpath
            route={[
              { x: 8.076209399999925, y: 8.076158599999985 },
              { x: 8.076209399999925, y: -8.076209400000039 },
              { x: -8.076158599999985, y: -8.076209400000039 },
              { x: -8.076158599999985, y: 8.076158599999985 },
              { x: 8.076209399999925, y: 8.076158599999985 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -7.656169600000112, y: 8.30480939999984 },
              { x: -8.304809400000067, y: 8.30480939999984 },
              { x: -8.304809400000067, y: 7.656169599999885 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -8.526272000000063, y: 7.474965999999995 },
              { x: -8.527977003504134, y: 7.462015212621054 },
              { x: -8.532975820845422, y: 7.449946999999952 },
              { x: -8.54092779088296, y: 7.439583790882807 },
              { x: -8.551290999999992, y: 7.4316318208452685 },
              { x: -8.563359212621208, y: 7.426633003504207 },
              { x: -8.576310000000035, y: 7.424927999999909 },
              { x: -8.589260787378862, y: 7.426633003504207 },
              { x: -8.601328999999964, y: 7.4316318208452685 },
              { x: -8.611692209117109, y: 7.439583790882807 },
              { x: -8.619644179154648, y: 7.449946999999952 },
              { x: -8.624642996495936, y: 7.462015212621054 },
              { x: -8.626348000000007, y: 7.474965999999995 },
              { x: -8.624642996495936, y: 7.487916787378936 },
              { x: -8.619644179154648, y: 7.499984999999924 },
              { x: -8.611692209117109, y: 7.510348209116955 },
              { x: -8.601328999999964, y: 7.518300179154494 },
              { x: -8.589260787378862, y: 7.523298996495896 },
              { x: -8.576310000000035, y: 7.5250039999998535 },
              { x: -8.563359212621208, y: 7.523298996495896 },
              { x: -8.551290999999992, y: 7.518300179154494 },
              { x: -8.54092779088296, y: 7.510348209116955 },
              { x: -8.532975820845422, y: 7.499984999999924 },
              { x: -8.527977003504134, y: 7.487916787378936 },
              { x: -8.526272000000063, y: 7.474965999999995 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.007366mm"
            pcbY="8.652766mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -7.902765999999929, y: 7.902765999999929 },
              { x: 7.8880340000000615, y: 7.902765999999929 },
              { x: 7.8880340000000615, y: -7.8880340000000615 },
              { x: -7.902765999999929, y: -7.8880340000000615 },
              { x: -7.902765999999929, y: 7.902765999999929 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2860216.obj?uuid=ff9160f0bf8c4c56bd347139de0cf38b",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2860216.step?uuid=ff9160f0bf8c4c56bd347139de0cf38b",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.649999 },
      }}
      {...props}
    />
  );
};

export default DM3730CUSD100;
