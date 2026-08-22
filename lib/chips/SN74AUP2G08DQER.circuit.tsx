import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["1A"],
  pin2: ["1B"],
  pin3: ["2Y"],
  pin4: ["GND"],
  pin5: ["2A"],
  pin6: ["2B"],
  pin7: ["1Y"],
  pin8: ["VCC"],
} as const;

const pinAttributes = {
  pin4: { requiresGround: true },
  pin8: { requiresPower: true },
} as const;

export const SN74AUP2G08DQER = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2682157"],
      }}
      manufacturerPartNumber="SN74AUP2G08DQER"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin8"]}
            pcbX="-0.525018mm"
            pcbY="0.479806mm"
            width="0.175006mm"
            height="0.5299964mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-0.175006mm"
            pcbY="0.48006mm"
            width="0.175006mm"
            height="0.5299964mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0.175006mm"
            pcbY="0.479806mm"
            width="0.175006mm"
            height="0.5299964mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="0.525018mm"
            pcbY="0.479806mm"
            width="0.175006mm"
            height="0.5299964mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0.525018mm"
            pcbY="-0.48006mm"
            width="0.175006mm"
            height="0.5299964mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0.175006mm"
            pcbY="-0.48006mm"
            width="0.175006mm"
            height="0.5299964mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.175006mm"
            pcbY="-0.48006mm"
            width="0.175006mm"
            height="0.5299964mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.525018mm"
            pcbY="-0.445008mm"
            width="0.175006mm"
            height="0.5999988mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -0.7999222000000827, y: 0.5153152000001455 },
              { x: -0.7999222000000827, y: -0.48468279999974584 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 0.8000745999997889, y: 0.5153152000001455 },
              { x: 0.8000745999997889, y: -0.48468279999974584 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.46659800000009, y: -0.9400539999999182 },
              { x: -0.46876171003066247, y: -0.9564890093639633 },
              { x: -0.4751053868596955, y: -0.9718039999997927 },
              { x: -0.48519671939470754, y: -0.984955280605277 },
              { x: -0.4983480000000782, y: -0.9950466131401754 },
              { x: -0.5136629906360213, y: -1.0013902899692084 },
              { x: -0.5300980000000663, y: -1.0035539999998946 },
              { x: -0.5465330093639977, y: -1.0013902899692084 },
              { x: -0.5618480000000545, y: -0.9950466131401754 },
              { x: -0.5749992806054252, y: -0.984955280605277 },
              { x: -0.5850906131403235, y: -0.9718039999997927 },
              { x: -0.5914342899693565, y: -0.9564890093639633 },
              { x: -0.5935980000000427, y: -0.9400539999999182 },
              { x: -0.5914342899693565, y: -0.9236189906358732 },
              { x: -0.5850906131403235, y: -0.9083039999998164 },
              { x: -0.5749992806054252, y: -0.8951527193944457 },
              { x: -0.5618480000000545, y: -0.8850613868595474 },
              { x: -0.5465330093639977, y: -0.8787177100305144 },
              { x: -0.5300980000000663, y: -0.8765539999999419 },
              { x: -0.5136629906360213, y: -0.8787177100305144 },
              { x: -0.4983480000000782, y: -0.8850613868595474 },
              { x: -0.48519671939470754, y: -0.8951527193944457 },
              { x: -0.4751053868596955, y: -0.9083039999998164 },
              { x: -0.46876171003066247, y: -0.9236189906358732 },
              { x: -0.46659800000009, y: -0.9400539999999182 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.007112mm"
            pcbY="1.742696mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -1.0572120000001632, y: 0.9926960000000236 },
              { x: 1.0429879999998093, y: 0.9926960000000236 },
              { x: 1.0429879999998093, y: -1.2599039999998922 },
              { x: -1.0572120000001632, y: -1.2599039999998922 },
              { x: -1.0572120000001632, y: 0.9926960000000236 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2682157.obj?uuid=94a7fb4c553546bf9f8faca4378a6a73",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2682157.step?uuid=94a7fb4c553546bf9f8faca4378a6a73",
        pcbRotationOffset: 180,
        modelOriginPosition: {
          x: 0.00007619999985308823,
          y: 0.018595900000213217,
          z: 0.025,
        },
      }}
      {...props}
    />
  );
};

export default SN74AUP2G08DQER;
