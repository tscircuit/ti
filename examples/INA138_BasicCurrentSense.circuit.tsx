import "tscircuit";
import { INA138NA_3K } from "../lib/chips/INA138NA_3K.tsx";

/**
 * TI INA138 datasheet (SBOS122E), Figure 9, "Basic Circuit Connections":
 * https://www.ti.com/document-viewer/INA138/datasheet/application-and-implementation#SBOS1224503
 * https://www.ti.com/ods/images/SBOS122E/basic_circuit_connections_sbos122.gif
 *
 * RS, RL, and the load are intentionally symbolic: Figure 9 selects RL from
 * its gain table and does not assign a single shunt or load value.
 */
export const INA138_BasicCurrentSense = () => (
  <board routingDisabled schMaxTraceDistance={20}>
    <INA138NA_3K
      name="U1"
      displayName="INA138"
      schX={0.3}
      schY={0}
      pinLabels={{
        pin1: "OUT",
        pin2: "GND",
        pin3: "_POS",
        pin4: "_NEG",
        pin5: "V_POS",
      }}
    />

    <schematicsymbol
      name="R_SHUNT"
      displayName="RS (Shunt)"
      symbolName="resistor_right"
      schX={0}
      schY={2.1}
    />
    <schematicsymbol
      name="LOAD"
      displayName="Load"
      symbolName="resistor_down"
      schX={2.35}
      schY={1.25}
    />
    <schematicsymbol
      name="R_LOAD"
      displayName="RL"
      symbolName="resistor_down"
      schX={2.55}
      schY={-0.45}
    />

    <schematicsymbol
      name="VP"
      displayName="VP · 2.7 V to 36 V"
      symbolName="rail_up"
      schX={-1.75}
      schY={2.1}
    />
    <schematicsymbol
      name="VPLUS"
      displayName="V+ · 2.7 V to 36 V"
      symbolName="rail_up"
      schX={-1.7}
      schY={0.35}
    />
    <schematicsymbol
      name="GND_DEVICE"
      displayName=""
      symbolName="digital_ground_up"
      schX={0.3}
      schY={-1.7}
    />
    <schematicsymbol
      name="GND_LOAD"
      displayName=""
      symbolName="digital_ground_up"
      schX={2.35}
      schY={0.35}
    />
    <schematicsymbol
      name="GND_RL"
      displayName=""
      symbolName="digital_ground_up"
      schX={2.55}
      schY={-1.45}
    />
    <schematicsymbol
      name="VOUT"
      displayName="VO"
      symbolName="testpoint_right"
      schX={3.65}
      schY={0}
    />

    <net
      name="GND"
      isGroundNet
      connectsTo={["GND_DEVICE.1", "GND_LOAD.1", "GND_RL.1"]}
    />

    <trace from=".VP > .1" to=".R_SHUNT > .1" />
    <trace path={[".R_SHUNT > .1", ".U1 > .pin3"]} />
    <trace path={[".R_SHUNT > .2", ".U1 > .pin4", ".LOAD > .1"]} />
    <trace from=".LOAD > .2" to=".GND_LOAD > .1" />
    <trace from=".VPLUS > .1" to=".U1 > .pin5" />
    <trace from=".U1 > .pin2" to=".GND_DEVICE > .1" />
    <trace path={[".U1 > .pin1", ".R_LOAD > .1", ".VOUT > .1"]} />
    <trace from=".R_LOAD > .2" to=".GND_RL > .1" />
  </board>
);

export default INA138_BasicCurrentSense;
