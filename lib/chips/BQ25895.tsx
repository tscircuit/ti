import type { ComponentProps } from "react";

import { BQ25895RTWR } from "./BQ25895RTWR";

type BQ25895FootprintVariant = "wqfn_24_ep_4x4" | (string & {});

type BQ25895Props = ComponentProps<typeof BQ25895RTWR> & {
  footprintVariant?: BQ25895FootprintVariant;
};

export const BQ25895 = ({
  footprintVariant = "wqfn_24_ep_4x4",
  ...props
}: BQ25895Props) => {
  if (footprintVariant === "wqfn_24_ep_4x4") {
    return <BQ25895RTWR {...props} />;
  }

  return <BQ25895RTWR {...props} />;
};
