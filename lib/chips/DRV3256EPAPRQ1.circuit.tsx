import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["SDO", "1"],
  pin2: ["INHA", "2"],
  pin3: ["INLA", "3"],
  pin4: ["INHB", "4"],
  pin5: ["INLB", "5"],
  pin6: ["INHC", "6"],
  pin7: ["INLC", "7"],
  pin8: ["ASCSEL", "8"],
  pin9: ["ASCIN_N", "9"],
  pin10: ["DRVOFF", "10"],
  pin11: ["VDDIO", "11"],
  pin12: ["DVDD", "12"],
  pin13: ["FAULT1_N", "13"],
  pin14: ["SLEEP_N", "14"],
  pin15: ["PVDDS", "15"],
  pin16: ["PVDDG", "16"],
  pin17: ["PVDD", "17"],
  pin18: ["GND", "18"],
  pin19: ["CPL", "19"],
  pin20: ["CPH", "20"],
  pin21: ["NC", "21", "NC_21"],
  pin22: ["NC", "22", "NC_22"],
  pin23: ["DHCP", "23"],
  pin24: ["NC", "24", "NC_24"],
  pin25: ["BSTA", "25"],
  pin26: ["SHA", "26"],
  pin27: ["GHA", "27"],
  pin28: ["DHA", "28"],
  pin29: ["SPA", "29"],
  pin30: ["SNA", "30"],
  pin31: ["GLA", "31"],
  pin32: ["SLA", "32"],
  pin33: ["VGLA", "33"],
  pin34: ["GLB", "34"],
  pin35: ["SLB", "35"],
  pin36: ["VGLB", "36"],
  pin37: ["SNB", "37"],
  pin38: ["SPB", "38"],
  pin39: ["DHB", "39"],
  pin40: ["BSTB", "40"],
  pin41: ["SHB", "41"],
  pin42: ["GHB", "42"],
  pin43: ["NC", "43", "NC_43"],
  pin44: ["VGLC", "44"],
  pin45: ["SLC", "45"],
  pin46: ["GLC", "46"],
  pin47: ["SNC", "47"],
  pin48: ["SPC", "48"],
  pin49: ["DHC", "49"],
  pin50: ["BSTC", "50"],
  pin51: ["SHC", "51"],
  pin52: ["GHC", "52"],
  pin53: ["FAULT2_N", "53"],
  pin54: ["SOC", "54"],
  pin55: ["SOB", "55"],
  pin56: ["SOA", "56"],
  pin57: ["AREF", "57"],
  pin58: ["AGND", "58"],
  pin59: ["PHCA", "59"],
  pin60: ["PHCB", "60"],
  pin61: ["PHCC", "61"],
  pin62: ["SDI", "62"],
  pin63: ["SCLK", "63"],
  pin64: ["SCS_N", "64"],
  pin65: ["THERMAL_PAD", "65"],
} as const;

const pinRoles = {
  pin1: "output",
  pin2: "input",
  pin3: "input",
  pin4: "input",
  pin5: "input",
  pin6: "input",
  pin7: "input",
  pin8: "unknown",
  pin9: "unknown",
  pin10: "output",
  pin11: "power",
  pin12: "power",
  pin13: "output",
  pin14: "control",
  pin15: "power",
  pin16: "power",
  pin17: "power",
  pin18: "ground",
  pin19: "unknown",
  pin20: "unknown",
  pin21: "no-connect",
  pin22: "no-connect",
  pin23: "unknown",
  pin24: "no-connect",
  pin25: "unknown",
  pin26: "unknown",
  pin27: "unknown",
  pin28: "unknown",
  pin29: "unknown",
  pin30: "unknown",
  pin31: "unknown",
  pin32: "unknown",
  pin33: "unknown",
  pin34: "unknown",
  pin35: "unknown",
  pin36: "unknown",
  pin37: "unknown",
  pin38: "unknown",
  pin39: "unknown",
  pin40: "unknown",
  pin41: "unknown",
  pin42: "unknown",
  pin43: "no-connect",
  pin44: "unknown",
  pin45: "unknown",
  pin46: "unknown",
  pin47: "unknown",
  pin48: "unknown",
  pin49: "unknown",
  pin50: "unknown",
  pin51: "unknown",
  pin52: "unknown",
  pin53: "output",
  pin54: "unknown",
  pin55: "unknown",
  pin56: "unknown",
  pin57: "unknown",
  pin58: "ground",
  pin59: "unknown",
  pin60: "unknown",
  pin61: "unknown",
  pin62: "input",
  pin63: "control",
  pin64: "unknown",
  pin65: "thermal",
} as const;

const pinAttributes = {
  pin11: { requiresPower: true },
  pin12: { requiresPower: true },
  pin15: { requiresPower: true },
  pin16: { requiresPower: true },
  pin17: { requiresPower: true },
  pin18: { requiresGround: true },
  pin21: { doNotConnect: true },
  pin22: { doNotConnect: true },
  pin24: { doNotConnect: true },
  pin43: { doNotConnect: true },
  pin58: { requiresGround: true },
} as const;

