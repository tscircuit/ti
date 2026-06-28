import type { ComponentProps } from "react";

import { HDC3020DEFR } from "./HDC3020DEFR";

type HDC3020FootprintVariant = "wson-8-ep-2.5x2.5" | (string & {});

type HDC3020Props = ComponentProps<typeof HDC3020DEFR> & {
  footprintVariant?: HDC3020FootprintVariant;
};

export const HDC3020 = ({
  footprintVariant = "wson-8-ep-2.5x2.5",
  ...props
}: HDC3020Props) => {
  if (footprintVariant === "wson-8-ep-2.5x2.5") {
    return <HDC3020DEFR {...props} />;
  }

  return <HDC3020DEFR {...props} />;
};
