import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VIN1"],
  pin2: ["VIN2"],
  pin3: ["EN"],
  pin4: ["pin4"],
  pin5: ["pin5"],
  pin6: ["PG"],
  pin7: ["pin7"],
  pin8: ["pin8"],
  pin9: ["VOUT1"],
  pin10: ["VOUT2"],
  pin11: ["GND"],
} as const;

const pinAttributes = {
  pin1: { requiresPower: true },
  pin2: { requiresPower: true },
  pin11: { requiresGround: true },
} as const;

export const TPSM82903SISR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C6290583"],
      }}
      manufacturerPartNumber="TPSM82903SISR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-1.075055mm"
            pcbY="1.15316mm"
            width="0.5500116mm"
            height="0.5750052mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-1.075055mm"
            pcbY="0.489966mm"
            width="0.5500116mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-1.075055mm"
            pcbY="-0.009906mm"
            width="0.5500116mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-1.075055mm"
            pcbY="-0.510032mm"
            width="0.5500116mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-1.075055mm"
            pcbY="-1.172972mm"
            width="0.5500116mm"
            height="0.5750052mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="1.075055mm"
            pcbY="-1.152906mm"
            width="0.5500116mm"
            height="0.5750052mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="1.075055mm"
            pcbY="-0.489966mm"
            width="0.5500116mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="1.075055mm"
            pcbY="0.01016mm"
            width="0.5500116mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="1.075055mm"
            pcbY="0.510032mm"
            width="0.5500116mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="1.075055mm"
            pcbY="1.172972mm"
            width="0.5500116mm"
            height="0.5750052mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="-0.000127mm"
            pcbY="0mm"
            width="0.8999982mm"
            height="2.8999942mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: 1.523949200000061, y: -1.4785847999999078 },
              { x: 1.523949200000061, y: -1.6509237999998732 },
              { x: -1.5240507999999409, y: -1.6509237999998732 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.523949200000061, y: -0.6530847999999878 },
              { x: 1.523949200000061, y: -0.8272271999999248 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.523949200000061, y: -0.1530857999998716 },
              { x: 1.523949200000061, y: -0.3267455999999811 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.523949200000061, y: 0.34691320000013093 },
              { x: 1.523949200000061, y: 0.17325340000013512 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.523949200000061, y: 0.8473948000000746 },
              { x: 1.523949200000061, y: 0.6732524000001376 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.5240507999999409, y: 1.4787626000000955 },
              { x: -1.5240507999999409, y: 1.651076200000034 },
              { x: 1.523949200000061, y: 1.651076200000034 },
              { x: 1.523949200000061, y: 1.4987524000001713 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.5240507999999409, y: 0.6532626000000619 },
              { x: -1.5240507999999409, y: 0.8274049999999988 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.5240507999999409, y: 0.15323820000003252 },
              { x: -1.5240507999999409, y: 0.32692340000016884 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.5240507999999409, y: -0.3467353999999432 },
              { x: -1.5240507999999409, y: -0.17302479999978004 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.5240507999999409, y: -0.8472169999998869 },
              { x: -1.5240507999999409, y: -0.6730745999999499 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.5240507999999409, y: -1.6509237999998732 },
              { x: -1.5240507999999409, y: -1.4985745999998699 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.008255mm"
            pcbY="2.641094mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -1.7822550000000774, y: 1.8910940000000664 },
              { x: 1.7657449999999244, y: 1.8910940000000664 },
              { x: 1.7657449999999244, y: -1.9109059999998408 },
              { x: -1.7822550000000774, y: -1.9109059999998408 },
              { x: -1.7822550000000774, y: 1.8910940000000664 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C6290583.obj?uuid=e08582a09e52401f9230d8ca36a20ab5",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C6290583.step?uuid=e08582a09e52401f9230d8ca36a20ab5",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: 0.00005080000005364127,
          y: -0.00007620000019414874,
          z: -0.02,
        },
      }}
      {...props}
    />
  );
};

export default TPSM82903SISR;
