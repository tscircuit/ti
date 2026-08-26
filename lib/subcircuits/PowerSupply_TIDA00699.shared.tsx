import type {
  CapacitorProps,
  ChipProps,
  DiodeProps,
  InductorProps,
  PinHeaderProps,
  ResistorProps,
  TestpointProps,
} from "@tscircuit/props";
import "tscircuit";
import { CSD18531Q5A } from "../chips/CSD18531Q5A.circuit.tsx";
import { LM25122QPWPTQ1 } from "../chips/LM25122QPWPTQ1.circuit.tsx";
import { LM74610QDGKRQ1 } from "../chips/LM74610QDGKRQ1.circuit.tsx";
import { LM536035QPWPRQ1 } from "../chips/LM536035QPWPRQ1.circuit.tsx";
import { TPS3808G01QDBVRQ1 } from "../chips/TPS3808G01QDBVRQ1.circuit.tsx";
import { SQ4850EY } from "../chips/SQ4850EY.circuit.tsx";

const schematicScale = 1.4;

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
  D4: 90,
  D5: 270,
  J1: 180,
  J3: 180,
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
  R19: 90,
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
    connections={undefined}
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
    connections={undefined}
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
    connections={undefined}
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
    connections={undefined}
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
    connections={undefined}
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
    connections={undefined}
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

const create5758TestpointFootprint = () => (
  <footprint>
    <platedhole
      portHints={["pin1"]}
      shape="circle"
      holeDiameter="5.450mm"
      outerDiameter="10mm"
    />
  </footprint>
);

const bas40PinLabels = {
  pin1: "1",
  pin2: "2",
  pin3: "3",
} as const;

