import type {
  CapacitorProps,
  ChipProps,
  DiodeProps,
  InductorProps,
  MosfetProps,
  PinHeaderProps,
  ResistorProps,
  SubcircuitProps,
  TestpointProps,
} from "@tscircuit/props";
import "tscircuit";
import { CSD18531Q5A } from "../chips/CSD18531Q5A.circuit.tsx";
import { LM25122QPWPTQ1 } from "../chips/LM25122QPWPTQ1.circuit.tsx";
import { LM74610QDGKRQ1 } from "../chips/LM74610QDGKRQ1.circuit.tsx";
import { LM536035QPWPRQ1 } from "../chips/LM536035QPWPRQ1.circuit.tsx";
import { TPS3808G01QDBVRQ1 } from "../chips/TPS3808G01QDBVRQ1.circuit.tsx";

const schematicScale = 2;

const referenceSchematicRotations: Record<string, number> = {
  C1: 180,
  C2: 270,
  C3: 270,
  C4: 270,
  C5: 270,
  C6: 270,
  C7: 270,
  C8: 270,
  C9: 270,
  C10: 270,
  C12: 180,
  C14: 270,
  C15: 270,
  C16: 270,
  C17: 270,
  C18: 180,
  C19: 270,
  C20: 270,
  C21: 270,
  C22: 270,
  C23: 270,
  C24: 270,
  C25: 270,
  C26: 270,
  C27: 270,
  C28: 270,
  D2: 270,
  D3: 90,
  D4: 180,
  D5: 270,
  R3: 180,
  R4: 180,
  R5: 90,
  R6: 90,
  R7: 90,
  R8: 90,
  R9: 90,
  R10: 90,
  R11: 90,
  R12: 270,
  R16: 90,
  R17: 90,
  R18: 90,
  R19: 180,
  R20: 180,
  R21: 90,
  R22: 180,
  R23: 180,
  TP1: 90,
  TP2: 90,
  TP3: 90,
  TP4: 90,
  TP5: 90,
  TP6: 90,
  TP7: 90,
};

const getReferenceSchematicRotation = (name: string | undefined) =>
  name ? (referenceSchematicRotations[name] ?? 0) : 0;

type ReferenceSchematicPlacement = {
  referenceSchX: number;
  referenceSchY: number;
};

type ReferenceCapacitorProps = CapacitorProps & ReferenceSchematicPlacement;
type ReferenceResistorProps = ResistorProps & ReferenceSchematicPlacement;
type ReferenceInductorProps = InductorProps & ReferenceSchematicPlacement;
type ReferenceDiodeProps = DiodeProps & ReferenceSchematicPlacement;
type ReferencePinHeaderProps = PinHeaderProps & ReferenceSchematicPlacement;
type ReferenceTestpointProps = TestpointProps & ReferenceSchematicPlacement;

const ReferenceCapacitor = ({
  referenceSchX,
  referenceSchY,
  ...capacitorProps
}: ReferenceCapacitorProps) => (
  <capacitor
    {...capacitorProps}
    schX={referenceSchX * schematicScale}
    schY={referenceSchY * schematicScale}
    schRotation={getReferenceSchematicRotation(capacitorProps.name)}
  />
);

const ReferenceResistor = ({
  referenceSchX,
  referenceSchY,
  ...resistorProps
}: ReferenceResistorProps) => (
  <resistor
    {...resistorProps}
    schX={referenceSchX * schematicScale}
    schY={referenceSchY * schematicScale}
    schRotation={getReferenceSchematicRotation(resistorProps.name)}
  />
);

const ReferenceInductor = ({
  referenceSchX,
  referenceSchY,
  ...inductorProps
}: ReferenceInductorProps) => (
  <inductor
    {...inductorProps}
    schX={referenceSchX * schematicScale}
    schY={referenceSchY * schematicScale}
    schRotation={getReferenceSchematicRotation(inductorProps.name)}
  />
);

const ReferenceDiode = ({
  referenceSchX,
  referenceSchY,
  ...diodeProps
}: ReferenceDiodeProps) => (
  <diode
    {...diodeProps}
    schX={referenceSchX * schematicScale}
    schY={referenceSchY * schematicScale}
    schRotation={getReferenceSchematicRotation(diodeProps.name)}
  />
);

const ReferencePinHeader = ({
  referenceSchX,
  referenceSchY,
  ...pinHeaderProps
}: ReferencePinHeaderProps) => (
  <pinheader
    {...pinHeaderProps}
    schX={referenceSchX * schematicScale}
    schY={referenceSchY * schematicScale}
    schRotation={getReferenceSchematicRotation(pinHeaderProps.name)}
  />
);

const ReferenceTestpoint = ({
  referenceSchX,
  referenceSchY,
  ...testpointProps
}: ReferenceTestpointProps) => (
  <testpoint
    {...testpointProps}
    schX={referenceSchX * schematicScale}
    schY={referenceSchY * schematicScale}
    schRotation={getReferenceSchematicRotation(testpointProps.name)}
  />
);

