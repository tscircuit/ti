import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["SYNC"],
  pin2: ["pin2"],
  pin3: ["TON"],
  pin4: ["VCC"],
  pin5: ["GATE"],
  pin6: ["GND"],
  pin7: ["VS"],
  pin8: ["VD"],
  pin9: ["EP"],
} as const;

const pinAttributes = {
  pin4: { requiresPower: true },
  pin6: { requiresGround: true },
} as const;

export const UCC24610DRBR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2650188"],
      }}
      manufacturerPartNumber="UCC24610DRBR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-1.47574mm"
            pcbY="0.9750044mm"
            width="0.849884mm"
            height="0.3400044mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-1.47574mm"
            pcbY="0.32512mm"
            width="0.849884mm"
            height="0.3400044mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-1.47574mm"
            pcbY="-0.32512mm"
            width="0.849884mm"
            height="0.3400044mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-1.47574mm"
            pcbY="-0.97536mm"
            width="0.849884mm"
            height="0.3400044mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="1.47574mm"
            pcbY="-0.97536mm"
            width="0.849884mm"
            height="0.3400044mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="1.47574mm"
            pcbY="-0.32512mm"
            width="0.849884mm"
            height="0.3400044mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="1.47574mm"
            pcbY="0.32512mm"
            width="0.849884mm"
            height="0.3400044mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="1.47574mm"
            pcbY="0.97536mm"
            width="0.849884mm"
            height="0.3400044mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            points={[
              { x: "-0.759968mm", y: "0.890016mm" },
              { x: "-0.4700016mm", y: "0.8899906mm" },
              { x: "-0.4700016mm", y: "1.7100042mm" },
              { x: "-0.1800098mm", y: "1.7100042mm" },
              { x: "-0.1800098mm", y: "0.8800084mm" },
              { x: "0.1800098mm", y: "0.8800084mm" },
              { x: "0.1800098mm", y: "1.7100042mm" },
              { x: "0.4700016mm", y: "1.7100042mm" },
              { x: "0.4700016mm", y: "0.8800084mm" },
              { x: "0.7599934mm", y: "0.8800084mm" },
              { x: "0.7599934mm", y: "-0.8899906mm" },
              { x: "0.4700016mm", y: "-0.8899906mm" },
              { x: "0.4700016mm", y: "-1.7100042mm" },
              { x: "0.1800098mm", y: "-1.7100042mm" },
              { x: "0.1800098mm", y: "-0.8899906mm" },
              { x: "-0.1800098mm", y: "-0.8899906mm" },
              { x: "-0.1800098mm", y: "-1.7100042mm" },
              { x: "-0.4700016mm", y: "-1.7100042mm" },
              { x: "-0.4700016mm", y: "-0.8899906mm" },
              { x: "-0.7599934mm", y: "-0.8899906mm" },
              { x: "-0.7599934mm", y: "0.8899906mm" },
              { x: "-0.759968mm", y: "0.890016mm" },
              { x: "-0.759968mm", y: "0.890016mm" },
              { x: "-0.759968mm", y: "0.890016mm" },
            ]}
            shape="polygon"
          />
          <silkscreenpath
            route={[
              { x: 0.00086359999988872, y: 1.524000000000001 },
              { x: -0.00086359999988872, y: 1.524000000000001 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.524000000000001, y: 1.3245084000000134 },
              { x: 1.524000000000001, y: 1.524000000000001 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 0.649147800000037, y: -1.524000000000001 },
              { x: 1.524000000000001, y: -1.524000000000001 },
              { x: 1.524000000000001, y: -1.3245083999998997 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.00086359999988872, y: -1.524000000000001 },
              { x: 0.00086359999988872, y: -1.524000000000001 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.524000000000001, y: -1.3245083999998997 },
              { x: -1.524000000000001, y: -1.524000000000001 },
              { x: -0.649147800000037, y: -1.524000000000001 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.649147800000037, y: 1.524000000000001 },
              { x: -1.524000000000001, y: 1.524000000000001 },
              { x: -1.524000000000001, y: 1.3245084000000134 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.524000000000001, y: 1.524000000000001 },
              { x: 0.649147800000037, y: 1.524000000000001 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.8496280000000525, y: 1.524000000000001 },
              { x: -1.8515147551466953, y: 1.5096686718346746 },
              { x: -1.8570464413415948, y: 1.496313999999984 },
              { x: -1.8658460833121353, y: 1.4848460833122772 },
              { x: -1.8773139999999557, y: 1.4760464413417367 },
              { x: -1.8906686718345327, y: 1.4705147551468372 },
              { x: -1.9049999999999727, y: 1.4686280000000806 },
              { x: -1.9193313281654127, y: 1.4705147551468372 },
              { x: -1.932685999999876, y: 1.4760464413417367 },
              { x: -1.9441539166878101, y: 1.4848460833122772 },
              { x: -1.9529535586583506, y: 1.496313999999984 },
              { x: -1.9584852448532502, y: 1.5096686718346746 },
              { x: -1.960371999999893, y: 1.524000000000001 },
              { x: -1.9584852448532502, y: 1.538331328165441 },
              { x: -1.9529535586583506, y: 1.5516860000000179 },
              { x: -1.9441539166878101, y: 1.5631539166878383 },
              { x: -1.932685999999876, y: 1.5719535586583788 },
              { x: -1.9193313281654127, y: 1.5774852448532783 },
              { x: -1.9049999999999727, y: 1.5793720000000349 },
              { x: -1.8906686718345327, y: 1.5774852448532783 },
              { x: -1.8773139999999557, y: 1.5719535586583788 },
              { x: -1.8658460833121353, y: 1.5631539166878383 },
              { x: -1.8570464413415948, y: 1.5516860000000179 },
              { x: -1.8515147551466953, y: 1.538331328165441 },
              { x: -1.8496280000000525, y: 1.524000000000001 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.24892mm"
            pcbY="2.7018mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -2.65791999999999, y: 1.9518000000000484 },
              { x: 2.1600799999999936, y: 1.9518000000000484 },
              { x: 2.1600799999999936, y: -1.977200000000039 },
              { x: -2.65791999999999, y: -1.977200000000039 },
              { x: -2.65791999999999, y: 1.9518000000000484 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2650188.obj?uuid=e674e2bdf5a0456bb02fe0267cbd5342",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2650188.step?uuid=e674e2bdf5a0456bb02fe0267cbd5342",
        pcbRotationOffset: 180,
        modelOriginPosition: { x: -0.000012700000070253736, y: 0, z: 0 },
      }}
      {...props}
    />
  );
};

export default UCC24610DRBR;
