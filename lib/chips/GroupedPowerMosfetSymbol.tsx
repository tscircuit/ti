import { Fragment } from "react";
import { type SchSymbol, symbols } from "schematic-symbols";
import "tscircuit";

type GroupedPowerMosfetSymbolProps = {
  orientation: "horizontal" | "vertical";
  sourcePins: readonly number[];
  drainPins: readonly number[];
};

const MOSFET_SYMBOL_NAMES = {
  horizontal: "n_channel_e_mosfet_transistor_gate_bottom_drain_right",
  vertical: "n_channel_e_mosfet_transistor_gate_left_drain_top",
} as const;

const PORT_DIRECTIONS = {
  horizontal: {
    drain: "right",
    source: "left",
    gate: "down",
  },
  vertical: {
    drain: "up",
    source: "down",
    gate: "left",
  },
} as const;

const PRIMARY_COLOR = "#840000";
const REFERENCE_COLOR = "#006464";

const getNativeMosfetSymbol = (symbolName: string): SchSymbol | undefined =>
  Object.entries(symbols).find(
    ([candidateSymbolName]) => candidateSymbolName === symbolName,
  )?.[1];

/**
 * Adapts the standard tscircuit N-channel MOSFET symbol to a package whose
 * source and drain each occupy several internally connected physical pins.
 * Only one representative pin per electrical terminal is drawn, so the
 * schematic stays legible while the chip retains every real package pad.
 */
export const GroupedPowerMosfetSymbol = ({
  orientation,
  sourcePins,
  drainPins,
}: GroupedPowerMosfetSymbolProps) => {
  const nativeSymbol = getNativeMosfetSymbol(MOSFET_SYMBOL_NAMES[orientation]);
  if (!nativeSymbol) {
    throw new Error("The native N-channel MOSFET symbol is unavailable");
  }
  const drainPort = nativeSymbol.ports.find((port) =>
    port.labels.includes("drain"),
  );
  const sourcePort = nativeSymbol.ports.find((port) =>
    port.labels.includes("source"),
  );
  const gatePort = nativeSymbol.ports.find((port) =>
    port.labels.includes("gate"),
  );

  if (!drainPort || !sourcePort || !gatePort) {
    throw new Error("The native N-channel MOSFET symbol is missing a port");
  }

  const directions = PORT_DIRECTIONS[orientation];

  return (
    <symbol width={nativeSymbol.size.width} height={nativeSymbol.size.height}>
      <port
        name={`pin${drainPins[0]}`}
        pinNumber={drainPins[0]}
        schX={drainPort.x}
        schY={drainPort.y}
        direction={directions.drain}
      />
      <port
        name={`pin${sourcePins[0]}`}
        pinNumber={sourcePins[0]}
        schX={sourcePort.x}
        schY={sourcePort.y}
        direction={directions.source}
      />
      <port
        name="pin4"
        pinNumber={4}
        schX={gatePort.x}
        schY={gatePort.y}
        direction={directions.gate}
      />

      {nativeSymbol.primitives.map((primitive, index) => {
        if (primitive.type === "path") {
          return (
            <Fragment key={`native-mosfet-path-${index}`}>
              <schematicpath
                points={primitive.points}
                strokeWidth={0.02}
                strokeColor={PRIMARY_COLOR}
                isFilled={primitive.fill}
                fillColor={primitive.fill ? PRIMARY_COLOR : undefined}
              />
            </Fragment>
          );
        }

        if (primitive.type === "circle") {
          return (
            <Fragment key={`native-mosfet-circle-${index}`}>
              <schematiccircle
                center={{ x: primitive.x, y: primitive.y }}
                radius={primitive.radius}
                strokeWidth={0.02}
                color={PRIMARY_COLOR}
                isFilled={primitive.fill}
                fillColor={primitive.fill ? PRIMARY_COLOR : undefined}
              />
            </Fragment>
          );
        }

        if (primitive.type === "text" && primitive.text === "{REF}") {
          const anchor =
            primitive.anchor === "middle_left"
              ? ("center_left" as const)
              : primitive.anchor === "middle_right"
                ? ("center_right" as const)
                : ("center" as const);

          return (
            <Fragment key={`native-mosfet-reference-${index}`}>
              <schematictext
                text="{NAME}"
                schX={primitive.x}
                schY={primitive.y}
                fontSize={0.18}
                anchor={anchor}
                color={REFERENCE_COLOR}
              />
            </Fragment>
          );
        }

        return null;
      })}
    </symbol>
  );
};
