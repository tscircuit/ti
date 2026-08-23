import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin18: ["VREFHIA", "V1"],
  pin95: ["VREFHIB", "W5"],
  pin15: ["VREFHIC", "R1"],
  pin94: ["VREFHID", "V5"],
  pin34: ["VREFLOA", "R2"],
  pin113: ["VREFLOB", "V6"],
  pin33: ["VREFLOC", "P2"],
  pin114: ["VREFLOD", "W6"],
  pin73: ["ADCIN14", "T4"],
  pin74: ["ADCIN15", "U4"],
  pin17: ["ADCINA0", "U1"],
  pin16: ["ADCINA1", "T1"],
  pin36: ["ADCINA2", "U2"],
  pin35: ["ADCINA3", "T2"],
  pin55: ["ADCINA4", "U3"],
  pin54: ["ADCINA5", "T3"],
  pin37: ["ADCINB0", "V2"],
  pin38: ["ADCINB1", "W2"],
  pin56: ["ADCINB2", "V3"],
  pin57: ["ADCINB3", "W3"],
  pin75: ["ADCINB4", "V4"],
  pin76: ["ADCINB5", "W4"],
  pin53: ["ADCINC2", "R3"],
  pin52: ["ADCINC3", "P3"],
  pin72: ["ADCINC4", "R4"],
  pin71: ["ADCINC5", "P4"],
  pin92: ["ADCIND0", "T5"],
  pin93: ["ADCIND1", "U5"],
  pin111: ["ADCIND2", "T6"],
  pin112: ["ADCIND3", "U6"],
  pin123: ["ADCIND4", "T7"],
  pin124: ["ADCIND5", "U7"],
  pin129: ["GPIO0", "C8"],
  pin130: ["GPIO1", "D8"],
  pin115: ["GPIO2", "A7"],
  pin116: ["GPIO3", "B7"],
  pin117: ["GPIO4", "C7"],
  pin118: ["GPIO5", "D7"],
  pin96: ["GPIO6", "A6"],
  pin97: ["GPIO7", "B6"],
  pin26: ["GPIO8", "G2"],
  pin45: ["GPIO9", "G3"],
  pin21: ["GPIO10", "B2"],
  pin3: ["GPIO11", "C1"],
  pin22: ["GPIO12", "C2"],
  pin4: ["GPIO13", "D1"],
  pin23: ["GPIO14", "D2"],
  pin42: ["GPIO15", "D3"],
  pin5: ["GPIO16", "E1"],
  pin24: ["GPIO17", "E2"],
  pin43: ["GPIO18", "E3"],
  pin62: ["GPIO19", "E4"],
  pin25: ["GPIO20", "F2"],
  pin44: ["GPIO21", "F3"],
  pin66: ["GPIO22", "J4"],
  pin67: ["GPIO23", "K4"],
  pin48: ["GPIO24", "K3"],
  pin29: ["GPIO25", "K2"],
  pin10: ["GPIO26", "K1"],
  pin11: ["GPIO27", "L1"],
  pin193: ["GPIO28", "V11"],
  pin194: ["GPIO29", "W11"],
  pin191: ["GPIO30", "T11"],
  pin192: ["GPIO31", "U11"],
  pin221: ["GPIO32", "U13"],
  pin220: ["GPIO33", "T13"],
  pin240: ["GPIO34", "U14"],
  pin239: ["GPIO35", "T14"],
  pin279: ["GPIO36", "V16"],
  pin278: ["GPIO37", "U16"],
  pin277: ["GPIO38", "T16"],
  pin299: ["GPIO39", "W17"],
  pin298: ["GPIO40", "V17"],
  pin297: ["GPIO41", "U17"],
  pin322: ["GPIO42", "D19"],
  pin321: ["GPIO43", "C19"],
  pin309: ["GPIO44", "K18"],
  pin328: ["GPIO45", "K19"],
  pin323: ["GPIO46", "E19"],
  pin304: ["GPIO47", "E18"],
  pin276: ["GPIO48", "R16"],
  pin295: ["GPIO49", "R17"],
  pin314: ["GPIO50", "R18"],
  pin333: ["GPIO51", "R19"],
  pin275: ["GPIO52", "P16"],
  pin294: ["GPIO53", "P17"],
  pin313: ["GPIO54", "P18"],
  pin332: ["GPIO55", "P19"],
  pin274: ["GPIO56", "N16"],
  pin312: ["GPIO57", "N18"],
  pin293: ["GPIO58", "N17"],
  pin273: ["GPIO59", "M16"],
  pin292: ["GPIO60", "M17"],
  pin272: ["GPIO61", "L16"],
  pin289: ["GPIO62", "J17"],
  pin270: ["GPIO63", "J16"],
  pin291: ["GPIO64", "L17"],
  pin271: ["GPIO65", "K16"],
  pin290: ["GPIO66", "K17"],
  pin320: ["GPIO67", "B19"],
  pin302: ["GPIO68", "C18"],
  pin301: ["GPIO69", "B18"],
  pin281: ["GPIO70", "A17"],
  pin282: ["GPIO71", "B17"],
  pin263: ["GPIO72", "B16"],
  pin262: ["GPIO73", "A16"],
  pin283: ["GPIO74", "C17"],
  pin265: ["GPIO75", "D16"],
  pin264: ["GPIO76", "C16"],
  pin243: ["GPIO77", "A15"],
  pin244: ["GPIO78", "B15"],
  pin245: ["GPIO79", "C15"],
  pin246: ["GPIO80", "D15"],
  pin224: ["GPIO81", "A14"],
  pin225: ["GPIO82", "B14"],
  pin226: ["GPIO83", "C14"],
  pin178: ["GPIO84", "A11"],
  pin179: ["GPIO85", "B11"],
  pin180: ["GPIO86", "C11"],
  pin181: ["GPIO87", "D11"],
  pin98: ["GPIO88", "C6"],
  pin99: ["GPIO89", "D6"],
  pin77: ["GPIO90", "A5"],
  pin78: ["GPIO91", "B5"],
  pin58: ["GPIO92", "A4"],
  pin59: ["GPIO93", "B4"],
  pin39: ["GPIO94", "A3"],
  pin40: ["GPIO95", "B3"],
  pin41: ["GPIO96", "C3"],
  pin20: ["GPIO97", "A2"],
  pin6: ["GPIO98", "F1"],
  pin7: ["GPIO99", "G1"],
  pin8: ["GPIO100", "H1"],
  pin27: ["GPIO101", "H2"],
  pin46: ["GPIO102", "H3"],
  pin9: ["GPIO103", "J1"],
  pin28: ["GPIO104", "J2"],
  pin47: ["GPIO105", "J3"],
  pin30: ["GPIO106", "L2"],
  pin49: ["GPIO107", "L3"],
  pin68: ["GPIO108", "L4"],
  pin32: ["GPIO109", "N2"],
  pin31: ["GPIO110", "M2"],
  pin69: ["GPIO111", "M4"],
  pin50: ["GPIO112", "M3"],
  pin70: ["GPIO113", "N4"],
  pin51: ["GPIO114", "N3"],
  pin210: ["GPIO115", "V12"],
  pin177: ["GPIO116", "W10"],
  pin209: ["GPIO117", "U12"],
  pin208: ["GPIO118", "T12"],
  pin258: ["GPIO119", "T15"],
  pin259: ["GPIO120", "U15"],
  pin280: ["GPIO121", "W16"],
  pin140: ["GPIO122", "T8"],
  pin141: ["GPIO123", "U8"],
  pin142: ["GPIO124", "V8"],
  pin157: ["GPIO125", "T9"],
  pin158: ["GPIO126", "U9"],
  pin159: ["GPIO127", "V9"],
  pin160: ["GPIO128", "W9"],
  pin174: ["GPIO129", "T10"],
  pin175: ["GPIO130", "U10"],
  pin176: ["GPIO131", "V10"],
  pin318: ["GPIO132", "W18"],
  pin306: ["GPIO133_AUXCLKIN", "G18"],
  pin317: ["GPIO134", "V18"],
  pin316: ["GPIO135", "U18"],
  pin296: ["GPIO136", "T17"],
  pin315: ["GPIO137", "T18"],
  pin334: ["GPIO138", "T19"],
  pin331: ["GPIO139", "N19"],
  pin330: ["GPIO140", "M19"],
  pin311: ["GPIO141", "M18"],
  pin329: ["GPIO142", "L19"],
  pin305: ["GPIO143", "F18"],
  pin286: ["GPIO144", "F17"],
  pin285: ["GPIO145", "E17"],
  pin303: ["GPIO146", "D18"],
  pin284: ["GPIO147", "D17"],
  pin227: ["GPIO148", "D14"],
  pin212: ["GPIO149", "A13"],
  pin213: ["GPIO150", "B13"],
  pin214: ["GPIO151", "C13"],
  pin215: ["GPIO152", "D13"],
  pin195: ["GPIO153", "A12"],
  pin196: ["GPIO154", "B12"],
  pin197: ["GPIO155", "C12"],
  pin198: ["GPIO156", "D12"],
  pin162: ["GPIO157", "B10"],
  pin163: ["GPIO158", "C10"],
  pin164: ["GPIO159", "D10"],
  pin145: ["GPIO160", "B9"],
  pin146: ["GPIO161", "C9"],
  pin147: ["GPIO162", "D9"],
  pin127: ["GPIO163", "A8"],
  pin128: ["GPIO164", "B8"],
  pin79: ["GPIO165", "C5"],
  pin80: ["GPIO166", "D5"],
  pin60: ["GPIO167", "C4"],
  pin61: ["GPIO168", "D4"],
  pin324: ["XRS", "F19"],
  pin325: ["X1", "G19"],
  pin327: ["X2", "J19"],
  pin65: ["NC", "H4"],
  pin260: ["TCK", "V15"],
  pin223: ["TDI", "W13"],
  pin261: ["TDO", "W15"],
  pin242: ["TMS", "W14"],
  pin241: ["TRST", "V14"],
  pin308: ["VREGENZ", "J18"],
  pin148: ["VDD", "E9", "VDD_E9"],
  pin182: ["VDD", "E11", "VDD_E11"],
  pin149: ["VDD", "F9", "VDD_F9"],
  pin183: ["VDD", "F11", "VDD_F11"],
  pin230: ["VDD", "G14", "VDD_G14"],
  pin249: ["VDD", "G15", "VDD_G15"],
  pin232: ["VDD", "J14", "VDD_J14"],
  pin251: ["VDD", "J15", "VDD_J15"],
  pin86: ["VDD", "K5", "VDD_K5"],
  pin105: ["VDD", "K6", "VDD_K6"],
  pin172: ["VDD", "P10", "VDD_P10"],
  pin218: ["VDD", "P13", "VDD_P13"],
  pin173: ["VDD", "R10", "VDD_R10"],
  pin219: ["VDD", "R13", "VDD_R13"],
  pin190: ["VDD3VFL", "R11", "VDD3VFL_R11"],
  pin207: ["VDD3VFL", "R12", "VDD3VFL_R12"],
  pin109: ["VDDA", "P6", "VDDA_P6"],
  pin110: ["VDDA", "R6", "VDDA_R6"],
  pin144: ["VDDIO", "A9", "VDDIO_A9"],
  pin300: ["VDDIO", "A18", "VDDIO_A18"],
  pin2: ["VDDIO", "B1", "VDDIO_B1"],
  pin119: ["VDDIO", "E7", "VDDIO_E7"],
  pin165: ["VDDIO", "E10", "VDDIO_E10"],
  pin216: ["VDDIO", "E13", "VDDIO_E13"],
  pin266: ["VDDIO", "E16", "VDDIO_E16"],
  pin63: ["VDDIO", "F4", "VDDIO_F4"],
  pin120: ["VDDIO", "F7", "VDDIO_F7"],
  pin166: ["VDDIO", "F10", "VDDIO_F10"],
  pin217: ["VDDIO", "F13", "VDDIO_F13"],
  pin267: ["VDDIO", "F16", "VDDIO_F16"],
  pin64: ["VDDIO", "G4", "VDDIO_G4"],
  pin83: ["VDDIO", "G5", "VDDIO_G5"],
  pin102: ["VDDIO", "G6", "VDDIO_G6"],
  pin84: ["VDDIO", "H5", "VDDIO_H5"],
  pin103: ["VDDIO", "H6", "VDDIO_H6"],
  pin234: ["VDDIO", "L14", "VDDIO_L14"],
  pin253: ["VDDIO", "L15", "VDDIO_L15"],
  pin12: ["VDDIO", "M1", "VDDIO_M1"],
  pin88: ["VDDIO", "M5", "VDDIO_M5"],
  pin107: ["VDDIO", "M6", "VDDIO_M6"],
  pin236: ["VDDIO", "N14", "VDDIO_N14"],
  pin255: ["VDDIO", "N15", "VDDIO_N15"],
  pin155: ["VDDIO", "P9", "VDDIO_P9"],
  pin156: ["VDDIO", "R9", "VDDIO_R9"],
  pin336: ["VDDIO", "V19", "VDDIO_V19"],
  pin143: ["VDDIO", "W8", "VDDIO_W8"],
  pin269: ["VDDOSC", "H16", "VDDOSC_H16"],
  pin288: ["VDDOSC", "H17", "VDDOSC_H17"],
  pin1: ["VSS", "A1", "VSS_A1"],
  pin161: ["VSS", "A10", "VSS_A10"],
  pin319: ["VSS", "A19", "VSS_A19"],
  pin81: ["VSS", "E5", "VSS_E5"],
  pin100: ["VSS", "E6", "VSS_E6"],
  pin131: ["VSS", "E8", "VSS_E8"],
  pin199: ["VSS", "E12", "VSS_E12"],
  pin228: ["VSS", "E14", "VSS_E14"],
  pin247: ["VSS", "E15", "VSS_E15"],
  pin82: ["VSS", "F5", "VSS_F5"],
  pin101: ["VSS", "F6", "VSS_F6"],
  pin132: ["VSS", "F8", "VSS_F8"],
  pin200: ["VSS", "F12", "VSS_F12"],
  pin229: ["VSS", "F14", "VSS_F14"],
  pin248: ["VSS", "F15", "VSS_F15"],
  pin268: ["VSS", "G16", "VSS_G16"],
  pin287: ["VSS", "G17", "VSS_G17"],
  pin133: ["VSS", "H8", "VSS_H8"],
  pin150: ["VSS", "H9", "VSS_H9"],
  pin167: ["VSS", "H10", "VSS_H10"],
  pin184: ["VSS", "H11", "VSS_H11"],
  pin201: ["VSS", "H12", "VSS_H12"],
  pin231: ["VSS", "H14", "VSS_H14"],
  pin250: ["VSS", "H15", "VSS_H15"],
  pin85: ["VSS", "J5", "VSS_J5"],
  pin104: ["VSS", "J6", "VSS_J6"],
  pin134: ["VSS", "J8", "VSS_J8"],
  pin151: ["VSS", "J9", "VSS_J9"],
  pin168: ["VSS", "J10", "VSS_J10"],
  pin185: ["VSS", "J11", "VSS_J11"],
  pin202: ["VSS", "J12", "VSS_J12"],
  pin135: ["VSS", "K8", "VSS_K8"],
  pin152: ["VSS", "K9", "VSS_K9"],
  pin169: ["VSS", "K10", "VSS_K10"],
  pin186: ["VSS", "K11", "VSS_K11"],
  pin203: ["VSS", "K12", "VSS_K12"],
  pin233: ["VSS", "K14", "VSS_K14"],
  pin252: ["VSS", "K15", "VSS_K15"],
  pin87: ["VSS", "L5", "VSS_L5"],
  pin106: ["VSS", "L6", "VSS_L6"],
  pin136: ["VSS", "L8", "VSS_L8"],
  pin153: ["VSS", "L9", "VSS_L9"],
  pin170: ["VSS", "L10", "VSS_L10"],
  pin187: ["VSS", "L11", "VSS_L11"],
  pin204: ["VSS", "L12", "VSS_L12"],
  pin310: ["VSS", "L18", "VSS_L18"],
  pin137: ["VSS", "M8", "VSS_M8"],
  pin154: ["VSS", "M9", "VSS_M9"],
  pin171: ["VSS", "M10", "VSS_M10"],
  pin188: ["VSS", "M11", "VSS_M11"],
  pin205: ["VSS", "M12", "VSS_M12"],
  pin235: ["VSS", "M14", "VSS_M14"],
  pin254: ["VSS", "M15", "VSS_M15"],
  pin13: ["VSS", "N1", "VSS_N1"],
  pin89: ["VSS", "N5", "VSS_N5"],
  pin108: ["VSS", "N6", "VSS_N6"],
  pin121: ["VSS", "P7", "VSS_P7"],
  pin138: ["VSS", "P8", "VSS_P8"],
  pin189: ["VSS", "P11", "VSS_P11"],
  pin206: ["VSS", "P12", "VSS_P12"],
  pin237: ["VSS", "P14", "VSS_P14"],
  pin256: ["VSS", "P15", "VSS_P15"],
  pin122: ["VSS", "R7", "VSS_R7"],
  pin139: ["VSS", "R8", "VSS_R8"],
  pin238: ["VSS", "R14", "VSS_R14"],
  pin257: ["VSS", "R15", "VSS_R15"],
  pin126: ["VSS", "W7", "VSS_W7"],
  pin337: ["VSS", "W19", "VSS_W19"],
  pin307: ["VSSOSC", "H18", "VSSOSC_H18"],
  pin326: ["VSSOSC", "H19", "VSSOSC_H19"],
  pin14: ["VSSA", "P1", "VSSA_P1"],
  pin90: ["VSSA", "P5", "VSSA_P5"],
  pin91: ["VSSA", "R5", "VSSA_R5"],
  pin125: ["VSSA", "V7", "VSSA_V7"],
  pin19: ["VSSA", "W1", "VSSA_W1"],
  pin335: ["ERRORSTS", "U19"],
  pin211: ["FLT1", "W12"],
  pin222: ["FLT2", "V13"],
} as const;