export const DRV3256EPAPRQ1 = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing PAP0064N; official source https://www.ti.com/lit/gpn/DRV3256-Q1 pages 16
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="DRV3256EPAPRQ1"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-4.95mm"
            pcbY="3.75mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="-3.75mm"
            pcbY="-4.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin48"]}
            pcbX="4.95mm"
            pcbY="-3.75mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin64"]}
            pcbX="3.75mm"
            pcbY="4.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-4.95mm"
            pcbY="3.25mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="-3.25mm"
            pcbY="-4.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin47"]}
            pcbX="4.95mm"
            pcbY="-3.25mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin63"]}
            pcbX="3.25mm"
            pcbY="4.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-4.95mm"
            pcbY="2.75mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin19"]}
            pcbX="-2.75mm"
            pcbY="-4.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin46"]}
            pcbX="4.95mm"
            pcbY="-2.75mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin62"]}
            pcbX="2.75mm"
            pcbY="4.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-4.95mm"
            pcbY="2.25mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin20"]}
            pcbX="-2.25mm"
            pcbY="-4.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin45"]}
            pcbX="4.95mm"
            pcbY="-2.25mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin61"]}
            pcbX="2.25mm"
            pcbY="4.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-4.95mm"
            pcbY="1.75mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin21"]}
            pcbX="-1.75mm"
            pcbY="-4.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin44"]}
            pcbX="4.95mm"
            pcbY="-1.75mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin60"]}
            pcbX="1.75mm"
            pcbY="4.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-4.95mm"
            pcbY="1.25mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin22"]}
            pcbX="-1.25mm"
            pcbY="-4.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin43"]}
            pcbX="4.95mm"
            pcbY="-1.25mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin59"]}
            pcbX="1.25mm"
            pcbY="4.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-4.95mm"
            pcbY="0.75mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin23"]}
            pcbX="-0.75mm"
            pcbY="-4.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin42"]}
            pcbX="4.95mm"
            pcbY="-0.75mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin58"]}
            pcbX="0.75mm"
            pcbY="4.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-4.95mm"
            pcbY="0.25mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin24"]}
            pcbX="-0.25mm"
            pcbY="-4.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin41"]}
            pcbX="4.95mm"
            pcbY="-0.25mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin57"]}
            pcbX="0.25mm"
            pcbY="4.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="-4.95mm"
            pcbY="-0.25mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin25"]}
            pcbX="0.25mm"
            pcbY="-4.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin40"]}
            pcbX="4.95mm"
            pcbY="0.25mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin56"]}
            pcbX="-0.25mm"
            pcbY="4.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="-4.95mm"
            pcbY="-0.75mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin26"]}
            pcbX="0.75mm"
            pcbY="-4.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin39"]}
            pcbX="4.95mm"
            pcbY="0.75mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin55"]}
            pcbX="-0.75mm"
            pcbY="4.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="-4.95mm"
            pcbY="-1.25mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin27"]}
            pcbX="1.25mm"
            pcbY="-4.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin38"]}
            pcbX="4.95mm"
            pcbY="1.25mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin54"]}
            pcbX="-1.25mm"
            pcbY="4.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="-4.95mm"
            pcbY="-1.75mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin28"]}
            pcbX="1.75mm"
            pcbY="-4.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin37"]}
            pcbX="4.95mm"
            pcbY="1.75mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin53"]}
            pcbX="-1.75mm"
            pcbY="4.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="-4.95mm"
            pcbY="-2.25mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin29"]}
            pcbX="2.25mm"
            pcbY="-4.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin36"]}
            pcbX="4.95mm"
            pcbY="2.25mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin52"]}
            pcbX="-2.25mm"
            pcbY="4.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="-4.95mm"
            pcbY="-2.75mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin30"]}
            pcbX="2.75mm"
            pcbY="-4.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin35"]}
            pcbX="4.95mm"
            pcbY="2.75mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin51"]}
            pcbX="-2.75mm"
            pcbY="4.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="-4.95mm"
            pcbY="-3.25mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin31"]}
            pcbX="3.25mm"
            pcbY="-4.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin34"]}
            pcbX="4.95mm"
            pcbY="3.25mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin50"]}
            pcbX="-3.25mm"
            pcbY="4.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="-4.95mm"
            pcbY="-3.75mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin32"]}
            pcbX="3.75mm"
            pcbY="-4.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin33"]}
            pcbX="4.95mm"
            pcbY="3.75mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin49"]}
            pcbX="-3.75mm"
            pcbY="4.95mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin65"]}
            pcbX="0mm"
            pcbY="0mm"
            width="5.3mm"
            height="5.3mm"
            shape="rect"
          />
        </footprint>
      }
      {...props}
    />
  );
};

export default DRV3256EPAPRQ1;
