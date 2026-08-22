import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin3: ["A0", "B1"],
  pin1: ["ALERT", "A1"],
  pin6: ["GND", "C2"],
  pin4: ["IN_N", "B2"],
  pin2: ["IN_P", "A2"],
  pin7: ["SCL", "D1"],
  pin5: ["SDA", "C1"],
  pin8: ["VS", "D2"],
} as const;

const pinRoles = {
  pin6: "ground",
  pin8: "power",
} as const;

const pinAttributes = {
  pin6: {
    requiresGround: true,
  },
  pin8: {
    requiresPower: true,
  },
} as const;

export const INA236AIYBJR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C4371025"],
      }}
      manufacturerPartNumber="INA236AIYBJR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.599948mm"
            pcbY="-0.199898mm"
            radius="0.0743712mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.599948mm"
            pcbY="0.199898mm"
            radius="0.0743712mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-0.199898mm"
            pcbY="-0.199898mm"
            radius="0.0743712mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-0.199898mm"
            pcbY="0.199898mm"
            radius="0.0743712mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="0.199898mm"
            pcbY="-0.199898mm"
            radius="0.0743712mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0.199898mm"
            pcbY="0.199898mm"
            radius="0.0743712mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="0.599948mm"
            pcbY="-0.199898mm"
            radius="0.0743712mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="0.599948mm"
            pcbY="0.199898mm"
            radius="0.0743712mm"
            shape="circle"
          />
          <silkscreenpath
            route={[
              { x: -0.8261857999999904, y: 0.4261865999999941 },
              { x: 0.8262111999999888, y: 0.4261865999999941 },
              { x: 0.8262111999999888, y: -0.4262120000000067 },
              { x: -0.8261857999999904, y: -0.4262120000000067 },
              { x: -0.8261857999999904, y: 0.4261865999999941 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.1079479999999933, y: -0.7078980000000001 },
              { x: -0.5999480000000119, y: -0.7078980000000001 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.1079479999999933, y: -0.19989800000000457 },
              { x: -1.1079479999999933, y: -0.7078980000000001 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.1524mm"
            pcbY="1.4318mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -1.367599999999996, y: 0.6817999999999955 },
              { x: 1.0628000000000242, y: 0.6817999999999955 },
              { x: 1.0628000000000242, y: -0.9612000000000052 },
              { x: -1.367599999999996, y: -0.9612000000000052 },
              { x: -1.367599999999996, y: 0.6817999999999955 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C4371025.obj?uuid=e7223c5f64384b14b8def47657d1a5b0",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C4371025.step?uuid=e7223c5f64384b14b8def47657d1a5b0",
        pcbRotationOffset: 90,
        modelOriginPosition: {
          x: 0.000012700000013410317,
          y: 0.000012700000013410317,
          z: -0.3,
        },
      }}
      {...props}
    />
  );
};

export default INA236AIYBJR;
