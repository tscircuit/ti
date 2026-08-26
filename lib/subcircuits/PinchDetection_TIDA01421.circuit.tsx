import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";
import { tida01421Position } from "../tida01421-coordinates.ts";
import {
  PinchDetectionPower_TIDA01421,
  TIDA01421_POWER_ORIGIN,
} from "./PinchDetectionPower_TIDA01421.circuit.tsx";
import {
  PinchDetectionSignalChain_TIDA01421,
  TIDA01421_SIGNAL_CHAIN_ORIGIN,
} from "./PinchDetectionSignalChain_TIDA01421.circuit.tsx";

const wrapperOrigin = { x: 820, y: 620 };

/**
 * Focused TIDA-01421 pinch-detection subsystem.
 *
 * The two children retain their original sheet-2 relative positions. The
 * wrapper joins their named power interfaces without importing the rest of the
 * development board.
 */
export const PinchDetection_TIDA01421 = (props: SubcircuitProps) => (
  <subcircuit
    exposedNets={["PWR", "V_PLUS", "V_MINUS", "GND", "ADCMOTOR", "TIMER"]}
    schAutoLayoutEnabled={false}
    routingDisabled
    {...props}
  >
    <net name="GND" isGroundNet />
    <net name="PWR" isPowerNet />
    <net name="V5" isPowerNet />
    <net name="V3_3" isPowerNet />
    <net name="V_PLUS" />
    <net name="V_MINUS" />
    <net name="ADCMOTOR" />
    <net name="TIMER" />
    <PinchDetectionSignalChain_TIDA01421
      name="signalChain"
      {...tida01421Position(
        TIDA01421_SIGNAL_CHAIN_ORIGIN.x,
        TIDA01421_SIGNAL_CHAIN_ORIGIN.y,
        wrapperOrigin,
      )}
    />
    <PinchDetectionPower_TIDA01421
      name="power"
      {...tida01421Position(
        TIDA01421_POWER_ORIGIN.x,
        TIDA01421_POWER_ORIGIN.y,
        wrapperOrigin,
      )}
    />

    <trace from=".power > .PWR" to="net.PWR" />
    <trace from=".power > .V3_3" to="net.V3_3" />
    <trace from=".signalChain > .V3_3" to="net.V3_3" />
    <trace from=".power > .V5" to="net.V5" />
    <trace from=".signalChain > .V5" to="net.V5" />
    <trace from=".power > .GND" to="net.GND" />
    <trace from=".signalChain > .GND" to="net.GND" />
    <trace from=".signalChain > .V_PLUS" to="net.V_PLUS" />
    <trace from=".signalChain > .V_MINUS" to="net.V_MINUS" />
    <trace from=".signalChain > .ADCMOTOR" to="net.ADCMOTOR" />
    <trace from=".signalChain > .TIMER" to="net.TIMER" />
  </subcircuit>
);

export default PinchDetection_TIDA01421;
