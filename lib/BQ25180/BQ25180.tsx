import type { ChipProps } from "@tscircuit/props";

const pinLabels = {
  pin1: "N_INT",
  pin2: "IN",
  pin3: "SCL",
  pin4: "SYS",
  pin5: "SDA",
  pin6: "BAT",
  pin7: "TSMR",
  pin8: "GND",
} as const;

export const BQ25180 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C3682423"],
      }}
      manufacturerPartNumber="BQ25180YBGR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="0.600075mm"
            pcbY="0.200025mm"
            width="0.1839976mm"
            height="0.1839976mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="0.600075mm"
            pcbY="-0.200025mm"
            width="0.1839976mm"
            height="0.1839976mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0.200025mm"
            pcbY="-0.200025mm"
            width="0.1839976mm"
            height="0.1839976mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0.200025mm"
            pcbY="0.200025mm"
            width="0.1839976mm"
            height="0.1839976mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-0.200025mm"
            pcbY="0.200025mm"
            width="0.1839976mm"
            height="0.1839976mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-0.200025mm"
            pcbY="-0.200025mm"
            width="0.1839976mm"
            height="0.1839976mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-0.600075mm"
            pcbY="-0.200025mm"
            width="0.1839976mm"
            height="0.1839976mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-0.600075mm"
            pcbY="0.200025mm"
            width="0.1839976mm"
            height="0.1839976mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -0.8999474000000163, y: 0.5500370000000032 },
              { x: 0.9000489999999814, y: 0.5500370000000032 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.8999474000000163, y: -0.5499861999999922 },
              { x: -0.8999474000000163, y: 0.5500370000000032 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.8999474000000163, y: -0.5499861999999922 },
              { x: 0.9000489999999814, y: -0.5499861999999922 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.8999474000000163, y: -0.3982211999999805 },
              { x: -0.8999474000000163, y: -0.3990339999999861 },
              { x: -0.7489952000000244, y: -0.5499861999999922 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 0.9000489999999814, y: -0.5499861999999922 },
              { x: 0.9000489999999814, y: 0.5500370000000032 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.5378450000000186, y: -0.7801609999999926 },
              { x: -0.5403029745948373, y: -0.7988311706375129 },
              { x: -0.5475093914726301, y: -0.8162289999999928 },
              { x: -0.5589731452323434, y: -0.8311688547676823 },
              { x: -0.5739130000000188, y: -0.8426326085273956 },
              { x: -0.5913108293624987, y: -0.8498390254051742 },
              { x: -0.609981000000019, y: -0.852296999999993 },
              { x: -0.6286511706375393, y: -0.8498390254051742 },
              { x: -0.6460490000000192, y: -0.8426326085273956 },
              { x: -0.6609888547676945, y: -0.8311688547676823 },
              { x: -0.6724526085274221, y: -0.8162289999999928 },
              { x: -0.6796590254052006, y: -0.7988311706375129 },
              { x: -0.6821170000000194, y: -0.7801609999999926 },
              { x: -0.6796590254052006, y: -0.7614908293624865 },
              { x: -0.6724526085274221, y: -0.7440929999999923 },
              { x: -0.6609888547676945, y: -0.729153145232317 },
              { x: -0.6460490000000192, y: -0.7176893914726037 },
              { x: -0.6286511706375393, y: -0.7104829745948251 },
              { x: -0.609981000000019, y: -0.7080250000000063 },
              { x: -0.5913108293624987, y: -0.7104829745948251 },
              { x: -0.5739130000000188, y: -0.7176893914726037 },
              { x: -0.5589731452323434, y: -0.729153145232317 },
              { x: -0.5475093914726301, y: -0.7440929999999923 },
              { x: -0.5403029745948373, y: -0.7614908293624865 },
              { x: -0.5378450000000186, y: -0.7801609999999926 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.005715mm"
            pcbY="1.538861mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -1.1574150000000145, y: 0.7888610000000114 },
              { x: 1.1459849999999818, y: 0.7888610000000114 },
              { x: 1.1459849999999818, y: -1.1081389999999942 },
              { x: -1.1574150000000145, y: -1.1081389999999942 },
              { x: -1.1574150000000145, y: 0.7888610000000114 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C3682423.obj?uuid=1b13503f4dad45918962968876248c9b",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C3682423.step?uuid=1b13503f4dad45918962968876248c9b",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: -0.00007619999999519678,
          y: -0.000050800000011008706,
          z: -0.48,
        },
      }}
      {...props}
    />
  );
};
