import type { ComponentProps } from "react";
import { DRV8703QRHBRQ1 } from "./DRV8703QRHBRQ1.circuit.tsx";

type DRV8703FootprintVariant = "vqfn_32_rhb_5x5" | (string & {});

type DRV8703Props = ComponentProps<typeof DRV8703QRHBRQ1> & {
  footprintVariant?: DRV8703FootprintVariant;
};

export const DRV8703 = ({
  footprintVariant = "vqfn_32_rhb_5x5",
  ...props
}: DRV8703Props) => {
  if (footprintVariant === "vqfn_32_rhb_5x5") {
    return <DRV8703QRHBRQ1 {...props} />;
  }

  return <DRV8703QRHBRQ1 {...props} />;
};

export default DRV8703;