const createPanasonicFk47uFootprint = () => (
  <footprint>
    <smtpad
      portHints={["pin1"]}
      pcbX="-2.5mm"
      pcbY="0mm"
      width="3.2mm"
      height="1.6mm"
      shape="rect"
    />
    <smtpad
      portHints={["pin2"]}
      pcbX="2.5mm"
      pcbY="0mm"
      width="3.2mm"
      height="1.6mm"
      shape="rect"
    />
  </footprint>
);

const createCga9nFootprint = () => (
  <footprint>
    <smtpad
      portHints={["pin1"]}
      pcbX="-2.6mm"
      pcbY="0mm"
      width="5.3mm"
      height="1.6mm"
      shape="rect"
    />
    <smtpad
      portHints={["pin2"]}
      pcbX="2.6mm"
      pcbY="0mm"
      width="5.3mm"
      height="1.6mm"
      shape="rect"
    />
  </footprint>
);

const createXal5030Footprint = () => (
  <footprint>
    <smtpad
      portHints={["pin1"]}
      pcbX="-1.651mm"
      pcbY="0mm"
      width="1.1684mm"
      height="4.6482mm"
      shape="rect"
    />
    <smtpad
      portHints={["pin2"]}
      pcbX="1.651mm"
      pcbY="0mm"
      width="1.1684mm"
      height="4.6482mm"
      shape="rect"
    />
  </footprint>
);

const createXal4020Footprint = () => (
  <footprint>
    <smtpad
      portHints={["pin1"]}
      pcbX="-1.1811mm"
      pcbY="0mm"
      width="0.9652mm"
      height="3.7084mm"
      shape="rect"
    />
    <smtpad
      portHints={["pin2"]}
      pcbX="1.1811mm"
      pcbY="0mm"
      width="0.9652mm"
      height="3.7084mm"
      shape="rect"
    />
  </footprint>
);

const createUmk212Footprint = () => (
  <footprint>
    <smtpad
      portHints={["pin1"]}
      pcbX="-1.016mm"
      pcbY="0mm"
      width="1.27mm"
      height="1.6002mm"
      shape="rect"
    />
    <smtpad
      portHints={["pin2"]}
      pcbX="1.016mm"
      pcbY="0mm"
      width="1.27mm"
      height="1.6002mm"
      shape="rect"
    />
  </footprint>
);

const createPmeg6010Footprint = () => (
  <footprint>
    <smtpad
      portHints={["pin1"]}
      pcbX="-1.4mm"
      pcbY="0mm"
      width="1.2mm"
      height="1.2mm"
      shape="rect"
    />
    <smtpad
      portHints={["pin2"]}
      pcbX="1.4mm"
      pcbY="0mm"
      width="1.2mm"
      height="1.2mm"
      shape="rect"
    />
  </footprint>
);

const SQ4850EY = (props: Omit<MosfetProps, "channelType" | "mosfetMode">) => (
  <mosfet
    channelType="n"
    mosfetMode="enhancement"
    manufacturerPartNumber="SQ4850EY"
    datasheetUrl="https://www.vishay.com/docs/62970/sq4850ey.pdf"
    {...props}
  />
);

const bas40PinLabels = {
  pin1: "ANODE_1",
  pin2: "ANODE_2",
  pin3: "COMMON_CATHODE",
} as const;

const BAS4005 = (props: ChipProps<typeof bas40PinLabels>) => (
  <chip
    manufacturerPartNumber="BAS40-05-7-F"
    datasheetUrl="https://www.diodes.com/assets/Datasheets/BAS40-BAS40-04-BAS40-05-BAS40-06.pdf"
    footprint="sot23"
    schWidth="2.8mm"
    schHeight="2.2mm"
    pinLabels={bas40PinLabels}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: [1, 2],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: [3],
      },
    }}
    {...props}
  />
);

