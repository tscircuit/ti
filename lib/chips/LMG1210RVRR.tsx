import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["NC", "1", "NC_1"],
  pin2: ["VIN", "2"],
  pin3: ["VSS", "3", "VSS_3"],
  pin4: ["VDD", "4"],
  pin5: ["DHL", "5"],
  pin6: ["DLH", "6"],
  pin7: ["VSS", "7", "VSS_7"],
  pin8: ["LO", "8"],
  pin9: ["HS", "9", "HS_9"],
  pin10: ["HO", "10"],
  pin11: ["NC", "11", "NC_11"],
  pin12: ["HB", "12"],
  pin13: ["HS", "13", "HS_13"],
  pin14: ["NC1", "14"],
  pin15: ["NC", "15", "NC_15"],
  pin16: ["HS", "16", "HS_16"],
  pin17: ["BST", "17"],
  pin18: ["EN", "HI", "18"],
  pin19: ["PWM", "LI", "19"],
  pin20: ["THERMAL_PAD_VSS", "20"],
  pin21: ["THERMAL_PAD_HS", "21"],
} as const;

const pinRoles = {
  pin1: "no-connect",
  pin2: "power",
  pin3: "ground",
  pin4: "output",
  pin5: "input",
  pin6: "input",
  pin7: "ground",
  pin8: "output",
  pin9: "input",
  pin10: "output",
  pin11: "no-connect",
  pin12: "input",
  pin13: "input",
  pin14: "input",
  pin15: "no-connect",
  pin16: "input",
  pin17: "output",
  pin18: "control",
  pin19: "control",
  pin20: "ground",
  pin21: "input",
} as const;

const pinAttributes = {
  pin1: { doNotConnect: true },
  pin2: { requiresPower: true },
  pin3: { requiresGround: true },
  pin7: { requiresGround: true },
  pin11: { doNotConnect: true },
  pin15: { doNotConnect: true },
  pin20: { requiresGround: true },
} as const;

export const LMG1210RVRR = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing RVR0019A; official source https://www.ti.com/lit/gpn/LMG1210 pages 24
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="LMG1210RVRR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-1.9mm"
            pcbY="1mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-1.9mm"
            pcbY="0.5mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-1.9mm"
            pcbY="0mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-1.9mm"
            pcbY="-0.5mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-1.9mm"
            pcbY="-1mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-1.25mm"
            pcbY="-1.4mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-0.75mm"
            pcbY="-1.4mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-0.25mm"
            pcbY="-1.4mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="0.75mm"
            pcbY="-1.4mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="1.25mm"
            pcbY="-1.4mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="1.9mm"
            pcbY="-1mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="1.9mm"
            pcbY="-0.5mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="1.9mm"
            pcbY="0mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="1.9mm"
            pcbY="0.5mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="1.9mm"
            pcbY="1mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="1.25mm"
            pcbY="1.4mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="-0.25mm"
            pcbY="1.4mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="-0.75mm"
            pcbY="1.4mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin19"]}
            pcbX="-1.25mm"
            pcbY="1.4mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin20"]}
            pcbX="-0.75mm"
            pcbY="0mm"
            width="1.2mm"
            height="1.7mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin21"]}
            pcbX="0.975mm"
            pcbY="0mm"
            width="0.75mm"
            height="1.7mm"
            shape="rect"
          />
        </footprint>
      }
      {...props}
    />
  );
};

export default LMG1210RVRR;
