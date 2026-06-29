import type { ComponentProps } from "react";

import { HDC3020DEFR } from "./HDC3020DEFR";

type HDC3020FootprintVariant = "wson_8_ep_2p5x2p5" | (string & {});

type HDC3020Props = ComponentProps<typeof HDC3020DEFR> & {
  footprintVariant?: HDC3020FootprintVariant;
};

export const HDC3020 = ({
  footprintVariant = "wson_8_ep_2p5x2p5",
  ...props
}: HDC3020Props) => {
  if (footprintVariant === "wson_8_ep_2p5x2p5") {
    return <HDC3020DEFR {...props} />;
  }

  return <HDC3020DEFR {...props} />;
};
