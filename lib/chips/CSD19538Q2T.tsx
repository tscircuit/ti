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

export const CSD19538Q2T = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C2859729"],
      }}
      manufacturerPartNumber="CSD19538Q2T"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin7"]}
            pcbX="-0.34206815mm"
            pcbY="-0mm"
            width="0.9500108mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="0.63293625mm"
            pcbY="0.094996mm"
            width="0.3683mm"
            height="0.7500112mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0.63293625mm"
            pcbY="0.9750044mm"
            width="0.2999994mm"
            height="0.4500118mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-0.01707515mm"
            pcbY="0.9750044mm"
            width="0.2999994mm"
            height="0.4500118mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-0.66708655mm"
            pcbY="0.9750044mm"
            width="0.2999994mm"
            height="0.4500118mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0.63293625mm"
            pcbY="-0.9750044mm"
            width="0.2999994mm"
            height="0.4500118mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.66708655mm"
            pcbY="-0.9750044mm"
            width="0.2999994mm"
            height="0.4500118mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.01707515mm"
            pcbY="-0.9750044mm"
            width="0.2999994mm"
            height="0.4500118mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -1.1170729499999936, y: 1.099997799999997 },
              { x: -1.1170729499999936, y: -1.099997799999997 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.0829226500000004, y: 1.099997799999997 },
              { x: 1.0829226500000004, y: -0.999998000000005 },
              { x: 1.0829226500000004, y: -1.099997799999997 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.8183435500000087, y: -1.3880338000000023 },
              { x: -0.9415319300493508, y: -1.2629452714953544 },
              { x: -0.8170735500000035, y: -1.1391202797605189 },
              { x: -0.6926151699506704, y: -1.2629452714953544 },
              { x: -0.8158035500000125, y: -1.3880338000000023 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.01707515mm"
            pcbY="2.2067032mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -1.3719751500000115, y: 1.4567032000000069 },
              { x: 1.3378248499999899, y: 1.4567032000000069 },
              { x: 1.3378248499999899, y: -1.8880967999999996 },
              { x: -1.3719751500000115, y: -1.8880967999999996 },
              { x: -1.3719751500000115, y: 1.4567032000000069 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2859729.obj?uuid=cec58c53873d413fa827b6a5400714bb",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2859729.step?uuid=cec58c53873d413fa827b6a5400714bb",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0, y: -0.017075150000010808, z: 0 },
      }}
      {...props}
    />
  );
};

export default CSD19538Q2T;
