import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["DREG"],
  pin2: ["BCLK"],
  pin3: ["FSYNC"],
  pin4: ["DOUT"],
  pin5: ["DIN"],
  pin6: ["IOVDD"],
  pin7: ["SCL"],
  pin8: ["SDA"],
  pin9: ["GPIO1"],
  pin10: ["GPIO2"],
  pin11: ["GPO1"],
  pin12: ["GPI1"],
  pin13: ["ADDR"],
  pin14: ["MICBIAS"],
  pin15: ["IN1P"],
  pin16: ["IN1M"],
  pin17: ["IN2P"],
  pin18: ["IN2M"],
  pin19: ["OUT1M"],
  pin20: ["OUT1P"],
  pin21: ["OUT2P"],
  pin22: ["OUT2M"],
  pin23: ["AVDD"],
  pin24: ["VREF"],
  pin25: ["VSS1"],
  pin26: ["A2"],
  pin27: ["A3"],
  pin28: ["A4"],
  pin29: ["A1"],
} as const;

const pinAttributes = {
  pin25: { requiresGround: true },
} as const;

export const TAC5112IRGER = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C44853692"],
      }}
      manufacturerPartNumber="TAC5112IRGER"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin25"]}
            pcbX="0.000127mm"
            pcbY="0.000127mm"
            width="2.0999958mm"
            height="2.0999958mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin26"]}
            pcbX="-1.725041mm"
            pcbY="-1.724787mm"
            width="0.2500122mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin27"]}
            pcbX="1.725041mm"
            pcbY="-1.724787mm"
            width="0.2500122mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin28"]}
            pcbX="1.725041mm"
            pcbY="1.725041mm"
            width="0.2500122mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin29"]}
            pcbX="-1.725041mm"
            pcbY="1.725041mm"
            width="0.2500122mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin24"]}
            pcbX="-1.250061mm"
            pcbY="1.900047mm"
            width="0.2500122mm"
            height="0.5999988mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin23"]}
            pcbX="-0.749935mm"
            pcbY="1.900047mm"
            width="0.2500122mm"
            height="0.5999988mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin22"]}
            pcbX="-0.250063mm"
            pcbY="1.900047mm"
            width="0.2500122mm"
            height="0.5999988mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin21"]}
            pcbX="0.249809mm"
            pcbY="1.900047mm"
            width="0.2500122mm"
            height="0.5999988mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin20"]}
            pcbX="0.749935mm"
            pcbY="1.900047mm"
            width="0.2500122mm"
            height="0.5999988mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin19"]}
            pcbX="1.250061mm"
            pcbY="1.900047mm"
            width="0.2500122mm"
            height="0.5999988mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="1.900047mm"
            pcbY="1.250061mm"
            width="0.5999988mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="1.900047mm"
            pcbY="0.749935mm"
            width="0.5999988mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="1.900047mm"
            pcbY="0.250063mm"
            width="0.5999988mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="1.900047mm"
            pcbY="-0.250063mm"
            width="0.5999988mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="1.900047mm"
            pcbY="-0.749935mm"
            width="0.5999988mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="1.900047mm"
            pcbY="-1.249807mm"
            width="0.5999988mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="1.250061mm"
            pcbY="-1.900047mm"
            width="0.2500122mm"
            height="0.5999988mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="0.749935mm"
            pcbY="-1.900047mm"
            width="0.2500122mm"
            height="0.5999988mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="0.249809mm"
            pcbY="-1.900047mm"
            width="0.2500122mm"
            height="0.5999988mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="-0.250063mm"
            pcbY="-1.900047mm"
            width="0.2500122mm"
            height="0.5999988mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-0.749935mm"
            pcbY="-1.900047mm"
            width="0.2500122mm"
            height="0.5999988mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-1.250061mm"
            pcbY="-1.900047mm"
            width="0.2500122mm"
            height="0.5999988mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-1.900047mm"
            pcbY="-1.249807mm"
            width="0.5999988mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-1.900047mm"
            pcbY="-0.749935mm"
            width="0.5999988mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-1.900047mm"
            pcbY="-0.250063mm"
            width="0.5999988mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-1.900047mm"
            pcbY="0.250063mm"
            width="0.5999988mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-1.900047mm"
            pcbY="0.749935mm"
            width="0.5999988mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="-1.900047mm"
            pcbY="1.250061mm"
            width="0.5999988mm"
            height="0.2500122mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -1.6032734000000346, y: -2.285873000000038 },
              { x: -2.2859492000000046, y: -2.285873000000038 },
              { x: -2.2859492000000046, y: -1.6031209999999874 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 2.286050799999998, y: -1.6031209999999874 },
              { x: 2.286050799999998, y: -2.285873000000038 },
              { x: 1.6032987999999477, y: -2.285873000000038 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.6032987999999477, y: 2.286126999999965 },
              { x: 2.286050799999998, y: 2.286126999999965 },
              { x: 2.286050799999998, y: 1.603451199999995 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.2859492000000046, y: 1.603451199999995 },
              { x: -2.2859492000000046, y: 2.286126999999965 },
              { x: -1.6032734000000346, y: 2.286126999999965 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.6668730000001233, y: 2.1591270000000122 },
              { x: -2.671200420061382, y: 2.126256981271922 },
              { x: -2.683887773719448, y: 2.095626999999922 },
              { x: -2.7040704387893584, y: 2.069324438789181 },
              { x: -2.7303730000000996, y: 2.049141773719384 },
              { x: -2.7610029812720995, y: 2.0364544200612045 },
              { x: -2.7938730000001897, y: 2.032126999999946 },
              { x: -2.826743018728166, y: 2.0364544200612045 },
              { x: -2.857373000000166, y: 2.049141773719384 },
              { x: -2.8836755612107936, y: 2.069324438789181 },
              { x: -2.9038582262808177, y: 2.095626999999922 },
              { x: -2.9165455799388837, y: 2.126256981271922 },
              { x: -2.9208730000001424, y: 2.1591270000000122 },
              { x: -2.9165455799388837, y: 2.1919970187279887 },
              { x: -2.9038582262808177, y: 2.2226269999999886 },
              { x: -2.8836755612107936, y: 2.248929561210616 },
              { x: -2.857373000000166, y: 2.2691122262806402 },
              { x: -2.826743018728166, y: 2.2817995799387063 },
              { x: -2.7938730000001897, y: 2.286126999999965 },
              { x: -2.7610029812720995, y: 2.2817995799387063 },
              { x: -2.7303730000000996, y: 2.2691122262806402 },
              { x: -2.7040704387893584, y: 2.248929561210616 },
              { x: -2.683887773719448, y: 2.2226269999999886 },
              { x: -2.671200420061382, y: 2.1919970187279887 },
              { x: -2.6668730000001233, y: 2.1591270000000122 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.314833mm"
            pcbY="3.294509mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -3.168333000000075, y: 2.5445089999998345 },
              { x: 2.5386669999999185, y: 2.5445089999998345 },
              { x: 2.5386669999999185, y: -2.5274910000001682 },
              { x: -3.168333000000075, y: -2.5274910000001682 },
              { x: -3.168333000000075, y: 2.5445089999998345 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C44853692.obj?uuid=b8023735898d4ed39c8516415302ae57",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C44853692.step?uuid=b8023735898d4ed39c8516415302ae57",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: -0.00006349999989652133,
          y: -0.0001015999999935957,
          z: -0.01,
        },
      }}
      {...props}
    />
  );
};

export default TAC5112IRGER;
