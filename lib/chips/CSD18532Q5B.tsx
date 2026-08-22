import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["S3"],
  pin2: ["S2"],
  pin3: ["S1"],
  pin4: ["G"],
  pin5: ["D4"],
  pin6: ["D3"],
  pin7: ["D2"],
  pin8: ["D1"],
  pin9: ["EP"],
} as const;

export const CSD18532Q5B = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C882766"],
      }}
      manufacturerPartNumber="CSD18532Q5B"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin9"]}
            pcbX="0mm"
            pcbY="0.805434mm"
            width="4.499991mm"
            height="3.7999924mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-1.905mm"
            pcbY="2.897886mm"
            width="0.7493mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-0.635mm"
            pcbY="2.897886mm"
            width="0.7493mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0.635mm"
            pcbY="2.897886mm"
            width="0.7493mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="1.905mm"
            pcbY="2.897886mm"
            width="0.7493mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="1.905mm"
            pcbY="-2.7118818mm"
            width="0.6999986mm"
            height="1.3720064mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0.635mm"
            pcbY="-2.7118818mm"
            width="0.6999986mm"
            height="1.3720064mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.635mm"
            pcbY="-2.7118818mm"
            width="0.6999986mm"
            height="1.3720064mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="-1.905mm"
            pcbY="-2.7118818mm"
            width="0.6999986mm"
            height="1.3720064mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: 2.692399999999907, y: 3.140075000000138 },
              { x: 2.692399999999907, y: -2.854325000000131 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.717800000000011, y: -2.854325000000131 },
              { x: -2.717800000000011, y: 3.140075000000138 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.8034000000000106, y: -3.3370519999999715 },
              { x: -1.8077274200613829, y: -3.369922018727948 },
              { x: -1.820414773719449, y: -3.4005520000000615 },
              { x: -1.8405974387892456, y: -3.426854561210689 },
              { x: -1.866899999999987, y: -3.447037226280486 },
              { x: -1.8975299812719868, y: -3.4597245799387792 },
              { x: -1.9303999999999633, y: -3.464052000000038 },
              { x: -1.9632700187280534, y: -3.4597245799387792 },
              { x: -1.9938999999999396, y: -3.447037226280486 },
              { x: -2.0202025612107946, y: -3.426854561210689 },
              { x: -2.0403852262805913, y: -3.4005520000000615 },
              { x: -2.053072579938771, y: -3.369922018727948 },
              { x: -2.057399999999916, y: -3.3370519999999715 },
              { x: -2.053072579938771, y: -3.304181981271995 },
              { x: -2.0403852262805913, y: -3.273551999999995 },
              { x: -2.0202025612107946, y: -3.247249438789254 },
              { x: -1.9938999999999396, y: -3.2270667737193435 },
              { x: -1.9632700187280534, y: -3.2143794200611637 },
              { x: -1.9303999999999633, y: -3.210052000000019 },
              { x: -1.8975299812719868, y: -3.2143794200611637 },
              { x: -1.866899999999987, y: -3.2270667737193435 },
              { x: -1.8405974387892456, y: -3.247249438789254 },
              { x: -1.820414773719449, y: -3.273551999999995 },
              { x: -1.8077274200613829, y: -3.304181981271995 },
              { x: -1.8034000000000106, y: -3.3370519999999715 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.0127mm"
            pcbY="4.394202mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -2.967800000000011, y: 3.64420199999995 },
              { x: 2.9424000000000206, y: 3.64420199999995 },
              { x: 2.9424000000000206, y: -3.713797999999997 },
              { x: -2.967800000000011, y: -3.713797999999997 },
              { x: -2.967800000000011, y: 3.64420199999995 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C882766.obj?uuid=45351fa1d67f41b4ad3fc24b46fe8f65",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C882766.step?uuid=45351fa1d67f41b4ad3fc24b46fe8f65",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: -0.1429893000000675, z: -0.21 },
      }}
      {...props}
    />
  );
};

export default CSD18532Q5B;
