import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["A1", "1"],
  pin2: ["A0", "2"],
  pin3: ["VCORE", "3"],
  pin4: ["BSLSDA", "4"],
  pin5: ["BSLSCL", "5"],
  pin6: ["VDD", "6"],
  pin7: ["VSS", "7"],
  pin8: ["ROSC", "8"],
  pin9: ["PA4", "9"],
  pin10: ["PA6", "10"],
  pin11: ["COMP0_OUT", "11"],
  pin12: ["A8", "12"],
  pin13: ["PA17", "13"],
  pin14: ["A7", "14"],
  pin15: ["SWDIO", "15"],
  pin16: ["A6", "16"],
  pin17: ["A4", "17"],
  pin18: ["BSLTX", "18"],
  pin19: ["A3", "19"],
  pin20: ["A2", "20"],
} as const;

const pinRoles = {
  pin1: "input",
  pin2: "input",
  pin3: "power",
  pin4: "bidirectional",
  pin5: "bidirectional",
  pin6: "power",
  pin7: "ground",
  pin8: "input",
  pin9: "bidirectional",
  pin10: "bidirectional",
  pin11: "output",
  pin12: "input",
  pin13: "bidirectional",
  pin14: "input",
  pin15: "bidirectional",
  pin16: "input",
  pin17: "input",
  pin18: "output",
  pin19: "input",
  pin20: "input",
} as const;

const pinAttributes = {
  pin3: { requiresPower: true },
  pin6: { requiresPower: true },
  pin7: { requiresGround: true },
} as const;

export const MSPM0L1343TDGS20R = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing DGS0020A; donor LSF0108DGSR (JLCPCB C6653422)
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="MSPM0L1343TDGS20R"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin11"]}
            pcbX="2.249932mm"
            pcbY="2.199894mm"
            width="0.2999994mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="1.75006mm"
            pcbY="2.199894mm"
            width="0.2999994mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="1.249934mm"
            pcbY="2.199894mm"
            width="0.2999994mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="0.750062mm"
            pcbY="2.199894mm"
            width="0.2999994mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="0.249936mm"
            pcbY="2.199894mm"
            width="0.2999994mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="-0.249936mm"
            pcbY="2.199894mm"
            width="0.2999994mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="-0.750062mm"
            pcbY="2.199894mm"
            width="0.2999994mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="-1.249934mm"
            pcbY="2.199894mm"
            width="0.2999994mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin19"]}
            pcbX="-1.75006mm"
            pcbY="2.199894mm"
            width="0.2999994mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin20"]}
            pcbX="-2.249932mm"
            pcbY="2.199894mm"
            width="0.2999994mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="2.249932mm"
            pcbY="-2.199894mm"
            width="0.2999994mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="1.75006mm"
            pcbY="-2.199894mm"
            width="0.2999994mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="1.249934mm"
            pcbY="-2.199894mm"
            width="0.2999994mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="0.750062mm"
            pcbY="-2.199894mm"
            width="0.2999994mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0.249936mm"
            pcbY="-2.199894mm"
            width="0.2999994mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-0.249936mm"
            pcbY="-2.199894mm"
            width="0.2999994mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-0.750062mm"
            pcbY="-2.199894mm"
            width="0.2999994mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-1.249934mm"
            pcbY="-2.199894mm"
            width="0.2999994mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-1.75006mm"
            pcbY="-2.199894mm"
            width="0.2999994mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="-2.249932mm"
            pcbY="-2.199894mm"
            width="0.2999994mm"
            height="0.999998mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: 2.5999440000000504, y: -1.450009800000089 },
              { x: 2.5999440000000504, y: 1.459991999999943 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.6000455999999303, y: -0.6114542000000256 },
              { x: -2.6000455999999303, y: -1.450009800000089 },
              { x: 2.5999440000000504, y: -1.450009800000089 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.6000455999999303, y: 0.5823457999999846 },
              { x: -2.6000455999999303, y: 1.459991999999943 },
              { x: 2.5999440000000504, y: 1.459991999999943 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.6000455999999303, y: -0.6114542000000256 },
              { x: -2.6000455999999303, y: 0.5823457999999846 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.003048mm"
            pcbY="3.711196mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -2.856547999999975, y: 2.9611960000000863 },
              { x: 2.8504520000000184, y: 2.9611960000000863 },
              { x: 2.8504520000000184, y: -2.9490039999999453 },
              { x: -2.856547999999975, y: -2.9490039999999453 },
              { x: -2.856547999999975, y: 2.9611960000000863 },
            ]}
          />
        </footprint>
      }
      {...props}
    />
  );
};

export default MSPM0L1343TDGS20R;
