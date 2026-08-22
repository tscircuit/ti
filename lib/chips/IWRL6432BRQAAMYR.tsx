import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VSS", "A1", "VSS_A1"],
  pin2: ["VPP", "A2", "VPP_A2"],
  pin3: ["VSS", "A3", "VSS_A3"],
  pin4: ["VSS", "A4", "VSS_A4"],
  pin5: ["VSS", "A5", "VSS_A5"],
  pin6: ["VSSA", "A6", "VSSA_A6"],
  pin7: ["VSSA", "A7", "VSSA_A7"],
  pin8: ["OSC_CLK_OUT", "A8", "OSC_CLK_OUT_A8"],
  pin9: ["VSSA", "A9", "VSSA_A9"],
  pin10: ["VSSA", "A10", "VSSA_A10"],
  pin11: ["VIOIN_18", "B1", "VIOIN_18_B1"],
  pin12: ["VPP", "B2", "VPP_B2"],
  pin13: ["QSPI", "B3", "QSPI_B3"],
  pin14: ["QSPI", "B4", "QSPI_B4"],
  pin15: ["VSSA", "B7", "VSSA_B7"],
  pin16: ["OSC_CLK_OUT", "B8", "OSC_CLK_OUT_B8"],
  pin17: ["VSSA", "B9", "VSSA_B9"],
  pin18: ["CLKM", "B10"],
  pin19: ["VIOIN", "C1", "VIOIN_C1"],
  pin20: ["QSPI", "C2", "QSPI_C2"],
  pin21: ["QSPI", "C3", "QSPI_C3"],
  pin22: ["QSPI", "C4", "QSPI_C4"],
  pin23: ["VDDA_10RF", "C7", "VDDA_10RF_C7"],
  pin24: ["VSSA", "C8", "VSSA_C8"],
  pin25: ["VSSA", "C9", "VSSA_C9"],
  pin26: ["VSSA", "C10", "VSSA_C10"],
  pin27: ["QSPI_CLK", "D2"],
  pin28: ["QSPI_CS", "D3"],
  pin29: ["VIOIN_18CLK", "D7"],
  pin30: ["VSSA", "D8", "VSSA_D8"],
  pin31: ["VSSA", "D9", "VSSA_D9"],
  pin32: ["CLKP", "D10"],
  pin33: ["VSS", "E1", "VSS_E1"],
  pin34: ["TDO", "E2"],
  pin35: ["SPIA_MOSI", "E3"],
  pin36: ["SPIA_MISO", "E4"],
  pin37: ["VSSA", "E7", "VSSA_E7"],
  pin38: ["VSSA", "E8", "VSSA_E8"],
  pin39: ["VSSA", "E9", "VSSA_E9"],
  pin40: ["VSSA", "E10", "VSSA_E10"],
  pin41: ["SPIA_CLK", "F1"],
  pin42: ["TDI", "F2"],
  pin43: ["TCK", "F3"],
  pin44: ["SPIA_CS0_N", "F4"],
  pin45: ["VOUT_14SYNTH", "F7"],
  pin46: ["VSSA", "F8", "VSSA_F8"],
  pin47: ["VDDA_18VCO", "F9", "VDDA_18VCO_F9"],
  pin48: ["VDDA_18VCO", "F10", "VDDA_18VCO_F10"],
  pin49: ["RS232_RX", "G2"],
  pin50: ["TMS", "G3"],
  pin51: ["VOUT_14APLL", "G8"],
  pin52: ["VSSA", "G9", "VSSA_G9"],
  pin53: ["VSSA", "G10", "VSSA_G10"],
  pin54: ["VSS", "H1", "VSS_H1"],
  pin55: ["GPIO_2", "H2"],
  pin56: ["PMIC_CLKOUT", "H3"],
  pin57: ["RS232_TX", "H4"],
  pin58: ["VIN_18PM", "H7", "VIN_18PM_H7"],
  pin59: ["VIN_18PM", "H8", "VIN_18PM_H8"],
  pin60: ["VSSA", "H9", "VSSA_H9"],
  pin61: ["VBGAP", "H10"],
  pin62: ["VIOIN", "J1", "VIOIN_J1"],
  pin63: ["GPIO_5", "J2"],
  pin64: ["UARTA_RX", "J3"],
  pin65: ["NERROR_OUT", "J4"],
  pin66: ["VSSA", "J7", "VSSA_J7"],
  pin67: ["VSSA", "J8", "VSSA_J8"],
  pin68: ["VSSA", "J9", "VSSA_J9"],
  pin69: ["VSSA", "J10", "VSSA_J10"],
  pin70: ["VDD", "K2"],
  pin71: ["UARTA_TX", "K3"],
  pin72: ["VDDA_10RF", "K7", "VDDA_10RF_K7"],
  pin73: ["VDDA_10RF", "K8", "VDDA_10RF_K8"],
  pin74: ["VDDA_10RF", "K9", "VDDA_10RF_K9"],
  pin75: ["VDDA_10RF", "K10", "VDDA_10RF_K10"],
  pin76: ["VIOIN_18", "L1", "VIOIN_18_L1"],
  pin77: ["VIOIN_18", "L2", "VIOIN_18_L2"],
  pin78: ["HOST_CLK_REQ", "L3"],
  pin79: ["UARTA_RTS", "L4"],
  pin80: ["VDDA_12RF", "L7", "VDDA_12RF_L7"],
  pin81: ["VDDA_12RF", "L8", "VDDA_12RF_L8"],
  pin82: ["VDDA_12RF", "L9", "VDDA_12RF_L9"],
  pin83: ["VDDA_12RF", "L10", "VDDA_12RF_L10"],
  pin84: ["VDD_SRAM", "M1"],
  pin85: ["VNWA", "M2", "VNWA_M2"],
  pin86: ["NRESET", "M3", "NRESET_M3"],
  pin87: ["NRESET", "M4", "NRESET_M4"],
  pin88: ["VDDA_18BB", "M7", "VDDA_18BB_M7"],
  pin89: ["VDDA_18BB", "M8", "VDDA_18BB_M8"],
  pin90: ["VDDA_18BB", "M9", "VDDA_18BB_M9"],
  pin91: ["GPADC1", "M10"],
  pin92: ["VSS", "N1", "VSS_N1"],
  pin93: ["VNWA", "N2", "VNWA_N2"],
  pin94: ["VSS", "N3", "VSS_N3"],
  pin95: ["VSS", "N4", "VSS_N4"],
  pin96: ["VSS", "N5", "VSS_N5"],
  pin97: ["VDDA_18BB", "N6", "VDDA_18BB_N6"],
  pin98: ["VDDA_18BB", "N7", "VDDA_18BB_N7"],
  pin99: ["VDDA_18BB", "N8", "VDDA_18BB_N8"],
  pin100: ["VDDA_18BB", "N9", "VDDA_18BB_N9"],
  pin101: ["VDDA_18BB", "N10", "VDDA_18BB_N10"],
} as const;

