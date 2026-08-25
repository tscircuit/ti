import type { ChipProps } from "@tscircuit/props";
import "tscircuit";

export const DRV8703QRHBRQ1_PIN_LABELS = {
  pin1: "GND_1",
  pin2: ["IN1/PH", "IN1_PH"],
  pin3: ["IN2/EN", "IN2_EN"],
  pin4: "SDO",
  pin5: ["SCS", "nSCS"],
  pin6: "SDI",
  pin7: "SCLK",
  pin8: ["SLEEP", "nSLEEP"],
  pin9: ["WDFLT", "nWDFLT"],
  pin10: ["FAULT", "nFAULT"],
  pin11: "MODE",
  pin12: "DVDD",
  pin13: "GND_2",
  pin14: "AVDD",
  pin15: "VREF",
  pin16: "SO",
  pin17: "GND_3",
  pin18: "GH1",
  pin19: "SH1",
  pin20: "GL1",
  pin21: "SP",
  pin22: "SN",
  pin23: "SL2",
  pin24: "GL2",
  pin25: "SH2",
  pin26: "GH2",
  pin27: "VDRAIN",
  pin28: ["PVDD", "VM"],
  pin29: "VCP",
  pin30: "CPH",
  pin31: "CPL",
  pin32: "NC",
  pin33: ["PAD", "THERMAL_PAD"],
} as const;

const leftPins = [
  { pin: 14, label: "AVDD", y: 2.558939 },
  { pin: 12, label: "DVDD", y: 2.193376 },
  { pin: 28, label: "PVDD", aliases: ["VM"], y: 1.827813 },
  { pin: 27, label: "VDRAIN", y: 1.462251 },
  { pin: 29, label: "VCP", y: 1.096688 },
  { pin: 30, label: "CPH", y: 0.731125 },
  { pin: 31, label: "CPL", y: 0.182781 },
  { pin: 2, label: "IN1/PH", aliases: ["IN1_PH"], y: -0.182782 },
  { pin: 3, label: "IN2/EN", aliases: ["IN2_EN"], y: -0.548345 },
  { pin: 8, label: "SLEEP", aliases: ["nSLEEP"], y: -0.913907 },
  { pin: 11, label: "MODE", y: -1.27947 },
  { pin: 9, label: "WDFLT", aliases: ["nWDFLT"], y: -1.645033 },
  { pin: 7, label: "SCLK", y: -2.010596 },
  { pin: 6, label: "SDI", y: -2.193377 },
  { pin: 4, label: "SDO", y: -2.376158 },
  { pin: 5, label: "SCS", aliases: ["nSCS"], y: -2.55894 },
] as const;

const rightPins = [
  { pin: 18, label: "GH1", y: 2.558939 },
  { pin: 19, label: "SH1", y: 2.193376 },
  { pin: 20, label: "GL1", y: 1.827813 },
  { pin: 26, label: "GH2", y: 1.462251 },
  { pin: 25, label: "SH2", y: 1.096688 },
  { pin: 24, label: "GL2", y: 0.731125 },
  { pin: 23, label: "SL2", y: 0.365562 },
  { pin: 21, label: "SP", y: 0 },
  { pin: 22, label: "SN", y: -0.365563 },
  { pin: 16, label: "SO", y: -0.731126 },
  { pin: 15, label: "VREF", y: -1.096689 },
  { pin: 10, label: "FAULT", aliases: ["nFAULT"], y: -1.462252 },
  { pin: 32, label: "NC", y: -1.827814 },
  { pin: 1, label: "GND", aliases: ["GND_1"], y: -2.193377 },
  { pin: 13, label: "GND", aliases: ["GND_2"], y: -2.376158 },
  { pin: 17, label: "GND", aliases: ["GND_3"], y: -2.558939 },
  { pin: 33, label: "PAD", aliases: ["THERMAL_PAD"], y: -2.741721 },
] as const;

type HorizontalPinProps = {
  pin: number;
  label: string;
  y: number;
  side: "left" | "right";
  aliases?: readonly string[];
};

const HorizontalPin = ({
  pin,
  label,
  y,
  side,
  aliases = [],
}: HorizontalPinProps) => {
  const isLeft = side === "left";
  return (
    <>
      <port
        name={`pin${pin}`}
        aliases={[label, ...aliases]}
        schX={isLeft ? -1.462251 : 1.462251}
        schY={y}
        direction={side}
        schStemLength={0.365563}
        schPinLabelFontSize={0.13}
        pinNumber={pin}
      />
      <schematictext
        text={String(pin)}
        schX={isLeft ? -1.15 : 1.15}
        schY={y}
        fontSize={0.11}
        anchor={isLeft ? "right" : "left"}
        color="#840000"
      />
    </>
  );
};

/** DRV8703-Q1 automotive H-bridge gate driver in the 32-pin RHB VQFN. */
export const DRV8703QRHBRQ1 = (
  props: ChipProps<typeof DRV8703QRHBRQ1_PIN_LABELS>,
) => (
  <chip
    manufacturerPartNumber="DRV8703QRHBRQ1"
    datasheetUrl="https://www.ti.com/lit/ds/symlink/drv8703-q1.pdf"
    footprint="kicad:Package_DFN_QFN/Texas_RHB0032E_VQFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm"
    symbol={
      <symbol>
        <schematicrect
          schX={0}
          schY={0}
          width={2.193377}
          height={5.849004}
          strokeWidth={0}
          color="#ffffc2"
          isFilled
          fillColor="#ffffc2"
        />
        <schematicrect
          schX={0}
          schY={0}
          width={2.193377}
          height={5.849004}
          strokeWidth={0.025}
          color="#840000"
        />

        {leftPins.map((pin) => (
          <HorizontalPin key={`left-${pin.pin}`} {...pin} side="left" />
        ))}
        {rightPins.map((pin) => (
          <HorizontalPin key={`right-${pin.pin}`} {...pin} side="right" />
        ))}

        {/* The custom-symbol path does not render the chip-level noConnect
            marker, so reproduce the two Altium crosses at their pin ends. */}
        <schematicline
          x1={-1.542251}
          y1={-1.725033}
          x2={-1.382251}
          y2={-1.565033}
          strokeWidth={0.035}
          color="#ff0000"
        />
        <schematicline
          x1={-1.542251}
          y1={-1.565033}
          x2={-1.382251}
          y2={-1.725033}
          strokeWidth={0.035}
          color="#ff0000"
        />
        <schematicline
          x1={1.382251}
          y1={-1.907814}
          x2={1.542251}
          y2={-1.747814}
          strokeWidth={0.035}
          color="#ff0000"
        />
        <schematicline
          x1={1.382251}
          y1={-1.747814}
          x2={1.542251}
          y2={-1.907814}
          strokeWidth={0.035}
          color="#ff0000"
        />
      </symbol>
    }
    {...props}
  />
);

export default DRV8703QRHBRQ1;
