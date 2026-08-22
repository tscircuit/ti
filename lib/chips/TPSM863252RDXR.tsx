import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VIN", "1"],
  pin2: ["SW", "2"],
  pin3: ["VOUT", "3"],
  pin4: ["PGND", "4"],
  pin5: ["PG", "5"],
  pin6: ["EN", "6"],
  pin7: ["FB", "7"],
} as const;

const pinRoles = {
  pin1: "power",
  pin2: "no-connect",
  pin3: "output",
  pin4: "ground",
  pin5: "power",
  pin6: "control",
  pin7: "unknown",
} as const;

const pinAttributes = {
  pin1: { requiresPower: true },
  pin2: { doNotConnect: true },
  pin4: { requiresGround: true },
  pin5: { requiresPower: true },
} as const;

export const TPSM863252RDXR = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing RDX0007A; official source https://www.ti.com/lit/gpn/TPSM863252 pages 29
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="TPSM863252RDXR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            points={[
              { x: "-1.9mm", y: "1.8mm" },
              { x: "-1.8mm", y: "1.9mm" },
              { x: "-0.925mm", y: "1.9mm" },
              { x: "-0.825mm", y: "1.8mm" },
              { x: "-0.825mm", y: "1.634mm" },
              { x: "-0.796mm", y: "1.563mm" },
              { x: "-0.507mm", y: "1.274mm" },
              { x: "-0.436mm", y: "1.245mm" },
              { x: "-0.39mm", y: "1.245mm" },
              { x: "-0.29mm", y: "1.145mm" },
              { x: "-0.29mm", y: "0.825mm" },
              { x: "-0.39mm", y: "0.725mm" },
              { x: "-1.8mm", y: "0.725mm" },
              { x: "-1.9mm", y: "0.825mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-1.15mm"
            pcbY="-0.675mm"
            width="1.5mm"
            height="2.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="1.15mm"
            pcbY="-0.675mm"
            width="1.5mm"
            height="2.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            points={[
              { x: "1.9mm", y: "1.8mm" },
              { x: "1.8mm", y: "1.9mm" },
              { x: "0.925mm", y: "1.9mm" },
              { x: "0.825mm", y: "1.8mm" },
              { x: "0.825mm", y: "1.634mm" },
              { x: "0.796mm", y: "1.563mm" },
              { x: "0.507mm", y: "1.274mm" },
              { x: "0.436mm", y: "1.245mm" },
              { x: "0.39mm", y: "1.245mm" },
              { x: "0.29mm", y: "1.145mm" },
              { x: "0.29mm", y: "0.825mm" },
              { x: "0.39mm", y: "0.725mm" },
              { x: "1.8mm", y: "0.725mm" },
              { x: "1.9mm", y: "0.825mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="0.5mm"
            pcbY="1.9mm"
            width="0.22mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0mm"
            pcbY="1.9mm"
            width="0.22mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-0.5mm"
            pcbY="1.9mm"
            width="0.22mm"
            height="0.6mm"
            shape="rect"
          />
        </footprint>
      }
      {...props}
    />
  );
};

export default TPSM863252RDXR;
