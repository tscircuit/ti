import type {
  CurrentSourceProps,
  SubcircuitProps,
  VoltageSourceProps,
} from "@tscircuit/props";
import type { ReactNode } from "react";
import { TPS63802DLAR } from "../chips/TPS63802DLAR.circuit";

type VoltageGraphDisplay = {
  graphCenter?: number;
  graphVerticalOffset?: number | string;
  graphVoltagePerDiv?: number | string;
};

type CurrentGraphDisplay = {
  graphCenter?: number;
  graphCurrentPerDiv?: number | string;
  graphVerticalOffset?: number | string;
};

type TPS63802DatasheetApplicationCircuitProps = SubcircuitProps & {
  children: ReactNode;
  enableVoltageGraphDisplay?: VoltageGraphDisplay;
  enableVoltageWaveform?: VoltageSourceProps["voltageWaveform"];
  inductorCurrentGraphDisplay?: CurrentGraphDisplay;
  inputVoltage?: number | string;
  inputVoltageGraphDisplay?: VoltageGraphDisplay;
  inputVoltageWaveform?: VoltageSourceProps["voltageWaveform"];
  loadCurrent?: number | string;
  loadCurrentGraphDisplay?: CurrentGraphDisplay;
  loadCurrentWaveform?: CurrentSourceProps["currentWaveform"];
  loadEnableTime?: number | string;
  loadResistance?: number | string;
  mode: "pfm" | "pwm";
  outputVoltage?: number;
  probeEnableVoltage?: boolean;
  probeFeedbackVoltage?: boolean;
  probeInductorCurrent?: boolean;
  probeInputCurrent?: boolean;
  probeInputVoltage?: boolean;
  probeLoadCurrent?: boolean;
  probePowerGoodVoltage?: boolean;
  outputVoltageGraphDisplay?: VoltageGraphDisplay;
  powerGoodVoltageGraphDisplay?: VoltageGraphDisplay;
};

