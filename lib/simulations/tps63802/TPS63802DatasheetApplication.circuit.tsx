import type {
  CurrentWaveformPoint,
  SubcircuitProps,
  VoltageWaveformPoint,
} from "@tscircuit/props";
import type { ReactNode } from "react";
import { TPS63802DLAR } from "../../chips/TPS63802DLAR.circuit";

export type TPS63802OperatingMode = "pfm" | "pwm";
export type TPS63802ProbeSet =
  | "switching"
  | "load-transient"
  | "line-transient"
  | "startup"
  | "measurement";

export interface TPS63802DatasheetApplicationProps extends SubcircuitProps {
  inputVoltage?: string | number;
  inputVoltageWaveform?: VoltageWaveformPoint[];
  enableWaveform?: VoltageWaveformPoint[];
  mode: TPS63802OperatingMode;
  loadCurrent?: string | number;
  loadCurrentWaveform?: CurrentWaveformPoint[];
  loadConnectAt?: string | number;
  loadResistance?: string | number;
  outputVoltage?: number;
  probeSet: TPS63802ProbeSet;
  useInputVoltageSweep?: boolean;
  children?: ReactNode;
}

export const getTPS63802UpperFeedbackResistance = (outputVoltage: number) =>
  outputVoltage === 3.3 ? 511_000 : 91_000 * (outputVoltage / 0.5 - 1);

