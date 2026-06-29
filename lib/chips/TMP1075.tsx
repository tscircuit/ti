import type { ComponentProps } from "react";

import { TMP1075DSGR } from "./TMP1075DSGR";

type TMP1075FootprintVariant = "wson_8_ep_2x2" | (string & {});

type TMP1075Props = ComponentProps<typeof TMP1075DSGR> & {
  footprintVariant?: TMP1075FootprintVariant;
};

export const TMP1075 = ({
  footprintVariant = "wson_8_ep_2x2",
  ...props
}: TMP1075Props) => {
  if (footprintVariant === "wson_8_ep_2x2") {
    return <TMP1075DSGR {...props} />;
  }

  return <TMP1075DSGR {...props} />;
};
