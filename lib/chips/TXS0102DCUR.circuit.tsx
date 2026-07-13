import type { ChipProps } from "tscircuit";

const pinLabels = {
  pin1: "B2",
  pin2: "GND",
  pin3: "VCCA",
  pin4: "A2",
  pin5: "A1",
  pin6: "OE",
  pin7: "VCCB",
  pin8: "B1",
} as const;

export const TXS0102DCUR = (props: ChipProps<typeof pinLabels>) => (
  <chip
    pinLabels={pinLabels}
    pinAttributes={{
      A1: {
        requiresPower: true,
      },
      A2: {
        requiresPower: true,
      },
      B1: {
        requiresPower: true,
      },
      B2: {
        requiresPower: true,
      },
      GND: {
        requiresGround: true,
      },
      OE: {
        mustBeConnected: true,
      },
    }}
    schPinArrangement={{
      topSide: {
        direction: "left-to-right",
        pins: ["VCCA", "VCCB"],
      },
      leftSide: {
        direction: "top-to-bottom",
        pins: ["OE", "A1", "A2"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["B1", "B2"],
      },
      bottomSide: {
        direction: "left-to-right",
        pins: ["GND"],
      },
    }}
    schPinStyle={{
      VCCA: {
        marginRight: 0.5,
      },
      VCCB: {
        marginLeft: 0.5,
      },
      OE: {
        marginBottom: 0.7,
      },
      A1: {
        marginTop: 0.15,
      },
      B1: {
        marginTop: 1,
      },
    }}
    schWidth={2}
    schHeight={3}
    supplierPartNumbers={{
      jlcpcb: ["C53434"],
    }}
    manufacturerPartNumber="TXS0102DCUR"
    footprint={
      <footprint>
        <smtpad
          portHints={["pin1"]}
          pcbX="-0.762mm"
          pcbY="-1.550035mm"
          width="0.2500122mm"
          height="0.700024mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin2"]}
          pcbX="-0.254mm"
          pcbY="-1.550035mm"
          width="0.2500122mm"
          height="0.700024mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin3"]}
          pcbX="0.254mm"
          pcbY="-1.550035mm"
          width="0.2500122mm"
          height="0.700024mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin4"]}
          pcbX="0.762mm"
          pcbY="-1.550035mm"
          width="0.2500122mm"
          height="0.700024mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin5"]}
          pcbX="0.762mm"
          pcbY="1.550035mm"
          width="0.2500122mm"
          height="0.700024mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin6"]}
          pcbX="0.254mm"
          pcbY="1.550035mm"
          width="0.2500122mm"
          height="0.700024mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin7"]}
          pcbX="-0.254mm"
          pcbY="1.550035mm"
          width="0.2500122mm"
          height="0.700024mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin8"]}
          pcbX="-0.762mm"
          pcbY="1.550035mm"
          width="0.2500122mm"
          height="0.700024mm"
          shape="rect"
        />
        <silkscreenpath
          route={[
            { x: 1.1998706000000539, y: 1.0001250000000255 },
            { x: 1.1998706000000539, y: -0.9998709999999846 },
          ]}
        />
        <silkscreenpath
          route={[
            { x: -1.2000484000000142, y: -0.9998709999999846 },
            { x: -1.2000484000000142, y: 1.0001250000000255 },
          ]}
        />
        <silkscreenpath
          route={[
            { x: -1.2000484000000142, y: -0.9998709999999846 },
            { x: -1.0003028000000995, y: -0.9998709999999846 },
          ]}
        />
        <silkscreenpath
          route={[
            { x: -0.5239512000000559, y: -0.9998709999999846 },
            { x: -0.4923028000000613, y: -0.9998709999999846 },
          ]}
        />
        <silkscreenpath
          route={[
            { x: -0.015951200000017707, y: -0.9998709999999846 },
            { x: 0.015697199999976874, y: -0.9998709999999846 },
          ]}
        />
        <silkscreenpath
          route={[
            { x: 0.4920487999999068, y: -0.9998709999999846 },
            { x: 0.5236971999999014, y: -0.9998709999999846 },
          ]}
        />
        <silkscreenpath
          route={[
            { x: 1.0000487999998313, y: -0.9998709999999846 },
            { x: 1.1998706000000539, y: -0.9998709999999846 },
          ]}
        />
        <silkscreenpath
          route={[
            { x: -1.2000484000000142, y: 1.0001250000000255 },
            { x: -1.0003028000000995, y: 1.0001250000000255 },
          ]}
        />
        <silkscreenpath
          route={[
            { x: -0.5239512000000559, y: 1.0001250000000255 },
            { x: -0.4923028000000613, y: 1.0001250000000255 },
          ]}
        />
        <silkscreenpath
          route={[
            { x: -0.015951200000017707, y: 1.0001250000000255 },
            { x: 0.015697199999976874, y: 1.0001250000000255 },
          ]}
        />
        <silkscreenpath
          route={[
            { x: 0.4920487999999068, y: 1.0001250000000255 },
            { x: 0.5236971999999014, y: 1.0001250000000255 },
          ]}
        />
        <silkscreenpath
          route={[
            { x: 1.0000487999998313, y: 1.0001250000000255 },
            { x: 1.1998706000000539, y: 1.0001250000000255 },
          ]}
        />
        <silkscreenpath
          route={[
            { x: -1.170000200000004, y: -1.777872999999886 },
            { x: -1.1734076105562963, y: -1.8037548527463514 },
            { x: -1.1833976328266544, y: -1.8278728999998748 },
            { x: -1.1992894633027618, y: -1.8485835366972196 },
            { x: -1.2200001000001066, y: -1.864475367173327 },
            { x: -1.24411814725363, y: -1.8744653894436851 },
            { x: -1.2700000000000955, y: -1.8778727999999774 },
            { x: -1.2958818527463336, y: -1.8744653894436851 },
            { x: -1.3199998999999707, y: -1.864475367173327 },
            { x: -1.3407105366973155, y: -1.8485835366972196 },
            { x: -1.3566023671734229, y: -1.8278728999998748 },
            { x: -1.3665923894438947, y: -1.8037548527463514 },
            { x: -1.3699998000000733, y: -1.777872999999886 },
            { x: -1.3665923894438947, y: -1.7519911472536478 },
            { x: -1.3566023671734229, y: -1.7278731000000107 },
            { x: -1.3407105366973155, y: -1.7071624633026659 },
            { x: -1.3199998999999707, y: -1.6912706328265585 },
            { x: -1.2958818527463336, y: -1.6812806105560867 },
            { x: -1.2700000000000955, y: -1.6778731999999081 },
            { x: -1.24411814725363, y: -1.6812806105560867 },
            { x: -1.2200001000001066, y: -1.6912706328265585 },
            { x: -1.1992894633027618, y: -1.7071624633026659 },
            { x: -1.1833976328266544, y: -1.7278731000000107 },
            { x: -1.1734076105562963, y: -1.7519911472536478 },
            { x: -1.170000200000004, y: -1.777872999999886 },
          ]}
        />
        <silkscreentext
          text="{NAME}"
          pcbX="-0.089154mm"
          pcbY="2.905127mm"
          anchorAlignment="center"
          fontSize="1mm"
        />
        <courtyardoutline
          outline={[
            { x: -1.6218539999999848, y: 2.155126999999993 },
            { x: 1.4435459999998557, y: 2.155126999999993 },
            { x: 1.4435459999998557, y: -2.1548729999999523 },
            { x: -1.6218539999999848, y: -2.1548729999999523 },
            { x: -1.6218539999999848, y: 2.155126999999993 },
          ]}
        />
      </footprint>
    }
    cadModel={{
      objUrl:
        "https://modelcdn.tscircuit.com/easyeda_models/assets/C53434.obj?uuid=49b0213b4b994294a133f584e9799a83",
      stepUrl:
        "https://modelcdn.tscircuit.com/easyeda_models/assets/C53434.step?uuid=49b0213b4b994294a133f584e9799a83",
      pcbRotationOffset: 270,
      modelOriginPosition: {
        x: 0.00011430000006384944,
        y: 0.00012700000002041634,
        z: 0.00079500,
      },
    }}
    {...props}
  />
);

export default TXS0102DCUR;
