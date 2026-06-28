import type { ComponentProps } from "react";

import { MSPM0G3507SPMR } from "./MSPM0G3507SPMR";

type MSPM0G3507FootprintVariant = "lqfp-64" | (string & {});

type MSPM0G3507Props = ComponentProps<typeof MSPM0G3507SPMR> & {
  footprintVariant?: MSPM0G3507FootprintVariant;
};

export const MSPM0G3507 = ({
  footprintVariant = "lqfp-64",
  ...props
}: MSPM0G3507Props) => {
  if (footprintVariant === "lqfp-64") {
    return <MSPM0G3507SPMR {...props} />;
  }

  return <MSPM0G3507SPMR {...props} />;
};
