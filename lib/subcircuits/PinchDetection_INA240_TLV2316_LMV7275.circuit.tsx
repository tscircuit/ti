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
  </subcircuit>
);

export default PinchDetection_INA240_TLV2316_LMV7275;
