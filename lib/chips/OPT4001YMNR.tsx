import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["GND", "A1"],
  pin3: ["VDD", "B1"],
  pin2: ["SCL", "A2"],
  pin4: ["SDA", "B2"],
} as const;

const pinRoles = {
  pin1: "ground",
  pin3: "power",
  pin2: "power",
  pin4: "power",
} as const;

const pinAttributes = {
  pin1: {
    requiresGround: true,
  },
  pin3: {
    requiresPower: true,
  },
  pin2: {
    requiresPower: true,
  },
  pin4: {
    requiresPower: true,
  },
} as const;

export const OPT4001YMNR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C3678587"],
      }}
      manufacturerPartNumber="OPT4001YMNR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.30988mm"
            pcbY="0.415036mm"
            radius="0.1149985mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="0.30988mm"
            pcbY="0.415036mm"
            radius="0.1149985mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-0.30988mm"
            pcbY="-0.415036mm"
            radius="0.1149985mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0.30988mm"
            pcbY="-0.415036mm"
            radius="0.1149985mm"
            shape="circle"
          />
          <silkscreenpath
            route={[
              { x: -0.06189980000010564, y: 0.550011599999948 },
              { x: 0.061899799999991956, y: 0.550011599999948 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.4499864000000571, y: 0.16995140000005904 },
              { x: -0.4499864000000571, y: -0.16995139999994535 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 0.061899799999991956, y: -0.550011599999948 },
              { x: -0.06189980000010564, y: -0.550011599999948 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 0.4500117999999702, y: 0.16997679999997217 },
              { x: 0.4500117999999702, y: -0.16997679999997217 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.5750560000000178, y: 0.4998719999999821 },
              { x: -0.577609177836166, y: 0.48047868895048396 },
              { x: -0.5850947164944955, y: 0.462406999999871 },
              { x: -0.5970024888857779, y: 0.4468884888856337 },
              { x: -0.6125210000001289, y: 0.434980716494465 },
              { x: -0.6305926889505145, y: 0.42749517783613555 },
              { x: -0.6499860000000126, y: 0.4249419999999873 },
              { x: -0.6693793110496244, y: 0.42749517783613555 },
              { x: -0.68745100000001, y: 0.434980716494465 },
              { x: -0.702969511114361, y: 0.4468884888856337 },
              { x: -0.7148772835056434, y: 0.462406999999871 },
              { x: -0.7223628221639729, y: 0.48047868895048396 },
              { x: -0.7249160000001211, y: 0.4998719999999821 },
              { x: -0.7223628221639729, y: 0.5192653110494803 },
              { x: -0.7148772835056434, y: 0.5373370000000932 },
              { x: -0.702969511114361, y: 0.5528555111142168 },
              { x: -0.68745100000001, y: 0.5647632835054992 },
              { x: -0.6693793110496244, y: 0.5722488221638287 },
              { x: -0.6499860000000126, y: 0.5748019999999769 },
              { x: -0.6305926889505145, y: 0.5722488221638287 },
              { x: -0.6125210000001289, y: 0.5647632835054992 },
              { x: -0.5970024888857779, y: 0.5528555111142168 },
              { x: -0.5850947164944955, y: 0.5373370000000932 },
              { x: -0.577609177836166, y: 0.5192653110494803 },
              { x: -0.5750560000000178, y: 0.4998719999999821 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.1397mm"
            pcbY="1.5842mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -0.9866000000000668, y: 0.8342000000001235 },
              { x: 0.7071999999998297, y: 0.8342000000001235 },
              { x: 0.7071999999998297, y: -0.8341999999998961 },
              { x: -0.9866000000000668, y: -0.8341999999998961 },
              { x: -0.9866000000000668, y: 0.8342000000001235 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C3678587.obj?uuid=f0e963b397b24463bcb79ff750e623de",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C3678587.step?uuid=f0e963b397b24463bcb79ff750e623de",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.008 },
      }}
      {...props}
    />
  );
};

export default OPT4001YMNR;
