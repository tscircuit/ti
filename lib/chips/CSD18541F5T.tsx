import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["GATE", "1"],
  pin2: ["SOURCE", "2"],
  pin3: ["DRAIN", "3"],
} as const;

const pinRoles = {
  pin1: "output",
  pin2: "unknown",
  pin3: "unknown",
} as const;

export const CSD18541F5T = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing YJK0003A; official source https://www.ti.com/lit/gpn/CSD18541F5 pages 14
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      manufacturerPartNumber="CSD18541F5T"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="0mm"
            pcbY="0.25mm"
            width="0.39mm"
            height="0.15mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="0mm"
            pcbY="0mm"
            width="0.39mm"
            height="0.15mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0mm"
            pcbY="-0.25mm"
            width="0.39mm"
            height="0.15mm"
            shape="rect"
          />
        </footprint>
      }
      {...props}
    />
  );
};

export default CSD18541F5T;
