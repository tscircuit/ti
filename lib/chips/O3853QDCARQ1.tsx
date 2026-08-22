import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["ENDRV", "1"],
  pin2: ["PGND1", "2", "PGND1_2"],
  pin3: ["PGND1", "3", "PGND1_3"],
  pin4: ["L1", "4", "L1_4"],
  pin5: ["L1", "5", "L1_5"],
  pin6: ["BST1", "6"],
  pin7: ["PGND1", "7", "PGND1_7"],
  pin8: ["VBATP", "8"],
  pin9: ["VCP", "9"],
  pin10: ["CP1", "10"],
  pin11: ["CP2", "11"],
  pin12: ["ERROR_WDI", "12"],
  pin13: ["GND", "13"],
  pin14: ["VDD5", "14"],
  pin15: ["SEL_VDD3_5", "15"],
  pin16: ["NRES", "16"],
  pin17: ["DIAG_OUT", "17"],
  pin18: ["IGN", "18"],
  pin19: ["VSOUT1", "19"],
  pin20: ["VSOUT2_CPSW", "20"],
  pin21: ["SIN_P", "21"],
  pin22: ["SIN_N_O", "22"],
  pin23: ["SIN_P_O", "23"],
  pin24: ["SIN_N", "24"],
  pin25: ["COS_N", "25"],
  pin26: ["COS_P_O", "26"],
  pin27: ["COS_N_O", "27"],
  pin28: ["COS_P", "28"],
  pin29: ["VSOUT2", "29"],
  pin30: ["VBAT_SAFING", "30"],
  pin31: ["CANWU", "31"],
  pin32: ["VTRACK", "32"],
  pin33: ["SCLK", "33"],
  pin34: ["SDO", "34"],
  pin35: ["SDI", "35"],
  pin36: ["NCS", "36"],
  pin37: ["VDDIO", "37"],
  pin38: ["VDD3_5", "38"],
  pin39: ["VDD6_FB", "39"],
  pin40: ["VDD6", "40"],
  pin41: ["LGND", "41"],
  pin42: ["VREG", "42"],
  pin43: ["BST2", "43"],
  pin44: ["L2", "44", "L2_44"],
  pin45: ["L2", "45", "L2_45"],
  pin46: ["PGND2", "46", "PGND2_46"],
  pin47: ["PGND2", "47", "PGND2_47"],
  pin48: ["VBATL", "48"],
  pin49: ["PAD", "49"],
} as const;

const pinRoles = {
  pin1: "control",
  pin2: "ground",
  pin3: "ground",
  pin4: "unknown",
  pin5: "unknown",
  pin6: "unknown",
  pin7: "ground",
  pin8: "power",
  pin9: "unknown",
  pin10: "unknown",
  pin11: "unknown",
  pin12: "unknown",
  pin13: "ground",
  pin14: "power",
  pin15: "control",
  pin16: "unknown",
  pin17: "output",
  pin18: "unknown",
  pin19: "unknown",
  pin20: "unknown",
  pin21: "unknown",
  pin22: "unknown",
  pin23: "unknown",
  pin24: "unknown",
  pin25: "unknown",
  pin26: "unknown",
  pin27: "unknown",
  pin28: "unknown",
  pin29: "unknown",
  pin30: "power",
  pin31: "unknown",
  pin32: "unknown",
  pin33: "control",
  pin34: "output",
  pin35: "input",
  pin36: "unknown",
  pin37: "power",
  pin38: "power",
  pin39: "power",
  pin40: "power",
  pin41: "ground",
  pin42: "power",
  pin43: "unknown",
  pin44: "unknown",
  pin45: "unknown",
  pin46: "ground",
  pin47: "ground",
  pin48: "power",
  pin49: "thermal",
} as const;

