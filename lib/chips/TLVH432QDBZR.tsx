import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["K"],
  pin2: ["R"],
  pin3: ["A"],
} as const;

export const TLVH432QDBZR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C2877917"],
      }}
      manufacturerPartNumber="TLVH432QDBZR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="1.134999mm"
            pcbY="-0.95504mm"
            width="1.0700004mm"
            height="0.532003mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="1.134999mm"
            pcbY="0.95504mm"
            width="1.0700004mm"
            height="0.532003mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-1.134999mm"
            pcbY="0mm"
            width="1.0700004mm"
            height="0.532003mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: 0.8760714000000007, y: 1.5361919999999145 },
              { x: -0.8763254000000416, y: 1.5361919999999145 },
              { x: -0.8763254000000416, y: 0.49458879999997407 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 0.8760714000000007, y: -1.5361920000000282 },
              { x: -0.8763254000000416, y: -1.5361920000000282 },
              { x: -0.8763254000000416, y: -0.49458879999997407 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 0.8760714000000007, y: 0.45539659999997184 },
              { x: 0.8760714000000007, y: -0.45539659999985815 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="0.037973mm"
            pcbY="2.524mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -1.9265269999999646, y: 1.774000000000001 },
              { x: 2.002473000000009, y: 1.774000000000001 },
              { x: 2.002473000000009, y: -1.7993999999999915 },
              { x: -1.9265269999999646, y: -1.7993999999999915 },
              { x: -1.9265269999999646, y: 1.774000000000001 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2877917.obj?uuid=ecf36202acc44529a8be5ff7d3195643",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2877917.step?uuid=ecf36202acc44529a8be5ff7d3195643",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0.000012700000070253736, z: -0.413 },
      }}
      {...props}
    />
  );
};

export default TLVH432QDBZR;
