import type { ComponentProps } from "react";

import { HDC3022DEJR } from "./HDC3022DEJR";

type HDC3022FootprintVariant = "wson-8-ep-2.5x2.5" | (string & {});

type HDC3022Props = ComponentProps<typeof HDC3022DEJR> & {
  footprintVariant?: HDC3022FootprintVariant;
};

export const HDC3022 = ({
  footprintVariant = "wson-8-ep-2.5x2.5",
  ...props
}: HDC3022Props) => {
  if (footprintVariant === "wson-8-ep-2.5x2.5") {
    return <HDC3022DEJR {...props} />;
  }

  return <HDC3022DEJR {...props} />;
};
