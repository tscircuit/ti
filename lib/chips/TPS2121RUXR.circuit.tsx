import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["OUT1"],
  pin2: ["IN2"],
  pin3: ["CP2"],
  pin4: ["OV2"],
  pin5: ["OV1"],
  pin6: ["PR1"],
  pin7: ["IN1"],
  pin8: ["OUT2"],
  pin9: ["ST"],
  pin10: ["ILM"],
  pin11: ["SS"],
  pin12: ["GND"],
} as const;

const pinAttributes = {
  pin12: { requiresGround: true },
} as const;

export const TPS2121RUXR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C485916"],
      }}
      manufacturerPartNumber="TPS2121RUXR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.350139mm"
            pcbY="-0.675005mm"
            width="0.3999992mm"
            height="1.0500106mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="0.349885mm"
            pcbY="-0.675005mm"
            width="0.3999992mm"
            height="1.0500106mm"
            radius="0.1999996mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="0.349885mm"
            pcbY="0.675005mm"
            width="0.3999992mm"
            height="1.0500106mm"
            radius="0.1999996mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-0.350139mm"
            pcbY="0.675005mm"
            width="0.3999992mm"
            height="1.0500106mm"
            radius="0.1999996mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="1.149985mm"
            pcbY="-0.750189mm"
            width="0.5999988mm"
            height="0.1999996mm"
            radius="0.0999998mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="1.149985mm"
            pcbY="-0.250063mm"
            width="0.5999988mm"
            height="0.1999996mm"
            radius="0.0999998mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="1.149985mm"
            pcbY="0.249809mm"
            width="0.5999988mm"
            height="0.1999996mm"
            radius="0.0999998mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="1.149985mm"
            pcbY="0.749935mm"
            width="0.5999988mm"
            height="0.1999996mm"
            radius="0.0999998mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="-1.149985mm"
            pcbY="0.749935mm"
            width="0.5999988mm"
            height="0.1999996mm"
            radius="0.0999998mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="-1.149985mm"
            pcbY="0.249809mm"
            width="0.5999988mm"
            height="0.1999996mm"
            radius="0.0999998mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="-1.149985mm"
            pcbY="-0.250063mm"
            width="0.5999988mm"
            height="0.1999996mm"
            radius="0.0999998mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="-1.149985mm"
            pcbY="-0.750189mm"
            width="0.5999988mm"
            height="0.1999996mm"
            radius="0.0999998mm"
            shape="pill"
          />
          <silkscreenpath
            route={[
              { x: -1.2500610000000734, y: -1.10009940000009 },
              { x: -1.2500610000000734, y: -1.0542016000000558 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.2500610000000734, y: 1.0540746000000354 },
              { x: -1.2500610000000734, y: 1.0999469999999292 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.2500610000000734, y: 1.0999469999999292 },
              { x: -0.741578400000094, y: 1.0999469999999292 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 0.7413751999998794, y: 1.0999469999999292 },
              { x: 1.2499339999998256, y: 1.0999469999999292 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.2500610000000734, y: -1.10009940000009 },
              { x: -0.7542276000000356, y: -1.10009940000009 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 0.7413751999998794, y: -1.10009940000009 },
              { x: 1.2499339999998256, y: -1.10009940000009 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.2499339999998256, y: -1.10009940000009 },
              { x: 1.2499339999998256, y: -1.0542016000000558 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.2499339999998256, y: 1.0540746000000354 },
              { x: 1.2499339999998256, y: 1.0999469999999292 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.39992300000017167, y: -1.4999970000000076 },
              { x: -0.40333300700831387, y: -1.5258985747576617 },
              { x: -0.41333064169089084, y: -1.5500349999999798 },
              { x: -0.42923458176608165, y: -1.5707614182340421 },
              { x: -0.44996100000003025, y: -1.5866653583091193 },
              { x: -0.47409742524234844, y: -1.5966629929916962 },
              { x: -0.4999990000001162, y: -1.6000729999999521 },
              { x: -0.5259005747577703, y: -1.5966629929916962 },
              { x: -0.5500370000000885, y: -1.5866653583091193 },
              { x: -0.5707634182341508, y: -1.5707614182340421 },
              { x: -0.5866673583092279, y: -1.5500349999999798 },
              { x: -0.5966649929918049, y: -1.5258985747576617 },
              { x: -0.6000750000000608, y: -1.4999970000000076 },
              { x: -0.5966649929918049, y: -1.4740954252423535 },
              { x: -0.5866673583092279, y: -1.4499589999999216 },
              { x: -0.5707634182341508, y: -1.4292325817660867 },
              { x: -0.5500370000000885, y: -1.4133286416910096 },
              { x: -0.5259005747577703, y: -1.4033310070084326 },
              { x: -0.4999990000001162, y: -1.399921000000063 },
              { x: -0.47409742524234844, y: -1.4033310070084326 },
              { x: -0.44996100000003025, y: -1.4133286416910096 },
              { x: -0.42923458176608165, y: -1.4292325817660867 },
              { x: -0.41333064169089084, y: -1.4499589999999216 },
              { x: -0.40333300700831387, y: -1.4740954252423535 },
              { x: -0.39992300000017167, y: -1.4999970000000076 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.004445mm"
            pcbY="2.096137mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -1.6006450000000996, y: 1.3461369999999988 },
              { x: 1.591754999999921, y: 1.3461369999999988 },
              { x: 1.591754999999921, y: -1.846262999999908 },
              { x: -1.6006450000000996, y: -1.846262999999908 },
              { x: -1.6006450000000996, y: 1.3461369999999988 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C485916.obj?uuid=b3b163ff5ac04d1fb107c30a7d954e0d",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C485916.step?uuid=b3b163ff5ac04d1fb107c30a7d954e0d",
        pcbRotationOffset: 90,
        modelOriginPosition: {
          x: 0.00007619999996677507,
          y: -0.0000889000000370288,
          z: 0,
        },
      }}
      {...props}
    />
  );
};

export default TPS2121RUXR;
