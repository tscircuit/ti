import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["GND1"],
  pin2: ["GND2"],
  pin3: ["NC1"],
  pin4: ["nHIB"],
  pin5: ["HOST_SPI_CLK"],
  pin6: ["HOST_SPI_DIN"],
  pin7: ["HOST_SPI_DOUT"],
  pin8: ["HOST_SPI_nCS"],
  pin9: ["NC2"],
  pin10: ["FORCE_AP"],
  pin11: ["HOST_INTR"],
  pin12: ["NC3"],
  pin13: ["NC4"],
  pin14: ["NC5"],
  pin15: ["NC6"],
  pin16: ["GND3"],
  pin17: ["NC7"],
  pin18: ["NC8"],
  pin19: ["RESERVED1"],
  pin20: ["NC9"],
  pin21: ["RESERVED2"],
  pin22: ["NC10"],
  pin23: ["SOP2"],
  pin24: ["SOP1"],
  pin25: ["NC11"],
  pin26: ["NC12"],
  pin27: ["GND4"],
  pin28: ["GND5"],
  pin29: ["NC13"],
  pin30: ["GND6"],
  pin31: ["RF_BG"],
  pin32: ["GND7"],
  pin33: ["NC14"],
  pin34: ["SOP0"],
  pin35: ["nRESET"],
  pin36: ["VBAT_DCDC_ANA"],
  pin37: ["VBAT_DCDC_PA"],
  pin38: ["GND8"],
  pin39: ["NC15"],
  pin40: ["VBAT_DCDC_DIG_IO"],
  pin41: ["NC16"],
  pin42: ["NC17"],
  pin43: ["GND9"],
  pin44: ["UART1_nRTS"],
  pin45: ["NC18"],
  pin46: ["UART1_TX"],
  pin47: ["UART1_RX"],
  pin48: ["TEST_58"],
  pin49: ["TEST_59"],
  pin50: ["TEST_60"],
  pin51: ["UART1_nCTS"],
  pin52: ["TEST_62"],
  pin53: ["NC19"],
  pin54: ["NC20"],
  pin55: ["GND18"],
  pin56: ["GND10"],
  pin57: ["GND11"],
  pin58: ["GND12"],
  pin59: ["GND13"],
  pin60: ["GND14"],
  pin61: ["GND15"],
  pin62: ["GND16"],
  pin63: ["GND17"],
} as const;

const pinAttributes = {
  pin1: { requiresGround: true },
  pin2: { requiresGround: true },
  pin3: { doNotConnect: true },
  pin9: { doNotConnect: true },
  pin12: { doNotConnect: true },
  pin13: { doNotConnect: true },
  pin14: { doNotConnect: true },
  pin15: { doNotConnect: true },
  pin16: { requiresGround: true },
  pin17: { doNotConnect: true },
  pin18: { doNotConnect: true },
  pin20: { doNotConnect: true },
  pin22: { doNotConnect: true },
  pin25: { doNotConnect: true },
  pin26: { doNotConnect: true },
  pin27: { requiresGround: true },
  pin28: { requiresGround: true },
  pin29: { doNotConnect: true },
  pin30: { requiresGround: true },
  pin32: { requiresGround: true },
  pin33: { doNotConnect: true },
  pin38: { requiresGround: true },
  pin39: { doNotConnect: true },
  pin41: { doNotConnect: true },
  pin42: { doNotConnect: true },
  pin43: { requiresGround: true },
  pin45: { doNotConnect: true },
  pin53: { doNotConnect: true },
  pin54: { doNotConnect: true },
  pin55: { requiresGround: true },
  pin56: { requiresGround: true },
  pin57: { requiresGround: true },
  pin58: { requiresGround: true },
  pin59: { requiresGround: true },
  pin60: { requiresGround: true },
  pin61: { requiresGround: true },
  pin62: { requiresGround: true },
  pin63: { requiresGround: true },
} as const;

