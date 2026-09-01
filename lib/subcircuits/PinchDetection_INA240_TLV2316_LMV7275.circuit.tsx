import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";
import { tida01421Position } from "../tida01421-coordinates.ts";
import {
  PinchDetectionPower_TPS7B69,
  TIDA01421_POWER_ORIGIN,
} from "./PinchDetectionPower_TPS7B69.circuit.tsx";
import {
  PinchDetectionSignalChain_INA240_TLV2316_LMV7275,
  TIDA01421_SIGNAL_CHAIN_ORIGIN,
} from "./PinchDetectionSignalChain_INA240_TLV2316_LMV7275.circuit.tsx";

const wrapperOrigin = { x: 820, y: 620 };

/**
 * Focused TIDA-01421 pinch-detection subsystem.
 *
 * The two children retain their original sheet-2 relative positions. The
 * wrapper joins their named power interfaces without importing the rest of the
 * development board.
 */
export const PinchDetection_INA240_TLV2316_LMV7275 = (
  props: SubcircuitProps,
) => (
  <subcircuit
    exposedNets={["PWR", "GND", "ADCMOTOR", "TIMER"]}
    schAutoLayoutEnabled={false}
    routingDisabled
    {...props}
  >
    <net name="GND" isGroundNet />
    <net name="PWR" isPowerNet />
    <net name="V5" isPowerNet />
    <net name="V3_3" isPowerNet />
    <net name="ADCMOTOR" />
    <net name="TIMER" />
    <PinchDetectionSignalChain_INA240_TLV2316_LMV7275
      name="signalChain"
      renderLocalRailConnections={false}
      {...tida01421Position(
        TIDA01421_SIGNAL_CHAIN_ORIGIN.x,
        TIDA01421_SIGNAL_CHAIN_ORIGIN.y,
        wrapperOrigin,
      )}
    />
    <PinchDetectionPower_TPS7B69
      name="power"
      {...tida01421Position(
        TIDA01421_POWER_ORIGIN.x,
        TIDA01421_POWER_ORIGIN.y,
        wrapperOrigin,
      )}
    />

    {/* The wrapper owns the native V5/GND traces for projected child symbols;
        standalone signal-chain rendering emits equivalent traces itself. */}
    <trace
      name="V5_signalChain_U2_VS"
      from=".signalChain > .U2 > .VS"
      to="net.V5"
      schDisplayLabel="V5"
    />
    <trace
      name="V5_signalChain_U2_REF1"
      from=".signalChain > .U2 > .REF1"
      to="net.V5"
      schDisplayLabel="V5"
    />
    <trace
      name="V5_signalChain_U3A_pin5"
      from=".signalChain > .U3A > .pin5"
      to="net.V5"
      schDisplayLabel="V5"
    />
    <trace
      name="GND_signalChain_U3A_pin3"
      from=".signalChain > .U3A > .pin3"
      to="net.GND"
      schDisplayLabel="GND"
    />
    <trace
      name="V5_signalChain_U3B_pin5"
      from=".signalChain > .U3B > .pin5"
      to="net.V5"
      schDisplayLabel="V5"
    />
    <trace
      name="GND_signalChain_U3B_pin3"
      from=".signalChain > .U3B > .pin3"
      to="net.GND"
      schDisplayLabel="GND"
    />
    <trace
      name="V5_signalChain_U1Symbol_pin5"
      from=".signalChain > .U1Symbol > .pin5"
      to="net.V5"
      schDisplayLabel="V5"
    />
    <trace
      name="GND_signalChain_U1Symbol_pin3"
      from=".signalChain > .U1Symbol > .pin3"
      to="net.GND"
      schDisplayLabel="GND"
    />
  </subcircuit>
);

export default PinchDetection_INA240_TLV2316_LMV7275;
