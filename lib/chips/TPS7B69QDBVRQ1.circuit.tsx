import type { ChipProps } from "@tscircuit/props";
import "tscircuit";

const pinLabels = {
  pin1: "VIN",
  pin2: "NC",
  pin3: ["GND_3", "GND"],
  pin4: ["GND_4", "GND"],
  pin5: "VOUT",
} as const;

type TPS7B69Variant = "TPS7B6933QDBVRQ1" | "TPS7B6950QDBVRQ1";

type TPS7B69Props = ChipProps<typeof pinLabels> & {
  manufacturerPartNumber: TPS7B69Variant;
};

/**
 * TIDA-01421 TPS7B69-Q1 SOT-23-5 symbol shared by the 3.3 V and 5 V variants.
 * Pin numbers are verified against the TPS7B69-Q1 DBV package table.
 */
export const TPS7B69QDBVRQ1 = ({
  manufacturerPartNumber,
  ...props
}: TPS7B69Props) => (
  <chip
    manufacturerPartNumber={manufacturerPartNumber}
    datasheetUrl="https://www.ti.com/lit/gpn/TPS7B69-Q1"
    footprint="kicad:Package_TO_SOT_SMD/SOT-23-5"
    pinLabels={pinLabels}
    schWidth={3.6}
    schHeight={3}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VIN", "NC"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["VOUT", "GND_3", "GND_4"],
      },
    }}
    schPinStyle={{
      NC: { marginTop: 1.2 },
      GND_3: { marginTop: 0.6 },
    }}
    {...props}
  />
);

export const TPS7B6933QDBVRQ1 = (
  props: Omit<TPS7B69Props, "manufacturerPartNumber">,
) => <TPS7B69QDBVRQ1 manufacturerPartNumber="TPS7B6933QDBVRQ1" {...props} />;

export const TPS7B6950QDBVRQ1 = (
  props: Omit<TPS7B69Props, "manufacturerPartNumber">,
) => <TPS7B69QDBVRQ1 manufacturerPartNumber="TPS7B6950QDBVRQ1" {...props} />;

export default TPS7B69QDBVRQ1;
