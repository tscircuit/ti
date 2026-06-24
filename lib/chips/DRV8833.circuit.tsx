import { ChipProps } from "tscircuit";

export const DRV8833_PIN_LABELS = {
  pin16: "AIN1",
  pin15: "AIN2",
  pin9: "BIN1",
  pin10: "BIN2",
  pin1: "NSLEEEP",
  pin13: "GND",
  pin11: "VCP",
  pin2: "AOUT1",
  pin4: "AOUT2",
  pin7: "BOUT1",
  pin5: "BOUT2",
  pin8: "NFAULT",
  pin14: "VINT",
  pin3: "AISEN",
  pin6: "BISEN",
  pin12: "VM",
};

export const DRV8833 = (props: ChipProps<any>) => (
  <chip
    {...props}
    pinLabels={DRV8833_PIN_LABELS}
    supplierPartNumbers={{
      jlcpcb: ["C50506"],
    }}
    schPinArrangement={{
      leftSide: ["AIN1", "AIN2", "BIN1", "BIN2", "NSLEEEP"],
      rightSide: [
        "VCP",
        "AOUT1",
        "AOUT2",
        "BOUT1",
        "BOUT2",
        "NFAULT",
        "VINT",
        "AISEN",
        "BISEN",
      ],
      bottomSide: ["GND"],
      topSide: ["VM"],
    }}
    schPinStyle={{
      AIN2: {
        marginBottom: 0.4,
      },
      BIN2: {
        marginBottom: 0.4,
      },
      VINT: {
        marginTop: 0.4,
      },
      BOUT1: {
        marginTop: 0.4,
      },
      AOUT1: {
        marginTop: 0.4,
      },
    }}
    footprint={
      <footprint>
        <smtpad
          portHints={["pin1"]}
          pcbX="-2.275078mm"
          pcbY="-2.850007mm"
          width="0.350012mm"
          height="1.2999974mm"
          radius="0.175006mm"
          shape="pill"
        />
        <smtpad
          portHints={["pin2"]}
          pcbX="-1.625092mm"
          pcbY="-2.850007mm"
          width="0.350012mm"
          height="1.2999974mm"
          radius="0.175006mm"
          shape="pill"
        />
        <smtpad
          portHints={["pin3"]}
          pcbX="-0.975106mm"
          pcbY="-2.850007mm"
          width="0.350012mm"
          height="1.2999974mm"
          radius="0.175006mm"
          shape="pill"
        />
        <smtpad
          portHints={["pin4"]}
          pcbX="-0.324866mm"
          pcbY="-2.850007mm"
          width="0.350012mm"
          height="1.2999974mm"
          radius="0.175006mm"
          shape="pill"
        />
        <smtpad
          portHints={["pin5"]}
          pcbX="0.32512mm"
          pcbY="-2.850007mm"
          width="0.350012mm"
          height="1.2999974mm"
          radius="0.175006mm"
          shape="pill"
        />
        <smtpad
          portHints={["pin6"]}
          pcbX="0.975106mm"
          pcbY="-2.850007mm"
          width="0.350012mm"
          height="1.2999974mm"
          radius="0.175006mm"
          shape="pill"
        />
        <smtpad
          portHints={["pin7"]}
          pcbX="1.625092mm"
          pcbY="-2.850007mm"
          width="0.350012mm"
          height="1.2999974mm"
          radius="0.175006mm"
          shape="pill"
        />
        <smtpad
          portHints={["pin8"]}
          pcbX="2.275078mm"
          pcbY="-2.850007mm"
          width="0.350012mm"
          height="1.2999974mm"
          radius="0.175006mm"
          shape="pill"
        />
        <smtpad
          portHints={["pin16"]}
          pcbX="-2.275078mm"
          pcbY="2.850007mm"
          width="0.350012mm"
          height="1.2999974mm"
          radius="0.175006mm"
          shape="pill"
        />
        <smtpad
          portHints={["pin15"]}
          pcbX="-1.625092mm"
          pcbY="2.850007mm"
          width="0.350012mm"
          height="1.2999974mm"
          radius="0.175006mm"
          shape="pill"
        />
        <smtpad
          portHints={["pin14"]}
          pcbX="-0.975106mm"
          pcbY="2.850007mm"
          width="0.350012mm"
          height="1.2999974mm"
          radius="0.175006mm"
          shape="pill"
        />
        <smtpad
          portHints={["pin13"]}
          pcbX="-0.324866mm"
          pcbY="2.850007mm"
          width="0.350012mm"
          height="1.2999974mm"
          radius="0.175006mm"
          shape="pill"
        />
        <smtpad
          portHints={["pin12"]}
          pcbX="0.32512mm"
          pcbY="2.850007mm"
          width="0.350012mm"
          height="1.2999974mm"
          radius="0.175006mm"
          shape="pill"
        />
        <smtpad
          portHints={["pin11"]}
          pcbX="0.975106mm"
          pcbY="2.850007mm"
          width="0.350012mm"
          height="1.2999974mm"
          radius="0.175006mm"
          shape="pill"
        />
        <smtpad
          portHints={["pin10"]}
          pcbX="1.625092mm"
          pcbY="2.850007mm"
          width="0.350012mm"
          height="1.2999974mm"
          radius="0.175006mm"
          shape="pill"
        />
        <smtpad
          portHints={["pin9"]}
          pcbX="2.275078mm"
          pcbY="2.850007mm"
          width="0.350012mm"
          height="1.2999974mm"
          radius="0.175006mm"
          shape="pill"
        />
        {/* Thermal pad tied to GND (pin13) */}
        <smtpad
          portHints={["pin13"]}
          pcbX="0mm"
          pcbY="0mm"
          width="2.7399996mm"
          height="2.7399996mm"
          shape="rect"
        />
        <via
          pcbX="0.500126mm"
          pcbY="0.499872mm"
          outerDiameter="0.6096mm"
          holeDiameter="0.3048mm"
          layers={["top", "bottom"]}
        />
        <via
          pcbX="-0.499872mm"
          pcbY="0.499872mm"
          outerDiameter="0.6096mm"
          holeDiameter="0.3048mm"
          layers={["top", "bottom"]}
        />
        <via
          pcbX="-0.499872mm"
          pcbY="-0.500126mm"
          outerDiameter="0.6096mm"
          holeDiameter="0.3048mm"
          layers={["top", "bottom"]}
        />
        <via
          pcbX="0.500126mm"
          pcbY="-0.500126mm"
          outerDiameter="0.6096mm"
          holeDiameter="0.3048mm"
          layers={["top", "bottom"]}
        />
        <silkscreenpath
          route={[
            { x: 2.499994999999899, y: 2.100910200000044 },
            { x: 2.499994999999899, y: -2.1009101999999302 },
          ]}
        />
        <silkscreenpath
          route={[
            { x: -2.5400000000000773, y: -2.1397722000000385 },
            { x: -2.5400000000000773, y: -0.3810000000000855 },
          ]}
        />
        <silkscreenpath
          route={[
            { x: -2.5400000000000773, y: 2.1397722000000385 },
            { x: -2.5400000000000773, y: 0.3809999999999718 },
          ]}
        />
        <silkscreenpath
          route={[
            { x: -2.5400000000000773, y: -0.3810000000000855 },
            { x: -2.7639461811234014, y: -0.308235474856815 },
            { x: -2.902352532708619, y: -0.11773547485677227 },
            { x: -2.902352532708619, y: 0.11773547485688596 },
            { x: -2.7639461811234014, y: 0.3082354748569287 },
            { x: -2.5400000000000773, y: 0.3809999999999718 },
          ]}
        />
        <silkscreentext
          text="{NAME}"
          pcbX="-0.2794mm"
          pcbY="4.3274mm"
          anchorAlignment="center"
          fontSize="1mm"
        />
        <courtyardoutline
          outline={[
            { x: -3.298000000000002, y: 3.5774000000000115 },
            { x: 2.7392000000000962, y: 3.5774000000000115 },
            { x: 2.7392000000000962, y: -3.983799999999974 },
            { x: -3.298000000000002, y: -3.983799999999974 },
            { x: -3.298000000000002, y: 3.5774000000000115 },
          ]}
        />
      </footprint>
    }
    cadModel={{
      objUrl:
        "https://modelcdn.tscircuit.com/easyeda_models/assets/C50506.obj?uuid=534f03d8fe164fbab551f91e5a792e30",
      stepUrl:
        "https://modelcdn.tscircuit.com/easyeda_models/assets/C50506.step?uuid=534f03d8fe164fbab551f91e5a792e30",
      pcbRotationOffset: 90,
      modelOriginPosition: { x: 0, y: 0, z: -0.019205 },
    }}
  />
);
