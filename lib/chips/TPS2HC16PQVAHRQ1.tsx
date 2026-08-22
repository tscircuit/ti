import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VOUT1", "1"],
  pin2: ["VBB", "2"],
  pin3: ["ILIM", "3"],
  pin4: ["GND", "4"],
  pin5: ["SEL", "5"],
  pin6: ["DIAG_EN", "6"],
  pin7: ["EN1", "7"],
  pin8: ["EN2", "8"],
  pin9: ["SNS", "9"],
  pin10: ["FLT", "10"],
  pin11: ["VOUT2", "11"],
} as const;

const pinRoles = {
  pin1: "power",
  pin2: "power",
  pin3: "control",
  pin4: "ground",
  pin5: "control",
  pin6: "control",
  pin7: "control",
  pin8: "control",
  pin9: "output",
  pin10: "output",
  pin11: "power",
} as const;

const pinAttributes = {
  pin1: { requiresPower: true },
  pin2: { requiresPower: true },
  pin4: { requiresGround: true },
  pin11: { requiresPower: true },
} as const;

export const TPS2HC16PQVAHRQ1 = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing VAH0011B; official source https://www.ti.com/lit/gpn/TPS2HC16-Q1 pages 72
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="TPS2HC16PQVAHRQ1"
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
            pcbX="-1mm"
            pcbY="-0.376mm"
            width="0.6mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-1mm"
            pcbY="-0.926mm"
            width="0.6mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            points={[
              { x: "-0.675mm", y: "-1.950999mm" },
              { x: "-0.725mm", y: "-2.000999mm" },
              { x: "-0.924999mm", y: "-2.000999mm" },
              { x: "-0.974999mm", y: "-1.950999mm" },
              { x: "-0.974999mm", y: "-1.676001mm" },
              { x: "-1.024999mm", y: "-1.625999mm" },
              { x: "-1.25mm", y: "-1.625999mm" },
              { x: "-1.3mm", y: "-1.575999mm" },
              { x: "-1.3mm", y: "-1.375999mm" },
              { x: "-1.25mm", y: "-1.325999mm" },
              { x: "-0.725mm", y: "-1.325999mm" },
              { x: "-0.675mm", y: "-1.375999mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-0.275mm"
            pcbY="-1.701mm"
            width="0.3mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="0.275mm"
            pcbY="-1.701mm"
            width="0.3mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            points={[
              { x: "0.675mm", y: "-1.950999mm" },
              { x: "0.725mm", y: "-2.000999mm" },
              { x: "0.924999mm", y: "-2.000999mm" },
              { x: "0.974999mm", y: "-1.950999mm" },
              { x: "0.974999mm", y: "-1.676001mm" },
              { x: "1.024999mm", y: "-1.625999mm" },
              { x: "1.25mm", y: "-1.625999mm" },
              { x: "1.3mm", y: "-1.575999mm" },
              { x: "1.3mm", y: "-1.375999mm" },
              { x: "1.25mm", y: "-1.325999mm" },
              { x: "0.725mm", y: "-1.325999mm" },
              { x: "0.675mm", y: "-1.375999mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="1mm"
            pcbY="-0.926mm"
            width="0.6mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="1mm"
            pcbY="-0.376mm"
            width="0.6mm"
            height="0.3mm"
            shape="rect"
          />
        </footprint>
      }
      {...props}
    />
  );
};

export default TPS2HC16PQVAHRQ1;
