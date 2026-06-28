import type { ComponentProps } from "react";

import { TPS63802DLAR } from "./TPS63802DLAR";

type TPS63802FootprintVariant = "vson-hr-10" | (string & {});

type TPS63802Props = ComponentProps<typeof TPS63802DLAR> & {
  footprintVariant?: TPS63802FootprintVariant;
};

export const TPS63802 = ({
  footprintVariant = "vson-hr-10",
  ...props
}: TPS63802Props) => {
  if (footprintVariant === "vson-hr-10") {
    return <TPS63802DLAR {...props} />;
  }

  return <TPS63802DLAR {...props} />;
};
