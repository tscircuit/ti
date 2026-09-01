import type { ComponentProps } from "react";

import { MSPM0G5187SPMR } from "./MSPM0G5187SPMR.circuit.tsx";

type MSPM0G5187FootprintVariant = "lqfp_64" | (string & {});

type MSPM0G5187Props = ComponentProps<typeof MSPM0G5187SPMR> & {
  footprintVariant?: MSPM0G5187FootprintVariant;
};

export const MSPM0G5187 = ({
  footprintVariant = "lqfp_64",
  ...props
}: MSPM0G5187Props) => {
  if (footprintVariant === "lqfp_64") {
    return <MSPM0G5187SPMR {...props} />;
  }

  return <MSPM0G5187SPMR {...props} />;
};
