import type { ChipProps } from "@tscircuit/props";
import "tscircuit";

export const TLV1805QDBVRQ1_PIN_LABELS = {
  pin1: "OUT",
  pin2: ["V-", "V_MINUS"],
  pin3: ["IN-", "IN_MINUS"],
  pin4: ["IN+", "IN_PLUS"],
  pin5: ["SHDN", "SD"],
  pin6: ["V+", "V_PLUS"],
} as const;

type SymbolPinProps = {
  pin: number;
  label: string;
  x: number;
  y: number;
  direction: "left" | "right" | "up" | "down";
  aliases?: readonly string[];
};

const SymbolPin = ({
  pin,
  label,
  x,
  y,
  direction,
  aliases = [],
}: SymbolPinProps) => (
  <port
    name={`pin${pin}`}
    aliases={[label, ...aliases]}
    schX={x}
    schY={y}
    direction={direction}
    schStemLength={0.508}
    schPinLabelFontSize={0.13}
    pinNumber={pin}
  />
);

/** TLV1805-Q1 DBV pinout, verified against TI datasheet SNOSD52B. */
export const TLV1805QDBVRQ1 = (
  props: ChipProps<typeof TLV1805QDBVRQ1_PIN_LABELS>,
) => (
  <chip
    manufacturerPartNumber="TLV1805QDBVRQ1"
    datasheetUrl="https://www.ti.com/lit/ds/symlink/tlv1805-q1.pdf"
    footprint="sot23_6"
    symbol={
      <symbol>
        <schematicrect
          schX={0}
          schY={0}
          width={1.016}
          height={1.27}
          strokeWidth={0.025}
          color="#840000"
          fillColor="#ffffc2"
          isFilled
        />
        <SymbolPin
          pin={3}
          label="IN-"
          aliases={["IN_MINUS"]}
          x={-1.016}
          y={0.127}
          direction="left"
        />
        <SymbolPin
          pin={4}
          label="IN+"
          aliases={["IN_PLUS"]}
          x={-1.016}
          y={-0.381}
          direction="left"
        />
        <SymbolPin
          pin={5}
          label="SHDN"
          aliases={["SD"]}
          x={-1.016}
          y={0.635}
          direction="left"
        />
        <SymbolPin pin={1} label="OUT" x={1.016} y={-0.127} direction="right" />
        <SymbolPin
          pin={6}
          label="V+"
          aliases={["V_PLUS"]}
          x={0}
          y={0.889}
          direction="up"
        />
        <SymbolPin
          pin={2}
          label="V-"
          aliases={["V_MINUS"]}
          x={0}
          y={-1.143}
          direction="down"
        />
      </symbol>
    }
    {...props}
  />
);

export default TLV1805QDBVRQ1;
