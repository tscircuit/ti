import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["VCORE"],
  pin3: ["PA0"],
  pin4: ["pin4"],
  pin5: ["VDD"],
  pin6: ["VSS"],
  pin7: ["pin7"],
  pin8: ["PA6"],
  pin9: ["PA17"],
  pin10: ["pin10"],
  pin11: ["pin11"],
  pin12: ["pin12"],
  pin13: ["pin13"],
  pin14: ["PA23"],
  pin15: ["pin15"],
  pin16: ["pin16"],
} as const;

const pinAttributes = {
  pin5: { requiresPower: true },
  pin6: { requiresGround: true },
} as const;

export const MSPM0L1105TDYYR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C19189327"],
      }}
      manufacturerPartNumber="MSPM0L1105TDYYR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="1.499997mm"
            pcbY="-1.750314mm"
            width="1.0500106mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="1.499997mm"
            pcbY="-1.249172mm"
            width="1.0500106mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="1.499997mm"
            pcbY="-0.750062mm"
            width="1.0500106mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="1.499997mm"
            pcbY="-0.249174mm"
            width="1.0500106mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="1.499997mm"
            pcbY="0.249936mm"
            width="1.0500106mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="1.499997mm"
            pcbY="0.750316mm"
            width="1.0500106mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="1.499997mm"
            pcbY="1.249934mm"
            width="1.0500106mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="1.499997mm"
            pcbY="1.750314mm"
            width="1.0500106mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="-1.499997mm"
            pcbY="1.750314mm"
            width="1.0500106mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="-1.499997mm"
            pcbY="1.250188mm"
            width="1.0500106mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="-1.499997mm"
            pcbY="0.750316mm"
            width="1.0500106mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="-1.499997mm"
            pcbY="0.25019mm"
            width="1.0500106mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="-1.499997mm"
            pcbY="-0.249682mm"
            width="1.0500106mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="-1.499997mm"
            pcbY="-0.749808mm"
            width="1.0500106mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="-1.499997mm"
            pcbY="-1.24968mm"
            width="1.0500106mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="-1.499997mm"
            pcbY="-1.749806mm"
            width="1.0500106mm"
            height="0.2999994mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -0.999947199999724, y: -2.1309076000000005 },
              { x: 1.0000488000000587, y: -2.1309076000000005 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.0000488000000587, y: 2.1001990000000887 },
              { x: -0.999947199999724, y: 2.1001990000000887 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 2.5162510000002385, y: -1.7122140000000172 },
              { x: 2.512737134910367, y: -1.7389044552070345 },
              { x: 2.502435003740061, y: -1.7637759999998934 },
              { x: 2.4860466797033496, y: -1.785133679703108 },
              { x: 2.464689000000135, y: -1.8015220037398194 },
              { x: 2.439817455207276, y: -1.811824134910239 },
              { x: 2.413127000000145, y: -1.815337999999997 },
              { x: 2.3864365447931277, y: -1.811824134910239 },
              { x: 2.361565000000155, y: -1.8015220037398194 },
              { x: 2.340207320297168, y: -1.785133679703108 },
              { x: 2.323818996260343, y: -1.7637759999998934 },
              { x: 2.313516865089923, y: -1.7389044552070345 },
              { x: 2.310003000000279, y: -1.7122140000000172 },
              { x: 2.313516865089923, y: -1.6855235447928862 },
              { x: 2.323818996260343, y: -1.6606520000000273 },
              { x: 2.340207320297168, y: -1.6392943202969263 },
              { x: 2.361565000000155, y: -1.6229059962601013 },
              { x: 2.3864365447931277, y: -1.6126038650897954 },
              { x: 2.413127000000145, y: -1.6090900000000374 },
              { x: 2.439817455207276, y: -1.6126038650897954 },
              { x: 2.464689000000135, y: -1.6229059962601013 },
              { x: 2.4860466797033496, y: -1.6392943202969263 },
              { x: 2.502435003740061, y: -1.6606520000000273 },
              { x: 2.512737134910367, y: -1.6855235447928862 },
              { x: 2.5162510000002385, y: -1.7122140000000172 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="0.248539mm"
            pcbY="3.105914mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -2.2747609999998986, y: 2.3559139999999843 },
              { x: 2.7718390000001136, y: 2.3559139999999843 },
              { x: 2.7718390000001136, y: -2.436686000000009 },
              { x: -2.2747609999998986, y: -2.436686000000009 },
              { x: -2.2747609999998986, y: 2.3559139999999843 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C19189327.obj?uuid=c5c8e41d4e8d4e6a9b2f660c5795adfa",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C19189327.step?uuid=c5c8e41d4e8d4e6a9b2f660c5795adfa",
        pcbRotationOffset: 90,
        modelOriginPosition: {
          x: -0.00005080000005364127,
          y: -0.000012699999956566899,
          z: -0.7,
        },
      }}
      {...props}
    />
  );
};

export default MSPM0L1105TDYYR;
