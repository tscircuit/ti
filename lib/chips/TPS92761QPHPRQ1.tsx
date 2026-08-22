import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["GND", "1", "GND_1"],
  pin2: ["LED6", "2"],
  pin3: ["LED5", "3"],
  pin4: ["LED4", "4"],
  pin5: ["LED3", "5"],
  pin6: ["LED2", "6"],
  pin7: ["LED1", "7"],
  pin8: ["VBCK", "8"],
  pin9: ["SW", "9", "SW_9"],
  pin10: ["SW", "10", "SW_10"],
  pin11: ["BST", "11", "BST_11"],
  pin12: ["BST", "12", "BST_12"],
  pin13: ["PGND", "13", "PGND_13"],
  pin14: ["PGND", "14", "PGND_14"],
  pin15: ["VIN", "15", "VIN_15"],
  pin16: ["VIN", "16", "VIN_16"],
  pin17: ["GND", "17", "GND_17"],
  pin18: ["COMP", "18"],
  pin19: ["EN", "19"],
  pin20: ["TX", "20"],
  pin21: ["RX", "21"],
  pin22: ["V5D", "22"],
  pin23: ["V5A", "23"],
  pin24: ["GND", "24", "GND_24"],
  pin25: ["RREF", "25"],
  pin26: ["VREF", "26"],
  pin27: ["IN", "VEXT", "27"],
  pin28: ["MPIO1", "28"],
  pin29: ["MPIO0", "29"],
  pin30: ["LED24", "N_FLT", "30"],
  pin31: ["LED23", "31"],
  pin32: ["LED22", "32"],
  pin33: ["LED21", "33"],
  pin34: ["LED20", "34"],
  pin35: ["LED19", "35"],
  pin36: ["GND", "36", "GND_36"],
  pin37: ["LED18", "37"],
  pin38: ["LED17", "38"],
  pin39: ["LED16", "39"],
  pin40: ["LED15", "40"],
  pin41: ["LED14", "41"],
  pin42: ["LED13", "42"],
  pin43: ["LED12", "43"],
  pin44: ["LED11", "44"],
  pin45: ["LED10", "45"],
  pin46: ["LED9", "46"],
  pin47: ["LED8", "47"],
  pin48: ["LED7", "48"],
  pin49: ["THERMAL_PAD", "49"],
} as const;

const pinRoles = {
  pin1: "ground",
  pin2: "output",
  pin3: "output",
  pin4: "output",
  pin5: "output",
  pin6: "output",
  pin7: "output",
  pin8: "unknown",
  pin9: "output",
  pin10: "output",
  pin11: "unknown",
  pin12: "unknown",
  pin13: "ground",
  pin14: "ground",
  pin15: "power",
  pin16: "power",
  pin17: "ground",
  pin18: "unknown",
  pin19: "control",
  pin20: "output",
  pin21: "input",
  pin22: "unknown",
  pin23: "unknown",
  pin24: "ground",
  pin25: "unknown",
  pin26: "power",
  pin27: "input",
  pin28: "unknown",
  pin29: "unknown",
  pin30: "output",
  pin31: "output",
  pin32: "output",
  pin33: "output",
  pin34: "output",
  pin35: "output",
  pin36: "ground",
  pin37: "output",
  pin38: "output",
  pin39: "output",
  pin40: "output",
  pin41: "output",
  pin42: "output",
  pin43: "output",
  pin44: "output",
  pin45: "output",
  pin46: "output",
  pin47: "output",
  pin48: "output",
  pin49: "ground",
} as const;

const pinAttributes = {
  pin1: { requiresGround: true },
  pin13: { requiresGround: true },
  pin14: { requiresGround: true },
  pin15: { requiresPower: true },
  pin16: { requiresPower: true },
  pin17: { requiresGround: true },
  pin24: { requiresGround: true },
  pin26: { requiresPower: true },
  pin36: { requiresGround: true },
  pin49: { requiresGround: true },
} as const;

