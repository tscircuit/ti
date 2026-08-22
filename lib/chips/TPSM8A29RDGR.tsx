import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["PGND", "1", "PGND_1"],
  pin2: ["SW", "2"],
  pin3: ["VCC", "3"],
  pin4: ["VIN", "4", "VIN_4"],
  pin5: ["VIN", "5", "VIN_5"],
  pin6: ["BOOT", "6"],
  pin7: ["MODE", "7"],
  pin8: ["AGND", "8", "AGND_8"],
  pin9: ["TRIP", "9"],
  pin10: ["VOUT", "10", "VOUT_10"],
  pin11: ["VOUT", "11", "VOUT_11"],
  pin12: ["FB", "12"],
  pin13: ["VSNS", "13"],
  pin14: ["AGND", "14", "AGND_14"],
  pin15: ["SS", "REFIN", "15"],
  pin16: ["VIN", "16", "VIN_16"],
  pin17: ["VIN", "17", "VIN_17"],
  pin18: ["EN", "18"],
  pin19: ["PGOOD", "19"],
  pin20: ["PGND", "20", "PGND_20"],
  pin21: ["PGND", "21", "PGND_21"],
  pin22: ["PGND", "22", "PGND_22"],
  pin23: ["VIN", "23", "VIN_23"],
  pin24: ["PGND", "24", "PGND_24"],
  pin25: ["PGND", "25", "PGND_25"],
} as const;

const pinRoles = {
  pin1: "ground",
  pin2: "no-connect",
  pin3: "bidirectional",
  pin4: "power",
  pin5: "power",
  pin6: "no-connect",
  pin7: "control",
  pin8: "ground",
  pin9: "bidirectional",
  pin10: "output",
  pin11: "output",
  pin12: "output",
  pin13: "input",
  pin14: "ground",
  pin15: "bidirectional",
  pin16: "power",
  pin17: "power",
  pin18: "no-connect",
  pin19: "output",
  pin20: "ground",
  pin21: "ground",
  pin22: "ground",
  pin23: "power",
  pin24: "ground",
  pin25: "ground",
} as const;

const pinAttributes = {
  pin1: { requiresGround: true },
  pin2: { doNotConnect: true },
  pin4: { requiresPower: true },
  pin5: { requiresPower: true },
  pin6: { doNotConnect: true },
  pin8: { requiresGround: true },
  pin14: { requiresGround: true },
  pin16: { requiresPower: true },
  pin17: { requiresPower: true },
  pin18: { doNotConnect: true },
  pin20: { requiresGround: true },
  pin21: { requiresGround: true },
  pin22: { requiresGround: true },
  pin23: { requiresPower: true },
  pin24: { requiresGround: true },
  pin25: { requiresGround: true },
} as const;

export const TPSM8A29RDGR = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing RDG0025A; official source https://www.ti.com/lit/gpn/TPSM8A29 pages 43
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="TPSM8A29RDGR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-2.75mm"
            pcbY="3.075mm"
            width="1.5mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="-2.75mm"
            pcbY="-3.075mm"
            width="1.5mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="2.75mm"
            pcbY="-3.075mm"
            width="1.5mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin20"]}
            pcbX="2.75mm"
            pcbY="3.075mm"
            width="1.5mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-3.025mm"
            pcbY="2.275mm"
            width="0.8mm"
            height="0.45mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin19"]}
            pcbX="3.025mm"
            pcbY="2.275mm"
            width="0.8mm"
            height="0.45mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-3.025mm"
            pcbY="1.625mm"
            width="0.8mm"
            height="0.45mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="3.025mm"
            pcbY="1.625mm"
            width="0.8mm"
            height="0.45mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-3.025mm"
            pcbY="0.975mm"
            width="0.8mm"
            height="0.45mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="3.025mm"
            pcbY="0.975mm"
            width="0.8mm"
            height="0.45mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-3.025mm"
            pcbY="0.325mm"
            width="0.8mm"
            height="0.45mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="3.025mm"
            pcbY="0.325mm"
            width="0.8mm"
            height="0.45mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-3.025mm"
            pcbY="-0.325mm"
            width="0.8mm"
            height="0.45mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="3.025mm"
            pcbY="-0.325mm"
            width="0.8mm"
            height="0.45mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-3.025mm"
            pcbY="-0.975mm"
            width="0.8mm"
            height="0.45mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="3.025mm"
            pcbY="-0.975mm"
            width="0.8mm"
            height="0.45mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-3.025mm"
            pcbY="-1.625mm"
            width="0.8mm"
            height="0.45mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="3.025mm"
            pcbY="-1.625mm"
            width="0.8mm"
            height="0.45mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="-3.025mm"
            pcbY="-2.275mm"
            width="0.8mm"
            height="0.45mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="3.025mm"
            pcbY="-2.275mm"
            width="0.8mm"
            height="0.45mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin21"]}
            pcbX="0mm"
            pcbY="2.595mm"
            width="2.35mm"
            height="1.11mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin22"]}
            pcbX="0mm"
            pcbY="1.235mm"
            width="2.35mm"
            height="1.11mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin23"]}
            pcbX="0mm"
            pcbY="0mm"
            width="1.9mm"
            height="0.61mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin24"]}
            pcbX="0mm"
            pcbY="-1.235mm"
            width="2.35mm"
            height="1.11mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin25"]}
            pcbX="0mm"
            pcbY="-2.595mm"
            width="2.35mm"
            height="1.11mm"
            shape="rect"
          />
        </footprint>
      }
      {...props}
    />
  );
};

export default TPSM8A29RDGR;
