import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["TEST", "A1"],
  pin2: ["VMMC1_IN", "A2"],
  pin3: ["CLKEN", "A4"],
  pin4: ["VINTANA2_OUT", "A5", "VINTANA2_OUT_A5"],
  pin5: ["PREDRIV_LEFT", "A7"],
  pin6: ["PREDRIV_RIGHT", "A8"],
  pin7: ["VBAT_RIGHT", "A10"],
  pin8: ["HFCLKIN", "A11"],
  pin9: ["VDD1_GND", "A12", "VDD1_GND_A12"],
  pin10: ["JTAG_TDI", "BERDATA", "A13"],
  pin11: ["TESTV2", "A14"],
  pin12: ["VMMC1_OUT", "B1"],
  pin13: ["KPD_C3", "B2"],
  pin14: ["N_C", "B3"],
  pin15: ["I2C_CNTL_SCL", "B4"],
  pin16: ["IO_1P8", "B7"],
  pin17: ["REGEN", "B8"],
  pin18: ["NRESWARM", "B9"],
  pin19: ["GPIO13", "B10"],
  pin20: ["VDD1_GND", "B11", "VDD1_GND_B11"],
  pin21: ["VDD1_GND", "B12", "VDD1_GND_B12"],
  pin22: ["CLKREQ", "B13"],
  pin23: ["JTAG_TCK", "BERCLK", "B14"],
  pin24: ["I2C_CNTL_SDA", "C3"],
  pin25: ["VMODE2", "C5"],
  pin26: ["AVSS4", "C7"],
  pin27: ["NRESPWRON", "C8"],
  pin28: ["INT1", "C10"],
  pin29: ["VDD1_SW", "C11", "VDD1_SW_C11"],
  pin30: ["VDD1_SW", "C12", "VDD1_SW_C12"],
  pin31: ["VDD1_SW", "C13", "VDD1_SW_C13"],
  pin32: ["MIC_MAIN_P", "D1"],
  pin33: ["MICBIAS_GND", "D2"],
  pin34: ["KPD_C5", "D5"],
  pin35: ["BOOT1", "D7"],
  pin36: ["SYSEN", "D8"],
  pin37: ["PWRON", "D10"],
  pin38: ["VDD1_IN", "D12", "VDD1_IN_D12"],
  pin39: ["VDD1_IN", "D13", "VDD1_IN_D13"],
  pin40: ["VDD1_IN", "D14", "VDD1_IN_D14"],
  pin41: ["MIC_MAIN_M", "E1"],
  pin42: ["MICBIAS1_OUT", "E2"],
  pin43: ["KPD_C4", "E3"],
  pin44: ["VMODE1", "E4"],
  pin45: ["KPD_C2", "E5"],
  pin46: ["GPIO1", "E7"],
  pin47: ["BOOT0", "E8"],
  pin48: ["CLK256FS", "E10"],
  pin49: ["DATA7", "E11"],
  pin50: ["DATA4", "E12"],
  pin51: ["LEDA", "E13"],
  pin52: ["VDD1_FB", "E14"],
  pin53: ["ADCIN2", "F2"],
  pin54: ["GPIO0", "CD1", "F7"],
  pin55: ["LEDGND", "F13"],
  pin56: ["AUXR", "G1"],
  pin57: ["AVSS1", "G2"],
  pin58: ["KPD_C1", "G3"],
  pin59: ["KPD_C0", "G4"],
  pin60: ["NSLEEP1", "G5"],
  pin61: ["ID", "G6"],
  pin62: ["DATA5", "G9"],
  pin63: ["DATA3", "G10"],
  pin64: ["DATA2", "G11"],
  pin65: ["DATA6", "G12"],
  pin66: ["LEDB", "G13"],
  pin67: ["VPLL1_OUT", "G14"],
  pin68: ["VINTANA1_OUT", "H1"],
  pin69: ["ADCIN0", "H2"],
  pin70: ["I2S_CLK", "H3"],
  pin71: ["MSECURE", "H4"],
  pin72: ["KPD_R1", "H5"],
  pin73: ["KPD_R3", "H6"],
  pin74: ["BKBAT", "H9"],
  pin75: ["DGND", "H10"],
  pin76: ["DIR", "H11"],
  pin77: ["STP", "H12"],
  pin78: ["VINT_IN", "H13"],
  pin79: ["VPLLA3R_IN", "H14"],
  pin80: ["VINTANA2_OUT", "J2", "VINTANA2_OUT_J2"],
  pin81: ["GPIO7", "J7"],
  pin82: ["NXT", "J8"],
  pin83: ["VINTDIG_OUT", "J13"],
  pin84: ["VDAC_IN", "K1"],
  pin85: ["I2S_SYNC", "K2"],
  pin86: ["I2S_DOUT", "K3"],
  pin87: ["I2S_DIN", "K4"],
  pin88: ["KPD_R2", "K5"],
  pin89: ["KPD_R0", "K7"],
  pin90: ["KPD_R4", "K8"],
  pin91: ["DATA1", "K10"],
  pin92: ["UCLK", "K11"],
  pin93: ["VRTC_OUT", "K12"],
  pin94: ["AGND", "K13"],
  pin95: ["32KXOUT", "K14"],
  pin96: ["VAUX12S_IN", "L1"],
  pin97: ["VDAC_OUT", "L2"],
  pin98: ["GPIO6", "L5"],
  pin99: ["AVSS2", "L7"],
  pin100: ["KPD_R5", "L8"],
  pin101: ["DATA0", "L10"],
  pin102: ["VREF", "L13"],
  pin103: ["32KXIN", "L14"],
  pin104: ["VIO_IN", "M2", "VIO_IN_M2"],
  pin105: ["VIO_IN", "M3", "VIO_IN_M3"],
  pin106: ["VIO_FB", "M4"],
  pin107: ["PCHGAC", "M5"],
  pin108: ["VINTUSB1P5_OUT", "M7"],
  pin109: ["VUSB_3P1", "M8"],
  pin110: ["32KCLKOUT", "M10"],
  pin111: ["HFCLKOUT", "M11"],
  pin112: ["VDD2_IN", "M12", "VDD2_IN_M12"],
  pin113: ["VDD2_IN", "M13", "VDD2_IN_M13"],
  pin114: ["VPRECH", "N1"],
  pin115: ["VAUX2_OUT", "N2"],
  pin116: ["VIO_GND", "N3", "VIO_GND_N3"],
  pin117: ["VIO_SW", "N4", "VIO_SW_N4"],
  pin118: ["VBAT", "N5"],
  pin119: ["CP_CAPM", "N6"],
  pin120: ["CP_CAPP", "N7"],
  pin121: ["VINTUSB1P8_OUT", "N8"],
  pin122: ["VBAT_USB", "N9"],
  pin123: ["DP", "UART3_RXD", "N10"],
  pin124: ["VDD2_SW", "N11", "VDD2_SW_N11"],
  pin125: ["VDD2_GND", "N12", "VDD2_GND_N12"],
  pin126: ["VDD2_FB", "N13"],
  pin127: ["AVSS3", "N14"],
  pin128: ["TESTV1", "P1"],
  pin129: ["GPIO2", "P2"],
  pin130: ["VIO_GND", "P3", "VIO_GND_P3"],
  pin131: ["VIO_SW", "P4", "VIO_SW_P4"],
  pin132: ["CP_GND", "P5"],
  pin133: ["CP_IN", "P7"],
  pin134: ["VBUS", "P8"],
  pin135: ["DN", "UART3_TXD", "P10"],
  pin136: ["VDD2_SW", "P11", "VDD2_SW_P11"],
  pin137: ["VDD2_GND", "P12", "VDD2_GND_P12"],
  pin138: ["GPIO15", "P13"],
  pin139: ["TEST_RESET", "P14"],
} as const;

