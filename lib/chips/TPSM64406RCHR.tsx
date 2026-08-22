import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["PG1"],
  pin2: ["EN1"],
  pin3: ["VOSNS1"],
  pin4: ["FB1"],
  pin5: ["VCC"],
  pin6: ["AGND"],
  pin7: ["RT"],
  pin8: ["FB2"],
  pin9: ["VOSNS2"],
  pin10: ["EN2"],
  pin11: ["CONFIG"],
  pin12: ["PG2"],
  pin13: ["PGND2"],
  pin14: ["VIN2"],
  pin15: ["CB2"],
  pin16: ["SW22"],
  pin17: ["SW21"],
  pin18: ["VOUT21"],
  pin19: ["VOUT22"],
  pin20: ["VOUT11"],
  pin21: ["VOUT12"],
  pin22: ["SW11"],
  pin23: ["SW12"],
  pin24: ["CB1"],
  pin25: ["VIN1"],
  pin26: ["PGND1"],
  pin27: ["SYNC"],
  pin28: ["PGND"],
} as const;

const pinAttributes = {
  pin5: { requiresPower: true },
  pin6: { requiresGround: true },
  pin13: { requiresGround: true },
  pin14: { requiresPower: true },
  pin25: { requiresPower: true },
  pin26: { requiresGround: true },
  pin28: { requiresGround: true },
} as const;

