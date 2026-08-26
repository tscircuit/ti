import type { ChipProps } from "@tscircuit/props";
import { Fragment } from "react";
import "tscircuit";
import { GroupedPowerMosfetSymbol } from "./GroupedPowerMosfetSymbol.tsx";

export const SQ4850EY_PIN_LABELS = {
  pin1: ["S", "source"],
  pin2: ["S"],
  pin3: ["S"],
  pin4: ["G", "gate"],
  pin5: ["D", "drain"],
  pin6: ["D"],
  pin7: ["D"],
  pin8: ["D"],
} as const;

const sq4850EyFootprint = (
  <footprint>
    {[5, 6, 7, 8].map((pin, index) => (
      <Fragment key={`sq-drain-${pin}`}>
        <smtpad
          portHints={[`pin${pin}`]}
          pcbX={2.4}
          pcbY={-1.905 + index * 1.27}
          width={0.5999988}
          height={2.20000068}
          radius={0.2999994}
          shape="rotated_pill"
          ccwRotation={90}
        />
      </Fragment>
    ))}
    {[4, 3, 2, 1].map((pin, index) => (
      <Fragment key={`sq-source-${pin}`}>
        <smtpad
          portHints={[`pin${pin}`]}
          pcbX={-2.4}
          pcbY={-1.905 + index * 1.27}
          width={0.5999988}
          height={2.20000068}
          radius={0.2999994}
          shape="rotated_pill"
          ccwRotation={90}
        />
      </Fragment>
    ))}
  </footprint>
);

/** SQ4850EY 60-V automotive N-channel MOSFET in the PowerPAK SO-8 package. */
export const SQ4850EY = (props: ChipProps<typeof SQ4850EY_PIN_LABELS>) => (
  <chip
    pinLabels={SQ4850EY_PIN_LABELS}
    showPinAliases={false}
    internallyConnectedPins={[
      ["pin1", "pin2", "pin3"],
      ["pin5", "pin6", "pin7", "pin8"],
    ]}
    footprint={sq4850EyFootprint}
    symbol={
      <GroupedPowerMosfetSymbol
        orientation="horizontal"
        sourcePins={[1, 2, 3]}
        drainPins={[5, 6, 7, 8]}
      />
    }
    manufacturerPartNumber="SQ4850EY"
    datasheetUrl="https://www.vishay.com/docs/62970/sq4850ey.pdf"
    {...props}
  />
);

export default SQ4850EY;
