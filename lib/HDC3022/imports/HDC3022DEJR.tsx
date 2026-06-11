import type { ChipProps } from "@tscircuit/props";

const pinLabels = {
  pin1: ["SDA"],
  pin2: ["ADDR"],
  pin3: ["ALERT"],
  pin4: ["SCL"],
  pin5: ["VDD"],
  pin6: ["RESET"],
  pin7: ["ADDR1"],
  pin8: ["GND"],
  pin9: ["EP"],
} as const;

export const HDC3022DEJR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C17434731"],
      }}
      manufacturerPartNumber="HDC3022DEJR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin9"]}
            points={[
              { x: "-0.8999982mm", y: "0.6627114mm" },
              { x: "0.8999982mm", y: "0.6627114mm" },
              { x: "0.8999982mm", y: "-0.6373114mm" },
              { x: "-0.7500112mm", y: "-0.6373114mm" },
              { x: "-0.8999982mm", y: "-0.487299mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="0.765302mm"
            pcbY="1.299972mm"
            width="0.2500122mm"
            height="0.6999986mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0.265176mm"
            pcbY="1.299972mm"
            width="0.2500122mm"
            height="0.6999986mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-0.23495mm"
            pcbY="1.299972mm"
            width="0.2500122mm"
            height="0.6999986mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-0.734822mm"
            pcbY="1.299972mm"
            width="0.2500122mm"
            height="0.6999986mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0.765302mm"
            pcbY="-1.299972mm"
            width="0.2500122mm"
            height="0.6999986mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0.265176mm"
            pcbY="-1.299972mm"
            width="0.2500122mm"
            height="0.6999986mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.23495mm"
            pcbY="-1.299972mm"
            width="0.2500122mm"
            height="0.6999986mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.734822mm"
            pcbY="-1.299972mm"
            width="0.2500122mm"
            height="0.6999986mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: 1.0693145999999842, y: -1.3000990000000456 },
              { x: 1.3151611999999204, y: -1.3000990000000456 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.2848590000000968, y: -1.3000990000000456 },
              { x: -1.03898700000002, y: -1.3000990000000456 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.0693145999999842, y: 1.2999211999999716 },
              { x: 1.3151611999999204, y: 1.2999211999999716 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.2848590000000968, y: 1.2999211999999716 },
              { x: -1.03898700000002, y: 1.2999211999999716 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.2848590000000968, y: -1.3000990000000456 },
              { x: -1.2848590000000968, y: 1.2999211999999716 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.3151611999999204, y: -1.3000990000000456 },
              { x: 1.3151611999999204, y: 1.2999211999999716 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.2447524000001522, y: -1.5801340000000437 },
              { x: -1.3704808124504098, y: -1.4525053422210021 },
              { x: -1.2434824000000617, y: -1.3261403501587665 },
              { x: -1.1164839875497137, y: -1.4525053422210021 },
              { x: -1.2422123999999712, y: -1.5801340000000437 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.033782mm"
            pcbY="2.641856mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -1.6299820000001546, y: 1.8918559999999616 },
              { x: 1.5624179999997523, y: 1.8918559999999616 },
              { x: 1.5624179999997523, y: -2.087943999999993 },
              { x: -1.6299820000001546, y: -2.087943999999993 },
              { x: -1.6299820000001546, y: 1.8918559999999616 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C17434731.obj?uuid=4fe394664bd94e70a2dc8a4c049fcf3b",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C17434731.step?uuid=4fe394664bd94e70a2dc8a4c049fcf3b",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: -0.015252700000019104,
          y: 0.00012700000002041634,
          z: -0.01,
        },
      }}
      {...props}
    />
  );
};
