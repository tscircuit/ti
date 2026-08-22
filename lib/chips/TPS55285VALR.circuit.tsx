import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["MODE"],
  pin2: ["SCL"],
  pin3: ["SDA"],
  pin4: ["pin4"],
  pin5: ["VIN"],
  pin6: ["SW1"],
  pin7: ["PGND"],
  pin8: ["SW2"],
  pin9: ["VOUT"],
  pin10: ["pin10"],
  pin11: ["COMP"],
  pin12: ["AGND"],
  pin13: ["VCC"],
  pin14: ["BOOT2"],
  pin15: ["BOOT1"],
} as const;

const pinAttributes = {
  pin5: { requiresPower: true },
  pin7: { requiresGround: true },
  pin12: { requiresGround: true },
  pin13: { requiresPower: true },
} as const;

export const TPS55285VALR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C52160906"],
      }}
      manufacturerPartNumber="TPS55285VALR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin13"]}
            points={[
              { x: "1.3750036mm", y: "1.0750042mm" },
              { x: "1.3750036mm", y: "1.450086mm" },
              { x: "1.6249904mm", y: "1.450086mm" },
              { x: "1.6249904mm", y: "1.0750042mm" },
              { x: "1.974977mm", y: "1.0750042mm" },
              { x: "1.974977mm", y: "0.6249924mm" },
              { x: "1.3749782mm", y: "0.6249924mm" },
              { x: "1.3749782mm", y: "1.0750042mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin10"]}
            points={[
              { x: "1.3749528mm", y: "-1.0750042mm" },
              { x: "1.3749528mm", y: "-1.450086mm" },
              { x: "1.6249396mm", y: "-1.450086mm" },
              { x: "1.6249396mm", y: "-1.0750042mm" },
              { x: "1.9749262mm", y: "-1.0750042mm" },
              { x: "1.9749262mm", y: "-0.6249924mm" },
              { x: "1.3749274mm", y: "-0.6249924mm" },
              { x: "1.3749274mm", y: "-1.0750042mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin1"]}
            points={[
              { x: "-1.3749528mm", y: "1.0750042mm" },
              { x: "-1.3749528mm", y: "1.450086mm" },
              { x: "-1.6249396mm", y: "1.450086mm" },
              { x: "-1.6249396mm", y: "1.0750042mm" },
              { x: "-1.9749262mm", y: "1.0750042mm" },
              { x: "-1.9749262mm", y: "0.6249924mm" },
              { x: "-1.3749274mm", y: "0.6249924mm" },
              { x: "-1.3749274mm", y: "1.0750042mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin4"]}
            points={[
              { x: "-1.3750036mm", y: "-1.0750042mm" },
              { x: "-1.3750036mm", y: "-1.450086mm" },
              { x: "-1.6249904mm", y: "-1.450086mm" },
              { x: "-1.6249904mm", y: "-1.0750042mm" },
              { x: "-1.974977mm", y: "-1.0750042mm" },
              { x: "-1.974977mm", y: "-0.6249924mm" },
              { x: "-1.3749782mm", y: "-0.6249924mm" },
              { x: "-1.3749782mm", y: "-1.0750042mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="0.999998mm"
            pcbY="0.9250426mm"
            width="0.2500122mm"
            height="1.0500106mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="-0.999998mm"
            pcbY="0.9250426mm"
            width="0.2500122mm"
            height="1.0500106mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="1.649984mm"
            pcbY="0.2499106mm"
            width="0.5999988mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="1.649984mm"
            pcbY="-0.2499614mm"
            width="0.5999988mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="0.999998mm"
            pcbY="-0.6500114mm"
            width="0.2500122mm"
            height="1.5999968mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="0.500126mm"
            pcbY="-0.0000254mm"
            width="0.2500122mm"
            height="2.8999942mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="0mm"
            pcbY="-0.0000254mm"
            width="0.2500122mm"
            height="2.8999942mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-0.499872mm"
            pcbY="-0.0000254mm"
            width="0.2500122mm"
            height="2.8999942mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-0.999998mm"
            pcbY="-0.6500114mm"
            width="0.2500122mm"
            height="1.5999968mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-1.649984mm"
            pcbY="-0.2499614mm"
            width="0.5999988mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-1.649984mm"
            pcbY="0.2499106mm"
            width="0.5999988mm"
            height="0.2500122mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: 1.7999963999998272, y: -1.4999970000000076 },
              { x: 1.7979135999999016, y: -1.4999970000000076 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.99999600000001, y: -1.2533630000000358 },
              { x: 1.99999600000001, y: -1.4999970000000076 },
              { x: 1.7999963999998272, y: -1.4999970000000076 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.7979643999999553, y: 1.4999970000000076 },
              { x: 1.99999600000001, y: 1.4999970000000076 },
              { x: 1.99999600000001, y: 1.2533630000000358 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.99999600000001, y: 1.2533630000000358 },
              { x: -1.99999600000001, y: 1.4999970000000076 },
              { x: -1.797913600000129, y: 1.4999970000000076 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.7999963999999409, y: -1.4999970000000076 },
              { x: -1.99999600000001, y: -1.4999970000000076 },
              { x: -1.99999600000001, y: -1.2533630000000358 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.1584920000001375, y: 0.8000745999999026 },
              { x: -2.1633127459483603, y: 0.7634573991368825 },
              { x: -2.177446457923452, y: 0.7293355999998994 },
              { x: -2.1999299468113804, y: 0.7000345468112528 },
              { x: -2.229231000000027, y: 0.6775510579233242 },
              { x: -2.26335279913701, y: 0.6634173459482327 },
              { x: -2.2999700000000303, y: 0.6585966000000099 },
              { x: -2.3365872008630504, y: 0.6634173459482327 },
              { x: -2.3707090000000335, y: 0.6775510579233242 },
              { x: -2.400010053188794, y: 0.7000345468112528 },
              { x: -2.4224935420766087, y: 0.7293355999998994 },
              { x: -2.4366272540517, y: 0.7634573991368825 },
              { x: -2.4414480000000367, y: 0.8000745999999026 },
              { x: -2.4366272540517, y: 0.8366918008629227 },
              { x: -2.4224935420766087, y: 0.8708136000000195 },
              { x: -2.400010053188794, y: 0.9001146531886661 },
              { x: -2.3707090000000335, y: 0.922598142076481 },
              { x: -2.3365872008630504, y: 0.9367318540516862 },
              { x: -2.2999700000000303, y: 0.941552599999909 },
              { x: -2.26335279913701, y: 0.9367318540516862 },
              { x: -2.229231000000027, y: 0.922598142076481 },
              { x: -2.1999299468113804, y: 0.9001146531886661 },
              { x: -2.177446457923452, y: 0.8708136000000195 },
              { x: -2.1633127459483603, y: 0.8366918008629227 },
              { x: -2.1584920000001375, y: 0.8000745999999026 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.222504mm"
            pcbY="2.5100046mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -2.6950040000001536, y: 1.7600045999998883 },
              { x: 2.24999600000001, y: 1.7600045999998883 },
              { x: 2.24999600000001, y: -1.7371954000000187 },
              { x: -2.6950040000001536, y: -1.7371954000000187 },
              { x: -2.6950040000001536, y: 1.7600045999998883 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C52160906.obj?uuid=66a7c98762914c8189836a64a71f8878",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C52160906.step?uuid=66a7c98762914c8189836a64a71f8878",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: 0.000012700000070253736,
          y: -0.000469899999984591,
          z: -0.02,
        },
      }}
      {...props}
    />
  );
};

export default TPS55285VALR;
