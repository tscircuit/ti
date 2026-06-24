import type { ChipProps } from "@tscircuit/props";

const pinLabels = {
  pin1: ["VBUS"],
  pin2: ["D_POS"],
  pin3: ["D_NEG"],
  pin4: ["STAT"],
  pin5: ["SCL"],
  pin6: ["SDA"],
  pin7: ["INT"],
  pin8: ["OTG"],
  pin9: ["CE"],
  pin10: ["ILIM"],
  pin11: ["TS"],
  pin12: ["QON"],
  pin13: ["BAT1"],
  pin14: ["BAT2"],
  pin15: ["SYS1"],
  pin16: ["SYS2"],
  pin17: ["PGND1"],
  pin18: ["PGND2"],
  pin19: ["SW1"],
  pin20: ["SW2"],
  pin21: ["BTST"],
  pin22: ["REGN"],
  pin23: ["PMID"],
  pin24: ["DSEL"],
  pin25: ["PAD"],
} as const;

export const BQ25895RTWR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C80200"],
      }}
      manufacturerPartNumber="BQ25895RTWR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-1.911604mm"
            pcbY="1.249934mm"
            width="0.6329934mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-1.911604mm"
            pcbY="0.750062mm"
            width="0.6329934mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-1.911604mm"
            pcbY="0.249936mm"
            width="0.6329934mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-1.911604mm"
            pcbY="-0.249936mm"
            width="0.6329934mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-1.911604mm"
            pcbY="-0.750062mm"
            width="0.6329934mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-1.911604mm"
            pcbY="-1.249934mm"
            width="0.6329934mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-1.249934mm"
            pcbY="-1.911604mm"
            width="0.2800096mm"
            height="0.6329934mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-0.750062mm"
            pcbY="-1.911604mm"
            width="0.2800096mm"
            height="0.6329934mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="-0.249936mm"
            pcbY="-1.911604mm"
            width="0.2800096mm"
            height="0.6329934mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="0.249936mm"
            pcbY="-1.911604mm"
            width="0.2800096mm"
            height="0.6329934mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="0.750062mm"
            pcbY="-1.911604mm"
            width="0.2800096mm"
            height="0.6329934mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="1.249934mm"
            pcbY="-1.911604mm"
            width="0.2800096mm"
            height="0.6329934mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="1.911604mm"
            pcbY="-1.249934mm"
            width="0.6329934mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="1.911604mm"
            pcbY="-0.750062mm"
            width="0.6329934mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="1.911604mm"
            pcbY="-0.249936mm"
            width="0.6329934mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="1.911604mm"
            pcbY="0.249936mm"
            width="0.6329934mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="1.911604mm"
            pcbY="0.750062mm"
            width="0.6329934mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="1.911604mm"
            pcbY="1.249934mm"
            width="0.6329934mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin19"]}
            pcbX="1.249934mm"
            pcbY="1.911604mm"
            width="0.2800096mm"
            height="0.6329934mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin20"]}
            pcbX="0.750062mm"
            pcbY="1.911604mm"
            width="0.2800096mm"
            height="0.6329934mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin21"]}
            pcbX="0.249936mm"
            pcbY="1.911604mm"
            width="0.2800096mm"
            height="0.6329934mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin22"]}
            pcbX="-0.249936mm"
            pcbY="1.911604mm"
            width="0.2800096mm"
            height="0.6329934mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin23"]}
            pcbX="-0.750062mm"
            pcbY="1.911604mm"
            width="0.2800096mm"
            height="0.6329934mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin24"]}
            pcbX="-1.249934mm"
            pcbY="1.911604mm"
            width="0.2800096mm"
            height="0.6329934mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin25"]}
            pcbX="0mm"
            pcbY="0mm"
            width="2.6999946mm"
            height="2.6999946mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -1.580489600000078, y: 2.0761959999999817 },
              { x: -1.7132046000001537, y: 2.0761959999999817 },
              { x: -2.0761960000000954, y: 1.71320460000004 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.5804895999999644, y: 2.0761959999999817 },
              { x: 2.0761959999999817, y: 2.0761959999999817 },
              { x: 2.0761959999999817, y: 1.5804895999999644 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.5804895999999644, y: -2.076195999999868 },
              { x: 2.0761959999999817, y: -2.076195999999868 },
              { x: 2.0761959999999817, y: -1.580489600000078 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.580489600000078, y: 2.0761959999999817 },
              { x: -2.0761960000000954, y: 2.0761959999999817 },
              { x: -2.0761960000000954, y: 1.5804895999999644 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.580489600000078, y: -2.076195999999868 },
              { x: -2.0761960000000954, y: -2.076195999999868 },
              { x: -2.0761960000000954, y: -1.580489600000078 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.2750780000000077, y: 1.6499840000000177 },
              { x: -2.277631177836156, y: 1.6305906889505195 },
              { x: -2.2851167164944854, y: 1.6125190000000202 },
              { x: -2.297024488885768, y: 1.597000488885783 },
              { x: -2.312543000000119, y: 1.5850927164945006 },
              { x: -2.3306146889505044, y: 1.577607177836171 },
              { x: -2.3500080000000025, y: 1.5750540000000228 },
              { x: -2.3694013110495007, y: 1.577607177836171 },
              { x: -2.387473, y: 1.5850927164945006 },
              { x: -2.402991511114351, y: 1.597000488885783 },
              { x: -2.4148992835055196, y: 1.6125190000000202 },
              { x: -2.422384822163849, y: 1.6305906889505195 },
              { x: -2.424938000000111, y: 1.6499840000000177 },
              { x: -2.422384822163849, y: 1.6693773110495158 },
              { x: -2.4148992835055196, y: 1.687449000000015 },
              { x: -2.402991511114351, y: 1.702967511114366 },
              { x: -2.387473, y: 1.7148752835056484 },
              { x: -2.3694013110495007, y: 1.722360822163978 },
              { x: -2.3500080000000025, y: 1.7249140000001262 },
              { x: -2.3306146889505044, y: 1.722360822163978 },
              { x: -2.312543000000119, y: 1.7148752835056484 },
              { x: -2.297024488885768, y: 1.702967511114366 },
              { x: -2.2851167164944854, y: 1.687449000000015 },
              { x: -2.277631177836156, y: 1.6693773110495158 },
              { x: -2.2750780000000077, y: 1.6499840000000177 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.0889mm"
            pcbY="3.2352mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -2.663000000000011, y: 2.485200000000077 },
              { x: 2.485200000000077, y: 2.485200000000077 },
              { x: 2.485200000000077, y: -2.459799999999859 },
              { x: -2.663000000000011, y: -2.459799999999859 },
              { x: -2.663000000000011, y: 2.485200000000077 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C80200.obj?uuid=c257e46ac27a4c7bbfb959941bf66bd1",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C80200.step?uuid=c257e46ac27a4c7bbfb959941bf66bd1",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0.000012699999842880061, z: 0 },
      }}
      {...props}
    />
  );
};
