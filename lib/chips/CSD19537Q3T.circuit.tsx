import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["S1"],
  pin2: ["S2"],
  pin3: ["S3"],
  pin4: ["G"],
  pin5: ["D2"],
  pin6: ["D3"],
  pin7: ["D4"],
  pin8: ["D5"],
  pin9: ["D1"],
} as const;

export const CSD19537Q3T = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C134143"],
      }}
      manufacturerPartNumber="CSD19537Q3T"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin9"]}
            pcbX="0mm"
            pcbY="0.400939mm"
            width="2.4500078mm"
            height="1.8999962mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.975106mm"
            pcbY="-1.514983mm"
            width="0.3999992mm"
            height="0.6299962mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.324866mm"
            pcbY="-1.514983mm"
            width="0.3999992mm"
            height="0.6299962mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0.324866mm"
            pcbY="-1.514983mm"
            width="0.3999992mm"
            height="0.6299962mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0.975106mm"
            pcbY="-1.514983mm"
            width="0.3999992mm"
            height="0.6299962mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="0.975106mm"
            pcbY="1.514983mm"
            width="0.3999992mm"
            height="0.6299962mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0.32512mm"
            pcbY="1.514983mm"
            width="0.3999992mm"
            height="0.6299962mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-0.324866mm"
            pcbY="1.514983mm"
            width="0.3999992mm"
            height="0.6299962mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-0.975106mm"
            pcbY="1.514983mm"
            width="0.3999992mm"
            height="0.6299962mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: 1.4061440000000403, y: 1.6498823999999104 },
              { x: 1.6500093999999308, y: 1.6498823999999104 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.6499840000001313, y: 1.6498823999999104 },
              { x: -1.4061440000000403, y: 1.6498823999999104 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.4061440000000403, y: -1.6501363999998375 },
              { x: -1.6499840000001313, y: -1.6501363999998375 },
              { x: -1.6499840000001313, y: 1.6498823999999104 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.6500093999999308, y: 1.6498823999999104 },
              { x: 1.6500093999999308, y: -1.6501363999998375 },
              { x: 1.4061440000000403, y: -1.6501363999998375 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.0127mm"
            pcbY="2.828673mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -1.9263999999999442, y: 2.0786729999999807 },
              { x: 1.90099999999984, y: 2.0786729999999807 },
              { x: 1.90099999999984, y: -2.0789270000000215 },
              { x: -1.9263999999999442, y: -2.0789270000000215 },
              { x: -1.9263999999999442, y: 2.0786729999999807 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C134143.obj?uuid=fdc2187491af4dfd82e5cb06491534ff",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C134143.step?uuid=fdc2187491af4dfd82e5cb06491534ff",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: 0.000012700000070253736,
          y: 0.00012700000002041634,
          z: -0.16,
        },
      }}
      {...props}
    />
  );
};

export default CSD19537Q3T;
