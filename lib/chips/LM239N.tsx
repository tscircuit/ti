import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["1OUT"],
  pin2: ["2OUT"],
  pin3: ["VCC"],
  pin4: ["2IN_NEG"],
  pin5: ["2IN_POS"],
  pin6: ["1IN_NEG"],
  pin7: ["1IN_POS"],
  pin8: ["3IN_NEG"],
  pin9: ["3IN_POS"],
  pin10: ["4IN_NEG"],
  pin11: ["4IN_POS"],
  pin12: ["GND"],
  pin13: ["OUT4"],
  pin14: ["OUT3"],
} as const;

const pinAttributes = {
  pin3: { requiresPower: true },
  pin12: { requiresGround: true },
} as const;

export const LM239N = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C725325"],
      }}
      manufacturerPartNumber="LM239N"
      footprint={
        <footprint>
          <platedhole
            portHints={["pin8"]}
            pcbX="8.094999mm"
            pcbY="4.284999mm"
            holeWidth="1.499997mm"
            holeHeight="0.999998mm"
            outerWidth="1.999996mm"
            outerHeight="1.499997mm"
            pcbRotation="90deg"
            shape="pill"
          />
          <platedhole
            portHints={["pin9"]}
            pcbX="5.554999mm"
            pcbY="4.284999mm"
            holeWidth="1.499997mm"
            holeHeight="0.999998mm"
            outerWidth="1.999996mm"
            outerHeight="1.499997mm"
            pcbRotation="90deg"
            shape="pill"
          />
          <platedhole
            portHints={["pin10"]}
            pcbX="3.014999mm"
            pcbY="4.284999mm"
            holeWidth="1.499997mm"
            holeHeight="0.999998mm"
            outerWidth="1.999996mm"
            outerHeight="1.499997mm"
            pcbRotation="90deg"
            shape="pill"
          />
          <platedhole
            portHints={["pin11"]}
            pcbX="0.474999mm"
            pcbY="4.284999mm"
            holeWidth="1.499997mm"
            holeHeight="0.999998mm"
            outerWidth="1.999996mm"
            outerHeight="1.499997mm"
            pcbRotation="90deg"
            shape="pill"
          />
          <platedhole
            portHints={["pin12"]}
            pcbX="-2.065001mm"
            pcbY="4.284999mm"
            holeWidth="1.499997mm"
            holeHeight="0.999998mm"
            outerWidth="1.999996mm"
            outerHeight="1.499997mm"
            pcbRotation="90deg"
            shape="pill"
          />
          <platedhole
            portHints={["pin13"]}
            pcbX="-4.605001mm"
            pcbY="4.284999mm"
            holeWidth="1.499997mm"
            holeHeight="0.999998mm"
            outerWidth="1.999996mm"
            outerHeight="1.499997mm"
            pcbRotation="90deg"
            shape="pill"
          />
          <platedhole
            portHints={["pin14"]}
            pcbX="-7.145001mm"
            pcbY="4.284999mm"
            holeWidth="1.499997mm"
            holeHeight="0.999998mm"
            outerWidth="1.999996mm"
            outerHeight="1.499997mm"
            pcbRotation="90deg"
            shape="pill"
          />
          <platedhole
            portHints={["pin7"]}
            pcbX="8.094999mm"
            pcbY="-3.335001mm"
            holeWidth="1.499997mm"
            holeHeight="0.999998mm"
            outerWidth="1.999996mm"
            outerHeight="1.499997mm"
            pcbRotation="90deg"
            shape="pill"
          />
          <platedhole
            portHints={["pin6"]}
            pcbX="5.554999mm"
            pcbY="-3.335001mm"
            holeWidth="1.499997mm"
            holeHeight="0.999998mm"
            outerWidth="1.999996mm"
            outerHeight="1.499997mm"
            pcbRotation="90deg"
            shape="pill"
          />
          <platedhole
            portHints={["pin5"]}
            pcbX="3.014999mm"
            pcbY="-3.335001mm"
            holeWidth="1.499997mm"
            holeHeight="0.999998mm"
            outerWidth="1.999996mm"
            outerHeight="1.499997mm"
            pcbRotation="90deg"
            shape="pill"
          />
          <platedhole
            portHints={["pin4"]}
            pcbX="0.474999mm"
            pcbY="-3.335001mm"
            holeWidth="1.499997mm"
            holeHeight="0.999998mm"
            outerWidth="1.999996mm"
            outerHeight="1.499997mm"
            pcbRotation="90deg"
            shape="pill"
          />
          <platedhole
            portHints={["pin3"]}
            pcbX="-2.065001mm"
            pcbY="-3.335001mm"
            holeWidth="1.499997mm"
            holeHeight="0.999998mm"
            outerWidth="1.999996mm"
            outerHeight="1.499997mm"
            pcbRotation="90deg"
            shape="pill"
          />
          <platedhole
            portHints={["pin2"]}
            pcbX="-4.605001mm"
            pcbY="-3.335001mm"
            holeWidth="1.499997mm"
            holeHeight="0.999998mm"
            outerWidth="1.999996mm"
            outerHeight="1.499997mm"
            pcbRotation="90deg"
            shape="pill"
          />
          <platedhole
            portHints={["pin1"]}
            pcbX="-7.145001mm"
            pcbY="-3.335001mm"
            outerDiameter="1.999996mm"
            holeDiameter="0.999998mm"
            shape="circle"
          />
          <silkscreenpath
            route={[
              { x: -9.02500740000005, y: 3.9749920000001566 },
              { x: -9.02500740000005, y: 1.363999000000149 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -9.02500740000005, y: -3.0249939999998787 },
              { x: -9.02500740000005, y: -0.41400099999987106 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 9.9750054000001, y: -3.0249939999998787 },
              { x: 9.9750054000001, y: 3.9039990000001126 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -9.02500740000005, y: 3.9749920000001566 },
              { x: -8.097246999999925, y: 3.9749920000001566 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -6.192755000000034, y: 3.9749920000001566 },
              { x: -5.557246999999961, y: 3.9749920000001566 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -3.65275500000007, y: 3.9749920000001566 },
              { x: -3.0172469999999976, y: 3.9749920000001566 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.1127550000001065, y: 3.9749920000001566 },
              { x: -0.47724700000003395, y: 3.9749920000001566 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.4272449999999708, y: 3.9749920000001566 },
              { x: 2.0627530000000434, y: 3.9749920000001566 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 3.9672449999999344, y: 3.9749920000001566 },
              { x: 4.602753000000121, y: 3.9749920000001566 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 6.507245000000012, y: 3.9749920000001566 },
              { x: 7.142752999999971, y: 3.9749920000001566 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 9.047244999999862, y: 3.9749920000001566 },
              { x: 9.9750054000001, y: 3.9749920000001566 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -9.02500740000005, y: -3.0249939999998787 },
              { x: -8.099152000000004, y: -3.0249939999998787 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -6.190849999999955, y: -3.0249939999998787 },
              { x: -5.557246999999961, y: -3.0249939999998787 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -3.65275500000007, y: -3.0249939999998787 },
              { x: -3.0172469999999976, y: -3.0249939999998787 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.1127550000001065, y: -3.0249939999998787 },
              { x: -0.47724700000003395, y: -3.0249939999998787 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.4272449999999708, y: -3.0249939999998787 },
              { x: 2.0627530000000434, y: -3.0249939999998787 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 3.9672449999999344, y: -3.0249939999998787 },
              { x: 4.602753000000121, y: -3.0249939999998787 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 6.507245000000012, y: -3.0249939999998787 },
              { x: 7.142752999999971, y: -3.0249939999998787 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 9.047244999999862, y: -3.0249939999998787 },
              { x: 9.9750054000001, y: -3.0249939999998787 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -9.02500740000005, y: 1.363999000000149 },
              { x: -9.024600999999961, y: -0.41400099999987106 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="0.462299mm"
            pcbY="5.792999mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -9.325401000000056, y: 5.042999000000236 },
              { x: 10.249998999999889, y: 5.042999000000236 },
              { x: 10.249998999999889, y: -5.058200999999826 },
              { x: -9.325401000000056, y: -5.058200999999826 },
              { x: -9.325401000000056, y: 5.042999000000236 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C725325.obj?uuid=b0452f991e6c47cfbf860af7689ba441",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C725325.step?uuid=b0452f991e6c47cfbf860af7689ba441",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: -0.47499900000002526,
          y: -0.22499950000019453,
          z: -1.0500059999999998,
        },
      }}
      {...props}
    />
  );
};

export default LM239N;
