import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["S3"],
  pin2: ["S2"],
  pin3: ["S1"],
  pin4: ["G"],
  pin5: ["D5"],
  pin6: ["D4"],
  pin7: ["D3"],
  pin8: ["D1"],
  pin9: ["pin8_alt1"],
} as const;

export const CSD18540Q5BT = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C2863985"],
      }}
      manufacturerPartNumber="CSD18540Q5BT"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin8"]}
            pcbX="-0mm"
            pcbY="0.812546mm"
            width="4.5999908mm"
            height="3.499866mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="-1.905mm"
            pcbY="2.8575mm"
            width="0.7999984mm"
            height="1.2999974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-0.635mm"
            pcbY="2.8575mm"
            width="0.7999984mm"
            height="1.2999974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0.635mm"
            pcbY="2.8575mm"
            width="0.7999984mm"
            height="1.2999974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="1.905mm"
            pcbY="2.8575mm"
            width="0.7999984mm"
            height="1.2999974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="1.905mm"
            pcbY="-2.8575mm"
            width="0.7999984mm"
            height="1.2999974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0.635mm"
            pcbY="-2.8575mm"
            width="0.7999984mm"
            height="1.2999974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.635mm"
            pcbY="-2.8575mm"
            width="0.7999984mm"
            height="1.2999974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="-1.905mm"
            pcbY="-2.8575mm"
            width="0.7999984mm"
            height="1.2999974mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -2.6398728000001483, y: -2.999994000000015 },
              { x: -2.6398728000001483, y: 2.9999939999999015 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 2.639999799999714, y: 2.9999939999999015 },
              { x: 2.639999799999714, y: -2.999994000000015 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.1590000000001055, y: -3.873499999999922 },
              { x: -2.163327420061364, y: -3.906370018728012 },
              { x: -2.176014773719544, y: -3.9370000000001255 },
              { x: -2.1961974387894543, y: -3.963302561210753 },
              { x: -2.222500000000082, y: -3.98348522628055 },
              { x: -2.2531299812721954, y: -3.9961725799388432 },
              { x: -2.286000000000058, y: -4.000500000000102 },
              { x: -2.3188700187281484, y: -3.9961725799388432 },
              { x: -2.3495000000000346, y: -3.98348522628055 },
              { x: -2.3758025612108895, y: -3.963302561210753 },
              { x: -2.395985226280686, y: -3.9370000000001255 },
              { x: -2.4086725799387523, y: -3.906370018728012 },
              { x: -2.4130000000002383, y: -3.873499999999922 },
              { x: -2.4086725799387523, y: -3.840629981272059 },
              { x: -2.395985226280686, y: -3.8099999999999454 },
              { x: -2.3758025612108895, y: -3.783697438789318 },
              { x: -2.3495000000000346, y: -3.7635147737194075 },
              { x: -2.3188700187281484, y: -3.7508274200613414 },
              { x: -2.286000000000058, y: -3.746499999999969 },
              { x: -2.2531299812721954, y: -3.7508274200613414 },
              { x: -2.222500000000082, y: -3.7635147737194075 },
              { x: -2.1961974387894543, y: -3.783697438789318 },
              { x: -2.176014773719544, y: -3.8099999999999454 },
              { x: -2.163327420061364, y: -3.840629981272059 },
              { x: -2.1590000000001055, y: -3.873499999999922 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.010414mm"
            pcbY="4.51536mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -2.9020140000002357, y: 3.765359999999987 },
              { x: 2.8811859999998433, y: 3.765359999999987 },
              { x: 2.8811859999998433, y: -4.253040000000055 },
              { x: -2.9020140000002357, y: -4.253040000000055 },
              { x: -2.9020140000002357, y: 3.765359999999987 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2863985.obj?uuid=92497acca17b48098aa21a0e69681f58",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2863985.step?uuid=92497acca17b48098aa21a0e69681f58",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: -0.005866999999772471,
          y: -0.000012699999842880061,
          z: 0,
        },
      }}
      {...props}
    />
  );
};

export default CSD18540Q5BT;