const referenceCapacitors = [
  {
    name: "C1",
    capacitance: "470pF",
    maxVoltageRating: "50V",
    footprint: "0402",
    manufacturerPartNumber: "C1005X7R1H471K",
    referenceSchX: -1.1881,
    referenceSchY: -0.9139,
    connections: { pin1: "net.VBST", pin2: "net.NetC1_2" },
  },
  {
    name: "C2",
    capacitance: "47uF",
    maxVoltageRating: "50V",
    polarized: true,
    footprint: createPanasonicFk47uFootprint(),
    manufacturerPartNumber: "EEE-FK1H470XP",
    referenceSchX: 2.5589,
    referenceSchY: 4.9077,
    connections: { pin1: "net.VBAT_FILT", pin2: "net.GND" },
  },
  {
    name: "C3",
    capacitance: "10uF",
    maxVoltageRating: "50V",
    footprint: createCga9nFootprint(),
    manufacturerPartNumber: "CGA9N3X7R1H106K230KB",
    referenceSchX: -11.698,
    referenceSchY: -2.2848,
    connections: { pin1: "net.NetC3_1", pin2: "net.GND" },
  },
  {
    name: "C4",
    capacitance: "47uF",
    maxVoltageRating: "50V",
    polarized: true,
    footprint: createPanasonicFk47uFootprint(),
    manufacturerPartNumber: "EEE-FK1H470XP",
    referenceSchX: -0.3656,
    referenceSchY: -2.7691,
    connections: { pin1: "net.VBST", pin2: "net.GND" },
  },
  {
    name: "C5",
    capacitance: "10uF",
    maxVoltageRating: "50V",
    footprint: createCga9nFootprint(),
    manufacturerPartNumber: "CGA9N3X7R1H106K230KB",
    referenceSchX: 0.1828,
    referenceSchY: -2.8331,
    connections: { pin1: "net.VBST", pin2: "net.GND" },
  },
  {
    name: "C6",
    capacitance: "0.1uF",
    maxVoltageRating: "16V",
    footprint: "0603",
    manufacturerPartNumber: "GCM188R71C104KA37J",
    referenceSchX: 6.9457,
    referenceSchY: 4.2954,
    connections: { pin1: "net.VSYS", pin2: "net.GND" },
  },
  {
    name: "C7",
    capacitance: "1uF",
    maxVoltageRating: "100V",
    footprint: "1206",
    manufacturerPartNumber: "GCM31CR72A105KA03",
    referenceSchX: -8.2252,
    referenceSchY: -2.8331,
    connections: { pin1: "net.NetC7_1", pin2: "net.GND" },
  },
  {
    name: "C8",
    capacitance: "0.1uF",
    maxVoltageRating: "50V",
    footprint: "0402",
    manufacturerPartNumber: "CGA2B3X7R1H104M050BB",
    referenceSchX: -11.5152,
    referenceSchY: 5.2093,
    connections: { pin1: "net.VBAT", pin2: "net.NetC8_2" },
  },
  {
    name: "C9",
    capacitance: "2.2uF",
    maxVoltageRating: "10V",
    footprint: "0603",
    manufacturerPartNumber: "GRM188R71A225KE15D",
    referenceSchX: -8.9563,
    referenceSchY: 4.8437,
    connections: { pin1: "net.NetC9_1", pin2: "net.NetC9_2" },
  },
  {
    name: "C10",
    capacitance: "100pF",
    maxVoltageRating: "25V",
    footprint: "0402",
    manufacturerPartNumber: "C0402C101J3GACTU",
    referenceSchX: -4.5695,
    referenceSchY: -3.3815,
    connections: { pin1: "net.CS_P", pin2: "net.CS_N" },
  },
  {
    name: "C11",
    capacitance: "0.1uF",
    maxVoltageRating: "50V",
    footprint: "0402",
    manufacturerPartNumber: "CGA2B3X7R1H104M050BB",
    referenceSchX: -11.0583,
    referenceSchY: 4.7523,
    connections: { pin1: "net.NetC8_2", pin2: "net.GND" },
  },
  {
    name: "C12",
    capacitance: "4.7uF",
    maxVoltageRating: "10V",
    footprint: "0805",
    manufacturerPartNumber: "GRM21BR71A475KA73L",
    referenceSchX: -3.9298,
    referenceSchY: -4.5695,
    connections: { pin1: "net.GND", pin2: "net.NetC12_2" },
  },
  {
    name: "C13",
    capacitance: "0.47uF",
    maxVoltageRating: "50V",
    footprint: createUmk212Footprint(),
    manufacturerPartNumber: "UMK212B7474KG-T",
    referenceSchX: -3.3815,
    referenceSchY: -5.3007,
    connections: { pin1: "net.NetC13_1", pin2: "net.NetC13_2" },
  },
  {
    name: "C14",
    capacitance: "2200pF",
    maxVoltageRating: "16V",
    footprint: "0402",
    manufacturerPartNumber: "885012205027",
    referenceSchX: -10.9669,
    referenceSchY: -5.0265,
    connections: { pin1: "net.NetC14_1", pin2: "net.NetC14_2" },
  },
  {
    name: "C15",
    capacitance: "330pF",
    maxVoltageRating: "50V",
    footprint: "0402",
    manufacturerPartNumber: "C1005C0G1H331J",
    referenceSchX: -11.698,
    referenceSchY: -5.5748,
    connections: { pin1: "net.NetC14_1", pin2: "net.NetC15_2" },
  },
  {
    name: "C16",
    capacitance: "0.047uF",
    maxVoltageRating: "25V",
    footprint: "0603",
    manufacturerPartNumber: "06033C473JAT2A",
    referenceSchX: -10.2358,
    referenceSchY: -6.6715,
    connections: { pin1: "net.NetC16_1", pin2: "net.GND" },
  },
  {
    name: "C17",
    capacitance: "0.68uF",
    maxVoltageRating: "10V",
    footprint: "0805",
    manufacturerPartNumber: "0805ZC684KAT2A",
    referenceSchX: -9.6874,
    referenceSchY: -6.6715,
    connections: { pin1: "net.NetC17_1", pin2: "net.GND" },
  },
  {
    name: "C18",
    capacitance: "0.47uF",
    maxVoltageRating: "25V",
    footprint: "0603",
    manufacturerPartNumber: "CGA3E3X7R1E474K080AB",
    referenceSchX: 9.9616,
    referenceSchY: -4.0212,
    connections: { pin1: "net.NetC18_1", pin2: "net.NetC18_2" },
  },
  {
    name: "C19",
    capacitance: "10uF",
    maxVoltageRating: "50V",
    footprint: createCga9nFootprint(),
    manufacturerPartNumber: "CGA9N3X7R1H106K230KB",
    referenceSchX: 3.2901,
    referenceSchY: -4.6609,
    connections: { pin1: "net.NetC19_1", pin2: "net.GND" },
  },
  {
    name: "C20",
    capacitance: "10uF",
    maxVoltageRating: "50V",
    footprint: createCga9nFootprint(),
    manufacturerPartNumber: "CGA9N3X7R1H106K230KB",
    referenceSchX: 4.0212,
    referenceSchY: -4.6609,
    connections: { pin1: "net.NetC19_1", pin2: "net.GND" },
  },
  {
    name: "C21",
    capacitance: "0.1uF",
    maxVoltageRating: "50V",
    footprint: "0402",
    manufacturerPartNumber: "CGA2B3X7R1H104M050BB",
    referenceSchX: 4.7523,
    referenceSchY: -4.6609,
    connections: { pin1: "net.NetC19_1", pin2: "net.GND" },
  },
  {
    name: "C22",
    capacitance: "22uF",
    maxVoltageRating: "16V",
    footprint: "1210",
    manufacturerPartNumber: "CGA6P1X7R1C226M250AC",
    referenceSchX: 12.2464,
    referenceSchY: -5.3921,
    connections: { pin1: "net.VSYS", pin2: "net.GND" },
  },
  {
    name: "C23",
    capacitance: "22uF",
    maxVoltageRating: "16V",
    footprint: "1210",
    manufacturerPartNumber: "CGA6P1X7R1C226M250AC",
    referenceSchX: 12.7947,
    referenceSchY: -5.3921,
    connections: { pin1: "net.VSYS", pin2: "net.GND" },
  },
  {
    name: "C24",
    capacitance: "22uF",
    maxVoltageRating: "16V",
    footprint: "1210",
    manufacturerPartNumber: "CGA6P1X7R1C226M250AC",
    referenceSchX: 13.343,
    referenceSchY: -5.3921,
    connections: { pin1: "net.VSYS", pin2: "net.GND" },
  },
  {
    name: "C25",
    capacitance: "10uF",
    maxVoltageRating: "50V",
    footprint: createCga9nFootprint(),
    manufacturerPartNumber: "CGA9N3X7R1H106K230KB",
    referenceSchX: 0.1828,
    referenceSchY: 4.8437,
    connections: { pin1: "net.VBAT_PROTECT", pin2: "net.GND" },
  },
  {
    name: "C26",
    capacitance: "0.1uF",
    maxVoltageRating: "16V",
    footprint: "0603",
    manufacturerPartNumber: "GCM188R71C104KA37J",
    referenceSchX: 7.8596,
    referenceSchY: 4.2954,
    connections: { pin1: "net.NetC26_1", pin2: "net.GND" },
  },
  {
    name: "C27",
    capacitance: "2.2uF",
    maxVoltageRating: "6.3V",
    footprint: "0603",
    manufacturerPartNumber: "GCM188R70J225KE22D",
    referenceSchX: 4.7523,
    referenceSchY: -6.1232,
    connections: { pin1: "net.NetC27_1", pin2: "net.GND" },
  },
  {
    name: "C28",
    capacitance: "0.1uF",
    maxVoltageRating: "16V",
    footprint: "0603",
    manufacturerPartNumber: "GCM188R71C104KA37J",
    referenceSchX: 10.2358,
    referenceSchY: -5.9404,
    connections: { pin1: "net.NetC28_1", pin2: "net.GND" },
  },
] satisfies ReferenceCapacitorProps[];

