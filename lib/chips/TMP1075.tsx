import type { ComponentProps } from "react";

import { TMP1075DSGR } from "./TMP1075DSGR";

type TMP1075FootprintVariant = "wson-8-ep-2x2" | (string & {});

type TMP1075Props = ComponentProps<typeof TMP1075DSGR> & {
  footprintVariant?: TMP1075FootprintVariant;
};

export const TMP1075 = ({
  footprintVariant = "wson-8-ep-2x2",
  ...props
}: TMP1075Props) => {
  if (footprintVariant === "wson-8-ep-2x2") {
    return <TMP1075DSGR {...props} />;
  }

  return <TMP1075DSGR {...props} />;
};
