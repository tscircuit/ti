import type { ComponentProps } from "react";
import { TMP116NAIDRVR } from "./TMP116NAIDRVR.circuit.tsx";

type TMP116FootprintVariant = "wson_6_ep_2x2" | (string & {});

type TMP116Props = ComponentProps<typeof TMP116NAIDRVR> & {
  footprintVariant?: TMP116FootprintVariant;
};

export const TMP116 = ({
  footprintVariant = "wson_6_ep_2x2",
  ...props
}: TMP116Props) => {
  if (footprintVariant === "wson_6_ep_2x2") {
    return <TMP116NAIDRVR {...props} />;
  }

  return <TMP116NAIDRVR {...props} />;
};

export default TMP116;