const referenceResistors = [
  {
    name: "R1",
    resistance: "8.2ohm",
    tolerance: "5%",
    footprint: "0402",
    manufacturerPartNumber: "CRCW04028R20JNED",
    referenceSchX: -2.0106,
    referenceSchY: -0.9139,
    connections: { pin1: "net.NetC13_2", pin2: "net.NetC1_2" },
  },
  {
    name: "R2",
    resistance: "0.008ohm",
    tolerance: "1%",
    footprint: "2010",
    manufacturerPartNumber: "WSL20108L000FEA18",
    referenceSchX: -5.4834,
    referenceSchY: -1.4623,
    connections: { pin1: "net.NetC3_1", pin2: "net.NetL1_1" },
  },
  {
    name: "R3",
    resistance: "100ohm",
    tolerance: "5%",
    footprint: "0402",
    manufacturerPartNumber: "CRCW0402100RJNED",
    referenceSchX: -4.5695,
    referenceSchY: -2.0106,
    connections: { pin1: "net.CS_N", pin2: "net.NetL1_1" },
  },
  {
    name: "R4",
    resistance: "100ohm",
    tolerance: "5%",
    footprint: "0402",
    manufacturerPartNumber: "CRCW0402100RJNED",
    referenceSchX: -5.4834,
    referenceSchY: -2.3762,
    connections: { pin1: "net.CS_P", pin2: "net.NetC3_1" },
  },
  {
    name: "R5",
    resistance: "49.9kohm",
    tolerance: "1%",
    footprint: "0402",
    manufacturerPartNumber: "CRCW040249K9FKED",
    referenceSchX: -13.5258,
    referenceSchY: -3.2901,
    connections: { pin1: "net.SHT_BST", pin2: "net.NetC3_1" },
  },
  {
    name: "R6",
    resistance: "49.9kohm",
    tolerance: "1%",
    footprint: "0402",
    manufacturerPartNumber: "CRCW040249K9FKED",
    referenceSchX: -13.5258,
    referenceSchY: -4.3868,
    connections: { pin1: "net.GND", pin2: "net.SHT_BST" },
  },
  {
    name: "R7",
    resistance: "64.9kohm",
    tolerance: "1%",
    footprint: "0402",
    manufacturerPartNumber: "CRCW040264K9FKED",
    referenceSchX: -12.4291,
    referenceSchY: -5.849,
    connections: { pin1: "net.NetC15_2", pin2: "net.VBST" },
  },
  {
    name: "R8",
    resistance: "24.3kohm",
    tolerance: "1%",
    footprint: "0402",
    manufacturerPartNumber: "CRCW040224K3FKED",
    referenceSchX: -10.9669,
    referenceSchY: -5.849,
    connections: { pin1: "net.NetC15_2", pin2: "net.NetC14_2" },
  },
  {
    name: "R9",
    resistance: "28kohm",
    tolerance: "1%",
    footprint: "0402",
    manufacturerPartNumber: "CRCW040228K0FKED",
    referenceSchX: -12.9775,
    referenceSchY: -6.7629,
    connections: { pin1: "net.GND", pin2: "net.NetR9_2" },
  },
  {
    name: "R10",
    resistance: "19.1kohm",
    tolerance: "1%",
    footprint: "0402",
    manufacturerPartNumber: "CRCW040219K1FKED",
    referenceSchX: -9.1391,
    referenceSchY: -6.7629,
    connections: { pin1: "net.GND", pin2: "net.SYNC_BST" },
  },
  {
    name: "R11",
    resistance: "10kohm",
    tolerance: "1%",
    footprint: "0402",
    manufacturerPartNumber: "CRCW040210K0FKED",
    referenceSchX: -12.4291,
    referenceSchY: -6.9457,
    connections: { pin1: "net.GND", pin2: "net.NetC15_2" },
  },
  {
    name: "R12",
    resistance: "10kohm",
    tolerance: "5%",
    footprint: "0402",
    manufacturerPartNumber: "CRCW040210K0JNED",
    referenceSchX: 5.6662,
    referenceSchY: -4.3868,
    connections: { pin1: "net.NetC19_1", pin2: "net.SHT_BCK" },
  },
  {
    name: "R13",
    resistance: "5.1ohm",
    tolerance: "5%",
    footprint: "0402",
    manufacturerPartNumber: "CRCW04025R10JNED",
    referenceSchX: 10.9669,
    referenceSchY: -5.4834,
    connections: { pin1: "net.NetC28_1", pin2: "net.VSYS" },
  },
  {
    name: "R14",
    resistance: "0ohm",
    footprint: "2512",
    manufacturerPartNumber: "CRCW25120000Z0EG",
    referenceSchX: -13.7086,
    referenceSchY: -1.4623,
    connections: { pin1: "net.VBAT_FILT", pin2: "net.NetC3_1" },
  },
  {
    name: "R15",
    resistance: "0ohm",
    footprint: "1206",
    manufacturerPartNumber: "CRCW12060000Z0EA",
    referenceSchX: 2.3762,
    referenceSchY: -4.0212,
    connections: { pin1: "net.VBST", pin2: "net.NetC19_1" },
  },
  {
    name: "R16",
    resistance: "10kohm",
    tolerance: "5%",
    footprint: "0402",
    manufacturerPartNumber: "CRCW040210K0JNED",
    referenceSchX: 11.5152,
    referenceSchY: 5.849,
    connections: { pin1: "net.SVS_OUT", pin2: "net.VSYS" },
  },
  {
    name: "R17",
    resistance: "10kohm",
    tolerance: "1%",
    footprint: "0402",
    manufacturerPartNumber: "CRCW040210K0FKED",
    referenceSchX: 13.5258,
    referenceSchY: 5.4834,
    connections: { pin1: "net.NetR17_1", pin2: "net.VSYS" },
  },
  {
    name: "R18",
    resistance: "102kohm",
    tolerance: "1%",
    footprint: "0402",
    manufacturerPartNumber: "CRCW0402102KFKED",
    referenceSchX: 13.5258,
    referenceSchY: 4.0212,
    connections: { pin1: "net.GND", pin2: "net.NetR17_1" },
  },
  {
    name: "R19",
    resistance: "0ohm",
    tolerance: "5%",
    footprint: "0402",
    manufacturerPartNumber: "CRCW04020000Z0ED",
    referenceSchX: -4.5695,
    referenceSchY: -4.204,
    connections: { pin1: "net.NetC12_2", pin2: "net.NetR19_2" },
  },
  {
    name: "R20",
    resistance: "0ohm",
    tolerance: "5%",
    footprint: "0402",
    manufacturerPartNumber: "CRCW04020000Z0ED",
    referenceSchX: -4.0212,
    referenceSchY: -4.0212,
    connections: { pin1: "net.GND", pin2: "net.NetR19_2" },
  },
  {
    name: "R21",
    resistance: "0ohm",
    tolerance: "5%",
    footprint: "0402",
    manufacturerPartNumber: "CRCW04020000Z0ED",
    referenceSchX: 6.0318,
    referenceSchY: -6.5801,
    connections: { pin1: "net.GND", pin2: "net.SYNC_BUCK" },
  },
  {
    name: "R22",
    resistance: "0ohm",
    tolerance: "5%",
    footprint: "0402",
    manufacturerPartNumber: "CRCW04020000Z0ED",
    doNotPlace: true,
    referenceSchX: -4.0212,
    referenceSchY: -6.0318,
    connections: { pin2: "net.NetR22_2" },
  },
  {
    name: "R23",
    resistance: "0ohm",
    tolerance: "5%",
    footprint: "0402",
    manufacturerPartNumber: "CRCW04020000Z0ED",
    doNotPlace: true,
    referenceSchX: -2.7417,
    referenceSchY: -7.494,
    connections: { pin2: "net.NetR23_2" },
  },
] satisfies ReferenceResistorProps[];

