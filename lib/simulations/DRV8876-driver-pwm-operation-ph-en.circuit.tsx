import { DRV8876 } from "../chips/DRV8876";

export const DRV8876DriverPwmOperationPhEnCircuit = () => (
  <board routingDisabled>
    <DRV8876
      name="U1"
      schX={0}
      schY={0}
      schWidth={3}
      schHeight={7}
      showPinAliases={false}
      schPinArrangement={{
        leftSide: {
          pins: ["EN", "PH", "nSLEEP", "nFAULT", "VREF", "IPROPI", "IMODE"],
          direction: "top-to-bottom",
        },
        rightSide: {
          pins: [
            "VM",
            "VCP",
            "CPH",
            "CPL",
            "OUT1",
            "OUT2",
            "PGND",
            "GND",
            "PAD",
          ],
          direction: "top-to-bottom",
        },
      }}
      schPinStyle={{
        EN: { marginBottom: 0.7 },
        PH: { marginBottom: 0.7 },
        nSLEEP: { marginBottom: 0.7 },
        nFAULT: { marginBottom: 0.7 },
        VREF: { marginBottom: 0.7 },
        VM: { marginBottom: 0.7 },
        VCP: { marginBottom: 0.7 },
        CPL: { marginBottom: 0.9 },
        OUT1: { marginBottom: 0.7 },
      }}
    />

    <voltagesource
      name="V_VM"
      voltage="24V"
      schX={8.3}
      schY={3}
      schRotation="270deg"
    />
    <voltagesource
      name="V_CC"
      voltage="3.3V"
      schX={-6.8}
      schY={2.7}
      schRotation="270deg"
    />
    <voltagesource
      name="V_EN_PWM"
      voltage="3.3V"
      waveShape="square"
      frequency="50kHz"
      dutyCycle="25%"
      pulseDelay="1.2ms"
      riseTime="100ns"
      fallTime="100ns"
      schX={-4}
      schY={4.3}
      schRotation="270deg"
    />
    <voltagesource
      name="V_SLEEP"
      voltage="3.3V"
      waveShape="square"
      pulseDelay="50us"
      pulseWidth="4ms"
      period="5ms"
      riseTime="100ns"
      fallTime="100ns"
      schX={-4}
      schY={1.5}
      schRotation="270deg"
    />

    <capacitor
      name="C_VM_BYPASS"
      capacitance="0.1uF"
      footprint="0402"
      schX={6.5}
      schY={3}
      schOrientation="vertical"
    />
    <capacitor
      name="C_VM_BULK"
      capacitance="47uF"
      footprint="1206"
      schX={5}
      schY={3}
      schOrientation="vertical"
    />
    <capacitor
      name="C_VCP"
      capacitance="0.1uF"
      footprint="0402"
      schX={3.9}
      schY={3}
      schRotation={90}
    />
    <capacitor
      name="C_CP"
      capacitance="0.022uF"
      footprint="0402"
      schX={4.1}
      schY={1}
      schOrientation="vertical"
    />

    <resistor
      name="R_REF1"
      resistance="16k"
      footprint="0402"
      schX={-6.9}
      schY={-0.8}
      schOrientation="vertical"
    />
    <resistor
      name="R_REF2"
      resistance="50k"
      footprint="0402"
      schX={-6.9}
      schY={-2.2}
      schOrientation="vertical"
    />
    <resistor
      name="R_IPROPI"
      resistance="2.5k"
      footprint="0402"
      schX={-5.1}
      schY={-2.2}
      schOrientation="vertical"
    />
    <capacitor
      name="C_IPROPI"
      capacitance="10nF"
      footprint="0402"
      schX={-3.7}
      schY={-2.2}
      schOrientation="vertical"
    />
    <resistor
      name="R_NFAULT_PULLUP"
      resistance="10k"
      footprint="0402"
      schX={-5.7}
      schY={2.6}
      schOrientation="vertical"
    />

    <ammeter
      name="I_MOTOR_PROBE"
      connections={{ pos: "U1.OUT1", neg: "L_MOTOR.pin1" }}
      color="#00d95f"
      graphDisplayName="IOUT"
      graphCenter={0.5}
      graphOffsetDivs={-3}
      graphUnitsPerDiv={0.5}
      schX={5.4}
    />
    <inductor
      name="L_MOTOR"
      inductance="10mH"
      footprint="0603"
      schX={7.3}
      schY={0}
      schOrientation="horizontal"
    />
    <resistor
      name="R_MOTOR"
      resistance="24"
      footprint="0603"
      schX={5.4}
      schY={-1.3}
      schOrientation="vertical"
    />

    <schematictext
      text="VM = 24V"
      schX={2.6}
      schY={3.1}
      fontSize={0.16}
      anchor="center"
    />
    <netlabel
      net="VCC"
      connection="V_CC.pin1"
      schX={-6.8}
      schY={3.5}
      anchorSide="bottom"
    />
    <schematictext
      text="Figure 33 PH/EN PWM"
      schX={-2}
      schY={4}
      fontSize={0.16}
      anchor="center"
    />
    <netlabel
      net="VREF"
      connection="U1.VREF"
      schX={-2.1}
      schY={-0.5}
      anchorSide="right"
    />

    <trace from="V_VM.pin1" to="net.VM" />
    <trace from="V_VM.pin2" to="net.GND" />
    <trace from="V_CC.pin1" to="net.VCC" />
    <trace from="V_CC.pin2" to="net.GND" />
    <trace from="V_EN_PWM.pin1" to="U1.EN" />
    <trace from="V_EN_PWM.pin2" to="net.GND" />
    <trace from="V_SLEEP.pin1" to="U1.nSLEEP" />
    <trace from="V_SLEEP.pin2" to="net.GND" />

    <trace from="U1.VM" to="net.VM" />
    <trace from="U1.PH" to="net.VCC" />
    <trace from="U1.PMODE" to="net.GND" />
    <trace from="U1.IMODE" to="net.GND" />
    <trace from="U1.GND" to="net.GND" />
    <trace from="U1.PGND" to="net.GND" />
    <trace from="U1.PAD" to="net.GND" />

    <trace from="C_VM_BYPASS.pin1" to="net.VM" />
    <trace from="C_VM_BYPASS.pin2" to="net.GND" />
    <trace from="C_VM_BULK.pin1" to="net.VM" />
    <trace from="C_VM_BULK.pin2" to="net.GND" />
    <trace from="U1.VCP" to="C_VCP.pin1" />
    <trace from="C_VCP.pin2" to="net.VM" />
    <trace from="U1.CPH" to="C_CP.pin1" />
    <trace from="U1.CPL" to="C_CP.pin2" />

    <trace from="R_REF1.pin1" to="net.VCC" />
    <trace from="R_REF1.pin2" to="net.VREF" />
    <trace from="R_REF2.pin1" to="net.VREF" />
    <trace from="R_REF2.pin2" to="net.GND" />
    <trace from="U1.VREF" to="net.VREF" />
    <trace from="U1.IPROPI" to="net.IPROPI" />
    <trace from="R_IPROPI.pin1" to="net.IPROPI" />
    <trace from="R_IPROPI.pin2" to="net.GND" />
    <trace from="C_IPROPI.pin1" to="net.IPROPI" />
    <trace from="C_IPROPI.pin2" to="net.GND" />
    <trace from="R_NFAULT_PULLUP.pin1" to="net.VCC" />
    <trace from="R_NFAULT_PULLUP.pin2" to="U1.nFAULT" />

    <trace from="U1.OUT1" to="I_MOTOR_PROBE.pos" />
    <trace from="I_MOTOR_PROBE.neg" to="L_MOTOR.pin1" />
    <trace from="L_MOTOR.pin2" to="R_MOTOR.pin1" />
    <trace from="R_MOTOR.pin2" to="U1.OUT2" />

    <voltageprobe
      name="OUT1_PROBE"
      connectsTo="U1.OUT1"
      referenceTo="U1.PGND"
      color="#f1d900"
      graphDisplayName="OUT1"
      graphCenter={12}
      graphOffsetDivs={0}
      graphUnitsPerDiv={5}
    />
    <voltageprobe
      name="OUT2_PROBE"
      connectsTo="U1.OUT2"
      referenceTo="U1.PGND"
      color="#00cfe8"
      graphDisplayName="OUT2"
      graphCenter={12}
      graphOffsetDivs={-0.5}
      graphUnitsPerDiv={5}
    />
    <voltageprobe
      name="EN_PROBE"
      connectsTo="U1.EN"
      referenceTo="U1.GND"
      color="#d946ef"
      graphDisplayName="EN/IN1"
      graphCenter={1.68}
      graphOffsetDivs={3}
      graphUnitsPerDiv={4}
    />

    <analogsimulation
      name="DRV8876 Driver PWM Operation PH/EN"
      duration="2ms"
      startTime="1.8ms"
      timePerStep="100ns"
      spiceEngine="ngspice"
      spiceOptions={{
        method: "gear",
        reltol: 0.01,
        abstol: "1n",
        vntol: "1u",
      }}
    />
  </board>
);

export default DRV8876DriverPwmOperationPhEnCircuit;