const BAS4005 = (props: ChipProps<typeof bas40PinLabels>) => (
  <chip
    manufacturerPartNumber="BAS40-05-7-F"
    datasheetUrl="https://www.diodes.com/assets/Datasheets/BAS40-BAS40-04-BAS40-05-BAS40-06.pdf"
    footprint="sot23"
    schWidth="1.2mm"
    schHeight="1.2mm"
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
    referenceSchX: 2.5589,
    referenceSchY: 4.9077,
    connections: { pin1: "net.VBAT_FILT", pin2: "net.GND" },
  },
  {
    name: "C3",
    capacitance: "10uF",
    maxVoltageRating: "50V",
    footprint: createCga9nFootprint(),
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
    referenceSchX: -0.3656,
    referenceSchY: -2.7691,
    connections: { pin1: "net.VBST", pin2: "net.GND" },
  },
  {
    name: "C5",
    capacitance: "10uF",
    maxVoltageRating: "50V",
    footprint: createCga9nFootprint(),
    referenceSchX: 0.1828,
    referenceSchY: -2.8331,
    connections: { pin1: "net.VBST", pin2: "net.GND" },
  },
  {
    name: "C6",
    capacitance: "0.1uF",
    maxVoltageRating: "16V",
    footprint: "0603",
    referenceSchX: 6.9457,
    referenceSchY: 4.2954,
    connections: { pin1: "net.VSYS", pin2: "net.GND" },
  },
  {
    name: "C7",
    capacitance: "1uF",
    maxVoltageRating: "100V",
    footprint: "1206",
    referenceSchX: -8.2252,
    referenceSchY: -2.8331,
    connections: { pin1: "net.NetC7_1", pin2: "net.GND" },
  },
  {
    name: "C8",
    capacitance: "0.1uF",
    maxVoltageRating: "50V",
    footprint: "0402",
    referenceSchX: -11.5152,
    referenceSchY: 5.2093,
    connections: { pin1: "net.VBAT", pin2: "net.NetC8_2" },
  },
  {
    name: "C9",
    capacitance: "2.2uF",
    maxVoltageRating: "10V",
    footprint: "0603",
    referenceSchX: -8.9563,
    referenceSchY: 4.8437,
    connections: { pin1: "net.NetC9_1", pin2: "net.NetC9_2" },
  },
  {
    name: "C10",
    capacitance: "100pF",
    maxVoltageRating: "25V",
    footprint: "0402",
    referenceSchX: -4.5695,
    referenceSchY: -3.3815,
    connections: { pin1: "net.CS_P", pin2: "net.CS_N" },
  },
  {
    name: "C11",
    capacitance: "0.1uF",
    maxVoltageRating: "50V",
    footprint: "0402",
    referenceSchX: -11.0583,
    referenceSchY: 4.7523,
    connections: { pin1: "net.NetC8_2", pin2: "net.GND" },
  },
  {
    name: "C12",
    capacitance: "4.7uF",
    maxVoltageRating: "10V",
    footprint: "0805",
    referenceSchX: -4.5,
    referenceSchY: -4.6179,
    connections: { pin1: "net.GND", pin2: "net.NetC12_2" },
  },
  {
    name: "C13",
    capacitance: "0.47uF",
    maxVoltageRating: "50V",
    footprint: createUmk212Footprint(),
    referenceSchX: -3.3815,
    referenceSchY: -4.9036,
    connections: { pin1: "net.NetC13_1", pin2: "net.NetC13_2" },
  },
  {
    name: "C14",
    capacitance: "2200pF",
    maxVoltageRating: "16V",
    footprint: "0402",
    referenceSchX: -10.9669,
    referenceSchY: -5.0265,
    connections: { pin1: "net.NetC14_1", pin2: "net.NetC14_2" },
  },
  {
    name: "C15",
    capacitance: "330pF",
    maxVoltageRating: "50V",
    footprint: "0402",
    referenceSchX: -11.698,
    referenceSchY: -5.5748,
    connections: { pin1: "net.NetC14_1", pin2: "net.NetC15_2" },
  },
  {
    name: "C16",
    capacitance: "0.047uF",
    maxVoltageRating: "25V",
    footprint: "0603",
    referenceSchX: -10.2358,
    referenceSchY: -6.6715,
    connections: { pin1: "net.NetC16_1", pin2: "net.GND" },
  },
  {
    name: "C17",
    capacitance: "0.68uF",
    maxVoltageRating: "10V",
    footprint: "0805",
    referenceSchX: -9.6874,
    referenceSchY: -6.6715,
    connections: { pin1: "net.NetC17_1", pin2: "net.GND" },
  },
  {
    name: "C18",
    capacitance: "0.47uF",
    maxVoltageRating: "25V",
    footprint: "0603",
    referenceSchX: 9.9616,
    referenceSchY: -4.0212,
    connections: { pin1: "net.NetC18_1", pin2: "net.NetC18_2" },
  },
  {
    name: "C19",
    capacitance: "10uF",
    maxVoltageRating: "50V",
    footprint: createCga9nFootprint(),
    referenceSchX: 3.2901,
    referenceSchY: -4.6609,
    connections: { pin1: "net.NetC19_1", pin2: "net.GND" },
  },
  {
    name: "C20",
    capacitance: "10uF",
    maxVoltageRating: "50V",
    footprint: createCga9nFootprint(),
    referenceSchX: 4.0212,
    referenceSchY: -4.6609,
    connections: { pin1: "net.NetC19_1", pin2: "net.GND" },
  },
  {
    name: "C21",
    capacitance: "0.1uF",
    maxVoltageRating: "50V",
    footprint: "0402",
    referenceSchX: 4.7523,
    referenceSchY: -4.6609,
    connections: { pin1: "net.NetC19_1", pin2: "net.GND" },
  },
  {
    name: "C22",
    capacitance: "22uF",
    maxVoltageRating: "16V",
    footprint: "1210",
    referenceSchX: 12.2464,
    referenceSchY: -5.3921,
    connections: { pin1: "net.VSYS", pin2: "net.GND" },
  },
  {
    name: "C23",
    capacitance: "22uF",
    maxVoltageRating: "16V",
    footprint: "1210",
    referenceSchX: 12.7947,
    referenceSchY: -5.3921,
    connections: { pin1: "net.VSYS", pin2: "net.GND" },
  },
  {
    name: "C24",
    capacitance: "22uF",
    maxVoltageRating: "16V",
    footprint: "1210",
    referenceSchX: 13.343,
    referenceSchY: -5.3921,
    connections: { pin1: "net.VSYS", pin2: "net.GND" },
  },
  {
    name: "C25",
    capacitance: "10uF",
    maxVoltageRating: "50V",
    footprint: createCga9nFootprint(),
    referenceSchX: 0.1828,
    referenceSchY: 4.8437,
    connections: { pin1: "net.VBAT_PROTECT", pin2: "net.GND" },
  },
  {
    name: "C26",
    capacitance: "0.1uF",
    maxVoltageRating: "16V",
    footprint: "0603",
    referenceSchX: 7.8596,
    referenceSchY: 4.2954,
    connections: { pin1: "net.NetC26_1", pin2: "net.GND" },
  },
  {
    name: "C27",
    capacitance: "2.2uF",
    maxVoltageRating: "6.3V",
    footprint: "0603",
    referenceSchX: 4.7523,
    referenceSchY: -6.1232,
    connections: { pin1: "net.NetC27_1", pin2: "net.GND" },
  },
  {
    name: "C28",
    capacitance: "0.1uF",
    maxVoltageRating: "16V",
    footprint: "0603",
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
    referenceSchX: -2.0106,
    referenceSchY: -0.9139,
    connections: { pin1: "net.NetC13_2", pin2: "net.NetC1_2" },
  },
  {
    name: "R2",
    resistance: "0.008ohm",
    tolerance: "1%",
    footprint: "2010",
    referenceSchX: -5.4834,
    referenceSchY: -1.4623,
    connections: { pin1: "net.NetC3_1", pin2: "net.NetL1_1" },
  },
  {
    name: "R3",
    resistance: "100ohm",
    tolerance: "5%",
    footprint: "0402",
    referenceSchX: -4.5695,
    referenceSchY: -2.0106,
    connections: { pin1: "net.CS_N", pin2: "net.NetL1_1" },
  },
  {
    name: "R4",
    resistance: "100ohm",
    tolerance: "5%",
    footprint: "0402",
    referenceSchX: -5.4834,
    referenceSchY: -2.3762,
    connections: { pin1: "net.CS_P", pin2: "net.NetC3_1" },
  },
  {
    name: "R5",
    resistance: "49.9kohm",
    tolerance: "1%",
    footprint: "0402",
    referenceSchX: -13.5258,
    referenceSchY: -3.2901,
    connections: { pin1: "net.SHT_BST", pin2: "net.NetC3_1" },
  },
  {
    name: "R6",
    resistance: "49.9kohm",
    tolerance: "1%",
    footprint: "0402",
    referenceSchX: -13.5258,
    referenceSchY: -4.3868,
    connections: { pin1: "net.GND", pin2: "net.SHT_BST" },
  },
  {
    name: "R7",
    resistance: "64.9kohm",
    tolerance: "1%",
    footprint: "0402",
    referenceSchX: -12.4291,
    referenceSchY: -5.849,
    connections: { pin1: "net.NetC15_2", pin2: "net.VBST" },
  },
  {
    name: "R8",
    resistance: "24.3kohm",
    tolerance: "1%",
    footprint: "0402",
    referenceSchX: -10.9669,
    referenceSchY: -5.849,
    connections: { pin1: "net.NetC15_2", pin2: "net.NetC14_2" },
  },
  {
    name: "R9",
    resistance: "28kohm",
    tolerance: "1%",
    footprint: "0402",
    referenceSchX: -12.9775,
    referenceSchY: -6.7629,
    connections: { pin1: "net.GND", pin2: "net.NetR9_2" },
  },
  {
    name: "R10",
    resistance: "19.1kohm",
    tolerance: "1%",
    footprint: "0402",
    referenceSchX: -9.1391,
    referenceSchY: -6.7629,
    connections: { pin1: "net.GND", pin2: "net.SYNC_BST" },
  },
  {
    name: "R11",
    resistance: "10kohm",
    tolerance: "1%",
    footprint: "0402",
    referenceSchX: -12.4291,
    referenceSchY: -6.9457,
    connections: { pin1: "net.GND", pin2: "net.NetC15_2" },
  },
  {
    name: "R12",
    resistance: "10kohm",
    tolerance: "5%",
    footprint: "0402",
    referenceSchX: 5.6662,
    referenceSchY: -4.3868,
    connections: { pin1: "net.NetC19_1", pin2: "net.SHT_BCK" },
  },
  {
    name: "R13",
    resistance: "5.1ohm",
    tolerance: "5%",
    footprint: "0402",
    referenceSchX: 10.9669,
    referenceSchY: -5.4834,
    connections: { pin1: "net.NetC28_1", pin2: "net.VSYS" },
  },
  {
    name: "R14",
    resistance: "0ohm",
    footprint: "2512",
    referenceSchX: -13.7086,
    referenceSchY: -1.4623,
    connections: { pin1: "net.VBAT_FILT", pin2: "net.NetC3_1" },
  },
  {
    name: "R15",
    resistance: "0ohm",
    footprint: "1206",
    referenceSchX: 2.3762,
    referenceSchY: -4.0212,
    connections: { pin1: "net.VBST", pin2: "net.NetC19_1" },
  },
  {
    name: "R16",
    resistance: "10kohm",
    tolerance: "5%",
    footprint: "0402",
    referenceSchX: 11.5152,
    referenceSchY: 5.849,
    connections: { pin1: "net.SVS_OUT", pin2: "net.VSYS" },
  },
  {
    name: "R17",
    resistance: "10kohm",
    tolerance: "1%",
    footprint: "0402",
    referenceSchX: 13.5258,
    referenceSchY: 5.4834,
    connections: { pin1: "net.NetR17_1", pin2: "net.VSYS" },
  },
  {
    name: "R18",
    resistance: "102kohm",
    tolerance: "1%",
    footprint: "0402",
    referenceSchX: 13.5258,
    referenceSchY: 4.0212,
    connections: { pin1: "net.GND", pin2: "net.NetR17_1" },
  },
  {
    name: "R19",
    resistance: "0ohm",
    tolerance: "5%",
    footprint: "0402",
    referenceSchX: -3.9,
    referenceSchY: -4.4036,
    connections: { pin1: "net.NetC12_2", pin2: "net.NetR19_2" },
  },
  {
    name: "R20",
    resistance: "0ohm",
    tolerance: "5%",
    footprint: "0402",
    referenceSchX: -3.3,
    referenceSchY: -4.3322,
    connections: { pin1: "net.GND", pin2: "net.NetR19_2" },
  },
  {
    name: "R21",
    resistance: "0ohm",
    tolerance: "5%",
    footprint: "0402",
    referenceSchX: 6.0318,
    referenceSchY: -6.5801,
    connections: { pin1: "net.GND", pin2: "net.SYNC_BUCK" },
  },
  {
    name: "R22",
    resistance: "0ohm",
    tolerance: "5%",
    footprint: "0402",
    doNotPlace: true,
    referenceSchX: -4.0212,
    referenceSchY: -6.0318,
    connections: { pin1: "net.NetR22_1", pin2: "net.NetR22_2" },
  },
  {
    name: "R23",
    resistance: "0ohm",
    tolerance: "5%",
    footprint: "0402",
    doNotPlace: true,
    referenceSchX: -2.7417,
    referenceSchY: -7.494,
    connections: { pin1: "net.NetR23_1", pin2: "net.NetR23_2" },
  },
] satisfies ReferenceResistorProps[];

