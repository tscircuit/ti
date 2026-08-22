import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["SPI_BUSY", "1"],
  pin2: ["PRESENCE_INDICATION_OUTPUT", "2"],
  pin3: ["MODULE_WAKE_UP_INPUT", "3"],
  pin4: ["NC", "4", "NC_4"],
  pin5: ["GND", "5", "GND_5"],
  pin6: ["GND", "6", "GND_6"],
  pin7: ["VCC", "7", "VCC_7"],
  pin8: ["VCC", "8", "VCC_8"],
  pin9: ["NC", "9", "NC_9"],
  pin10: ["SOP0", "10"],
  pin11: ["NC", "11", "NC_11"],
  pin12: ["UART_RX", "12"],
  pin13: ["UART_TX", "13"],
  pin14: ["NC", "14", "NC_14"],
  pin15: ["NRESET", "15"],
  pin16: ["NC", "16", "NC_16"],
  pin17: ["NC", "17", "NC_17"],
  pin18: ["SPI_MISO", "18"],
  pin19: ["SPI_CS", "19"],
  pin20: ["SPI_CLK", "20"],
  pin21: ["SPI_MOSI", "21"],
  pin22: ["NC", "22", "NC_22"],
  pin23: ["NC", "23", "NC_23"],
  pin24: ["NC", "24", "NC_24"],
  pin25: ["GND", "25", "GND_25"],
  pin26: ["NC", "26", "NC_26"],
  pin27: ["GND", "27", "GND_27"],
  pin28: ["GND", "28", "GND_28"],
  pin29: ["VIOIN", "29"],
  pin30: ["GND", "30", "GND_30"],
} as const;

const pinRoles = {
  pin1: "output",
  pin2: "output",
  pin3: "control",
  pin4: "no-connect",
  pin5: "ground",
  pin6: "ground",
  pin7: "power",
  pin8: "power",
  pin9: "no-connect",
  pin10: "unknown",
  pin11: "no-connect",
  pin12: "input",
  pin13: "output",
  pin14: "no-connect",
  pin15: "unknown",
  pin16: "no-connect",
  pin17: "no-connect",
  pin18: "output",
  pin19: "control",
  pin20: "control",
  pin21: "input",
  pin22: "no-connect",
  pin23: "no-connect",
  pin24: "no-connect",
  pin25: "ground",
  pin26: "no-connect",
  pin27: "ground",
  pin28: "ground",
  pin29: "unknown",
  pin30: "ground",
} as const;

const pinAttributes = {
  pin4: { doNotConnect: true },
  pin5: { requiresGround: true },
  pin6: { requiresGround: true },
  pin7: { requiresPower: true },
  pin8: { requiresPower: true },
  pin9: { doNotConnect: true },
  pin11: { doNotConnect: true },
  pin14: { doNotConnect: true },
  pin16: { doNotConnect: true },
  pin17: { doNotConnect: true },
  pin22: { doNotConnect: true },
  pin23: { doNotConnect: true },
  pin24: { doNotConnect: true },
  pin25: { requiresGround: true },
  pin26: { doNotConnect: true },
  pin27: { requiresGround: true },
  pin28: { requiresGround: true },
  pin30: { requiresGround: true },
} as const;

export const XI6432BAFCLIMBBR = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing MBB0030A; official source https://www.ti.com/lit/gpn/IWRL6432WMOD pages 30,31,32
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="XI6432BAFCLIMBBR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-5.7mm"
            pcbY="13.6mm"
            width="0.7mm"
            height="0.7mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-5.7mm"
            pcbY="10.2mm"
            width="0.7mm"
            height="0.7mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-5.7mm"
            pcbY="6.8mm"
            width="0.7mm"
            height="0.7mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-5.7mm"
            pcbY="3.4mm"
            width="0.7mm"
            height="0.7mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-5.7mm"
            pcbY="0mm"
            width="0.7mm"
            height="0.7mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-5.7mm"
            pcbY="-3.4mm"
            width="0.7mm"
            height="0.7mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-5.7mm"
            pcbY="-6.8mm"
            width="0.7mm"
            height="0.7mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-5.7mm"
            pcbY="-10.2mm"
            width="0.7mm"
            height="0.7mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="-5.7mm"
            pcbY="-13.6mm"
            width="0.7mm"
            height="0.7mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="-1.9mm"
            pcbY="13.6mm"
            width="0.7mm"
            height="0.7mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="-1.9mm"
            pcbY="10.2mm"
            width="0.7mm"
            height="0.7mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="-1.9mm"
            pcbY="6.8mm"
            width="0.7mm"
            height="0.7mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="-1.9mm"
            pcbY="-3.4mm"
            width="0.7mm"
            height="0.7mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="-1.9mm"
            pcbY="-6.8mm"
            width="0.7mm"
            height="0.7mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="-1.9mm"
            pcbY="-10.2mm"
            width="0.7mm"
            height="0.7mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="-1.9mm"
            pcbY="-13.6mm"
            width="0.7mm"
            height="0.7mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="1.9mm"
            pcbY="10.2mm"
            width="0.7mm"
            height="0.7mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="1.9mm"
            pcbY="6.8mm"
            width="0.7mm"
            height="0.7mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin19"]}
            pcbX="1.9mm"
            pcbY="-3.4mm"
            width="0.7mm"
            height="0.7mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin20"]}
            pcbX="1.9mm"
            pcbY="-6.8mm"
            width="0.7mm"
            height="0.7mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin21"]}
            pcbX="1.9mm"
            pcbY="-10.2mm"
            width="0.7mm"
            height="0.7mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin22"]}
            pcbX="5.7mm"
            pcbY="13.6mm"
            width="0.7mm"
            height="0.7mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin23"]}
            pcbX="5.7mm"
            pcbY="10.2mm"
            width="0.7mm"
            height="0.7mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin24"]}
            pcbX="5.7mm"
            pcbY="6.8mm"
            width="0.7mm"
            height="0.7mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin25"]}
            pcbX="5.7mm"
            pcbY="3.4mm"
            width="0.7mm"
            height="0.7mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin26"]}
            pcbX="5.7mm"
            pcbY="0mm"
            width="0.7mm"
            height="0.7mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin27"]}
            pcbX="5.7mm"
            pcbY="-3.4mm"
            width="0.7mm"
            height="0.7mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin28"]}
            pcbX="5.7mm"
            pcbY="-6.8mm"
            width="0.7mm"
            height="0.7mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin29"]}
            pcbX="5.7mm"
            pcbY="-10.2mm"
            width="0.7mm"
            height="0.7mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin30"]}
            pcbX="5.7mm"
            pcbY="-13.6mm"
            width="0.7mm"
            height="0.7mm"
            shape="rect"
          />
        </footprint>
      }
      {...props}
    />
  );
};

export default XI6432BAFCLIMBBR;
