import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["SDO", "1"],
  pin2: ["VCC", "2"],
  pin3: ["GND", "3"],
  pin4: ["P0_0", "4"],
  pin5: ["P0_1", "5"],
  pin6: ["P0_2", "6"],
  pin7: ["P0_3", "7"],
  pin8: ["P0_4", "8"],
  pin9: ["P0_5", "9"],
  pin10: ["P0_6", "10"],
  pin11: ["P0_7", "11"],
  pin12: ["P2_0", "12"],
  pin13: ["P2_1", "13"],
  pin14: ["P2_2", "14"],
  pin15: ["P2_3", "15"],
  pin16: ["P2_4", "16"],
  pin17: ["P2_5", "17"],
  pin18: ["P2_6", "18"],
  pin19: ["P2_7", "19"],
  pin20: ["P1_7", "20"],
  pin21: ["P1_6", "21"],
  pin22: ["P1_5", "22"],
  pin23: ["P1_4", "23"],
  pin24: ["P1_3", "24"],
  pin25: ["P1_2", "25"],
  pin26: ["P1_1", "26"],
  pin27: ["P1_0", "27"],
  pin28: ["CS", "28"],
  pin29: ["SCLK", "29"],
  pin30: ["SDI", "30"],
  pin31: ["RESET", "FAIL_SAFE", "31"],
  pin32: ["INT", "32"],
} as const;

const pinRoles = {
  pin1: "output",
  pin2: "power",
  pin3: "ground",
  pin4: "bidirectional",
  pin5: "bidirectional",
  pin6: "bidirectional",
  pin7: "bidirectional",
  pin8: "bidirectional",
  pin9: "bidirectional",
  pin10: "bidirectional",
  pin11: "bidirectional",
  pin12: "bidirectional",
  pin13: "bidirectional",
  pin14: "bidirectional",
  pin15: "bidirectional",
  pin16: "bidirectional",
  pin17: "bidirectional",
  pin18: "bidirectional",
  pin19: "bidirectional",
  pin20: "bidirectional",
  pin21: "bidirectional",
  pin22: "bidirectional",
  pin23: "bidirectional",
  pin24: "bidirectional",
  pin25: "bidirectional",
  pin26: "bidirectional",
  pin27: "bidirectional",
  pin28: "control",
  pin29: "control",
  pin30: "input",
  pin31: "control",
  pin32: "output",
} as const;

const pinAttributes = {
  pin2: { requiresPower: true },
  pin3: { requiresGround: true },
} as const;

export const TXE8124DGSR = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing DGS0032A; official source https://www.ti.com/lit/gpn/TXE8124 pages 63
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="TXE8124DGSR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-1.475mm"
            pcbY="3.75mm"
            width="1.45mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin32"]}
            pcbX="1.475mm"
            pcbY="3.75mm"
            width="1.45mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-1.475mm"
            pcbY="3.25mm"
            width="1.45mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin31"]}
            pcbX="1.475mm"
            pcbY="3.25mm"
            width="1.45mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-1.475mm"
            pcbY="2.75mm"
            width="1.45mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin30"]}
            pcbX="1.475mm"
            pcbY="2.75mm"
            width="1.45mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-1.475mm"
            pcbY="2.25mm"
            width="1.45mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin29"]}
            pcbX="1.475mm"
            pcbY="2.25mm"
            width="1.45mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-1.475mm"
            pcbY="1.75mm"
            width="1.45mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin28"]}
            pcbX="1.475mm"
            pcbY="1.75mm"
            width="1.45mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-1.475mm"
            pcbY="1.25mm"
            width="1.45mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin27"]}
            pcbX="1.475mm"
            pcbY="1.25mm"
            width="1.45mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-1.475mm"
            pcbY="0.75mm"
            width="1.45mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin26"]}
            pcbX="1.475mm"
            pcbY="0.75mm"
            width="1.45mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-1.475mm"
            pcbY="0.25mm"
            width="1.45mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin25"]}
            pcbX="1.475mm"
            pcbY="0.25mm"
            width="1.45mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="-1.475mm"
            pcbY="-0.25mm"
            width="1.45mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin24"]}
            pcbX="1.475mm"
            pcbY="-0.25mm"
            width="1.45mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="-1.475mm"
            pcbY="-0.75mm"
            width="1.45mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin23"]}
            pcbX="1.475mm"
            pcbY="-0.75mm"
            width="1.45mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="-1.475mm"
            pcbY="-1.25mm"
            width="1.45mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin22"]}
            pcbX="1.475mm"
            pcbY="-1.25mm"
            width="1.45mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="-1.475mm"
            pcbY="-1.75mm"
            width="1.45mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin21"]}
            pcbX="1.475mm"
            pcbY="-1.75mm"
            width="1.45mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="-1.475mm"
            pcbY="-2.25mm"
            width="1.45mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin20"]}
            pcbX="1.475mm"
            pcbY="-2.25mm"
            width="1.45mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="-1.475mm"
            pcbY="-2.75mm"
            width="1.45mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin19"]}
            pcbX="1.475mm"
            pcbY="-2.75mm"
            width="1.45mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="-1.475mm"
            pcbY="-3.25mm"
            width="1.45mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="1.475mm"
            pcbY="-3.25mm"
            width="1.45mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="-1.475mm"
            pcbY="-3.75mm"
            width="1.45mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="1.475mm"
            pcbY="-3.75mm"
            width="1.45mm"
            height="0.3mm"
            shape="rect"
          />
        </footprint>
      }
      {...props}
    />
  );
};

export default TXE8124DGSR;