const referenceInductors = [
  {
    name: "L1",
    inductance: "2.2uH",
    maxCurrentRating: "10.1A",
    footprint: createXal5030Footprint(),
    referenceSchX: -3.4728,
    referenceSchY: -1.2338,
    connections: { pin1: "net.NetL1_1", pin2: "net.NetC13_2" },
  },
  {
    name: "L2",
    inductance: "2.2uH",
    maxCurrentRating: "8.6A",
    footprint: createXal4020Footprint(),
    referenceSchX: 11.1497,
    referenceSchY: -4.3411,
    connections: { pin1: "net.NetC18_1", pin2: "net.VSYS" },
  },
  {
    name: "L3",
    inductance: "2.2uH",
    maxCurrentRating: "10.1A",
    footprint: createXal5030Footprint(),
    referenceSchX: 1.645,
    referenceSchY: 6.0775,
    connections: { pin1: "net.VBAT_PROTECT", pin2: "net.VBAT_FILT" },
  },
] satisfies ReferenceInductorProps[];

const referenceDiodes = [
  {
    name: "D2",
    variant: "tvs",
    pinLabels: { pin1: ["cathode", "1"], pin2: ["anode", "2"] },
    footprint: "smb",
    manufacturerPartNumber: "SMBJ26A-13-F",
    referenceSchX: -12.9775,
    referenceSchY: 5.4834,
    connections: { pin1: "net.VBAT", pin2: "net.NetD2_2" },
  },
  {
    name: "D3",
    variant: "tvs",
    pinLabels: { pin1: ["cathode", "1"], pin2: ["anode", "2"] },
    footprint: "smb",
    manufacturerPartNumber: "SMBJ14A-13-F",
    referenceSchX: -12.9775,
    referenceSchY: 4.0212,
    connections: { pin1: "net.GND", pin2: "net.NetD2_2" },
  },
  {
    name: "D4",
    variant: "schottky",
    pinLabels: { pin1: ["cathode", "1"], pin2: ["anode", "2"] },
    footprint: createPmeg6010Footprint(),
    manufacturerPartNumber: "PMEG6010CEH,115",
    referenceSchX: -3.9,
    referenceSchY: -4.7607,
    connections: { pin1: "net.NetC13_1", pin2: "net.NetC12_2" },
  },
  {
    name: "D5",
    variant: "zener",
    pinLabels: { pin1: ["cathode", "1"], pin2: ["anode", "2"] },
    footprint: "sod123",
    manufacturerPartNumber: "MMSZ5232B-7-F",
    referenceSchX: -14.0742,
    referenceSchY: -4.4416,
    connections: { pin1: "net.SHT_BST", pin2: "net.GND" },
  },
] satisfies ReferenceDiodeProps[];

