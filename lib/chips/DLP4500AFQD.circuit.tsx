import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["DATA_0", "A1"],
  pin2: ["DATA_1", "A2"],
  pin3: ["DATA_2", "A3"],
  pin4: ["DATA_3", "A4"],
  pin5: ["UNUSED", "A5", "UNUSED_A5"],
  pin6: ["UNUSED", "A18", "UNUSED_A18"],
  pin7: ["VOFFSET", "A19", "VOFFSET_A19"],
  pin8: ["DRC_OE", "A20"],
  pin9: ["VSS", "A21", "VSS_A21"],
  pin10: ["DRC_STROBE", "A22"],
  pin11: ["DATA_4", "B1"],
  pin12: ["VSS", "B2", "VSS_B2"],
  pin13: ["DATA_5", "B3"],
  pin14: ["VSS", "B4", "VSS_B4"],
  pin15: ["UNUSED", "B5", "UNUSED_B5"],
  pin16: ["UNUSED", "B18", "UNUSED_B18"],
  pin17: ["VREF", "B19", "VREF_B19"],
  pin18: ["VSS", "B20", "VSS_B20"],
  pin19: ["DRC_BUS", "B21"],
  pin20: ["VCC", "B22", "VCC_B22"],
  pin21: ["DATA_6", "C1"],
  pin22: ["VCC", "C2", "VCC_C2"],
  pin23: ["DATA_7", "C3"],
  pin24: ["DATA_8", "C4"],
  pin25: ["UNUSED", "C5", "UNUSED_C5"],
  pin26: ["UNUSED", "C18", "UNUSED_C18"],
  pin27: ["VBIAS", "C19", "VBIAS_C19"],
  pin28: ["SAC_BUS", "C20"],
  pin29: ["VSS", "C21", "VSS_C21"],
  pin30: ["SAC_CLK", "C22"],
  pin31: ["DATA_9", "D1"],
  pin32: ["VSS", "D2", "VSS_D2"],
  pin33: ["VSS", "D3", "VSS_D3"],
  pin34: ["DATA_10", "D4"],
  pin35: ["UNUSED", "D5", "UNUSED_D5"],
  pin36: ["UNUSED", "D18", "UNUSED_D18"],
  pin37: ["VBIAS", "D19", "VBIAS_D19"],
  pin38: ["VSS", "D20", "VSS_D20"],
  pin39: ["VCC", "D21", "VCC_D21"],
  pin40: ["VSS", "D22", "VSS_D22"],
  pin41: ["DATA_11", "E1"],
  pin42: ["VCC", "E2", "VCC_E2"],
  pin43: ["VSS", "E3", "VSS_E3"],
  pin44: ["DATA_12", "E4"],
  pin45: ["UNUSED", "E5", "UNUSED_E5"],
  pin46: ["UNUSED", "E18", "UNUSED_E18"],
  pin47: ["VRESET", "E19", "VRESET_E19"],
  pin48: ["VCC", "E20", "VCC_E20"],
  pin49: ["VSS", "E21", "VSS_E21"],
  pin50: ["VCC", "E22", "VCC_E22"],
  pin51: ["DATA_13", "F1"],
  pin52: ["VSS", "F2", "VSS_F2"],
  pin53: ["DATA_14", "F3"],
  pin54: ["VSS", "F4", "VSS_F4"],
  pin55: ["UNUSED", "F5", "UNUSED_F5"],
  pin56: ["UNUSED", "F18", "UNUSED_F18"],
  pin57: ["VRESET", "F19", "VRESET_F19"],
  pin58: ["VSS", "F20", "VSS_F20"],
  pin59: ["VCC", "F21", "VCC_F21"],
  pin60: ["VSS", "F22", "VSS_F22"],
  pin61: ["DATA_15", "G1"],
  pin62: ["DATA_16", "G2"],
  pin63: ["VCC", "G3", "VCC_G3"],
  pin64: ["DATA_17", "G4"],
  pin65: ["UNUSED", "G5", "UNUSED_G5"],
  pin66: ["UNUSED", "G18", "UNUSED_G18"],
  pin67: ["VCC", "G19", "VCC_G19"],
  pin68: ["VCC", "G20", "VCC_G20"],
  pin69: ["VSS", "G21", "VSS_G21"],
  pin70: ["VCC", "G22", "VCC_G22"],
  pin71: ["DATA_18", "H1"],
  pin72: ["DATA_19", "H2"],
  pin73: ["VSS", "H3", "VSS_H3"],
  pin74: ["DATA_20", "H4"],
  pin75: ["UNUSED", "H5", "UNUSED_H5"],
  pin76: ["UNUSED", "H18", "UNUSED_H18"],
  pin77: ["VCC", "H19", "VCC_H19"],
  pin78: ["VSS", "H20", "VSS_H20"],
  pin79: ["VCC", "H21", "VCC_H21"],
  pin80: ["VSS", "H22", "VSS_H22"],
  pin81: ["DATA_21", "J1"],
  pin82: ["VSS", "J2", "VSS_J2"],
  pin83: ["DATA_22", "J3"],
  pin84: ["DATA_23", "J4"],
  pin85: ["UNUSED", "J5", "UNUSED_J5"],
  pin86: ["UNUSED", "J18", "UNUSED_J18"],
  pin87: ["VREF", "J19", "VREF_J19"],
  pin88: ["VCC", "J20", "VCC_J20"],
  pin89: ["VSS", "J21", "VSS_J21"],
  pin90: ["VCC", "J22", "VCC_J22"],
  pin91: ["DCLK", "K1"],
  pin92: ["LOADB", "K2"],
  pin93: ["SCTRL", "K3"],
  pin94: ["TRC", "K4"],
  pin95: ["VOFFSET", "K19", "VOFFSET_K19"],
  pin96: ["VSS", "K20", "VSS_K20"],
  pin97: ["VCC", "K21", "VCC_K21"],
  pin98: ["UNUSED", "K22", "UNUSED_K22"],
} as const;

