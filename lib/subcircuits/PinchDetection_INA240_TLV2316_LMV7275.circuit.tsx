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
      renderLocalRailLabels={false}
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

    {/* Rendering the U2 and powered-triangle rail symbols in the wrapper lets
        automatically exposed child V5/GND connections reuse native endpoints
        instead of adding generated Ux_GND/U2_VS labels over them. Standalone
        signal-chain rendering still emits the same labels inside the child. */}
    <netlabel
      net="V5"
      connection=".signalChain > .U2 > .VS"
      anchorSide="bottom"
      {...p(452.142857, 910.714286)}
    />
    <netlabel
      net="V5"
      connection=".signalChain > .U2 > .REF1"
      anchorSide="left"
      {...p(587.857143, 903.571429)}
    />
    <netlabel
      net="V5"
      connection=".signalChain > .U3A > .pin5"
      anchorSide="bottom"
      {...p(788.928571, 929.285714)}
    />
    <netlabel
      net="GND"
      connection=".signalChain > .U3A > .pin3"
      anchorSide="top"
      {...p(789.285714, 901.428571)}
    />
    <netlabel
      net="V5"
      connection=".signalChain > .U3B > .pin5"
      anchorSide="bottom"
      {...p(1078.928571, 924.285714)}
    />
    <netlabel
      net="GND"
      connection=".signalChain > .U3B > .pin3"
      anchorSide="top"
      {...p(1079.285714, 896.428571)}
    />
    <netlabel
      net="V5"
      connection=".signalChain > .U1Symbol > .pin5"
      anchorSide="bottom"
      {...p(1278.928571, 919.285714)}
    />
    <netlabel
      net="GND"
      connection=".signalChain > .U1Symbol > .pin3"
      anchorSide="top"
      {...p(1279.285714, 891.428571)}
    />
  </subcircuit>
);

export default PinchDetection_INA240_TLV2316_LMV7275;
