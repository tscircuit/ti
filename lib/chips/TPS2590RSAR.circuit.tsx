import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["IN1"],
  pin2: ["IN2"],
  pin3: ["IN3"],
  pin4: ["IN4"],
  pin5: ["GND3"],
  pin6: ["RTRY"],
  pin7: ["ILIM"],
  pin8: ["IFLT"],
  pin9: ["CT"],
  pin10: ["OUT1"],
  pin11: ["OUT2"],
  pin12: ["OUT3"],
  pin13: ["GND2"],
  pin14: ["GND1"],
  pin15: ["FLT"],
  pin16: ["EN"],
  pin17: ["PAD"],
} as const;

export const TPS2590RSAR = (props: ChipProps<typeof pinLabels>) => {
  const { name = "SW1", ...restProps } = props;

  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      name={name}
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C473399"],
      }}
      manufacturerPartNumber="TPS2590RSAR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin16"]}
            pcbX="-1.949958mm"
            pcbY="-0.9906mm"
            width="0.999998mm"
            height="0.350012mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="-1.949958mm"
            pcbY="-0.34036mm"
            width="0.999998mm"
            height="0.350012mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="-1.949958mm"
            pcbY="0.30988mm"
            width="0.999998mm"
            height="0.350012mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="-1.949958mm"
            pcbY="0.96012mm"
            width="0.999998mm"
            height="0.350012mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="1.949958mm"
            pcbY="-0.9906mm"
            width="0.999998mm"
            height="0.350012mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="1.949958mm"
            pcbY="-0.34036mm"
            width="0.999998mm"
            height="0.350012mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="1.949958mm"
            pcbY="0.30988mm"
            width="0.999998mm"
            height="0.350012mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="1.949958mm"
            pcbY="0.96012mm"
            width="0.999998mm"
            height="0.350012mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.9652mm"
            pcbY="-1.949958mm"
            width="0.350012mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.31496mm"
            pcbY="-1.949958mm"
            width="0.350012mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0.33528mm"
            pcbY="-1.949958mm"
            width="0.350012mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0.98552mm"
            pcbY="-1.949958mm"
            width="0.350012mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="0.9906mm"
            pcbY="1.949958mm"
            width="0.350012mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="0.34036mm"
            pcbY="1.949958mm"
            width="0.350012mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="-0.30988mm"
            pcbY="1.949958mm"
            width="0.350012mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="-0.96012mm"
            pcbY="1.949958mm"
            width="0.350012mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="0mm"
            pcbY="0mm"
            width="1.9500088mm"
            height="1.9500088mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -2.099995799999995, y: 2.099995799999995 },
              { x: -1.3662659999999889, y: 2.099995799999995 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.3916660000000078, y: -2.099995800000002 },
              { x: 2.099995800000002, y: -2.099995800000002 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.099995799999995, y: -2.099995800000002 },
              { x: -1.3713460000000026, y: -2.099995800000002 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 2.099995800000002, y: 1.366265999999996 },
              { x: 2.099995800000002, y: 2.099995799999995 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 2.099995800000002, y: -2.099995800000002 },
              { x: 2.099995800000002, y: -1.3967460000000003 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.099995799999995, y: 1.366265999999996 },
              { x: -2.099995799999995, y: 2.099995799999995 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.099995799999995, y: -2.099995800000002 },
              { x: -2.099995799999995, y: -1.3967460000000003 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.3967460000000003, y: 2.099995799999995 },
              { x: 2.099995800000002, y: 2.099995799999995 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.8033999999999963, y: -2.489200000000004 },
              { x: -1.9521410559976573, y: -2.3385579702960726 },
              { x: -1.8021299999999982, y: -2.1891805759852687 },
              { x: -1.6521189440023392, y: -2.3385579702960726 },
              { x: -1.8008600000000001, y: -2.489200000000004 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="0.0127mm"
            pcbY="3.4384mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -2.6883999999999872, y: 2.6884000000000015 },
              { x: 2.713800000000006, y: 2.6884000000000015 },
              { x: 2.713800000000006, y: -3.044000000000004 },
              { x: -2.6883999999999872, y: -3.044000000000004 },
              { x: -2.6883999999999872, y: 2.6884000000000015 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C473399.obj?uuid=005c494a04ea483db187f9e608c0fe00",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C473399.step?uuid=005c494a04ea483db187f9e608c0fe00",
        pcbRotationOffset: 90,
        modelOriginPosition: {
          x: -0.000012699999999199463,
          y: -0.000012699999999199463,
          z: 0.01,
        },
      }}
      {...restProps}
    />
  );
};

export default TPS2590RSAR;
