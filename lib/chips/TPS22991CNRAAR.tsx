import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VIN", "1"],
  pin2: ["ON", "2"],
  pin3: ["VOUT", "3"],
  pin4: ["GND", "4"],
} as const;

const pinRoles = {
  pin1: "power",
  pin2: "input",
  pin3: "output",
  pin4: "ground",
} as const;

const pinAttributes = {
  pin1: { requiresPower: true },
  pin4: { requiresGround: true },
} as const;

export const TPS22991CNRAAR = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing RAA0004A; official source https://www.ti.com/lit/gpn/TPS22991 pages 26
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="TPS22991CNRAAR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.3375mm"
            pcbY="0.2mm"
            width="0.475mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.3375mm"
            pcbY="-0.2mm"
            width="0.475mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0.3375mm"
            pcbY="-0.2mm"
            width="0.475mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0.3375mm"
            pcbY="0.2mm"
            width="0.475mm"
            height="0.2mm"
            shape="rect"
          />
        </footprint>
      }
      {...props}
    />
  );
};

export default TPS22991CNRAAR;