export const TPSM64406RCHR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C22445537"],
      }}
      manufacturerPartNumber="TPSM64406RCHR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin2"]}
            pcbX="-3.29997435mm"
            pcbY="2.0048982mm"
            width="0.7999984mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-3.29997435mm"
            pcbY="1.5047722mm"
            width="0.7999984mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-3.35001235mm"
            pcbY="1.0049002mm"
            width="0.6999986mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-3.35001235mm"
            pcbY="0.5047742mm"
            width="0.6999986mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-3.35001235mm"
            pcbY="0.0049022mm"
            width="0.6999986mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-3.35001235mm"
            pcbY="-0.4952238mm"
            width="0.6999986mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-3.35001235mm"
            pcbY="-0.9950958mm"
            width="0.6999986mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="-3.29997435mm"
            pcbY="-1.4952218mm"
            width="0.7999984mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="-3.29997435mm"
            pcbY="-1.9950938mm"
            width="0.7999984mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="-2.00000235mm"
            pcbY="-2.8449778mm"
            width="0.2500122mm"
            height="1.1999976mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="-1.49987635mm"
            pcbY="-2.9450538mm"
            width="0.2500122mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="-0.49987835mm"
            pcbY="-2.9450538mm"
            width="0.2500122mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="-0.00000635mm"
            pcbY="-2.9450538mm"
            width="0.2500122mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="1.50062565mm"
            pcbY="-2.8449778mm"
            width="0.2500122mm"
            height="1.1999976mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin22"]}
            pcbX="1.50011765mm"
            pcbY="2.8550362mm"
            width="0.2500122mm"
            height="1.1999976mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin24"]}
            pcbX="-0.00000635mm"
            pcbY="2.9548582mm"
            width="0.2500122mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin25"]}
            pcbX="-0.49987835mm"
            pcbY="2.9548582mm"
            width="0.2500122mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin26"]}
            pcbX="-1.49987635mm"
            pcbY="2.9548582mm"
            width="0.2500122mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin27"]}
            pcbX="-2.00000235mm"
            pcbY="2.8550362mm"
            width="0.2500122mm"
            height="1.1999976mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            points={[
              { x: "-3.69999895mm", y: "2.3849076mm" },
              { x: "-2.51999115mm", y: "2.3849076mm" },
              { x: "-2.51999115mm", y: "3.4449004mm" },
              { x: "-2.51999115mm", y: "3.4548826mm" },
              { x: "-2.78001095mm", y: "3.4548826mm" },
              { x: "-2.78001095mm", y: "3.0348936mm" },
              { x: "-3.28000995mm", y: "3.0348936mm" },
              { x: "-3.28000995mm", y: "2.6348944mm" },
              { x: "-3.69999895mm", y: "2.6348944mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin11"]}
            points={[
              { x: "-3.69982115mm", y: "-2.3704804mm" },
              { x: "-2.51986415mm", y: "-2.3704804mm" },
              { x: "-2.51986415mm", y: "-3.430524mm" },
              { x: "-2.51986415mm", y: "-3.4404554mm" },
              { x: "-2.77985855mm", y: "-3.4404554mm" },
              { x: "-2.77985855mm", y: "-3.020441mm" },
              { x: "-3.27985755mm", y: "-3.020441mm" },
              { x: "-3.27985755mm", y: "-2.6204926mm" },
              { x: "-3.69982115mm", y: "-2.6204926mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin16"]}
            points={[
              { x: "1.12706785mm", y: "-3.0118812mm" },
              { x: "1.12706785mm", y: "-0.7918958mm" },
              { x: "0.37708205mm", y: "-0.7918958mm" },
              { x: "0.36707445mm", y: "-0.7918958mm" },
              { x: "0.36707445mm", y: "-0.801878mm" },
              { x: "0.36707445mm", y: "-3.45186mm" },
              { x: "0.36707445mm", y: "-3.4618676mm" },
              { x: "0.37708205mm", y: "-3.4618676mm" },
              { x: "0.61708665mm", y: "-3.4618676mm" },
              { x: "0.61708665mm", y: "-3.0018736mm" },
              { x: "0.86707345mm", y: "-3.0018736mm" },
              { x: "0.87708105mm", y: "-3.0018736mm" },
              { x: "0.87708105mm", y: "-3.0118812mm" },
              { x: "0.87708105mm", y: "-3.4618676mm" },
              { x: "1.12706785mm", y: "-3.4618676mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin18"]}
            points={[
              { x: "3.70001165mm", y: "-2.3750524mm" },
              { x: "2.52000385mm", y: "-2.3750524mm" },
              { x: "2.52000385mm", y: "-3.4350452mm" },
              { x: "2.52000385mm", y: "-3.4450274mm" },
              { x: "2.78002365mm", y: "-3.4450274mm" },
              { x: "2.78002365mm", y: "-3.0250638mm" },
              { x: "3.28002265mm", y: "-3.0250638mm" },
              { x: "3.28002265mm", y: "-2.6250392mm" },
              { x: "3.70001165mm", y: "-2.6250392mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin19"]}
            points={[
              { x: "2.51997845mm", y: "-0.365125mm" },
              { x: "3.69998625mm", y: "-0.365125mm" },
              { x: "3.69998625mm", y: "-0.6251194mm" },
              { x: "3.29998705mm", y: "-0.6251194mm" },
              { x: "3.29998705mm", y: "-0.8751316mm" },
              { x: "3.69998625mm", y: "-0.8751316mm" },
              { x: "3.69998625mm", y: "-1.1150854mm" },
              { x: "3.29998705mm", y: "-1.1150854mm" },
              { x: "3.29998705mm", y: "-1.3751306mm" },
              { x: "3.69998625mm", y: "-1.3751306mm" },
              { x: "3.69998625mm", y: "-1.625092mm" },
              { x: "3.29998705mm", y: "-1.625092mm" },
              { x: "3.29998705mm", y: "-1.8751042mm" },
              { x: "3.69998625mm", y: "-1.8751042mm" },
              { x: "3.69998625mm", y: "-2.125091mm" },
              { x: "2.52998605mm", y: "-2.125091mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin20"]}
            points={[
              { x: "2.52000385mm", y: "2.1348954mm" },
              { x: "3.70001165mm", y: "2.1348954mm" },
              { x: "3.70001165mm", y: "1.874901mm" },
              { x: "3.30001245mm", y: "1.874901mm" },
              { x: "3.30001245mm", y: "1.6248888mm" },
              { x: "3.70001165mm", y: "1.6248888mm" },
              { x: "3.70001165mm", y: "1.3849096mm" },
              { x: "3.30001245mm", y: "1.3849096mm" },
              { x: "3.30001245mm", y: "1.1248898mm" },
              { x: "3.70001165mm", y: "1.1248898mm" },
              { x: "3.70001165mm", y: "0.874903mm" },
              { x: "3.30001245mm", y: "0.874903mm" },
              { x: "3.30001245mm", y: "0.6248908mm" },
              { x: "3.70001165mm", y: "0.6248908mm" },
              { x: "3.70001165mm", y: "0.374904mm" },
              { x: "2.53001145mm", y: "0.374904mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin21"]}
            points={[
              { x: "3.70001165mm", y: "2.3918926mm" },
              { x: "2.52000385mm", y: "2.3918926mm" },
              { x: "2.52000385mm", y: "3.4518854mm" },
              { x: "2.52000385mm", y: "3.4618676mm" },
              { x: "2.77999825mm", y: "3.4618676mm" },
              { x: "2.77999825mm", y: "3.0418786mm" },
              { x: "3.27999725mm", y: "3.0418786mm" },
              { x: "3.27999725mm", y: "2.6418794mm" },
              { x: "3.70001165mm", y: "2.6418794mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin23"]}
            points={[
              { x: "0.36999545mm", y: "3.0048962mm" },
              { x: "0.36999545mm", y: "0.7849108mm" },
              { x: "1.12000665mm", y: "0.7849108mm" },
              { x: "1.12998885mm", y: "0.7849108mm" },
              { x: "1.12998885mm", y: "0.794893mm" },
              { x: "1.12998885mm", y: "3.444875mm" },
              { x: "1.12998885mm", y: "3.4548826mm" },
              { x: "1.11998125mm", y: "3.4548826mm" },
              { x: "0.88000205mm", y: "3.4548826mm" },
              { x: "0.88000205mm", y: "2.9948886mm" },
              { x: "0.62998985mm", y: "2.9948886mm" },
              { x: "0.61998225mm", y: "2.9948886mm" },
              { x: "0.61998225mm", y: "3.0048962mm" },
              { x: "0.61998225mm", y: "3.4548826mm" },
              { x: "0.36999545mm", y: "3.4548826mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin28"]}
            points={[
              { x: "-2.04998955mm", y: "1.3048996mm" },
              { x: "-1.44999075mm", y: "1.3048996mm" },
              { x: "-1.44999075mm", y: "0.3049016mm" },
              { x: "-0.30000575mm", y: "0.3049016mm" },
              { x: "-0.30000575mm", y: "-0.2950972mm" },
              { x: "-1.44999075mm", y: "-0.2950972mm" },
              { x: "-1.44999075mm", y: "-1.2950952mm" },
              { x: "-2.04998955mm", y: "-1.2950952mm" },
            ]}
            shape="polygon"
          />
          <silkscreenpath
            route={[
              { x: -3.770001349999916, y: 3.0100016000000096 },
              { x: -3.773408760556322, y: 2.984119747253544 },
              { x: -3.78339878282668, y: 2.9600017000000207 },
              { x: -3.7992906133027873, y: 2.9392910633027896 },
              { x: -3.820001250000132, y: 2.9233992328265686 },
              { x: -3.8441192972536555, y: 2.9134092105562104 },
              { x: -3.8700011500000073, y: 2.910001799999918 },
              { x: -3.895883002746473, y: 2.9134092105562104 },
              { x: -3.920001049999996, y: 2.9233992328265686 },
              { x: -3.940711686697341, y: 2.9392910633027896 },
              { x: -3.9566035171734484, y: 2.9600017000000207 },
              { x: -3.9665935394438065, y: 2.984119747253544 },
              { x: -3.970000949999985, y: 3.0100016000000096 },
              { x: -3.9665935394438065, y: 3.035883452746475 },
              { x: -3.9566035171734484, y: 3.0600014999999985 },
              { x: -3.940711686697341, y: 3.0807121366972297 },
              { x: -3.920001049999996, y: 3.0966039671734507 },
              { x: -3.895883002746473, y: 3.106593989443809 },
              { x: -3.8700011500000073, y: 3.1100013999999874 },
              { x: -3.8441192972536555, y: 3.106593989443809 },
              { x: -3.820001250000132, y: 3.0966039671734507 },
              { x: -3.7992906133027873, y: 3.0807121366972297 },
              { x: -3.78339878282668, y: 3.0600014999999985 },
              { x: -3.773408760556322, y: 3.035883452746475 },
              { x: -3.770001349999916, y: 3.0100016000000096 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.13399135mm"
            pcbY="4.4544mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -4.2193913500000235, y: 3.704400000000078 },
              { x: 3.951408650000076, y: 3.704400000000078 },
              { x: 3.951408650000076, y: -3.7298000000000684 },
              { x: -4.2193913500000235, y: -3.7298000000000684 },
              { x: -4.2193913500000235, y: 3.704400000000078 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C22445537.obj?uuid=9d2da92084ec473fbe109d73500bbbae",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C22445537.step?uuid=9d2da92084ec473fbe109d73500bbbae",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: -0.11999594999997498,
          y: -0.000025400000026820635,
          z: -0.01,
        },
      }}
      {...props}
    />
  );
};

export default TPSM64406RCHR;
