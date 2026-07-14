import type { ChipProps } from "@tscircuit/props";

export const TPS61299DRLR_PIN_LABELS = {
  pin1: ["VIN"],
  pin2: ["SW"],
  pin3: ["EN"],
  pin4: ["VSEL"],
  pin5: ["VOUT"],
  pin6: ["GND"],
} as const;

export const TPS61299DRLR = (
  props: ChipProps<typeof TPS61299DRLR_PIN_LABELS>,
) => (
  <chip
    schWidth="2mm"
    schHeight="1.5mm"
    pinLabels={{
      pin1: "VIN",
      pin2: "SW",
      pin3: "EN",
      pin4: "VSEL",
      pin5: "VOUT",
      pin6: "GND",
    }}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: [2, 1, 3],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: [5, 4, 6],
      },
    }}
    schPinStyle={{
      pin2: {
        marginTop: "0.1",
      },
      pin1: {
        marginTop: "0.2",
      },
      pin3: {
        marginTop: "0.2",
      },
      pin5: {
        marginTop: "0.1",
      },
      pin4: {
        marginTop: "0.2",
      },
      pin6: {
        marginTop: "0.2",
      },
    }}
    {...props}
    manufacturerPartNumber="TPS61299DRLR"
    footprint={
      <footprint>
        <smtpad
          portHints={["pin1"]}
          pcbX="-0.74mm"
          pcbY="0.5mm"
          width="0.67mm"
          height="0.3mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin2"]}
          pcbX="-0.74mm"
          pcbY="0mm"
          width="0.67mm"
          height="0.3mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin3"]}
          pcbX="-0.74mm"
          pcbY="-0.5mm"
          width="0.67mm"
          height="0.3mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin4"]}
          pcbX="0.74mm"
          pcbY="-0.5mm"
          width="0.67mm"
          height="0.3mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin5"]}
          pcbX="0.74mm"
          pcbY="0mm"
          width="0.67mm"
          height="0.3mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin6"]}
          pcbX="0.74mm"
          pcbY="0.5mm"
          width="0.67mm"
          height="0.3mm"
          shape="rect"
        />

        <silkscreenpath
          route={[
            { x: -0.55, y: 0.72 },
            { x: 0.55, y: 0.72 },
          ]}
        />
        <silkscreenpath
          route={[
            { x: -0.55, y: -0.72 },
            { x: 0.55, y: -0.72 },
          ]}
        />
        <silkscreenpath
          route={[
            { x: -1.25, y: 0.7 },
            { x: -1.1, y: 0.7 },
            { x: -1.1, y: 0.55 },
            { x: -1.25, y: 0.7 },
          ]}
        />
        <silkscreentext
          text="{NAME}"
          pcbX="0mm"
          pcbY="1.45mm"
          anchorAlignment="center"
          fontSize="0.7mm"
        />
        <courtyardoutline
          outline={[
            { x: -1.35, y: 1 },
            { x: 1.35, y: 1 },
            { x: 1.35, y: -1 },
            { x: -1.35, y: -1 },
            { x: -1.35, y: 1 },
          ]}
        />
      </footprint>
    }
    {...props}
  />
);