export const TPS92761QPHPRQ1 = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing PHP0048L; official source https://www.ti.com/lit/gpn/TPS92761-Q1 pages 9
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="TPS92761QPHPRQ1"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-3.45mm"
            pcbY="2.75mm"
            width="1.6mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="-2.75mm"
            pcbY="-3.45mm"
            width="0.3mm"
            height="1.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin36"]}
            pcbX="3.45mm"
            pcbY="-2.75mm"
            width="1.6mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin48"]}
            pcbX="2.75mm"
            pcbY="3.45mm"
            width="0.3mm"
            height="1.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-3.45mm"
            pcbY="2.25mm"
            width="1.6mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="-2.25mm"
            pcbY="-3.45mm"
            width="0.3mm"
            height="1.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin35"]}
            pcbX="3.45mm"
            pcbY="-2.25mm"
            width="1.6mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin47"]}
            pcbX="2.25mm"
            pcbY="3.45mm"
            width="0.3mm"
            height="1.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-3.45mm"
            pcbY="1.75mm"
            width="1.6mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="-1.75mm"
            pcbY="-3.45mm"
            width="0.3mm"
            height="1.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin34"]}
            pcbX="3.45mm"
            pcbY="-1.75mm"
            width="1.6mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin46"]}
            pcbX="1.75mm"
            pcbY="3.45mm"
            width="0.3mm"
            height="1.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-3.45mm"
            pcbY="1.25mm"
            width="1.6mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="-1.25mm"
            pcbY="-3.45mm"
            width="0.3mm"
            height="1.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin33"]}
            pcbX="3.45mm"
            pcbY="-1.25mm"
            width="1.6mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin45"]}
            pcbX="1.25mm"
            pcbY="3.45mm"
            width="0.3mm"
            height="1.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-3.45mm"
            pcbY="0.75mm"
            width="1.6mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="-0.75mm"
            pcbY="-3.45mm"
            width="0.3mm"
            height="1.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin32"]}
            pcbX="3.45mm"
            pcbY="-0.75mm"
            width="1.6mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin44"]}
            pcbX="0.75mm"
            pcbY="3.45mm"
            width="0.3mm"
            height="1.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-3.45mm"
            pcbY="0.25mm"
            width="1.6mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="-0.25mm"
            pcbY="-3.45mm"
            width="0.3mm"
            height="1.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin31"]}
            pcbX="3.45mm"
            pcbY="-0.25mm"
            width="1.6mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin43"]}
            pcbX="0.25mm"
            pcbY="3.45mm"
            width="0.3mm"
            height="1.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-3.45mm"
            pcbY="-0.25mm"
            width="1.6mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin19"]}
            pcbX="0.25mm"
            pcbY="-3.45mm"
            width="0.3mm"
            height="1.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin30"]}
            pcbX="3.45mm"
            pcbY="0.25mm"
            width="1.6mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin42"]}
            pcbX="-0.25mm"
            pcbY="3.45mm"
            width="0.3mm"
            height="1.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-3.45mm"
            pcbY="-0.75mm"
            width="1.6mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin20"]}
            pcbX="0.75mm"
            pcbY="-3.45mm"
            width="0.3mm"
            height="1.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin29"]}
            pcbX="3.45mm"
            pcbY="0.75mm"
            width="1.6mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin41"]}
            pcbX="-0.75mm"
            pcbY="3.45mm"
            width="0.3mm"
            height="1.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="-3.45mm"
            pcbY="-1.25mm"
            width="1.6mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin21"]}
            pcbX="1.25mm"
            pcbY="-3.45mm"
            width="0.3mm"
            height="1.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin28"]}
            pcbX="3.45mm"
            pcbY="1.25mm"
            width="1.6mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin40"]}
            pcbX="-1.25mm"
            pcbY="3.45mm"
            width="0.3mm"
            height="1.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="-3.45mm"
            pcbY="-1.75mm"
            width="1.6mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin22"]}
            pcbX="1.75mm"
            pcbY="-3.45mm"
            width="0.3mm"
            height="1.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin27"]}
            pcbX="3.45mm"
            pcbY="1.75mm"
            width="1.6mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin39"]}
            pcbX="-1.75mm"
            pcbY="3.45mm"
            width="0.3mm"
            height="1.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="-3.45mm"
            pcbY="-2.25mm"
            width="1.6mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin23"]}
            pcbX="2.25mm"
            pcbY="-3.45mm"
            width="0.3mm"
            height="1.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin26"]}
            pcbX="3.45mm"
            pcbY="2.25mm"
            width="1.6mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin38"]}
            pcbX="-2.25mm"
            pcbY="3.45mm"
            width="0.3mm"
            height="1.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="-3.45mm"
            pcbY="-2.75mm"
            width="1.6mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin24"]}
            pcbX="2.75mm"
            pcbY="-3.45mm"
            width="0.3mm"
            height="1.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin25"]}
            pcbX="3.45mm"
            pcbY="2.75mm"
            width="1.6mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin37"]}
            pcbX="-2.75mm"
            pcbY="3.45mm"
            width="0.3mm"
            height="1.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin49"]}
            pcbX="0mm"
            pcbY="0mm"
            width="5mm"
            height="5mm"
            shape="rect"
          />
        </footprint>
      }
      {...props}
    />
  );
};

export default TPS92761QPHPRQ1;
