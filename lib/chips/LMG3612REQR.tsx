import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["NC1", "1", "NC1_1"],
  pin2: ["D", "2", "D_2"],
  pin3: ["D", "3", "D_3"],
  pin4: ["D", "4", "D_4"],
  pin5: ["D", "5", "D_5"],
  pin6: ["D", "6", "D_6"],
  pin7: ["D", "7", "D_7"],
  pin8: ["D", "8", "D_8"],
  pin9: ["D", "9", "D_9"],
  pin10: ["D", "10", "D_10"],
  pin11: ["D", "11", "D_11"],
  pin12: ["D", "12", "D_12"],
  pin13: ["D", "13", "D_13"],
  pin14: ["D", "14", "D_14"],
  pin15: ["NC1", "15", "NC1_15"],
  pin16: ["NC2", "16", "NC2_16"],
  pin17: ["S", "17", "S_17"],
  pin18: ["S", "18", "S_18"],
  pin19: ["S", "19", "S_19"],
  pin20: ["NC2", "20", "NC2_20"],
  pin21: ["S", "21", "S_21"],
  pin22: ["S", "22", "S_22"],
  pin23: ["S", "23", "S_23"],
  pin24: ["S", "24", "S_24"],
  pin25: ["S", "25", "S_25"],
  pin26: ["S", "26", "S_26"],
  pin27: ["S", "27", "S_27"],
  pin28: ["S", "28", "S_28"],
  pin29: ["S", "29", "S_29"],
  pin30: ["NC3", "30"],
  pin31: ["IN", "31"],
  pin32: ["AGND", "32"],
  pin33: ["NC4", "33"],
  pin34: ["NC5", "34"],
  pin35: ["FLT", "35"],
  pin36: ["AUX", "36"],
  pin37: ["RDRV", "37"],
  pin38: ["NC2", "38", "NC2_38"],
  pin39: ["PAD", "S", "39"],
} as const;

const pinRoles = {
  pin1: "no-connect",
  pin2: "power",
  pin3: "power",
  pin4: "power",
  pin5: "power",
  pin6: "power",
  pin7: "power",
  pin8: "power",
  pin9: "power",
  pin10: "power",
  pin11: "power",
  pin12: "power",
  pin13: "power",
  pin14: "power",
  pin15: "no-connect",
  pin16: "no-connect",
  pin17: "power",
  pin18: "power",
  pin19: "power",
  pin20: "no-connect",
  pin21: "power",
  pin22: "power",
  pin23: "power",
  pin24: "power",
  pin25: "power",
  pin26: "power",
  pin27: "power",
  pin28: "power",
  pin29: "power",
  pin30: "no-connect",
  pin31: "input",
  pin32: "ground",
  pin33: "no-connect",
  pin34: "no-connect",
  pin35: "output",
  pin36: "power",
  pin37: "input",
  pin38: "no-connect",
  pin39: "power",
} as const;

const pinAttributes = {
  pin1: { doNotConnect: true },
  pin2: { requiresPower: true },
  pin3: { requiresPower: true },
  pin4: { requiresPower: true },
  pin5: { requiresPower: true },
  pin6: { requiresPower: true },
  pin7: { requiresPower: true },
  pin8: { requiresPower: true },
  pin9: { requiresPower: true },
  pin10: { requiresPower: true },
  pin11: { requiresPower: true },
  pin12: { requiresPower: true },
  pin13: { requiresPower: true },
  pin14: { requiresPower: true },
  pin15: { doNotConnect: true },
  pin16: { doNotConnect: true },
  pin17: { requiresPower: true },
  pin18: { requiresPower: true },
  pin19: { requiresPower: true },
  pin20: { doNotConnect: true },
  pin21: { requiresPower: true },
  pin22: { requiresPower: true },
  pin23: { requiresPower: true },
  pin24: { requiresPower: true },
  pin25: { requiresPower: true },
  pin26: { requiresPower: true },
  pin27: { requiresPower: true },
  pin28: { requiresPower: true },
  pin29: { requiresPower: true },
  pin30: { doNotConnect: true },
  pin32: { requiresGround: true },
  pin33: { doNotConnect: true },
  pin34: { doNotConnect: true },
  pin36: { requiresPower: true },
  pin38: { doNotConnect: true },
  pin39: { requiresPower: true },
} as const;