export const TPS63802DatasheetApplication = ({
  inputVoltage = "3.6V",
  inputVoltageWaveform,
  enableWaveform,
  mode,
  loadCurrent = "100mA",
  loadCurrentWaveform,
  loadConnectAt,
  loadResistance,
  outputVoltage = 3.3,
  probeSet,
  useInputVoltageSweep = false,
  children,
  ...subcircuitProps
}: TPS63802DatasheetApplicationProps) => {
  const showsSwitchingSignals = probeSet === "switching";
  const showsLoadSignals = probeSet === "load-transient";
  const showsLineSignals = probeSet === "line-transient";
  const showsStartupSignals = probeSet === "startup";
  const showsMeasurementSignals = probeSet === "measurement";
  const needsInputAmmeter = showsMeasurementSignals;
  const needsInductorAmmeter = showsSwitchingSignals || showsStartupSignals;
  const needsOutputAmmeter = showsLoadSignals || showsMeasurementSignals;

  return (
    <subcircuit {...subcircuitProps}>
      <net name="VIN_SOURCE" />
      <net name="VIN" />
      <net name="VOUT" />
      <net name="LOAD_INPUT" />

      <TPS63802DLAR name="U1" />

      {!useInputVoltageSweep && (
        <voltagesource
          name="V_IN"
          voltage={inputVoltage}
          voltageWaveform={inputVoltageWaveform}
        />
      )}
      {needsInputAmmeter && (
        <ammeter
          name="I_IN"
          connections={{ pos: "net.VIN_SOURCE", neg: "net.VIN" }}
        />
      )}
      {showsMeasurementSignals && (
        <currentsource name="I_QUIESCENT" current="11uA" />
      )}

      <inductor name="L1" inductance="0.47uH" />
      {needsInductorAmmeter && (
        <ammeter
          name="I_L"
          connections={{ pos: "U1.L1", neg: ".L1 > .pin1" }}
          color="#d946ef"
          graphDisplayName="IL"
          graphCenter={0}
          graphVerticalOffset={0}
          graphCurrentPerDiv={showsStartupSignals ? 2 : 0.8}
        />
      )}
      <resistor name="R_L1_DCR" resistance="7.6mΩ" />

      <capacitor name="C_IN" capacitance="5uF" />
      <resistor name="R_CIN_ESR" resistance="10mΩ" />
      <capacitor name="C_OUT" capacitance="8.2uF" />
      <resistor name="R_COUT_ESR" resistance="10mΩ" />

      <resistor
        name="R_FB_TOP"
        resistance={getTPS63802UpperFeedbackResistance(outputVoltage)}
      />
      <resistor name="R_FB_BOTTOM" resistance="91kΩ" />
      <resistor name="R_PG" resistance="100kΩ" />

      {needsOutputAmmeter && (
        <ammeter
          name="I_OUT"
          connections={{ pos: "net.VOUT", neg: "net.LOAD_INPUT" }}
          color="#d946ef"
          graphDisplayName="ILOAD"
          graphCenter={0}
          graphVerticalOffset={0}
          graphCurrentPerDiv={0.4}
        />
      )}
      {loadResistance === undefined ? (
        <>
          {loadConnectAt !== undefined && (
            <switch name="SW_LOAD" simStartOpen simCloseAt={loadConnectAt} />
          )}
          <currentsource
            name="I_LOAD"
            current={loadCurrent}
            currentWaveform={loadCurrentWaveform}
          />
        </>
      ) : (
        <resistor name="R_LOAD" resistance={loadResistance} />
      )}

      {enableWaveform && (
        <voltagesource
          name="V_EN"
          voltage={0}
          voltageWaveform={enableWaveform}
        />
      )}

      {!useInputVoltageSweep && (
        <>
          <trace
            from=".V_IN > .pin1"
            to={needsInputAmmeter ? "net.VIN_SOURCE" : "U1.VIN"}
          />
          <trace from=".V_IN > .pin2" to="net.GND" />
        </>
      )}
      {needsInputAmmeter && <trace from=".I_IN > .neg" to="U1.VIN" />}
      {showsMeasurementSignals && (
        <>
          <trace from=".I_QUIESCENT > .pos" to="net.VIN" />
          <trace from=".I_QUIESCENT > .neg" to="net.GND" />
        </>
      )}

      {needsInductorAmmeter ? (
        <>
          <trace from="U1.L1" to=".I_L > .pos" />
          <trace from=".I_L > .neg" to=".L1 > .pin1" />
        </>
      ) : (
        <trace from="U1.L1" to=".L1 > .pin1" />
      )}
      <trace from=".L1 > .pin2" to=".R_L1_DCR > .pin1" />
      <trace from=".R_L1_DCR > .pin2" to="U1.L2" />

      <trace from="U1.VIN" to=".R_CIN_ESR > .pin1" />
      <trace from=".R_CIN_ESR > .pin2" to=".C_IN > .pin1" />
      <trace from=".C_IN > .pin2" to="net.GND" />

      <trace from="U1.VOUT" to="net.VOUT" />
      <trace from="U1.VOUT" to=".R_COUT_ESR > .pin1" />
      <trace from=".R_COUT_ESR > .pin2" to=".C_OUT > .pin1" />
      <trace from=".C_OUT > .pin2" to="net.GND" />

      <trace from=".R_FB_TOP > .pin1" to="U1.VOUT" />
      <trace from=".R_FB_TOP > .pin2" to="U1.FB" />
      <trace from="U1.FB" to=".R_FB_BOTTOM > .pin1" />
      <trace from=".R_FB_BOTTOM > .pin2" to="net.GND" />
      <trace from=".R_PG > .pin1" to="U1.VIN" />
      <trace from=".R_PG > .pin2" to="U1.PG" />

      {loadResistance === undefined ? (
        <>
          {needsOutputAmmeter ? (
            <>
              <trace from=".I_OUT > .pos" to="net.VOUT" />
              <trace
                from=".I_OUT > .neg"
                to={
                  loadConnectAt === undefined
                    ? ".I_LOAD > .pos"
                    : ".SW_LOAD > .pin1"
                }
              />
            </>
          ) : (
            <trace
              from={
                loadConnectAt === undefined
                  ? ".I_LOAD > .pos"
                  : ".SW_LOAD > .pin1"
              }
              to="net.VOUT"
            />
          )}
          {loadConnectAt !== undefined && (
            <trace from=".SW_LOAD > .pin2" to=".I_LOAD > .pos" />
          )}
          <trace from=".I_LOAD > .neg" to="net.GND" />
        </>
      ) : (
        <>
          {needsOutputAmmeter ? (
            <>
              <trace from=".I_OUT > .pos" to="net.VOUT" />
              <trace from=".I_OUT > .neg" to="net.LOAD_INPUT" />
              <trace from=".R_LOAD > .pin1" to="net.LOAD_INPUT" />
            </>
          ) : (
            <trace from=".R_LOAD > .pin1" to="net.VOUT" />
          )}
          <trace from=".R_LOAD > .pin2" to="net.GND" />
        </>
      )}

      {enableWaveform ? (
        <>
          <trace from=".V_EN > .pin1" to="U1.EN" />
          <trace from=".V_EN > .pin2" to="net.GND" />
        </>
      ) : (
        <trace from="U1.EN" to="U1.VIN" />
      )}
      {mode === "pwm" ? (
        <trace from="U1.MODE" to="U1.VIN" />
      ) : (
        <trace from="U1.MODE" to="net.GND" />
      )}
      <trace from="U1.GND" to="net.GND" />
      <trace from="U1.AGND" to="net.GND" />

      {(showsSwitchingSignals ||
        showsLoadSignals ||
        showsLineSignals ||
        showsStartupSignals ||
        showsMeasurementSignals) && (
        <voltageprobe
          name="VOUT"
          connectsTo="U1.VOUT"
          color="#315cff"
          graphDisplayName="VO"
          graphCenter={outputVoltage}
          graphVerticalOffset={
            showsSwitchingSignals || showsLoadSignals ? 0.45 : 0
          }
          graphVoltagePerDiv={
            showsSwitchingSignals
              ? 0.15
              : showsLoadSignals || showsLineSignals
                ? 0.1
                : showsStartupSignals
                  ? 2
                  : undefined
          }
        />
      )}
      {(showsLineSignals || showsMeasurementSignals) && (
        <voltageprobe
          name="VIN"
          connectsTo={
            showsMeasurementSignals ? ".I_IN > .pos" : ".V_IN > .pin1"
          }
          color="#00d98b"
          graphDisplayName="VI"
          graphCenter={0}
          graphVerticalOffset={0}
          graphVoltagePerDiv={showsLineSignals ? 0.5 : undefined}
        />
      )}
      {showsSwitchingSignals && (
        <>
          <voltageprobe
            name="L1"
            connectsTo="U1.L1"
            color="#00d98b"
            graphDisplayName="L1"
            graphCenter={0}
            graphVerticalOffset={13}
            graphVoltagePerDiv={6.5}
          />
          <voltageprobe
            name="L2"
            connectsTo="U1.L2"
            color="#f1b400"
            graphDisplayName="L2"
            graphCenter={0}
            graphVerticalOffset={5.5}
            graphVoltagePerDiv={5.5}
          />
        </>
      )}
      {showsMeasurementSignals && <voltageprobe name="L1" connectsTo="U1.L1" />}
      {showsStartupSignals && (
        <>
          <voltageprobe
            name="EN"
            connectsTo="U1.EN"
            color="#00d98b"
            graphDisplayName="EN"
            graphCenter={0}
            graphVerticalOffset={0}
            graphVoltagePerDiv={2}
          />
          <voltageprobe
            name="PG"
            connectsTo="U1.PG"
            color="#f1b400"
            graphDisplayName="PG"
            graphCenter={0}
            graphVerticalOffset={0}
            graphVoltagePerDiv={4}
          />
        </>
      )}

      {children}
    </subcircuit>
  );
};