const referenceInductors = [
  {
    name: "L1",
    inductance: "2.2uH",
    maxCurrentRating: "10.1A",
    footprint: createXal5030Footprint(),
    manufacturerPartNumber: "XAL5030-222MEB",
    referenceSchX: -3.4728,
    referenceSchY: -1.2338,
    connections: { pin1: "net.NetL1_1", pin2: "net.NetC13_2" },
  },
  {
    name: "L2",
    inductance: "2.2uH",
    maxCurrentRating: "8.6A",
    footprint: createXal4020Footprint(),
    manufacturerPartNumber: "XAL4020-222MEB",
    referenceSchX: 11.1497,
    referenceSchY: -4.3411,
    connections: { pin1: "net.NetC18_1", pin2: "net.VSYS" },
  },
  {
    name: "L3",
    inductance: "2.2uH",
    maxCurrentRating: "10.1A",
    footprint: createXal5030Footprint(),
    manufacturerPartNumber: "XAL5030-222MEB",
    referenceSchX: 1.645,
    referenceSchY: 6.0775,
    connections: { pin1: "net.VBAT_PROTECT", pin2: "net.VBAT_FILT" },
  },
] satisfies ReferenceInductorProps[];

const referenceDiodes = [
  {
    name: "D2",
    variant: "tvs",
    footprint: "smb",
    manufacturerPartNumber: "SMBJ26A-13-F",
    referenceSchX: -12.9775,
    referenceSchY: 5.4834,
    connections: { pin1: "net.VBAT", pin2: "net.NetD2_2" },
  },
  {
    name: "D3",
    variant: "tvs",
    footprint: "smb",
    manufacturerPartNumber: "SMBJ14A-13-F",
    referenceSchX: -12.9775,
    referenceSchY: 4.0212,
    connections: { pin1: "net.GND", pin2: "net.NetD2_2" },
  },
  {
    name: "D4",
    variant: "schottky",
    footprint: createPmeg6010Footprint(),
    manufacturerPartNumber: "PMEG6010CEH,115",
    referenceSchX: -4.2771,
    referenceSchY: -4.9351,
    connections: { pin1: "net.NetC13_1", pin2: "net.NetC12_2" },
  },
  {
    name: "D5",
    variant: "zener",
    footprint: "sod123",
    manufacturerPartNumber: "MMSZ5232B-7-F",
    referenceSchX: -14.0742,
    referenceSchY: -4.4416,
    connections: { pin1: "net.SHT_BST", pin2: "net.GND" },
  },
] satisfies ReferenceDiodeProps[];

