import type { ComponentProps } from "react";
import { LM536035QPWPRQ1 } from "./LM536035QPWPRQ1.circuit.tsx";

type LM53603Q1FootprintVariant = "htssop_16" | (string & {});

type LM53603Q1Props = ComponentProps<typeof LM536035QPWPRQ1> & {
  footprintVariant?: LM53603Q1FootprintVariant;
};

/** LM53603-Q1 3-A automotive buck regulator. */
export const LM53603Q1 = ({
  footprintVariant = "htssop_16",
  ...props
}: LM53603Q1Props) => {
  if (footprintVariant === "htssop_16") {
    return <LM536035QPWPRQ1 {...props} />;
  }

  return <LM536035QPWPRQ1 {...props} />;
};

export default LM53603Q1;
