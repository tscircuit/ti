import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["GND", "1", "GND_1"],
  pin2: ["GND", "2", "GND_2"],
  pin3: ["SDIO_CLK", "3"],
  pin4: ["SDIO_CMD", "4"],
  pin5: ["SDIO_D3", "5"],
  pin6: ["SDIO_D2", "6"],
  pin7: ["SDIO_D1", "7"],
  pin8: ["SDIO_D0", "8"],
  pin9: ["LOGGER", "9"],
  pin10: ["HOST_IRQ_WL", "10"],
  pin11: ["HOST_IRQ_BLE", "11"],
  pin12: ["SWDIO", "12"],
  pin13: ["SWCLK", "13"],
  pin14: ["GND", "14", "GND_14"],
  pin15: ["GND", "15", "GND_15"],
  pin16: ["GND", "16", "GND_16"],
  pin17: ["NRESET", "17"],
  pin18: ["SLOW_CLK_IN", "18"],
  pin19: ["VPP_IN", "19"],
  pin20: ["GND", "20", "GND_20"],
  pin21: ["GND", "21", "GND_21"],
  pin22: ["GND", "22", "GND_22"],
  pin23: ["RF_OUT", "23"],
  pin24: ["GND", "24", "GND_24"],
  pin25: ["GND", "25", "GND_25"],
  pin26: ["GND", "26", "GND_26"],
  pin27: ["GND", "27", "GND_27"],
  pin28: ["GND", "28", "GND_28"],
  pin29: ["GND", "29", "GND_29"],
  pin30: ["GND", "30", "GND_30"],
  pin31: ["GND", "31", "GND_31"],
  pin32: ["GND", "32", "GND_32"],
  pin33: ["GND", "33", "GND_33"],
  pin34: ["GND", "34", "GND_34"],
  pin35: ["GND", "35", "GND_35"],
  pin36: ["GND", "36", "GND_36"],
  pin37: ["3V3_IN", "37", "3V3_IN_37"],
  pin38: ["3V3_IN", "38", "3V3_IN_38"],
  pin39: ["GND", "39", "GND_39"],
  pin40: ["GND", "40", "GND_40"],
  pin41: ["GND", "41", "GND_41"],
  pin42: ["GND", "42", "GND_42"],
  pin43: ["GND", "43", "GND_43"],
  pin44: ["GND", "44", "GND_44"],
  pin45: ["COEX_PRIORITY", "45"],
  pin46: ["COEX_REQ", "46"],
  pin47: ["COEX_GRANT", "47"],
  pin48: ["UART", "48", "UART_48"],
  pin49: ["UART", "49", "UART_49"],
  pin50: ["UART", "50", "UART_50"],
  pin51: ["UART", "51", "UART_51"],
  pin52: ["ANT_SEL", "52"],
  pin53: ["1V8_IN", "53", "1V8_IN_53"],
  pin54: ["1V8_IN", "54", "1V8_IN_54"],
  pin55: ["GND", "55", "GND_55"],
  pin56: ["GND", "56", "GND_56"],
  pin57: ["GND", "57", "GND_57"],
  pin58: ["GND", "58", "GND_58"],
  pin59: ["GND", "59", "GND_59"],
  pin60: ["GND", "60", "GND_60"],
  pin61: ["GND", "61", "GND_61"],
  pin62: ["GND", "62", "GND_62"],
  pin63: ["GND", "63", "GND_63"],
  pin64: ["GND", "64", "GND_64"],
  pin65: ["GND", "65", "GND_65"],
} as const;

const pinRoles = {
  pin1: "ground",
  pin2: "ground",
  pin3: "control",
  pin4: "bidirectional",
  pin5: "bidirectional",
  pin6: "bidirectional",
  pin7: "bidirectional",
  pin8: "bidirectional",
  pin9: "unknown",
  pin10: "output",
  pin11: "output",
  pin12: "output",
  pin13: "output",
  pin14: "ground",
  pin15: "ground",
  pin16: "ground",
  pin17: "unknown",
  pin18: "control",
  pin19: "power",
  pin20: "ground",
  pin21: "ground",
  pin22: "ground",
  pin23: "output",
  pin24: "ground",
  pin25: "ground",
  pin26: "ground",
  pin27: "ground",
  pin28: "ground",
  pin29: "ground",
  pin30: "ground",
  pin31: "ground",
  pin32: "ground",
  pin33: "ground",
  pin34: "ground",
  pin35: "ground",
  pin36: "ground",
  pin37: "input",
  pin38: "input",
  pin39: "ground",
  pin40: "ground",
  pin41: "ground",
  pin42: "ground",
  pin43: "ground",
  pin44: "ground",
  pin45: "unknown",
  pin46: "unknown",
  pin47: "unknown",
  pin48: "unknown",
  pin49: "unknown",
  pin50: "unknown",
  pin51: "unknown",
  pin52: "control",
  pin53: "input",
  pin54: "input",
  pin55: "ground",
  pin56: "ground",
  pin57: "ground",
  pin58: "ground",
  pin59: "ground",
  pin60: "ground",
  pin61: "ground",
  pin62: "ground",
  pin63: "ground",
  pin64: "ground",
  pin65: "ground",
} as const;

