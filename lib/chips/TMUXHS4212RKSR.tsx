import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["RSVD1"],
  pin2: ["OEn"],
  pin3: ["A0p"],
  pin4: ["A0n"],
  pin5: ["GND3"],
  pin6: ["VCC"],
  pin7: ["A1p"],
  pin8: ["A1n"],
  pin9: ["SEL"],
  pin10: ["RSVD2"],
  pin11: ["GND2"],
  pin12: ["C1n"],
  pin13: ["C1p"],
  pin14: ["C0n"],
  pin15: ["C0p"],
  pin16: ["B1n"],
  pin17: ["B1p"],
  pin18: ["B0n"],
  pin19: ["B0p"],
  pin20: ["GND1"],
  pin21: ["EPAD"],
} as const;

const pinAttributes = {
  pin5: { requiresGround: true },
  pin6: { requiresPower: true },
  pin11: { requiresGround: true },
  pin20: { requiresGround: true },
} as const;

export const TMUXHS4212RKSR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2869871"],
      }}
      manufacturerPartNumber="TMUXHS4212RKSR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin21"]}
            pcbX="0mm"
            pcbY="0mm"
            width="2.999994mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="-2.157476mm"
            pcbY="-0.249936mm"
            width="0.6649974mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin20"]}
            pcbX="-2.157476mm"
            pcbY="0.249936mm"
            width="0.6649974mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin19"]}
            pcbX="-1.75006mm"
            pcbY="1.157478mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="-1.249934mm"
            pcbY="1.157478mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="-0.750062mm"
            pcbY="1.157478mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="-0.249936mm"
            pcbY="1.157478mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="0.249936mm"
            pcbY="1.157478mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="0.750062mm"
            pcbY="1.157478mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="1.249934mm"
            pcbY="1.157478mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="1.75006mm"
            pcbY="1.157478mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="2.157476mm"
            pcbY="0.249936mm"
            width="0.6649974mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="2.157476mm"
            pcbY="-0.249936mm"
            width="0.6649974mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="1.75006mm"
            pcbY="-1.157478mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="1.249934mm"
            pcbY="-1.157478mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="0.750062mm"
            pcbY="-1.157478mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0.249936mm"
            pcbY="-1.157478mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-0.249936mm"
            pcbY="-1.157478mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-0.750062mm"
            pcbY="-1.157478mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-1.249934mm"
            pcbY="-1.157478mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-1.75006mm"
            pcbY="-1.157478mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -2.3262081999999964, y: 0.580491600000073 },
              { x: -2.3262081999999964, y: 1.326210200000105 },
              { x: -2.080488599999967, y: 1.326210200000105 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 2.3262081999999964, y: 0.580491600000073 },
              { x: 2.3262081999999964, y: 1.326210200000105 },
              { x: 2.0804886000000806, y: 1.326210200000105 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.3262081999999964, y: -0.5804915999999594 },
              { x: -2.3262081999999964, y: -1.326210200000105 },
              { x: -2.080488599999967, y: -1.326210200000105 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 2.3262081999999964, y: -0.5804915999999594 },
              { x: 2.3262081999999964, y: -1.326210200000105 },
              { x: 2.0804886000000806, y: -1.326210200000105 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.465069999999969, y: -0.6349999999999909 },
              { x: -2.467623177836117, y: -0.6543933110494891 },
              { x: -2.4751087164944465, y: -0.6724649999999883 },
              { x: -2.487016488885615, y: -0.6879835111142256 },
              { x: -2.5025349999998525, y: -0.6998912835053943 },
              { x: -2.5206066889504655, y: -0.7073768221637238 },
              { x: -2.5399999999999636, y: -0.7099299999999857 },
              { x: -2.5593933110494618, y: -0.7073768221637238 },
              { x: -2.5774650000000747, y: -0.6998912835053943 },
              { x: -2.5929835111141983, y: -0.6879835111142256 },
              { x: -2.6048912835054807, y: -0.6724649999999883 },
              { x: -2.61237682216381, y: -0.6543933110494891 },
              { x: -2.6149299999999585, y: -0.6349999999999909 },
              { x: -2.61237682216381, y: -0.6156066889504928 },
              { x: -2.6048912835054807, y: -0.5975349999999935 },
              { x: -2.5929835111141983, y: -0.5820164888857562 },
              { x: -2.5774650000000747, y: -0.5701087164943601 },
              { x: -2.5593933110494618, y: -0.5626231778360307 },
              { x: -2.5399999999999636, y: -0.5600699999999961 },
              { x: -2.5206066889504655, y: -0.5626231778360307 },
              { x: -2.5025349999998525, y: -0.5701087164943601 },
              { x: -2.487016488885615, y: -0.5820164888857562 },
              { x: -2.4751087164944465, y: -0.5975349999999935 },
              { x: -2.467623177836117, y: -0.6156066889504928 },
              { x: -2.465069999999969, y: -0.6349999999999909 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.0635mm"
            pcbY="2.4986mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -2.8661999999999352, y: 1.7486000000000104 },
              { x: 2.7391999999999825, y: 1.7486000000000104 },
              { x: 2.7391999999999825, y: -1.7231999999999061 },
              { x: -2.8661999999999352, y: -1.7231999999999061 },
              { x: -2.8661999999999352, y: 1.7486000000000104 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2869871.obj?uuid=502e612e93bf4b46a2cadcb8cc804cf1",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2869871.step?uuid=502e612e93bf4b46a2cadcb8cc804cf1",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: -0.000012700000070253736, z: -0.03 },
      }}
      {...props}
    />
  );
};

export default TMUXHS4212RKSR;
