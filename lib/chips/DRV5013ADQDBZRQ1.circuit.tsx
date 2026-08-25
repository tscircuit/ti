import type { ChipProps } from "@tscircuit/props";
import "tscircuit";

export const DRV5013ADQDBZRQ1_PIN_LABELS = {
  pin1: ["VCC", "VS"],
  pin2: ["OUT", "OUTPUT"],
  pin3: ["GND"],
} as const;

type HallSensorPinProps = {
  aliases: readonly string[];
  direction: "left" | "right";
  pin: number;
  schX: number;
  schY: number;
};

const HallSensorPin = ({
  aliases,
  direction,
  pin,
  schX,
  schY,
}: HallSensorPinProps) => (
  <>
    <port
      name={`pin${pin}`}
      aliases={[...aliases]}
      schX={schX}
      schY={schY}
      direction={direction}
      schStemLength={0.365563}
      schPinLabelFontSize={0.13}
      pinNumber={pin}
    />
    <schematictext
      text={String(pin)}
      schX={direction === "left" ? -1.03 : 1.03}
      schY={schY}
      fontSize={0.11}
      anchor={direction === "left" ? "right" : "left"}
      color="#840000"
    />
  </>
);

/**
 * DRV5013ADQDBZRQ1 automotive Hall-effect latch in TI's three-pin DBZ
 * (SOT-23) package.
 *
 * The DRV5013-Q1 data sheet defines DBZ pin 1 as VCC, pin 2 as the open-drain
 * OUT, and pin 3 as GND. No native Hall-effect symbol is currently available,
 * so this small native TSX symbol follows the pin sides and spacing in the
 * TIDA-01389 Altium source without embedding source artwork.
 */
export const DRV5013ADQDBZRQ1 = (
  props: ChipProps<typeof DRV5013ADQDBZRQ1_PIN_LABELS>,
) => (
  <chip
    manufacturerPartNumber="DRV5013ADQDBZRQ1"
    datasheetUrl="https://www.ti.com/lit/ds/symlink/drv5013-q1.pdf"
    footprint="sot23"
    pinLabels={DRV5013ADQDBZRQ1_PIN_LABELS}
    symbol={
      <symbol>
        <schematicrect
          schX={0}
          schY={0}
          width={2.193377}
          height={1.096689}
          strokeWidth={0}
          color="#ffffc2"
          isFilled
          fillColor="#ffffc2"
        />
        <schematicrect
          schX={0}
          schY={0}
          width={2.193377}
          height={1.096689}
          strokeWidth={0.025}
          color="#840000"
        />
        <HallSensorPin
          pin={1}
          aliases={["VCC", "VS"]}
          direction="left"
          schX={-1.462251}
          schY={0.182781}
        />
        <HallSensorPin
          pin={2}
          aliases={["OUT", "OUTPUT"]}
          direction="right"
          schX={1.462251}
          schY={0.182781}
        />
        <HallSensorPin
          pin={3}
          aliases={["GND"]}
          direction="right"
          schX={1.462251}
          schY={-0.365563}
        />
      </symbol>
    }
    {...props}
  />
);

export default DRV5013ADQDBZRQ1;