const pinAttributes = {
  pin1: { requiresGround: true },
  pin2: { requiresGround: true },
  pin14: { requiresGround: true },
  pin15: { requiresGround: true },
  pin16: { requiresGround: true },
  pin19: { requiresPower: true },
  pin20: { requiresGround: true },
  pin21: { requiresGround: true },
  pin22: { requiresGround: true },
  pin24: { requiresGround: true },
  pin25: { requiresGround: true },
  pin26: { requiresGround: true },
  pin27: { requiresGround: true },
  pin28: { requiresGround: true },
  pin29: { requiresGround: true },
  pin30: { requiresGround: true },
  pin31: { requiresGround: true },
  pin32: { requiresGround: true },
  pin33: { requiresGround: true },
  pin34: { requiresGround: true },
  pin35: { requiresGround: true },
  pin36: { requiresGround: true },
  pin39: { requiresGround: true },
  pin40: { requiresGround: true },
  pin41: { requiresGround: true },
  pin42: { requiresGround: true },
  pin43: { requiresGround: true },
  pin44: { requiresGround: true },
  pin55: { requiresGround: true },
  pin56: { requiresGround: true },
  pin57: { requiresGround: true },
  pin58: { requiresGround: true },
  pin59: { requiresGround: true },
  pin60: { requiresGround: true },
  pin61: { requiresGround: true },
  pin62: { requiresGround: true },
  pin63: { requiresGround: true },
  pin64: { requiresGround: true },
  pin65: { requiresGround: true },
} as const;

