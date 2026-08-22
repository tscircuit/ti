import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["PGND2"],
  pin2: ["AC1"],
  pin3: ["BOOT1"],
  pin4: ["OUT"],
  pin5: ["CLAMP1"],
  pin6: ["COMM1"],
  pin7: ["CHG"],
  pin8: ["AD_EN"],
  pin9: ["AD"],
  pin10: ["EN1"],
  pin11: ["EN2"],
  pin12: ["ILIM"],
  pin13: ["pin13"],
  pin14: ["FOD"],
  pin15: ["COMM2"],
  pin16: ["CLAMP2"],
  pin17: ["BOOT2"],
  pin18: ["RECT"],
  pin19: ["AC2"],
  pin20: ["PGND1"],
  pin21: ["EP"],
} as const;

const pinAttributes = {
  pin1: { requiresGround: true },
  pin20: { requiresGround: true },
} as const;

export const BQ51013CRHLR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C43043533"],
      }}
      manufacturerPartNumber="BQ51013CRHLR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin20"]}
            pcbX="-2.249932mm"
            pcbY="0.750062mm"
            width="0.850011mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin19"]}
            pcbX="-1.75006mm"
            pcbY="1.748028mm"
            width="0.2800096mm"
            height="0.850011mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="-1.249934mm"
            pcbY="1.748028mm"
            width="0.2800096mm"
            height="0.850011mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="-0.750062mm"
            pcbY="1.748028mm"
            width="0.2800096mm"
            height="0.850011mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="-0.249936mm"
            pcbY="1.748028mm"
            width="0.2800096mm"
            height="0.850011mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="0.249936mm"
            pcbY="1.748028mm"
            width="0.2800096mm"
            height="0.850011mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="0.750062mm"
            pcbY="1.748028mm"
            width="0.2800096mm"
            height="0.850011mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="1.251458mm"
            pcbY="1.75006mm"
            width="0.2800096mm"
            height="0.850011mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="1.751584mm"
            pcbY="1.75006mm"
            width="0.2800096mm"
            height="0.850011mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            points={[
              { x: "2.6749502mm", y: "0.8880348mm" },
              { x: "2.6749502mm", y: "0.6080252mm" },
              { x: "1.8249392mm", y: "0.6080252mm" },
              { x: "1.8249392mm", y: "0.8880348mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="2.249932mm"
            pcbY="-0.752094mm"
            width="0.850011mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="1.751584mm"
            pcbY="-1.75006mm"
            width="0.2800096mm"
            height="0.850011mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="1.251458mm"
            pcbY="-1.75006mm"
            width="0.2800096mm"
            height="0.850011mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="0.751586mm"
            pcbY="-1.75006mm"
            width="0.2800096mm"
            height="0.850011mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0.25146mm"
            pcbY="-1.75006mm"
            width="0.2800096mm"
            height="0.850011mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-0.248412mm"
            pcbY="-1.75006mm"
            width="0.2800096mm"
            height="0.850011mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-0.748538mm"
            pcbY="-1.75006mm"
            width="0.2800096mm"
            height="0.850011mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-1.24841mm"
            pcbY="-1.75006mm"
            width="0.2800096mm"
            height="0.850011mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-1.748536mm"
            pcbY="-1.75006mm"
            width="0.2800096mm"
            height="0.850011mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="-2.249932mm"
            pcbY="-0.752094mm"
            width="0.850011mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin21"]}
            points={[
              { x: "-1.5999968mm", y: "1.0999978mm" },
              { x: "1.5999968mm", y: "1.0999978mm" },
              { x: "1.5999968mm", y: "0.3899916mm" },
              { x: "2.675001mm", y: "0.3899916mm" },
              { x: "2.675001mm", y: "0.1100074mm" },
              { x: "1.7500092mm", y: "0.1100074mm" },
              { x: "1.7500092mm", y: "-0.1100074mm" },
              { x: "2.675001mm", y: "-0.1100074mm" },
              { x: "2.675001mm", y: "-0.3899916mm" },
              { x: "1.5999968mm", y: "-0.3899916mm" },
              { x: "1.5999968mm", y: "-1.0999978mm" },
              { x: "-1.5999968mm", y: "-1.0999978mm" },
              { x: "-1.5999968mm", y: "-0.3899916mm" },
              { x: "-2.675001mm", y: "-0.3899916mm" },
              { x: "-2.675001mm", y: "-0.1100074mm" },
              { x: "-1.7500092mm", y: "-0.1100074mm" },
              { x: "-1.7500092mm", y: "0.1100074mm" },
              { x: "-2.675001mm", y: "0.1100074mm" },
              { x: "-2.675001mm", y: "0.3899916mm" },
              { x: "-1.5999968mm", y: "0.3899916mm" },
            ]}
            shape="polygon"
          />
          <silkscreenpath
            route={[
              { x: -2.413000000000011, y: -1.77800000000002 },
              { x: -2.1196046000000024, y: -1.77800000000002 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.413000000000011, y: 1.7779999999999063 },
              { x: -2.12112860000002, y: 1.7779999999999063 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 2.1226779999999508, y: 1.7779999999999063 },
              { x: 2.2859999999999445, y: 1.7779999999999063 },
              { x: 2.2859999999999445, y: 1.1191239999999425 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 2.2859999999999445, y: -1.1231626000000006 },
              { x: 2.2859999999999445, y: -1.77800000000002 },
              { x: 2.1226779999999508, y: -1.77800000000002 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.413000000000011, y: 1.7779999999999063 },
              { x: -2.413000000000011, y: 1.1211052000001018 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.413000000000011, y: -1.1231626000000006 },
              { x: -2.413000000000011, y: -1.77800000000002 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.7939999999999827, y: -1.5240000000001146 },
              { x: -2.7983274200612414, y: -1.5568700187279774 },
              { x: -2.811014773719421, y: -1.587500000000091 },
              { x: -2.8311974387893315, y: -1.6138025612107185 },
              { x: -2.857499999999959, y: -1.633985226280629 },
              { x: -2.8881299812720727, y: -1.6466725799388087 },
              { x: -2.921000000000049, y: -1.6510000000000673 },
              { x: -2.9538700187280256, y: -1.6466725799388087 },
              { x: -2.9845000000000255, y: -1.633985226280629 },
              { x: -3.0108025612107667, y: -1.6138025612107185 },
              { x: -3.030985226280677, y: -1.587500000000091 },
              { x: -3.043672579938857, y: -1.5568700187279774 },
              { x: -3.048000000000002, y: -1.5240000000001146 },
              { x: -3.043672579938857, y: -1.4911299812720245 },
              { x: -3.030985226280677, y: -1.4605000000001382 },
              { x: -3.0108025612107667, y: -1.434197438789397 },
              { x: -2.9845000000000255, y: -1.4140147737196003 },
              { x: -2.9538700187280256, y: -1.4013274200614205 },
              { x: -2.921000000000049, y: -1.3970000000000482 },
              { x: -2.8881299812720727, y: -1.4013274200614205 },
              { x: -2.857499999999959, y: -1.4140147737196003 },
              { x: -2.8311974387893315, y: -1.434197438789397 },
              { x: -2.811014773719421, y: -1.4605000000001382 },
              { x: -2.7983274200612414, y: -1.4911299812720245 },
              { x: -2.7939999999999827, y: -1.5240000000001146 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.1905mm"
            pcbY="3.182368mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -3.298000000000002, y: 2.4323679999999968 },
              { x: 2.9169999999999163, y: 2.4323679999999968 },
              { x: 2.9169999999999163, y: -2.4110319999999774 },
              { x: -3.298000000000002, y: -2.4110319999999774 },
              { x: -3.298000000000002, y: 2.4323679999999968 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C43043533.obj?uuid=d37a54d40c264d5d8e19accad3495803",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C43043533.step?uuid=d37a54d40c264d5d8e19accad3495803",
        pcbRotationOffset: 90,
        modelOriginPosition: {
          x: -0.000012700000070253736,
          y: -0.000012700000070253736,
          z: 0,
        },
      }}
      {...props}
    />
  );
};

export default BQ51013CRHLR;