const pinRoles = {
  pin1: "ground",
  pin2: "power",
  pin3: "ground",
  pin4: "ground",
  pin5: "ground",
  pin6: "ground",
  pin7: "ground",
  pin8: "control",
  pin9: "ground",
  pin10: "ground",
  pin11: "unknown",
  pin12: "power",
  pin13: "output",
  pin14: "output",
  pin15: "ground",
  pin16: "control",
  pin17: "ground",
  pin18: "control",
  pin19: "unknown",
  pin20: "output",
  pin21: "output",
  pin22: "output",
  pin23: "power",
  pin24: "ground",
  pin25: "ground",
  pin26: "ground",
  pin27: "control",
  pin28: "control",
  pin29: "unknown",
  pin30: "ground",
  pin31: "ground",
  pin32: "control",
  pin33: "ground",
  pin34: "unknown",
  pin35: "unknown",
  pin36: "output",
  pin37: "ground",
  pin38: "ground",
  pin39: "ground",
  pin40: "ground",
  pin41: "control",
  pin42: "unknown",
  pin43: "unknown",
  pin44: "control",
  pin45: "output",
  pin46: "ground",
  pin47: "power",
  pin48: "power",
  pin49: "input",
  pin50: "unknown",
  pin51: "output",
  pin52: "ground",
  pin53: "ground",
  pin54: "ground",
  pin55: "bidirectional",
  pin56: "control",
  pin57: "output",
  pin58: "power",
  pin59: "power",
  pin60: "ground",
  pin61: "unknown",
  pin62: "unknown",
  pin63: "bidirectional",
  pin64: "input",
  pin65: "output",
  pin66: "ground",
  pin67: "ground",
  pin68: "ground",
  pin69: "ground",
  pin70: "power",
  pin71: "output",
  pin72: "power",
  pin73: "power",
  pin74: "power",
  pin75: "power",
  pin76: "unknown",
  pin77: "unknown",
  pin78: "control",
  pin79: "unknown",
  pin80: "power",
  pin81: "power",
  pin82: "power",
  pin83: "power",
  pin84: "power",
  pin85: "unknown",
  pin86: "unknown",
  pin87: "unknown",
  pin88: "power",
  pin89: "power",
  pin90: "power",
  pin91: "unknown",
  pin92: "ground",
  pin93: "unknown",
  pin94: "ground",
  pin95: "ground",
  pin96: "ground",
  pin97: "power",
  pin98: "power",
  pin99: "power",
  pin100: "power",
  pin101: "power",
} as const;

