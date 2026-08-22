import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["S1"],
  pin2: ["G1"],
  pin3: ["D22"],
  pin4: ["S2"],
  pin5: ["G2"],
  pin6: ["D12"],
  pin7: ["D11"],
  pin8: ["D21"],
} as const;

export const CSD87502Q2T = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C2864028"],
      }}
      manufacturerPartNumber="CSD87502Q2T"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin7"]}
            pcbX="-0.488188mm"
            pcbY="-0mm"
            width="0.6249924mm"
            height="0.8999982mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="0.487934mm"
            pcbY="-0mm"
            width="0.6249924mm"
            height="0.8999982mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0.649986mm"
            pcbY="0.959866mm"
            width="0.350012mm"
            height="0.4445mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="0mm"
            pcbY="0.959866mm"
            width="0.350012mm"
            height="0.4445mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-0.649986mm"
            pcbY="0.959866mm"
            width="0.350012mm"
            height="0.4445mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0.649986mm"
            pcbY="-0.959866mm"
            width="0.350012mm"
            height="0.4445mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.649986mm"
            pcbY="-0.959866mm"
            width="0.350012mm"
            height="0.4445mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="0mm"
            pcbY="-0.959866mm"
            width="0.350012mm"
            height="0.4445mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -0.9926573999999846, y: -0.9906000000000006 },
              { x: -1.0413999999999959, y: -0.9906000000000006 },
              { x: -1.0413999999999959, y: 1.0413999999999959 },
              { x: -0.9926573999999846, y: 1.0413999999999959 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 0.9144000000000148, y: 1.0413999999999959 },
              { x: 1.0414000000000243, y: 1.0413999999999959 },
              { x: 1.0414000000000243, y: -0.9906000000000006 },
              { x: 0.992657400000013, y: -0.9906000000000006 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.098499199999992, y: -1.4999970000000218 },
              { x: -1.2216875800493057, y: -1.3749084714953597 },
              { x: -1.0972291999999868, y: -1.2510834797605241 },
              { x: -0.9727708199506537, y: -1.3749084714953597 },
              { x: -1.0959591999999958, y: -1.4999970000000218 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.0889mm"
            pcbY="2.1938mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -1.4691999999999865, y: 1.443799999999996 },
              { x: 1.29140000000001, y: 1.443799999999996 },
              { x: 1.29140000000001, y: -1.9772000000000105 },
              { x: -1.4691999999999865, y: -1.9772000000000105 },
              { x: -1.4691999999999865, y: 1.443799999999996 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2864028.obj?uuid=cec58c53873d413fa827b6a5400714bb",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2864028.step?uuid=cec58c53873d413fa827b6a5400714bb",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0, y: 0.06350000000000477, z: 0 },
      }}
      {...props}
    />
  );
};

export default CSD87502Q2T;