const referenceConnectors = [
  {
    name: "J5",
    pinCount: 6,
    pitch: "1.27mm",
    rightAngle: true,
    manufacturerPartNumber: "GRPB061VWCN-RC",
    holeDiameter: "0.6604mm",
    platedDiameter: "1.0668mm",
    pinLabels: ["1", "2", "3", "4", "5", "6"],
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
    name: "J1",
    manufacturerPartNumber: "575-8",
    footprintVariant: "through_hole",
    footprint: create5758TestpointFootprint(),
    holeDiameter: "5.450mm",
    padDiameter: "10mm",
    referenceSchX: -13.8914,
    referenceSchY: 5.6662,
    connections: { pin1: "net.VBAT" },
  },
  {
    name: "J2",
    manufacturerPartNumber: "575-8",
    footprintVariant: "through_hole",
    footprint: create5758TestpointFootprint(),
    holeDiameter: "5.450mm",
    padDiameter: "10mm",
    referenceSchX: 14.6225,
    referenceSchY: -4.3868,
    connections: { pin1: "net.VSYS" },
  },
  {
    name: "J3",
    manufacturerPartNumber: "575-8",
    footprintVariant: "through_hole",
    footprint: create5758TestpointFootprint(),
    holeDiameter: "5.450mm",
    padDiameter: "10mm",
    referenceSchX: -13.8914,
    referenceSchY: 4.9351,
    connections: { pin1: "net.GND" },
  },
  {
    name: "J4",
    manufacturerPartNumber: "575-8",
    footprintVariant: "through_hole",
    footprint: create5758TestpointFootprint(),
    holeDiameter: "5.450mm",
    padDiameter: "10mm",
    referenceSchX: 14.4397,
    referenceSchY: -5.849,
    connections: { pin1: "net.GND" },
  },
  {
    name: "TP1",
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
    manufacturerPartNumber: "5011",
    footprintVariant: "through_hole",
    holeDiameter: "1.6002mm",
    padDiameter: "2.2098mm",
    referenceSchX: -0.7311,
    referenceSchY: 5.191,
    connections: { pin1: "net.GND" },
  },
] satisfies ReferenceTestpointProps[];

