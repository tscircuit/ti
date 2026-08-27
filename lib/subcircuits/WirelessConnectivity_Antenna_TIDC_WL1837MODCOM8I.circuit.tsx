import type { SubcircuitProps } from "@tscircuit/props";
import "tscircuit";

/**
 * ANT1 branch from TI TIDC-WL1837MODCOM8I sheet 2.
 *
 * C5 is intentionally a zero-ohm resistor despite its C reference designator,
 * matching TI's schematic and BOM. C7/L2 are the published no-use options.
 * @see https://www.ti.com/tool/TIDC-WL1837MODCOM8I
 */
export const WirelessConnectivity_Antenna_TIDC_WL1837MODCOM8I = (
  props: SubcircuitProps,
) => (
  <subcircuit routingDisabled {...props}>
    <resistor
      name="C5"
      resistance="0ohm"
      schX={-3}
      schY={0}
      connections={{ pin1: "net.RF_ANT1", pin2: "net.ANT1_MATCH_IN" }}
    />
    <capacitor
      name="C13"
      capacitance="1pF"
      schX={0}
      schY={0}
      connections={{ pin1: "net.ANT1_MATCH_IN", pin2: "net.ANT1_FEED" }}
    />

    <inductor
      name="L2"
      inductance="1nH"
      doNotPlace
      schX={-0.9}
      schY={-1.35}
      schRotation={90}
      connections={{ pin1: "net.GND", pin2: "net.ANT1_MATCH_IN" }}
    />
    <schematictext text="NU" schX={-1.65} schY={-1.35} fontSize={0.18} />
    <inductor
      name="L1"
      manufacturerPartNumber="LQP15MN1N3B02"
      inductance="1.3nH"
      schX={1.25}
      schY={-1.35}
      schRotation={90}
      connections={{ pin1: "net.GND", pin2: "net.ANT1_FEED" }}
    />

    <resistor
      name="C7"
      resistance="0ohm"
      doNotPlace
      schX={-3}
      schY={-1.35}
      schRotation={90}
      connections={{ pin1: "net.UFL_RF", pin2: "net.ANT1_MATCH_IN" }}
    />
    <schematictext text="NU" schX={-3.75} schY={-1.35} fontSize={0.18} />
    <chip
      name="J5"
      manufacturerPartNumber="U.FL-R-SMT-1(10)"
      pinLabels={{ pin1: "RF", pin2: "GND1", pin3: "GND2" }}
      showPinAliases={false}
      schX={-3}
      schY={-3.2}
      schWidth={1}
      schHeight={0.8}
      schPinArrangement={{
        topSide: { direction: "left-to-right", pins: ["RF"] },
        bottomSide: {
          direction: "left-to-right",
          pins: ["GND1", "GND2"],
        },
      }}
      connections={{ RF: "net.UFL_RF", GND1: "net.GND", GND2: "net.GND" }}
    />

    <chip
      name="ANT1"
      manufacturerPartNumber="W3006"
      pinLabels={{ pin1: "FEED", pin2: "NC" }}
      showPinAliases={false}
      noConnect={["NC"]}
      schX={3}
      schY={0}
      schWidth={1.2}
      schHeight={0.8}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: ["FEED"] },
        rightSide: { direction: "top-to-bottom", pins: ["NC"] },
      }}
      connections={{ FEED: "net.ANT1_FEED" }}
    />

    <schematictext
      text="ANT1 - WL_2.4_IO2 / BT / WL_5GHz"
      schX={0}
      schY={1.7}
      fontSize={0.24}
    />
  </subcircuit>
);

export default WirelessConnectivity_Antenna_TIDC_WL1837MODCOM8I;