const pinRoles = {
  pin1: "bidirectional",
  pin2: "bidirectional",
  pin3: "bidirectional",
  pin4: "bidirectional",
  pin5: "no-connect",
  pin6: "no-connect",
  pin7: "power",
  pin8: "control",
  pin9: "ground",
  pin10: "input",
  pin11: "bidirectional",
  pin12: "ground",
  pin13: "bidirectional",
  pin14: "ground",
  pin15: "no-connect",
  pin16: "no-connect",
  pin17: "power",
  pin18: "ground",
  pin19: "input",
  pin20: "power",
  pin21: "bidirectional",
  pin22: "power",
  pin23: "bidirectional",
  pin24: "bidirectional",
  pin25: "no-connect",
  pin26: "no-connect",
  pin27: "power",
  pin28: "input",
  pin29: "ground",
  pin30: "control",
  pin31: "bidirectional",
  pin32: "ground",
  pin33: "ground",
  pin34: "bidirectional",
  pin35: "no-connect",
  pin36: "no-connect",
  pin37: "power",
  pin38: "ground",
  pin39: "power",
  pin40: "ground",
  pin41: "bidirectional",
  pin42: "power",
  pin43: "ground",
  pin44: "bidirectional",
  pin45: "no-connect",
  pin46: "no-connect",
  pin47: "power",
  pin48: "power",
  pin49: "ground",
  pin50: "power",
  pin51: "bidirectional",
  pin52: "ground",
  pin53: "bidirectional",
  pin54: "ground",
  pin55: "no-connect",
  pin56: "no-connect",
  pin57: "power",
  pin58: "ground",
  pin59: "power",
  pin60: "ground",
  pin61: "bidirectional",
  pin62: "bidirectional",
  pin63: "power",
  pin64: "bidirectional",
  pin65: "no-connect",
  pin66: "no-connect",
  pin67: "power",
  pin68: "power",
  pin69: "ground",
  pin70: "power",
  pin71: "bidirectional",
  pin72: "bidirectional",
  pin73: "ground",
  pin74: "bidirectional",
  pin75: "no-connect",
  pin76: "no-connect",
  pin77: "power",
  pin78: "ground",
  pin79: "power",
  pin80: "ground",
  pin81: "bidirectional",
  pin82: "ground",
  pin83: "bidirectional",
  pin84: "bidirectional",
  pin85: "no-connect",
  pin86: "no-connect",
  pin87: "power",
  pin88: "power",
  pin89: "ground",
  pin90: "power",
  pin91: "input",
  pin92: "input",
  pin93: "input",
  pin94: "input",
  pin95: "power",
  pin96: "ground",
  pin97: "power",
  pin98: "no-connect",
} as const;

