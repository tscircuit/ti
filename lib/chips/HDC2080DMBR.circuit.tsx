import type { ChipProps } from "@tscircuit/props";

const pinLabels = {
  pin1: ["SDA"],
  pin2: ["GND"],
  pin3: ["ADDR"],
  pin4: ["DRDY_INT"],
  pin5: ["VDD"],
  pin6: ["SCL"],
  pin7: ["EP"],
} as const;

export const HDC2080DMBR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C918141"],
      }}
      manufacturerPartNumber="HDC2080DMBR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-1.499997mm"
            pcbY="0.999998mm"
            width="0.7999984mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-1.499997mm"
            pcbY="0mm"
            width="0.7999984mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-1.499997mm"
            pcbY="-0.999998mm"
            width="0.7999984mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="1.499997mm"
            pcbY="-0.999998mm"
            width="0.7999984mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="0.000635mm"
            pcbY="0.00381mm"
            width="1.5999968mm"
            height="2.3999952mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="1.499997mm"
            pcbY="0.999998mm"
            width="0.7999984mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="1.499997mm"
            pcbY="0mm"
            width="0.7999984mm"
            height="0.499999mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: 1.4999969999999792, y: -1.4998699999999872 },
              { x: -1.4999970000000076, y: -1.4998699999999872 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.4999969999999792, y: 1.5001239999999996 },
              { x: -1.4999970000000076, y: 1.5001239999999996 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.7999963999999835, y: 1.6001238000000058 },
              { x: -1.8034038105562615, y: 1.5742419472535687 },
              { x: -1.8133938328266481, y: 1.5501239000000169 },
              { x: -1.8292856633026986, y: 1.5294132633027147 },
              { x: -1.8499963000000008, y: 1.51352143282665 },
              { x: -1.8741143472535526, y: 1.5035314105562776 },
              { x: -1.899996200000004, y: 1.5001239999999996 },
              { x: -1.9258780527464552, y: 1.5035314105562776 },
              { x: -1.949996100000007, y: 1.51352143282665 },
              { x: -1.9707067366973092, y: 1.5294132633027147 },
              { x: -1.9865985671733455, y: 1.5501239000000169 },
              { x: -1.9965885894437463, y: 1.5742419472535687 },
              { x: -1.99999600000001, y: 1.6001238000000058 },
              { x: -1.9965885894437463, y: 1.626005652746457 },
              { x: -1.9865985671733455, y: 1.6501237000000089 },
              { x: -1.9707067366973092, y: 1.670834336697311 },
              { x: -1.949996100000007, y: 1.6867261671733758 },
              { x: -1.9258780527464552, y: 1.6967161894437481 },
              { x: -1.899996200000004, y: 1.700123600000012 },
              { x: -1.8741143472535526, y: 1.6967161894437481 },
              { x: -1.8499963000000008, y: 1.6867261671733758 },
              { x: -1.8292856633026986, y: 1.670834336697311 },
              { x: -1.8133938328266481, y: 1.6501237000000089 },
              { x: -1.8034038105562615, y: 1.626005652746457 },
              { x: -1.7999963999999835, y: 1.6001238000000058 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.042291mm"
            pcbY="2.692656mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -2.2480910000000023, y: 1.9426560000000137 },
              { x: 2.1635089999999906, y: 1.9426560000000137 },
              { x: 2.1635089999999906, y: -1.7577439999999882 },
              { x: -2.2480910000000023, y: -1.7577439999999882 },
              { x: -2.2480910000000023, y: 1.9426560000000137 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C918141.obj?uuid=147a8567fdf74261a93df005666d6810",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C918141.step?uuid=147a8567fdf74261a93df005666d6810",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: -0.00012700000002041634, z: -0.01 },
      }}
      {...props}
    />
  );
};
