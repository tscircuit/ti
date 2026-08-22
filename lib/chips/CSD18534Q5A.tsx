import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["S1"],
  pin2: ["S2"],
  pin3: ["S3"],
  pin4: ["G"],
  pin5: ["D1"],
  pin6: ["D2"],
  pin7: ["D3"],
  pin8: ["D4"],
  pin9: ["D5"],
} as const;

export const CSD18534Q5A = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C115943"],
      }}
      manufacturerPartNumber="CSD18534Q5A"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-1.905mm"
            pcbY="-2.970022mm"
            width="0.5739892mm"
            height="1.5999968mm"
            radius="0.2869946mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.635mm"
            pcbY="-2.970022mm"
            width="0.5739892mm"
            height="1.5999968mm"
            radius="0.2869946mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0.635mm"
            pcbY="-2.970022mm"
            width="0.5739892mm"
            height="1.5999968mm"
            radius="0.2869946mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="1.905mm"
            pcbY="-2.970022mm"
            width="0.5739892mm"
            height="1.5999968mm"
            radius="0.2869946mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="1.905mm"
            pcbY="2.970022mm"
            width="0.5739892mm"
            height="1.5999968mm"
            radius="0.2869946mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0.635mm"
            pcbY="2.970022mm"
            width="0.5739892mm"
            height="1.5999968mm"
            radius="0.2869946mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-0.635mm"
            pcbY="2.970022mm"
            width="0.5739892mm"
            height="1.5999968mm"
            radius="0.2869946mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-1.905mm"
            pcbY="2.970022mm"
            width="0.5739892mm"
            height="1.5999968mm"
            radius="0.2869946mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="0mm"
            pcbY="0.787908mm"
            width="4.1999916mm"
            height="3.580003mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -2.3824945999999727, y: -3.0761939999999868 },
              { x: -2.5761949999999842, y: -3.0761939999999868 },
              { x: -2.5761949999999842, y: -3.0761939999999868 },
              { x: -2.5761949999999842, y: 3.0761939999999868 },
              { x: -2.5761949999999842, y: 3.0761939999999868 },
              { x: -2.3824945999999727, y: 3.0761939999999868 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 2.3824945999999727, y: -3.0761939999999868 },
              { x: 2.5761949999999842, y: -3.0761939999999868 },
              { x: 2.5761949999999842, y: -3.0761939999999868 },
              { x: 2.5761949999999842, y: 3.0761939999999868 },
              { x: 2.5761949999999842, y: 3.0761939999999868 },
              { x: 2.3824945999999727, y: 3.0761939999999868 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.5168859999999995, y: -3.810000000000059 },
              { x: -2.52200101051244, y: -3.8488523621365403 },
              { x: -2.5369974625364193, y: -3.8850569999999607 },
              { x: -2.560853372649035, y: -3.9161466273509404 },
              { x: -2.591942999999901, y: -3.94000253746367 },
              { x: -2.628147637863435, y: -3.9549989894874216 },
              { x: -2.66700000000003, y: -3.960113999999976 },
              { x: -2.705852362136511, y: -3.9549989894874216 },
              { x: -2.7420570000000453, y: -3.94000253746367 },
              { x: -2.7731466273511387, y: -3.9161466273509404 },
              { x: -2.7970025374637544, y: -3.8850569999999607 },
              { x: -2.811998989487506, y: -3.8488523621365403 },
              { x: -2.817113999999947, y: -3.810000000000059 },
              { x: -2.811998989487506, y: -3.7711476378633506 },
              { x: -2.7970025374637544, y: -3.73494299999993 },
              { x: -2.7731466273511387, y: -3.7038533726489504 },
              { x: -2.7420570000000453, y: -3.6799974625363348 },
              { x: -2.705852362136511, y: -3.6650010105124693 },
              { x: -2.66700000000003, y: -3.659885999999915 },
              { x: -2.628147637863435, y: -3.6650010105124693 },
              { x: -2.591942999999901, y: -3.6799974625363348 },
              { x: -2.560853372649035, y: -3.7038533726489504 },
              { x: -2.5369974625364193, y: -3.73494299999993 },
              { x: -2.52200101051244, y: -3.7711476378633506 },
              { x: -2.5168859999999995, y: -3.810000000000059 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.127mm"
            pcbY="4.7592mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -3.0693999999999733, y: 4.009200000000078 },
              { x: 2.815399999999954, y: 4.009200000000078 },
              { x: 2.815399999999954, y: -4.212399999999889 },
              { x: -3.0693999999999733, y: -4.212399999999889 },
              { x: -3.0693999999999733, y: 4.009200000000078 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C115943.obj?uuid=8af78d1c95d347f38becd6dceda70225",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C115943.step?uuid=8af78d1c95d347f38becd6dceda70225",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0.000012699999842880061, z: 0 },
      }}
      {...props}
    />
  );
};

export default CSD18534Q5A;
