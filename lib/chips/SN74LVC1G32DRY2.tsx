import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["A"],
  pin2: ["B"],
  pin3: ["GND"],
  pin4: ["Y"],
  pin5: ["NC"],
  pin6: ["VCC"],
} as const;

const pinAttributes = {
  pin3: { requiresGround: true },
  pin5: { doNotConnect: true },
  pin6: { requiresPower: true },
} as const;

export const SN74LVC1G32DRY2 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2865311"],
      }}
      manufacturerPartNumber="SN74LVC1G32DRY2"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin6"]}
            pcbX="-0.3125978mm"
            pcbY="-0.499999mm"
            width="0.350012mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-0.3125978mm"
            pcbY="-0.000127mm"
            width="0.350012mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-0.3125978mm"
            pcbY="0.499999mm"
            width="0.350012mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0.2876042mm"
            pcbY="0.499999mm"
            width="0.350012mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="0.2876042mm"
            pcbY="-0.000127mm"
            width="0.350012mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="0.2876042mm"
            pcbY="-0.499999mm"
            width="0.3999992mm"
            height="0.2500122mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: 0.4954523999999765, y: 0.8889491999998427 },
              { x: -0.5045456000000286, y: 0.8889491999998427 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 0.4954523999999765, y: -0.8890508000000636 },
              { x: -0.5045456000000286, y: -0.8890508000000636 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 0.6876542000001109, y: -0.6998970000000782 },
              { x: 0.6859491964959261, y: -0.7128477873789052 },
              { x: 0.6809503791546376, y: -0.7249160000001211 },
              { x: 0.6729984091170991, y: -0.7352792091171523 },
              { x: 0.6626352000000679, y: -0.7432311791546908 },
              { x: 0.6505669873789657, y: -0.7482299964958656 },
              { x: 0.637616200000025, y: -0.7499350000000504 },
              { x: 0.6246654126211979, y: -0.7482299964958656 },
              { x: 0.612597199999982, y: -0.7432311791546908 },
              { x: 0.6022339908829508, y: -0.7352792091171523 },
              { x: 0.5942820208454123, y: -0.7249160000001211 },
              { x: 0.5892832035042375, y: -0.7128477873789052 },
              { x: 0.5875782000000527, y: -0.6998970000000782 },
              { x: 0.5892832035042375, y: -0.6869462126211374 },
              { x: 0.5942820208454123, y: -0.6748780000000352 },
              { x: 0.6022339908829508, y: -0.664514790883004 },
              { x: 0.612597199999982, y: -0.6565628208454655 },
              { x: 0.6246654126211979, y: -0.651564003504177 },
              { x: 0.637616200000025, y: -0.6498589999999922 },
              { x: 0.6505669873789657, y: -0.651564003504177 },
              { x: 0.6626352000000679, y: -0.6565628208454655 },
              { x: 0.6729984091170991, y: -0.664514790883004 },
              { x: 0.6809503791546376, y: -0.6748780000000352 },
              { x: 0.6859491964959261, y: -0.6869462126211374 },
              { x: 0.6876542000001109, y: -0.6998970000000782 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="0.0788162mm"
            pcbY="1.891413mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -0.7680837999999994, y: 1.1414129999999432 },
              { x: 0.9257161999998971, y: 1.1414129999999432 },
              { x: 0.9257161999998971, y: -1.1365870000000768 },
              { x: -0.7680837999999994, y: -1.1365870000000768 },
              { x: -0.7680837999999994, y: 1.1414129999999432 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2865311.obj?uuid=3d17cc238ee8472eb9cd0e77fc06b04c",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2865311.step?uuid=3d17cc238ee8472eb9cd0e77fc06b04c",
        pcbRotationOffset: 180,
        modelOriginPosition: { x: -0.012496799999894392, y: 0, z: 0 },
      }}
      {...props}
    />
  );
};

export default SN74LVC1G32DRY2;
