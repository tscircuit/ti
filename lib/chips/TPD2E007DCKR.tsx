import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin3: ["GND", "3"],
  pin1: ["IO1", "1"],
  pin2: ["IO2", "2"],
} as const;

const pinRoles = {
  pin3: "ground",
  pin1: "bidirectional",
  pin2: "bidirectional",
} as const;

const pinAttributes = {
  pin3: {
    requiresGround: true,
  },
} as const;

export const TPD2E007DCKR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
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