export const CC3100MODR11MAMOBT = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2654660"],
      }}
      manufacturerPartNumber="CC3100MODR11MAMOBT"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-9.525mm"
            pcbY="-8.1900141mm"
            width="0.810006mm"
            height="1.0899902mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-8.255mm"
            pcbY="-8.1900141mm"
            width="0.810006mm"
            height="1.0899902mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-6.985mm"
            pcbY="-8.1900141mm"
            width="0.810006mm"
            height="1.0899902mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-5.715mm"
            pcbY="-8.1900141mm"
            width="0.810006mm"
            height="1.0899902mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-4.445mm"
            pcbY="-8.1900141mm"
            width="0.810006mm"
            height="1.0899902mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-3.175mm"
            pcbY="-8.1900141mm"
            width="0.810006mm"
            height="1.0899902mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-1.905mm"
            pcbY="-8.1900141mm"
            width="0.810006mm"
            height="1.0899902mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-0.635mm"
            pcbY="-8.1900141mm"
            width="0.810006mm"
            height="1.0899902mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="0.635mm"
            pcbY="-8.1900141mm"
            width="0.810006mm"
            height="1.0899902mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="1.905mm"
            pcbY="-8.1900141mm"
            width="0.810006mm"
            height="1.0899902mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="3.175mm"
            pcbY="-8.1900141mm"
            width="0.810006mm"
            height="1.0899902mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="4.445mm"
            pcbY="-8.1900141mm"
            width="0.810006mm"
            height="1.0899902mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="5.715mm"
            pcbY="-8.1900141mm"
            width="0.810006mm"
            height="1.0899902mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="6.985mm"
            pcbY="-8.1900141mm"
            width="0.810006mm"
            height="1.0899902mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="8.255mm"
            pcbY="-8.1900141mm"
            width="0.810006mm"
            height="1.0899902mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="9.525mm"
            pcbY="-8.1900141mm"
            width="0.810006mm"
            height="1.0899902mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="9.7050098mm"
            pcbY="-6.3499873mm"
            width="1.0899902mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="9.7050098mm"
            pcbY="-5.0799873mm"
            width="1.0899902mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin19"]}
            pcbX="9.7050098mm"
            pcbY="-3.8099873mm"
            width="1.0899902mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin20"]}
            pcbX="9.7050098mm"
            pcbY="-2.5399873mm"
            width="1.0899902mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin21"]}
            pcbX="9.7050098mm"
            pcbY="-1.2699873mm"
            width="1.0899902mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin22"]}
            pcbX="9.7050098mm"
            pcbY="0.0000127mm"
            width="1.0899902mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin23"]}
            pcbX="9.7050098mm"
            pcbY="1.2700127mm"
            width="1.0899902mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin24"]}
            pcbX="9.7050098mm"
            pcbY="2.5400127mm"
            width="1.0899902mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin25"]}
            pcbX="9.7050098mm"
            pcbY="3.8100127mm"
            width="1.0899902mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin26"]}
            pcbX="9.7050098mm"
            pcbY="5.0800127mm"
            width="1.0899902mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin27"]}
            pcbX="9.7049844mm"
            pcbY="6.3500127mm"
            width="1.0899902mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin28"]}
            pcbX="9.525mm"
            pcbY="8.1900141mm"
            width="0.810006mm"
            height="1.0899902mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin29"]}
            pcbX="8.255mm"
            pcbY="8.1899887mm"
            width="0.810006mm"
            height="1.0899902mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin30"]}
            pcbX="6.985mm"
            pcbY="8.1899887mm"
            width="0.810006mm"
            height="1.0899902mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin31"]}
            pcbX="5.715mm"
            pcbY="8.1899887mm"
            width="0.810006mm"
            height="1.0899902mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin32"]}
            pcbX="4.445mm"
            pcbY="8.1899887mm"
            width="0.810006mm"
            height="1.0899902mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin33"]}
            pcbX="3.175mm"
            pcbY="8.1899887mm"
            width="0.810006mm"
            height="1.0899902mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin34"]}
            pcbX="1.905mm"
            pcbY="8.1899887mm"
            width="0.810006mm"
            height="1.0899902mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin35"]}
            pcbX="0.635mm"
            pcbY="8.1899887mm"
            width="0.810006mm"
            height="1.0899902mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin36"]}
            pcbX="-0.635mm"
            pcbY="8.1899887mm"
            width="0.810006mm"
            height="1.0899902mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin37"]}
            pcbX="-1.905mm"
            pcbY="8.1899887mm"
            width="0.810006mm"
            height="1.0899902mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin38"]}
            pcbX="-3.175mm"
            pcbY="8.1899887mm"
            width="0.810006mm"
            height="1.0899902mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin39"]}
            pcbX="-4.445mm"
            pcbY="8.1899887mm"
            width="0.810006mm"
            height="1.0899902mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin40"]}
            pcbX="-5.715mm"
            pcbY="8.1899887mm"
            width="0.810006mm"
            height="1.0899902mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin41"]}
            pcbX="-6.985mm"
            pcbY="8.1899887mm"
            width="0.810006mm"
            height="1.0899902mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin42"]}
            pcbX="-8.255mm"
            pcbY="8.1899887mm"
            width="0.810006mm"
            height="1.0899902mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin43"]}
            pcbX="-9.525mm"
            pcbY="8.1899887mm"
            width="0.810006mm"
            height="1.0899902mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin44"]}
            pcbX="-9.7049844mm"
            pcbY="6.3500127mm"
            width="1.0899902mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin45"]}
            pcbX="-9.7050098mm"
            pcbY="5.0800127mm"
            width="1.0899902mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin46"]}
            pcbX="-9.7050098mm"
            pcbY="3.8100127mm"
            width="1.0899902mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin47"]}
            pcbX="-9.7050098mm"
            pcbY="2.5400127mm"
            width="1.0899902mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin48"]}
            pcbX="-9.7050098mm"
            pcbY="1.2700127mm"
            width="1.0899902mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin49"]}
            pcbX="-9.7050098mm"
            pcbY="0.0000127mm"
            width="1.0899902mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin50"]}
            pcbX="-9.7050098mm"
            pcbY="-1.2699873mm"
            width="1.0899902mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin51"]}
            pcbX="-9.7050098mm"
            pcbY="-2.5399873mm"
            width="1.0899902mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin52"]}
            pcbX="-9.7050098mm"
            pcbY="-3.8099873mm"
            width="1.0899902mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin53"]}
            pcbX="-9.7050098mm"
            pcbY="-5.0799873mm"
            width="1.0899902mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin54"]}
            pcbX="-9.7050098mm"
            pcbY="-6.3499873mm"
            width="1.0899902mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin56"]}
            pcbX="-1.5050516mm"
            pcbY="-4.4900215mm"
            width="2.1100034mm"
            height="2.1100034mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin57"]}
            pcbX="1.4948916mm"
            pcbY="-4.4900977mm"
            width="2.1100034mm"
            height="2.1100034mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin58"]}
            pcbX="-4.5049948mm"
            pcbY="-1.4900275mm"
            width="2.1100034mm"
            height="2.1100034mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin59"]}
            pcbX="-1.5050008mm"
            pcbY="-1.4900275mm"
            width="2.1100034mm"
            height="2.1100034mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin60"]}
            pcbX="1.4949932mm"
            pcbY="-1.4900275mm"
            width="2.1100034mm"
            height="2.1100034mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin61"]}
            pcbX="-4.5049948mm"
            pcbY="1.5099665mm"
            width="2.1100034mm"
            height="2.1100034mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin62"]}
            pcbX="-1.5050008mm"
            pcbY="1.5099665mm"
            width="2.1100034mm"
            height="2.1100034mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin63"]}
            pcbX="1.4949932mm"
            pcbY="1.5099665mm"
            width="2.1100034mm"
            height="2.1100034mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin55"]}
            points={[
              { x: "-5.5699914mm", y: "-3.4350325mm" },
              { x: "-5.5599838mm", y: "-4.5050329mm" },
              { x: "-5.5399686mm", y: "-4.5250227mm" },
              { x: "-4.4899834mm", y: "-5.5550435mm" },
              { x: "-3.4499804mm", y: "-5.5550435mm" },
              { x: "-3.4499804mm", y: "-3.4350325mm" },
            ]}
            shape="polygon"
          />
          <silkscreenpath
            route={[
              { x: 10.510012000000188, y: 9.059964100000002 },
              { x: 10.510012000000188, y: -8.999994700000116 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -10.509986599999934, y: 9.059964100000002 },
              { x: 10.510012000000188, y: 9.059964100000002 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 10.469981599999983, y: -8.999994700000116 },
              { x: -10.469981599999983, y: -8.999994700000116 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -10.509986599999934, y: 9.059964100000002 },
              { x: -10.509986599999934, y: -8.999994700000116 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -10.308462999999847, y: -9.469996300000048 },
              { x: -10.31294447621542, y: -9.5040364913948 },
              { x: -10.326083499663582, y: -9.53575689999991 },
              { x: -10.346984667610172, y: -9.562995832389788 },
              { x: -10.37422360000005, y: -9.583897000336378 },
              { x: -10.405944008605161, y: -9.597036023784653 },
              { x: -10.439984199999799, y: -9.601517500000114 },
              { x: -10.474024391394664, y: -9.597036023784653 },
              { x: -10.505744799999889, y: -9.583897000336378 },
              { x: -10.532983732389653, y: -9.562995832389788 },
              { x: -10.55388490033613, y: -9.53575689999991 },
              { x: -10.567023923784518, y: -9.5040364913948 },
              { x: -10.571505399999864, y: -9.469996300000048 },
              { x: -10.567023923784518, y: -9.435956108605296 },
              { x: -10.55388490033613, y: -9.404235700000072 },
              { x: -10.532983732389653, y: -9.376996767610308 },
              { x: -10.505744799999889, y: -9.356095599663831 },
              { x: -10.474024391394664, y: -9.342956576215443 },
              { x: -10.439984199999799, y: -9.338475100000096 },
              { x: -10.405944008605161, y: -9.342956576215443 },
              { x: -10.37422360000005, y: -9.356095599663831 },
              { x: -10.346984667610172, y: -9.376996767610308 },
              { x: -10.326083499663582, y: -9.404235700000072 },
              { x: -10.31294447621542, y: -9.435956108605296 },
              { x: -10.308462999999847, y: -9.469996300000048 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.0254mm"
            pcbY="10.0565859mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -10.81639999999993, y: 9.306585900000073 },
              { x: 10.765600000000177, y: 9.306585900000073 },
              { x: 10.765600000000177, y: -9.862414100000024 },
              { x: -10.81639999999993, y: -9.862414100000024 },
              { x: -10.81639999999993, y: 9.306585900000073 },
            ]}
          />
        </footprint>
      }
      {...props}
    />
  );
};

export default CC3100MODR11MAMOBT;
