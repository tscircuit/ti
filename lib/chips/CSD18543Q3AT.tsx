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
  pin9: ["pin9"],
} as const;

export const CSD18543Q3AT = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C112374"],
      }}
      manufacturerPartNumber="CSD18543Q3AT"
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
            pcbX="0.329692mm"
            pcbY="-1.599946mm"
            width="0.3999992mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0.979678mm"
            pcbY="-1.599946mm"
            width="0.3999992mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-0.970534mm"
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
              { x: 1.5643860000000132, y: 1.5499080000000731 },
              { x: 1.5643860000000132, y: 0.35412680000013097 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.366951800000038, y: -1.5499079999999594 },
              { x: 1.5643860000000132, y: -1.5501619999998866 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.5869920000000093, y: 1.5499080000000731 },
              { x: -1.4296390000000656, y: 1.5499080000000731 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.429638999999952, y: 1.5499080000000731 },
              { x: 1.5643860000000132, y: 1.5499080000000731 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.5869920000000093, y: -1.5499079999999594 },
              { x: -1.391081799999938, y: -1.5499079999999594 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.5643860000000132, y: -0.3541267999999036 },
              { x: 1.5643860000000132, y: -1.5501619999998866 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.5869920000000093, y: -1.5499079999999594 },
              { x: -1.5869920000000093, y: -0.3541267999999036 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.5869920000000093, y: 0.35412680000013097 },
              { x: -1.5869920000000093, y: 1.5499080000000731 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.8752839999999651, y: -2.3101299999998446 },
              { x: -0.878694007008221, y: -2.3360315747574987 },
              { x: -0.888691641690798, y: -2.360167999999817 },
              { x: -0.9045955817658751, y: -2.380894418233879 },
              { x: -0.9253219999999374, y: -2.3967983583089563 },
              { x: -0.9494584252422555, y: -2.4067959929915332 },
              { x: -0.9753599999999096, y: -2.410205999999789 },
              { x: -1.0012615747575637, y: -2.4067959929915332 },
              { x: -1.0253980000001093, y: -2.3967983583089563 },
              { x: -1.0461244182339442, y: -2.380894418233879 },
              { x: -1.0620283583090213, y: -2.360167999999817 },
              { x: -1.0720259929915983, y: -2.3360315747574987 },
              { x: -1.0754359999998542, y: -2.3101299999998446 },
              { x: -1.0720259929915983, y: -2.2842284252421905 },
              { x: -1.0620283583090213, y: -2.2600919999997586 },
              { x: -1.0461244182339442, y: -2.2393655817659237 },
              { x: -1.0253980000001093, y: -2.2234616416908466 },
              { x: -1.0012615747575637, y: -2.2134640070082696 },
              { x: -0.9753599999999096, y: -2.2100539999999 },
              { x: -0.9494584252422555, y: -2.2134640070082696 },
              { x: -0.9253219999999374, y: -2.2234616416908466 },
              { x: -0.9045955817658751, y: -2.2393655817659237 },
              { x: -0.888691641690798, y: -2.2600919999997586 },
              { x: -0.878694007008221, y: -2.2842284252421905 },
              { x: -0.8752839999999651, y: -2.3101299999998446 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.002032mm"
            pcbY="3.00152mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -1.8522320000000718, y: 2.251520000000255 },
              { x: 1.8481679999998732, y: 2.251520000000255 },
              { x: 1.8481679999998732, y: -2.668079999999918 },
              { x: -1.8522320000000718, y: -2.668079999999918 },
              { x: -1.8522320000000718, y: 2.251520000000255 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C112374.obj?uuid=700cc9c3386044da8a9902f8ca45e62c",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C112374.step?uuid=700cc9c3386044da8a9902f8ca45e62c",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.00457199999993918, y: 0, z: -0.04 },
      }}
      {...props}
    />
  );
};

export default CSD18543Q3AT;
