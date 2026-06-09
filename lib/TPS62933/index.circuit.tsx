import { TPS6293 } from "./TPS6293.circuit";

export default () => (
  <board>
    <TPS6293 schX={0} schY={0} name="U1" />
    <trace from=".U1 > .VIN" to="net.VIN" />
    <trace from=".U1 > .GND" to="net.GND" />
    <trace from=".U1 > .SW" to="net.SW" />
    <trace from=".U1 > .FB" to="net.FB" />

    <capacitor
      schX={-10}
      schY={-0.5}
      name="C1"
      schRotation={-90}
      capacitance="10µF"
      footprint="0402"
    />
    <trace from=".C1 > .pin1" to="net.VIN" />
    <trace from=".C1 > .pin2" to="net.GND" />

    <capacitor
      schX={-8}
      schY={-0.5}
      name="C2"
      schRotation={-90}
      capacitance="10µF"
      footprint="0402"
    />
    <trace from=".C2 > .pin1" to="net.VIN" />
    <trace from=".C2 > .pin2" to="net.GND" />

    <capacitor
      schX={-6}
      schY={-0.5}
      name="C3"
      schRotation={-90}
      capacitance="100nF"
      footprint="0402"
    />
    <trace from=".C3 > .pin1" to="net.VIN" />
    <trace from=".C3 > .pin2" to="net.GND" />

    <pinheader pinCount={3} schX={-3.5} schY={-0.5} name="JP1" />
    <trace from=".JP1 > .pin1" to="net.GND" />
    <trace from=".JP1 > .pin2" to=".U1 > .EN" />
    <trace from=".JP1 > .pin3" to="net.EN_DIV" />

    <resistor
      schX={-4.5}
      schY={-0.5}
      name="R1"
      schRotation={-90}
      resistance="511k"
    />
    <trace from=".R1 > .pin1" to="net.VIN" />
    <trace from=".R1 > .pin2" to="net.EN_DIV" />

    <resistor
      schX={-4.5}
      schY={-1.8}
      name="R2"
      schRotation={-90}
      resistance="88.7k"
    />
    <trace from=".R2 > .pin1" to="net.EN_DIV" />
    <trace from=".R2 > .pin2" to="net.GND" />

    <capacitor
      schX={-1.8}
      schY={-1.5}
      name="C4"
      schRotation={-90}
      capacitance="33nF"
    />
    <trace from=".C4 > .pin1" to=".U1 > .SS" />
    <trace from=".C4 > .pin2" to="net.GND" />

    <pinheader pinCount={2} schX={-0.5} schY={-1.7} name="JP2" />
    <trace from=".U1 > .RT" to=".JP2 > .pin1" />

    <resistor
      schX={0.3}
      schY={-2.5}
      name="R3"
      schRotation={-90}
      resistance="0"
    />
    <trace from=".R3 > .pin1" to=".JP2 > .pin2" />
    <trace from=".R3 > .pin2" to="net.GND" />

    <resistor schX={3} schY={0.6} name="R4" resistance="0" />
    <capacitor schX={5} schY={0.6} name="C5" capacitance="100nF" />
    <trace from=".U1 > .BST" to=".R4 > .pin1" />
    <trace from=".C5 > .pin1" to=".R4 > .pin2" />
    <trace from=".C5 > .pin2" to="net.SW" />

    <inductor schX={6.5} schY={0.62} name="L1" inductance="6.8uH" />
    <trace from=".L1 > .pin1" to="net.SW" />
    <trace from=".L1 > .pin2" to="net.VOUT" />

    <capacitor
      schX={8}
      schY={-0.15}
      name="C6"
      capacitance="22µF"
      schRotation={-90}
    />
    <trace from=".C6 > .pin1" to="net.VOUT" />
    <trace from=".C6 > .pin2" to="net.GND" />

    <capacitor
      schX={10}
      schY={-0.15}
      name="C7"
      capacitance="22µF"
      schRotation={-90}
    />
    <trace from=".C7 > .pin1" to="net.VOUT" />
    <trace from=".C7 > .pin2" to="net.GND" />

    <capacitor
      schX={12}
      schY={-0.15}
      name="C8"
      capacitance="100nF"
      schRotation={-90}
    />
    <trace from=".C8 > .pin1" to="net.VOUT" />
    <trace from=".C8 > .pin2" to="net.GND" />

    <resistor schX={7} schY={-2} name="R5" resistance="49.9" />
    <trace from=".R5 > .pin2" to="net.VOUT" />
    <trace from=".R5 > .pin1" to="net.FB_COMP" />

    <resistor schX={4.6} schY={-0.2} name="R6" resistance="53.6k" />
    <trace from=".R6 > .pin1" to="net.FB" />
    <trace from=".R6 > .pin2" to="net.FB_COMP" />

    <capacitor schX={4.6} schY={-2} name="C9" capacitance="10pF" />
    <trace from=".C9 > .pin1" to="net.FB" />
    <trace from=".C9 > .pin2" to="net.FB_COMP" />

    <resistor
      schX={3}
      schY={-1}
      name="R7"
      resistance="10.2k"
      schRotation={-90}
    />
    <trace from=".R7 > .pin2" to="net.GND" />
    <trace from=".R7 > .pin1" to="net.FB" />
  </board>
);
