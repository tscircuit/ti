import type { ComponentProps } from "react";

import { TPS61299DRLR } from "./TPS61299DRLR.circuit.tsx";

type TPS61299XFootprintVariant = "sot_563_6" | (string & {});

type TPS61299XProps = ComponentProps<typeof TPS61299DRLR> & {
  footprintVariant?: TPS61299XFootprintVariant;
};

export const TPS61299X = ({
  footprintVariant = "sot_563_6",
  ...props
}: TPS61299XProps) => {
  if (footprintVariant === "sot_563_6") {
    return <TPS61299DRLR {...props} />;
  }

  return <TPS61299DRLR {...props} />;
};