export const TPS63802DatasheetApplicationCircuit = ({
  children,
  enableVoltageGraphDisplay,
  enableVoltageWaveform,
  inductorCurrentGraphDisplay,
  inputVoltage,
  inputVoltageGraphDisplay,
  inputVoltageWaveform,
  loadCurrent = "100mA",
  loadCurrentGraphDisplay,
  loadCurrentWaveform,
  loadEnableTime,
  loadResistance,
  mode,
  outputVoltage = 3.3,
  probeEnableVoltage = false,
  probeFeedbackVoltage = false,
  probeInductorCurrent = false,
  probeInputCurrent = false,
  probeInputVoltage = false,
  probeLoadCurrent = false,
  probePowerGoodVoltage = false,
  outputVoltageGraphDisplay,
  powerGoodVoltageGraphDisplay,
  ...props
}: TPS63802DatasheetApplicationCircuitProps) => {
  const feedbackBottomResistance = 91_000;
  const recommendedFeedbackTopResistance = new Map([
    [2.5, 365_000],
    [3.3, 511_000],
    [3.6, 562_000],
    [5, 806_000],
  ]);
  const feedbackTopResistance =
    recommendedFeedbackTopResistance.get(outputVoltage) ??
    feedbackBottomResistance * (outputVoltage / 0.5 - 1);
  // TPS63802 Section 8.3 specifies the effective capacitances used by the
  // converter after tolerance and DC-bias derating. Tables 10-3, 10-4, and
  // 10-6 list the corresponding nominal 10 µF and 22 µF Murata parts.
  const inputCapacitance = "5uF";
  const outputCapacitance = outputVoltage <= 3.6 ? "8.2uF" : "16.4uF";

  return (
    <subcircuit {...props}>
      <net name="VIN_SOURCE" />
      <net name="VIN" />
      <net name="VOUT" />
      <net name="LOAD" />
      <net name="LOAD_SWITCHED" />
      <net name="GND" />

      <TPS63802DLAR
        name="U1"
        schX={0}
        schY={0}
        schWidth={2.5}
        schHeight={6}
        showPinAliases={false}
        schPinArrangement={{
          topSide: { pins: ["L1", "L2"], direction: "left-to-right" },
          leftSide: {
            pins: ["VIN", "EN", "MODE", "GND"],
            direction: "top-to-bottom",
          },
          rightSide: {
            pins: ["VOUT", "PG", "FB", "AGND"],
            direction: "top-to-bottom",
          },
        }}
      />

      {inputVoltage !== undefined && (
        <voltagesource
          name="V_IN"
          voltage={inputVoltage}
          voltageWaveform={inputVoltageWaveform}
          schX={-7.5}
          schY={0}
          schRotation="270deg"
        />
      )}
      {inputVoltage !== undefined && (
        <>
          <trace
            from="V_IN.pin1"
            to={probeInputCurrent ? "net.VIN_SOURCE" : "net.VIN"}
          />
          <trace from="V_IN.pin2" to="net.GND" />
        </>
      )}

      {probeInputCurrent && (
        <ammeter
          name="I_IN_PROBE"
          connections={{ pos: "net.VIN_SOURCE", neg: "net.VIN" }}
          color="#dc2626"
          graphDisplayName="IIN"
          schX={-5.5}
          schY={1.5}
        />
      )}
      <trace from="net.VIN" to="U1.VIN" />
      {enableVoltageWaveform ? (
        <>
          <voltagesource
            name="V_ENABLE"
            voltage="0V"
            voltageWaveform={enableVoltageWaveform}
            connections={{ pin1: "U1.EN", pin2: "net.GND" }}
            schX={-5}
            schY={-3.5}
            schRotation="270deg"
          />
        </>
      ) : (
        <trace from="net.VIN" to="U1.EN" />
      )}

      <inductor
        name="L1"
        inductance="0.47uH"
        footprint="0603"
        schX={0}
        schY={5}
        schOrientation="horizontal"
      />
      {probeInductorCurrent && (
        <ammeter
          name="I_L_PROBE"
          connections={{ pos: "U1.L1", neg: "L1.pin1" }}
          color="#d946ef"
          graphDisplayName="IL"
          graphCenter={0}
          graphVerticalOffset={0}
          graphCurrentPerDiv={0.8}
          {...inductorCurrentGraphDisplay}
          schX={-1.8}
          schY={5}
        />
      )}
      {!probeInductorCurrent && <trace from="U1.L1" to="L1.pin1" />}
      <resistor
        name="R_L1_DCR"
        resistance="7.6mΩ"
        footprint="0603"
        schX={1.4}
        schY={5}
        schOrientation="horizontal"
        connections={{ pin1: "L1.pin2", pin2: "U1.L2" }}
      />

      {/* TPS63802 Tables 10-3 and 10-4 specify 10 mΩ ESR for the
          GRM188R60J106ME84 input and GRM188R60J226MEA0 output capacitors. */}
      <resistor
        name="R_CIN_ESR"
        resistance="10mΩ"
        footprint="0603"
        schX={-4.5}
        schY={0}
        schOrientation="vertical"
        connections={{ pin1: "net.VIN", pin2: "C_IN.pin1" }}
      />
      <capacitor
        name="C_IN"
        capacitance={inputCapacitance}
        footprint="0603"
        schX={-4.5}
        schY={-2}
        schOrientation="vertical"
        connections={{ pin1: "R_CIN_ESR.pin2", pin2: "net.GND" }}
      />

      <trace from="U1.VOUT" to="net.VOUT" />
      <resistor
        name="R_COUT_ESR"
        resistance="10mΩ"
        footprint="0603"
        schX={5}
        schY={0.5}
        schOrientation="vertical"
        connections={{ pin1: "net.VOUT", pin2: "C_OUT.pin1" }}
      />
      <capacitor
        name="C_OUT"
        capacitance={outputCapacitance}
        footprint="0603"
        schX={5}
        schY={-1}
        schOrientation="vertical"
        connections={{ pin1: "R_COUT_ESR.pin2", pin2: "net.GND" }}
      />

      <resistor
        name="R_FB_TOP"
        resistance={feedbackTopResistance}
        footprint="0603"
        schX={3.5}
        schY={1}
        schOrientation="vertical"
        connections={{ pin1: "net.VOUT", pin2: "U1.FB" }}
      />
      <resistor
        name="R_FB_BOTTOM"
        resistance="91kΩ"
        footprint="0603"
        schX={3.5}
        schY={-1}
        schOrientation="vertical"
        connections={{ pin1: "U1.FB", pin2: "net.GND" }}
      />
      <resistor
        name="R_PG"
        resistance="100kΩ"
        footprint="0603"
        schX={2.5}
        schY={1.8}
        schOrientation="vertical"
        connections={{ pin1: "net.VIN", pin2: "U1.PG" }}
      />

      {loadResistance === undefined && loadEnableTime !== undefined && (
        <switch
          name="S_LOAD"
          type="spst"
          simStartOpen
          simCloseAt={loadEnableTime}
          connections={{
            pin1: "net.VOUT",
            pin2: probeLoadCurrent ? "net.LOAD_SWITCHED" : "net.LOAD",
          }}
          schX={6}
          schY={1}
        />
      )}
      {loadResistance === undefined &&
        loadEnableTime !== undefined &&
        probeLoadCurrent && (
          <ammeter
            name="I_LOAD_PROBE"
            connections={{ pos: "net.LOAD_SWITCHED", neg: "net.LOAD" }}
            color="#d946ef"
            graphDisplayName="I Load"
            {...loadCurrentGraphDisplay}
            schX={6.8}
            schY={1}
          />
        )}
      {loadResistance === undefined &&
        loadEnableTime === undefined &&
        probeLoadCurrent && (
          <ammeter
            name="I_LOAD_PROBE"
            connections={{ pos: "net.VOUT", neg: "net.LOAD" }}
            color="#d946ef"
            graphDisplayName="I Load"
            {...loadCurrentGraphDisplay}
            schX={6.2}
            schY={1}
          />
        )}
      {loadResistance === undefined &&
        loadEnableTime === undefined &&
        !probeLoadCurrent && <trace from="net.VOUT" to="net.LOAD" />}
      {loadResistance === undefined && loadEnableTime !== undefined && (
        <resistor
          name="R_LOAD_BLEEDER"
          resistance="1GΩ"
          connections={{ pin1: "net.LOAD", pin2: "net.GND" }}
        />
      )}
      {loadResistance !== undefined && probeLoadCurrent && (
        <ammeter
          name="I_LOAD_PROBE"
          connections={{ pos: "net.VOUT", neg: "net.LOAD" }}
          color="#d946ef"
          graphDisplayName="I Load"
          {...loadCurrentGraphDisplay}
          schX={6.2}
          schY={1}
        />
      )}
      {loadResistance !== undefined && !probeLoadCurrent && (
        <trace from="net.VOUT" to="net.LOAD" />
      )}
      {loadResistance === undefined ? (
        <currentsource
          name="I_LOAD"
          current={loadCurrent}
          currentWaveform={loadCurrentWaveform}
          schX={7.5}
          schY={-1}
          schRotation="270deg"
          connections={{ pos: "net.LOAD", neg: "net.GND" }}
        />
      ) : (
        <>
          <resistor
            name="R_LOAD"
            resistance={loadResistance}
            schX={7.5}
            schY={-1}
            schOrientation="vertical"
            connections={{ pin1: "net.LOAD", pin2: "net.GND" }}
          />
          {loadCurrentWaveform && (
            <currentsource
              name="I_LOAD_STEP"
              current="0A"
              currentWaveform={loadCurrentWaveform}
              schX={9}
              schY={-1}
              schRotation="270deg"
              connections={{ pos: "net.LOAD", neg: "net.GND" }}
            />
          )}
        </>
      )}

      {mode === "pwm" ? (
        <trace from="U1.MODE" to="net.VIN" />
      ) : (
        <trace from="U1.MODE" to="net.GND" />
      )}
      <trace from="U1.GND" to="net.GND" />
      <trace from="U1.AGND" to="net.GND" />

      <voltageprobe
        name="V_OUT_PROBE"
        connectsTo="U1.VOUT"
        referenceTo="U1.GND"
        color="#315cff"
        graphDisplayName="VO"
        graphCenter={outputVoltage}
        graphVoltagePerDiv={0.1}
        {...outputVoltageGraphDisplay}
      />
      {probeInputVoltage && (
        <voltageprobe
          name="V_IN_PROBE"
          connectsTo="U1.VIN"
          referenceTo="U1.GND"
          color="#00a36c"
          graphDisplayName="VI"
          {...inputVoltageGraphDisplay}
        />
      )}
      {probeFeedbackVoltage && (
        <voltageprobe
          name="V_FB_PROBE"
          connectsTo="U1.FB"
          referenceTo="U1.AGND"
          graphDisplayName="VFB"
        />
      )}
      {probeEnableVoltage && (
        <voltageprobe
          name="V_ENABLE_PROBE"
          connectsTo="U1.EN"
          referenceTo="U1.GND"
          graphDisplayName="EN"
          {...enableVoltageGraphDisplay}
        />
      )}
      {probePowerGoodVoltage && (
        <voltageprobe
          name="V_POWER_GOOD_PROBE"
          connectsTo="U1.PG"
          referenceTo="U1.GND"
          graphDisplayName="PG"
          {...powerGoodVoltageGraphDisplay}
        />
      )}

      {children}
    </subcircuit>
  );
};
