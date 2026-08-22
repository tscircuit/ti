import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["DRAIN11"],
  pin2: ["DRAIN10"],
  pin3: ["DRAIN9"],
  pin4: ["DRAIN8"],
  pin5: ["DRAIN7"],
  pin6: ["DRAIN6"],
  pin7: ["DRAIN5"],
  pin8: ["DRAIN4"],
  pin9: ["DRAIN3"],
  pin10: ["DRAIN2"],
  pin11: ["DRAIN1"],
  pin12: ["SOURCE12"],
  pin13: ["SOURCE11"],
  pin14: ["SOURCE10"],
  pin15: ["SOURCE9"],
  pin16: ["SOURCE8"],
  pin17: ["NC"],
  pin18: ["SOURCE7"],
  pin19: ["SOURCE6"],
  pin20: ["SOURCE5"],
  pin21: ["SOURCE4"],
  pin22: ["SOURCE3"],
  pin23: ["SOURCE2"],
  pin24: ["SOURCE1"],
  pin25: ["LDO5V"],
  pin26: ["VNEG"],
  pin27: ["VDD"],
  pin28: ["BBSW"],
  pin29: ["LPM"],
  pin30: ["RDRV"],
  pin31: ["IN"],
  pin32: ["FAULT"],
  pin33: ["EP"],
} as const;

const pinAttributes = {
  pin17: { doNotConnect: true },
  pin27: { requiresPower: true },
} as const;

export const LMG3410R150RWHR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C1858363"],
      }}
      manufacturerPartNumber="LMG3410R150RWHR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin11"]}
            pcbX="-3.899027mm"
            pcbY="-3.445256mm"
            width="0.999998mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="-3.899027mm"
            pcbY="-2.595118mm"
            width="0.999998mm"
            height="0.3999992mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="-3.899027mm"
            pcbY="-1.945132mm"
            width="0.999998mm"
            height="0.3999992mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-3.899027mm"
            pcbY="-1.295146mm"
            width="0.999998mm"
            height="0.3999992mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-3.899027mm"
            pcbY="-0.64516mm"
            width="0.999998mm"
            height="0.3999992mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-3.899027mm"
            pcbY="0.004826mm"
            width="0.999998mm"
            height="0.3999992mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-3.899027mm"
            pcbY="0.654812mm"
            width="0.999998mm"
            height="0.3999992mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-3.899027mm"
            pcbY="1.304798mm"
            width="0.999998mm"
            height="0.3999992mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-3.899027mm"
            pcbY="1.954784mm"
            width="0.999998mm"
            height="0.3999992mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-3.899027mm"
            pcbY="2.60477mm"
            width="0.999998mm"
            height="0.3999992mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="-3.899027mm"
            pcbY="3.454654mm"
            width="0.999998mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin27"]}
            pcbX="3.899027mm"
            pcbY="3.454654mm"
            width="0.999998mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin26"]}
            pcbX="3.899027mm"
            pcbY="2.60477mm"
            width="0.999998mm"
            height="0.3999992mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin25"]}
            pcbX="3.899027mm"
            pcbY="1.954784mm"
            width="0.999998mm"
            height="0.3999992mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin24"]}
            pcbX="3.899027mm"
            pcbY="1.304798mm"
            width="0.999998mm"
            height="0.3999992mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin23"]}
            pcbX="3.899027mm"
            pcbY="0.654812mm"
            width="0.999998mm"
            height="0.3999992mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin22"]}
            pcbX="3.899027mm"
            pcbY="0.004826mm"
            width="0.999998mm"
            height="0.3999992mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin21"]}
            pcbX="3.899027mm"
            pcbY="-0.64516mm"
            width="0.999998mm"
            height="0.3999992mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin20"]}
            pcbX="3.899027mm"
            pcbY="-1.295146mm"
            width="0.999998mm"
            height="0.3999992mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin19"]}
            pcbX="3.899027mm"
            pcbY="-1.945132mm"
            width="0.999998mm"
            height="0.3999992mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="3.899027mm"
            pcbY="-2.595118mm"
            width="0.999998mm"
            height="0.3999992mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="3.899027mm"
            pcbY="-3.445256mm"
            width="0.999998mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin28"]}
            pcbX="2.799969mm"
            pcbY="3.904234mm"
            width="0.5999988mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin29"]}
            pcbX="2.049907mm"
            pcbY="3.901694mm"
            width="0.3999992mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin30"]}
            pcbX="1.399921mm"
            pcbY="3.901694mm"
            width="0.3999992mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin31"]}
            pcbX="0.749935mm"
            pcbY="3.901694mm"
            width="0.3999992mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin32"]}
            pcbX="-0.000127mm"
            pcbY="3.904234mm"
            width="0.5999988mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin33"]}
            pcbX="1.227963mm"
            pcbY="0mm"
            width="3.7500052mm"
            height="6.1999876mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="2.785999mm"
            pcbY="-3.904234mm"
            width="0.5999988mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="2.035937mm"
            pcbY="-3.899154mm"
            width="0.3999992mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="1.386205mm"
            pcbY="-3.899154mm"
            width="0.3999992mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="0.735965mm"
            pcbY="-3.899154mm"
            width="0.3999992mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="-0.014097mm"
            pcbY="-3.90398mm"
            width="0.5999988mm"
            height="0.999998mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -0.6911086000001205, y: -4.061231399999997 },
              { x: -3.4200592000000825, y: -4.061231399999997 },
              { x: -3.4294826000000285, y: -4.0705785999998625 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.7102093999999397, y: 4.123588400000017 },
              { x: -3.4392108000001826, y: 4.123588400000017 },
              { x: -3.1287212000000864, y: 4.117009800000005 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.204089mm"
            pcbY="5.416552mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -5.0514890000000605, y: 4.666552000000024 },
              { x: 4.643310999999926, y: 4.666552000000024 },
              { x: 4.643310999999926, y: -4.647247999999877 },
              { x: -5.0514890000000605, y: -4.647247999999877 },
              { x: -5.0514890000000605, y: 4.666552000000024 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C1858363.obj?uuid=4eeb9f4169ba4f0b85ac5014434b3b0d",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C1858363.step?uuid=4eeb9f4169ba4f0b85ac5014434b3b0d",
        pcbRotationOffset: 180,
        modelOriginPosition: {
          x: -0.049923700000135796,
          y: -0.000038099999983387534,
          z: -0.02,
        },
      }}
      {...props}
    />
  );
};

export default LMG3410R150RWHR;
