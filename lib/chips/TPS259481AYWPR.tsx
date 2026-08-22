import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["OVLO"],
  pin3: ["pin3"],
  pin4: ["pin4"],
  pin5: ["VIN1"],
  pin6: ["VOUT1"],
  pin7: ["DVDT"],
  pin8: ["GND"],
  pin9: ["ILM"],
  pin10: ["ITIMER"],
  pin11: ["VOUT2"],
  pin12: ["VIN2"],
} as const;

const pinAttributes = {
  pin5: { requiresPower: true },
  pin8: { requiresGround: true },
  pin12: { requiresPower: true },
} as const;

export const TPS259481AYWPR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C35020830"],
      }}
      manufacturerPartNumber="TPS259481AYWPR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-1.059942mm"
            pcbY="0.675132mm"
            width="0.1999996mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-1.059942mm"
            pcbY="0.225044mm"
            width="0.1999996mm"
            height="0.1999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-1.059942mm"
            pcbY="-0.225044mm"
            width="0.1999996mm"
            height="0.1999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-1.059942mm"
            pcbY="-0.675132mm"
            width="0.1999996mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-0.475996mm"
            pcbY="-0.450088mm"
            width="0.499999mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0.475996mm"
            pcbY="-0.450088mm"
            width="0.499999mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="1.059942mm"
            pcbY="-0.675132mm"
            width="0.1999996mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="1.059942mm"
            pcbY="-0.225044mm"
            width="0.1999996mm"
            height="0.1999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="1.059942mm"
            pcbY="0.225044mm"
            width="0.1999996mm"
            height="0.1999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="1.059942mm"
            pcbY="0.675132mm"
            width="0.1999996mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="0.475996mm"
            pcbY="0.450088mm"
            width="0.499999mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="-0.475996mm"
            pcbY="0.450088mm"
            width="0.499999mm"
            height="0.499999mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -1.3969999999999345, y: 1.0160000000000764 },
              { x: 1.3970000000000482, y: 1.0160000000000764 },
              { x: 1.3970000000000482, y: -1.0159999999999627 },
              { x: -1.3969999999999345, y: -1.0159999999999627 },
              { x: -1.3969999999999345, y: 1.0160000000000764 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.6509999999999536, y: 0.88900000000001 },
              { x: -1.6553274200612123, y: 0.8561299812720335 },
              { x: -1.6680147737192783, y: 0.8255000000000337 },
              { x: -1.6881974387893024, y: 0.7991974387894061 },
              { x: -1.71449999999993, y: 0.779014773719382 },
              { x: -1.7451299812719299, y: 0.7663274200613159 },
              { x: -1.7779999999999063, y: 0.7620000000000573 },
              { x: -1.8108700187279965, y: 0.7663274200613159 },
              { x: -1.8414999999998827, y: 0.779014773719382 },
              { x: -1.8678025612107376, y: 0.7991974387894061 },
              { x: -1.8879852262805343, y: 0.8255000000000337 },
              { x: -1.9006725799386004, y: 0.8561299812720335 },
              { x: -1.9049999999999727, y: 0.88900000000001 },
              { x: -1.9006725799386004, y: 0.9218700187281001 },
              { x: -1.8879852262805343, y: 0.9524999999999864 },
              { x: -1.8678025612107376, y: 0.9788025612108413 },
              { x: -1.8414999999998827, y: 0.998985226280638 },
              { x: -1.8108700187279965, y: 1.011672579938704 },
              { x: -1.7779999999999063, y: 1.0160000000000764 },
              { x: -1.7451299812719299, y: 1.011672579938704 },
              { x: -1.71449999999993, y: 0.998985226280638 },
              { x: -1.6881974387893024, y: 0.9788025612108413 },
              { x: -1.6680147737192783, y: 0.9524999999999864 },
              { x: -1.6553274200612123, y: 0.9218700187281001 },
              { x: -1.6509999999999536, y: 0.88900000000001 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.254mm"
            pcbY="2.0287mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -2.1549999999999727, y: 1.2787000000001854 },
              { x: 1.6470000000000482, y: 1.2787000000001854 },
              { x: 1.6470000000000482, y: -1.2786999999998443 },
              { x: -2.1549999999999727, y: -1.2786999999998443 },
              { x: -2.1549999999999727, y: 1.2787000000001854 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C35020830.obj?uuid=623758814f76406da78f972733125f5c",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C35020830.step?uuid=623758814f76406da78f972733125f5c",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: 0.000012699999956566899,
          y: -0.000012700000070253736,
          z: -0.08442,
        },
      }}
      {...props}
    />
  );
};

export default TPS259481AYWPR;
