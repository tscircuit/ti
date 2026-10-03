import type { ComponentProps } from "react";

import { MSPM0G5117SPMR } from "./MSPM0G5117SPMR.circuit.tsx";

type MSPM0G5117FootprintVariant = "lqfp_64" | (string & {});

type MSPM0G5117Props = ComponentProps<typeof MSPM0G5117SPMR> & {
  footprintVariant?: MSPM0G5117FootprintVariant;
};

export const MSPM0G5117 = ({
  footprintVariant = "lqfp_64",
  ...props
}: MSPM0G5117Props) => {
  if (footprintVariant === "lqfp_64") {
    return <MSPM0G5117SPMR {...props} />;
  }

  return <MSPM0G5117SPMR {...props} />;
};
