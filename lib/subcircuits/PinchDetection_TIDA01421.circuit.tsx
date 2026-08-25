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
    schAutoLayoutEnabled={false}
    schTraceAutoLabelEnabled={false}
    routingDisabled
    {...props}
  >
    <net name="GND" isGroundNet />
    <PinchDetectionSignalChain_TIDA01421
      name="signalChain"
      {...tida01421Position(
        TIDA01421_SIGNAL_CHAIN_ORIGIN.x,
        TIDA01421_SIGNAL_CHAIN_ORIGIN.y,
        wrapperOrigin,
      )}
      connections={{
        V_PLUS: "net.V_PLUS",
        V_MINUS: "net.V_MINUS",
        V5: "net.V5",
        V3_3: "net.V3_3",
        GND: "net.GND",
        ADCMOTOR: "net.ADCMOTOR",
        TIMER: "net.TIMER",
      }}
    />
    <PinchDetectionPower_TIDA01421
      name="power"
      {...tida01421Position(
        TIDA01421_POWER_ORIGIN.x,
        TIDA01421_POWER_ORIGIN.y,
        wrapperOrigin,
      )}
      connections={{
        PWR: "net.PWR",
        V3_3: "net.V3_3",
        V5: "net.V5",
        GND: "net.GND",
      }}
    />

    <port name="PWR" direction="left" connectsTo="power.PWR" />
    <port name="V_PLUS" direction="left" connectsTo="signalChain.V_PLUS" />
    <port name="V_MINUS" direction="left" connectsTo="signalChain.V_MINUS" />
    <port name="GND" direction="left" connectsTo="power.GND" />
    <port name="ADCMOTOR" direction="right" connectsTo="signalChain.ADCMOTOR" />
    <port name="TIMER" direction="right" connectsTo="signalChain.TIMER" />
  </subcircuit>
);

export default PinchDetection_TIDA01421;