const referenceConnectors = [
  {
    name: "J1",
    displayName: "VBAT INPUT",
    pinCount: 1,
    manufacturerPartNumber: "575-8",
    holeDiameter: "5.450mm",
    platedDiameter: "10mm",
    pinLabels: ["VBAT"],
    schFacingDirection: "right",
    referenceSchX: -13.8914,
    referenceSchY: 5.6662,
    connections: { pin1: "net.VBAT" },
  },
  {
    name: "J2",
    displayName: "VSYS OUTPUT",
    pinCount: 1,
    manufacturerPartNumber: "575-8",
    holeDiameter: "5.450mm",
    platedDiameter: "10mm",
    pinLabels: ["VSYS"],
    schFacingDirection: "left",
    referenceSchX: 14.6225,
    referenceSchY: -4.3868,
    connections: { pin1: "net.VSYS" },
  },
  {
    name: "J3",
    displayName: "INPUT GROUND",
    pinCount: 1,
    manufacturerPartNumber: "575-8",
    holeDiameter: "5.450mm",
    platedDiameter: "10mm",
    pinLabels: ["GND"],
    schFacingDirection: "right",
    referenceSchX: -13.8914,
    referenceSchY: 4.9351,
    connections: { pin1: "net.GND" },
  },
  {
    name: "J4",
    displayName: "OUTPUT GROUND",
    pinCount: 1,
    manufacturerPartNumber: "575-8",
    holeDiameter: "5.450mm",
    platedDiameter: "10mm",
    pinLabels: ["GND"],
    schFacingDirection: "left",
    referenceSchX: 14.4397,
    referenceSchY: -5.849,
    connections: { pin1: "net.GND" },
  },
  {
    name: "J5",
    displayName: "CONTROL",
    pinCount: 6,
    pitch: "1.27mm",
    rightAngle: true,
    manufacturerPartNumber: "GRPB061VWCN-RC",
    holeDiameter: "0.6604mm",
    platedDiameter: "1.0668mm",
    pinLabels: [
      "SVS_OUT",
      "SYNC_BUCK",
      "RST_OUT",
      "SYNC_BST",
      "DSHT_COMMON",
      "GND",
    ],
    schFacingDirection: "left",
    referenceSchX: 11.6066,
    referenceSchY: 2.0106,
    connections: {
      pin1: "net.SVS_OUT",
      pin2: "net.SYNC_BUCK",
      pin3: "net.RST_OUT",
      pin4: "net.SYNC_BST",
      pin5: "net.NetDSHT_3",
      pin6: "net.GND",
    },
  },
] satisfies ReferencePinHeaderProps[];

