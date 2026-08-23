import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["V", "1", "V_1"],
  pin2: ["CLR_A", "2"],
  pin3: ["CLR_B", "3"],
  pin4: ["IN_B", "4", "IN_B_4"],
  pin5: ["IN_B", "5", "IN_B_5"],
  pin6: ["V", "6", "V_6"],
  pin7: ["OUT_B", "7"],
  pin8: ["OUT_A", "8"],
  pin9: ["IN_A", "9", "IN_A_9"],
  pin10: ["IN_A", "10", "IN_A_10"],
} as const;

const pinRoles = {
  pin1: "unknown",
  pin2: "input",
  pin3: "input",
  pin4: "input",
  pin5: "input",
  pin6: "unknown",
  pin7: "output",
  pin8: "output",
  pin9: "input",
  pin10: "input",
} as const;

export const TLV9022L1RUGR = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing RUG0010B; official source https://www.ti.com/lit/gpn/TLV9022L pages 35
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      manufacturerPartNumber="TLV9022L1RUGR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.65mm"
            pcbY="0.75mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.65mm"
            pcbY="0.25mm"
            width="0.6mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-0.65mm"
            pcbY="-0.25mm"
            width="0.6mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-0.65mm"
            pcbY="-0.75mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="0mm"
            pcbY="-1.05mm"
            width="0.3mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0.65mm"
            pcbY="-0.75mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="0.65mm"
            pcbY="-0.25mm"
            width="0.6mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="0.65mm"
            pcbY="0.25mm"
            width="0.6mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="0.65mm"
            pcbY="0.75mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="0mm"
            pcbY="1.05mm"
            width="0.3mm"
            height="0.6mm"
            shape="rect"
          />
        </footprint>
      }
      {...props}
    />
  );
};

export default TLV9022L1RUGR;
