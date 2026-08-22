import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VOUT", "1", "VOUT_1"],
  pin2: ["VBB", "2"],
  pin3: ["ILIM", "3"],
  pin4: ["GND", "4"],
  pin5: ["NC", "5", "NC_5"],
  pin6: ["DIAG_EN", "6"],
  pin7: ["EN", "7"],
  pin8: ["NC", "8", "NC_8"],
  pin9: ["SNS", "9"],
  pin10: ["FLT", "10"],
  pin11: ["VOUT", "11", "VOUT_11"],
} as const;

const pinRoles = {
  pin1: "output",
  pin2: "power",
  pin3: "control",
  pin4: "ground",
  pin5: "no-connect",
  pin6: "control",
  pin7: "control",
  pin8: "no-connect",
  pin9: "output",
  pin10: "output",
  pin11: "output",
} as const;

const pinAttributes = {
  pin2: { requiresPower: true },
  pin4: { requiresGround: true },
  pin5: { doNotConnect: true },
  pin8: { doNotConnect: true },
} as const;

export const TPS1HC03PQVAHRQ1 = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing VAH0011A; official source https://www.ti.com/lit/gpn/TPS1HC03-Q1 pages 71
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="TPS1HC03PQVAHRQ1"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            points={[
              { x: "-1.25mm", y: "1.124001mm" },
              { x: "-1.3mm", y: "1.174001mm" },
              { x: "-1.3mm", y: "1.374mm" },
              { x: "-1.25mm", y: "1.424mm" },
              { x: "-1.024999mm", y: "1.424mm" },
              { x: "-0.974997mm", y: "1.474mm" },
              { x: "-0.974999mm", y: "1.949mm" },
              { x: "-0.924999mm", y: "1.998998mm" },
              { x: "-0.725mm", y: "1.999mm" },
              { x: "-0.674997mm", y: "1.949mm" },
              { x: "-0.674997mm", y: "1.699001mm" },
              { x: "-0.625mm", y: "1.649001mm" },
              { x: "-0.475mm", y: "1.649001mm" },
              { x: "-0.424998mm", y: "1.699001mm" },
              { x: "-0.425mm", y: "1.949mm" },
              { x: "-0.375001mm", y: "1.999mm" },
              { x: "-0.175001mm", y: "1.999mm" },
              { x: "-0.124998mm", y: "1.949mm" },
              { x: "-0.125001mm", y: "1.174001mm" },
              { x: "-0.175001mm", y: "1.123998mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin2"]}
            points={[
              { x: "-1.3mm", y: "0.823999mm" },
              { x: "-1.25mm", y: "0.873999mm" },
              { x: "1.25mm", y: "0.873999mm" },
              { x: "1.3mm", y: "0.823999mm" },
              { x: "1.3mm", y: "0.623999mm" },
              { x: "1.25mm", y: "0.573999mm" },
              { x: "1.000001mm", y: "0.573999mm" },
              { x: "0.950001mm", y: "0.523999mm" },
              { x: "0.950001mm", y: "0.374mm" },
              { x: "1.000001mm", y: "0.324mm" },
              { x: "1.25mm", y: "0.324mm" },
              { x: "1.3mm", y: "0.274mm" },
              { x: "1.3mm", y: "0.074mm" },
              { x: "1.25mm", y: "0.024mm" },
              { x: "-1.25mm", y: "0.024mm" },
              { x: "-1.3mm", y: "0.074mm" },
              { x: "-1.3mm", y: "0.274mm" },
              { x: "-1.25mm", y: "0.324mm" },
              { x: "-1.000001mm", y: "0.324mm" },
              { x: "-0.950001mm", y: "0.374mm" },
              { x: "-0.950001mm", y: "0.523999mm" },
              { x: "-1.000001mm", y: "0.573999mm" },
              { x: "-1.25mm", y: "0.573999mm" },
              { x: "-1.3mm", y: "0.623999mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin11"]}
            points={[
              { x: "1.25mm", y: "1.124001mm" },
              { x: "1.3mm", y: "1.174001mm" },
              { x: "1.3mm", y: "1.374mm" },
              { x: "1.25mm", y: "1.424mm" },
              { x: "1.024999mm", y: "1.424mm" },
              { x: "0.974997mm", y: "1.474mm" },
              { x: "0.974999mm", y: "1.949mm" },
              { x: "0.924999mm", y: "1.998998mm" },
              { x: "0.725mm", y: "1.999mm" },
              { x: "0.674997mm", y: "1.949mm" },
              { x: "0.674997mm", y: "1.699001mm" },
              { x: "0.625mm", y: "1.649001mm" },
              { x: "0.475mm", y: "1.649001mm" },
              { x: "0.424998mm", y: "1.699001mm" },
              { x: "0.425mm", y: "1.949mm" },
              { x: "0.375001mm", y: "1.999mm" },
              { x: "0.175001mm", y: "1.999mm" },
              { x: "0.124998mm", y: "1.949mm" },
              { x: "0.125001mm", y: "1.174001mm" },
              { x: "0.175001mm", y: "1.123998mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-0.9mm"
            pcbY="-0.375mm"
            width="0.8mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-0.9mm"
            pcbY="-0.925mm"
            width="0.8mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            points={[
              { x: "-1.3mm", y: "-1.325mm" },
              { x: "-0.55mm", y: "-1.325mm" },
              { x: "-0.55mm", y: "-2mm" },
              { x: "-0.85mm", y: "-2mm" },
              { x: "-0.85mm", y: "-1.625mm" },
              { x: "-1.3mm", y: "-1.625mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-0.275mm"
            pcbY="-1.65mm"
            width="0.3mm"
            height="0.7mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="0.275mm"
            pcbY="-1.65mm"
            width="0.3mm"
            height="0.7mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            points={[
              { x: "1.3mm", y: "-1.325mm" },
              { x: "0.55mm", y: "-1.325mm" },
              { x: "0.55mm", y: "-2mm" },
              { x: "0.85mm", y: "-2mm" },
              { x: "0.85mm", y: "-1.625mm" },
              { x: "1.3mm", y: "-1.625mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="0.9mm"
            pcbY="-0.925mm"
            width="0.8mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="0.9mm"
            pcbY="-0.375mm"
            width="0.8mm"
            height="0.3mm"
            shape="rect"
          />
        </footprint>
      }
      {...props}
    />
  );
};

export default TPS1HC03PQVAHRQ1;
