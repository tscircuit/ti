import type { ComponentProps } from "react";
import { TPS3808G01QDBVRQ1 } from "./TPS3808G01QDBVRQ1.circuit.tsx";

type TPS3808FootprintVariant = "sot_23_6" | (string & {});

type TPS3808Props = ComponentProps<typeof TPS3808G01QDBVRQ1> & {
  footprintVariant?: TPS3808FootprintVariant;
};

/** TPS3808 programmable-delay supervisor. */
export const TPS3808 = ({
  footprintVariant = "sot_23_6",
  ...props
}: TPS3808Props) => {
  if (footprintVariant === "sot_23_6") {
    return <TPS3808G01QDBVRQ1 {...props} />;
  }

  return <TPS3808G01QDBVRQ1 {...props} />;
};

export default TPS3808;
