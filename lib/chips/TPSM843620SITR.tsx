import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["FB"],
  pin2: ["AGND"],
  pin3: ["BP5"],
  pin4: ["PG"],
  pin5: ["MODE"],
  pin6: ["EN"],
  pin7: ["PGND1"],
  pin8: ["PGND2"],
  pin9: ["PGND3"],
  pin10: ["VIN"],
  pin11: ["SW"],
  pin12: ["BOOT"],
  pin13: ["pin13"],
  pin14: ["VOUT"],
  pin15: ["pin15"],
} as const;

const pinAttributes = {
  pin2: { requiresGround: true },
  pin7: { requiresGround: true },
  pin8: { requiresGround: true },
  pin9: { requiresGround: true },
  pin10: { requiresPower: true },
} as const;

export const TPSM843620SITR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C37033163"],
      }}
      manufacturerPartNumber="TPSM843620SITR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-1.325118mm"
            pcbY="1.500124mm"
            width="0.6500114mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-1.400048mm"
            pcbY="0.999998mm"
            width="0.499999mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-1.400048mm"
            pcbY="0.500126mm"
            width="0.499999mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-1.400048mm"
            pcbY="0mm"
            width="0.499999mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-1.400048mm"
            pcbY="-0.499872mm"
            width="0.499999mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-1.400048mm"
            pcbY="-0.999744mm"
            width="0.499999mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-1.325118mm"
            pcbY="-1.49987mm"
            width="0.6500114mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="0mm"
            pcbY="-1.399794mm"
            width="1.6500094mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="1.324864mm"
            pcbY="-1.49987mm"
            width="0.6500114mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="1.35001mm"
            pcbY="-0.499872mm"
            width="0.5999988mm"
            height="1.2500102mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="1.399794mm"
            pcbY="0.500126mm"
            width="0.499999mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="1.399794mm"
            pcbY="0.999998mm"
            width="0.499999mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="1.324864mm"
            pcbY="1.500124mm"
            width="0.6500114mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="0mm"
            pcbY="1.385062mm"
            width="1.6500094mm"
            height="0.4800092mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="0mm"
            pcbY="0mm"
            width="1.6500094mm"
            height="1.7999964mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -2.286076200000025, y: 1.0161269999999831 },
              { x: -2.286076200000025, y: 2.286126999999965 },
              { x: -1.0160761999999295, y: 2.286126999999965 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.194818mm"
            pcbY="3.287524mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -2.5403179999999566, y: 2.537523999999962 },
              { x: 2.1506819999999607, y: 2.537523999999962 },
              { x: 2.1506819999999607, y: -2.153476000000069 },
              { x: -2.5403179999999566, y: -2.153476000000069 },
              { x: -2.5403179999999566, y: 2.537523999999962 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C37033163.obj?uuid=969e5c722afb4cbc9a50ddbab23a7549",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C37033163.step?uuid=969e5c722afb4cbc9a50ddbab23a7549",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: 0.0001142999999501626,
          y: -0.00013969999997698324,
          z: -0.05,
        },
      }}
      {...props}
    />
  );
};

export default TPSM843620SITR;
