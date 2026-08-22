import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["RC"],
  pin2: ["SS"],
  pin3: ["pin3"],
  pin4: ["COMP"],
  pin5: ["FB"],
  pin6: ["GND"],
  pin7: ["ISNS"],
  pin8: ["GDRV"],
  pin9: ["BP"],
  pin10: ["VDD"],
  pin11: ["EP"],
} as const;

const pinAttributes = {
  pin6: { requiresGround: true },
  pin10: { requiresPower: true },
} as const;

export const TPS40210QDGQRQ1 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C363281"],
      }}
      manufacturerPartNumber="TPS40210QDGQRQ1"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.999744mm"
            pcbY="-2.20091mm"
            width="0.2999994mm"
            height="1.4500098mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.499872mm"
            pcbY="-2.20091mm"
            width="0.2999994mm"
            height="1.4500098mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0.000254mm"
            pcbY="-2.20091mm"
            width="0.2999994mm"
            height="1.4500098mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0.50038mm"
            pcbY="-2.20091mm"
            width="0.2999994mm"
            height="1.4500098mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="1.000252mm"
            pcbY="-2.20091mm"
            width="0.2999994mm"
            height="1.4500098mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="1.000252mm"
            pcbY="2.20091mm"
            width="0.2999994mm"
            height="1.4500098mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="0.500126mm"
            pcbY="2.20091mm"
            width="0.2999994mm"
            height="1.4500098mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="0mm"
            pcbY="2.20091mm"
            width="0.2999994mm"
            height="1.4500098mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="-0.001016mm"
            pcbY="-0.000508mm"
            width="1.8899886mm"
            height="1.8299938mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="-0.500126mm"
            pcbY="2.20091mm"
            width="0.2999994mm"
            height="1.4500098mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="-1.000252mm"
            pcbY="2.20091mm"
            width="0.2999994mm"
            height="1.4500098mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -1.501393999999891, y: -0.35239960000001247 },
              { x: -1.501393999999891, y: -1.2699999999999818 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.3970000000000482, y: -1.2699999999999818 },
              { x: 1.524000000000001, y: -1.2699999999999818 },
              { x: 1.524000000000001, y: 1.2699999999999818 },
              { x: -1.524000000000001, y: 1.2699999999999818 },
              { x: -1.524000000000001, y: 0.3809999999999718 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.501393999999891, y: -0.35239960000001247 },
              { x: -1.5023592000000008, y: 0.3531616000000213 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="0.001016mm"
            pcbY="3.92354mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -1.7729839999999513, y: 3.1735400000000027 },
              { x: 1.7750160000000506, y: 3.1735400000000027 },
              { x: 1.7750160000000506, y: -3.168459999999868 },
              { x: -1.7729839999999513, y: -3.168459999999868 },
              { x: -1.7729839999999513, y: 3.1735400000000027 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C363281.obj?uuid=14de937fc3fd4ee893ca6c1a9fedc010",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C363281.step?uuid=14de937fc3fd4ee893ca6c1a9fedc010",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: -0.000012700000070253736, z: 0 },
      }}
      {...props}
    />
  );
};

export default TPS40210QDGQRQ1;