const pinRoles = {
  pin18: "input",
  pin95: "input",
  pin15: "input",
  pin94: "input",
  pin34: "input",
  pin113: "input",
  pin33: "input",
  pin114: "input",
  pin73: "input",
  pin74: "input",
  pin17: "input",
  pin16: "input",
  pin36: "input",
  pin35: "input",
  pin55: "input",
  pin54: "input",
  pin37: "input",
  pin38: "input",
  pin56: "input",
  pin57: "input",
  pin75: "input",
  pin76: "input",
  pin53: "input",
  pin52: "input",
  pin72: "input",
  pin71: "input",
  pin92: "input",
  pin93: "input",
  pin111: "input",
  pin112: "input",
  pin123: "input",
  pin124: "input",
  pin129: "bidirectional",
  pin130: "bidirectional",
  pin115: "bidirectional",
  pin116: "bidirectional",
  pin117: "bidirectional",
  pin118: "bidirectional",
  pin96: "bidirectional",
  pin97: "bidirectional",
  pin26: "bidirectional",
  pin45: "bidirectional",
  pin21: "bidirectional",
  pin3: "bidirectional",
  pin22: "bidirectional",
  pin4: "bidirectional",
  pin23: "bidirectional",
  pin42: "bidirectional",
  pin5: "bidirectional",
  pin24: "bidirectional",
  pin43: "bidirectional",
  pin62: "bidirectional",
  pin25: "bidirectional",
  pin44: "bidirectional",
  pin66: "bidirectional",
  pin67: "bidirectional",
  pin48: "bidirectional",
  pin29: "bidirectional",
  pin10: "bidirectional",
  pin11: "bidirectional",
  pin193: "bidirectional",
  pin194: "bidirectional",
  pin191: "bidirectional",
  pin192: "bidirectional",
  pin221: "bidirectional",
  pin220: "bidirectional",
  pin240: "bidirectional",
  pin239: "bidirectional",
  pin279: "bidirectional",
  pin278: "bidirectional",
  pin277: "bidirectional",
  pin299: "bidirectional",
  pin298: "bidirectional",
  pin297: "bidirectional",
  pin322: "bidirectional",
  pin321: "bidirectional",
  pin309: "bidirectional",
  pin328: "bidirectional",
  pin323: "bidirectional",
  pin304: "bidirectional",
  pin276: "bidirectional",
  pin295: "bidirectional",
  pin314: "bidirectional",
  pin333: "bidirectional",
  pin275: "bidirectional",
  pin294: "bidirectional",
  pin313: "bidirectional",
  pin332: "bidirectional",
  pin274: "bidirectional",
  pin312: "bidirectional",
  pin293: "bidirectional",
  pin273: "bidirectional",
  pin292: "bidirectional",
  pin272: "bidirectional",
  pin289: "bidirectional",
  pin270: "bidirectional",
  pin291: "bidirectional",
  pin271: "bidirectional",
  pin290: "bidirectional",
  pin320: "bidirectional",
  pin302: "bidirectional",
  pin301: "bidirectional",
  pin281: "bidirectional",
  pin282: "bidirectional",
  pin263: "bidirectional",
  pin262: "bidirectional",
  pin283: "bidirectional",
  pin265: "bidirectional",
  pin264: "bidirectional",
  pin243: "bidirectional",
  pin244: "bidirectional",
  pin245: "bidirectional",
  pin246: "bidirectional",
  pin224: "bidirectional",
  pin225: "bidirectional",
  pin226: "bidirectional",
  pin178: "bidirectional",
  pin179: "bidirectional",
  pin180: "bidirectional",
  pin181: "bidirectional",
  pin98: "bidirectional",
  pin99: "bidirectional",
  pin77: "bidirectional",
  pin78: "bidirectional",
  pin58: "bidirectional",
  pin59: "bidirectional",
  pin39: "bidirectional",
  pin40: "bidirectional",
  pin41: "bidirectional",
  pin20: "bidirectional",
  pin6: "bidirectional",
  pin7: "bidirectional",
  pin8: "bidirectional",
  pin27: "bidirectional",
  pin46: "bidirectional",
  pin9: "bidirectional",
  pin28: "bidirectional",
  pin47: "bidirectional",
  pin30: "bidirectional",
  pin49: "bidirectional",
  pin68: "bidirectional",
  pin32: "bidirectional",
  pin31: "bidirectional",
  pin69: "bidirectional",
  pin50: "bidirectional",
  pin70: "bidirectional",
  pin51: "bidirectional",
  pin210: "bidirectional",
  pin177: "bidirectional",
  pin209: "bidirectional",
  pin208: "bidirectional",
  pin258: "bidirectional",
  pin259: "bidirectional",
  pin280: "bidirectional",
  pin140: "bidirectional",
  pin141: "bidirectional",
  pin142: "bidirectional",
  pin157: "bidirectional",
  pin158: "bidirectional",
  pin159: "bidirectional",
  pin160: "bidirectional",
  pin174: "bidirectional",
  pin175: "bidirectional",
  pin176: "bidirectional",
  pin318: "bidirectional",
  pin306: "bidirectional",
  pin317: "bidirectional",
  pin316: "bidirectional",
  pin296: "bidirectional",
  pin315: "bidirectional",
  pin334: "bidirectional",
  pin331: "bidirectional",
  pin330: "bidirectional",
  pin311: "bidirectional",
  pin329: "bidirectional",
  pin305: "bidirectional",
  pin286: "bidirectional",
  pin285: "bidirectional",
  pin303: "bidirectional",
  pin284: "bidirectional",
  pin227: "bidirectional",
  pin212: "bidirectional",
  pin213: "bidirectional",
  pin214: "bidirectional",
  pin215: "bidirectional",
  pin195: "bidirectional",
  pin196: "bidirectional",
  pin197: "bidirectional",
  pin198: "bidirectional",
  pin162: "bidirectional",
  pin163: "bidirectional",
  pin164: "bidirectional",
  pin145: "bidirectional",
  pin146: "bidirectional",
  pin147: "bidirectional",
  pin127: "bidirectional",
  pin128: "bidirectional",
  pin79: "bidirectional",
  pin80: "bidirectional",
  pin60: "bidirectional",
  pin61: "bidirectional",
  pin325: "input",
  pin327: "output",
  pin65: "no-connect",
  pin260: "input",
  pin223: "input",
  pin242: "input",
  pin241: "input",
  pin308: "input",
  pin148: "power",
  pin182: "power",
  pin149: "power",
  pin183: "power",
  pin230: "power",
  pin249: "power",
  pin232: "power",
  pin251: "power",
  pin86: "power",
  pin105: "power",
  pin172: "power",
  pin218: "power",
  pin173: "power",
  pin219: "power",
  pin190: "power",
  pin207: "power",
  pin109: "power",
  pin110: "power",
  pin144: "power",
  pin300: "power",
  pin2: "power",
  pin119: "power",
  pin165: "power",
  pin216: "power",
  pin266: "power",
  pin63: "power",
  pin120: "power",
  pin166: "power",
  pin217: "power",
  pin267: "power",
  pin64: "power",
  pin83: "power",
  pin102: "power",
  pin84: "power",
  pin103: "power",
  pin234: "power",
  pin253: "power",
  pin12: "power",
  pin88: "power",
  pin107: "power",
  pin236: "power",
  pin255: "power",
  pin155: "power",
  pin156: "power",
  pin336: "power",
  pin143: "power",
  pin269: "power",
  pin288: "power",
  pin1: "ground",
  pin161: "ground",
  pin319: "ground",
  pin81: "ground",
  pin100: "ground",
  pin131: "ground",
  pin199: "ground",
  pin228: "ground",
  pin247: "ground",
  pin82: "ground",
  pin101: "ground",
  pin132: "ground",
  pin200: "ground",
  pin229: "ground",
  pin248: "ground",
  pin268: "ground",
  pin287: "ground",
  pin133: "ground",
  pin150: "ground",
  pin167: "ground",
  pin184: "ground",
  pin201: "ground",
  pin231: "ground",
  pin250: "ground",
  pin85: "ground",
  pin104: "ground",
  pin134: "ground",
  pin151: "ground",
  pin168: "ground",
  pin185: "ground",
  pin202: "ground",
  pin135: "ground",
  pin152: "ground",
  pin169: "ground",
  pin186: "ground",
  pin203: "ground",
  pin233: "ground",
  pin252: "ground",
  pin87: "ground",
  pin106: "ground",
  pin136: "ground",
  pin153: "ground",
  pin170: "ground",
  pin187: "ground",
  pin204: "ground",
  pin310: "ground",
  pin137: "ground",
  pin154: "ground",
  pin171: "ground",
  pin188: "ground",
  pin205: "ground",
  pin235: "ground",
  pin254: "ground",
  pin13: "ground",
  pin89: "ground",
  pin108: "ground",
  pin121: "ground",
  pin138: "ground",
  pin189: "ground",
  pin206: "ground",
  pin237: "ground",
  pin256: "ground",
  pin122: "ground",
  pin139: "ground",
  pin238: "ground",
  pin257: "ground",
  pin126: "ground",
  pin337: "ground",
  pin307: "no-connect",
  pin326: "no-connect",
  pin14: "ground",
  pin90: "ground",
  pin91: "ground",
  pin125: "ground",
  pin19: "ground",
  pin335: "output",
  pin211: "bidirectional",
  pin222: "bidirectional",
} as const;

