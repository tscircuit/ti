import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["OUT2", "1"],
  pin2: ["OUT3", "2"],
  pin3: ["OUT4", "3"],
  pin4: ["OUT5", "4"],
  pin5: ["OUT6", "5"],
  pin6: ["OUT7", "6"],
  pin7: ["OUT8", "7"],
  pin8: ["OUT9", "8"],
  pin9: ["OUT10", "9"],
  pin10: ["OUT11", "10"],
  pin11: ["SIN", "11"],
  pin12: ["CLK_I", "12"],
  pin13: ["FAULT", "13"],
  pin14: ["SOUT", "14"],
  pin15: ["GND", "15", "GND_15"],
  pin16: ["OUT12", "16"],
  pin17: ["OUT13", "17"],
  pin18: ["OUT14", "18"],
  pin19: ["OUT15", "19"],
  pin20: ["OUT16", "20"],
  pin21: ["OUT17", "21"],
  pin22: ["OUT18", "22"],
  pin23: ["OUT19", "23"],
  pin24: ["OUT20", "24"],
  pin25: ["OUT21", "25"],
  pin26: ["OUT22", "26"],
  pin27: ["OUT23", "FB", "27"],
  pin28: ["VCC", "28"],
  pin29: ["ISET", "29"],
  pin30: ["GND", "30", "GND_30"],
  pin31: ["OUT0", "31"],
  pin32: ["OUT1", "32"],
  pin33: ["THERMAL_PAD", "33"],
} as const;

const pinRoles = {
  pin1: "output",
  pin2: "output",
  pin3: "output",
  pin4: "output",
  pin5: "output",
  pin6: "output",
  pin7: "output",
  pin8: "output",
  pin9: "output",
  pin10: "output",
  pin11: "unknown",
  pin12: "control",
  pin13: "output",
  pin14: "unknown",
  pin15: "ground",
  pin16: "output",
  pin17: "output",
  pin18: "output",
  pin19: "output",
  pin20: "output",
  pin21: "output",
  pin22: "output",
  pin23: "output",
  pin24: "output",
  pin25: "output",
  pin26: "output",
  pin27: "output",
  pin28: "power",
  pin29: "control",
  pin30: "ground",
  pin31: "output",
  pin32: "output",
  pin33: "ground",
} as const;

const pinAttributes = {
  pin15: { requiresGround: true },
  pin28: { requiresPower: true },
  pin30: { requiresGround: true },
  pin33: { requiresGround: true },
} as const;

export const TLC69624QRSNRQ1 = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing RSN0032D; official source https://www.ti.com/lit/gpn/TLC69624-Q1 pages 18
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="TLC69624QRSNRQ1"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-1.65mm"
            pcbY="1.4mm"
            width="0.55mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="-1.4mm"
            pcbY="-1.65mm"
            width="0.2mm"
            height="0.55mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin24"]}
            pcbX="1.65mm"
            pcbY="-1.4mm"
            width="0.55mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin32"]}
            pcbX="1.4mm"
            pcbY="1.65mm"
            width="0.2mm"
            height="0.55mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-1.65mm"
            pcbY="1mm"
            width="0.55mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="-1mm"
            pcbY="-1.65mm"
            width="0.2mm"
            height="0.55mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin23"]}
            pcbX="1.65mm"
            pcbY="-1mm"
            width="0.55mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin31"]}
            pcbX="1mm"
            pcbY="1.65mm"
            width="0.2mm"
            height="0.55mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-1.65mm"
            pcbY="0.6mm"
            width="0.55mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="-0.6mm"
            pcbY="-1.65mm"
            width="0.2mm"
            height="0.55mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin22"]}
            pcbX="1.65mm"
            pcbY="-0.6mm"
            width="0.55mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin30"]}
            pcbX="0.6mm"
            pcbY="1.65mm"
            width="0.2mm"
            height="0.55mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-1.65mm"
            pcbY="0.2mm"
            width="0.55mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="-0.2mm"
            pcbY="-1.65mm"
            width="0.2mm"
            height="0.55mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin21"]}
            pcbX="1.65mm"
            pcbY="-0.2mm"
            width="0.55mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin29"]}
            pcbX="0.2mm"
            pcbY="1.65mm"
            width="0.2mm"
            height="0.55mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-1.65mm"
            pcbY="-0.2mm"
            width="0.55mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="0.2mm"
            pcbY="-1.65mm"
            width="0.2mm"
            height="0.55mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin20"]}
            pcbX="1.65mm"
            pcbY="0.2mm"
            width="0.55mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin28"]}
            pcbX="-0.2mm"
            pcbY="1.65mm"
            width="0.2mm"
            height="0.55mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-1.65mm"
            pcbY="-0.6mm"
            width="0.55mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="0.6mm"
            pcbY="-1.65mm"
            width="0.2mm"
            height="0.55mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin19"]}
            pcbX="1.65mm"
            pcbY="0.6mm"
            width="0.55mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin27"]}
            pcbX="-0.6mm"
            pcbY="1.65mm"
            width="0.2mm"
            height="0.55mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-1.65mm"
            pcbY="-1mm"
            width="0.55mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="1mm"
            pcbY="-1.65mm"
            width="0.2mm"
            height="0.55mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="1.65mm"
            pcbY="1mm"
            width="0.55mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin26"]}
            pcbX="-1mm"
            pcbY="1.65mm"
            width="0.2mm"
            height="0.55mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-1.65mm"
            pcbY="-1.4mm"
            width="0.55mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="1.4mm"
            pcbY="-1.65mm"
            width="0.2mm"
            height="0.55mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="1.65mm"
            pcbY="1.4mm"
            width="0.55mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin25"]}
            pcbX="-1.4mm"
            pcbY="1.65mm"
            width="0.2mm"
            height="0.55mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin33"]}
            pcbX="0mm"
            pcbY="0mm"
            width="2.8mm"
            height="2.8mm"
            shape="rect"
          />
        </footprint>
      }
      {...props}
    />
  );
};

export default TLC69624QRSNRQ1;
