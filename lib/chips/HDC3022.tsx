import type { ComponentProps } from "react";

import { HDC3022DEJR } from "./HDC3022DEJR";

type HDC3022FootprintVariant = "wson_8_ep_2p5x2p5" | (string & {});

type HDC3022Props = ComponentProps<typeof HDC3022DEJR> & {
  footprintVariant?: HDC3022FootprintVariant;
};

export const HDC3022 = ({
  footprintVariant = "wson_8_ep_2p5x2p5",
  ...props
}: HDC3022Props) => {
  if (footprintVariant === "wson_8_ep_2p5x2p5") {
    return <HDC3022DEJR {...props} />;
  }

  return <HDC3022DEJR {...props} />;
};
