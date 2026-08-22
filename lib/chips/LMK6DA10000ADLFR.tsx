import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["OE", "ST", "NC", "1", "OE_1"],
  pin2: ["OE", "ST", "NC", "2", "OE_2"],
  pin3: ["GND", "3"],
  pin4: ["OUTP", "4"],
  pin5: ["OUTN", "5"],
  pin6: ["VDD", "6"],
} as const;

const pinRoles = {
  pin1: "no-connect",
  pin2: "no-connect",
  pin3: "ground",
  pin4: "output",
  pin5: "output",
  pin6: "power",
} as const;

const pinAttributes = {
  pin1: { doNotConnect: true },
  pin2: { doNotConnect: true },
  pin3: { requiresGround: true },
  pin6: { requiresPower: true },
} as const;

export const LMK6DA10000ADLFR = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing DLF0006B; official source https://www.ti.com/lit/gpn/LMK6D pages 64
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="LMK6DA10000ADLFR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.475mm"
            pcbY="0.5mm"
            width="0.9mm"
            height="0.4mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0.475mm"
            pcbY="0.5mm"
            width="0.9mm"
            height="0.4mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.475mm"
            pcbY="0mm"
            width="0.9mm"
            height="0.4mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="0.475mm"
            pcbY="0mm"
            width="0.9mm"
            height="0.4mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-0.475mm"
            pcbY="-0.5mm"
            width="0.9mm"
            height="0.4mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0.475mm"
            pcbY="-0.5mm"
            width="0.9mm"
            height="0.4mm"
            shape="rect"
          />
        </footprint>
      }
      {...props}
    />
  );
};

export default LMK6DA10000ADLFR;
