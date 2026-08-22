import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["BTST"],
  pin2: ["REGN"],
  pin3: ["PG"],
  pin4: ["ILIM"],
  pin5: ["TS_BIAS"],
  pin6: ["TS"],
  pin7: ["QON"],
  pin8: ["BAT"],
  pin9: ["SYS"],
  pin10: ["STAT"],
  pin11: ["INT"],
  pin12: ["SDA"],
  pin13: ["SCL"],
  pin14: ["CE"],
  pin15: ["GND"],
  pin16: ["SW"],
  pin17: ["PMID"],
  pin18: ["VBUS"],
} as const;

const pinAttributes = {
  pin15: { requiresGround: true },
} as const;

export const BQ25622RYKR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C6135214"],
      }}
      manufacturerPartNumber="BQ25622RYKR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin10"]}
            points={[
              { x: "1.80122195mm", y: "-0.73802875mm" },
              { x: "1.80122195mm", y: "-0.96200595mm" },
              { x: "1.13691035mm", y: "-0.96200595mm" },
              { x: "1.13691035mm", y: "-1.55136215mm" },
              { x: "0.91293315mm", y: "-1.55136215mm" },
              { x: "0.91293315mm", y: "-0.75598655mm" },
              { x: "0.91252675mm", y: "-0.73904475mm" },
              { x: "1.00584635mm", y: "-0.73802875mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin14"]}
            points={[
              { x: "1.80122195mm", y: "0.72399525mm" },
              { x: "1.80122195mm", y: "0.94797245mm" },
              { x: "1.13691035mm", y: "0.94797245mm" },
              { x: "1.13691035mm", y: "1.53732865mm" },
              { x: "0.91293315mm", y: "1.53732865mm" },
              { x: "0.91293315mm", y: "0.74195305mm" },
              { x: "0.91252675mm", y: "0.72501125mm" },
              { x: "1.00584635mm", y: "0.72399525mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin5"]}
            points={[
              { x: "-1.80136165mm", y: "-0.73800335mm" },
              { x: "-1.80136165mm", y: "-0.96198055mm" },
              { x: "-1.13705005mm", y: "-0.96198055mm" },
              { x: "-1.13705005mm", y: "-1.55133675mm" },
              { x: "-0.91307285mm", y: "-1.55133675mm" },
              { x: "-0.91307285mm", y: "-0.75596115mm" },
              { x: "-0.91266645mm", y: "-0.73901935mm" },
              { x: "-1.00598605mm", y: "-0.73800335mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin1"]}
            points={[
              { x: "-1.80136165mm", y: "0.73806685mm" },
              { x: "-1.80136165mm", y: "0.96204405mm" },
              { x: "-1.13705005mm", y: "0.96204405mm" },
              { x: "-1.13705005mm", y: "1.55140025mm" },
              { x: "-0.91307285mm", y: "1.55140025mm" },
              { x: "-0.91307285mm", y: "0.75602465mm" },
              { x: "-0.91266645mm", y: "0.73908285mm" },
              { x: "-1.00598605mm", y: "0.73806685mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="-0.62503685mm"
            pcbY="1.15363625mm"
            width="0.2240026mm"
            height="0.795401mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="-0.22498685mm"
            pcbY="0.97634425mm"
            width="0.2240026mm"
            height="1.1500104mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="0.17506315mm"
            pcbY="0.97634425mm"
            width="0.2240026mm"
            height="1.1500104mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="0.57485915mm"
            pcbY="0.97609025mm"
            width="0.2240026mm"
            height="1.1500104mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="1.40366115mm"
            pcbY="0.39290625mm"
            width="0.795401mm"
            height="0.2240026mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="1.40366115mm"
            pcbY="-0.00688975mm"
            width="0.795401mm"
            height="0.2240026mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="1.40366115mm"
            pcbY="-0.40693975mm"
            width="0.795401mm"
            height="0.2240026mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="0.57485915mm"
            pcbY="-0.97589975mm"
            width="0.2240026mm"
            height="1.1500104mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="0.17506315mm"
            pcbY="-0.97589975mm"
            width="0.2240026mm"
            height="1.1500104mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-0.22498685mm"
            pcbY="-1.15369975mm"
            width="0.2240026mm"
            height="0.795401mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-0.62503685mm"
            pcbY="-1.15369975mm"
            width="0.2240026mm"
            height="0.795401mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-1.40354685mm"
            pcbY="-0.40693975mm"
            width="0.795401mm"
            height="0.2240026mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-1.40354685mm"
            pcbY="-0.00688975mm"
            width="0.795401mm"
            height="0.2240026mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-1.40354685mm"
            pcbY="0.39290625mm"
            width="0.795401mm"
            height="0.2240026mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -1.500066850000053, y: 1.1661838500000385 },
              { x: -1.500066850000053, y: 1.3000164500000437 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.3411898500000916, y: -1.2999783499999467 },
              { x: -1.500066850000053, y: -1.2999783499999467 },
              { x: -1.500066850000053, y: -1.1661203499999147 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.4999271499998486, y: -1.1661457499999415 },
              { x: 1.4999271499998486, y: -1.2999783499999467 },
              { x: 1.341050150000001, y: -1.2999783499999467 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.341050150000001, y: 1.3000164500000437 },
              { x: 1.4999271499998486, y: 1.3000164500000437 },
              { x: 1.4999271499998486, y: 1.152112250000073 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.500066850000053, y: 1.3000164500000437 },
              { x: -1.3411898500000916, y: 1.3000164500000437 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.9618388500000492, y: 1.1079162500001303 },
              { x: -1.965248857008305, y: 1.0820146752424762 },
              { x: -1.975246491690882, y: 1.0578782500000443 },
              { x: -1.9911504317659592, y: 1.0371518317660957 },
              { x: -2.0118768500000215, y: 1.0212478916910186 },
              { x: -2.0360132752423397, y: 1.0112502570084416 },
              { x: -2.0619148499999937, y: 1.0078402500001857 },
              { x: -2.0878164247577615, y: 1.0112502570084416 },
              { x: -2.1119528500000797, y: 1.0212478916910186 },
              { x: -2.1326792682340283, y: 1.0371518317660957 },
              { x: -2.1485832083091054, y: 1.0578782500000443 },
              { x: -2.158580842991796, y: 1.0820146752424762 },
              { x: -2.1619908499999383, y: 1.1079162500001303 },
              { x: -2.158580842991796, y: 1.1338178247577844 },
              { x: -2.1485832083091054, y: 1.1579542500001025 },
              { x: -2.1326792682340283, y: 1.1786806682341648 },
              { x: -2.1119528500000797, y: 1.194584608309242 },
              { x: -2.0878164247577615, y: 1.204582242991819 },
              { x: -2.0619148499999937, y: 1.2079922500000748 },
              { x: -2.0360132752423397, y: 1.204582242991819 },
              { x: -2.0118768500000215, y: 1.194584608309242 },
              { x: -1.9911504317659592, y: 1.1786806682341648 },
              { x: -1.975246491690882, y: 1.1579542500001025 },
              { x: -1.965248857008305, y: 1.1338178247577844 },
              { x: -1.9618388500000492, y: 1.1079162500001303 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.16986885mm"
            pcbY="2.55902025mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -2.4010688500000015, y: 1.8090202500000032 },
              { x: 2.061331149999887, y: 1.8090202500000032 },
              { x: 2.061331149999887, y: -1.7897797499999797 },
              { x: -2.4010688500000015, y: -1.7897797499999797 },
              { x: -2.4010688500000015, y: 1.8090202500000032 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C6135214.obj?uuid=521b33c58fd54dc5b27148cadd8beae9",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C6135214.step?uuid=521b33c58fd54dc5b27148cadd8beae9",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: 0.00006985000004533504,
          y: 0.000019049999991693767,
          z: -0.02,
        },
      }}
      {...props}
    />
  );
};

export default BQ25622RYKR;
