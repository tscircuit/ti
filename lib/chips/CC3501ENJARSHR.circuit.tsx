import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["PA_LDO_OUT", "1"],
  pin2: ["RF_BG", "2"],
  pin3: ["NC", "3", "NC_3"],
  pin4: ["VDD_ANA_IN1", "4"],
  pin5: ["VDD_ANA_IN2", "5"],
  pin6: ["HFXT_P", "EXTERNAL_INPUT", "6"],
  pin7: ["HFXT_N", "7"],
  pin8: ["ANT_SEL_0", "8", "ANT_SEL_0_8"],
  pin9: ["COEX_REQ", "9", "COEX_REQ_9"],
  pin10: ["VDD_DIG_IN", "10"],
  pin11: ["COEX_GRANT", "11", "COEX_GRANT_11"],
  pin12: ["COEX_REQ", "12", "COEX_REQ_12"],
  pin13: ["ANT_SEL_0", "13", "ANT_SEL_0_13"],
  pin14: ["ANT_SEL_0", "14", "ANT_SEL_0_14"],
  pin15: ["VIO2", "15"],
  pin16: ["COEX_GRANT", "16", "COEX_GRANT_16"],
  pin17: ["COEX_PRIORITY", "17", "COEX_PRIORITY_17"],
  pin18: ["COEX_REQ", "18", "COEX_REQ_18"],
  pin19: ["ANT_SEL_0", "19", "ANT_SEL_0_19"],
  pin20: ["XSPI_DATA_0", "20"],
  pin21: ["XSPI_CLK", "21"],
  pin22: ["XSPI_DATA_3", "22"],
  pin23: ["VDDSF", "23"],
  pin24: ["XSPI_DATA_2", "24"],
  pin25: ["XSPI_DATA_1", "25"],
  pin26: ["XSPI_CS_FLASH", "26"],
  pin27: ["COEX_PRIORITY", "27", "COEX_PRIORITY_27"],
  pin28: ["COEX_REQ", "28", "COEX_REQ_28"],
  pin29: ["COEX_GRANT", "29", "COEX_GRANT_29"],
  pin30: ["ANT_SEL_0", "30", "ANT_SEL_0_30"],
  pin31: ["COEX_REQ", "31", "COEX_REQ_31"],
  pin32: ["COEX_GRANT", "32", "COEX_GRANT_32"],
  pin33: ["ANT_SEL_0", "33", "ANT_SEL_0_33"],
  pin34: ["GPIO12", "34"],
  pin35: ["ADC0", "35"],
  pin36: ["ADC1", "36"],
  pin37: ["VIO1", "37"],
  pin38: ["LOGGER", "38"],
  pin39: ["SWCLK", "39"],
  pin40: ["SWDIO", "40"],
  pin41: ["ADC2", "41"],
  pin42: ["ADC3", "42"],
  pin43: ["ADC4", "43"],
  pin44: ["ADC5", "44"],
  pin45: ["COEX_REQ", "45", "COEX_REQ_45"],
  pin46: ["ADC6", "46"],
  pin47: ["DIG_LDO_OUT", "47"],
  pin48: ["VDDMAIN_IN", "48"],
  pin49: ["NRESET", "49"],
  pin50: ["ADC7", "50"],
  pin51: ["SLOW_CLOCK_IN", "51"],
  pin52: ["ANT_SEL_0", "52", "ANT_SEL_0_52"],
  pin53: ["CCA", "53"],
  pin54: ["NC", "54", "NC_54"],
  pin55: ["PA_LDO_IN2", "55"],
  pin56: ["PA_LDO_IN1", "56"],
  pin57: ["EP", "THERMAL_PAD", "57"],
} as const;

const pinRoles = {
  pin1: "output",
  pin2: "unknown",
  pin3: "no-connect",
  pin4: "power",
  pin5: "power",
  pin6: "input",
  pin7: "unknown",
  pin8: "output",
  pin9: "input",
  pin10: "power",
  pin11: "output",
  pin12: "input",
  pin13: "output",
  pin14: "output",
  pin15: "unknown",
  pin16: "output",
  pin17: "input",
  pin18: "input",
  pin19: "output",
  pin20: "bidirectional",
  pin21: "output",
  pin22: "bidirectional",
  pin23: "power",
  pin24: "bidirectional",
  pin25: "bidirectional",
  pin26: "output",
  pin27: "input",
  pin28: "input",
  pin29: "output",
  pin30: "output",
  pin31: "input",
  pin32: "output",
  pin33: "output",
  pin34: "bidirectional",
  pin35: "input",
  pin36: "input",
  pin37: "unknown",
  pin38: "output",
  pin39: "input",
  pin40: "bidirectional",
  pin41: "input",
  pin42: "input",
  pin43: "input",
  pin44: "input",
  pin45: "input",
  pin46: "input",
  pin47: "output",
  pin48: "power",
  pin49: "unknown",
  pin50: "input",
  pin51: "control",
  pin52: "output",
  pin53: "output",
  pin54: "no-connect",
  pin55: "input",
  pin56: "input",
  pin57: "ground",
} as const;

const pinAttributes = {
  pin3: { doNotConnect: true },
  pin4: { requiresPower: true },
  pin5: { requiresPower: true },
  pin10: { requiresPower: true },
  pin23: { requiresPower: true },
  pin48: { requiresPower: true },
  pin54: { doNotConnect: true },
  pin57: { requiresGround: true },
} as const;

