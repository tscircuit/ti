import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["OUT"],
  pin2: ["IN_NEG"],
  pin3: ["V_NEG"],
  pin4: ["IN_POS"],
  pin5: ["V_POS"],
} as const;

export const TLV9061IDPWR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C2057878"],
      }}
      manufacturerPartNumber="TLV9061IDPWR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin5"]}
            points={[
              { x: "0.339979mm", y: "0.130048mm" },
              { x: "0.1799844mm", y: "0.2900172mm" },
              { x: "0.1799844mm", y: "0.3500628mm" },
              { x: "0.5999988mm", y: "0.3500628mm" },
              { x: "0.5999988mm", y: "0.130048mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin4"]}
            points={[
              { x: "0.3400044mm", y: "-0.1300226mm" },
              { x: "0.1800098mm", y: "-0.2900426mm" },
              { x: "0.1800098mm", y: "-0.3500374mm" },
              { x: "0.5999988mm", y: "-0.3500374mm" },
              { x: "0.5999988mm", y: "-0.1300226mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin1"]}
            points={[
              { x: "-0.339979mm", y: "0.1299464mm" },
              { x: "-0.1799844mm", y: "0.2899664mm" },
              { x: "-0.1799844mm", y: "0.3499612mm" },
              { x: "-0.5999988mm", y: "0.3499612mm" },
              { x: "-0.5999988mm", y: "0.1299464mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0.0001016mm"
            pcbY="0.0001016mm"
            width="0.2500122mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            points={[
              { x: "-0.3400044mm", y: "-0.130048mm" },
              { x: "-0.1800098mm", y: "-0.290068mm" },
              { x: "-0.1800098mm", y: "-0.3500628mm" },
              { x: "-0.5999988mm", y: "-0.3500628mm" },
              { x: "-0.5999988mm", y: "-0.130048mm" },
            ]}
            shape="polygon"
          />
          <silkscreenpath
            route={[
              { x: -0.5079238000001851, y: 0.5841237999999294 },
              { x: 0.4920741999999336, y: 0.5841237999999294 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 0.5080761999998913, y: -0.5843016000001171 },
              { x: -0.49192180000011376, y: -0.5843016000001171 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.7118603999999777, y: 0.5078475999998773 },
              { x: -0.7135654035041625, y: 0.49489681262093654 },
              { x: -0.718564220845451, y: 0.4828285999998343 },
              { x: -0.7265161908829896, y: 0.47246539088280315 },
              { x: -0.7368794000000207, y: 0.4645134208452646 },
              { x: -0.748947612621123, y: 0.4595146035039761 },
              { x: -0.7618984000000637, y: 0.4578095999997913 },
              { x: -0.7748491873788907, y: 0.4595146035039761 },
              { x: -0.7869174000001067, y: 0.4645134208452646 },
              { x: -0.7972806091171378, y: 0.47246539088280315 },
              { x: -0.8052325791546764, y: 0.4828285999998343 },
              { x: -0.8102313964958512, y: 0.49489681262093654 },
              { x: -0.811936400000036, y: 0.5078475999998773 },
              { x: -0.8102313964958512, y: 0.5207983873787043 },
              { x: -0.8052325791546764, y: 0.5328665999999203 },
              { x: -0.7972806091171378, y: 0.5432298091169514 },
              { x: -0.7869174000001067, y: 0.55118177915449 },
              { x: -0.7748491873788907, y: 0.5561805964956648 },
              { x: -0.7618984000000637, y: 0.5578855999998495 },
              { x: -0.748947612621123, y: 0.5561805964956648 },
              { x: -0.7368794000000207, y: 0.55118177915449 },
              { x: -0.7265161908829896, y: 0.5432298091169514 },
              { x: -0.718564220845451, y: 0.5328665999999203 },
              { x: -0.7135654035041625, y: 0.5207983873787043 },
              { x: -0.7118603999999777, y: 0.5078475999998773 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.1014984mm"
            pcbY="1.5843016mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -1.062698399999931, y: 0.8343015999998897 },
              { x: 0.859701599999994, y: 0.8343015999998897 },
              { x: 0.859701599999994, y: -0.8340984000000162 },
              { x: -1.062698399999931, y: -0.8340984000000162 },
              { x: -1.062698399999931, y: 0.8343015999998897 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2057878.obj?uuid=b82996bac206484b8ab1222e0df3dbf6",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2057878.step?uuid=b82996bac206484b8ab1222e0df3dbf6",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: 0.000025400000026820635,
          y: 0.00003810000009707437,
          z: -0.01,
        },
      }}
      {...props}
    />
  );
};

export default TLV9061IDPWR;
