import "tscircuit";
import { Fragment } from "react";

export type TIDA010266InlineNetPort = {
  name: string;
  net?: string;
  connectsTo: string | string[];
  schX: number;
  schY: number;
  direction?: "left" | "right" | "up" | "down";
};

/**
 * Gives a module an electrically real boundary port while drawing the net name
 * inline at the connected component pin(s). Boundary-port coordinates are
 * absolute because schematic subcircuit ports are not transformed by schX/Y.
 */
export const TIDA010266InlineNetPorts = ({
  originX,
  originY,
  ports,
}: {
  originX: number;
  originY: number;
  ports: TIDA010266InlineNetPort[];
}) => (
  <>
    {ports.map(({ name, net = name, connectsTo, schX, schY, direction }) => (
      <Fragment key={name}>
        <port
          name={name}
          schX={originX + schX}
          schY={originY + schY}
          direction={direction}
          connectsTo={`net.${net}`}
        />
        {(Array.isArray(connectsTo) ? connectsTo : [connectsTo]).map(
          (target, index) => (
            <Fragment key={`${name}-${index}`}>
              <netlabel net={net} connectsTo={target} inline />
            </Fragment>
          ),
        )}
      </Fragment>
    ))}
  </>
);
