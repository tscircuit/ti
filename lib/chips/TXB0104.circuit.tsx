import type { ComponentProps } from "react";

import { TXB0104RGYR } from "./TXB0104RGYR.circuit.tsx";

type TXB0104FootprintVariant = "vqfn_14_ep_3p5x3p5" | (string & {});

type TXB0104Props = ComponentProps<typeof TXB0104RGYR> & {
  footprintVariant?: TXB0104FootprintVariant;
};

export const TXB0104 = ({
  footprintVariant = "vqfn_14_ep_3p5x3p5",
  ...props
}: TXB0104Props) => {
  if (footprintVariant === "vqfn_14_ep_3p5x3p5") {
    return <TXB0104RGYR {...props} />;
  }

  return <TXB0104RGYR {...props} />;
};
