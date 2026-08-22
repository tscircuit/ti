import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["TRIPSET0"],
  pin2: ["GND"],
  pin3: ["OUT"],
  pin4: ["HYSTSET"],
  pin5: ["VS"],
  pin6: ["TRIPSET1"],
} as const;

const pinAttributes = {
  pin2: { requiresGround: true },
} as const;

export const TMP302ADRLR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2877557"],
      }}
      manufacturerPartNumber="TMP302ADRLR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.501015mm"
            pcbY="-0.6998462mm"
            width="0.2500122mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.001143mm"
            pcbY="-0.6998462mm"
            width="0.2500122mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0.498983mm"
            pcbY="-0.6998462mm"
            width="0.2500122mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0.501015mm"
            pcbY="0.6998462mm"
            width="0.2500122mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-0.001143mm"
            pcbY="0.6998462mm"
            width="0.2500122mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-0.501015mm"
            pcbY="0.6998462mm"
            width="0.2500122mm"
            height="0.499999mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: 0.8500364000000218, y: 0.49799240000004374 },
              { x: 0.850010999999995, y: -0.5004562000000305 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.8500110000001087, y: 0.5004053999999769 },
              { x: -0.8500110000001087, y: -0.5004562000000305 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.0428731999999172, y: -0.8890254000000368 },
              { x: -1.0462806105560958, y: -0.9149072527462749 },
              { x: -1.0562706328266813, y: -0.939025299999912 },
              { x: -1.0721624633027886, y: -0.9597359366972569 },
              { x: -1.0928731000001335, y: -0.9756277671734779 },
              { x: -1.116991147253657, y: -0.985617789443836 },
              { x: -1.1428730000000087, y: -0.9890252000000146 },
              { x: -1.1687548527463605, y: -0.985617789443836 },
              { x: -1.1928728999999976, y: -0.9756277671734779 },
              { x: -1.2135835366973424, y: -0.9597359366972569 },
              { x: -1.2294753671734497, y: -0.939025299999912 },
              { x: -1.2394653894436942, y: -0.9149072527462749 },
              { x: -1.2428727999999865, y: -0.8890254000000368 },
              { x: -1.2394653894436942, y: -0.8631435472535713 },
              { x: -1.2294753671734497, y: -0.8390255000000479 },
              { x: -1.2135835366973424, y: -0.8183148633027031 },
              { x: -1.1928728999999976, y: -0.8024230328265958 },
              { x: -1.1687548527463605, y: -0.7924330105562376 },
              { x: -1.1428730000000087, y: -0.7890255999999454 },
              { x: -1.116991147253657, y: -0.7924330105562376 },
              { x: -1.0928731000001335, y: -0.8024230328265958 },
              { x: -1.0721624633027886, y: -0.8183148633027031 },
              { x: -1.0562706328266813, y: -0.8390255000000479 },
              { x: -1.0462806105560958, y: -0.8631435472535713 },
              { x: -1.0428731999999172, y: -0.8890254000000368 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.204343mm"
            pcbY="1.9397746mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -1.4957429999999476, y: 1.1897745999999643 },
              { x: 1.0870569999998452, y: 1.1897745999999643 },
              { x: 1.0870569999998452, y: -1.3422253999999612 },
              { x: -1.4957429999999476, y: -1.3422253999999612 },
              { x: -1.4957429999999476, y: 1.1897745999999643 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2877557.obj?uuid=b370694011514b63b95ead37a576abc6",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2877557.step?uuid=b370694011514b63b95ead37a576abc6",
        pcbRotationOffset: 90,
        modelOriginPosition: {
          x: 0.00003810000009707437,
          y: -0.000012700000070253736,
          z: -0.05,
        },
      }}
      {...props}
    />
  );
};

export default TMP302ADRLR;
