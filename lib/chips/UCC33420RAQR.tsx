import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["VINP"],
  pin3: ["GNDP2"],
  pin6: ["GNDP1"],
  pin7: ["SEL"],
  pin8: ["VCC"],
  pin9: ["GNDS2"],
  pin12: ["GNDS1"],
} as const;

const pinAttributes = {
  pin8: { requiresPower: true },
} as const;

export const UCC33420RAQR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C46461551"],
      }}
      manufacturerPartNumber="UCC33420RAQR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-2.400046mm"
            pcbY="1.624965mm"
            width="0.5999988mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-2.400046mm"
            pcbY="0.974979mm"
            width="0.5999988mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-2.400046mm"
            pcbY="-1.624965mm"
            width="0.5999988mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="2.400046mm"
            pcbY="-1.624965mm"
            width="0.5999988mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="2.400046mm"
            pcbY="-0.974979mm"
            width="0.5999988mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="2.400046mm"
            pcbY="1.624965mm"
            width="0.5999988mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            points={[
              { x: "-2.6999946mm", y: "0.4749292mm" },
              { x: "-2.6999946mm", y: "0.1749044mm" },
              { x: "-2.3998936mm", y: "0.1749044mm" },
              { x: "-2.3998936mm", y: "-0.1750822mm" },
              { x: "-2.6999946mm", y: "-0.1750822mm" },
              { x: "-2.6999946mm", y: "-0.475107mm" },
              { x: "-2.3998936mm", y: "-0.475107mm" },
              { x: "-2.3998936mm", y: "-0.8250936mm" },
              { x: "-2.6999946mm", y: "-0.8250936mm" },
              { x: "-2.6999946mm", y: "-1.1250676mm" },
              { x: "-2.3998936mm", y: "-1.1250676mm" },
              { x: "-2.3998936mm", y: "-1.1251946mm" },
              { x: "-2.0998942mm", y: "-1.1251946mm" },
              { x: "-2.0998942mm", y: "0.4748784mm" },
              { x: "-2.0999958mm", y: "0.4749292mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin9"]}
            points={[
              { x: "2.6998676mm", y: "-0.4749292mm" },
              { x: "2.6998676mm", y: "-0.1749044mm" },
              { x: "2.3997666mm", y: "-0.1749044mm" },
              { x: "2.3997666mm", y: "0.1750822mm" },
              { x: "2.6998676mm", y: "0.1750822mm" },
              { x: "2.6998676mm", y: "0.475107mm" },
              { x: "2.3997666mm", y: "0.475107mm" },
              { x: "2.3997666mm", y: "0.8250936mm" },
              { x: "2.6998676mm", y: "0.8250936mm" },
              { x: "2.6998676mm", y: "1.1250676mm" },
              { x: "2.3997666mm", y: "1.1250676mm" },
              { x: "2.3997666mm", y: "1.1251692mm" },
              { x: "2.0997672mm", y: "1.1251692mm" },
              { x: "2.0997672mm", y: "-0.4748784mm" },
              { x: "2.0998688mm", y: "-0.4749292mm" },
            ]}
            shape="polygon"
          />
          <silkscreenpath
            route={[
              { x: 2.499944199999959, y: -2.0000468000000637 },
              { x: -2.5000458000000663, y: -2.0000468000000637 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.5000458000000663, y: 1.9999451999999565 },
              { x: 2.499944199999959, y: 1.9999451999999565 },
              { x: 2.499944199999959, y: 1.9550887999999986 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.5000458000000663, y: 1.9999451999999565 },
              { x: -2.5000458000000663, y: 1.9551141999999118 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.9230320000000347, y: 1.6249649999999747 },
              { x: -2.9273594200612933, y: 1.5920949812719982 },
              { x: -2.940046773719587, y: 1.5614649999999983 },
              { x: -2.9602294387893835, y: 1.535162438789257 },
              { x: -2.986532000000011, y: 1.5149797737193467 },
              { x: -3.017161981272011, y: 1.5022924200612806 },
              { x: -3.050032000000101, y: 1.497965000000022 },
              { x: -3.0829020187280776, y: 1.5022924200612806 },
              { x: -3.1135320000000775, y: 1.5149797737193467 },
              { x: -3.1398345612108187, y: 1.535162438789257 },
              { x: -3.160017226280729, y: 1.5614649999999983 },
              { x: -3.172704579938795, y: 1.5920949812719982 },
              { x: -3.177032000000054, y: 1.6249649999999747 },
              { x: -3.172704579938795, y: 1.6578350187280648 },
              { x: -3.160017226280729, y: 1.6884650000000647 },
              { x: -3.1398345612108187, y: 1.7147675612106923 },
              { x: -3.1135320000000775, y: 1.734950226280489 },
              { x: -3.0829020187280776, y: 1.7476375799387824 },
              { x: -3.050032000000101, y: 1.751965000000041 },
              { x: -3.017161981272011, y: 1.7476375799387824 },
              { x: -2.986532000000011, y: 1.734950226280489 },
              { x: -2.9602294387893835, y: 1.7147675612106923 },
              { x: -2.940046773719587, y: 1.6884650000000647 },
              { x: -2.9273594200612933, y: 1.6578350187280648 },
              { x: -2.9230320000000347, y: 1.6249649999999747 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.253746mm"
            pcbY="3.031365mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -3.4374460000000227, y: 2.2813650000000507 },
              { x: 2.9299539999999524, y: 2.2813650000000507 },
              { x: 2.9299539999999524, y: -2.257235000000037 },
              { x: -3.4374460000000227, y: -2.257235000000037 },
              { x: -3.4374460000000227, y: 2.2813650000000507 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C46461551.obj?uuid=b5bcbb964f3244d79f3a7508063243c0",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C46461551.step?uuid=b5bcbb964f3244d79f3a7508063243c0",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: 0.000038099999983387534,
          y: -0.004949199999946252,
          z: -0.02,
        },
      }}
      {...props}
    />
  );
};

export default UCC33420RAQR;