export const LMG3612REQR = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing REQ0038A; official source https://www.ti.com/lit/gpn/LMG3612 pages 26
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="LMG3612REQR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-2.5mm"
            pcbY="3.625mm"
            width="0.7mm"
            height="0.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-2.5mm"
            pcbY="3mm"
            width="0.7mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-2.5mm"
            pcbY="2.5mm"
            width="0.7mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-2.5mm"
            pcbY="2mm"
            width="0.7mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-2.5mm"
            pcbY="1.5mm"
            width="0.7mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-2.5mm"
            pcbY="1mm"
            width="0.7mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-2.5mm"
            pcbY="0.5mm"
            width="0.7mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-2.5mm"
            pcbY="0mm"
            width="0.7mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="-2.5mm"
            pcbY="-0.5mm"
            width="0.7mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="-2.5mm"
            pcbY="-1mm"
            width="0.7mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="-2.5mm"
            pcbY="-1.5mm"
            width="0.7mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="-2.5mm"
            pcbY="-2mm"
            width="0.7mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="-2.5mm"
            pcbY="-2.5mm"
            width="0.7mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="-2.5mm"
            pcbY="-3mm"
            width="0.7mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="-2.5mm"
            pcbY="-3.625mm"
            width="0.7mm"
            height="0.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="0.275mm"
            pcbY="-3.85mm"
            width="0.25mm"
            height="0.7mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="0.775mm"
            pcbY="-3.85mm"
            width="0.25mm"
            height="0.7mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="1.275mm"
            pcbY="-3.85mm"
            width="0.25mm"
            height="0.7mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin19"]}
            pcbX="1.775mm"
            pcbY="-3.85mm"
            width="0.25mm"
            height="0.7mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin20"]}
            pcbX="2.5mm"
            pcbY="-3.625mm"
            width="0.7mm"
            height="0.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin21"]}
            pcbX="2.5mm"
            pcbY="-3mm"
            width="0.7mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin22"]}
            pcbX="2.5mm"
            pcbY="-2.5mm"
            width="0.7mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin23"]}
            pcbX="2.5mm"
            pcbY="-2mm"
            width="0.7mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin24"]}
            pcbX="2.5mm"
            pcbY="-1.5mm"
            width="0.7mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin25"]}
            pcbX="2.5mm"
            pcbY="-1mm"
            width="0.7mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin26"]}
            pcbX="2.5mm"
            pcbY="-0.5mm"
            width="0.7mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin27"]}
            pcbX="2.5mm"
            pcbY="0mm"
            width="0.7mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin28"]}
            pcbX="2.5mm"
            pcbY="0.5mm"
            width="0.7mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin29"]}
            pcbX="2.5mm"
            pcbY="1mm"
            width="0.7mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin30"]}
            pcbX="2.5mm"
            pcbY="1.5mm"
            width="0.7mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin31"]}
            pcbX="2.5mm"
            pcbY="2mm"
            width="0.7mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin32"]}
            pcbX="2.5mm"
            pcbY="2.5mm"
            width="0.7mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin33"]}
            pcbX="2.5mm"
            pcbY="3mm"
            width="0.7mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin34"]}
            pcbX="2.5mm"
            pcbY="3.625mm"
            width="0.7mm"
            height="0.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin35"]}
            pcbX="1.775mm"
            pcbY="3.85mm"
            width="0.25mm"
            height="0.7mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin36"]}
            pcbX="1.275mm"
            pcbY="3.85mm"
            width="0.25mm"
            height="0.7mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin37"]}
            pcbX="0.775mm"
            pcbY="3.85mm"
            width="0.25mm"
            height="0.7mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin38"]}
            pcbX="0.275mm"
            pcbY="3.85mm"
            width="0.25mm"
            height="0.7mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin39"]}
            pcbX="0.9mm"
            pcbY="0mm"
            width="2.1mm"
            height="6.6mm"
            shape="rect"
          />
        </footprint>
      }
      {...props}
    />
  );
};

export default LMG3612REQR;