const pinAttributes = {
  pin2: { requiresGround: true },
  pin3: { requiresGround: true },
  pin7: { requiresGround: true },
  pin8: { requiresPower: true },
  pin13: { requiresGround: true },
  pin14: { requiresPower: true },
  pin30: { requiresPower: true },
  pin37: { requiresPower: true },
  pin38: { requiresPower: true },
  pin39: { requiresPower: true },
  pin40: { requiresPower: true },
  pin41: { requiresGround: true },
  pin42: { requiresPower: true },
  pin46: { requiresGround: true },
  pin47: { requiresGround: true },
  pin48: { requiresPower: true },
} as const;

export const O3853QDCARQ1 = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing DCA0048B; official source https://www.ti.com/lit/gpn/TPS653853-Q1 pages 10
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="O3853QDCARQ1"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-3mm"
            pcbY="5.75mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin48"]}
            pcbX="3mm"
            pcbY="5.75mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-3mm"
            pcbY="5.25mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin47"]}
            pcbX="3mm"
            pcbY="5.25mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-3mm"
            pcbY="4.75mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin46"]}
            pcbX="3mm"
            pcbY="4.75mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-3mm"
            pcbY="4.25mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin45"]}
            pcbX="3mm"
            pcbY="4.25mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-3mm"
            pcbY="3.75mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin44"]}
            pcbX="3mm"
            pcbY="3.75mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-3mm"
            pcbY="3.25mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin43"]}
            pcbX="3mm"
            pcbY="3.25mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-3mm"
            pcbY="2.75mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin42"]}
            pcbX="3mm"
            pcbY="2.75mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-3mm"
            pcbY="2.25mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin41"]}
            pcbX="3mm"
            pcbY="2.25mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="-3mm"
            pcbY="1.75mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin40"]}
            pcbX="3mm"
            pcbY="1.75mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="-3mm"
            pcbY="1.25mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin39"]}
            pcbX="3mm"
            pcbY="1.25mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="-3mm"
            pcbY="0.75mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin38"]}
            pcbX="3mm"
            pcbY="0.75mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="-3mm"
            pcbY="0.25mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin37"]}
            pcbX="3mm"
            pcbY="0.25mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="-3mm"
            pcbY="-0.25mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin36"]}
            pcbX="3mm"
            pcbY="-0.25mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="-3mm"
            pcbY="-0.75mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin35"]}
            pcbX="3mm"
            pcbY="-0.75mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="-3mm"
            pcbY="-1.25mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin34"]}
            pcbX="3mm"
            pcbY="-1.25mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="-3mm"
            pcbY="-1.75mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin33"]}
            pcbX="3mm"
            pcbY="-1.75mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="-3mm"
            pcbY="-2.25mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin32"]}
            pcbX="3mm"
            pcbY="-2.25mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="-3mm"
            pcbY="-2.75mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin31"]}
            pcbX="3mm"
            pcbY="-2.75mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin19"]}
            pcbX="-3mm"
            pcbY="-3.25mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin30"]}
            pcbX="3mm"
            pcbY="-3.25mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin20"]}
            pcbX="-3mm"
            pcbY="-3.75mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin29"]}
            pcbX="3mm"
            pcbY="-3.75mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin21"]}
            pcbX="-3mm"
            pcbY="-4.25mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin28"]}
            pcbX="3mm"
            pcbY="-4.25mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin22"]}
            pcbX="-3mm"
            pcbY="-4.75mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin27"]}
            pcbX="3mm"
            pcbY="-4.75mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin23"]}
            pcbX="-3mm"
            pcbY="-5.25mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin26"]}
            pcbX="3mm"
            pcbY="-5.25mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin24"]}
            pcbX="-3mm"
            pcbY="-5.75mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin25"]}
            pcbX="3mm"
            pcbY="-5.75mm"
            width="1.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin49"]}
            pcbX="0mm"
            pcbY="0mm"
            width="2.73mm"
            height="4.69mm"
            shape="rect"
          />
        </footprint>
      }
      {...props}
    />
  );
};

export default O3853QDCARQ1;
