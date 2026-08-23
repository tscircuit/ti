import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["S1"],
  pin2: ["S2"],
  pin3: ["S3"],
  pin4: ["G"],
  pin5: ["D4"],
  pin6: ["D3"],
  pin7: ["D2"],
  pin8: ["D1"],
  pin9: ["D5"],
} as const;

export const CSD17581Q3AT = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C2866708"],
      }}
      manufacturerPartNumber="CSD17581Q3AT"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.970534mm"
            pcbY="-1.599946mm"
            width="0.3999992mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.32004mm"
            pcbY="-1.599946mm"
            width="0.3999992mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0.329946mm"
            pcbY="-1.599946mm"
            width="0.3999992mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0.979932mm"
            pcbY="-1.599946mm"
            width="0.3999992mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-0.97028mm"
            pcbY="1.599946mm"
            width="0.3999992mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-0.320294mm"
            pcbY="1.599946mm"
            width="0.3999992mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0.329692mm"
            pcbY="1.599946mm"
            width="0.3999992mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="0.979678mm"
            pcbY="1.599946mm"
            width="0.3999992mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="0mm"
            pcbY="0.350012mm"
            width="2.5999948mm"
            height="1.999996mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: 1.5644876000001204, y: 1.54988260000016 },
              { x: 1.5644876000001204, y: 0.35410140000010415 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.3670280000000048, y: -1.5499587999997857 },
              { x: 1.5644876000001204, y: -1.5502127999999402 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.586890399999902, y: 1.54988260000016 },
              { x: -1.4295627999999851, y: 1.54988260000016 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.4297406000000592, y: 1.54988260000016 },
              { x: 1.5644876000001204, y: 1.54988260000016 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.586890399999902, y: -1.5499587999997857 },
              { x: -1.3909801999998308, y: -1.5499587999997857 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.5644876000001204, y: -0.35420299999998406 },
              { x: 1.5644876000001204, y: -1.5502127999999402 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.586890399999902, y: -1.5499587999997857 },
              { x: -1.586890399999902, y: -0.35420299999998406 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.586890399999902, y: 0.35410140000010415 },
              { x: -1.586890399999902, y: 1.54988260000016 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.8752839999998514, y: -2.3101299999998446 },
              { x: -0.878694007008221, y: -2.3360315747574987 },
              { x: -0.888691641690798, y: -2.360167999999817 },
              { x: -0.9045955817658751, y: -2.380894418233879 },
              { x: -0.9253219999999374, y: -2.3967983583089563 },
              { x: -0.9494584252421419, y: -2.4067959929915332 },
              { x: -0.975359999999796, y: -2.410205999999789 },
              { x: -1.00126157475745, y: -2.4067959929915332 },
              { x: -1.0253979999999956, y: -2.3967983583089563 },
              { x: -1.0461244182338305, y: -2.380894418233879 },
              { x: -1.0620283583089076, y: -2.360167999999817 },
              { x: -1.0720259929914846, y: -2.3360315747574987 },
              { x: -1.0754359999997405, y: -2.3101299999998446 },
              { x: -1.0720259929914846, y: -2.2842284252421905 },
              { x: -1.0620283583089076, y: -2.2600919999998723 },
              { x: -1.0461244182338305, y: -2.2393655817659237 },
              { x: -1.0253979999999956, y: -2.2234616416908466 },
              { x: -1.00126157475745, y: -2.2134640070082696 },
              { x: -0.975359999999796, y: -2.2100539999999 },
              { x: -0.9494584252421419, y: -2.2134640070082696 },
              { x: -0.9253219999999374, y: -2.2234616416908466 },
              { x: -0.9045955817658751, y: -2.2393655817659237 },
              { x: -0.888691641690798, y: -2.2600919999998723 },
              { x: -0.878694007008221, y: -2.2842284252421905 },
              { x: -0.8752839999998514, y: -2.3101299999998446 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="0.00635mm"
            pcbY="3.015236mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -1.8946500000000697, y: 2.2652360000001863 },
              { x: 1.907350000000065, y: 2.2652360000001863 },
              { x: 1.907350000000065, y: -2.654363999999873 },
              { x: -1.8946500000000697, y: -2.654363999999873 },
              { x: -1.8946500000000697, y: 2.2652360000001863 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2866708.obj?uuid=49318107c6004159848cbace89215b6f",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2866708.step?uuid=49318107c6004159848cbace89215b6f",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: -0.004660899999976209,
          y: 0.000038099999983387534,
          z: -0.02,
        },
      }}
      {...props}
    />
  );
};

export default CSD17581Q3AT;