const pinRoles = {
  pin1: "control",
  pin2: "power",
  pin3: "output",
  pin4: "power",
  pin5: "output",
  pin6: "output",
  pin7: "power",
  pin8: "input",
  pin9: "ground",
  pin10: "input",
  pin11: "bidirectional",
  pin12: "power",
  pin13: "unknown",
  pin14: "no-connect",
  pin15: "bidirectional",
  pin16: "power",
  pin17: "unknown",
  pin18: "input",
  pin19: "bidirectional",
  pin20: "ground",
  pin21: "ground",
  pin22: "control",
  pin23: "input",
  pin24: "bidirectional",
  pin25: "power",
  pin26: "ground",
  pin27: "output",
  pin28: "output",
  pin29: "output",
  pin30: "output",
  pin31: "output",
  pin32: "input",
  pin33: "ground",
  pin34: "unknown",
  pin35: "control",
  pin36: "input",
  pin37: "input",
  pin38: "power",
  pin39: "power",
  pin40: "power",
  pin41: "input",
  pin42: "power",
  pin43: "unknown",
  pin44: "power",
  pin45: "unknown",
  pin46: "bidirectional",
  pin47: "control",
  pin48: "output",
  pin49: "bidirectional",
  pin50: "bidirectional",
  pin51: "output",
  pin52: "power",
  pin53: "input",
  pin54: "bidirectional",
  pin55: "ground",
  pin56: "input",
  pin57: "ground",
  pin58: "unknown",
  pin59: "unknown",
  pin60: "input",
  pin61: "bidirectional",
  pin62: "bidirectional",
  pin63: "bidirectional",
  pin64: "bidirectional",
  pin65: "bidirectional",
  pin66: "output",
  pin67: "power",
  pin68: "power",
  pin69: "bidirectional",
  pin70: "bidirectional",
  pin71: "input",
  pin72: "input",
  pin73: "input",
  pin74: "power",
  pin75: "ground",
  pin76: "output",
  pin77: "input",
  pin78: "power",
  pin79: "power",
  pin80: "power",
  pin81: "bidirectional",
  pin82: "output",
  pin83: "power",
  pin84: "power",
  pin85: "bidirectional",
  pin86: "output",
  pin87: "input",
  pin88: "input",
  pin89: "input",
  pin90: "input",
  pin91: "bidirectional",
  pin92: "input",
  pin93: "power",
  pin94: "ground",
  pin95: "output",
  pin96: "power",
  pin97: "output",
  pin98: "bidirectional",
  pin99: "ground",
  pin100: "input",
  pin101: "bidirectional",
  pin102: "power",
  pin103: "input",
  pin104: "power",
  pin105: "power",
  pin106: "input",
  pin107: "input",
  pin108: "power",
  pin109: "power",
  pin110: "output",
  pin111: "output",
  pin112: "power",
  pin113: "power",
  pin114: "output",
  pin115: "power",
  pin116: "ground",
  pin117: "output",
  pin118: "power",
  pin119: "output",
  pin120: "output",
  pin121: "power",
  pin122: "power",
  pin123: "bidirectional",
  pin124: "output",
  pin125: "ground",
  pin126: "power",
  pin127: "ground",
  pin128: "bidirectional",
  pin129: "bidirectional",
  pin130: "ground",
  pin131: "output",
  pin132: "ground",
  pin133: "power",
  pin134: "power",
  pin135: "bidirectional",
  pin136: "output",
  pin137: "ground",
  pin138: "bidirectional",
  pin139: "control",
} as const;

