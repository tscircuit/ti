import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["GNA"],
  pin2: ["VREF_A"],
  pin3: ["A1"],
  pin4: ["A2"],
  pin5: ["A3"],
  pin6: ["A4"],
  pin7: ["A5"],
  pin8: ["A6"],
  pin9: ["A7"],
  pin10: ["A8"],
  pin11: ["B8"],
  pin12: ["B7"],
  pin13: ["B6"],
  pin14: ["B5"],
  pin15: ["B4"],
  pin16: ["B3"],
  pin17: ["B2"],
  pin18: ["B1"],
  pin19: ["VREF_B"],
  pin20: ["EN"],
} as const;

export const LSF0108DGSR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C6653422"],
      }}
      manufacturerPartNumber="LSF0108DGSR"
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
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C6653422.obj?uuid=bab62e2d64044af5b779fe29bc643ea7",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C6653422.step?uuid=bab62e2d64044af5b779fe29bc643ea7",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: 0.0007153000000537091,
          y: -0.000012699999956566899,
          z: -0.6,
        },
      }}
      {...props}
    />
  );
};

export default LSF0108DGSR;
