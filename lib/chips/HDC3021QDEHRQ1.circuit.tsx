import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["SDA", "1"],
  pin2: ["ADDR", "2"],
  pin3: ["ALERT", "3"],
  pin4: ["SCL", "4"],
  pin5: ["VDD", "5"],
  pin6: ["RESET", "6"],
  pin7: ["ADDR1", "7"],
  pin8: ["GND", "8"],
  pin9: ["THERMAL_PAD", "9"],
} as const;

const pinRoles = {
  pin1: "bidirectional",
  pin2: "control",
  pin3: "output",
  pin4: "control",
  pin5: "power",
  pin6: "control",
  pin7: "control",
  pin8: "ground",
  pin9: "thermal",
} as const;

const pinAttributes = {
  pin5: { requiresPower: true },
  pin8: { requiresGround: true },
} as const;

export const HDC3021QDEHRQ1 = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing DEH0008A; official source https://www.ti.com/lit/gpn/HDC3021-Q1 pages 44
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="HDC3021QDEHRQ1"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.85mm"
            pcbY="0.75mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="0.85mm"
            pcbY="0.75mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.85mm"
            pcbY="0.25mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="0.85mm"
            pcbY="0.25mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-0.85mm"
            pcbY="-0.25mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0.85mm"
            pcbY="-0.25mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-0.85mm"
            pcbY="-0.75mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="0.85mm"
            pcbY="-0.75mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="0mm"
            pcbY="0mm"
            width="1.2mm"
            height="1.9mm"
            shape="rect"
          />
        </footprint>
      }
      {...props}
    />
  );
};

export default HDC3021QDEHRQ1;