const pinAttributes = {
  pin2: { requiresPower: true },
  pin4: { requiresPower: true },
  pin7: { requiresPower: true },
  pin9: { requiresGround: true },
  pin12: { requiresPower: true },
  pin14: { doNotConnect: true },
  pin16: { requiresPower: true },
  pin20: { requiresGround: true },
  pin21: { requiresGround: true },
  pin25: { requiresPower: true },
  pin26: { requiresGround: true },
  pin33: { requiresGround: true },
  pin38: { requiresPower: true },
  pin39: { requiresPower: true },
  pin40: { requiresPower: true },
  pin42: { requiresPower: true },
  pin44: { requiresPower: true },
  pin52: { requiresPower: true },
  pin55: { requiresGround: true },
  pin57: { requiresGround: true },
  pin67: { requiresPower: true },
  pin68: { requiresPower: true },
  pin74: { requiresPower: true },
  pin75: { requiresGround: true },
  pin78: { requiresPower: true },
  pin79: { requiresPower: true },
  pin80: { requiresPower: true },
  pin83: { requiresPower: true },
  pin84: { requiresPower: true },
  pin93: { requiresPower: true },
  pin94: { requiresGround: true },
  pin96: { requiresPower: true },
  pin99: { requiresGround: true },
  pin102: { requiresPower: true },
  pin104: { requiresPower: true },
  pin105: { requiresPower: true },
  pin108: { requiresPower: true },
  pin109: { requiresPower: true },
  pin112: { requiresPower: true },
  pin113: { requiresPower: true },
  pin115: { requiresPower: true },
  pin116: { requiresGround: true },
  pin118: { requiresPower: true },
  pin121: { requiresPower: true },
  pin122: { requiresPower: true },
  pin125: { requiresGround: true },
  pin126: { requiresPower: true },
  pin127: { requiresGround: true },
  pin130: { requiresGround: true },
  pin132: { requiresGround: true },
  pin133: { requiresPower: true },
  pin134: { requiresPower: true },
  pin137: { requiresGround: true },
} as const;