type ReferenceConnectedComponent = {
  name: string;
  connections: Record<string, string | undefined>;
  referenceSchX: number;
  referenceSchY: number;
};

type ReferenceTraceProps = {
  from: string;
  to: string;
};

type ReferenceTraceEndpoint = {
  componentPortSelector: string;
  referenceSchX: number;
  referenceSchY: number;
};

const ReferenceTrace = ({ from, to }: ReferenceTraceProps) => (
  <trace from={from} to={to} />
);

const referenceLabeledNetNames = new Set([
  "GND",
  "VBAT",
  "VBAT_PROTECT",
  "VBAT_FILT",
  "VBST",
  "VSYS",
  "CS_P",
  "CS_N",
  "SHT_BST",
  "SHT_BCK",
  "SYNC_BST",
  "SYNC_BUCK",
  "RST_OUT",
  "SVS_OUT",
]);

const referenceTraceOverridesByNetName: Partial<
  Record<string, ReferenceTraceProps[]>
> = {
  NetC13_1: [
    { from: ".U2 > .pin20", to: ".C13 > .pin1" },
    { from: ".U2 > .pin20", to: ".D4 > .pin1" },
  ],
  NetC12_2: [
    { from: ".U2 > .pin17", to: ".C12 > .pin2" },
    { from: ".U2 > .pin17", to: ".D4 > .pin2" },
    { from: ".R19 > .pin1", to: ".D4 > .pin2" },
  ],
  NetR19_2: [
    { from: ".U2 > .pin13", to: ".R20 > .pin2" },
    { from: ".U2 > .pin13", to: ".R19 > .pin2" },
  ],
};

const d1Connections = {
  pin1: "net.NetC3_1",
  pin2: "net.VBST",
  pin3: "net.NetC7_1",
};

const dshtConnections = {
  pin1: "net.SHT_BST",
  pin2: "net.SHT_BCK",
  pin3: "net.NetDSHT_3",
};

const q1Connections = {
  pin1: "net.GND",
  pin4: "net.NetR22_1",
  pin5: "net.NetC13_2",
};

const q2Connections = {
  pin1: "net.NetC13_2",
  pin4: "net.NetR23_1",
  pin5: "net.VBST",
};

const q3Connections = {
  pin1: "net.VBAT",
  pin4: "net.NetQ3_4",
  pin5: "net.VBAT_PROTECT",
};

const u1Connections = {
  pin1: "net.NetC9_2",
  pin2: "net.NetQ3_4",
  pin4: "net.VBAT",
  pin6: "net.NetQ3_4",
  pin7: "net.NetC9_1",
  pin8: "net.VBAT_PROTECT",
};

const u2Connections = {
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
};

const u3Connections = {
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
};

const u4Connections = {
  pin1: "net.SVS_OUT",
  pin2: "net.GND",
  pin4: "net.NetC26_1",
  pin5: "net.NetR17_1",
  pin6: "net.VSYS",
};

const referenceSpecialComponentConnections = [
  {
    name: "D1",
    connections: d1Connections,
    referenceSchX: -10.4,
    referenceSchY: -2.1,
  },
  {
    name: "DSHT",
    connections: dshtConnections,
    referenceSchX: 9.5046,
    referenceSchY: 0.1828,
  },
  {
    name: "Q1",
    connections: q1Connections,
    referenceSchX: -2.6229,
    referenceSchY: -5.849,
  },
  {
    name: "Q2",
    connections: q2Connections,
    referenceSchX: -1.645,
    referenceSchY: -1.5262,
  },
  {
    name: "Q3",
    connections: q3Connections,
    referenceSchX: -6.5801,
    referenceSchY: 7.0645,
  },
  {
    name: "U1",
    connections: u1Connections,
    referenceSchX: -6.7629,
    referenceSchY: 4.5695,
  },
  {
    name: "U2",
    connections: u2Connections,
    referenceSchX: -6.3973,
    referenceSchY: -5.1179,
  },
  {
    name: "U3",
    connections: u3Connections,
    referenceSchX: 7.8596,
    referenceSchY: -5.3007,
  },
  {
    name: "U4",
    connections: u4Connections,
    referenceSchX: 10.053,
    referenceSchY: 4.7523,
  },
] satisfies ReferenceConnectedComponent[];

