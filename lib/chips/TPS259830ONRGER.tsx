import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["IN1"],
  pin2: ["IN2"],
  pin3: ["IN3"],
  pin4: ["GND1"],
  pin5: ["GND2"],
  pin6: ["pin6"],
  pin7: ["ITIMER"],
  pin8: ["ILIM"],
  pin9: ["IMON"],
  pin10: ["RETRY_DLY"],
  pin11: ["NRETRY"],
  pin12: ["OVLO"],
  pin13: ["PG"],
  pin14: ["GND3"],
  pin15: ["pin15"],
  pin16: ["IN4"],
  pin17: ["OUT1"],
  pin18: ["OUT2"],
  pin19: ["OUT3"],
  pin20: ["OUT4"],
  pin21: ["OUT5"],
  pin22: ["OUT6"],
  pin23: ["OUT7"],
  pin24: ["OUT8"],
  pin25: ["IN5"],
  pin26: ["GND4"],
} as const;

const pinAttributes = {
  pin4: { requiresGround: true },
  pin5: { requiresGround: true },
  pin14: { requiresGround: true },
  pin26: { requiresGround: true },
} as const;

export const TPS259830ONRGER = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C20611808"],
      }}
      manufacturerPartNumber="TPS259830ONRGER"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-1.999742mm"
            pcbY="1.250188mm"
            width="0.7999984mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-1.999742mm"
            pcbY="0.75057mm"
            width="0.7999984mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-1.999742mm"
            pcbY="0.250698mm"
            width="0.7999984mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-1.999742mm"
            pcbY="-0.25019mm"
            width="0.7999984mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-1.999742mm"
            pcbY="-0.750316mm"
            width="0.7999984mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-1.999742mm"
            pcbY="-1.250696mm"
            width="0.7999984mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-1.249934mm"
            pcbY="-2.000504mm"
            width="0.2500122mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-0.749808mm"
            pcbY="-2.000504mm"
            width="0.2500122mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="-0.249174mm"
            pcbY="-2.000504mm"
            width="0.2500122mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="0.251206mm"
            pcbY="-2.000504mm"
            width="0.2500122mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="0.751586mm"
            pcbY="-2.000504mm"
            width="0.2500122mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="1.250696mm"
            pcbY="-2.000504mm"
            width="0.2500122mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="1.999742mm"
            pcbY="-1.24968mm"
            width="0.7999984mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="1.999742mm"
            pcbY="-0.749046mm"
            width="0.7999984mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="1.999742mm"
            pcbY="-0.24892mm"
            width="0.7999984mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="1.999742mm"
            pcbY="0.250444mm"
            width="0.7999984mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="1.999742mm"
            pcbY="0.7493mm"
            width="0.7999984mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="1.999742mm"
            pcbY="1.249934mm"
            width="0.7999984mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin19"]}
            pcbX="1.250188mm"
            pcbY="2.000504mm"
            width="0.2500122mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin20"]}
            pcbX="0.749808mm"
            pcbY="2.000504mm"
            width="0.2500122mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin21"]}
            pcbX="0.250698mm"
            pcbY="2.000504mm"
            width="0.2500122mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin22"]}
            pcbX="-0.248412mm"
            pcbY="2.000504mm"
            width="0.2500122mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin23"]}
            pcbX="-0.749046mm"
            pcbY="2.000504mm"
            width="0.2500122mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin24"]}
            pcbX="-1.249172mm"
            pcbY="2.000504mm"
            width="0.2500122mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin26"]}
            pcbX="0mm"
            pcbY="-0.924814mm"
            width="2.6999946mm"
            height="0.850011mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin25"]}
            pcbX="0mm"
            pcbY="0.625094mm"
            width="2.6999946mm"
            height="1.4500098mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -2.0001737999999705, y: 2.0000214000001506 },
              { x: -2.0001737999999705, y: 1.6311118000000988 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.9997674000001098, y: 2.0000214000001506 },
              { x: 1.6310610000000452, y: 2.0000214000001506 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.6301974000000428, y: 2.0000214000001506 },
              { x: -2.0001737999999705, y: 2.0000214000001506 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.0001737999999705, y: -1.9999959999998964 },
              { x: -1.6309593999999379, y: -1.9999959999998964 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.6328390000001036, y: -1.9999959999998964 },
              { x: 1.9997674000001098, y: -1.9999959999998964 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.9997674000001098, y: 2.0000214000001506 },
              { x: 1.9997674000001098, y: 1.630857800000058 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.9997674000001098, y: -1.6306545999998434 },
              { x: 1.9997674000001098, y: -1.9999959999998964 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.0001737999999705, y: -1.6316451999998662 },
              { x: -2.0001737999999705, y: -1.9999959999998964 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.334006000000045, y: 1.7780000000001337 },
              { x: -2.336697655278158, y: 1.757554848351333 },
              { x: -2.3445891892534974, y: 1.7385030000002644 },
              { x: -2.3571428069269587, y: 1.7221428069270814 },
              { x: -2.373503000000028, y: 1.7095891892536201 },
              { x: -2.3925548483512102, y: 1.7016976552782808 },
              { x: -2.413000000000011, y: 1.6990060000001677 },
              { x: -2.4334451516488116, y: 1.7016976552782808 },
              { x: -2.452496999999994, y: 1.7095891892536201 },
              { x: -2.468857193073063, y: 1.7221428069270814 },
              { x: -2.4814108107465245, y: 1.7385030000002644 },
              { x: -2.489302344721864, y: 1.757554848351333 },
              { x: -2.491993999999977, y: 1.7780000000001337 },
              { x: -2.489302344721864, y: 1.7984451516489344 },
              { x: -2.4814108107465245, y: 1.817497000000003 },
              { x: -2.468857193073063, y: 1.833857193073186 },
              { x: -2.452496999999994, y: 1.8464108107466473 },
              { x: -2.4334451516488116, y: 1.8543023447219866 },
              { x: -2.413000000000011, y: 1.8569940000000997 },
              { x: -2.3925548483512102, y: 1.8543023447219866 },
              { x: -2.373503000000028, y: 1.8464108107466473 },
              { x: -2.3571428069269587, y: 1.833857193073186 },
              { x: -2.3445891892534974, y: 1.817497000000003 },
              { x: -2.336697655278158, y: 1.7984451516489344 },
              { x: -2.334006000000045, y: 1.7780000000001337 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.128016mm"
            pcbY="3.41173mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -2.892616000000089, y: 2.661730000000148 },
              { x: 2.6365839999999707, y: 2.661730000000148 },
              { x: 2.6365839999999707, y: -2.638869999999997 },
              { x: -2.892616000000089, y: -2.638869999999997 },
              { x: -2.892616000000089, y: 2.661730000000148 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C20611808.obj?uuid=64fd2036b868447d819998b52192bdab",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C20611808.step?uuid=64fd2036b868447d819998b52192bdab",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: 0.00010159999987990886,
          y: -0.00010160000010728254,
          z: -0.01,
        },
      }}
      {...props}
    />
  );
};

export default TPS259830ONRGER;
