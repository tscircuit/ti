import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VI"],
  pin2: ["GND"],
  pin3: ["VO"],
  pin4: ["VO_ADJ"],
  pin5: ["N_INHIBIT"],
} as const;

const pinAttributes = {
  pin2: { requiresGround: true },
} as const;

export const PTH08080WAH = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C181568"],
      }}
      manufacturerPartNumber="PTH08080WAH"
      footprint={
        <footprint>
          <platedhole
            portHints={["pin5"]}
            pcbX="6.094984mm"
            pcbY="4.824984mm"
            outerDiameter="1.999996mm"
            holeDiameter="1.3999972mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin4"]}
            pcbX="6.094984mm"
            pcbY="-4.824984mm"
            outerDiameter="1.999996mm"
            holeDiameter="1.3999972mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin3"]}
            pcbX="-6.094984mm"
            pcbY="-3.294888mm"
            outerDiameter="1.999996mm"
            holeDiameter="1.3999972mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin2"]}
            pcbX="-6.094984mm"
            pcbY="0.264922mm"
            outerDiameter="1.999996mm"
            holeDiameter="1.3999972mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin1"]}
            pcbX="-6.094984mm"
            pcbY="3.824986mm"
            outerDiameter="1.999996mm"
            holeDiameter="1.3999972mm"
            shape="circle"
          />
          <silkscreenpath
            route={[
              { x: -7.599806999999942, y: 6.649974000000043 },
              { x: 7.600162599999976, y: 6.649974000000043 },
              { x: 7.600162599999976, y: -6.050000599999976 },
              { x: -7.599806999999942, y: -6.050000599999976 },
              { x: -7.599806999999942, y: 6.649974000000043 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.001016mm"
            pcbY="7.780784mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -7.97261600000013, y: 7.03078400000004 },
              { x: 7.970584000000031, y: 7.03078400000004 },
              { x: 7.970584000000031, y: -6.423215999999911 },
              { x: -7.97261600000013, y: -6.423215999999911 },
              { x: -7.97261600000013, y: 7.03078400000004 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C181568.obj?uuid=09b96939c65d4c539ad5eb7a61d3ad3a",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C181568.step?uuid=09b96939c65d4c539ad5eb7a61d3ad3a",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: 0.000012699999956566899,
          y: -0.2840101000000459,
          z: -2.0000069999999996,
        },
      }}
      {...props}
    />
  );
};

export default PTH08080WAH;
