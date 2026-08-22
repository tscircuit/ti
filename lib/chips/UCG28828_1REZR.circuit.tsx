import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["HV", "1"],
  pin2: ["SW", "2"],
  pin3: ["GND", "3", "GND_3"],
  pin4: ["FLT", "4"],
  pin5: ["FB", "5"],
  pin6: ["TR", "6"],
  pin7: ["IPK", "7"],
  pin8: ["FCL", "8"],
  pin9: ["CDX", "9"],
  pin10: ["GND", "10", "GND_10"],
  pin11: ["VCC", "11"],
  pin12: ["GND", "12", "GND_12"],
} as const;

const pinRoles = {
  pin1: "power",
  pin2: "power",
  pin3: "ground",
  pin4: "output",
  pin5: "input",
  pin6: "input",
  pin7: "input",
  pin8: "input",
  pin9: "input",
  pin10: "ground",
  pin11: "power",
  pin12: "ground",
} as const;

const pinAttributes = {
  pin1: { requiresPower: true },
  pin2: { requiresPower: true },
  pin3: { requiresGround: true },
  pin10: { requiresGround: true },
  pin11: { requiresPower: true },
  pin12: { requiresGround: true },
} as const;

export const UCG28828_1REZR = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing REZ0012A; official source https://www.ti.com/lit/gpn/UCG28828 pages 41,42
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="UCG28828-1REZR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            points={[
              { x: "-2.7mm", y: "-2.3mm" },
              { x: "-2.7mm", y: "-2.15mm" },
              { x: "-2.65mm", y: "-2.1mm" },
              { x: "-2.35mm", y: "-2.1mm" },
              { x: "-2.3mm", y: "-2.05mm" },
              { x: "-2.3mm", y: "-1.9mm" },
              { x: "-2.35mm", y: "-1.85mm" },
              { x: "-2.65mm", y: "-1.85mm" },
              { x: "-2.7mm", y: "-1.8mm" },
              { x: "-2.7mm", y: "-1.65mm" },
              { x: "-2.65mm", y: "-1.6mm" },
              { x: "-2.15mm", y: "-1.6mm" },
              { x: "-2.1mm", y: "-1.65mm" },
              { x: "-2.1mm", y: "-2.3mm" },
              { x: "-2.15mm", y: "-2.35mm" },
              { x: "-2.65mm", y: "-2.35mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin2"]}
            points={[
              { x: "-2.7mm", y: "0.15mm" },
              { x: "-2.7mm", y: "0.3mm" },
              { x: "-2.65mm", y: "0.35mm" },
              { x: "-2.35mm", y: "0.35mm" },
              { x: "-2.3mm", y: "0.4mm" },
              { x: "-2.3mm", y: "0.55mm" },
              { x: "-2.35mm", y: "0.6mm" },
              { x: "-2.65mm", y: "0.6mm" },
              { x: "-2.7mm", y: "0.65mm" },
              { x: "-2.7mm", y: "0.8mm" },
              { x: "-2.65mm", y: "0.85mm" },
              { x: "-2.35mm", y: "0.85mm" },
              { x: "-2.3mm", y: "0.9mm" },
              { x: "-2.3mm", y: "1.05mm" },
              { x: "-2.35mm", y: "1.1mm" },
              { x: "-2.65mm", y: "1.1mm" },
              { x: "-2.7mm", y: "1.15mm" },
              { x: "-2.7mm", y: "1.3mm" },
              { x: "-2.65mm", y: "1.35mm" },
              { x: "-2.35mm", y: "1.35mm" },
              { x: "-2.3mm", y: "1.4mm" },
              { x: "-2.3mm", y: "1.55mm" },
              { x: "-2.35mm", y: "1.6mm" },
              { x: "-2.65mm", y: "1.6mm" },
              { x: "-2.7mm", y: "1.65mm" },
              { x: "-2.7mm", y: "1.8mm" },
              { x: "-2.65mm", y: "1.85mm" },
              { x: "-2.35mm", y: "1.85mm" },
              { x: "-2.3mm", y: "1.9mm" },
              { x: "-2.3mm", y: "2.05mm" },
              { x: "-2.35mm", y: "2.1mm" },
              { x: "-2.65mm", y: "2.1mm" },
              { x: "-2.7mm", y: "2.15mm" },
              { x: "-2.7mm", y: "2.3mm" },
              { x: "-2.65mm", y: "2.35mm" },
              { x: "-2.15mm", y: "2.35mm" },
              { x: "-2.1mm", y: "2.3mm" },
              { x: "-2.1mm", y: "0.15mm" },
              { x: "-2.15mm", y: "0.1mm" },
              { x: "-2.65mm", y: "0.1mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-0.225mm"
            pcbY="-2.4mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0.275mm"
            pcbY="-2.4mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="0.775mm"
            pcbY="-2.4mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="1.275mm"
            pcbY="-2.4mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="1.775mm"
            pcbY="-2.4mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            points={[
              { x: "2.225mm", y: "-2.6875mm" },
              { x: "2.575mm", y: "-2.6875mm" },
              { x: "2.675mm", y: "-2.5875mm" },
              { x: "2.675mm", y: "-2.2125mm" },
              { x: "2.575mm", y: "-2.1125mm" },
              { x: "2.225mm", y: "-2.1125mm" },
              { x: "2.125mm", y: "-2.2125mm" },
              { x: "2.125mm", y: "-2.5875mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="2.4mm"
            pcbY="-1.75mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="2.4mm"
            pcbY="-1.25mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="2.4mm"
            pcbY="-0.75mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            points={[
              { x: "0.7mm", y: "2.7mm" },
              { x: "0.65mm", y: "2.65mm" },
              { x: "0.65mm", y: "2.35mm" },
              { x: "0.6mm", y: "2.3mm" },
              { x: "0.45mm", y: "2.3mm" },
              { x: "0.4mm", y: "2.35mm" },
              { x: "0.4mm", y: "2.65mm" },
              { x: "0.35mm", y: "2.7mm" },
              { x: "0.2mm", y: "2.7mm" },
              { x: "0.15mm", y: "2.65mm" },
              { x: "0.15mm", y: "2.35mm" },
              { x: "0.1mm", y: "2.3mm" },
              { x: "-0.05mm", y: "2.3mm" },
              { x: "-0.1mm", y: "2.35mm" },
              { x: "-0.1mm", y: "2.65mm" },
              { x: "-0.15mm", y: "2.7mm" },
              { x: "-0.3mm", y: "2.7mm" },
              { x: "-0.35mm", y: "2.65mm" },
              { x: "-0.35mm", y: "2.34mm" },
              { x: "-0.372mm", y: "2.304mm" },
              { x: "-0.4mm", y: "2.259mm" },
              { x: "-0.4mm", y: "-1.8mm" },
              { x: "-0.35mm", y: "-1.85mm" },
              { x: "1.8mm", y: "-1.85mm" },
              { x: "1.85mm", y: "-1.8mm" },
              { x: "1.85mm", y: "-0.475mm" },
              { x: "1.95mm", y: "-0.375mm" },
              { x: "2.648mm", y: "-0.375mm" },
              { x: "2.698mm", y: "-0.325mm" },
              { x: "2.698mm", y: "-0.175mm" },
              { x: "2.648mm", y: "-0.125mm" },
              { x: "2.35mm", y: "-0.125mm" },
              { x: "2.3mm", y: "-0.075mm" },
              { x: "2.3mm", y: "0.075mm" },
              { x: "2.35mm", y: "0.125mm" },
              { x: "2.648mm", y: "0.125mm" },
              { x: "2.698mm", y: "0.175mm" },
              { x: "2.698mm", y: "0.325mm" },
              { x: "2.648mm", y: "0.375mm" },
              { x: "2.35mm", y: "0.375mm" },
              { x: "2.3mm", y: "0.425mm" },
              { x: "2.3mm", y: "0.575mm" },
              { x: "2.35mm", y: "0.625mm" },
              { x: "2.648mm", y: "0.625mm" },
              { x: "2.698mm", y: "0.675mm" },
              { x: "2.698mm", y: "0.825mm" },
              { x: "2.648mm", y: "0.875mm" },
              { x: "2.35mm", y: "0.875mm" },
              { x: "2.3mm", y: "0.925mm" },
              { x: "2.3mm", y: "1.075mm" },
              { x: "2.35mm", y: "1.125mm" },
              { x: "2.648mm", y: "1.125mm" },
              { x: "2.698mm", y: "1.175mm" },
              { x: "2.698mm", y: "1.325mm" },
              { x: "2.648mm", y: "1.375mm" },
              { x: "2.35mm", y: "1.375mm" },
              { x: "2.3mm", y: "1.425mm" },
              { x: "2.3mm", y: "1.575mm" },
              { x: "2.35mm", y: "1.625mm" },
              { x: "2.648mm", y: "1.625mm" },
              { x: "2.698mm", y: "1.675mm" },
              { x: "2.698mm", y: "1.825mm" },
              { x: "2.648mm", y: "1.875mm" },
              { x: "2.35mm", y: "1.875mm" },
              { x: "2.3mm", y: "1.925mm" },
              { x: "2.3mm", y: "2.075mm" },
              { x: "2.35mm", y: "2.125mm" },
              { x: "2.648mm", y: "2.125mm" },
              { x: "2.698mm", y: "2.175mm" },
              { x: "2.698mm", y: "2.275mm" },
              { x: "2.648mm", y: "2.325mm" },
              { x: "2.4mm", y: "2.325mm" },
              { x: "2.35mm", y: "2.375mm" },
              { x: "2.35mm", y: "2.65mm" },
              { x: "2.3mm", y: "2.7mm" },
              { x: "2.2mm", y: "2.7mm" },
              { x: "2.15mm", y: "2.65mm" },
              { x: "2.15mm", y: "2.35mm" },
              { x: "2.1mm", y: "2.3mm" },
              { x: "1.95mm", y: "2.3mm" },
              { x: "1.9mm", y: "2.35mm" },
              { x: "1.9mm", y: "2.65mm" },
              { x: "1.85mm", y: "2.7mm" },
              { x: "1.7mm", y: "2.7mm" },
              { x: "1.65mm", y: "2.65mm" },
              { x: "1.65mm", y: "2.35mm" },
              { x: "1.6mm", y: "2.3mm" },
              { x: "1.45mm", y: "2.3mm" },
              { x: "1.4mm", y: "2.35mm" },
              { x: "1.4mm", y: "2.65mm" },
              { x: "1.35mm", y: "2.7mm" },
              { x: "1.2mm", y: "2.7mm" },
              { x: "1.15mm", y: "2.65mm" },
              { x: "1.15mm", y: "2.35mm" },
              { x: "1.1mm", y: "2.3mm" },
              { x: "0.95mm", y: "2.3mm" },
              { x: "0.9mm", y: "2.35mm" },
              { x: "0.9mm", y: "2.65mm" },
              { x: "0.85mm", y: "2.7mm" },
            ]}
            shape="polygon"
          />
        </footprint>
      }
      {...props}
    />
  );
};

export default UCG28828_1REZR;
