import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["GND"],
  pin2: ["IO1"],
  pin3: ["IO2"],
} as const;

const pinAttributes = {
  pin1: { requiresGround: true },
} as const;

export const ESD122DMXR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C544474"],
      }}
      manufacturerPartNumber="ESD122DMXR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin3"]}
            pcbX="0.149987mm"
            pcbY="0.339979mm"
            width="0.1999996mm"
            height="0.1999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="0.149987mm"
            pcbY="-0.339979mm"
            width="0.1999996mm"
            height="0.1999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.149987mm"
            pcbY="0.000127mm"
            width="0.1999996mm"
            height="0.1999996mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: 0.45003719999999703, y: 0.6400037999999313 },
              { x: -0.44996100000003025, y: 0.6400037999999313 },
              { x: -0.44996100000003025, y: -0.6599936000000071 },
              { x: 0.45003719999999703, y: -0.6599936000000071 },
              { x: 0.45003719999999703, y: 0.6400037999999313 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.002667mm"
            pcbY="1.635127mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -0.6971670000000358, y: 0.8851269999998976 },
              { x: 0.6918329999998605, y: 0.8851269999998976 },
              { x: 0.6918329999998605, y: -0.910272999999961 },
              { x: -0.6971670000000358, y: -0.910272999999961 },
              { x: -0.6971670000000358, y: 0.8851269999998976 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C544474.obj?uuid=73d3817547204e8794366a3a32e5dc7f",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C544474.step?uuid=73d3817547204e8794366a3a32e5dc7f",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: -0.00005079999993995443,
          y: -0.000012700000070253736,
          z: -0.02,
        },
      }}
      {...props}
    />
  );
};

export default ESD122DMXR;
