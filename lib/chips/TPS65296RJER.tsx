import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VLDOIN"],
  pin2: ["VDDQ"],
  pin3: ["AGND"],
  pin4: ["VDDQSNS"],
  pin5: ["VDD2SNS"],
  pin6: ["VDDQREF"],
  pin7: ["PVIN"],
  pin8: ["PGOOD"],
  pin9: ["PGND"],
  pin10: ["VDDQ_EN"],
  pin11: ["VDD_EN"],
  pin12: ["VDD1SNS"],
  pin13: ["VCC_5V"],
  pin14: ["PVIN_VDD1"],
  pin15: ["SW_VDD1"],
  pin16: ["PGND_VDD1"],
  pin17: ["SW"],
  pin18: ["BST"],
} as const;

const pinAttributes = {
  pin3: { requiresGround: true },
  pin9: { requiresGround: true },
} as const;

export const TPS65296RJER = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C1849557"],
      }}
      manufacturerPartNumber="TPS65296RJER"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin2"]}
            pcbX="-1.3999718mm"
            pcbY="0.7500112mm"
            width="0.5999988mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-1.3999718mm"
            pcbY="0.2501392mm"
            width="0.5999988mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-1.3999718mm"
            pcbY="-0.2499868mm"
            width="0.5999988mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-1.3999718mm"
            pcbY="-0.7501128mm"
            width="0.5999988mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-0.4474718mm"
            pcbY="-0.5959348mm"
            width="0.2500122mm"
            height="2.237994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="0.0000762mm"
            pcbY="-1.3650468mm"
            width="0.2500122mm"
            height="0.6999986mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="0.4524502mm"
            pcbY="-0.5959348mm"
            width="0.2500122mm"
            height="2.237994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="1.3998702mm"
            pcbY="-0.7501128mm"
            width="0.5999988mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="1.3998702mm"
            pcbY="-0.2499868mm"
            width="0.5999988mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="1.3998702mm"
            pcbY="0.2501392mm"
            width="0.5999988mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="1.3998702mm"
            pcbY="0.7500112mm"
            width="0.5999988mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="0.6526022mm"
            pcbY="1.4149832mm"
            width="0.2500122mm"
            height="0.5999988mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="0.0000762mm"
            pcbY="0.5935472mm"
            width="0.2500122mm"
            height="2.2429978mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="-0.6473698mm"
            pcbY="1.4149832mm"
            width="0.2500122mm"
            height="0.5999988mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            points={[
              { x: "1.6999712mm", y: "1.3850366mm" },
              { x: "1.6999712mm", y: "1.1250422mm" },
              { x: "1.1099546mm", y: "1.1250422mm" },
              { x: "1.1099546mm", y: "1.7150334mm" },
              { x: "1.3999718mm", y: "1.7150334mm" },
              { x: "1.3999718mm", y: "1.3850366mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin1"]}
            points={[
              { x: "-1.3699998mm", y: "1.7150334mm" },
              { x: "-1.1100054mm", y: "1.7150334mm" },
              { x: "-1.1100054mm", y: "1.1250168mm" },
              { x: "-1.6999966mm", y: "1.1250168mm" },
              { x: "-1.6999966mm", y: "1.415034mm" },
              { x: "-1.3699998mm", y: "1.415034mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin10"]}
            points={[
              { x: "1.3699998mm", y: "-1.7149572mm" },
              { x: "1.1100054mm", y: "-1.7149572mm" },
              { x: "1.1100054mm", y: "-1.1249406mm" },
              { x: "1.6999966mm", y: "-1.1249406mm" },
              { x: "1.6999966mm", y: "-1.4149578mm" },
              { x: "1.3699998mm", y: "-1.4149578mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin6"]}
            points={[
              { x: "-1.3699998mm", y: "-1.7149572mm" },
              { x: "-1.1100054mm", y: "-1.7149572mm" },
              { x: "-1.1100054mm", y: "-1.1249406mm" },
              { x: "-1.6999966mm", y: "-1.1249406mm" },
              { x: "-1.6999966mm", y: "-1.4149578mm" },
              { x: "-1.3699998mm", y: "-1.4149578mm" },
            ]}
            shape="polygon"
          />
          <silkscreenpath
            route={[
              { x: -0.805180000000064, y: 1.4999969999998939 },
              { x: -0.9298685999998497, y: 1.4999969999998939 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 0.9297923999999966, y: 1.4999969999998939 },
              { x: 0.8050784000000704, y: 1.4999969999998939 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.805180000000064, y: -1.4999462000000676 },
              { x: -0.9298685999998497, y: -1.4999462000000676 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 0.9298686000000771, y: -1.4999462000000676 },
              { x: 0.8050784000000704, y: -1.4999462000000676 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.9023838000000524, y: 1.3972031999999217 },
              { x: -1.906711220061311, y: 1.3643331812718316 },
              { x: -1.919398573719377, y: 1.3337031999999454 },
              { x: -1.9395812387894011, y: 1.307400638789204 },
              { x: -1.9658838000000287, y: 1.2872179737194074 },
              { x: -1.9965137812720286, y: 1.2745306200612276 },
              { x: -2.029383800000005, y: 1.2702031999998553 },
              { x: -2.0622538187279815, y: 1.2745306200612276 },
              { x: -2.0928837999999814, y: 1.2872179737194074 },
              { x: -2.1191863612107227, y: 1.307400638789204 },
              { x: -2.1393690262805194, y: 1.3337031999999454 },
              { x: -2.152056379938699, y: 1.3643331812718316 },
              { x: -2.1563838000000715, y: 1.3972031999999217 },
              { x: -2.152056379938699, y: 1.4300732187278982 },
              { x: -2.1393690262805194, y: 1.460703199999898 },
              { x: -2.1191863612107227, y: 1.4870057612106393 },
              { x: -2.0928837999999814, y: 1.5071884262805497 },
              { x: -2.0622538187279815, y: 1.5198757799386158 },
              { x: -2.029383800000005, y: 1.5242031999998744 },
              { x: -1.9965137812720286, y: 1.5198757799386158 },
              { x: -1.9658838000000287, y: 1.5071884262805497 },
              { x: -1.9395812387894011, y: 1.4870057612106393 },
              { x: -1.919398573719377, y: 1.460703199999898 },
              { x: -1.906711220061311, y: 1.4300732187278982 },
              { x: -1.9023838000000524, y: 1.3972031999999217 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.2198878mm"
            pcbY="2.7025112mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -2.400287800000001, y: 1.9525112000000036 },
              { x: 1.9605121999999255, y: 1.9525112000000036 },
              { x: 1.9605121999999255, y: -1.97648879999997 },
              { x: -2.400287800000001, y: -1.97648879999997 },
              { x: -2.400287800000001, y: 1.9525112000000036 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C1849557.obj?uuid=bc5c0769fe184f889a4f2bc9c663b263",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C1849557.step?uuid=bc5c0769fe184f889a4f2bc9c663b263",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: -0.0026162000000340413,
          y: -0.00007619999996677507,
          z: -0.02,
        },
      }}
      {...props}
    />
  );
};

export default TPS65296RJER;
