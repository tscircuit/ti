import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["GND", "1", "GND_1"],
  pin2: ["GND", "2", "GND_2"],
  pin3: ["ANT_IN", "3"],
  pin4: ["RFIO", "4"],
  pin5: ["GND", "5", "GND_5"],
  pin6: ["VDDS", "6", "VDDS_6"],
  pin7: ["VDDS", "7", "VDDS_7"],
  pin8: ["GND", "8", "GND_8"],
  pin9: ["DIO6_A1", "9"],
  pin10: ["DIO8", "10"],
  pin11: ["DIO24_A7", "11"],
  pin12: ["DIO3_X32P", "12"],
  pin13: ["DIO4_X32N", "13"],
  pin14: ["RSTN", "14"],
  pin15: ["DIO21_A10", "15"],
  pin16: ["DIO18", "16"],
  pin17: ["DIO20_A11", "17"],
  pin18: ["DIO12", "18"],
  pin19: ["DIO17_SWDCK", "19"],
  pin20: ["DIO16_SWDIO", "20"],
  pin21: ["DIO11", "21"],
  pin22: ["GND", "22", "GND_22"],
  pin23: ["GND", "23", "GND_23"],
  pin24: ["GND", "24", "GND_24"],
} as const;

const pinRoles = {
  pin1: "ground",
  pin2: "ground",
  pin3: "input",
  pin4: "unknown",
  pin5: "ground",
  pin6: "power",
  pin7: "power",
  pin8: "ground",
  pin9: "bidirectional",
  pin10: "bidirectional",
  pin11: "bidirectional",
  pin12: "bidirectional",
  pin13: "bidirectional",
  pin14: "control",
  pin15: "bidirectional",
  pin16: "bidirectional",
  pin17: "bidirectional",
  pin18: "bidirectional",
  pin19: "bidirectional",
  pin20: "bidirectional",
  pin21: "bidirectional",
  pin22: "ground",
  pin23: "ground",
  pin24: "ground",
} as const;

const pinAttributes = {
  pin1: { requiresGround: true },
  pin2: { requiresGround: true },
  pin5: { requiresGround: true },
  pin6: { requiresPower: true },
  pin7: { requiresPower: true },
  pin8: { requiresGround: true },
  pin22: { requiresGround: true },
  pin23: { requiresGround: true },
  pin24: { requiresGround: true },
} as const;

export const CC2340R5MODAN0MHAR = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing MHA0024A; official source https://www.ti.com/lit/gpn/CC2340R5MODA pages 64
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="CC2340R5MODAN0MHAR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-3.25mm"
            pcbY="4.4mm"
            width="1.1mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-3.25mm"
            pcbY="3.4mm"
            width="1.1mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-3.25mm"
            pcbY="2.4mm"
            width="1.1mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-3.25mm"
            pcbY="1.4mm"
            width="1.1mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-3.25mm"
            pcbY="0.4mm"
            width="1.1mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-3.25mm"
            pcbY="-0.6mm"
            width="1.1mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-3.25mm"
            pcbY="-1.6mm"
            width="1.1mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-3.25mm"
            pcbY="-2.6mm"
            width="1.1mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="-3.25mm"
            pcbY="-3.6mm"
            width="1.1mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="-2.5mm"
            pcbY="-4.75mm"
            width="0.6mm"
            height="1.1mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="-1.5mm"
            pcbY="-4.75mm"
            width="0.6mm"
            height="1.1mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="-0.5mm"
            pcbY="-4.75mm"
            width="0.6mm"
            height="1.1mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="0.5mm"
            pcbY="-4.75mm"
            width="0.6mm"
            height="1.1mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="1.5mm"
            pcbY="-4.75mm"
            width="0.6mm"
            height="1.1mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="2.5mm"
            pcbY="-4.75mm"
            width="0.6mm"
            height="1.1mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="3.25mm"
            pcbY="-3.6mm"
            width="1.1mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="3.25mm"
            pcbY="-2.6mm"
            width="1.1mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="3.25mm"
            pcbY="-1.6mm"
            width="1.1mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin19"]}
            pcbX="3.25mm"
            pcbY="-0.6mm"
            width="1.1mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin20"]}
            pcbX="3.25mm"
            pcbY="0.4mm"
            width="1.1mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin21"]}
            pcbX="3.25mm"
            pcbY="1.4mm"
            width="1.1mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin22"]}
            pcbX="3.25mm"
            pcbY="2.4mm"
            width="1.1mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin23"]}
            pcbX="3.25mm"
            pcbY="3.4mm"
            width="1.1mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin24"]}
            pcbX="3.25mm"
            pcbY="4.4mm"
            width="1.1mm"
            height="0.6mm"
            shape="rect"
          />
        </footprint>
      }
      {...props}
    />
  );
};

export default CC2340R5MODAN0MHAR;
