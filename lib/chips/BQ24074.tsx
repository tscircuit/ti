import type { ComponentProps } from "react";

import { BQ24074RGTR } from "./BQ24074RGTR";

type BQ24074FootprintVariant = "vqfn-16-ep-3x3" | (string & {});

type BQ24074Props = ComponentProps<typeof BQ24074RGTR> & {
  footprintVariant?: BQ24074FootprintVariant;
};

export const BQ24074 = ({
  footprintVariant = "vqfn-16-ep-3x3",
  ...props
}: BQ24074Props) => {
  if (footprintVariant === "vqfn-16-ep-3x3") {
    return <BQ24074RGTR {...props} />;
  }

  return <BQ24074RGTR {...props} />;
};