const createReferenceTraceProps = ({
  connectedComponents,
}: {
  connectedComponents: ReferenceConnectedComponent[];
}): ReferenceTraceProps[] => {
  const directTraceEndpointsByNetName: Record<
    string,
    ReferenceTraceEndpoint[]
  > = {};
  const referenceTraceProps: ReferenceTraceProps[] = [];

  for (const connectedComponent of connectedComponents) {
    for (const [portName, netSelector] of Object.entries(
      connectedComponent.connections,
    )) {
      if (!netSelector) continue;

      const componentPortSelector = `.${connectedComponent.name} > .${portName}`;
      const netName = netSelector.slice("net.".length);

      if (referenceLabeledNetNames.has(netName)) {
        referenceTraceProps.push({
          from: componentPortSelector,
          to: netSelector,
        });
        continue;
      }

      directTraceEndpointsByNetName[netName] ??= [];
      directTraceEndpointsByNetName[netName].push({
        componentPortSelector,
        referenceSchX: connectedComponent.referenceSchX,
        referenceSchY: connectedComponent.referenceSchY,
      });
    }
  }

  for (const [netName, traceEndpoints] of Object.entries(
    directTraceEndpointsByNetName,
  )) {
    const referenceTraceOverrides = referenceTraceOverridesByNetName[netName];
    if (referenceTraceOverrides) {
      referenceTraceProps.push(...referenceTraceOverrides);
      continue;
    }

    const [firstTraceEndpoint, ...unconnectedTraceEndpoints] = traceEndpoints;

    if (!firstTraceEndpoint || unconnectedTraceEndpoints.length === 0) {
      throw new Error(
        `Internal reference net ${netName} has fewer than two endpoints`,
      );
    }

    const connectedTraceEndpoints = [firstTraceEndpoint];

    while (unconnectedTraceEndpoints.length > 0) {
      let nearestConnectedEndpointIndex = 0;
      let nearestUnconnectedEndpointIndex = 0;
      let nearestSquaredDistance = Number.POSITIVE_INFINITY;

      for (
        let connectedEndpointIndex = 0;
        connectedEndpointIndex < connectedTraceEndpoints.length;
        connectedEndpointIndex += 1
      ) {
        const connectedTraceEndpoint =
          connectedTraceEndpoints[connectedEndpointIndex];
        if (!connectedTraceEndpoint) continue;

        for (
          let unconnectedEndpointIndex = 0;
          unconnectedEndpointIndex < unconnectedTraceEndpoints.length;
          unconnectedEndpointIndex += 1
        ) {
          const unconnectedTraceEndpoint =
            unconnectedTraceEndpoints[unconnectedEndpointIndex];
          if (!unconnectedTraceEndpoint) continue;

          const deltaX =
            connectedTraceEndpoint.referenceSchX -
            unconnectedTraceEndpoint.referenceSchX;
          const deltaY =
            connectedTraceEndpoint.referenceSchY -
            unconnectedTraceEndpoint.referenceSchY;
          const squaredDistance = deltaX * deltaX + deltaY * deltaY;

          if (squaredDistance < nearestSquaredDistance) {
            nearestConnectedEndpointIndex = connectedEndpointIndex;
            nearestUnconnectedEndpointIndex = unconnectedEndpointIndex;
            nearestSquaredDistance = squaredDistance;
          }
        }
      }

      const nearestConnectedTraceEndpoint =
        connectedTraceEndpoints[nearestConnectedEndpointIndex];
      const nearestUnconnectedTraceEndpoint = unconnectedTraceEndpoints.splice(
        nearestUnconnectedEndpointIndex,
        1,
      )[0];

      if (!nearestConnectedTraceEndpoint || !nearestUnconnectedTraceEndpoint) {
        throw new Error(`Could not connect internal reference net ${netName}`);
      }

      referenceTraceProps.push({
        from: nearestConnectedTraceEndpoint.componentPortSelector,
        to: nearestUnconnectedTraceEndpoint.componentPortSelector,
      });
      connectedTraceEndpoints.push(nearestUnconnectedTraceEndpoint);
    }
  }

  return referenceTraceProps;
};

export type Tida00699ReferenceSectionName =
  | "reverse_battery_protection"
  | "emi_filter"
  | "boost_regulator"
  | "buck_regulator"
  | "supervisor_and_header";

const referenceComponentNamesBySection: Record<
  Tida00699ReferenceSectionName,
  readonly string[]
> = {
  reverse_battery_protection: [
    "J1",
    "J3",
    "D2",
    "D3",
    "C8",
    "C9",
    "C11",
    "Q3",
    "U1",
  ],
  emi_filter: ["TP5", "TP7", "L3", "C25", "C2"],
  boost_regulator: [
    "C1",
    "C3",
    "C4",
    "C5",
    "C7",
    "C10",
    "C12",
    "C13",
    "C14",
    "C15",
    "C16",
    "C17",
    "R1",
    "R2",
    "R3",
    "R4",
    "R5",
    "R6",
    "R7",
    "R8",
    "R9",
    "R10",
    "R11",
    "R14",
    "R19",
    "R20",
    "R22",
    "R23",
    "L1",
    "D1",
    "D4",
    "D5",
    "Q1",
    "Q2",
    "U2",
    "TP1",
    "TP2",
    "TP3",
  ],
  buck_regulator: [
    "C18",
    "C19",
    "C20",
    "C21",
    "C22",
    "C23",
    "C24",
    "C27",
    "C28",
    "R12",
    "R13",
    "R15",
    "R21",
    "L2",
    "U3",
    "J2",
    "J4",
    "TP4",
    "TP6",
  ],
  supervisor_and_header: ["U4", "C6", "C26", "R16", "R17", "R18", "J5", "DSHT"],
};

