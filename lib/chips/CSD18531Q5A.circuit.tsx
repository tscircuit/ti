import type { ChipProps } from "@tscircuit/props";
import { Fragment } from "react";
import "tscircuit";
import { GroupedPowerMosfetSymbol } from "./GroupedPowerMosfetSymbol.tsx";

export const CSD18531Q5A_PIN_LABELS = {
  pin1: ["S", "source"],
  pin2: ["S"],
  pin3: ["S"],
  pin4: ["G", "gate"],
  pin5: ["D", "drain"],
  pin6: ["D"],
  pin7: ["D"],
  pin8: ["D"],
  pin9: ["D", "thermalpad"],
} as const;

const csd18531Q5aFootprint = (
  <footprint>
    <smtpad
      portHints={["pin9"]}
      pcbX={0.30130242}
      pcbY={0}
      width={4.51000114}
      height={4.2950003}
      shape="rect"
    />
    {[1, 2, 3, 4].map((pin, index) => (
      <Fragment key={`csd-source-${pin}`}>
        <smtpad
          portHints={[`pin${pin}`]}
          pcbX={-2.77629874}
          pcbY={1.91749426 - index * 1.2783312}
          width={0.67499992}
          height={0.75000104}
          shape="rect"
        />
      </Fragment>
    ))}
    {[5, 6, 7, 8].map((pin, index) => (
      <Fragment key={`csd-drain-${pin}`}>
        <smtpad
          portHints={[`pin${pin}`]}
          pcbX={2.77630128}
          pcbY={-1.91749426 + index * 1.2783312}
          width={0.67499992}
          height={0.65499996}
          shape="rect"
        />
      </Fragment>
    ))}
  </footprint>
);

/** CSD18531Q5A 60-V N-channel NexFET in the SON 5-mm x 6-mm package. */
export const CSD18531Q5A = ({
  symbolOrientation = "horizontal",
  ...props
}: ChipProps<typeof CSD18531Q5A_PIN_LABELS> & {
  symbolOrientation?: "horizontal" | "vertical";
}) => (
  <chip
    pinLabels={CSD18531Q5A_PIN_LABELS}
    showPinAliases={false}
    internallyConnectedPins={[
      ["pin1", "pin2", "pin3"],
      ["pin5", "pin6", "pin7", "pin8", "pin9"],
    ]}
    footprint={csd18531Q5aFootprint}
    symbol={
      <GroupedPowerMosfetSymbol
        orientation={symbolOrientation}
        sourcePins={[1, 2, 3]}
        drainPins={[5, 6, 7, 8, 9]}
      />
    }
    manufacturerPartNumber="CSD18531Q5A"
    supplierPartNumbers={{
      digikey: ["296-30573-1-ND"],
      mouser: ["595-CSD18531Q5A"],
    }}
    datasheetUrl="https://www.ti.com/lit/ds/symlink/csd18531q5a.pdf"
    {...props}
  />
);

export default CSD18531Q5A;
