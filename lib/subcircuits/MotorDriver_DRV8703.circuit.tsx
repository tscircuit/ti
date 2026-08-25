import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";
import { GateDriver_DRV8703 } from "./GateDriver_DRV8703.circuit.tsx";
import { HBridge_SQJ940EP } from "./HBridge_SQJ940EP.circuit.tsx";

/**
 * Complete TIDA-01389 motor-driver stage. The two Altium reference boxes stay
 * isolated as child subcircuits so their internal schematic traces cannot be
 * routed across one another. This layer only joins their named interfaces.
 */
export const MotorDriver_DRV8703 = (props: SubcircuitProps) => (
  <subcircuit routingDisabled schTraceAutoLabelEnabled={false} {...props}>
    <GateDriver_DRV8703
      name="gateDriver"
      connections={{
        PVDD: "net.PVDD",
        VCC: "net.VCC",
        VCP: "net.VCP",
        IN1_PH: "net.IN1_PH",
        IN2_EN: "net.IN2_EN",
        nSLEEP: "net.nSLEEP",
        SCLK: "net.SCLK",
        SDI: "net.SDI",
        SDO: "net.SDO",
        nSCS: "net.nSCS",
        GH1: "net.GH1",
        SH1: "net.SH1",
        GL1: "net.GL1",
        GH2: "net.GH2",
        SH2: "net.SH2",
        GL2: "net.GL2",
        SL2: "net.SL2",
        SP: "net.SP",
        SN: "net.SN",
        SO: "net.SO",
        nFAULT: "net.nFAULT",
        GND: "net.GND",
      }}
    />
    <HBridge_SQJ940EP
      name="hBridge"
      schX={5.392051}
      connections={{
        PVDD: "net.PVDD",
        GH1: "net.GH1",
        SH1: "net.SH1",
        GL1: "net.GL1",
        GH2: "net.GH2",
        SH2: "net.SH2",
        GL2: "net.GL2",
        SL2: "net.SL2",
        SP: "net.SP",
        SN: "net.SN",
        GND: "net.GND",
      }}
    />

    <port name="PVDD" direction="left" connectsTo="gateDriver.PVDD" />
    <port name="VCC" direction="left" connectsTo="gateDriver.VCC" />
    <port name="VCP" direction="left" connectsTo="gateDriver.VCP" />
    <port name="IN1_PH" direction="left" connectsTo="gateDriver.IN1_PH" />
    <port name="IN2_EN" direction="left" connectsTo="gateDriver.IN2_EN" />
    <port name="nSLEEP" direction="left" connectsTo="gateDriver.nSLEEP" />
    <port name="SCLK" direction="left" connectsTo="gateDriver.SCLK" />
    <port name="SDI" direction="left" connectsTo="gateDriver.SDI" />
    <port name="SDO" direction="left" connectsTo="gateDriver.SDO" />
    <port name="nSCS" direction="left" connectsTo="gateDriver.nSCS" />
    <port name="SO" direction="right" connectsTo="gateDriver.SO" />
    <port name="nFAULT" direction="right" connectsTo="gateDriver.nFAULT" />
    <port name="GND" direction="right" connectsTo="gateDriver.GND" />
  </subcircuit>
);

export default MotorDriver_DRV8703;