type ReferenceSectionVisual = {
  title: string;
  annotations?: readonly {
    position: { x: number; y: number };
    text: string;
  }[];
};

const referenceSectionVisualByName: Record<
  Tida00699ReferenceSectionName,
  ReferenceSectionVisual
> = {
  reverse_battery_protection: {
    title: "Transient & Reverse Polarity Protection",
  },
  emi_filter: {
    title: "EMI Filter",
  },
  boost_regulator: {
    title: "WVIN Boost",
    annotations: [
      {
        text: "2A @ 9V",
        position: { x: 0.5483441408059271, y: -0.5483441408059271 },
      },
    ],
  },
  buck_regulator: {
    title: "WVIN Buck",
    annotations: [
      {
        text: "3A @ 5V",
        position: { x: 13.160259379342289, y: -4.021190365910143 },
      },
      {
        text: "9V min @ 2A, assumes 85% efficiency",
        position: { x: 4.386753126447431, y: -3.1072834645669287 },
      },
    ],
  },
  supervisor_and_header: {
    title: "SVS & Header",
  },
};

const referenceConnectedComponents: ReferenceConnectedComponent[] = [
  ...referenceCapacitors,
  ...referenceResistors,
  ...referenceInductors,
  ...referenceDiodes,
  ...referenceConnectors,
  ...referenceTestpoints,
  ...referenceSpecialComponentConnections,
];

type ReferenceSpecialComponentsProps = {
  componentNames: ReadonlySet<string>;
  schSectionName: Tida00699ReferenceSectionName;
};

const ReferenceSpecialComponents = ({
  componentNames,
  schSectionName,
}: ReferenceSpecialComponentsProps) => (
  <>
    {componentNames.has("D1") && (
      <BAS4005
        name="D1"
        schSectionName={schSectionName}
        schX={-10.4 * schematicScale}
        schY={-2.1 * schematicScale}
      />
    )}
    {componentNames.has("DSHT") && (
      <BAS4005
        name="DSHT"
        schSectionName={schSectionName}
        schX={9.5046 * schematicScale}
        schY={0.1828 * schematicScale}
      />
    )}
    {componentNames.has("Q1") && (
      <CSD18531Q5A
        name="Q1"
        schSectionName={schSectionName}
        schX={-2.6229 * schematicScale}
        schY={-5.849 * schematicScale}
        symbolOrientation="vertical"
      />
    )}
    {componentNames.has("Q2") && (
      <CSD18531Q5A
        name="Q2"
        schSectionName={schSectionName}
        schX={-1.645 * schematicScale}
        schY={-1.5262 * schematicScale}
      />
    )}
    {componentNames.has("Q3") && (
      <SQ4850EY
        name="Q3"
        schSectionName={schSectionName}
        schX={-6.5801 * schematicScale}
        schY={7.0645 * schematicScale}
      />
    )}
    {componentNames.has("U1") && (
      <LM74610QDGKRQ1
        name="U1"
        schSectionName={schSectionName}
        schX={-6.7629 * schematicScale}
        schY={4.5695 * schematicScale}
        schWidth="2.5mm"
        schHeight="2.2mm"
        schPinArrangement={{
          leftSide: {
            direction: "top-to-bottom",
            pins: [7, 1, 4, 8],
          },
          rightSide: {
            direction: "top-to-bottom",
            pins: [6, 2, 3, 5],
          },
        }}
      />
    )}
    {componentNames.has("U2") && (
      <LM25122QPWPTQ1
        name="U2"
        schSectionName={schSectionName}
        schX={-6.3973 * schematicScale}
        schY={-5.1179 * schematicScale}
        schWidth="3.2mm"
        schHeight="5.2mm"
        schPinArrangement={{
          leftSide: {
            direction: "top-to-bottom",
            pins: [5, 6, 12, 11, 10, 7, 14, 8, 1, 2, 9],
          },
          rightSide: {
            direction: "top-to-bottom",
            pins: [4, 3, 13, 17, 20, 18, 16, 19, 15, 21],
          },
        }}
        schPinStyle={{
          pin13: { marginTop: 0.2 },
          pin17: { marginTop: 0.2 },
          pin20: { marginTop: 0.2 },
          pin18: { marginTop: 0.2 },
          pin16: { marginTop: 0.2 },
          pin19: { marginTop: 0.2 },
          pin15: { marginTop: 0.2 },
          pin21: { marginTop: 0.2 },
        }}
        noConnect={["pin1"]}
      />
    )}
    {componentNames.has("U3") && (
      <LM536035QPWPRQ1
        name="U3"
        schSectionName={schSectionName}
        schX={7.8596 * schematicScale}
        schY={-5.3007 * schematicScale}
        schWidth="3.0707mm"
        schHeight="4.6061mm"
        schPinArrangement={{
          leftSide: {
            direction: "top-to-bottom",
            pins: [12, 13, 11, 8, 4, 7, 6, 14],
          },
          rightSide: {
            direction: "top-to-bottom",
            pins: [3, 1, 2, 9, 5],
          },
          bottomSide: {
            direction: "left-to-right",
            pins: [10, 15, 16, 17],
          },
        }}
      />
    )}
    {componentNames.has("U4") && (
      <TPS3808G01QDBVRQ1
        name="U4"
        schSectionName={schSectionName}
        schX={10.053 * schematicScale}
        schY={4.7523 * schematicScale}
        schWidth="2.4mm"
        schHeight="1.9mm"
        schPinArrangement={{
          leftSide: {
            direction: "top-to-bottom",
            pins: [6, 4, 3],
          },
          rightSide: {
            direction: "top-to-bottom",
            pins: [1, 5, 2],
          },
        }}
        noConnect={["pin3"]}
      />
    )}
  </>
);

