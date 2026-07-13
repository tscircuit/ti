import type { ComponentProps } from "react";

import { TXS0102DCUR } from "./TXS0102DCUR.circuit.tsx";

type TXS0102FootprintVariant = "vssop_8" | (string & {});

type TXS0102Props = ComponentProps<typeof TXS0102DCUR> & {
  footprintVariant?: TXS0102FootprintVariant;
};

export const TXS0102 = ({
  footprintVariant = "vssop_8",
  ...props
}: TXS0102Props) => {
  if (footprintVariant === "vssop_8") {
    return <TXS0102DCUR {...props} />;
  }

  return <TXS0102DCUR {...props} />;
};
