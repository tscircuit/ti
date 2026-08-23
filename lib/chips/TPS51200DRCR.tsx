import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["REFIN"],
  pin2: ["VLDOIN"],
  pin3: ["VO"],
  pin4: ["PGND"],
  pin5: ["VOSNS"],
  pin6: ["REFOUT"],
  pin7: ["EN"],
  pin8: ["GND"],
  pin9: ["PGOOD"],
  pin10: ["VIN"],
  pin11: ["EPAD"],
} as const;

const pinAttributes = {
  pin4: { requiresGround: true },
  pin8: { requiresGround: true },
  pin10: { requiresPower: true },
} as const;

export const TPS51200DRCR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C34771"],
      }}
      manufacturerPartNumber="TPS51200DRCR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-1.0006584mm"
            pcbY="-1.399921mm"
            width="0.2500122mm"
            height="0.5999988mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.5002784mm"
            pcbY="-1.399921mm"
            width="0.2500122mm"
            height="0.5999988mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0.0001016mm"
            pcbY="-1.399921mm"
            width="0.2500122mm"
            height="0.5999988mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0.5004816mm"
            pcbY="-1.399921mm"
            width="0.2500122mm"
            height="0.5999988mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="1.0008616mm"
            pcbY="-1.399921mm"
            width="0.2500122mm"
            height="0.5999988mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="1.0008616mm"
            pcbY="1.399921mm"
            width="0.2500122mm"
            height="0.5999988mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="0.5004816mm"
            pcbY="1.399921mm"
            width="0.2500122mm"
            height="0.5999988mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="0.0001016mm"
            pcbY="1.399921mm"
            width="0.2500122mm"
            height="0.5999988mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="-0.5002784mm"
            pcbY="1.399921mm"
            width="0.2500122mm"
            height="0.5999988mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="-1.0006584mm"
            pcbY="1.399921mm"
            width="0.2500122mm"
            height="0.5999988mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            points={[
              { x: "-1.6999966mm", y: "-0.1250188mm" },
              { x: "-1.1999976mm", y: "-0.1250188mm" },
              { x: "-1.1999976mm", y: "0.124968mm" },
              { x: "-1.6999966mm", y: "0.124968mm" },
              { x: "-1.6999966mm", y: "0.3749802mm" },
              { x: "-1.1999976mm", y: "0.3749802mm" },
              { x: "-1.1999976mm", y: "0.8249666mm" },
              { x: "1.1999976mm", y: "0.8249666mm" },
              { x: "1.1999976mm", y: "0.3749802mm" },
              { x: "1.6999966mm", y: "0.3749802mm" },
              { x: "1.6999966mm", y: "0.124968mm" },
              { x: "1.1999976mm", y: "0.124968mm" },
              { x: "1.1999976mm", y: "-0.1250188mm" },
              { x: "1.6999966mm", y: "-0.1250188mm" },
              { x: "1.6999966mm", y: "-0.1250188mm" },
              { x: "1.6999966mm", y: "-0.375031mm" },
              { x: "1.1999976mm", y: "-0.375031mm" },
              { x: "1.1999976mm", y: "-0.8250174mm" },
              { x: "-1.1999976mm", y: "-0.8250174mm" },
              { x: "-1.1999976mm", y: "-0.375031mm" },
              { x: "-1.6999966mm", y: "-0.375031mm" },
            ]}
            shape="polygon"
          />
          <silkscreenpath
            route={[
              { x: -1.524000000000001, y: 1.523974599999974 },
              { x: -1.524000000000001, y: 0.5541264000000865 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.524000000000001, y: -0.5541771999999128 },
              { x: -1.524000000000001, y: -1.5240254000000277 },
              { x: -1.3048995999999988, y: -1.5240254000000277 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.3048996000001125, y: -1.5240254000000277 },
              { x: 1.524000000000001, y: -1.5240254000000277 },
              { x: 1.524000000000001, y: -0.5541771999999128 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.524000000000001, y: 0.5541264000000865 },
              { x: 1.524000000000001, y: 1.523974599999974 },
              { x: 1.3048996000001125, y: 1.523974599999974 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.3048995999999988, y: 1.523974599999974 },
              { x: -1.524000000000001, y: 1.523974599999974 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.9049999999999727, y: -1.2700254000000086 },
              { x: -2.0074405237317023, y: -1.0896662304842266 },
              { x: -1.8000194762682895, y: -1.0896662304843403 },
              { x: -1.9024600000000191, y: -1.2700254000000086 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.1484884mm"
            pcbY="2.694815mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -2.2653883999998925, y: 1.9448150000000624 },
              { x: 1.9684116000000813, y: 1.9448150000000624 },
              { x: 1.9684116000000813, y: -2.415984999999864 },
              { x: -2.2653883999998925, y: -2.415984999999864 },
              { x: -2.2653883999998925, y: 1.9448150000000624 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C34771.obj?uuid=156e205a83594893a980adc9e51e4d53",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C34771.step?uuid=156e205a83594893a980adc9e51e4d53",
        pcbRotationOffset: 90,
        modelOriginPosition: {
          x: -0.000012700000070253736,
          y: 0.0001142999999501626,
          z: 0,
        },
      }}
      {...props}
    />
  );
};

export default TPS51200DRCR;