const pinAttributes = {
  pin5: { doNotConnect: true },
  pin6: { doNotConnect: true },
  pin7: { requiresPower: true },
  pin9: { requiresGround: true },
  pin12: { requiresGround: true },
  pin14: { requiresGround: true },
  pin15: { doNotConnect: true },
  pin16: { doNotConnect: true },
  pin17: { requiresPower: true },
  pin18: { requiresGround: true },
  pin20: { requiresPower: true },
  pin22: { requiresPower: true },
  pin25: { doNotConnect: true },
  pin26: { doNotConnect: true },
  pin27: { requiresPower: true },
  pin29: { requiresGround: true },
  pin32: { requiresGround: true },
  pin33: { requiresGround: true },
  pin35: { doNotConnect: true },
  pin36: { doNotConnect: true },
  pin37: { requiresPower: true },
  pin38: { requiresGround: true },
  pin39: { requiresPower: true },
  pin40: { requiresGround: true },
  pin42: { requiresPower: true },
  pin43: { requiresGround: true },
  pin45: { doNotConnect: true },
  pin46: { doNotConnect: true },
  pin47: { requiresPower: true },
  pin48: { requiresPower: true },
  pin49: { requiresGround: true },
  pin50: { requiresPower: true },
  pin52: { requiresGround: true },
  pin54: { requiresGround: true },
  pin55: { doNotConnect: true },
  pin56: { doNotConnect: true },
  pin57: { requiresPower: true },
  pin58: { requiresGround: true },
  pin59: { requiresPower: true },
  pin60: { requiresGround: true },
  pin63: { requiresPower: true },
  pin65: { doNotConnect: true },
  pin66: { doNotConnect: true },
  pin67: { requiresPower: true },
  pin68: { requiresPower: true },
  pin69: { requiresGround: true },
  pin70: { requiresPower: true },
  pin73: { requiresGround: true },
  pin75: { doNotConnect: true },
  pin76: { doNotConnect: true },
  pin77: { requiresPower: true },
  pin78: { requiresGround: true },
  pin79: { requiresPower: true },
  pin80: { requiresGround: true },
  pin82: { requiresGround: true },
  pin85: { doNotConnect: true },
  pin86: { doNotConnect: true },
  pin87: { requiresPower: true },
  pin88: { requiresPower: true },
  pin89: { requiresGround: true },
  pin90: { requiresPower: true },
  pin95: { requiresPower: true },
  pin96: { requiresGround: true },
  pin97: { requiresPower: true },
  pin98: { doNotConnect: true },
} as const;

