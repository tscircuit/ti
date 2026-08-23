import "tscircuit";
import { BQ25185DLHR } from "../lib/chips/BQ25185DLHR.tsx";

/**
 * TI BQ25185 datasheet (SLUSF65A), Figure 8-1, "BQ25185 Typical Application":
 * https://www.ti.com/lit/ds/symlink/bq25185.pdf#page=20
 * Figure asset: https://www.ti.com/ods/images/SLUSF65A/GUID-20230122-SS0I-PSKM-ZS85-WTN1HZFTWQXP-low.svg
 */
export const BQ25185_TypicalBatteryCharger = () => (
  <board routingDisabled schMaxTraceDistance={20}>
    <BQ25185DLHR
      name="U1"
      displayName=""
      schX={0}
      schY={0}
      schWidth={2.8}
      schHeight={3.2}
      pinLabels={{
        pin1: "SYS",
        pin2: "BAT",
        pin3: "STAT2",
        pin4: "CE",
        pin5: "GND",
        pin6: "pin6",
        pin7: "pin7",
        pin8: "ISET",
        pin9: "STAT1",
        pin10: "IN",
        pin11: "EP",
      }}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: [10, 9, 3, 4, 7, 8],
        },
        rightSide: { direction: "top-to-bottom", pins: [1, 2, 6] },
        bottomSide: { direction: "left-to-right", pins: [5, 11] },
      }}
    />

    <schematicsymbol
      name="VBUS"
      displayName="VBUS"
      symbolName="testpoint_left"
      schX={-5}
      schY={1.75}
    />
    <capacitor
      name="CIN"
      capacitance="1uF"
      footprint="0402"
      schX={-3.5}
      schY={1.35}
      schOrientation="vertical"
    />
    <schematicsymbol
      name="HOST_STAT1"
      displayName="Host STAT1"
      symbolName="testpoint_left"
      schX={-4.5}
      schY={0.25}
    />
    <schematicsymbol
      name="HOST_STAT2"
      displayName="Host STAT2"
      symbolName="testpoint_left"
      schX={-4.5}
      schY={-0.2}
    />
    <schematicsymbol
      name="HOST_CE"
      displayName="Host CE"
      symbolName="testpoint_left"
      schX={-4.5}
      schY={-0.65}
    />
    <resistor
      name="RILIM"
      displayName="RILIM"
      resistance="5k"
      footprint="0402"
      schX={-3.3}
      schY={-1.35}
      schOrientation="vertical"
    />
    <resistor
      name="RISET"
      displayName="RISET"
      resistance="1k"
      footprint="0402"
      schX={-2.2}
      schY={-1.35}
      schOrientation="vertical"
    />

    <capacitor
      name="CSYS"
      capacitance="10uF"
      footprint="0402"
      schX={3.3}
      schY={1.15}
      schOrientation="vertical"
    />
    <schematicsymbol
      name="SYSTEM_LOAD"
      displayName="Regulated load"
      symbolName="testpoint_right"
      schX={5}
      schY={1.45}
    />
    <capacitor
      name="CBAT"
      capacitance="1uF"
      footprint="0402"
      schX={3.3}
      schY={-0.45}
      schOrientation="vertical"
    />
    <battery
      name="BT1"
      displayName="Li-Ion cell"
      voltage="4.2V"
      footprint="pinrow2"
      schX={5}
      schY={-0.45}
      schOrientation="vertical"
    />
    <pushbutton
      name="SW1"
      displayName="MR"
      footprint="smdpushbutton"
      schX={3.3}
      schY={-2.2}
      schRotation={90}
    />
    <resistor
      name="RNTC"
      displayName="NTC"
      resistance="10k"
      footprint="0402"
      schX={5}
      schY={-2.2}
      schOrientation="vertical"
    />

    <schematicsymbol
      name="GND_CIN"
      displayName=""
      symbolName="digital_ground_up"
      schX={-3.5}
      schY={0.45}
    />
    <schematicsymbol
      name="GND_ILIM"
      displayName=""
      symbolName="digital_ground_up"
      schX={-3.3}
      schY={-2.15}
    />
    <schematicsymbol
      name="GND_ISET"
      displayName=""
      symbolName="digital_ground_up"
      schX={-2.2}
      schY={-2.15}
    />
    <schematicsymbol
      name="GND_DEVICE"
      displayName=""
      symbolName="digital_ground_up"
      schX={0}
      schY={-2.1}
    />
    <schematicsymbol
      name="GND_SYS"
      displayName=""
      symbolName="digital_ground_up"
      schX={3.3}
      schY={0.25}
    />
    <schematicsymbol
      name="GND_BAT"
      displayName=""
      symbolName="digital_ground_up"
      schX={3.3}
      schY={-1.3}
    />
    <schematicsymbol
      name="GND_CELL"
      displayName=""
      symbolName="digital_ground_up"
      schX={5}
      schY={-1.3}
    />
    <schematicsymbol
      name="GND_MR"
      displayName=""
      symbolName="digital_ground_up"
      schX={3.3}
      schY={-3.05}
    />
    <schematicsymbol
      name="GND_NTC"
      displayName=""
      symbolName="digital_ground_up"
      schX={5}
      schY={-3.05}
    />

    <net
      name="GND"
      isGroundNet
      connectsTo={[
        "GND_CIN.1",
        "GND_ILIM.1",
        "GND_ISET.1",
        "GND_DEVICE.1",
        "GND_SYS.1",
        "GND_BAT.1",
        "GND_CELL.1",
        "GND_MR.1",
        "GND_NTC.1",
      ]}
    />

    <trace path={[".VBUS > .1", ".CIN > .pin1", ".U1 > .pin10"]} />
    <trace from=".HOST_STAT1 > .1" to=".U1 > .pin9" />
    <trace from=".HOST_STAT2 > .1" to=".U1 > .pin3" />
    <trace from=".HOST_CE > .1" to=".U1 > .pin4" />
    <trace from=".U1 > .pin7" to=".RILIM > .pin1" />
    <trace from=".U1 > .pin8" to=".RISET > .pin1" />
    <trace path={[".U1 > .pin1", ".CSYS > .pin1", ".SYSTEM_LOAD > .1"]} />
    <trace path={[".U1 > .pin2", ".CBAT > .pin1", ".BT1 > .pin1"]} />
    <trace path={[".U1 > .pin6", ".SW1 > .pin2", ".RNTC > .pin1"]} />

    <trace from=".CIN > .pin2" to=".GND_CIN > .1" />
    <trace from=".RILIM > .pin2" to=".GND_ILIM > .1" />
    <trace from=".RISET > .pin2" to=".GND_ISET > .1" />
    <trace path={[".U1 > .pin5", ".U1 > .pin11", ".GND_DEVICE > .1"]} />
    <trace from=".CSYS > .pin2" to=".GND_SYS > .1" />
    <trace from=".CBAT > .pin2" to=".GND_BAT > .1" />
    <trace from=".BT1 > .pin2" to=".GND_CELL > .1" />
    <trace from=".SW1 > .pin1" to=".GND_MR > .1" />
    <trace from=".RNTC > .pin2" to=".GND_NTC > .1" />
  </board>
);

export default BQ25185_TypicalBatteryCharger;
