import type { ChipProps } from "@tscircuit/props";
import "tscircuit";
import { tida01421Delta } from "../tida01421-coordinates.ts";

const pinLabels = {
  pin1: "IN_MINUS",
  pin2: "GND",
  pin3: "REF2",
  pin4: "NC",
  pin5: "OUT",
  pin6: "VS",
  pin7: "REF1",
  pin8: "IN_PLUS",
} as const;

/**
 * INA240A1-Q1 SOIC-8 used by TIDA-01421.
 *
 * Pin numbers are verified against the INA240-Q1 D-package table. The symbol
 * geometry follows the U2 unit in TIDA-01421 Schematic.SchDoc around its
 * Altium component location (520, 900).
 */
export const INA240A1QDRQ1 = (props: ChipProps<typeof pinLabels>) => (
  <chip
    manufacturerPartNumber="INA240A1QDRQ1"
    datasheetUrl="https://www.ti.com/lit/ds/symlink/ina240-q1.pdf"
    footprint="kicad:Package_SO/SOIC-8_3.9x4.9mm_P1.27mm"
    pinLabels={pinLabels}
    symbol={
      <symbol>
        <schematicrect
          schX={0}
          schY={0}
          width={tida01421Delta(100)}
          height={tida01421Delta(80)}
          strokeWidth={0.025}
        />
        <port
          name="VS"
          aliases={["pin6"]}
          pinNumber={6}
          schX={tida01421Delta(-70)}
          schY={tida01421Delta(20)}
          direction="left"
          schStemLength={tida01421Delta(20)}
        />
        <port
          name="IN_PLUS"
          aliases={["IN+", "pin8"]}
          pinNumber={8}
          schX={tida01421Delta(-70)}
          schY={0}
          direction="left"
          schStemLength={tida01421Delta(20)}
        />
        <port
          name="IN_MINUS"
          aliases={["IN-", "pin1"]}
          pinNumber={1}
          schX={tida01421Delta(-70)}
          schY={tida01421Delta(-10)}
          direction="left"
          schStemLength={tida01421Delta(20)}
        />
        <port
          name="NC"
          aliases={["pin4"]}
          pinNumber={4}
          schX={tida01421Delta(-70)}
          schY={tida01421Delta(-30)}
          direction="left"
          schStemLength={tida01421Delta(20)}
        />
        <port
          name="OUT"
          aliases={["pin5"]}
          pinNumber={5}
          schX={tida01421Delta(70)}
          schY={tida01421Delta(20)}
          direction="right"
          schStemLength={tida01421Delta(20)}
        />
        <port
          name="REF1"
          aliases={["pin7"]}
          pinNumber={7}
          schX={tida01421Delta(70)}
          schY={0}
          direction="right"
          schStemLength={tida01421Delta(20)}
        />
        <port
          name="REF2"
          aliases={["pin3"]}
          pinNumber={3}
          schX={tida01421Delta(70)}
          schY={tida01421Delta(-10)}
          direction="right"
          schStemLength={tida01421Delta(20)}
        />
        <port
          name="GND"
          aliases={["pin2"]}
          pinNumber={2}
          schX={tida01421Delta(70)}
          schY={tida01421Delta(-30)}
          direction="right"
          schStemLength={tida01421Delta(20)}
        />
      </symbol>
    }
    {...props}
  />
);

export default INA240A1QDRQ1;
