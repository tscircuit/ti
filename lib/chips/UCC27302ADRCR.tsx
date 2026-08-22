import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VDD"],
  pin2: ["NC"],
  pin3: ["HB"],
  pin4: ["HO"],
  pin5: ["HS"],
  pin6: ["EN"],
  pin7: ["HI"],
  pin8: ["LI"],
  pin9: ["VSS"],
  pin10: ["LO"],
  pin11: ["EP"],
} as const;

const pinAttributes = {
  pin1: { requiresPower: true },
  pin2: { doNotConnect: true },
  pin9: { requiresGround: true },
} as const;

export const UCC27302ADRCR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C50092311"],
      }}
      manufacturerPartNumber="UCC27302ADRCR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-1.49987mm"
            pcbY="1.0037064mm"
            width="0.7999984mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-1.49987mm"
            pcbY="0.5038344mm"
            width="0.7999984mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-1.49987mm"
            pcbY="0.0037084mm"
            width="0.7999984mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-1.49987mm"
            pcbY="-0.4961636mm"
            width="0.7999984mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-1.49987mm"
            pcbY="-0.9962896mm"
            width="0.7999984mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="1.49987mm"
            pcbY="-0.9962896mm"
            width="0.7999984mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="1.49987mm"
            pcbY="-0.4961636mm"
            width="0.7999984mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="1.49987mm"
            pcbY="0.0037084mm"
            width="0.7999984mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            points={[
              { x: "-0.7584948mm", y: "1.194816mm" },
              { x: "-0.3984752mm", y: "1.194816mm" },
              { x: "-0.3984752mm", y: "1.7100042mm" },
              { x: "-0.0984758mm", y: "1.7100042mm" },
              { x: "-0.0984758mm", y: "1.194816mm" },
              { x: "0.1015238mm", y: "1.194816mm" },
              { x: "0.1015238mm", y: "1.7100042mm" },
              { x: "0.4015232mm", y: "1.7100042mm" },
              { x: "0.4015232mm", y: "1.194816mm" },
              { x: "0.7614666mm", y: "1.194816mm" },
              { x: "0.7614666mm", y: "-1.2051792mm" },
              { x: "0.4015232mm", y: "-1.2051792mm" },
              { x: "0.4015232mm", y: "-1.7100042mm" },
              { x: "0.1015238mm", y: "-1.7100042mm" },
              { x: "0.1015238mm", y: "-1.2051792mm" },
              { x: "-0.0984758mm", y: "-1.2051792mm" },
              { x: "-0.0984758mm", y: "-1.7100042mm" },
              { x: "-0.3984752mm", y: "-1.7100042mm" },
              { x: "-0.3984752mm", y: "-1.2051792mm" },
              { x: "-0.7585202mm", y: "-1.2051792mm" },
              { x: "-0.7585202mm", y: "0.8899906mm" },
              { x: "-0.7584948mm", y: "0.890016mm" },
              { x: "-0.7584948mm", y: "0.890016mm" },
              { x: "-0.7584948mm", y: "0.890016mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="1.49987mm"
            pcbY="1.0037064mm"
            width="0.7999984mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="1.49987mm"
            pcbY="0.5038344mm"
            width="0.7999984mm"
            height="0.2999994mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: 0.000609600000075261, y: 1.4999970000000076 },
              { x: 0.0023621999999932086, y: 1.4999970000000076 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.49852379999993, y: -1.3491209999999683 },
              { x: -1.49852379999993, y: -1.4999970000000076 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.6476491999999325, y: -1.4999970000000076 },
              { x: -1.49852379999993, y: -1.4999970000000076 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 0.0023621999999932086, y: -1.4999970000000076 },
              { x: 0.000609600000075261, y: -1.4999970000000076 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.501495600000112, y: -1.4999970000000076 },
              { x: 0.650621000000001, y: -1.4999970000000076 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 0.6506464000001415, y: 1.4999970000000076 },
              { x: 1.5014702000000852, y: 1.4999970000000076 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.49852379999993, y: 1.4999970000000076 },
              { x: -0.6476491999999325, y: 1.4999970000000076 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.49852379999993, y: 1.4999970000000076 },
              { x: -1.49852379999993, y: 1.3491209999999683 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.501495600000112, y: -1.2941808000000492 },
              { x: 1.501495600000112, y: -1.4999970000000076 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.501495600000112, y: 1.4999970000000076 },
              { x: 1.501495600000112, y: 1.2941299999998819 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.8300699999999779, y: 1.5277084000000514 },
              { x: -1.8326231778360125, y: 1.5083150889505532 },
              { x: -1.840108716494342, y: 1.490243400000054 },
              { x: -1.852016488885738, y: 1.474724888885703 },
              { x: -1.8675349999998616, y: 1.4628171164944206 },
              { x: -1.8856066889503609, y: 1.4553315778360911 },
              { x: -1.904999999999859, y: 1.4527783999999428 },
              { x: -1.9243933110493572, y: 1.4553315778360911 },
              { x: -1.9424649999999701, y: 1.4628171164944206 },
              { x: -1.9579835111140937, y: 1.474724888885703 },
              { x: -1.9698912835053761, y: 1.490243400000054 },
              { x: -1.9773768221637056, y: 1.5083150889505532 },
              { x: -1.9799299999998539, y: 1.5277084000000514 },
              { x: -1.9773768221637056, y: 1.5471017110495495 },
              { x: -1.9698912835053761, y: 1.5651734000000488 },
              { x: -1.9579835111140937, y: 1.580691911114286 },
              { x: -1.9424649999999701, y: 1.5925996835055685 },
              { x: -1.9243933110493572, y: 1.600085222163898 },
              { x: -1.904999999999859, y: 1.6026384000000462 },
              { x: -1.8856066889503609, y: 1.600085222163898 },
              { x: -1.8675349999998616, y: 1.5925996835055685 },
              { x: -1.852016488885738, y: 1.580691911114286 },
              { x: -1.840108716494342, y: 1.5651734000000488 },
              { x: -1.8326231778360125, y: 1.5471017110495495 },
              { x: -1.8300699999999779, y: 1.5277084000000514 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.028194mm"
            pcbY="2.6983964mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -2.22129399999983, y: 1.9483963999999787 },
              { x: 2.164906000000201, y: 1.9483963999999787 },
              { x: 2.164906000000201, y: -1.980603599999995 },
              { x: -2.22129399999983, y: -1.980603599999995 },
              { x: -2.22129399999983, y: 1.9483963999999787 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C50092311.obj?uuid=a784593ea7bb47bab3157096b9efd880",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C50092311.step?uuid=a784593ea7bb47bab3157096b9efd880",
        pcbRotationOffset: 270,
        modelOriginPosition: {
          x: 0.003886200000124518,
          y: 0.000025399999913133797,
          z: 0,
        },
      }}
      {...props}
    />
  );
};

export default UCC27302ADRCR;
