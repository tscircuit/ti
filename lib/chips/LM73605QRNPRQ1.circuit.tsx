import type { ChipProps } from "@tscircuit/props";
import "tscircuit";

export const LM73605QRNPRQ1_PIN_LABELS = {
  pin1: "SW_1",
  pin2: "SW_2",
  pin3: "SW_3",
  pin4: "SW_4",
  pin5: "SW_5",
  pin6: "CBOOT",
  pin7: "VCC",
  pin8: "BIAS",
  pin9: "RT",
  pin10: ["SS/TRK", "SS_TRK"],
  pin11: "FB",
  pin12: "NC_12",
  pin13: "NC_13",
  pin14: "NC_14",
  pin15: "NC_15",
  pin16: "PGOOD",
  pin17: ["SYNC/MODE", "SYNC_MODE"],
  pin18: "EN",
  pin19: "AGND",
  pin20: "VIN_20",
  pin21: "VIN_21",
  pin22: "VIN_22",
  pin23: "PGND_23",
  pin24: "PGND_24",
  pin25: "PGND_25",
  pin26: "PGND_26",
  pin27: "NC_27",
  pin28: "NC_28",
  pin29: "NC_29",
  pin30: "NC_30",
  pin31: ["DAP", "PAD"],
} as const;

const leftPins = [
  { pin: 20, label: "VIN", aliases: ["VIN_20"], y: 2.54 },
  { pin: 21, label: "VIN", aliases: ["VIN_21"], y: 2.286 },
  { pin: 22, label: "VIN", aliases: ["VIN_22"], y: 2.032 },
  { pin: 18, label: "EN", y: 1.524 },
  { pin: 7, label: "VCC", y: 0.762 },
  { pin: 9, label: "RT", y: 0.254 },
  { pin: 17, label: "SYNC/MODE", aliases: ["SYNC_MODE"], y: -0.254 },
  { pin: 12, label: "NC", aliases: ["NC_12"], y: -1.016 },
  { pin: 13, label: "NC", aliases: ["NC_13"], y: -1.27 },
  { pin: 14, label: "NC", aliases: ["NC_14"], y: -1.524 },
  { pin: 15, label: "NC", aliases: ["NC_15"], y: -1.778 },
  { pin: 27, label: "NC", aliases: ["NC_27"], y: -2.032 },
  { pin: 28, label: "NC", aliases: ["NC_28"], y: -2.286 },
  { pin: 29, label: "NC", aliases: ["NC_29"], y: -2.54 },
  { pin: 30, label: "NC", aliases: ["NC_30"], y: -2.794 },
] as const;

const rightPins = [
  { pin: 6, label: "CBOOT", y: 2.54 },
  { pin: 1, label: "SW", aliases: ["SW_1"], y: 2.032 },
  { pin: 2, label: "SW", aliases: ["SW_2"], y: 1.778 },
  { pin: 3, label: "SW", aliases: ["SW_3"], y: 1.524 },
  { pin: 4, label: "SW", aliases: ["SW_4"], y: 1.27 },
  { pin: 5, label: "SW", aliases: ["SW_5"], y: 1.016 },
  { pin: 16, label: "PGOOD", y: 0.508 },
  { pin: 8, label: "BIAS", y: 0 },
  { pin: 11, label: "FB", y: -0.508 },
  { pin: 10, label: "SS/TRK", aliases: ["SS_TRK"], y: -1.016 },
  { pin: 19, label: "AGND", y: -1.524 },
  { pin: 23, label: "PGND", aliases: ["PGND_23"], y: -1.778 },
  { pin: 24, label: "PGND", aliases: ["PGND_24"], y: -2.032 },
  { pin: 25, label: "PGND", aliases: ["PGND_25"], y: -2.286 },
  { pin: 26, label: "PGND", aliases: ["PGND_26"], y: -2.54 },
  { pin: 31, label: "DAP", aliases: ["PAD"], y: -2.794 },
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
    <port
      name={`pin${pin}`}
      aliases={[label, ...aliases]}
      schX={isLeft ? -2.032 : 2.032}
      schY={y}
      direction={side}
      schStemLength={0.508}
      schPinLabelFontSize={0.12}
      pinNumber={pin}
    />
  );
};

/** LM73605-Q1 RNP pinout, verified against TI datasheet SNVSB12B. */
export const LM73605QRNPRQ1 = (
  props: ChipProps<typeof LM73605QRNPRQ1_PIN_LABELS>,
) => (
  <chip
    manufacturerPartNumber="LM73605QRNPRQ1"
    datasheetUrl="https://www.ti.com/lit/ds/symlink/lm73605-q1.pdf"
    footprint="kicad:Package_DFN_QFN/Texas_RNP0030B_WQFN-30-1EP_4x6mm_P0.5mm_EP1.8x4.5mm"
    symbol={
      <symbol>
        <schematicrect
          schX={0}
          schY={-0.127}
          width={3.048}
          height={6.096}
          strokeWidth={0.025}
          color="#840000"
          fillColor="#ffffc2"
          isFilled
        />
        {leftPins.map((pin) => (
          <HorizontalPin key={`left-${pin.pin}`} {...pin} side="left" />
        ))}
        {rightPins.map((pin) => (
          <HorizontalPin key={`right-${pin.pin}`} {...pin} side="right" />
        ))}
      </symbol>
    }
    {...props}
  />
);

export default LM73605QRNPRQ1;
