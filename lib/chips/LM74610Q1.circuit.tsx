import type { ComponentProps } from "react";
import { LM74610QDGKRQ1 } from "./LM74610QDGKRQ1.circuit.tsx";

type LM74610Q1FootprintVariant = "vssop_8" | (string & {});

type LM74610Q1Props = ComponentProps<typeof LM74610QDGKRQ1> & {
  footprintVariant?: LM74610Q1FootprintVariant;
};

/** LM74610-Q1 smart-diode controller. */
export const LM74610Q1 = ({
  footprintVariant = "vssop_8",
  ...props
}: LM74610Q1Props) => {
  if (footprintVariant === "vssop_8") {
    return <LM74610QDGKRQ1 {...props} />;
  }

  return <LM74610QDGKRQ1 {...props} />;
};

export default LM74610Q1;