type Tida00699ReferenceSectionContentsProps = {
  sectionName: Tida00699ReferenceSectionName;
};

/**
 * Component centers are converted from the official TIDA-00699 source with
 * schX = sourceX * 1.4 and schY = sourceY * 1.4. The same transform is used
 * for the source annotations. Native schematic sections derive their own
 * dividers from those fixed component centers.
 */
export const Tida00699ReferenceSectionContents = ({
  sectionName,
}: Tida00699ReferenceSectionContentsProps) => {
  const componentNames = new Set(referenceComponentNamesBySection[sectionName]);
  const referenceSectionVisual = referenceSectionVisualByName[sectionName];
  const referenceTraceProps = createReferenceTraceProps({
    connectedComponents: referenceConnectedComponents.filter(({ name }) =>
      componentNames.has(name),
    ),
  });

  return (
    <>
      <schematicsection
        name={sectionName}
        displayName={referenceSectionVisual.title}
        sectionTitleFontSize="0.18mm"
      />
      {referenceSectionVisual.annotations?.[0] && (
        <schematictext
          text={referenceSectionVisual.annotations[0].text}
          schX={
            referenceSectionVisual.annotations[0].position.x * schematicScale
          }
          schY={
            referenceSectionVisual.annotations[0].position.y * schematicScale
          }
          fontSize={0.2}
        />
      )}
      {referenceSectionVisual.annotations?.[1] && (
        <schematictext
          text={referenceSectionVisual.annotations[1].text}
          schX={
            referenceSectionVisual.annotations[1].position.x * schematicScale
          }
          schY={
            referenceSectionVisual.annotations[1].position.y * schematicScale
          }
          fontSize={0.2}
        />
      )}
      {referenceCapacitors
        .filter(({ name }) => componentNames.has(name))
        .map((capacitorProps) => (
          <ReferenceCapacitor
            key={capacitorProps.name}
            {...capacitorProps}
            schSectionName={sectionName}
          />
        ))}
      {referenceResistors
        .filter(({ name }) => componentNames.has(name))
        .map((resistorProps) => (
          <ReferenceResistor
            key={resistorProps.name}
            {...resistorProps}
            schSectionName={sectionName}
          />
        ))}
      {referenceInductors
        .filter(({ name }) => componentNames.has(name))
        .map((inductorProps) => (
          <ReferenceInductor
            key={inductorProps.name}
            {...inductorProps}
            schSectionName={sectionName}
          />
        ))}
      {referenceDiodes
        .filter(({ name }) => componentNames.has(name))
        .map((diodeProps) => (
          <ReferenceDiode
            key={diodeProps.name}
            {...diodeProps}
            schSectionName={sectionName}
          />
        ))}
      {referenceConnectors
        .filter(({ name }) => componentNames.has(name))
        .map((pinHeaderProps) => (
          <ReferencePinHeader
            key={pinHeaderProps.name}
            {...pinHeaderProps}
            schSectionName={sectionName}
          />
        ))}
      {referenceTestpoints
        .filter(({ name }) => componentNames.has(name))
        .map((testpointProps) => (
          <ReferenceTestpoint
            key={testpointProps.name}
            {...testpointProps}
            schSectionName={sectionName}
          />
        ))}
      <ReferenceSpecialComponents
        componentNames={componentNames}
        schSectionName={sectionName}
      />
      {referenceTraceProps.map((traceProps) => (
        <ReferenceTrace
          key={`${traceProps.from}->${traceProps.to}`}
          {...traceProps}
        />
      ))}
    </>
  );
};

export const Tida00699ReferenceNets = () => (
  <>
    <net name="GND" isGroundNet />
    <net name="VBAT" isPowerNet />
    <net name="VBAT_PROTECT" isPowerNet />
    <net name="VBAT_FILT" isPowerNet />
    <net name="VBST" isPowerNet />
    <net name="VSYS" isPowerNet />
  </>
);
