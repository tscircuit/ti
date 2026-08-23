import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["NC2"],
  pin2: ["NC1"],
  pin3: ["IO1"],
  pin4: ["GND"],
  pin5: ["IO2"],
} as const;

const pinAttributes = {
  pin1: { doNotConnect: true },
  pin2: { doNotConnect: true },
  pin4: { requiresGround: true },
} as const;

export const TPD2E2U06DRLR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C1972959"],
      }}
      manufacturerPartNumber="TPD2E2U06DRLR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin4"]}
            pcbX="0.700024mm"
            pcbY="-0.499999mm"
            width="0.4500118mm"
            height="0.2899918mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.700024mm"
            pcbY="-0.000127mm"
            width="0.4500118mm"
            height="0.2899918mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="0.700024mm"
            pcbY="0.499999mm"
            width="0.4500118mm"
            height="0.2899918mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-0.700024mm"
            pcbY="-0.499999mm"
            width="0.4500118mm"
            height="0.2899918mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.700024mm"
            pcbY="0.499999mm"
            width="0.4500118mm"
            height="0.2899918mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: 0.6499097999998185, y: 0.844219800000019 },
              { x: -0.6501130000001467, y: 0.853821000000039 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 0.6499097999998185, y: -0.899439399999892 },
              { x: -0.6501130000001467, y: -0.899439399999892 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.8399780000002011, y: 0.9300210000001243 },
              { x: -0.8416830035043859, y: 0.9170702126211836 },
              { x: -0.8466818208456743, y: 0.9050020000000814 },
              { x: -0.8546337908832129, y: 0.8946387908830502 },
              { x: -0.8649970000001304, y: 0.8866868208455116 },
              { x: -0.8770652126213463, y: 0.8816880035042232 },
              { x: -0.890016000000287, y: 0.8799830000000384 },
              { x: -0.9029667873791141, y: 0.8816880035042232 },
              { x: -0.9150350000002163, y: 0.8866868208455116 },
              { x: -0.9253982091172475, y: 0.8946387908830502 },
              { x: -0.933350179154786, y: 0.9050020000000814 },
              { x: -0.9383489964960745, y: 0.9170702126211836 },
              { x: -0.9400540000002593, y: 0.9300210000001243 },
              { x: -0.9383489964960745, y: 0.9429717873789514 },
              { x: -0.933350179154786, y: 0.9550400000000536 },
              { x: -0.9253982091172475, y: 0.9654032091171985 },
              { x: -0.9150350000002163, y: 0.973355179154737 },
              { x: -0.9029667873791141, y: 0.9783539964957981 },
              { x: -0.890016000000287, y: 0.9800590000000966 },
              { x: -0.8770652126213463, y: 0.9783539964957981 },
              { x: -0.8649970000001304, y: 0.973355179154737 },
              { x: -0.8546337908832129, y: 0.9654032091171985 },
              { x: -0.8466818208456743, y: 0.9550400000000536 },
              { x: -0.8416830035043859, y: 0.9429717873789514 },
              { x: -0.8399780000002011, y: 0.9300210000001243 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.089916mm"
            pcbY="1.980821mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -1.368616000000202, y: 1.2308209999999917 },
              { x: 1.188783999999714, y: 1.2308209999999917 },
              { x: 1.188783999999714, y: -1.1487789999999904 },
              { x: -1.368616000000202, y: -1.1487789999999904 },
              { x: -1.368616000000202, y: 1.2308209999999917 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C1972959.obj?uuid=ce682da4a06c4a098d062f74e6fe00c1",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C1972959.step?uuid=ce682da4a06c4a098d062f74e6fe00c1",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.03 },
      }}
      {...props}
    />
  );
};

export default TPD2E2U06DRLR;
