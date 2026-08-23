import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin2: ["A", "B1"],
  pin3: ["GND", "C1"],
  pin4: ["OE", "A1"],
  pin5: ["VCC", "A2"],
  pin1: ["Y", "C2"],
} as const;

const pinRoles = {
  pin3: "ground",
  pin5: "power",
} as const;

const pinAttributes = {
  pin3: {
    requiresGround: true,
  },
  pin5: {
    requiresPower: true,
  },
} as const;

export const SN74LVC1G125YZPR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2675663"],
      }}
      manufacturerPartNumber="SN74LVC1G125YZPR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="0.249936mm"
            pcbY="-0.50038mm"
            radius="0.0999998mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.249936mm"
            pcbY="0mm"
            radius="0.0999998mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-0.249936mm"
            pcbY="-0.500126mm"
            radius="0.0999998mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-0.249936mm"
            pcbY="0.50038mm"
            radius="0.0999998mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="0.249936mm"
            pcbY="0.50038mm"
            radius="0.0999998mm"
            shape="circle"
          />
          <silkscreenpath
            route={[
              { x: 0.4899913999998944, y: 0.7499857999999904 },
              { x: -0.4999990000001162, y: 0.7499857999999904 },
              { x: -0.4999990000001162, y: -0.7500112000000172 },
              { x: 0.5003799999999501, y: -0.7492999999999483 },
              { x: 0.5003799999999501, y: 0.7492999999999483 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.6441440000000966, y: 0.5549899999999752 },
              { x: -0.6467317971967077, y: 0.5353337288006514 },
              { x: -0.6543188346843181, y: 0.5170170000001235 },
              { x: -0.6663880683961452, y: 0.501288068396093 },
              { x: -0.682117000000062, y: 0.48921883468415217 },
              { x: -0.7004337288007036, y: 0.4816317971966555 },
              { x: -0.7200900000000274, y: 0.47904400000004443 },
              { x: -0.7397462711994649, y: 0.4816317971966555 },
              { x: -0.7580629999999928, y: 0.48921883468415217 },
              { x: -0.7737919316040234, y: 0.501288068396093 },
              { x: -0.7858611653158505, y: 0.5170170000001235 },
              { x: -0.7934482028033472, y: 0.5353337288006514 },
              { x: -0.7960360000000719, y: 0.5549899999999752 },
              { x: -0.7934482028033472, y: 0.5746462711994127 },
              { x: -0.7858611653158505, y: 0.5929629999999406 },
              { x: -0.7737919316040234, y: 0.6086919316039712 },
              { x: -0.7580629999999928, y: 0.6207611653157983 },
              { x: -0.7397462711994649, y: 0.6283482028034086 },
              { x: -0.7200900000000274, y: 0.6309360000000197 },
              { x: -0.7004337288007036, y: 0.6283482028034086 },
              { x: -0.682117000000062, y: 0.6207611653157983 },
              { x: -0.6663880683961452, y: 0.6086919316039712 },
              { x: -0.6543188346843181, y: 0.5929629999999406 },
              { x: -0.6467317971967077, y: 0.5746462711994127 },
              { x: -0.6441440000000966, y: 0.5549899999999752 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.1397mm"
            pcbY="1.762mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -1.0374000000000478, y: 1.0119999999999436 },
              { x: 0.7579999999999245, y: 1.0119999999999436 },
              { x: 0.7579999999999245, y: -0.9865999999999531 },
              { x: -1.0374000000000478, y: -0.9865999999999531 },
              { x: -1.0374000000000478, y: 1.0119999999999436 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2675663.obj?uuid=005ba124471b4af591e070d1c014f2b7",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2675663.step?uuid=005ba124471b4af591e070d1c014f2b7",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: 0.000012699999956566899,
          y: 0.000012699999842880061,
          z: -0.17,
        },
      }}
      {...props}
    />
  );
};

export default SN74LVC1G125YZPR;