export const CC3501ENJARSHR = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing RSH0056G; official source https://www.ti.com/lit/gpn/CC3501E pages 60
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="CC3501ENJARSHR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-2.95mm"
            pcbY="2.6mm"
            width="0.75mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="-2.6mm"
            pcbY="-2.95mm"
            width="0.2mm"
            height="0.75mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin42"]}
            pcbX="2.95mm"
            pcbY="-2.6mm"
            width="0.75mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin56"]}
            pcbX="2.6mm"
            pcbY="2.95mm"
            width="0.2mm"
            height="0.75mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-2.95mm"
            pcbY="2.2mm"
            width="0.75mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="-2.2mm"
            pcbY="-2.95mm"
            width="0.2mm"
            height="0.75mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin41"]}
            pcbX="2.95mm"
            pcbY="-2.2mm"
            width="0.75mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin55"]}
            pcbX="2.2mm"
            pcbY="2.95mm"
            width="0.2mm"
            height="0.75mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-2.95mm"
            pcbY="1.8mm"
            width="0.75mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="-1.8mm"
            pcbY="-2.95mm"
            width="0.2mm"
            height="0.75mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin40"]}
            pcbX="2.95mm"
            pcbY="-1.8mm"
            width="0.75mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin54"]}
            pcbX="1.8mm"
            pcbY="2.95mm"
            width="0.2mm"
            height="0.75mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-2.95mm"
            pcbY="1.4mm"
            width="0.75mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="-1.4mm"
            pcbY="-2.95mm"
            width="0.2mm"
            height="0.75mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin39"]}
            pcbX="2.95mm"
            pcbY="-1.4mm"
            width="0.75mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin53"]}
            pcbX="1.4mm"
            pcbY="2.95mm"
            width="0.2mm"
            height="0.75mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-2.95mm"
            pcbY="1mm"
            width="0.75mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin19"]}
            pcbX="-1mm"
            pcbY="-2.95mm"
            width="0.2mm"
            height="0.75mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin38"]}
            pcbX="2.95mm"
            pcbY="-1mm"
            width="0.75mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin52"]}
            pcbX="1mm"
            pcbY="2.95mm"
            width="0.2mm"
            height="0.75mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-2.95mm"
            pcbY="0.6mm"
            width="0.75mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin20"]}
            pcbX="-0.6mm"
            pcbY="-2.95mm"
            width="0.2mm"
            height="0.75mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin37"]}
            pcbX="2.95mm"
            pcbY="-0.6mm"
            width="0.75mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin51"]}
            pcbX="0.6mm"
            pcbY="2.95mm"
            width="0.2mm"
            height="0.75mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-2.95mm"
            pcbY="0.2mm"
            width="0.75mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin21"]}
            pcbX="-0.2mm"
            pcbY="-2.95mm"
            width="0.2mm"
            height="0.75mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin36"]}
            pcbX="2.95mm"
            pcbY="-0.2mm"
            width="0.75mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin50"]}
            pcbX="0.2mm"
            pcbY="2.95mm"
            width="0.2mm"
            height="0.75mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-2.95mm"
            pcbY="-0.2mm"
            width="0.75mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin22"]}
            pcbX="0.2mm"
            pcbY="-2.95mm"
            width="0.2mm"
            height="0.75mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin35"]}
            pcbX="2.95mm"
            pcbY="0.2mm"
            width="0.75mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin49"]}
            pcbX="-0.2mm"
            pcbY="2.95mm"
            width="0.2mm"
            height="0.75mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="-2.95mm"
            pcbY="-0.6mm"
            width="0.75mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin23"]}
            pcbX="0.6mm"
            pcbY="-2.95mm"
            width="0.2mm"
            height="0.75mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin34"]}
            pcbX="2.95mm"
            pcbY="0.6mm"
            width="0.75mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin48"]}
            pcbX="-0.6mm"
            pcbY="2.95mm"
            width="0.2mm"
            height="0.75mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="-2.95mm"
            pcbY="-1mm"
            width="0.75mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin24"]}
            pcbX="1mm"
            pcbY="-2.95mm"
            width="0.2mm"
            height="0.75mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin33"]}
            pcbX="2.95mm"
            pcbY="1mm"
            width="0.75mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin47"]}
            pcbX="-1mm"
            pcbY="2.95mm"
            width="0.2mm"
            height="0.75mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="-2.95mm"
            pcbY="-1.4mm"
            width="0.75mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin25"]}
            pcbX="1.4mm"
            pcbY="-2.95mm"
            width="0.2mm"
            height="0.75mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin32"]}
            pcbX="2.95mm"
            pcbY="1.4mm"
            width="0.75mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin46"]}
            pcbX="-1.4mm"
            pcbY="2.95mm"
            width="0.2mm"
            height="0.75mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="-2.95mm"
            pcbY="-1.8mm"
            width="0.75mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin26"]}
            pcbX="1.8mm"
            pcbY="-2.95mm"
            width="0.2mm"
            height="0.75mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin31"]}
            pcbX="2.95mm"
            pcbY="1.8mm"
            width="0.75mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin45"]}
            pcbX="-1.8mm"
            pcbY="2.95mm"
            width="0.2mm"
            height="0.75mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="-2.95mm"
            pcbY="-2.2mm"
            width="0.75mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin27"]}
            pcbX="2.2mm"
            pcbY="-2.95mm"
            width="0.2mm"
            height="0.75mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin30"]}
            pcbX="2.95mm"
            pcbY="2.2mm"
            width="0.75mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin44"]}
            pcbX="-2.2mm"
            pcbY="2.95mm"
            width="0.2mm"
            height="0.75mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="-2.95mm"
            pcbY="-2.6mm"
            width="0.75mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin28"]}
            pcbX="2.6mm"
            pcbY="-2.95mm"
            width="0.2mm"
            height="0.75mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin29"]}
            pcbX="2.95mm"
            pcbY="2.6mm"
            width="0.75mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin43"]}
            pcbX="-2.6mm"
            pcbY="2.95mm"
            width="0.2mm"
            height="0.75mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin57"]}
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

export default CC3501ENJARSHR;
