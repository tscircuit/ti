import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["GND1"],
  pin2: ["GND2"],
  pin3: ["GPIO10"],
  pin4: ["GPIO11"],
  pin5: ["GPIO14"],
  pin6: ["GPIO15"],
  pin7: ["GPIO16"],
  pin8: ["GPIO17"],
  pin9: ["GPIO12"],
  pin10: ["GPIO13"],
  pin11: ["GPIO22"],
  pin12: ["JTAG_TDI"],
  pin13: ["FLASH_SPI_MISO"],
  pin14: ["FLASH_SPI_nCS_IN"],
  pin15: ["FLASH_SPI_CLK"],
  pin16: ["GND3"],
  pin17: ["FLASH_SPI_MOSI"],
  pin18: ["JTAG_TDO"],
  pin19: ["GPIO28"],
  pin20: ["NC1"],
  pin21: ["JTAG_TCK"],
  pin22: ["JTAG_TMS"],
  pin23: ["SOP2"],
  pin24: ["SOP1"],
  pin25: ["ANT_SEL1"],
  pin26: ["ANT_SEL2"],
  pin27: ["GND4"],
  pin28: ["GND5"],
  pin29: ["NC2"],
  pin30: ["GND6"],
  pin31: ["RF_BG"],
  pin32: ["GND7"],
  pin33: ["NC3"],
  pin34: ["SOP0"],
  pin35: ["nRESET"],
  pin36: ["VBAT_RESET"],
  pin37: ["VBAT1"],
  pin38: ["GND8"],
  pin39: ["NC4"],
  pin40: ["VBAT2"],
  pin41: ["NC5"],
  pin42: ["GPIO30"],
  pin43: ["GND9"],
  pin44: ["GPIO0"],
  pin45: ["NC6"],
  pin46: ["GPIO1"],
  pin47: ["GPIO2"],
  pin48: ["GPIO3"],
  pin49: ["GPIO4"],
  pin50: ["GPIO5"],
  pin51: ["GPIO6"],
  pin52: ["GPIO7"],
  pin53: ["GPIO8"],
  pin54: ["GPIO9"],
  pin55: ["GND10"],
  pin56: ["GND11"],
  pin57: ["GND12"],
  pin58: ["GND13"],
  pin59: ["GND14"],
  pin60: ["GND15"],
  pin61: ["GND16"],
  pin62: ["GND17"],
  pin63: ["GND18"],
} as const;

