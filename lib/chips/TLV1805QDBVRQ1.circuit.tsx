import type { ChipProps } from "@tscircuit/props";
import "tscircuit";

export const TLV1805QDBVRQ1_PIN_LABELS = {
  pin1: ["O", "OUT"],
  pin2: ["VM", "V_MINUS"],
  pin3: ["N", "IN_MINUS"],
  pin4: ["P", "IN_PLUS"],
  pin5: ["SD", "SHDN"],
  pin6: ["VP", "V_PLUS"],
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
    pcbPinLabels={{
      pin1: "OUT",
      pin2: "V_MINUS",
      pin3: "IN_MINUS",
      pin4: "IN_PLUS",
      pin5: "SHDN",
      pin6: "V_PLUS",
    }}
    showPinAliases={false}
    symbol={
      <symbol>
        <schematicpath
          points={[
            { x: -0.4, y: 0.4 },
            { x: 0.4, y: 0 },
            { x: -0.4, y: -0.4 },
            { x: -0.4, y: 0.4 },
          ]}
          strokeWidth={0.04}
        />
        <schematictext
          text="{NAME}"
          schX={-0.13}
          schY={0.13}
          fontSize={0.075}
          anchor="center"
        />
        <schematictext
          text="TLV1805-Q1"
          schX={-0.1}
          schY={-0.12}
          fontSize={0.055}
          anchor="center"
        />
        <port
          name="pin5"
          pinNumber={5}
          schX={-0.65}
          schY={0.28}
          direction="left"
          schStemLength={0.25}
          schPinLabelFontSize={0.1}
        />
        <port
          name="pin3"
          pinNumber={3}
          schX={-0.65}
          schY={0}
          direction="left"
          schStemLength={0.25}
          schPinLabelFontSize={0.1}
        />
        <port
          name="pin4"
          pinNumber={4}
          schX={-0.65}
          schY={-0.28}
          direction="left"
          schStemLength={0.25}
          schPinLabelFontSize={0.1}
        />
        <port
          name="pin1"
          pinNumber={1}
          schX={0.65}
          schY={0}
          direction="right"
          schStemLength={0.25}
          schPinLabelFontSize={0.075}
        />
        <port
          name="pin6"
          pinNumber={6}
          schX={0.2}
          schY={0.45}
          direction="up"
          schStemLength={0.35}
          schPinLabelFontSize={0.065}
        />
        <port
          name="pin2"
          pinNumber={2}
          schX={0.2}
          schY={-0.45}
          direction="down"
          schStemLength={0.35}
          schPinLabelFontSize={0.065}
        />
      </symbol>
    }
    {...props}
  />
);

export default TLV1805QDBVRQ1;
