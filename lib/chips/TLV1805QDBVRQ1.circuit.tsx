import type { ChipProps } from "@tscircuit/props";
import "tscircuit";

export const TLV1805QDBVRQ1_PIN_LABELS = {
  pin1: "OUT",
  pin2: "V_MINUS",
  pin3: "IN_MINUS",
  pin4: "IN_PLUS",
  pin5: ["SHDN", "SD"],
  pin6: "V_PLUS",
} as const;

/** TLV1805-Q1 DBV pinout, verified against TI datasheet SNOSD52B. */
export const TLV1805QDBVRQ1 = (
  props: ChipProps<typeof TLV1805QDBVRQ1_PIN_LABELS>,
) => (
  <chip
    manufacturerPartNumber="TLV1805QDBVRQ1"
    datasheetUrl="https://www.ti.com/lit/ds/symlink/tlv1805-q1.pdf"
    footprint="sot23_6"
    pinLabels={TLV1805QDBVRQ1_PIN_LABELS}
    showPinAliases={false}
    symbol={
      <symbol>
        <schematicpath
          points={[
            { x: -1.4, y: 1.15 },
            { x: 1.35, y: 0 },
            { x: -1.4, y: -1.15 },
            { x: -1.4, y: 1.15 },
          ]}
          strokeWidth={0.04}
        />
        <schematictext
          text="{NAME}"
          schX={0.35}
          schY={0.95}
          fontSize={0.2}
          anchor="left"
        />
        <schematictext
          text="TLV1805-Q1"
          schX={0.35}
          schY={0.7}
          fontSize={0.16}
          anchor="left"
        />
        <schematictext text="−" schX={-1.05} schY={0.24} fontSize={0.3} />
        <schematictext text="+" schX={-1.05} schY={-0.42} fontSize={0.3} />
        <port
          name="pin5"
          pinNumber={5}
          schX={-1.9}
          schY={0.78}
          direction="left"
          schStemLength={0.5}
          schPinLabelFontSize="sm"
        />
        <port
          name="pin3"
          pinNumber={3}
          schX={-1.9}
          schY={0.24}
          direction="left"
          schStemLength={0.5}
          schPinLabelFontSize="sm"
        />
        <port
          name="pin4"
          pinNumber={4}
          schX={-1.9}
          schY={-0.42}
          direction="left"
          schStemLength={0.5}
          schPinLabelFontSize="sm"
        />
        <port
          name="pin1"
          pinNumber={1}
          schX={1.85}
          schY={0}
          direction="right"
          schStemLength={0.5}
          schPinLabelFontSize="sm"
        />
        <port
          name="pin6"
          pinNumber={6}
          schX={0}
          schY={1.7}
          direction="up"
          schStemLength={0.8}
          schPinLabelFontSize="sm"
        />
        <port
          name="pin2"
          pinNumber={2}
          schX={0}
          schY={-1.7}
          direction="down"
          schStemLength={0.8}
          schPinLabelFontSize="sm"
        />
      </symbol>
    }
    {...props}
  />
);

export default TLV1805QDBVRQ1;