const pinAttributes = {
  pin1: { requiresGround: true },
  pin2: { requiresGround: true },
  pin16: { requiresGround: true },
  pin20: { doNotConnect: true },
  pin27: { requiresGround: true },
  pin28: { requiresGround: true },
  pin29: { doNotConnect: true },
  pin30: { requiresGround: true },
  pin32: { requiresGround: true },
  pin33: { doNotConnect: true },
  pin38: { requiresGround: true },
  pin39: { doNotConnect: true },
  pin41: { doNotConnect: true },
  pin43: { requiresGround: true },
  pin45: { doNotConnect: true },
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

export const CC3220MODASM2MONR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2151609"],
      }}
      manufacturerPartNumber="CC3220MODASM2MONR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-8.0499839mm"
            pcbY="9.525mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-8.0499839mm"
            pcbY="8.255mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-8.0499839mm"
            pcbY="6.985mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-8.0499839mm"
            pcbY="5.715mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-8.0499839mm"
            pcbY="4.445mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-8.0499839mm"
            pcbY="3.175mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-8.0499839mm"
            pcbY="1.905mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-8.0499839mm"
            pcbY="0.635mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="-8.0499839mm"
            pcbY="-0.635mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="-8.0499839mm"
            pcbY="-1.905mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="-8.0499839mm"
            pcbY="-3.175mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="-8.0499839mm"
            pcbY="-4.445mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="-8.0499839mm"
            pcbY="-5.715mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="-8.0499839mm"
            pcbY="-6.985mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="-8.0499839mm"
            pcbY="-8.255mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="-8.0499839mm"
            pcbY="-9.525mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="-6.3499873mm"
            pcbY="-9.523984mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="-5.0799873mm"
            pcbY="-9.523984mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin19"]}
            pcbX="-3.8099873mm"
            pcbY="-9.523984mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin20"]}
            pcbX="-2.5399873mm"
            pcbY="-9.523984mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin21"]}
            pcbX="-1.2699873mm"
            pcbY="-9.523984mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin22"]}
            pcbX="0.0000127mm"
            pcbY="-9.523984mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin23"]}
            pcbX="1.2700127mm"
            pcbY="-9.523984mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin24"]}
            pcbX="2.5400127mm"
            pcbY="-9.523984mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin25"]}
            pcbX="3.8100127mm"
            pcbY="-9.523984mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin26"]}
            pcbX="5.0800127mm"
            pcbY="-9.523984mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin27"]}
            pcbX="6.3500127mm"
            pcbY="-9.523984mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin28"]}
            pcbX="8.0499839mm"
            pcbY="-9.525mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin29"]}
            pcbX="8.0499839mm"
            pcbY="-8.255mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin30"]}
            pcbX="8.0499839mm"
            pcbY="-6.985mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin31"]}
            pcbX="8.0499839mm"
            pcbY="-5.715mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin32"]}
            pcbX="8.0499839mm"
            pcbY="-4.445mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin33"]}
            pcbX="8.0499839mm"
            pcbY="-3.175mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin34"]}
            pcbX="8.0499839mm"
            pcbY="-1.905mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin35"]}
            pcbX="8.0499839mm"
            pcbY="-0.635mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin36"]}
            pcbX="8.0499839mm"
            pcbY="0.635mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin37"]}
            pcbX="8.0499839mm"
            pcbY="1.905mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin38"]}
            pcbX="8.0499839mm"
            pcbY="3.175mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin39"]}
            pcbX="8.0499839mm"
            pcbY="4.445mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin40"]}
            pcbX="8.0499839mm"
            pcbY="5.715mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin41"]}
            pcbX="8.0499839mm"
            pcbY="6.985mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin42"]}
            pcbX="8.0499839mm"
            pcbY="8.255mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin43"]}
            pcbX="8.0499839mm"
            pcbY="9.525mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin44"]}
            pcbX="6.3500127mm"
            pcbY="9.523984mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin45"]}
            pcbX="5.0800127mm"
            pcbY="9.523984mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin46"]}
            pcbX="3.8100127mm"
            pcbY="9.523984mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin47"]}
            pcbX="2.5400127mm"
            pcbY="9.523984mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin48"]}
            pcbX="1.2700127mm"
            pcbY="9.523984mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin49"]}
            pcbX="0.0000127mm"
            pcbY="9.523984mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin50"]}
            pcbX="-1.2699873mm"
            pcbY="9.523984mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin51"]}
            pcbX="-2.5399873mm"
            pcbY="9.523984mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin52"]}
            pcbX="-3.8099873mm"
            pcbY="9.523984mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin53"]}
            pcbX="-5.0799873mm"
            pcbY="9.523984mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin54"]}
            pcbX="-6.3499873mm"
            pcbY="9.523984mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin55"]}
            pcbX="-4.4999529mm"
            pcbY="4.590034mm"
            width="2.1100034mm"
            height="2.1100034mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin56"]}
            pcbX="-4.4999529mm"
            pcbY="1.500124mm"
            width="2.1100034mm"
            height="2.1100034mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin57"]}
            pcbX="-4.4999529mm"
            pcbY="-1.49987mm"
            width="2.1100034mm"
            height="2.1100034mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin58"]}
            pcbX="-1.4999589mm"
            pcbY="4.590034mm"
            width="2.1100034mm"
            height="2.1100034mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin59"]}
            pcbX="-1.4999589mm"
            pcbY="1.500124mm"
            width="2.1100034mm"
            height="2.1100034mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin60"]}
            pcbX="-1.4999589mm"
            pcbY="-1.49987mm"
            width="2.1100034mm"
            height="2.1100034mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin61"]}
            pcbX="1.5000351mm"
            pcbY="4.590034mm"
            width="2.1100034mm"
            height="2.1100034mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin62"]}
            pcbX="1.5000351mm"
            pcbY="1.500124mm"
            width="2.1100034mm"
            height="2.1100034mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin63"]}
            pcbX="1.5000351mm"
            pcbY="-1.499997mm"
            width="2.1100034mm"
            height="2.1100034mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -8.78000529999997, y: 10.299979399999984 },
              { x: 16.219944700000042, y: 10.299979399999984 },
              { x: 16.219944700000042, y: -10.19997960000012 },
              { x: -8.78000529999997, y: -10.19997960000012 },
              { x: -8.78000529999997, y: 10.299979399999984 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -9.2800043000002, y: 9.499980999999934 },
              { x: -9.29022653166885, y: 9.422335441760652 },
              { x: -9.320196598479924, y: 9.349981299999968 },
              { x: -9.367872089908133, y: 9.287849389908047 },
              { x: -9.430004000000054, y: 9.240173898479725 },
              { x: -9.502358141760737, y: 9.210203831668764 },
              { x: -9.580003700000134, y: 9.199981600000001 },
              { x: -9.657649258239417, y: 9.210203831668764 },
              { x: -9.730003399999987, y: 9.240173898479725 },
              { x: -9.792135310091908, y: 9.287849389908047 },
              { x: -9.83981080152023, y: 9.349981299999968 },
              { x: -9.86978086833119, y: 9.422335441760652 },
              { x: -9.880003099999954, y: 9.499980999999934 },
              { x: -9.86978086833119, y: 9.57762655823933 },
              { x: -9.83981080152023, y: 9.649980700000015 },
              { x: -9.792135310091908, y: 9.712112610091708 },
              { x: -9.730003399999987, y: 9.75978810152003 },
              { x: -9.657649258239417, y: 9.789758168331218 },
              { x: -9.580003700000134, y: 9.799980399999868 },
              { x: -9.502358141760737, y: 9.789758168331218 },
              { x: -9.430004000000054, y: 9.75978810152003 },
              { x: -9.367872089908133, y: 9.712112610091708 },
              { x: -9.320196598479924, y: 9.649980700000015 },
              { x: -9.29022653166885, y: 9.57762655823933 },
              { x: -9.2800043000002, y: 9.499980999999934 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="3.2166179mm"
            pcbY="11.4395778mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -10.139782100000048, y: 10.689577799999824 },
              { x: 16.573017899999968, y: 10.689577799999824 },
              { x: 16.573017899999968, y: -10.562222199999951 },
              { x: -10.139782100000048, y: -10.562222199999951 },
              { x: -10.139782100000048, y: 10.689577799999824 },
            ]}
          />
        </footprint>
      }
      {...props}
    />
  );
};

export default CC3220MODASM2MONR;
