import type { ComponentProps } from "react";

import { BQ27441DRZR_G1B } from "./BQ27441DRZR_G1B";

type BQ27441G1FootprintVariant = "vson_12_ep_2p5x4" | (string & {});

type BQ27441G1Props = ComponentProps<typeof BQ27441DRZR_G1B> & {
  footprintVariant?: BQ27441G1FootprintVariant;
};

export const BQ27441G1 = ({
  footprintVariant = "vson_12_ep_2p5x4",
  ...props
}: BQ27441G1Props) => {
  if (footprintVariant === "vson_12_ep_2p5x4") {
    return <BQ27441DRZR_G1B {...props} />;
  }

  return <BQ27441DRZR_G1B {...props} />;
};