const pinAttributes = {
  pin1: { requiresGround: true },
  pin2: { requiresPower: true },
  pin3: { requiresGround: true },
  pin4: { requiresGround: true },
  pin5: { requiresGround: true },
  pin6: { requiresGround: true },
  pin7: { requiresGround: true },
  pin9: { requiresGround: true },
  pin10: { requiresGround: true },
  pin12: { requiresPower: true },
  pin15: { requiresGround: true },
  pin17: { requiresGround: true },
  pin23: { requiresPower: true },
  pin24: { requiresGround: true },
  pin25: { requiresGround: true },
  pin26: { requiresGround: true },
  pin30: { requiresGround: true },
  pin31: { requiresGround: true },
  pin33: { requiresGround: true },
  pin37: { requiresGround: true },
  pin38: { requiresGround: true },
  pin39: { requiresGround: true },
  pin40: { requiresGround: true },
  pin46: { requiresGround: true },
  pin47: { requiresPower: true },
  pin48: { requiresPower: true },
  pin52: { requiresGround: true },
  pin53: { requiresGround: true },
  pin54: { requiresGround: true },
  pin58: { requiresPower: true },
  pin59: { requiresPower: true },
  pin60: { requiresGround: true },
  pin66: { requiresGround: true },
  pin67: { requiresGround: true },
  pin68: { requiresGround: true },
  pin69: { requiresGround: true },
  pin70: { requiresPower: true },
  pin72: { requiresPower: true },
  pin73: { requiresPower: true },
  pin74: { requiresPower: true },
  pin75: { requiresPower: true },
  pin80: { requiresPower: true },
  pin81: { requiresPower: true },
  pin82: { requiresPower: true },
  pin83: { requiresPower: true },
  pin84: { requiresPower: true },
  pin88: { requiresPower: true },
  pin89: { requiresPower: true },
  pin90: { requiresPower: true },
  pin92: { requiresGround: true },
  pin94: { requiresGround: true },
  pin95: { requiresGround: true },
  pin96: { requiresGround: true },
  pin97: { requiresPower: true },
  pin98: { requiresPower: true },
  pin99: { requiresPower: true },
  pin100: { requiresPower: true },
  pin101: { requiresPower: true },
} as const;

