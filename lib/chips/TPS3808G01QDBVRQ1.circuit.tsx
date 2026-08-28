import type { ChipProps } from "@tscircuit/props";
import "tscircuit";

const pinLabels = {
  pin1: "RESET",
  pin2: "GND",
  pin3: "MR",
  pin4: "CT",
  pin5: "SENSE",
  pin6: "VDD",
} as const;

/** TPS3808G01-Q1 programmable-delay supervisor in the DBV SOT-23-6 package. */
export const TPS3808G01QDBVRQ1 = (props: ChipProps<typeof pinLabels>) => (
  <chip
    manufacturerPartNumber="TPS3808G01QDBVRQ1"
    datasheetUrl="https://www.ti.com/lit/ds/symlink/tps3808g01-q1.pdf"
    footprint={
      <footprint>
        <smtpad
          portHints={["pin1"]}
          pcbX="1.375mm"
          pcbY="0.95mm"
          width="0.6mm"
          height="1mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin2"]}
          pcbX="1.375mm"
          pcbY="0mm"
          width="0.6mm"
          height="1mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin3"]}
          pcbX="1.375mm"
          pcbY="-0.95mm"
          width="0.6mm"
          height="1mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin4"]}
          pcbX="-1.375mm"
          pcbY="-0.95mm"
          width="0.6mm"
          height="1mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin5"]}
          pcbX="-1.375mm"
          pcbY="0mm"
          width="0.6mm"
          height="1mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin6"]}
          pcbX="-1.375mm"
          pcbY="0.95mm"
          width="0.6mm"
          height="1mm"
          shape="rect"
        />
      </footprint>
    }
    schWidth="3.2mm"
    schHeight="2.8mm"
    pinLabels={pinLabels}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: [6, 4, 3],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: [1, 5, 2],
      },
    }}
    {...props}
  />
);

export default TPS3808G01QDBVRQ1;
