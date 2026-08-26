import { Fragment } from "react";
import "tscircuit";

type GroupedPowerMosfetSymbolProps = {
  orientation: "horizontal" | "vertical";
  sourcePins: readonly number[];
  drainPins: readonly number[];
};

const SOURCE_DRAIN_OFFSET = 0.5483441408059289 * 1.4;
const CHANNEL_OFFSET = 0.06397348309402417 * 1.4;
const GATE_OFFSET = 0.6671520379805465 * 1.4;

/** Native TSX symbol matching the grouped MOSFET pins in TIDA-00699. */
export const GroupedPowerMosfetSymbol = ({
  orientation,
  sourcePins,
  drainPins,
}: GroupedPowerMosfetSymbolProps) => {
  const isHorizontal = orientation === "horizontal";
  const sourcePosition = isHorizontal
    ? { x: -SOURCE_DRAIN_OFFSET, y: CHANNEL_OFFSET, direction: "left" as const }
    : {
        x: CHANNEL_OFFSET,
        y: -SOURCE_DRAIN_OFFSET,
        direction: "down" as const,
      };
  const drainPosition = isHorizontal
    ? { x: SOURCE_DRAIN_OFFSET, y: CHANNEL_OFFSET, direction: "right" as const }
    : { x: CHANNEL_OFFSET, y: SOURCE_DRAIN_OFFSET, direction: "up" as const };
  const gatePosition = isHorizontal
    ? { x: 0, y: -GATE_OFFSET, direction: "down" as const }
    : { x: -GATE_OFFSET, y: 0, direction: "left" as const };

  return (
    <symbol>
      {[...sourcePins, ...drainPins].map((pin) => {
        const position = sourcePins.includes(pin)
          ? sourcePosition
          : drainPosition;
        return (
          <Fragment key={`mosfet-pin-${pin}`}>
            <port
              name={`pin${pin}`}
              pinNumber={pin}
              schX={position.x}
              schY={position.y}
              direction={position.direction}
              schStemLength={0.42}
            />
          </Fragment>
        );
      })}
      <port
        name="pin4"
        pinNumber={4}
        schX={gatePosition.x}
        schY={gatePosition.y}
        direction={gatePosition.direction}
        schStemLength={0.56}
      />

      <schematiccircle
        center={
          isHorizontal
            ? { x: 0, y: CHANNEL_OFFSET }
            : { x: CHANNEL_OFFSET, y: 0 }
        }
        radius={0.29}
        strokeWidth={0.02}
        color="#840000"
      />
      {isHorizontal ? (
        <>
          <schematicline
            x1={-0.34}
            y1={CHANNEL_OFFSET}
            x2={-0.08}
            y2={CHANNEL_OFFSET}
            strokeWidth={0.025}
            color="#840000"
          />
          <schematicline
            x1={0.08}
            y1={CHANNEL_OFFSET}
            x2={0.34}
            y2={CHANNEL_OFFSET}
            strokeWidth={0.025}
            color="#840000"
          />
          <schematicline
            x1={-0.08}
            y1={-0.03}
            x2={-0.08}
            y2={0.21}
            strokeWidth={0.025}
            color="#840000"
          />
          <schematicline
            x1={0.08}
            y1={-0.03}
            x2={0.08}
            y2={0.21}
            strokeWidth={0.025}
            color="#840000"
          />
          <schematicline
            x1={-0.08}
            y1={-0.03}
            x2={0.08}
            y2={-0.03}
            strokeWidth={0.025}
            color="#840000"
          />
        </>
      ) : (
        <>
          <schematicline
            x1={CHANNEL_OFFSET}
            y1={-0.34}
            x2={CHANNEL_OFFSET}
            y2={-0.08}
            strokeWidth={0.025}
            color="#840000"
          />
          <schematicline
            x1={CHANNEL_OFFSET}
            y1={0.08}
            x2={CHANNEL_OFFSET}
            y2={0.34}
            strokeWidth={0.025}
            color="#840000"
          />
          <schematicline
            x1={-0.03}
            y1={-0.08}
            x2={0.21}
            y2={-0.08}
            strokeWidth={0.025}
            color="#840000"
          />
          <schematicline
            x1={-0.03}
            y1={0.08}
            x2={0.21}
            y2={0.08}
            strokeWidth={0.025}
            color="#840000"
          />
          <schematicline
            x1={-0.03}
            y1={-0.08}
            x2={-0.03}
            y2={0.08}
            strokeWidth={0.025}
            color="#840000"
          />
        </>
      )}
      <schematictext
        text={sourcePins.join(",")}
        schX={isHorizontal ? -0.35 : 0.29}
        schY={isHorizontal ? 0.24 : -0.31}
        fontSize={0.12}
        anchor="center"
        color="#840000"
      />
      <schematictext
        text={drainPins.filter((pin) => pin === 7 || pin === 8).join(",")}
        schX={isHorizontal ? 0.34 : 0.28}
        schY={isHorizontal ? 0.22 : 0.3}
        fontSize={0.12}
        anchor="center"
        color="#840000"
      />
      <schematictext
        text={drainPins.filter((pin) => pin === 5 || pin === 6).join(",")}
        schX={isHorizontal ? 0.34 : 0.28}
        schY={isHorizontal ? -0.04 : 0.1}
        fontSize={0.12}
        anchor="center"
        color="#840000"
      />
      <schematictext
        text="4"
        schX={isHorizontal ? 0.12 : -0.32}
        schY={isHorizontal ? -0.42 : -0.12}
        fontSize={0.12}
        anchor="center"
        color="#840000"
      />
      <schematictext
        text="{NAME}"
        schX={isHorizontal ? 0 : 0.46}
        schY={isHorizontal ? 0.54 : 0}
        fontSize={0.18}
        anchor="center"
        color="#006464"
      />
    </symbol>
  );
};
