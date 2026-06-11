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

export const HDC3020DEFR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C7472806"],
      }}
      manufacturerPartNumber="HDC3020DEFR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin9"]}
            pcbX="0mm"
            pcbY="-0.000127mm"
            width="1.7999964mm"
            height="1.0999978mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="0.750062mm"
            pcbY="1.200023mm"
            width="0.2500122mm"
            height="0.6999986mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0.249936mm"
            pcbY="1.200023mm"
            width="0.2500122mm"
            height="0.6999986mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-0.25019mm"
            pcbY="1.200023mm"
            width="0.2500122mm"
            height="0.6999986mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-0.750062mm"
            pcbY="1.200023mm"
            width="0.2500122mm"
            height="0.6999986mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0.750062mm"
            pcbY="-1.200023mm"
            width="0.2500122mm"
            height="0.6999986mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0.249936mm"
            pcbY="-1.200023mm"
            width="0.2500122mm"
            height="0.6999986mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.25019mm"
            pcbY="-1.200023mm"
            width="0.2500122mm"
            height="0.6999986mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.750062mm"
            pcbY="-1.200023mm"
            width="0.2500122mm"
            height="0.6999986mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: 1.2999211999999716, y: -1.2999720000000252 },
              { x: 1.2999211999999716, y: 1.300048199999992 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.3000990000000456, y: -1.2999720000000252 },
              { x: -1.3000990000000456, y: 1.300048199999992 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.260271800000055, y: -1.512671599999976 },
              { x: -1.3860002124503126, y: -1.3850429422210482 },
              { x: -1.2590017999999645, y: -1.2586779501588126 },
              { x: -1.1320033875496165, y: -1.3850429422210482 },
              { x: -1.2577318000001014, y: -1.512671599999976 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.049022mm"
            pcbY="2.540383mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -1.6452220000001034, y: 1.7903830000000198 },
              { x: 1.5471779999998034, y: 1.7903830000000198 },
              { x: 1.5471779999998034, y: -2.0370170000001053 },
              { x: -1.6452220000001034, y: -2.0370170000001053 },
              { x: -1.6452220000001034, y: 1.7903830000000198 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C7472806.obj?uuid=de01b87c3fde450bafb3798419858b29",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C7472806.step?uuid=de01b87c3fde450bafb3798419858b29",
        pcbRotationOffset: 90,
        modelOriginPosition: {
          x: 0.0000889000000370288,
          y: -0.0000889000000370288,
          z: 0,
        },
      }}
      {...props}
    />
  );
};
