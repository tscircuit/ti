import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["SOURCE", "1", "SOURCE_1"],
  pin2: ["SOURCE", "2", "SOURCE_2"],
  pin3: ["SOURCE", "3", "SOURCE_3"],
  pin4: ["GATE", "4"],
  pin5: ["DRAIN", "5", "DRAIN_5"],
  pin6: ["DRAIN", "6", "DRAIN_6"],
  pin7: ["DRAIN", "7", "DRAIN_7"],
  pin8: ["DRAIN", "8", "DRAIN_8"],
  pin9: ["D", "9"],
} as const;

const pinRoles = {
  pin1: "unknown",
  pin2: "unknown",
  pin3: "unknown",
  pin4: "control",
  pin5: "unknown",
  pin6: "unknown",
  pin7: "unknown",
  pin8: "unknown",
  pin9: "power",
} as const;

const pinAttributes = {
  pin9: { requiresPower: true },
} as const;

export const CSD18531Q5AT = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing DQJ0008A; donor CSD17578Q5A (JLCPCB C2871447)
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="CSD18531Q5AT"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin4"]}
            pcbX="1.902587mm"
            pcbY="-2.749931mm"
            width="0.580009mm"
            height="1.1999976mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0.632587mm"
            pcbY="-2.749931mm"
            width="0.580009mm"
            height="1.1999976mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.637413mm"
            pcbY="-2.749931mm"
            width="0.580009mm"
            height="1.1999976mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="-1.907413mm"
            pcbY="-2.749931mm"
            width="0.580009mm"
            height="1.1999976mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-1.902333mm"
            pcbY="2.749931mm"
            width="0.580009mm"
            height="1.1999976mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-0.632333mm"
            pcbY="2.749931mm"
            width="0.580009mm"
            height="1.1999976mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0.637667mm"
            pcbY="2.749931mm"
            width="0.580009mm"
            height="1.1999976mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="1.907413mm"
            pcbY="2.749931mm"
            width="0.580009mm"
            height="1.1999976mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="0mm"
            pcbY="0.6459982mm"
            width="4.3999912mm"
            height="3.7999924mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -2.428570200000081, y: -2.917012199999931 },
              { x: -2.542438400000151, y: -2.917012199999931 },
              { x: -2.542438400000151, y: 3.05198780000012 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.1585702000000992, y: -2.917012199999931 },
              { x: -1.386281199999985, y: -2.917012199999931 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 0.11142979999988256, y: -2.917012199999931 },
              { x: -0.11628120000011677, y: -2.917012199999931 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.3814297999998644, y: -2.917012199999931 },
              { x: 1.153718799999865, y: -2.917012199999931 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 2.4186387999999397, y: 3.05198780000012 },
              { x: 2.53756159999989, y: 3.05198780000012 },
              { x: 2.53756159999989, y: -2.917012199999931 },
              { x: 2.4237187999999605, y: -2.917012199999931 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.1587987999998859, y: 3.05198780000012 },
              { x: 1.3763243999999304, y: 3.05198780000012 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.11120120000009592, y: 3.05198780000012 },
              { x: 0.11650979999990341, y: 3.05198780000012 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.3812012000000777, y: 3.05198780000012 },
              { x: -1.1534902000000784, y: 3.05198780000012 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.542438400000151, y: 3.05198780000012 },
              { x: -2.423490200000174, y: 3.05198780000012 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.669463800000017, y: -3.8100253999999723 },
              { x: -2.7945523285046647, y: -3.9332137800493 },
              { x: -2.918377320239415, y: -3.8087553999998818 },
              { x: -2.7945523285046647, y: -3.684297019950691 },
              { x: -2.669463800000017, y: -3.8074853999997913 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.075311mm"
            pcbY="4.360293mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -2.9288110000001097, y: 3.6102930000000697 },
              { x: 2.7781889999999976, y: 3.6102930000000697 },
              { x: 2.7781889999999976, y: -4.17950699999983 },
              { x: -2.9288110000001097, y: -4.17950699999983 },
              { x: -2.9288110000001097, y: 3.6102930000000697 },
            ]}
          />
        </footprint>
      }
      {...props}
    />
  );
};

export default CSD18531Q5AT;