export const DLP4500AFQD = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing FQD-2510852; official source https://www.ti.com/lit/gpn/DLP4500 pages 50,51,52
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="DLP4500AFQD"
      footprint={
        <footprint>
          <smtpad
            portHints={["A1"]}
            pcbX="-3.339mm"
            pcbY="-6.307mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["A2"]}
            pcbX="-3.339mm"
            pcbY="-5.565mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["A3"]}
            pcbX="-3.339mm"
            pcbY="-4.823mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["A4"]}
            pcbX="-3.339mm"
            pcbY="-4.081mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["A5"]}
            pcbX="-3.339mm"
            pcbY="-3.339mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["A18"]}
            pcbX="-3.339mm"
            pcbY="3.339mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["A19"]}
            pcbX="-3.339mm"
            pcbY="4.081mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["A20"]}
            pcbX="-3.339mm"
            pcbY="4.823mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["A21"]}
            pcbX="-3.339mm"
            pcbY="5.565mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["A22"]}
            pcbX="-3.339mm"
            pcbY="6.307mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["B1"]}
            pcbX="-2.597mm"
            pcbY="-6.307mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["B2"]}
            pcbX="-2.597mm"
            pcbY="-5.565mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["B3"]}
            pcbX="-2.597mm"
            pcbY="-4.823mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["B4"]}
            pcbX="-2.597mm"
            pcbY="-4.081mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["B5"]}
            pcbX="-2.597mm"
            pcbY="-3.339mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["B18"]}
            pcbX="-2.597mm"
            pcbY="3.339mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["B19"]}
            pcbX="-2.597mm"
            pcbY="4.081mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["B20"]}
            pcbX="-2.597mm"
            pcbY="4.823mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["B21"]}
            pcbX="-2.597mm"
            pcbY="5.565mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["B22"]}
            pcbX="-2.597mm"
            pcbY="6.307mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["C1"]}
            pcbX="-1.855mm"
            pcbY="-6.307mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["C2"]}
            pcbX="-1.855mm"
            pcbY="-5.565mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["C3"]}
            pcbX="-1.855mm"
            pcbY="-4.823mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["C4"]}
            pcbX="-1.855mm"
            pcbY="-4.081mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["C5"]}
            pcbX="-1.855mm"
            pcbY="-3.339mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["C18"]}
            pcbX="-1.855mm"
            pcbY="3.339mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["C19"]}
            pcbX="-1.855mm"
            pcbY="4.081mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["C20"]}
            pcbX="-1.855mm"
            pcbY="4.823mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["C21"]}
            pcbX="-1.855mm"
            pcbY="5.565mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["C22"]}
            pcbX="-1.855mm"
            pcbY="6.307mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["D1"]}
            pcbX="-1.113mm"
            pcbY="-6.307mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["D2"]}
            pcbX="-1.113mm"
            pcbY="-5.565mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["D3"]}
            pcbX="-1.113mm"
            pcbY="-4.823mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["D4"]}
            pcbX="-1.113mm"
            pcbY="-4.081mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["D5"]}
            pcbX="-1.113mm"
            pcbY="-3.339mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["D18"]}
            pcbX="-1.113mm"
            pcbY="3.339mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["D19"]}
            pcbX="-1.113mm"
            pcbY="4.081mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["D20"]}
            pcbX="-1.113mm"
            pcbY="4.823mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["D21"]}
            pcbX="-1.113mm"
            pcbY="5.565mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["D22"]}
            pcbX="-1.113mm"
            pcbY="6.307mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["E1"]}
            pcbX="-0.371mm"
            pcbY="-6.307mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["E2"]}
            pcbX="-0.371mm"
            pcbY="-5.565mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["E3"]}
            pcbX="-0.371mm"
            pcbY="-4.823mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["E4"]}
            pcbX="-0.371mm"
            pcbY="-4.081mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["E5"]}
            pcbX="-0.371mm"
            pcbY="-3.339mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["E18"]}
            pcbX="-0.371mm"
            pcbY="3.339mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["E19"]}
            pcbX="-0.371mm"
            pcbY="4.081mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["E20"]}
            pcbX="-0.371mm"
            pcbY="4.823mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["E21"]}
            pcbX="-0.371mm"
            pcbY="5.565mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["E22"]}
            pcbX="-0.371mm"
            pcbY="6.307mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["F1"]}
            pcbX="0.371mm"
            pcbY="-6.307mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["F2"]}
            pcbX="0.371mm"
            pcbY="-5.565mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["F3"]}
            pcbX="0.371mm"
            pcbY="-4.823mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["F4"]}
            pcbX="0.371mm"
            pcbY="-4.081mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["F5"]}
            pcbX="0.371mm"
            pcbY="-3.339mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["F18"]}
            pcbX="0.371mm"
            pcbY="3.339mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["F19"]}
            pcbX="0.371mm"
            pcbY="4.081mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["F20"]}
            pcbX="0.371mm"
            pcbY="4.823mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["F21"]}
            pcbX="0.371mm"
            pcbY="5.565mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["F22"]}
            pcbX="0.371mm"
            pcbY="6.307mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["G1"]}
            pcbX="1.113mm"
            pcbY="-6.307mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["G2"]}
            pcbX="1.113mm"
            pcbY="-5.565mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["G3"]}
            pcbX="1.113mm"
            pcbY="-4.823mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["G4"]}
            pcbX="1.113mm"
            pcbY="-4.081mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["G5"]}
            pcbX="1.113mm"
            pcbY="-3.339mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["G18"]}
            pcbX="1.113mm"
            pcbY="3.339mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["G19"]}
            pcbX="1.113mm"
            pcbY="4.081mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["G20"]}
            pcbX="1.113mm"
            pcbY="4.823mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["G21"]}
            pcbX="1.113mm"
            pcbY="5.565mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["G22"]}
            pcbX="1.113mm"
            pcbY="6.307mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["H1"]}
            pcbX="1.855mm"
            pcbY="-6.307mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["H2"]}
            pcbX="1.855mm"
            pcbY="-5.565mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["H3"]}
            pcbX="1.855mm"
            pcbY="-4.823mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["H4"]}
            pcbX="1.855mm"
            pcbY="-4.081mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["H5"]}
            pcbX="1.855mm"
            pcbY="-3.339mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["H18"]}
            pcbX="1.855mm"
            pcbY="3.339mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["H19"]}
            pcbX="1.855mm"
            pcbY="4.081mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["H20"]}
            pcbX="1.855mm"
            pcbY="4.823mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["H21"]}
            pcbX="1.855mm"
            pcbY="5.565mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["H22"]}
            pcbX="1.855mm"
            pcbY="6.307mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["J1"]}
            pcbX="2.597mm"
            pcbY="-6.307mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["J2"]}
            pcbX="2.597mm"
            pcbY="-5.565mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["J3"]}
            pcbX="2.597mm"
            pcbY="-4.823mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["J4"]}
            pcbX="2.597mm"
            pcbY="-4.081mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["J5"]}
            pcbX="2.597mm"
            pcbY="-3.339mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["J18"]}
            pcbX="2.597mm"
            pcbY="3.339mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["J19"]}
            pcbX="2.597mm"
            pcbY="4.081mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["J20"]}
            pcbX="2.597mm"
            pcbY="4.823mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["J21"]}
            pcbX="2.597mm"
            pcbY="5.565mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["J22"]}
            pcbX="2.597mm"
            pcbY="6.307mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["K1"]}
            pcbX="3.339mm"
            pcbY="-6.307mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["K2"]}
            pcbX="3.339mm"
            pcbY="-5.565mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["K3"]}
            pcbX="3.339mm"
            pcbY="-4.823mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["K4"]}
            pcbX="3.339mm"
            pcbY="-4.081mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["K19"]}
            pcbX="3.339mm"
            pcbY="4.081mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["K20"]}
            pcbX="3.339mm"
            pcbY="4.823mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["K21"]}
            pcbX="3.339mm"
            pcbY="5.565mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["K22"]}
            pcbX="3.339mm"
            pcbY="6.307mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
        </footprint>
      }
      {...props}
    />
  );
};

export default DLP4500AFQD;
