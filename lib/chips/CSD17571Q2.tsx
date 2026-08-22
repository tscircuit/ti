import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["D4"],
  pin2: ["D5"],
  pin3: ["G"],
  pin4: ["S2"],
  pin5: ["D2"],
  pin6: ["D3"],
  pin7: ["D1"],
  pin8: ["S1"],
} as const;

export const CSD17571Q2 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C962382"],
      }}
      manufacturerPartNumber="CSD17571Q2"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin7"]}
            pcbX="-0.325374mm"
            pcbY="-0mm"
            width="1.0500106mm"
            height="1.0999978mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="0.650494mm"
            pcbY="0.050038mm"
            width="0.3999992mm"
            height="0.850011mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0.650494mm"
            pcbY="0.959866mm"
            width="0.3999992mm"
            height="0.4445mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-0.000508mm"
            pcbY="0.959866mm"
            width="0.3999992mm"
            height="0.4445mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-0.650494mm"
            pcbY="0.959866mm"
            width="0.3999992mm"
            height="0.4445mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0.650494mm"
            pcbY="-0.959866mm"
            width="0.3999992mm"
            height="0.4445mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.650494mm"
            pcbY="-0.959866mm"
            width="0.3999992mm"
            height="0.4445mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="0mm"
            pcbY="-0.959866mm"
            width="0.3999992mm"
            height="0.4445mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: 1.0304526000000038, y: -1.0399776000000145 },
              { x: 1.0304526000000038, y: 1.0199877999999813 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.0305034000000006, y: 1.0400029999999845 },
              { x: -1.0305034000000006, y: -1.0199877999999956 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.0364977999999923, y: -1.4999970000000218 },
              { x: -1.1596861800493343, y: -1.3749084714953597 },
              { x: -1.035227799999987, y: -1.2510834797605241 },
              { x: -0.9107694199506682, y: -1.3749084714953597 },
              { x: -1.033957799999996, y: -1.4999970000000218 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.0762mm"
            pcbY="2.1938mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -1.4184000000000054, y: 1.443799999999996 },
              { x: 1.2659999999999911, y: 1.443799999999996 },
              { x: 1.2659999999999911, y: -1.9772000000000105 },
              { x: -1.4184000000000054, y: -1.9772000000000105 },
              { x: -1.4184000000000054, y: 1.443799999999996 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C962382.obj?uuid=f47d8aecec6846a691350166e6a2276e",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C962382.step?uuid=f47d8aecec6846a691350166e6a2276e",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.02 },
      }}
      {...props}
    />
  );
};

export default CSD17571Q2;
