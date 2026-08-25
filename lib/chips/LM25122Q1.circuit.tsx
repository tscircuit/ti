import type { ComponentProps } from "react";
import { LM25122QPWPTQ1 } from "./LM25122QPWPTQ1.circuit.tsx";

type LM25122Q1FootprintVariant = "htssop_20" | (string & {});

type LM25122Q1Props = ComponentProps<typeof LM25122QPWPTQ1> & {
  footprintVariant?: LM25122Q1FootprintVariant;
};

/** LM25122-Q1 synchronous boost controller. */
export const LM25122Q1 = ({
  footprintVariant = "htssop_20",
  ...props
}: LM25122Q1Props) => {
  if (footprintVariant === "htssop_20") {
    return <LM25122QPWPTQ1 {...props} />;
  }

  return <LM25122QPWPTQ1 {...props} />;
};

export default LM25122Q1;
