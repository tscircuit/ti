import type { ChipProps } from "@tscircuit/props";
import "tscircuit";

export const TPS3850H33QDRCRQ1_PIN_LABELS = {
  pin1: "VDD",
  pin2: "CWD",
  pin3: "SET0",
  pin4: "CRST",
  pin5: "GND",
  pin6: "SET1",
  pin7: "WDI",
  pin8: ["WDO", "nWDO"],
  pin9: ["RESET", "nRESET"],
  pin10: "SENSE",
  pin11: ["PAD", "THERMAL_PAD"],
} as const;

const pins = [
  { pin: 1, label: "VDD", x: -2.286, y: 1.016, direction: "left" },
  { pin: 2, label: "CWD", x: -2.286, y: 0.508, direction: "left" },
  { pin: 3, label: "SET0", x: -2.286, y: 0.254, direction: "left" },
  { pin: 6, label: "SET1", x: -2.286, y: 0, direction: "left" },
  { pin: 4, label: "CRST", x: -2.286, y: -0.508, direction: "left" },
  { pin: 10, label: "SENSE", x: -2.286, y: -1.016, direction: "left" },
  {
    pin: 9,
    label: "RESET",
    aliases: ["nRESET"],
    x: 2.286,
    y: 1.016,
    direction: "right",
  },
  { pin: 7, label: "WDI", x: 2.286, y: 0.508, direction: "right" },
  {
    pin: 8,
    label: "WDO",
    aliases: ["nWDO"],
    x: 2.286,
    y: 0,
    direction: "right",
  },
  { pin: 5, label: "GND", x: 2.286, y: -1.016, direction: "right" },
  {
    pin: 11,
    label: "PAD",
    aliases: ["THERMAL_PAD"],
    x: 2.286,
    y: -1.27,
    direction: "right",
  },
] as const;

type SymbolPinProps = (typeof pins)[number];

const SymbolPin = (pin: SymbolPinProps) => (
  <port
    name={`pin${pin.pin}`}
    aliases={[pin.label, ...("aliases" in pin ? pin.aliases : [])]}
    schX={pin.x}
    schY={pin.y}
    direction={pin.direction}
    schStemLength={0.508}
    schPinLabelFontSize={0.13}
    pinNumber={pin.pin}
  />
);

/** TPS3850-Q1 DRC pinout, verified against TI datasheet SBVS264B. */
export const TPS3850H33QDRCRQ1 = (
  props: ChipProps<typeof TPS3850H33QDRCRQ1_PIN_LABELS>,
) => (
  <chip
    manufacturerPartNumber="TPS3850H33QDRCRQ1"
    datasheetUrl="https://www.ti.com/lit/ds/symlink/tps3850-q1.pdf"
    footprint="kicad:Package_SON/Texas_DRC0010J"
    symbol={
      <symbol>
        <schematicrect
          schX={0}
          schY={-0.127}
          width={3.556}
          height={3.048}
          strokeWidth={0.025}
          color="#840000"
          fillColor="#ffffc2"
          isFilled
        />
        {pins.map((pin) => (
          <SymbolPin key={`pin-${pin.pin}`} {...pin} />
        ))}
      </symbol>
    }
    {...props}
  />
);

export default TPS3850H33QDRCRQ1;