const referenceTestpoints = [
  {
    name: "TP1",
    displayName: "BOOST INPUT",
    manufacturerPartNumber: "5010",
    footprintVariant: "through_hole",
    holeDiameter: "1.6002mm",
    padDiameter: "2.2098mm",
    referenceSchX: -13.343,
    referenceSchY: -0.8408,
    connections: { pin1: "net.NetC3_1" },
  },
  {
    name: "TP2",
    displayName: "GROUND",
    manufacturerPartNumber: "5011",
    footprintVariant: "through_hole",
    holeDiameter: "1.6002mm",
    padDiameter: "2.2098mm",
    referenceSchX: -14.2569,
    referenceSchY: -1.9375,
    connections: { pin1: "net.GND" },
  },
  {
    name: "TP3",
    displayName: "BOOST OUTPUT",
    manufacturerPartNumber: "5010",
    footprintVariant: "through_hole",
    holeDiameter: "1.6002mm",
    padDiameter: "2.2098mm",
    referenceSchX: 0.3656,
    referenceSchY: -0.8408,
    connections: { pin1: "net.VBST" },
  },
  {
    name: "TP4",
    displayName: "BUCK INPUT",
    manufacturerPartNumber: "5010",
    footprintVariant: "through_hole",
    holeDiameter: "1.6002mm",
    padDiameter: "2.2098mm",
    referenceSchX: 2.9245,
    referenceSchY: -3.3997,
    connections: { pin1: "net.NetC19_1" },
  },
  {
    name: "TP5",
    displayName: "PROTECTED BATTERY",
    manufacturerPartNumber: "5010",
    footprintVariant: "through_hole",
    holeDiameter: "1.6002mm",
    padDiameter: "2.2098mm",
    referenceSchX: -0.1828,
    referenceSchY: 6.4705,
    connections: { pin1: "net.VBAT_PROTECT" },
  },
  {
    name: "TP6",
    displayName: "GROUND",
    manufacturerPartNumber: "5011",
    footprintVariant: "through_hole",
    holeDiameter: "1.6002mm",
    padDiameter: "2.2098mm",
    referenceSchX: 2.5589,
    referenceSchY: -4.4964,
    connections: { pin1: "net.GND" },
  },
  {
    name: "TP7",
    displayName: "GROUND",
    manufacturerPartNumber: "5011",
    footprintVariant: "through_hole",
    holeDiameter: "1.6002mm",
    padDiameter: "2.2098mm",
    referenceSchX: -0.7311,
    referenceSchY: 5.191,
    connections: { pin1: "net.GND" },
  },
] satisfies ReferenceTestpointProps[];

/**
 * Complete automotive off-battery power supply from TI reference design
 * TIDA-00699: https://www.ti.com/tool/TIDA-00699
 *
 * The source reference combines input transient and reverse-polarity
 * protection, a 9-V/2-A synchronous boost, a 5-V/3-A buck, and a
 * programmable-delay supply supervisor.
 */
