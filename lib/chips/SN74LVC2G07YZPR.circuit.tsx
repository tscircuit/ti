import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["1A", "1"],
  pin2: ["GND", "2"],
  pin3: ["2A", "3"],
  pin4: ["2Y", "4"],
  pin5: ["VCC", "5"],
  pin6: ["1Y", "6"],
} as const;

const pinRoles = {
  pin1: "input",
  pin2: "ground",
  pin3: "input",
  pin4: "output",
  pin5: "power",
  pin6: "input",
} as const;

const pinAttributes = {
  pin2: {
    requiresGround: true,
  },
  pin5: {
    requiresPower: true,
  },
} as const;

export const SN74LVC2G07YZPR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2652109"],
      }}
      manufacturerPartNumber="SN74LVC2G07YZPR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.499999mm"
            pcbY="-0.249936mm"
            radius="0.0919988mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.000127mm"
            pcbY="-0.249936mm"
            radius="0.0919988mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0.499999mm"
            pcbY="-0.249936mm"
            radius="0.0919988mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-0.499999mm"
            pcbY="0.249936mm"
            radius="0.0919988mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-0.000127mm"
            pcbY="0.249936mm"
            radius="0.0919988mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0.499999mm"
            pcbY="0.249936mm"
            radius="0.0919988mm"
            shape="circle"
          />
          <silkscreenpath
            route={[
              { x: -0.7703312000001006, y: -0.5201919999999518 },
              { x: -0.7703312000001006, y: 0.5201919999999518 },
              { x: 0.7700771999998324, y: 0.5201919999999518 },
              { x: 0.7700771999998324, y: -0.5201919999999518 },
              { x: -0.7703312000001006, y: -0.5201919999999518 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.399923000000058, y: -0.9202420000000302 },
              { x: -0.40333300700831387, y: -0.9461435747576843 },
              { x: -0.41333064169089084, y: -0.9702800000000025 },
              { x: -0.42923458176596796, y: -0.9910064182340648 },
              { x: -0.44996100000003025, y: -1.0069103583091419 },
              { x: -0.47409742524234844, y: -1.0169079929917189 },
              { x: -0.4999990000000025, y: -1.0203179999999747 },
              { x: -0.5259005747576566, y: -1.0169079929917189 },
              { x: -0.5500370000000885, y: -1.0069103583091419 },
              { x: -0.5707634182340371, y: -0.9910064182340648 },
              { x: -0.5866673583091142, y: -0.9702800000000025 },
              { x: -0.5966649929916912, y: -0.9461435747576843 },
              { x: -0.6000749999999471, y: -0.9202420000000302 },
              { x: -0.5966649929916912, y: -0.8943404252423761 },
              { x: -0.5866673583091142, y: -0.8702039999998306 },
              { x: -0.5707634182340371, y: -0.8494775817659956 },
              { x: -0.5500370000000885, y: -0.8335736416909185 },
              { x: -0.5259005747576566, y: -0.8235760070083415 },
              { x: -0.4999990000000025, y: -0.8201660000000857 },
              { x: -0.47409742524234844, y: -0.8235760070083415 },
              { x: -0.44996100000003025, y: -0.8335736416909185 },
              { x: -0.42923458176596796, y: -0.8494775817659956 },
              { x: -0.41333064169089084, y: -0.8702039999998306 },
              { x: -0.40333300700831387, y: -0.8943404252423761 },
              { x: -0.399923000000058, y: -0.9202420000000302 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="0.012573mm"
            pcbY="1.508mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -1.0121270000000777, y: 0.7580000000000382 },
              { x: 1.0372729999999137, y: 0.7580000000000382 },
              { x: 1.0372729999999137, y: -1.2913999999998396 },
              { x: -1.0121270000000777, y: -1.2913999999998396 },
              { x: -1.0121270000000777, y: 0.7580000000000382 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2652109.obj?uuid=1223783b9c9346aeb0b55e67e7a61f3e",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2652109.step?uuid=1223783b9c9346aeb0b55e67e7a61f3e",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: 0.00013970000009067007,
          y: 0.000012699999956566899,
          z: -0.48,
        },
      }}
      {...props}
    />
  );
};

export default SN74LVC2G07YZPR;
