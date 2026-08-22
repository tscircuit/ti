import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["FAULT", "1"],
  pin2: ["SDI", "2"],
  pin3: ["SCLK", "3"],
  pin4: ["SDO", "4"],
  pin5: ["CLK_I", "5"],
  pin6: ["SIN", "6"],
  pin7: ["SOUT", "7"],
  pin8: ["CLK_O", "8"],
  pin9: ["DRDY", "9"],
  pin10: ["CS", "10"],
  pin11: ["GND", "11"],
  pin12: ["VCC", "12"],
  pin13: ["NC3", "13"],
} as const;

const pinRoles = {
  pin1: "output",
  pin2: "input",
  pin3: "control",
  pin4: "output",
  pin5: "control",
  pin6: "input",
  pin7: "output",
  pin8: "output",
  pin9: "output",
  pin10: "control",
  pin11: "ground",
  pin12: "power",
  pin13: "no-connect",
} as const;

const pinAttributes = {
  pin11: { requiresGround: true },
  pin12: { requiresPower: true },
  pin13: { doNotConnect: true },
} as const;

export const TLC69699DRRR = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing DRR0012G; official source https://www.ti.com/lit/gpn/TLC69699 pages 22
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="TLC69699DRRR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-1.08mm"
            pcbY="1.25mm"
            width="0.62mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="1.08mm"
            pcbY="1.25mm"
            width="0.62mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-1.08mm"
            pcbY="0.75mm"
            width="0.62mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="1.08mm"
            pcbY="0.75mm"
            width="0.62mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-1.08mm"
            pcbY="0.25mm"
            width="0.62mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="1.08mm"
            pcbY="0.25mm"
            width="0.62mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-1.08mm"
            pcbY="-0.25mm"
            width="0.62mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="1.08mm"
            pcbY="-0.25mm"
            width="0.62mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-1.08mm"
            pcbY="-0.75mm"
            width="0.62mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="1.08mm"
            pcbY="-0.75mm"
            width="0.62mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-1.08mm"
            pcbY="-1.25mm"
            width="0.62mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="1.08mm"
            pcbY="-1.25mm"
            width="0.62mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="0mm"
            pcbY="0mm"
            width="1.3mm"
            height="2.5mm"
            shape="rect"
          />
        </footprint>
      }
      {...props}
    />
  );
};

export default TLC69699DRRR;
