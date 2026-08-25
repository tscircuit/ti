import type { ComponentProps } from "react";
import { DRV5013ADQDBZRQ1 } from "./DRV5013ADQDBZRQ1.circuit.tsx";

type DRV5013FootprintVariant = "sot_23_3_dbz" | (string & {});

type DRV5013Props = ComponentProps<typeof DRV5013ADQDBZRQ1> & {
  footprintVariant?: DRV5013FootprintVariant;
};

export const DRV5013 = ({
  footprintVariant = "sot_23_3_dbz",
  ...props
}: DRV5013Props) => {
  if (footprintVariant === "sot_23_3_dbz") {
    return <DRV5013ADQDBZRQ1 {...props} />;
  }

  return <DRV5013ADQDBZRQ1 {...props} />;
};

export default DRV5013;