export const PowerSupply_TIDA00699 = (props: SubcircuitProps) => (
  <subcircuit schMaxTraceDistance="12mm" {...props} routingDisabled>
    {referenceCapacitors.map((capacitorProps) => (
      <ReferenceCapacitor key={capacitorProps.name} {...capacitorProps} />
    ))}
    {referenceResistors.map((resistorProps) => (
      <ReferenceResistor key={resistorProps.name} {...resistorProps} />
    ))}
    {referenceInductors.map((inductorProps) => (
      <ReferenceInductor key={inductorProps.name} {...inductorProps} />
    ))}
    {referenceDiodes.map((diodeProps) => (
      <ReferenceDiode key={diodeProps.name} {...diodeProps} />
    ))}
    {referenceConnectors.map((pinHeaderProps) => (
      <ReferencePinHeader key={pinHeaderProps.name} {...pinHeaderProps} />
    ))}
    {referenceTestpoints.map((testpointProps) => (
      <ReferenceTestpoint key={testpointProps.name} {...testpointProps} />
    ))}

    <BAS4005
      name="D1"
      schX={-9.3219 * schematicScale}
      schY={-2.3762 * schematicScale}
      connections={{
        pin1: "net.NetC3_1",
        pin2: "net.VBST",
        pin3: "net.NetC7_1",
      }}
    />
    <BAS4005
      name="DSHT"
      schX={9.5046 * schematicScale}
      schY={0.1828 * schematicScale}
      connections={{
        pin1: "net.SHT_BST",
        pin2: "net.SHT_BCK",
        pin3: "net.NetDSHT_3",
      }}
    />

    <CSD18531Q5A
      name="Q1"
      schX={-2.6229 * schematicScale}
      schY={-5.849 * schematicScale}
      connections={{
        source: "net.GND",
        drain: "net.NetC13_2",
      }}
    />
    <CSD18531Q5A
      name="Q2"
      schX={-1.645 * schematicScale}
      schY={-1.5262 * schematicScale}
      schRotation={270}
      connections={{
        source: "net.NetC13_2",
        drain: "net.VBST",
      }}
    />
    <SQ4850EY
      name="Q3"
      schX={-6.5801 * schematicScale}
      schY={7.0645 * schematicScale}
      schRotation={270}
      connections={{
        source: "net.VBAT",
        gate: "net.NetQ3_4",
        drain: "net.VBAT_PROTECT",
      }}
    />

    <LM74610QDGKRQ1
      name="U1"
      schX={-6.7629 * schematicScale}
      schY={4.5695 * schematicScale}
      connections={{
        pin1: "net.NetC9_2",
        pin2: "net.NetQ3_4",
        pin4: "net.VBAT",
        pin6: "net.NetQ3_4",
        pin7: "net.NetC9_1",
        pin8: "net.VBAT_PROTECT",
      }}
    />
    <LM25122QPWPTQ1
      name="U2"
      schX={-6.3973 * schematicScale}
      schY={-5.1179 * schematicScale}
      noConnect={["pin1"]}
      connections={{
        pin2: "net.GND",
        pin3: "net.CS_N",
        pin4: "net.CS_P",
        pin5: "net.NetC7_1",
        pin6: "net.SHT_BST",
        pin7: "net.NetC16_1",
        pin8: "net.SYNC_BST",
        pin9: "net.GND",
        pin10: "net.NetC15_2",
        pin11: "net.NetC14_1",
        pin12: "net.NetR9_2",
        pin13: "net.NetR19_2",
        pin14: "net.NetC17_1",
        pin15: "net.GND",
        pin16: "net.NetR22_2",
        pin17: "net.NetC12_2",
        pin18: "net.NetC13_2",
        pin19: "net.NetR23_2",
        pin20: "net.NetC13_1",
        pin21: "net.GND",
      }}
    />
    <LM536035QPWPRQ1
      name="U3"
      schX={7.8596 * schematicScale}
      schY={-5.3007 * schematicScale}
      connections={{
        pin1: "net.NetC18_1",
        pin2: "net.NetC18_1",
        pin3: "net.NetC18_2",
        pin4: "net.NetC27_1",
        pin5: "net.NetC28_1",
        pin6: "net.SYNC_BUCK",
        pin7: "net.NetC27_1",
        pin8: "net.RST_OUT",
        pin9: "net.VSYS",
        pin10: "net.GND",
        pin11: "net.SHT_BCK",
        pin12: "net.NetC19_1",
        pin13: "net.NetC19_1",
        pin15: "net.GND",
        pin16: "net.GND",
        pin17: "net.GND",
      }}
    />
    <TPS3808G01QDBVRQ1
      name="U4"
      schX={10.053 * schematicScale}
      schY={4.7523 * schematicScale}
      noConnect={["pin3"]}
      connections={{
        pin1: "net.SVS_OUT",
        pin2: "net.GND",
        pin4: "net.NetC26_1",
        pin5: "net.NetR17_1",
        pin6: "net.VSYS",
      }}
    />

    <trace from=".R22 > .pin1" to=".Q1 > .gate" />
    <netlabel
      net="Q2_GATE"
      connectsTo=".R23 > .pin1"
      schX={-5.1834}
      schY={-14.988}
      anchorSide="left"
    />
    <netlabel
      net="Q2_GATE"
      connectsTo=".Q2 > .gate"
      schX={-3.39}
      schY={-2.6324}
      anchorSide="bottom"
    />

    <net name="GND" isGroundNet />
  </subcircuit>
);

export default PowerSupply_TIDA00699;
