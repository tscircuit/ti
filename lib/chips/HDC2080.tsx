import type { ComponentProps } from "react";

import { HDC2080DMBR } from "./HDC2080DMBR";

type HDC2080FootprintVariant = "wson_6_ep_3x3" | (string & {});

type HDC2080Props = ComponentProps<typeof HDC2080DMBR> & {
  footprintVariant?: HDC2080FootprintVariant;
};

export const HDC2080 = ({
  footprintVariant = "wson_6_ep_3x3",
  ...props
}: HDC2080Props) => {
  if (footprintVariant === "wson_6_ep_3x3") {
    return <HDC2080DMBR {...props} />;
  }

  return <HDC2080DMBR {...props} />;
};
