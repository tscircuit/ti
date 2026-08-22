import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["OV", "1"],
  pin2: ["IMON", "2"],
  pin3: ["SET", "3"],
  pin4: ["GND", "4", "GND_4"],
  pin5: ["DRAIN", "5", "DRAIN_5"],
  pin6: ["OUT", "6", "OUT_6"],
  pin7: ["OUT", "7", "OUT_7"],
  pin8: ["OUT", "8", "OUT_8"],
  pin9: ["OUT", "9", "OUT_9"],
  pin10: ["OUT", "10", "OUT_10"],
  pin11: ["OUT", "11", "OUT_11"],
  pin12: ["OUT", "12", "OUT_12"],
  pin13: ["OUT", "13", "OUT_13"],
  pin14: ["DRAIN", "14", "DRAIN_14"],
  pin15: ["DRAIN", "15", "DRAIN_15"],
  pin16: ["DRAIN", "16", "DRAIN_16"],
  pin17: ["DRAIN", "17", "DRAIN_17"],
  pin18: ["DRAIN", "18", "DRAIN_18"],
  pin19: ["OUT", "19", "OUT_19"],
  pin20: ["OUT", "20", "OUT_20"],
  pin21: ["OUT", "21", "OUT_21"],
  pin22: ["OUT", "22", "OUT_22"],
  pin23: ["OUT", "23", "OUT_23"],
  pin24: ["OUT", "24", "OUT_24"],
  pin25: ["GATE", "25"],
  pin26: ["SENSE", "26"],
  pin27: ["DRAIN", "27", "DRAIN_27"],
  pin28: ["GND", "28", "GND_28"],
  pin29: ["VCC", "29"],
  pin30: ["FLTB", "30"],
  pin31: ["PGB", "31"],
  pin32: ["GND", "32", "GND_32"],
  pin33: ["EN", "33"],
  pin34: ["PROG", "34"],
  pin35: ["TIMER", "35"],
  pin36: ["GND", "36", "GND_36"],
} as const;

const pinRoles = {
  pin1: "input",
  pin2: "output",
  pin3: "input",
  pin4: "ground",
  pin5: "input",
  pin6: "bidirectional",
  pin7: "bidirectional",
  pin8: "bidirectional",
  pin9: "bidirectional",
  pin10: "bidirectional",
  pin11: "bidirectional",
  pin12: "bidirectional",
  pin13: "bidirectional",
  pin14: "input",
  pin15: "input",
  pin16: "input",
  pin17: "input",
  pin18: "input",
  pin19: "bidirectional",
  pin20: "bidirectional",
  pin21: "bidirectional",
  pin22: "bidirectional",
  pin23: "bidirectional",
  pin24: "bidirectional",
  pin25: "control",
  pin26: "input",
  pin27: "input",
  pin28: "ground",
  pin29: "power",
  pin30: "input",
  pin31: "output",
  pin32: "ground",
  pin33: "control",
  pin34: "power",
  pin35: "bidirectional",
  pin36: "ground",
} as const;

const pinAttributes = {
  pin4: { requiresGround: true },
  pin28: { requiresGround: true },
  pin29: { requiresPower: true },
  pin32: { requiresGround: true },
  pin34: { requiresPower: true },
  pin36: { requiresGround: true },
} as const;

export const TPS24750RUVR = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing RUV0036A; official source https://www.ti.com/lit/gpn/TPS24750 pages 44,45,46
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="TPS24750RUVR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-3mm"
            pcbY="-1.35mm"
            width="0.24mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-2.5mm"
            pcbY="-1.35mm"
            width="0.24mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-2mm"
            pcbY="-1.35mm"
            width="0.24mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-1.5mm"
            pcbY="-1.35mm"
            width="0.24mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-1mm"
            pcbY="-1.35mm"
            width="0.24mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-0.5mm"
            pcbY="-1.35mm"
            width="0.24mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="0mm"
            pcbY="-1.35mm"
            width="0.24mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="0.5mm"
            pcbY="-1.35mm"
            width="0.24mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="1mm"
            pcbY="-1.35mm"
            width="0.24mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="1.5mm"
            pcbY="-1.35mm"
            width="0.24mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="2mm"
            pcbY="-1.35mm"
            width="0.24mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="2.5mm"
            pcbY="-1.35mm"
            width="0.24mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="3mm"
            pcbY="-1.35mm"
            width="0.24mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="3.1mm"
            pcbY="-1mm"
            width="0.6mm"
            height="0.24mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="3.1mm"
            pcbY="-0.5mm"
            width="0.6mm"
            height="0.24mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="3.1mm"
            pcbY="0mm"
            width="0.6mm"
            height="0.24mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="3.1mm"
            pcbY="0.5mm"
            width="0.6mm"
            height="0.24mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="3.1mm"
            pcbY="1mm"
            width="0.6mm"
            height="0.24mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin19"]}
            pcbX="3mm"
            pcbY="1.35mm"
            width="0.24mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin20"]}
            pcbX="2.5mm"
            pcbY="1.35mm"
            width="0.24mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin21"]}
            pcbX="2mm"
            pcbY="1.35mm"
            width="0.24mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin22"]}
            pcbX="1.5mm"
            pcbY="1.35mm"
            width="0.24mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin23"]}
            pcbX="1mm"
            pcbY="1.35mm"
            width="0.24mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin24"]}
            pcbX="0.5mm"
            pcbY="1.35mm"
            width="0.24mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin25"]}
            pcbX="0mm"
            pcbY="1.35mm"
            width="0.24mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin26"]}
            pcbX="-0.5mm"
            pcbY="1.35mm"
            width="0.24mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin27"]}
            pcbX="-1mm"
            pcbY="1.35mm"
            width="0.24mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin28"]}
            pcbX="-1.5mm"
            pcbY="1.35mm"
            width="0.24mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin29"]}
            pcbX="-2mm"
            pcbY="1.35mm"
            width="0.24mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin30"]}
            pcbX="-2.5mm"
            pcbY="1.35mm"
            width="0.24mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin31"]}
            pcbX="-3mm"
            pcbY="1.35mm"
            width="0.24mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin32"]}
            pcbX="-3.1mm"
            pcbY="1mm"
            width="0.6mm"
            height="0.24mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin33"]}
            pcbX="-3.1mm"
            pcbY="0.5mm"
            width="0.6mm"
            height="0.24mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin34"]}
            pcbX="-3.1mm"
            pcbY="0mm"
            width="0.6mm"
            height="0.24mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin35"]}
            pcbX="-3.1mm"
            pcbY="-0.5mm"
            width="0.6mm"
            height="0.24mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin36"]}
            pcbX="-3.1mm"
            pcbY="-1mm"
            width="0.6mm"
            height="0.24mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-2.118mm"
            pcbY="0mm"
            width="1.514mm"
            height="2.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="0.957mm"
            pcbY="0mm"
            width="3.836mm"
            height="2.25mm"
            shape="rect"
          />
        </footprint>
      }
      {...props}
    />
  );
};

export default TPS24750RUVR;