const pinAttributes = {
  pin65: {
    doNotConnect: true,
  },
  pin148: {
    requiresPower: true,
  },
  pin182: {
    requiresPower: true,
  },
  pin149: {
    requiresPower: true,
  },
  pin183: {
    requiresPower: true,
  },
  pin230: {
    requiresPower: true,
  },
  pin249: {
    requiresPower: true,
  },
  pin232: {
    requiresPower: true,
  },
  pin251: {
    requiresPower: true,
  },
  pin86: {
    requiresPower: true,
  },
  pin105: {
    requiresPower: true,
  },
  pin172: {
    requiresPower: true,
  },
  pin218: {
    requiresPower: true,
  },
  pin173: {
    requiresPower: true,
  },
  pin219: {
    requiresPower: true,
  },
  pin190: {
    requiresPower: true,
  },
  pin207: {
    requiresPower: true,
  },
  pin109: {
    requiresPower: true,
  },
  pin110: {
    requiresPower: true,
  },
  pin144: {
    requiresPower: true,
  },
  pin300: {
    requiresPower: true,
  },
  pin2: {
    requiresPower: true,
  },
  pin119: {
    requiresPower: true,
  },
  pin165: {
    requiresPower: true,
  },
  pin216: {
    requiresPower: true,
  },
  pin266: {
    requiresPower: true,
  },
  pin63: {
    requiresPower: true,
  },
  pin120: {
    requiresPower: true,
  },
  pin166: {
    requiresPower: true,
  },
  pin217: {
    requiresPower: true,
  },
  pin267: {
    requiresPower: true,
  },
  pin64: {
    requiresPower: true,
  },
  pin83: {
    requiresPower: true,
  },
  pin102: {
    requiresPower: true,
  },
  pin84: {
    requiresPower: true,
  },
  pin103: {
    requiresPower: true,
  },
  pin234: {
    requiresPower: true,
  },
  pin253: {
    requiresPower: true,
  },
  pin12: {
    requiresPower: true,
  },
  pin88: {
    requiresPower: true,
  },
  pin107: {
    requiresPower: true,
  },
  pin236: {
    requiresPower: true,
  },
  pin255: {
    requiresPower: true,
  },
  pin155: {
    requiresPower: true,
  },
  pin156: {
    requiresPower: true,
  },
  pin336: {
    requiresPower: true,
  },
  pin143: {
    requiresPower: true,
  },
  pin269: {
    requiresPower: true,
  },
  pin288: {
    requiresPower: true,
  },
  pin1: {
    requiresGround: true,
  },
  pin161: {
    requiresGround: true,
  },
  pin319: {
    requiresGround: true,
  },
  pin81: {
    requiresGround: true,
  },
  pin100: {
    requiresGround: true,
  },
  pin131: {
    requiresGround: true,
  },
  pin199: {
    requiresGround: true,
  },
  pin228: {
    requiresGround: true,
  },
  pin247: {
    requiresGround: true,
  },
  pin82: {
    requiresGround: true,
  },
  pin101: {
    requiresGround: true,
  },
  pin132: {
    requiresGround: true,
  },
  pin200: {
    requiresGround: true,
  },
  pin229: {
    requiresGround: true,
  },
  pin248: {
    requiresGround: true,
  },
  pin268: {
    requiresGround: true,
  },
  pin287: {
    requiresGround: true,
  },
  pin133: {
    requiresGround: true,
  },
  pin150: {
    requiresGround: true,
  },
  pin167: {
    requiresGround: true,
  },
  pin184: {
    requiresGround: true,
  },
  pin201: {
    requiresGround: true,
  },
  pin231: {
    requiresGround: true,
  },
  pin250: {
    requiresGround: true,
  },
  pin85: {
    requiresGround: true,
  },
  pin104: {
    requiresGround: true,
  },
  pin134: {
    requiresGround: true,
  },
  pin151: {
    requiresGround: true,
  },
  pin168: {
    requiresGround: true,
  },
  pin185: {
    requiresGround: true,
  },
  pin202: {
    requiresGround: true,
  },
  pin135: {
    requiresGround: true,
  },
  pin152: {
    requiresGround: true,
  },
  pin169: {
    requiresGround: true,
  },
  pin186: {
    requiresGround: true,
  },
  pin203: {
    requiresGround: true,
  },
  pin233: {
    requiresGround: true,
  },
  pin252: {
    requiresGround: true,
  },
  pin87: {
    requiresGround: true,
  },
  pin106: {
    requiresGround: true,
  },
  pin136: {
    requiresGround: true,
  },
  pin153: {
    requiresGround: true,
  },
  pin170: {
    requiresGround: true,
  },
  pin187: {
    requiresGround: true,
  },
  pin204: {
    requiresGround: true,
  },
  pin310: {
    requiresGround: true,
  },
  pin137: {
    requiresGround: true,
  },
  pin154: {
    requiresGround: true,
  },
  pin171: {
    requiresGround: true,
  },
  pin188: {
    requiresGround: true,
  },
  pin205: {
    requiresGround: true,
  },
  pin235: {
    requiresGround: true,
  },
  pin254: {
    requiresGround: true,
  },
  pin13: {
    requiresGround: true,
  },
  pin89: {
    requiresGround: true,
  },
  pin108: {
    requiresGround: true,
  },
  pin121: {
    requiresGround: true,
  },
  pin138: {
    requiresGround: true,
  },
  pin189: {
    requiresGround: true,
  },
  pin206: {
    requiresGround: true,
  },
  pin237: {
    requiresGround: true,
  },
  pin256: {
    requiresGround: true,
  },
  pin122: {
    requiresGround: true,
  },
  pin139: {
    requiresGround: true,
  },
  pin238: {
    requiresGround: true,
  },
  pin257: {
    requiresGround: true,
  },
  pin126: {
    requiresGround: true,
  },
  pin337: {
    requiresGround: true,
  },
  pin307: {
    doNotConnect: true,
  },
  pin326: {
    doNotConnect: true,
  },
  pin14: {
    requiresGround: true,
  },
  pin90: {
    requiresGround: true,
  },
  pin91: {
    requiresGround: true,
  },
  pin125: {
    requiresGround: true,
  },
  pin19: {
    requiresGround: true,
  },
} as const;

