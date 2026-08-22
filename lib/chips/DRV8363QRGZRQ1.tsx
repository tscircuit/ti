import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["GLC", "1"],
  pin2: ["SLC", "2"],
  pin3: ["SPA", "3"],
  pin4: ["SNA", "4"],
  pin5: ["SPB", "5"],
  pin6: ["SNB", "6"],
  pin7: ["SPC", "7"],
  pin8: ["SNC", "8"],
  pin9: ["DRVOFF", "9"],
  pin10: ["AGND", "10"],
  pin11: ["INHA", "11"],
  pin12: ["INLA", "12"],
  pin13: ["INHB", "13"],
  pin14: ["INLB", "14"],
  pin15: ["INHC", "15"],
  pin16: ["INLC", "16"],
  pin17: ["SDO", "17"],
  pin18: ["SDI", "18"],
  pin19: ["SCLK", "19"],
  pin20: ["NSCS", "20"],
  pin21: ["NSLEEP", "21"],
  pin22: ["NFAULT", "22"],
  pin23: ["VREF", "23"],
  pin24: ["SOC", "24"],
  pin25: ["SOB", "25"],
  pin26: ["SOA", "26"],
  pin27: ["GND", "27"],
  pin28: ["DVDD", "28"],
  pin29: ["ASCIN", "29"],
  pin30: ["GVDD", "30"],
  pin31: ["NC", "31"],
  pin32: ["CPTL", "32"],
  pin33: ["CPTH", "33"],
  pin34: ["VCP", "34"],
  pin35: ["VDRAIN", "35"],
  pin36: ["BSTA", "36"],
  pin37: ["SHA", "37"],
  pin38: ["GHA", "38"],
  pin39: ["GLA", "39"],
  pin40: ["SLA", "40"],
  pin41: ["SLB", "41"],
  pin42: ["GLB", "42"],
  pin43: ["GHB", "43"],
  pin44: ["SHB", "44"],
  pin45: ["BSTB", "45"],
  pin46: ["BSTC", "46"],
  pin47: ["SHC", "47"],
  pin48: ["GHC", "48"],
  pin49: ["THERMAL_PAD", "49"],
} as const;

const pinRoles = {
  pin1: "output",
  pin2: "input",
  pin3: "input",
  pin4: "input",
  pin5: "input",
  pin6: "input",
  pin7: "input",
  pin8: "input",
  pin9: "input",
  pin10: "ground",
  pin11: "input",
  pin12: "input",
  pin13: "input",
  pin14: "input",
  pin15: "input",
  pin16: "input",
  pin17: "output",
  pin18: "input",
  pin19: "control",
  pin20: "input",
  pin21: "input",
  pin22: "unknown",
  pin23: "power",
  pin24: "output",
  pin25: "output",
  pin26: "output",
  pin27: "ground",
  pin28: "power",
  pin29: "input",
  pin30: "unknown",
  pin31: "no-connect",
  pin32: "unknown",
  pin33: "unknown",
  pin34: "unknown",
  pin35: "unknown",
  pin36: "output",
  pin37: "input",
  pin38: "output",
  pin39: "output",
  pin40: "input",
  pin41: "input",
  pin42: "output",
  pin43: "output",
  pin44: "input",
  pin45: "output",
  pin46: "output",
  pin47: "input",
  pin48: "output",
  pin49: "thermal",
} as const;

const pinAttributes = {
  pin10: { requiresGround: true },
  pin23: { requiresPower: true },
  pin27: { requiresGround: true },
  pin28: { requiresPower: true },
  pin31: { doNotConnect: true },
} as const;

export const DRV8363QRGZRQ1 = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing RGZ0048M; official source https://www.ti.com/lit/gpn/DRV8363-Q1 pages 101
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="DRV8363QRGZRQ1"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-3.1mm"
            pcbY="2.75mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="-2.75mm"
            pcbY="-3.1mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin36"]}
            pcbX="3.1mm"
            pcbY="-2.75mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin48"]}
            pcbX="2.75mm"
            pcbY="3.1mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-3.1mm"
            pcbY="2.25mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="-2.25mm"
            pcbY="-3.1mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin35"]}
            pcbX="3.1mm"
            pcbY="-2.25mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin47"]}
            pcbX="2.25mm"
            pcbY="3.1mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-3.1mm"
            pcbY="1.75mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="-1.75mm"
            pcbY="-3.1mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin34"]}
            pcbX="3.1mm"
            pcbY="-1.75mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin46"]}
            pcbX="1.75mm"
            pcbY="3.1mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-3.1mm"
            pcbY="1.25mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="-1.25mm"
            pcbY="-3.1mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin33"]}
            pcbX="3.1mm"
            pcbY="-1.25mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin45"]}
            pcbX="1.25mm"
            pcbY="3.1mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-3.1mm"
            pcbY="0.75mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="-0.75mm"
            pcbY="-3.1mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin32"]}
            pcbX="3.1mm"
            pcbY="-0.75mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin44"]}
            pcbX="0.75mm"
            pcbY="3.1mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-3.1mm"
            pcbY="0.25mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="-0.25mm"
            pcbY="-3.1mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin31"]}
            pcbX="3.1mm"
            pcbY="-0.25mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin43"]}
            pcbX="0.25mm"
            pcbY="3.1mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-3.1mm"
            pcbY="-0.25mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin19"]}
            pcbX="0.25mm"
            pcbY="-3.1mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin30"]}
            pcbX="3.1mm"
            pcbY="0.25mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin42"]}
            pcbX="-0.25mm"
            pcbY="3.1mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-3.1mm"
            pcbY="-0.75mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin20"]}
            pcbX="0.75mm"
            pcbY="-3.1mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin29"]}
            pcbX="3.1mm"
            pcbY="0.75mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin41"]}
            pcbX="-0.75mm"
            pcbY="3.1mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="-3.1mm"
            pcbY="-1.25mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin21"]}
            pcbX="1.25mm"
            pcbY="-3.1mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin28"]}
            pcbX="3.1mm"
            pcbY="1.25mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin40"]}
            pcbX="-1.25mm"
            pcbY="3.1mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="-3.1mm"
            pcbY="-1.75mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin22"]}
            pcbX="1.75mm"
            pcbY="-3.1mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin27"]}
            pcbX="3.1mm"
            pcbY="1.75mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin39"]}
            pcbX="-1.75mm"
            pcbY="3.1mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="-3.1mm"
            pcbY="-2.25mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin23"]}
            pcbX="2.25mm"
            pcbY="-3.1mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin26"]}
            pcbX="3.1mm"
            pcbY="2.25mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin38"]}
            pcbX="-2.25mm"
            pcbY="3.1mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="-3.1mm"
            pcbY="-2.75mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin24"]}
            pcbX="2.75mm"
            pcbY="-3.1mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin25"]}
            pcbX="3.1mm"
            pcbY="2.75mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin37"]}
            pcbX="-2.75mm"
            pcbY="3.1mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin49"]}
            pcbX="0mm"
            pcbY="0mm"
            width="5.6mm"
            height="5.6mm"
            shape="rect"
          />
        </footprint>
      }
      {...props}
    />
  );
};

export default DRV8363QRGZRQ1;
