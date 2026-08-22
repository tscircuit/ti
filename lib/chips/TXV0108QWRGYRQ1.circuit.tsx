import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VCCA", "1"],
  pin2: ["DIR", "2"],
  pin3: ["A1", "3"],
  pin4: ["A2", "4"],
  pin5: ["A3", "5"],
  pin6: ["A4", "6"],
  pin7: ["A5", "7"],
  pin8: ["A6", "8"],
  pin9: ["A7", "9"],
  pin10: ["A8", "10"],
  pin11: ["GND", "11", "GND_11"],
  pin12: ["GND", "12", "GND_12"],
  pin13: ["GND", "13", "GND_13"],
  pin14: ["B8", "14"],
  pin15: ["B7", "15"],
  pin16: ["B6", "16"],
  pin17: ["B5", "17"],
  pin18: ["B4", "18"],
  pin19: ["B3", "19"],
  pin20: ["B2", "20"],
  pin21: ["B1", "21"],
  pin22: ["OE", "22"],
  pin23: ["VCCB", "23", "VCCB_23"],
  pin24: ["VCCB", "24", "VCCB_24"],
  pin25: ["THERMAL_PAD"],
} as const;

const pinRoles = {
  pin1: "power",
  pin2: "input",
  pin3: "bidirectional",
  pin4: "bidirectional",
  pin5: "bidirectional",
  pin6: "bidirectional",
  pin7: "bidirectional",
  pin8: "bidirectional",
  pin9: "bidirectional",
  pin10: "bidirectional",
  pin11: "ground",
  pin12: "ground",
  pin13: "ground",
  pin14: "bidirectional",
  pin15: "bidirectional",
  pin16: "bidirectional",
  pin17: "bidirectional",
  pin18: "bidirectional",
  pin19: "bidirectional",
  pin20: "bidirectional",
  pin21: "bidirectional",
  pin22: "output",
  pin23: "power",
  pin24: "power",
  pin25: "thermal",
} as const;

const pinAttributes = {
  pin1: { requiresPower: true },
  pin11: { requiresGround: true },
  pin12: { requiresGround: true },
  pin13: { requiresGround: true },
  pin23: { requiresPower: true },
  pin24: { requiresPower: true },
} as const;

export const TXV0108QWRGYRQ1 = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing RGY0024E; official source https://www.ti.com/lit/gpn/TXV0108-Q1 pages 30
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="TXV0108QWRGYRQ1"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.75mm"
            pcbY="2.65mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-1.65mm"
            pcbY="2.25mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-1.65mm"
            pcbY="1.75mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-1.65mm"
            pcbY="1.25mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-1.65mm"
            pcbY="0.75mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-1.65mm"
            pcbY="0.25mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-1.65mm"
            pcbY="-0.25mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-1.65mm"
            pcbY="-0.75mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="-1.65mm"
            pcbY="-1.25mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="-1.65mm"
            pcbY="-1.75mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="-1.65mm"
            pcbY="-2.25mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="-0.8mm"
            pcbY="-2.65mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="0.8mm"
            pcbY="-2.65mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="1.65mm"
            pcbY="-2.25mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="1.65mm"
            pcbY="-1.75mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="1.65mm"
            pcbY="-1.25mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="1.65mm"
            pcbY="-0.75mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="1.65mm"
            pcbY="-0.25mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin19"]}
            pcbX="1.65mm"
            pcbY="0.25mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin20"]}
            pcbX="1.65mm"
            pcbY="0.75mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin21"]}
            pcbX="1.65mm"
            pcbY="1.25mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin22"]}
            pcbX="1.65mm"
            pcbY="1.75mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin23"]}
            pcbX="1.65mm"
            pcbY="2.25mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin24"]}
            pcbX="0.75mm"
            pcbY="2.65mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin25"]}
            pcbX="0mm"
            pcbY="0mm"
            width="2.1mm"
            height="4.1mm"
            shape="rect"
          />
        </footprint>
      }
      {...props}
    />
  );
};

export default TXV0108QWRGYRQ1;