export const TMS320F28377DZWTQ = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C1345100"],
      }}
      manufacturerPartNumber="TMS320F28377DZWTQ"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-7.200011mm"
            pcbY="-7.200011mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-6.400165mm"
            pcbY="-7.200011mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-5.600065mm"
            pcbY="-7.200011mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-4.800219mm"
            pcbY="-7.200011mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-4.000119mm"
            pcbY="-7.200011mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-3.200019mm"
            pcbY="-7.200011mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-2.400173mm"
            pcbY="-7.200011mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-1.600073mm"
            pcbY="-7.200011mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="-0.800227mm"
            pcbY="-7.200011mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="-0.000127mm"
            pcbY="-7.200011mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="0.799973mm"
            pcbY="-7.200011mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="1.599819mm"
            pcbY="-7.200011mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="2.399919mm"
            pcbY="-7.200011mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="3.199765mm"
            pcbY="-7.200011mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="3.999865mm"
            pcbY="-7.200011mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="4.799965mm"
            pcbY="-7.200011mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="5.599811mm"
            pcbY="-7.200011mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="6.399911mm"
            pcbY="-7.200011mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin19"]}
            pcbX="7.200011mm"
            pcbY="-7.200011mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin20"]}
            pcbX="-7.200011mm"
            pcbY="-6.399911mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin21"]}
            pcbX="-6.400165mm"
            pcbY="-6.399911mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin22"]}
            pcbX="-5.600065mm"
            pcbY="-6.399911mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin23"]}
            pcbX="-4.800219mm"
            pcbY="-6.399911mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin24"]}
            pcbX="-4.000119mm"
            pcbY="-6.399911mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin25"]}
            pcbX="-3.200019mm"
            pcbY="-6.399911mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin26"]}
            pcbX="-2.400173mm"
            pcbY="-6.399911mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin27"]}
            pcbX="-1.600073mm"
            pcbY="-6.399911mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin28"]}
            pcbX="-0.800227mm"
            pcbY="-6.399911mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin29"]}
            pcbX="-0.000127mm"
            pcbY="-6.399911mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin30"]}
            pcbX="0.799973mm"
            pcbY="-6.399911mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin31"]}
            pcbX="1.599819mm"
            pcbY="-6.399911mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin32"]}
            pcbX="2.399919mm"
            pcbY="-6.399911mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin33"]}
            pcbX="3.199765mm"
            pcbY="-6.399911mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin34"]}
            pcbX="3.999865mm"
            pcbY="-6.399911mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin35"]}
            pcbX="4.799965mm"
            pcbY="-6.399911mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin36"]}
            pcbX="5.599811mm"
            pcbY="-6.399911mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin37"]}
            pcbX="6.399911mm"
            pcbY="-6.399911mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin38"]}
            pcbX="7.200011mm"
            pcbY="-6.399911mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin39"]}
            pcbX="-7.200011mm"
            pcbY="-5.599811mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin40"]}
            pcbX="-6.400165mm"
            pcbY="-5.599811mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin41"]}
            pcbX="-5.600065mm"
            pcbY="-5.599811mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin42"]}
            pcbX="-4.800219mm"
            pcbY="-5.599811mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin43"]}
            pcbX="-4.000119mm"
            pcbY="-5.599811mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin44"]}
            pcbX="-3.200019mm"
            pcbY="-5.599811mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin45"]}
            pcbX="-2.400173mm"
            pcbY="-5.599811mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin46"]}
            pcbX="-1.600073mm"
            pcbY="-5.599811mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin47"]}
            pcbX="-0.800227mm"
            pcbY="-5.599811mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin48"]}
            pcbX="-0.000127mm"
            pcbY="-5.599811mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin49"]}
            pcbX="0.799973mm"
            pcbY="-5.599811mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin50"]}
            pcbX="1.599819mm"
            pcbY="-5.599811mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin51"]}
            pcbX="2.399919mm"
            pcbY="-5.599811mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin52"]}
            pcbX="3.199765mm"
            pcbY="-5.599811mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin53"]}
            pcbX="3.999865mm"
            pcbY="-5.599811mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin54"]}
            pcbX="4.799965mm"
            pcbY="-5.599811mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin55"]}
            pcbX="5.599811mm"
            pcbY="-5.599811mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin56"]}
            pcbX="6.399911mm"
            pcbY="-5.599811mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin57"]}
            pcbX="7.200011mm"
            pcbY="-5.599811mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin58"]}
            pcbX="-7.200011mm"
            pcbY="-4.799965mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin59"]}
            pcbX="-6.400165mm"
            pcbY="-4.799965mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin60"]}
            pcbX="-5.600065mm"
            pcbY="-4.799965mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin61"]}
            pcbX="-4.800219mm"
            pcbY="-4.799965mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin62"]}
            pcbX="-4.000119mm"
            pcbY="-4.799965mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin63"]}
            pcbX="-3.200019mm"
            pcbY="-4.799965mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin64"]}
            pcbX="-2.400173mm"
            pcbY="-4.799965mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin65"]}
            pcbX="-1.600073mm"
            pcbY="-4.799965mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin66"]}
            pcbX="-0.800227mm"
            pcbY="-4.799965mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin67"]}
            pcbX="-0.000127mm"
            pcbY="-4.799965mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin68"]}
            pcbX="0.799973mm"
            pcbY="-4.799965mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin69"]}
            pcbX="1.599819mm"
            pcbY="-4.799965mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin70"]}
            pcbX="2.399919mm"
            pcbY="-4.799965mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin71"]}
            pcbX="3.199765mm"
            pcbY="-4.799965mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin72"]}
            pcbX="3.999865mm"
            pcbY="-4.799965mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin73"]}
            pcbX="4.799965mm"
            pcbY="-4.799965mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin74"]}
            pcbX="5.599811mm"
            pcbY="-4.799965mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin75"]}
            pcbX="6.399911mm"
            pcbY="-4.799965mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin76"]}
            pcbX="7.200011mm"
            pcbY="-4.799965mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin77"]}
            pcbX="-7.200011mm"
            pcbY="-3.999865mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin78"]}
            pcbX="-6.400165mm"
            pcbY="-3.999865mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin79"]}
            pcbX="-5.600065mm"
            pcbY="-3.999865mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin80"]}
            pcbX="-4.800219mm"
            pcbY="-3.999865mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin81"]}
            pcbX="-4.000119mm"
            pcbY="-3.999865mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin82"]}
            pcbX="-3.200019mm"
            pcbY="-3.999865mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin83"]}
            pcbX="-2.400173mm"
            pcbY="-3.999865mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin84"]}
            pcbX="-1.600073mm"
            pcbY="-3.999865mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin85"]}
            pcbX="-0.800227mm"
            pcbY="-3.999865mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin86"]}
            pcbX="-0.000127mm"
            pcbY="-3.999865mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin87"]}
            pcbX="0.799973mm"
            pcbY="-3.999865mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin88"]}
            pcbX="1.599819mm"
            pcbY="-3.999865mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin89"]}
            pcbX="2.399919mm"
            pcbY="-3.999865mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin90"]}
            pcbX="3.199765mm"
            pcbY="-3.999865mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin91"]}
            pcbX="3.999865mm"
            pcbY="-3.999865mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin92"]}
            pcbX="4.799965mm"
            pcbY="-3.999865mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin93"]}
            pcbX="5.599811mm"
            pcbY="-3.999865mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin94"]}
            pcbX="6.399911mm"
            pcbY="-3.999865mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin95"]}
            pcbX="7.200011mm"
            pcbY="-3.999865mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin96"]}
            pcbX="-7.200011mm"
            pcbY="-3.199765mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin97"]}
            pcbX="-6.400165mm"
            pcbY="-3.199765mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin98"]}
            pcbX="-5.600065mm"
            pcbY="-3.199765mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin99"]}
            pcbX="-4.800219mm"
            pcbY="-3.199765mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin100"]}
            pcbX="-4.000119mm"
            pcbY="-3.199765mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin101"]}
            pcbX="-3.200019mm"
            pcbY="-3.199765mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin102"]}
            pcbX="-2.400173mm"
            pcbY="-3.199765mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin103"]}
            pcbX="-1.600073mm"
            pcbY="-3.199765mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin104"]}
            pcbX="-0.800227mm"
            pcbY="-3.199765mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin105"]}
            pcbX="-0.000127mm"
            pcbY="-3.199765mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin106"]}
            pcbX="0.799973mm"
            pcbY="-3.199765mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin107"]}
            pcbX="1.599819mm"
            pcbY="-3.199765mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin108"]}
            pcbX="2.399919mm"
            pcbY="-3.199765mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin109"]}
            pcbX="3.199765mm"
            pcbY="-3.199765mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin110"]}
            pcbX="3.999865mm"
            pcbY="-3.199765mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin111"]}
            pcbX="4.799965mm"
            pcbY="-3.199765mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin112"]}
            pcbX="5.599811mm"
            pcbY="-3.199765mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin113"]}
            pcbX="6.399911mm"
            pcbY="-3.199765mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin114"]}
            pcbX="7.200011mm"
            pcbY="-3.199765mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin115"]}
            pcbX="-7.200011mm"
            pcbY="-2.399919mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin116"]}
            pcbX="-6.400165mm"
            pcbY="-2.399919mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin117"]}
            pcbX="-5.600065mm"
            pcbY="-2.399919mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin118"]}
            pcbX="-4.800219mm"
            pcbY="-2.399919mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin119"]}
            pcbX="-4.000119mm"
            pcbY="-2.399919mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin120"]}
            pcbX="-3.200019mm"
            pcbY="-2.399919mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin121"]}
            pcbX="3.199765mm"
            pcbY="-2.399919mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin122"]}
            pcbX="3.999865mm"
            pcbY="-2.399919mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin123"]}
            pcbX="4.799965mm"
            pcbY="-2.399919mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin124"]}
            pcbX="5.599811mm"
            pcbY="-2.399919mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin125"]}
            pcbX="6.399911mm"
            pcbY="-2.399919mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin126"]}
            pcbX="7.200011mm"
            pcbY="-2.399919mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin127"]}
            pcbX="-7.200011mm"
            pcbY="-1.599819mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin128"]}
            pcbX="-6.400165mm"
            pcbY="-1.599819mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin129"]}
            pcbX="-5.600065mm"
            pcbY="-1.599819mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin130"]}
            pcbX="-4.800219mm"
            pcbY="-1.599819mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin131"]}
            pcbX="-4.000119mm"
            pcbY="-1.599819mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin132"]}
            pcbX="-3.200019mm"
            pcbY="-1.599819mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin133"]}
            pcbX="-1.600073mm"
            pcbY="-1.599819mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin134"]}
            pcbX="-0.800227mm"
            pcbY="-1.599819mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin135"]}
            pcbX="-0.000127mm"
            pcbY="-1.599819mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin136"]}
            pcbX="0.799973mm"
            pcbY="-1.599819mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin137"]}
            pcbX="1.599819mm"
            pcbY="-1.599819mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin138"]}
            pcbX="3.199765mm"
            pcbY="-1.599819mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin139"]}
            pcbX="3.999865mm"
            pcbY="-1.599819mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin140"]}
            pcbX="4.799965mm"
            pcbY="-1.599819mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin141"]}
            pcbX="5.599811mm"
            pcbY="-1.599819mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin142"]}
            pcbX="6.399911mm"
            pcbY="-1.599819mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin143"]}
            pcbX="7.200011mm"
            pcbY="-1.599819mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin144"]}
            pcbX="-7.200011mm"
            pcbY="-0.799973mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin145"]}
            pcbX="-6.400165mm"
            pcbY="-0.799973mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin146"]}
            pcbX="-5.600065mm"
            pcbY="-0.799973mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin147"]}
            pcbX="-4.800219mm"
            pcbY="-0.799973mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin148"]}
            pcbX="-4.000119mm"
            pcbY="-0.799973mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin149"]}
            pcbX="-3.200019mm"
            pcbY="-0.799973mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin150"]}
            pcbX="-1.600073mm"
            pcbY="-0.799973mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin151"]}
            pcbX="-0.800227mm"
            pcbY="-0.799973mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin152"]}
            pcbX="-0.000127mm"
            pcbY="-0.799973mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin153"]}
            pcbX="0.799973mm"
            pcbY="-0.799973mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin154"]}
            pcbX="1.599819mm"
            pcbY="-0.799973mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin155"]}
            pcbX="3.199765mm"
            pcbY="-0.799973mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin156"]}
            pcbX="3.999865mm"
            pcbY="-0.799973mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin157"]}
            pcbX="4.799965mm"
            pcbY="-0.799973mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin158"]}
            pcbX="5.599811mm"
            pcbY="-0.799973mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin159"]}
            pcbX="6.399911mm"
            pcbY="-0.799973mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin160"]}
            pcbX="7.200011mm"
            pcbY="-0.799973mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin161"]}
            pcbX="-7.200011mm"
            pcbY="0.000127mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin162"]}
            pcbX="-6.400165mm"
            pcbY="0.000127mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin163"]}
            pcbX="-5.600065mm"
            pcbY="0.000127mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin164"]}
            pcbX="-4.800219mm"
            pcbY="0.000127mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin165"]}
            pcbX="-4.000119mm"
            pcbY="0.000127mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin166"]}
            pcbX="-3.200019mm"
            pcbY="0.000127mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin167"]}
            pcbX="-1.600073mm"
            pcbY="0.000127mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin168"]}
            pcbX="-0.800227mm"
            pcbY="0.000127mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin169"]}
            pcbX="-0.000127mm"
            pcbY="0.000127mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin170"]}
            pcbX="0.799973mm"
            pcbY="0.000127mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin171"]}
            pcbX="1.599819mm"
            pcbY="0.000127mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin172"]}
            pcbX="3.199765mm"
            pcbY="0.000127mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin173"]}
            pcbX="3.999865mm"
            pcbY="0.000127mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin174"]}
            pcbX="4.799965mm"
            pcbY="0.000127mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin175"]}
            pcbX="5.599811mm"
            pcbY="0.000127mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin176"]}
            pcbX="6.399911mm"
            pcbY="0.000127mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin177"]}
            pcbX="7.200011mm"
            pcbY="0.000127mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin178"]}
            pcbX="-7.200011mm"
            pcbY="0.800227mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin179"]}
            pcbX="-6.400165mm"
            pcbY="0.800227mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin180"]}
            pcbX="-5.600065mm"
            pcbY="0.800227mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin181"]}
            pcbX="-4.800219mm"
            pcbY="0.800227mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin182"]}
            pcbX="-4.000119mm"
            pcbY="0.800227mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin183"]}
            pcbX="-3.200019mm"
            pcbY="0.800227mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin184"]}
            pcbX="-1.600073mm"
            pcbY="0.800227mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin185"]}
            pcbX="-0.800227mm"
            pcbY="0.800227mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin186"]}
            pcbX="-0.000127mm"
            pcbY="0.800227mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin187"]}
            pcbX="0.799973mm"
            pcbY="0.800227mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin188"]}
            pcbX="1.599819mm"
            pcbY="0.800227mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin189"]}
            pcbX="3.199765mm"
            pcbY="0.800227mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin190"]}
            pcbX="3.999865mm"
            pcbY="0.800227mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin191"]}
            pcbX="4.799965mm"
            pcbY="0.800227mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin192"]}
            pcbX="5.599811mm"
            pcbY="0.800227mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin193"]}
            pcbX="6.399911mm"
            pcbY="0.800227mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin194"]}
            pcbX="7.200011mm"
            pcbY="0.800227mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin195"]}
            pcbX="-7.200011mm"
            pcbY="1.600073mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin196"]}
            pcbX="-6.400165mm"
            pcbY="1.600073mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin197"]}
            pcbX="-5.600065mm"
            pcbY="1.600073mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin198"]}
            pcbX="-4.800219mm"
            pcbY="1.600073mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin199"]}
            pcbX="-4.000119mm"
            pcbY="1.600073mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin200"]}
            pcbX="-3.200019mm"
            pcbY="1.600073mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin201"]}
            pcbX="-1.600073mm"
            pcbY="1.600073mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin202"]}
            pcbX="-0.800227mm"
            pcbY="1.600073mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin203"]}
            pcbX="-0.000127mm"
            pcbY="1.600073mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin204"]}
            pcbX="0.799973mm"
            pcbY="1.600073mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin205"]}
            pcbX="1.599819mm"
            pcbY="1.600073mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin206"]}
            pcbX="3.199765mm"
            pcbY="1.600073mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin207"]}
            pcbX="3.999865mm"
            pcbY="1.600073mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin208"]}
            pcbX="4.799965mm"
            pcbY="1.600073mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin209"]}
            pcbX="5.599811mm"
            pcbY="1.600073mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin210"]}
            pcbX="6.399911mm"
            pcbY="1.600073mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin211"]}
            pcbX="7.200011mm"
            pcbY="1.600073mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin212"]}
            pcbX="-7.200011mm"
            pcbY="2.400173mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin213"]}
            pcbX="-6.400165mm"
            pcbY="2.400173mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin214"]}
            pcbX="-5.600065mm"
            pcbY="2.400173mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin215"]}
            pcbX="-4.800219mm"
            pcbY="2.400173mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin216"]}
            pcbX="-4.000119mm"
            pcbY="2.400173mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin217"]}
            pcbX="-3.200019mm"
            pcbY="2.400173mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin218"]}
            pcbX="3.199765mm"
            pcbY="2.400173mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin219"]}
            pcbX="3.999865mm"
            pcbY="2.400173mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin220"]}
            pcbX="4.799965mm"
            pcbY="2.400173mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin221"]}
            pcbX="5.599811mm"
            pcbY="2.400173mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin222"]}
            pcbX="6.399911mm"
            pcbY="2.400173mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin223"]}
            pcbX="7.200011mm"
            pcbY="2.400173mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin224"]}
            pcbX="-7.200011mm"
            pcbY="3.200019mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin225"]}
            pcbX="-6.400165mm"
            pcbY="3.200019mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin226"]}
            pcbX="-5.600065mm"
            pcbY="3.200019mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin227"]}
            pcbX="-4.800219mm"
            pcbY="3.200019mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin228"]}
            pcbX="-4.000119mm"
            pcbY="3.200019mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin229"]}
            pcbX="-3.200019mm"
            pcbY="3.200019mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin230"]}
            pcbX="-2.400173mm"
            pcbY="3.200019mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin231"]}
            pcbX="-1.600073mm"
            pcbY="3.200019mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin232"]}
            pcbX="-0.800227mm"
            pcbY="3.200019mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin233"]}
            pcbX="-0.000127mm"
            pcbY="3.200019mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin234"]}
            pcbX="0.799973mm"
            pcbY="3.200019mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin235"]}
            pcbX="1.599819mm"
            pcbY="3.200019mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin236"]}
            pcbX="2.399919mm"
            pcbY="3.200019mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin237"]}
            pcbX="3.199765mm"
            pcbY="3.200019mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin238"]}
            pcbX="3.999865mm"
            pcbY="3.200019mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin239"]}
            pcbX="4.799965mm"
            pcbY="3.200019mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin240"]}
            pcbX="5.599811mm"
            pcbY="3.200019mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin241"]}
            pcbX="6.399911mm"
            pcbY="3.200019mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin242"]}
            pcbX="7.200011mm"
            pcbY="3.200019mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin243"]}
            pcbX="-7.200011mm"
            pcbY="4.000119mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin244"]}
            pcbX="-6.400165mm"
            pcbY="4.000119mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin245"]}
            pcbX="-5.600065mm"
            pcbY="4.000119mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin246"]}
            pcbX="-4.800219mm"
            pcbY="4.000119mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin247"]}
            pcbX="-4.000119mm"
            pcbY="4.000119mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin248"]}
            pcbX="-3.200019mm"
            pcbY="4.000119mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin249"]}
            pcbX="-2.400173mm"
            pcbY="4.000119mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin250"]}
            pcbX="-1.600073mm"
            pcbY="4.000119mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin251"]}
            pcbX="-0.800227mm"
            pcbY="4.000119mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin252"]}
            pcbX="-0.000127mm"
            pcbY="4.000119mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin253"]}
            pcbX="0.799973mm"
            pcbY="4.000119mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin254"]}
            pcbX="1.599819mm"
            pcbY="4.000119mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin255"]}
            pcbX="2.399919mm"
            pcbY="4.000119mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin256"]}
            pcbX="3.199765mm"
            pcbY="4.000119mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin257"]}
            pcbX="3.999865mm"
            pcbY="4.000119mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin258"]}
            pcbX="4.799965mm"
            pcbY="4.000119mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin259"]}
            pcbX="5.599811mm"
            pcbY="4.000119mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin260"]}
            pcbX="6.399911mm"
            pcbY="4.000119mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin261"]}
            pcbX="7.200011mm"
            pcbY="4.000119mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin262"]}
            pcbX="-7.200011mm"
            pcbY="4.800219mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin263"]}
            pcbX="-6.400165mm"
            pcbY="4.800219mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin264"]}
            pcbX="-5.600065mm"
            pcbY="4.800219mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin265"]}
            pcbX="-4.800219mm"
            pcbY="4.800219mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin266"]}
            pcbX="-4.000119mm"
            pcbY="4.800219mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin267"]}
            pcbX="-3.200019mm"
            pcbY="4.800219mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin268"]}
            pcbX="-2.400173mm"
            pcbY="4.800219mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin269"]}
            pcbX="-1.600073mm"
            pcbY="4.800219mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin270"]}
            pcbX="-0.800227mm"
            pcbY="4.800219mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin271"]}
            pcbX="-0.000127mm"
            pcbY="4.800219mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin272"]}
            pcbX="0.799973mm"
            pcbY="4.800219mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin273"]}
            pcbX="1.599819mm"
            pcbY="4.800219mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin274"]}
            pcbX="2.399919mm"
            pcbY="4.800219mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin275"]}
            pcbX="3.199765mm"
            pcbY="4.800219mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin276"]}
            pcbX="3.999865mm"
            pcbY="4.800219mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin277"]}
            pcbX="4.799965mm"
            pcbY="4.800219mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin278"]}
            pcbX="5.599811mm"
            pcbY="4.800219mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin279"]}
            pcbX="6.399911mm"
            pcbY="4.800219mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin280"]}
            pcbX="7.200011mm"
            pcbY="4.800219mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin281"]}
            pcbX="-7.200011mm"
            pcbY="5.600065mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin282"]}
            pcbX="-6.400165mm"
            pcbY="5.600065mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin283"]}
            pcbX="-5.600065mm"
            pcbY="5.600065mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin284"]}
            pcbX="-4.800219mm"
            pcbY="5.600065mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin285"]}
            pcbX="-4.000119mm"
            pcbY="5.600065mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin286"]}
            pcbX="-3.200019mm"
            pcbY="5.600065mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin287"]}
            pcbX="-2.400173mm"
            pcbY="5.600065mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin288"]}
            pcbX="-1.600073mm"
            pcbY="5.600065mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin289"]}
            pcbX="-0.800227mm"
            pcbY="5.600065mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin290"]}
            pcbX="-0.000127mm"
            pcbY="5.600065mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin291"]}
            pcbX="0.799973mm"
            pcbY="5.600065mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin292"]}
            pcbX="1.599819mm"
            pcbY="5.600065mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin293"]}
            pcbX="2.399919mm"
            pcbY="5.600065mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin294"]}
            pcbX="3.199765mm"
            pcbY="5.600065mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin295"]}
            pcbX="3.999865mm"
            pcbY="5.600065mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin296"]}
            pcbX="4.799965mm"
            pcbY="5.600065mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin297"]}
            pcbX="5.599811mm"
            pcbY="5.600065mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin298"]}
            pcbX="6.399911mm"
            pcbY="5.600065mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin299"]}
            pcbX="7.200011mm"
            pcbY="5.600065mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin300"]}
            pcbX="-7.200011mm"
            pcbY="6.400165mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin301"]}
            pcbX="-6.400165mm"
            pcbY="6.400165mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin302"]}
            pcbX="-5.600065mm"
            pcbY="6.400165mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin303"]}
            pcbX="-4.800219mm"
            pcbY="6.400165mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin304"]}
            pcbX="-4.000119mm"
            pcbY="6.400165mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin305"]}
            pcbX="-3.200019mm"
            pcbY="6.400165mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin306"]}
            pcbX="-2.400173mm"
            pcbY="6.400165mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin307"]}
            pcbX="-1.600073mm"
            pcbY="6.400165mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin308"]}
            pcbX="-0.800227mm"
            pcbY="6.400165mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin309"]}
            pcbX="-0.000127mm"
            pcbY="6.400165mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin310"]}
            pcbX="0.799973mm"
            pcbY="6.400165mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin311"]}
            pcbX="1.599819mm"
            pcbY="6.400165mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin312"]}
            pcbX="2.399919mm"
            pcbY="6.400165mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin313"]}
            pcbX="3.199765mm"
            pcbY="6.400165mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin314"]}
            pcbX="3.999865mm"
            pcbY="6.400165mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin315"]}
            pcbX="4.799965mm"
            pcbY="6.400165mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin316"]}
            pcbX="5.599811mm"
            pcbY="6.400165mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin317"]}
            pcbX="6.399911mm"
            pcbY="6.400165mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin318"]}
            pcbX="7.200011mm"
            pcbY="6.400165mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin319"]}
            pcbX="-7.200011mm"
            pcbY="7.200011mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin320"]}
            pcbX="-6.400165mm"
            pcbY="7.200011mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin321"]}
            pcbX="-5.600065mm"
            pcbY="7.200011mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin322"]}
            pcbX="-4.800219mm"
            pcbY="7.200011mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin323"]}
            pcbX="-4.000119mm"
            pcbY="7.200011mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin324"]}
            pcbX="-3.200019mm"
            pcbY="7.200011mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin325"]}
            pcbX="-2.400173mm"
            pcbY="7.200011mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin326"]}
            pcbX="-1.600073mm"
            pcbY="7.200011mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin327"]}
            pcbX="-0.800227mm"
            pcbY="7.200011mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin328"]}
            pcbX="-0.000127mm"
            pcbY="7.200011mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin329"]}
            pcbX="0.799973mm"
            pcbY="7.200011mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin330"]}
            pcbX="1.599819mm"
            pcbY="7.200011mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin331"]}
            pcbX="2.399919mm"
            pcbY="7.200011mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin332"]}
            pcbX="3.199765mm"
            pcbY="7.200011mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin333"]}
            pcbX="3.999865mm"
            pcbY="7.200011mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin334"]}
            pcbX="4.799965mm"
            pcbY="7.200011mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin335"]}
            pcbX="5.599811mm"
            pcbY="7.200011mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin336"]}
            pcbX="6.399911mm"
            pcbY="7.200011mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin337"]}
            pcbX="7.200011mm"
            pcbY="7.200011mm"
            radius="0.1999996mm"
            shape="circle"
          />
          <silkscreenpath
            route={[
              { x: -8.076336399999946, y: -8.076082399999905 },
              { x: -8.076336399999946, y: 8.07633640000006 },
              { x: 8.076082399999905, y: 8.07633640000006 },
              { x: 8.076082399999905, y: -8.076082399999905 },
              { x: -8.076336399999946, y: -8.076082399999905 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -8.304936400000088, y: -7.4360785999999734 },
              { x: -8.304936400000088, y: -8.304682400000047 },
              { x: -7.436332600000014, y: -8.304682400000047 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -7.099935000000187, y: -8.47610700000007 },
              { x: -7.103345007008329, y: -8.502008574757724 },
              { x: -7.113342641690906, y: -8.526145000000042 },
              { x: -7.129246581766097, y: -8.546871418234105 },
              { x: -7.149973000000045, y: -8.562775358309182 },
              { x: -7.174109425242364, y: -8.572772992991759 },
              { x: -7.200011000000131, y: -8.576183000000015 },
              { x: -7.2259125747577855, y: -8.572772992991759 },
              { x: -7.250049000000104, y: -8.562775358309182 },
              { x: -7.270775418234166, y: -8.546871418234105 },
              { x: -7.286679358309243, y: -8.526145000000042 },
              { x: -7.29667699299182, y: -8.502008574757724 },
              { x: -7.300087000000076, y: -8.47610700000007 },
              { x: -7.29667699299182, y: -8.450205425242302 },
              { x: -7.286679358309243, y: -8.42606899999987 },
              { x: -7.270775418234166, y: -8.405342581766035 },
              { x: -7.250049000000104, y: -8.389438641690845 },
              { x: -7.2259125747577855, y: -8.379441007008268 },
              { x: -7.200011000000131, y: -8.376031000000125 },
              { x: -7.174109425242364, y: -8.379441007008268 },
              { x: -7.149973000000045, y: -8.389438641690845 },
              { x: -7.129246581766097, y: -8.405342581766035 },
              { x: -7.113342641690906, y: -8.42606899999987 },
              { x: -7.103345007008329, y: -8.450205425242302 },
              { x: -7.099935000000187, y: -8.47610700000007 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.114427mm"
            pcbY="9.077327mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -8.55592700000011, y: 8.327327000000196 },
              { x: 8.327072999999928, y: 8.327327000000196 },
              { x: 8.327072999999928, y: -8.835072999999852 },
              { x: -8.55592700000011, y: -8.835072999999852 },
              { x: -8.55592700000011, y: 8.327327000000196 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C1345100.obj?uuid=6d7534726bc94785a1a3a0918245f868",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C1345100.step?uuid=6d7534726bc94785a1a3a0918245f868",
        pcbRotationOffset: 90,
        modelOriginPosition: {
          x: -0.00012700000002041634,
          y: -0.00012700000002041634,
          z: -0.6,
        },
      }}
      {...props}
    />
  );
};

export default TMS320F28377DZWTQ;