export const TPS65930A2ZCHR = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing ZCH0139A; official source https://www.ti.com/packaging/tw/docs/searchproductbypackage.tsp?orderablePartNumber=&packageDesignator=ZCH&pinCount=139&results=results
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="TPS65930A2ZCHR"
      footprint={
        <footprint>
          <smtpad
            portHints={["A1"]}
            pcbX="-4.225mm"
            pcbY="4.225mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["A2"]}
            pcbX="-3.575mm"
            pcbY="4.225mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["A4"]}
            pcbX="-2.275mm"
            pcbY="4.225mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["A5"]}
            pcbX="-1.625mm"
            pcbY="4.225mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["A7"]}
            pcbX="-0.325mm"
            pcbY="4.225mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["A8"]}
            pcbX="0.325mm"
            pcbY="4.225mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["A10"]}
            pcbX="1.625mm"
            pcbY="4.225mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["A11"]}
            pcbX="2.275mm"
            pcbY="4.225mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["A12"]}
            pcbX="2.925mm"
            pcbY="4.225mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["A13"]}
            pcbX="3.575mm"
            pcbY="4.225mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["A14"]}
            pcbX="4.225mm"
            pcbY="4.225mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["B1"]}
            pcbX="-4.225mm"
            pcbY="3.575mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["B2"]}
            pcbX="-3.575mm"
            pcbY="3.575mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["B3"]}
            pcbX="-2.925mm"
            pcbY="3.575mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["B4"]}
            pcbX="-2.275mm"
            pcbY="3.575mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["B7"]}
            pcbX="-0.325mm"
            pcbY="3.575mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["B8"]}
            pcbX="0.325mm"
            pcbY="3.575mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["B9"]}
            pcbX="0.975mm"
            pcbY="3.575mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["B10"]}
            pcbX="1.625mm"
            pcbY="3.575mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["B11"]}
            pcbX="2.275mm"
            pcbY="3.575mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["B12"]}
            pcbX="2.925mm"
            pcbY="3.575mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["B13"]}
            pcbX="3.575mm"
            pcbY="3.575mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["B14"]}
            pcbX="4.225mm"
            pcbY="3.575mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["C3"]}
            pcbX="-2.925mm"
            pcbY="2.925mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["C5"]}
            pcbX="-1.625mm"
            pcbY="2.925mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["C7"]}
            pcbX="-0.325mm"
            pcbY="2.925mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["C8"]}
            pcbX="0.325mm"
            pcbY="2.925mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["C10"]}
            pcbX="1.625mm"
            pcbY="2.925mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["C11"]}
            pcbX="2.275mm"
            pcbY="2.925mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["C12"]}
            pcbX="2.925mm"
            pcbY="2.925mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["C13"]}
            pcbX="3.575mm"
            pcbY="2.925mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["D1"]}
            pcbX="-4.225mm"
            pcbY="2.275mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["D2"]}
            pcbX="-3.575mm"
            pcbY="2.275mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["D5"]}
            pcbX="-1.625mm"
            pcbY="2.275mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["D7"]}
            pcbX="-0.325mm"
            pcbY="2.275mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["D8"]}
            pcbX="0.325mm"
            pcbY="2.275mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["D10"]}
            pcbX="1.625mm"
            pcbY="2.275mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["D12"]}
            pcbX="2.925mm"
            pcbY="2.275mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["D13"]}
            pcbX="3.575mm"
            pcbY="2.275mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["D14"]}
            pcbX="4.225mm"
            pcbY="2.275mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["E1"]}
            pcbX="-4.225mm"
            pcbY="1.625mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["E2"]}
            pcbX="-3.575mm"
            pcbY="1.625mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["E3"]}
            pcbX="-2.925mm"
            pcbY="1.625mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["E4"]}
            pcbX="-2.275mm"
            pcbY="1.625mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["E5"]}
            pcbX="-1.625mm"
            pcbY="1.625mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["E7"]}
            pcbX="-0.325mm"
            pcbY="1.625mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["E8"]}
            pcbX="0.325mm"
            pcbY="1.625mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["E10"]}
            pcbX="1.625mm"
            pcbY="1.625mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["E11"]}
            pcbX="2.275mm"
            pcbY="1.625mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["E12"]}
            pcbX="2.925mm"
            pcbY="1.625mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["E13"]}
            pcbX="3.575mm"
            pcbY="1.625mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["E14"]}
            pcbX="4.225mm"
            pcbY="1.625mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["F2"]}
            pcbX="-3.575mm"
            pcbY="0.975mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["F7"]}
            pcbX="-0.325mm"
            pcbY="0.975mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["F13"]}
            pcbX="3.575mm"
            pcbY="0.975mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["G1"]}
            pcbX="-4.225mm"
            pcbY="0.325mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["G2"]}
            pcbX="-3.575mm"
            pcbY="0.325mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["G3"]}
            pcbX="-2.925mm"
            pcbY="0.325mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["G4"]}
            pcbX="-2.275mm"
            pcbY="0.325mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["G5"]}
            pcbX="-1.625mm"
            pcbY="0.325mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["G6"]}
            pcbX="-0.975mm"
            pcbY="0.325mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["G9"]}
            pcbX="0.975mm"
            pcbY="0.325mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["G10"]}
            pcbX="1.625mm"
            pcbY="0.325mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["G11"]}
            pcbX="2.275mm"
            pcbY="0.325mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["G12"]}
            pcbX="2.925mm"
            pcbY="0.325mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["G13"]}
            pcbX="3.575mm"
            pcbY="0.325mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["G14"]}
            pcbX="4.225mm"
            pcbY="0.325mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["H1"]}
            pcbX="-4.225mm"
            pcbY="-0.325mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["H2"]}
            pcbX="-3.575mm"
            pcbY="-0.325mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["H3"]}
            pcbX="-2.925mm"
            pcbY="-0.325mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["H4"]}
            pcbX="-2.275mm"
            pcbY="-0.325mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["H5"]}
            pcbX="-1.625mm"
            pcbY="-0.325mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["H6"]}
            pcbX="-0.975mm"
            pcbY="-0.325mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["H9"]}
            pcbX="0.975mm"
            pcbY="-0.325mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["H10"]}
            pcbX="1.625mm"
            pcbY="-0.325mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["H11"]}
            pcbX="2.275mm"
            pcbY="-0.325mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["H12"]}
            pcbX="2.925mm"
            pcbY="-0.325mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["H13"]}
            pcbX="3.575mm"
            pcbY="-0.325mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["H14"]}
            pcbX="4.225mm"
            pcbY="-0.325mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["J2"]}
            pcbX="-3.575mm"
            pcbY="-0.975mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["J7"]}
            pcbX="-0.325mm"
            pcbY="-0.975mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["J8"]}
            pcbX="0.325mm"
            pcbY="-0.975mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["J13"]}
            pcbX="3.575mm"
            pcbY="-0.975mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["K1"]}
            pcbX="-4.225mm"
            pcbY="-1.625mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["K2"]}
            pcbX="-3.575mm"
            pcbY="-1.625mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["K3"]}
            pcbX="-2.925mm"
            pcbY="-1.625mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["K4"]}
            pcbX="-2.275mm"
            pcbY="-1.625mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["K5"]}
            pcbX="-1.625mm"
            pcbY="-1.625mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["K7"]}
            pcbX="-0.325mm"
            pcbY="-1.625mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["K8"]}
            pcbX="0.325mm"
            pcbY="-1.625mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["K10"]}
            pcbX="1.625mm"
            pcbY="-1.625mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["K11"]}
            pcbX="2.275mm"
            pcbY="-1.625mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["K12"]}
            pcbX="2.925mm"
            pcbY="-1.625mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["K13"]}
            pcbX="3.575mm"
            pcbY="-1.625mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["K14"]}
            pcbX="4.225mm"
            pcbY="-1.625mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["L1"]}
            pcbX="-4.225mm"
            pcbY="-2.275mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["L2"]}
            pcbX="-3.575mm"
            pcbY="-2.275mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["L5"]}
            pcbX="-1.625mm"
            pcbY="-2.275mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["L7"]}
            pcbX="-0.325mm"
            pcbY="-2.275mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["L8"]}
            pcbX="0.325mm"
            pcbY="-2.275mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["L10"]}
            pcbX="1.625mm"
            pcbY="-2.275mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["L13"]}
            pcbX="3.575mm"
            pcbY="-2.275mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["L14"]}
            pcbX="4.225mm"
            pcbY="-2.275mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["M2"]}
            pcbX="-3.575mm"
            pcbY="-2.925mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["M3"]}
            pcbX="-2.925mm"
            pcbY="-2.925mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["M4"]}
            pcbX="-2.275mm"
            pcbY="-2.925mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["M5"]}
            pcbX="-1.625mm"
            pcbY="-2.925mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["M7"]}
            pcbX="-0.325mm"
            pcbY="-2.925mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["M8"]}
            pcbX="0.325mm"
            pcbY="-2.925mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["M10"]}
            pcbX="1.625mm"
            pcbY="-2.925mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["M11"]}
            pcbX="2.275mm"
            pcbY="-2.925mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["M12"]}
            pcbX="2.925mm"
            pcbY="-2.925mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["M13"]}
            pcbX="3.575mm"
            pcbY="-2.925mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["N1"]}
            pcbX="-4.225mm"
            pcbY="-3.575mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["N2"]}
            pcbX="-3.575mm"
            pcbY="-3.575mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["N3"]}
            pcbX="-2.925mm"
            pcbY="-3.575mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["N4"]}
            pcbX="-2.275mm"
            pcbY="-3.575mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["N5"]}
            pcbX="-1.625mm"
            pcbY="-3.575mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["N6"]}
            pcbX="-0.975mm"
            pcbY="-3.575mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["N7"]}
            pcbX="-0.325mm"
            pcbY="-3.575mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["N8"]}
            pcbX="0.325mm"
            pcbY="-3.575mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["N9"]}
            pcbX="0.975mm"
            pcbY="-3.575mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["N10"]}
            pcbX="1.625mm"
            pcbY="-3.575mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["N11"]}
            pcbX="2.275mm"
            pcbY="-3.575mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["N12"]}
            pcbX="2.925mm"
            pcbY="-3.575mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["N13"]}
            pcbX="3.575mm"
            pcbY="-3.575mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["N14"]}
            pcbX="4.225mm"
            pcbY="-3.575mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["P1"]}
            pcbX="-4.225mm"
            pcbY="-4.225mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["P2"]}
            pcbX="-3.575mm"
            pcbY="-4.225mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["P3"]}
            pcbX="-2.925mm"
            pcbY="-4.225mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["P4"]}
            pcbX="-2.275mm"
            pcbY="-4.225mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["P5"]}
            pcbX="-1.625mm"
            pcbY="-4.225mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["P7"]}
            pcbX="-0.325mm"
            pcbY="-4.225mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["P8"]}
            pcbX="0.325mm"
            pcbY="-4.225mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["P10"]}
            pcbX="1.625mm"
            pcbY="-4.225mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["P11"]}
            pcbX="2.275mm"
            pcbY="-4.225mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["P12"]}
            pcbX="2.925mm"
            pcbY="-4.225mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["P13"]}
            pcbX="3.575mm"
            pcbY="-4.225mm"
            radius="0.175mm"
            shape="circle"
          />
          <smtpad
            portHints={["P14"]}
            pcbX="4.225mm"
            pcbY="-4.225mm"
            radius="0.175mm"
            shape="circle"
          />
        </footprint>
      }
      {...props}
    />
  );
};

export default TPS65930A2ZCHR;
