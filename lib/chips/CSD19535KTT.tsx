import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["G"],
  pin2: ["D"],
  pin3: ["S"],
} as const;

export const CSD19535KTT = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C2869105"],
      }}
      manufacturerPartNumber="CSD19535KTT"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin2"]}
            pcbX="0mm"
            pcbY="3.90403715mm"
            width="8.5000084mm"
            height="9.0000074mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="-2.54mm"
            pcbY="-6.40404485mm"
            width="1.5999968mm"
            height="3.999992mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="2.54mm"
            pcbY="-6.40404485mm"
            width="1.5999968mm"
            height="3.999992mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: 5.074919999999906, y: -2.5643268499999294 },
              { x: -5.07492000000002, y: -2.5643268499999294 },
              { x: -5.0749962000001005, y: 6.164916550000044 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 5.074996199999987, y: -2.5650888499999382 },
              { x: 5.074996199999987, y: 6.159912750000103 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.0127mm"
            pcbY="9.39831315mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -5.355399999999918, y: 8.648313150000035 },
              { x: 5.329999999999927, y: 8.648313150000035 },
              { x: 5.329999999999927, y: -8.666486849999956 },
              { x: -5.355399999999918, y: -8.666486849999956 },
              { x: -5.355399999999918, y: 8.648313150000035 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2869105.obj?uuid=6853a3222d924ff49bf1058cb38b0877",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2869105.step?uuid=6853a3222d924ff49bf1058cb38b0877",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: -1.9084831500001016, z: 0 },
      }}
      {...props}
    />
  );
};

export default CSD19535KTT;