export const IWRL6432BRQAAMYR = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing AMY0101A; official source https://www.ti.com/lit/gpn/IWRL6432AOP pages 72,73,74
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="IWRL6432BRQAAMYR"
      footprint={
        <footprint>
          <smtpad
            portHints={["A1"]}
            pcbX="-5.125mm"
            pcbY="3mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["A2"]}
            pcbX="-4.625mm"
            pcbY="3mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["A3"]}
            pcbX="-4.125mm"
            pcbY="3mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["A4"]}
            pcbX="-3.625mm"
            pcbY="3mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["A5"]}
            pcbX="-3.125mm"
            pcbY="3mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["A6"]}
            pcbX="3.125mm"
            pcbY="3mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["A7"]}
            pcbX="3.625mm"
            pcbY="3mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["A8"]}
            pcbX="4.125mm"
            pcbY="3mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["A9"]}
            pcbX="4.625mm"
            pcbY="3mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["A10"]}
            pcbX="5.125mm"
            pcbY="3mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["B1"]}
            pcbX="-5.125mm"
            pcbY="2.5mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["B2"]}
            pcbX="-4.625mm"
            pcbY="2.5mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["B3"]}
            pcbX="-4.125mm"
            pcbY="2.5mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["B4"]}
            pcbX="-3.625mm"
            pcbY="2.5mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["B7"]}
            pcbX="3.625mm"
            pcbY="2.5mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["B8"]}
            pcbX="4.125mm"
            pcbY="2.5mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["B9"]}
            pcbX="4.625mm"
            pcbY="2.5mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["B10"]}
            pcbX="5.125mm"
            pcbY="2.5mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["C1"]}
            pcbX="-5.125mm"
            pcbY="2mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["C2"]}
            pcbX="-4.625mm"
            pcbY="2mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["C3"]}
            pcbX="-4.125mm"
            pcbY="2mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["C4"]}
            pcbX="-3.625mm"
            pcbY="2mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["C7"]}
            pcbX="3.625mm"
            pcbY="2mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["C8"]}
            pcbX="4.125mm"
            pcbY="2mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["C9"]}
            pcbX="4.625mm"
            pcbY="2mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["C10"]}
            pcbX="5.125mm"
            pcbY="2mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["D2"]}
            pcbX="-4.625mm"
            pcbY="1.5mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["D3"]}
            pcbX="-4.125mm"
            pcbY="1.5mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["D7"]}
            pcbX="3.625mm"
            pcbY="1.5mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["D8"]}
            pcbX="4.125mm"
            pcbY="1.5mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["D9"]}
            pcbX="4.625mm"
            pcbY="1.5mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["D10"]}
            pcbX="5.125mm"
            pcbY="1.5mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["E1"]}
            pcbX="-5.125mm"
            pcbY="1mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["E2"]}
            pcbX="-4.625mm"
            pcbY="1mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["E3"]}
            pcbX="-4.125mm"
            pcbY="1mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["E4"]}
            pcbX="-3.625mm"
            pcbY="1mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["E7"]}
            pcbX="3.625mm"
            pcbY="1mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["E8"]}
            pcbX="4.125mm"
            pcbY="1mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["E9"]}
            pcbX="4.625mm"
            pcbY="1mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["E10"]}
            pcbX="5.125mm"
            pcbY="1mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["F1"]}
            pcbX="-5.125mm"
            pcbY="0.5mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["F2"]}
            pcbX="-4.625mm"
            pcbY="0.5mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["F3"]}
            pcbX="-4.125mm"
            pcbY="0.5mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["F4"]}
            pcbX="-3.625mm"
            pcbY="0.5mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["F7"]}
            pcbX="3.625mm"
            pcbY="0.5mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["F8"]}
            pcbX="4.125mm"
            pcbY="0.5mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["F9"]}
            pcbX="4.625mm"
            pcbY="0.5mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["F10"]}
            pcbX="5.125mm"
            pcbY="0.5mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["G2"]}
            pcbX="-4.625mm"
            pcbY="0mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["G3"]}
            pcbX="-4.125mm"
            pcbY="0mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["G8"]}
            pcbX="4.125mm"
            pcbY="0mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["G9"]}
            pcbX="4.625mm"
            pcbY="0mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["G10"]}
            pcbX="5.125mm"
            pcbY="0mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["H1"]}
            pcbX="-5.125mm"
            pcbY="-0.5mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["H2"]}
            pcbX="-4.625mm"
            pcbY="-0.5mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["H3"]}
            pcbX="-4.125mm"
            pcbY="-0.5mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["H4"]}
            pcbX="-3.625mm"
            pcbY="-0.5mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["H7"]}
            pcbX="3.625mm"
            pcbY="-0.5mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["H8"]}
            pcbX="4.125mm"
            pcbY="-0.5mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["H9"]}
            pcbX="4.625mm"
            pcbY="-0.5mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["H10"]}
            pcbX="5.125mm"
            pcbY="-0.5mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["J1"]}
            pcbX="-5.125mm"
            pcbY="-1mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["J2"]}
            pcbX="-4.625mm"
            pcbY="-1mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["J3"]}
            pcbX="-4.125mm"
            pcbY="-1mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["J4"]}
            pcbX="-3.625mm"
            pcbY="-1mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["J7"]}
            pcbX="3.625mm"
            pcbY="-1mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["J8"]}
            pcbX="4.125mm"
            pcbY="-1mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["J9"]}
            pcbX="4.625mm"
            pcbY="-1mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["J10"]}
            pcbX="5.125mm"
            pcbY="-1mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["K2"]}
            pcbX="-4.625mm"
            pcbY="-1.5mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["K3"]}
            pcbX="-4.125mm"
            pcbY="-1.5mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["K7"]}
            pcbX="3.625mm"
            pcbY="-1.5mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["K8"]}
            pcbX="4.125mm"
            pcbY="-1.5mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["K9"]}
            pcbX="4.625mm"
            pcbY="-1.5mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["K10"]}
            pcbX="5.125mm"
            pcbY="-1.5mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["L1"]}
            pcbX="-5.125mm"
            pcbY="-2mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["L2"]}
            pcbX="-4.625mm"
            pcbY="-2mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["L3"]}
            pcbX="-4.125mm"
            pcbY="-2mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["L4"]}
            pcbX="-3.625mm"
            pcbY="-2mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["L7"]}
            pcbX="3.625mm"
            pcbY="-2mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["L8"]}
            pcbX="4.125mm"
            pcbY="-2mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["L9"]}
            pcbX="4.625mm"
            pcbY="-2mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["L10"]}
            pcbX="5.125mm"
            pcbY="-2mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["M1"]}
            pcbX="-5.125mm"
            pcbY="-2.5mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["M2"]}
            pcbX="-4.625mm"
            pcbY="-2.5mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["M3"]}
            pcbX="-4.125mm"
            pcbY="-2.5mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["M4"]}
            pcbX="-3.625mm"
            pcbY="-2.5mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["M7"]}
            pcbX="3.625mm"
            pcbY="-2.5mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["M8"]}
            pcbX="4.125mm"
            pcbY="-2.5mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["M9"]}
            pcbX="4.625mm"
            pcbY="-2.5mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["M10"]}
            pcbX="5.125mm"
            pcbY="-2.5mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["N1"]}
            pcbX="-5.125mm"
            pcbY="-3mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["N2"]}
            pcbX="-4.625mm"
            pcbY="-3mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["N3"]}
            pcbX="-4.125mm"
            pcbY="-3mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["N4"]}
            pcbX="-3.625mm"
            pcbY="-3mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["N5"]}
            pcbX="-3.125mm"
            pcbY="-3mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["N6"]}
            pcbX="3.125mm"
            pcbY="-3mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["N7"]}
            pcbX="3.625mm"
            pcbY="-3mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["N8"]}
            pcbX="4.125mm"
            pcbY="-3mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["N9"]}
            pcbX="4.625mm"
            pcbY="-3mm"
            radius="0.125mm"
            shape="circle"
          />
          <smtpad
            portHints={["N10"]}
            pcbX="5.125mm"
            pcbY="-3mm"
            radius="0.125mm"
            shape="circle"
          />
        </footprint>
      }
      {...props}
    />
  );
};

export default IWRL6432BRQAAMYR;
