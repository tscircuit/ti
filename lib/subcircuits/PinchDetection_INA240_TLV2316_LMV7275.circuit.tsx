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

const p = (x: number, y: number) => tida01421Position(x, y, wrapperOrigin);

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
    <PinchDetectionSignalChain_INA240_TLV2316_LMV7275
      name="signalChain"
      renderAmplifierRailLabels={false}
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

    <trace from=".signalChain > .V_PLUS" to="net.V_PLUS" />
    <trace from=".signalChain > .V_MINUS" to="net.V_MINUS" />
    {/* Rendering all six powered-triangle rail symbols in the wrapper lets the
        automatically exposed child V5/GND traces reuse a native endpoint
        instead of adding Ux_GND labels over another projection. Standalone
        signal-chain rendering still emits the same labels inside the child. */}
    <netlabel
      net="V5"
      connection=".signalChain > .U3A > .pin5"
      anchorSide="bottom"
      {...p(788.965517, 938.448276)}
    />
    <netlabel
      net="GND"
      connection=".signalChain > .U3A > .pin3"
      anchorSide="top"
      {...p(789.310345, 911.551724)}
    />
    <netlabel
      net="V5"
      connection=".signalChain > .U3B > .pin5"
      anchorSide="bottom"
      {...p(1078.965517, 913.448276)}
    />
    <netlabel
      net="GND"
      connection=".signalChain > .U3B > .pin3"
      anchorSide="top"
      {...p(1079.310345, 886.551724)}
    />
    <netlabel
      net="V5"
      connection=".signalChain > .U1Symbol > .pin5"
      anchorSide="bottom"
      {...p(1278.965517, 916.448276)}
    />
    <netlabel
      net="GND"
      connection=".signalChain > .U1Symbol > .pin3"
      anchorSide="top"
      {...p(1279.310345, 889.551724)}
    />
  </subcircuit>
);

export default PinchDetection_INA240_TLV2316_LMV7275;