export const CC3350MODENIAMOZR = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing MOZ0065A; official source https://www.ti.com/lit/gpn/CC3300MOD pages 32
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="CC3350MODENIAMOZR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-5mm"
            pcbY="5mm"
            width="0.5mm"
            height="0.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="-5mm"
            pcbY="-5mm"
            width="0.5mm"
            height="0.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin29"]}
            pcbX="5mm"
            pcbY="-5mm"
            width="0.5mm"
            height="0.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin43"]}
            pcbX="5mm"
            pcbY="5mm"
            width="0.5mm"
            height="0.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-5mm"
            pcbY="3.9mm"
            width="0.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="-3.9mm"
            pcbY="-5mm"
            width="0.3mm"
            height="0.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin30"]}
            pcbX="5mm"
            pcbY="-3.9mm"
            width="0.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin44"]}
            pcbX="3.9mm"
            pcbY="5mm"
            width="0.3mm"
            height="0.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-5mm"
            pcbY="3.25mm"
            width="0.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="-3.25mm"
            pcbY="-5mm"
            width="0.3mm"
            height="0.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin31"]}
            pcbX="5mm"
            pcbY="-3.25mm"
            width="0.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin45"]}
            pcbX="3.25mm"
            pcbY="5mm"
            width="0.3mm"
            height="0.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-5mm"
            pcbY="2.6mm"
            width="0.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="-2.6mm"
            pcbY="-5mm"
            width="0.3mm"
            height="0.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin32"]}
            pcbX="5mm"
            pcbY="-2.6mm"
            width="0.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin46"]}
            pcbX="2.6mm"
            pcbY="5mm"
            width="0.3mm"
            height="0.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-5mm"
            pcbY="1.95mm"
            width="0.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin19"]}
            pcbX="-1.95mm"
            pcbY="-5mm"
            width="0.3mm"
            height="0.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin33"]}
            pcbX="5mm"
            pcbY="-1.95mm"
            width="0.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin47"]}
            pcbX="1.95mm"
            pcbY="5mm"
            width="0.3mm"
            height="0.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-5mm"
            pcbY="1.3mm"
            width="0.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin20"]}
            pcbX="-1.3mm"
            pcbY="-5mm"
            width="0.3mm"
            height="0.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin34"]}
            pcbX="5mm"
            pcbY="-1.3mm"
            width="0.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin48"]}
            pcbX="1.3mm"
            pcbY="5mm"
            width="0.3mm"
            height="0.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-5mm"
            pcbY="0.65mm"
            width="0.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin21"]}
            pcbX="-0.65mm"
            pcbY="-5mm"
            width="0.3mm"
            height="0.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin35"]}
            pcbX="5mm"
            pcbY="-0.65mm"
            width="0.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin49"]}
            pcbX="0.65mm"
            pcbY="5mm"
            width="0.3mm"
            height="0.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-5mm"
            pcbY="0mm"
            width="0.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin22"]}
            pcbX="0mm"
            pcbY="-5mm"
            width="0.3mm"
            height="0.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin36"]}
            pcbX="5mm"
            pcbY="0mm"
            width="0.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin50"]}
            pcbX="0mm"
            pcbY="5mm"
            width="0.3mm"
            height="0.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="-5mm"
            pcbY="-0.65mm"
            width="0.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin23"]}
            pcbX="0.65mm"
            pcbY="-5mm"
            width="0.3mm"
            height="0.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin37"]}
            pcbX="5mm"
            pcbY="0.65mm"
            width="0.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin51"]}
            pcbX="-0.65mm"
            pcbY="5mm"
            width="0.3mm"
            height="0.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="-5mm"
            pcbY="-1.3mm"
            width="0.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin24"]}
            pcbX="1.3mm"
            pcbY="-5mm"
            width="0.3mm"
            height="0.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin38"]}
            pcbX="5mm"
            pcbY="1.3mm"
            width="0.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin52"]}
            pcbX="-1.3mm"
            pcbY="5mm"
            width="0.3mm"
            height="0.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="-5mm"
            pcbY="-1.95mm"
            width="0.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin25"]}
            pcbX="1.95mm"
            pcbY="-5mm"
            width="0.3mm"
            height="0.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin39"]}
            pcbX="5mm"
            pcbY="1.95mm"
            width="0.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin53"]}
            pcbX="-1.95mm"
            pcbY="5mm"
            width="0.3mm"
            height="0.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="-5mm"
            pcbY="-2.6mm"
            width="0.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin26"]}
            pcbX="2.6mm"
            pcbY="-5mm"
            width="0.3mm"
            height="0.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin40"]}
            pcbX="5mm"
            pcbY="2.6mm"
            width="0.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin54"]}
            pcbX="-2.6mm"
            pcbY="5mm"
            width="0.3mm"
            height="0.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="-5mm"
            pcbY="-3.25mm"
            width="0.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin27"]}
            pcbX="3.25mm"
            pcbY="-5mm"
            width="0.3mm"
            height="0.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin41"]}
            pcbX="5mm"
            pcbY="3.25mm"
            width="0.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin55"]}
            pcbX="-3.25mm"
            pcbY="5mm"
            width="0.3mm"
            height="0.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="-5mm"
            pcbY="-3.9mm"
            width="0.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin28"]}
            pcbX="3.9mm"
            pcbY="-5mm"
            width="0.3mm"
            height="0.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin42"]}
            pcbX="5mm"
            pcbY="3.9mm"
            width="0.5mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin56"]}
            pcbX="-3.9mm"
            pcbY="5mm"
            width="0.3mm"
            height="0.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin57"]}
            pcbX="-2.6mm"
            pcbY="2.2mm"
            width="1mm"
            height="1mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin58"]}
            pcbX="-2.6mm"
            pcbY="0.75mm"
            width="1mm"
            height="1mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin59"]}
            pcbX="-2.6mm"
            pcbY="-0.7mm"
            width="1mm"
            height="1mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin60"]}
            pcbX="-1.15mm"
            pcbY="2.2mm"
            width="1mm"
            height="1mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin61"]}
            pcbX="-1.15mm"
            pcbY="0.75mm"
            width="1mm"
            height="1mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin62"]}
            pcbX="-1.15mm"
            pcbY="-0.7mm"
            width="1mm"
            height="1mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin63"]}
            pcbX="0.3mm"
            pcbY="2.2mm"
            width="1mm"
            height="1mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin64"]}
            pcbX="0.3mm"
            pcbY="0.75mm"
            width="1mm"
            height="1mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin65"]}
            pcbX="0.3mm"
            pcbY="-0.7mm"
            width="1mm"
            height="1mm"
            shape="rect"
          />
        </footprint>
      }
      {...props}
    />
  );
};

export default CC3350MODENIAMOZR;
