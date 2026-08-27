import type { ChipProps } from "@tscircuit/props";

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
} as const;

export const TPD2E007DCKR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      symbol={
        <symbol>
          <schematicpath
            points={[
              { x: 0.2, y: 0.1 },
              { x: 0.2, y: -0.1 },
            ]}
            strokeColor="#800000"
          />
          <schematicpath
            points={[
              { x: -0.2, y: 0.1 },
              { x: -0.2, y: -0.1 },
            ]}
            strokeColor="#800000"
          />
          <schematicpath
            points={[
              { x: -0.38, y: 0.38 },
              { x: -0.3, y: 0.3 },
              { x: -0.1, y: 0.3 },
              { x: -0.02, y: 0.22 },
            ]}
            strokeColor="#880000"
          />
          <schematicpath
            svgPath="M -0.08 0.1 L -0.2 0.3 L -0.32 0.1 Z"
            strokeColor="#880000"
          />
          <schematicpath
            points={[
              { x: 0.02, y: 0.38 },
              { x: 0.1, y: 0.3 },
              { x: 0.3, y: 0.3 },
              { x: 0.38, y: 0.22 },
            ]}
            strokeColor="#880000"
          />
          <schematicpath
            svgPath="M 0.32 0.1 L 0.2 0.3 L 0.08 0.1 Z"
            strokeColor="#880000"
          />
          <schematicrect
            schX={0}
            schY={0}
            width={0.8}
            height={1}
            color="#880000"
          />
          <schematiccircle
            center={{ x: -0.34, y: -0.44 }}
            radius={0.03}
            color="#880000"
            isFilled
            fillColor="#880000"
          />
          <port
            name="pin2"
            pinNumber={2}
            aliases={["2"]}
            direction="down"
            schX={0.2}
            schY={-0.7}
            schStemLength={0.3}
          />
          <port
            name="pin3"
            pinNumber={3}
            aliases={["3"]}
            direction="up"
            schX={0}
            schY={0.7}
            schStemLength={0.3}
          />
          <port
            name="pin1"
            pinNumber={1}
            aliases={["1"]}
            direction="down"
            schX={-0.2}
            schY={-0.7}
            schStemLength={0.3}
          />
          <schematicpath
            points={[
              { x: -0.2, y: 0.3 },
              { x: -0.2, y: 0.4 },
              { x: 0.2, y: 0.4 },
              { x: 0.2, y: 0.3 },
            ]}
            strokeColor="#880000"
          />
          <schematicpath
            points={[
              { x: -0.2, y: -0.3 },
              { x: -0.2, y: -0.4 },
            ]}
            strokeColor="#880000"
          />
          <schematicpath
            points={[
              { x: 0.2, y: -0.31 },
              { x: 0.2, y: -0.41 },
            ]}
            strokeColor="#880000"
          />
          <schematicpath
            points={[
              { x: -0.02, y: -0.38 },
              { x: -0.1, y: -0.3 },
              { x: -0.3, y: -0.3 },
              { x: -0.38, y: -0.22 },
            ]}
            strokeColor="#880000"
          />
          <schematicpath
            svgPath="M -0.32 -0.1 L -0.2 -0.3 L -0.08 -0.1 Z"
            strokeColor="#880000"
          />
          <schematicpath
            points={[
              { x: 0.38, y: -0.38 },
              { x: 0.3, y: -0.3 },
              { x: 0.1, y: -0.3 },
              { x: 0.02, y: -0.22 },
            ]}
            strokeColor="#880000"
          />
          <schematicpath
            svgPath="M 0.08 -0.1 L 0.2 -0.3 L 0.32 -0.1 Z"
            strokeColor="#880000"
          />
        </symbol>
      }
      supplierPartNumbers={{
        jlcpcb: ["C3011199"],
      }}
      manufacturerPartNumber="TPD2E007DCKR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="0.89789mm"
            pcbY="-0.649986mm"
            width="0.93599mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="0.89789mm"
            pcbY="0.649986mm"
            width="0.93599mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-0.89789mm"
            pcbY="0mm"
            width="0.93599mm"
            height="0.499999mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: 0.7011923999998544, y: 1.1262106000000358 },
              { x: -0.7011924000000818, y: 1.1262106000000358 },
              { x: -0.7011924000000818, y: 0.41059100000006765 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 0.7011923999998544, y: -1.1262105999999221 },
              { x: -0.7011924000000818, y: -1.1262105999999221 },
              { x: -0.7011924000000818, y: -0.41059100000006765 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 0.7011923999998544, y: 0.23939500000005864 },
              { x: 0.7011923999998544, y: -0.23939500000005864 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="0.0889mm"
            pcbY="2.1176mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -1.621599999999944, y: 1.3676000000000386 },
              { x: 1.7993999999998778, y: 1.3676000000000386 },
              { x: 1.7993999999998778, y: -1.393000000000029 },
              { x: -1.621599999999944, y: -1.393000000000029 },
              { x: -1.621599999999944, y: 1.3676000000000386 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C3011199.obj?uuid=788b28f834c14551a13b5249c70c550d",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C3011199.step?uuid=788b28f834c14551a13b5249c70c550d",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0, y: 0.000012699999842880061, z: -0.075 },
      }}
      {...props}
    />
  );
};
export default TPD2E007DCKR;
