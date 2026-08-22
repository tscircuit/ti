import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VDDR", "1", "VDDR_1"],
  pin2: ["VDDR", "2", "VDDR_2"],
  pin3: ["DIO0", "3"],
  pin4: ["DIO1", "4"],
  pin5: ["DIO2", "5"],
  pin6: ["DIO3", "6"],
  pin7: ["DIO4", "7"],
  pin8: ["DIO5", "8"],
  pin9: ["VDDIO", "9", "VDDIO_9"],
  pin10: ["DIO7", "10"],
  pin11: ["DIO9_SWDIO", "11"],
  pin12: ["DIO10_SWDCK", "12"],
  pin13: ["DIO11", "13"],
  pin14: ["DIO12", "14"],
  pin15: ["DIO15", "15"],
  pin16: ["DIO16", "16"],
  pin17: ["VDDIO", "17", "VDDIO_17"],
  pin18: ["VDDS", "18", "VDDS_18"],
  pin19: ["DIO17_A8", "19"],
  pin20: ["DIO18_A7", "20"],
  pin21: ["DIO19_A6", "21"],
  pin22: ["DIO20_A5", "22"],
  pin23: ["DIO21_A4", "23"],
  pin24: ["DIO22_A3", "24"],
  pin25: ["RSTN", "25"],
  pin26: ["DIO23_X32P", "26"],
  pin27: ["DIO24_X32N", "27"],
  pin28: ["VDDD", "28"],
  pin29: ["VDDS", "29", "VDDS_29"],
  pin30: ["DCDC", "30"],
  pin31: ["VDDS", "31", "VDDS_31"],
  pin32: ["DIO27_A1", "32"],
  pin33: ["DIO28_A0", "33"],
  pin34: ["VDDR", "34", "VDDR_34"],
  pin35: ["X48P", "35"],
  pin36: ["X48N", "36"],
  pin37: ["NC", "37", "NC_37"],
  pin38: ["VDDS", "38", "VDDS_38"],
  pin39: ["ANT", "39"],
  pin40: ["NC", "40", "NC_40"],
  pin41: ["EGP", "41"],
} as const;

const pinRoles = {
  pin1: "power",
  pin2: "power",
  pin3: "bidirectional",
  pin4: "bidirectional",
  pin5: "bidirectional",
  pin6: "bidirectional",
  pin7: "bidirectional",
  pin8: "bidirectional",
  pin9: "power",
  pin10: "bidirectional",
  pin11: "bidirectional",
  pin12: "bidirectional",
  pin13: "bidirectional",
  pin14: "bidirectional",
  pin15: "bidirectional",
  pin16: "bidirectional",
  pin17: "power",
  pin18: "power",
  pin19: "bidirectional",
  pin20: "bidirectional",
  pin21: "bidirectional",
  pin22: "bidirectional",
  pin23: "bidirectional",
  pin24: "bidirectional",
  pin25: "control",
  pin26: "bidirectional",
  pin27: "bidirectional",
  pin28: "power",
  pin29: "power",
  pin30: "power",
  pin31: "power",
  pin32: "bidirectional",
  pin33: "bidirectional",
  pin34: "power",
  pin35: "unknown",
  pin36: "unknown",
  pin37: "no-connect",
  pin38: "power",
  pin39: "unknown",
  pin40: "no-connect",
  pin41: "ground",
} as const;

const pinAttributes = {
  pin1: { requiresPower: true },
  pin2: { requiresPower: true },
  pin9: { requiresPower: true },
  pin17: { requiresPower: true },
  pin18: { requiresPower: true },
  pin28: { requiresPower: true },
  pin29: { requiresPower: true },
  pin30: { requiresPower: true },
  pin31: { requiresPower: true },
  pin34: { requiresPower: true },
  pin37: { doNotConnect: true },
  pin38: { requiresPower: true },
  pin40: { doNotConnect: true },
  pin41: { requiresGround: true },
} as const;

export const CC2755P207E0WRHAR = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing RHA0040T; official source https://www.ti.com/lit/gpn/CC2755P10 pages 91
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="CC2755P207E0WRHAR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-2.6mm"
            pcbY="2.25mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="-2.25mm"
            pcbY="-2.6mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin30"]}
            pcbX="2.6mm"
            pcbY="-2.25mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin40"]}
            pcbX="2.25mm"
            pcbY="2.6mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-2.6mm"
            pcbY="1.75mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="-1.75mm"
            pcbY="-2.6mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin29"]}
            pcbX="2.6mm"
            pcbY="-1.75mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin39"]}
            pcbX="1.75mm"
            pcbY="2.6mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-2.6mm"
            pcbY="1.25mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="-1.25mm"
            pcbY="-2.6mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin28"]}
            pcbX="2.6mm"
            pcbY="-1.25mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin38"]}
            pcbX="1.25mm"
            pcbY="2.6mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-2.6mm"
            pcbY="0.75mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="-0.75mm"
            pcbY="-2.6mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin27"]}
            pcbX="2.6mm"
            pcbY="-0.75mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin37"]}
            pcbX="0.75mm"
            pcbY="2.6mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-2.6mm"
            pcbY="0.25mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="-0.25mm"
            pcbY="-2.6mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin26"]}
            pcbX="2.6mm"
            pcbY="-0.25mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin36"]}
            pcbX="0.25mm"
            pcbY="2.6mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-2.6mm"
            pcbY="-0.25mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="0.25mm"
            pcbY="-2.6mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin25"]}
            pcbX="2.6mm"
            pcbY="0.25mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin35"]}
            pcbX="-0.25mm"
            pcbY="2.6mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-2.6mm"
            pcbY="-0.75mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="0.75mm"
            pcbY="-2.6mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin24"]}
            pcbX="2.6mm"
            pcbY="0.75mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin34"]}
            pcbX="-0.75mm"
            pcbY="2.6mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-2.6mm"
            pcbY="-1.25mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="1.25mm"
            pcbY="-2.6mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin23"]}
            pcbX="2.6mm"
            pcbY="1.25mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin33"]}
            pcbX="-1.25mm"
            pcbY="2.6mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="-2.6mm"
            pcbY="-1.75mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin19"]}
            pcbX="1.75mm"
            pcbY="-2.6mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin22"]}
            pcbX="2.6mm"
            pcbY="1.75mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin32"]}
            pcbX="-1.75mm"
            pcbY="2.6mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="-2.6mm"
            pcbY="-2.25mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin20"]}
            pcbX="2.25mm"
            pcbY="-2.6mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin21"]}
            pcbX="2.6mm"
            pcbY="2.25mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin31"]}
            pcbX="-2.25mm"
            pcbY="2.6mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin41"]}
            pcbX="0mm"
            pcbY="0mm"
            width="4.7mm"
            height="4.7mm"
            shape="rect"
          />
        </footprint>
      }
      {...props}
    />
  );
};

export default CC2755P207E0WRHAR;
