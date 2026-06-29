import type { ComponentProps } from "react";

import { TPS7A0230PDBVR } from "./TPS7A0230PDBVR";

type TPS7A02FootprintVariant = "sot_23_5" | (string & {});

type TPS7A02Props = ComponentProps<typeof TPS7A0230PDBVR> & {
  footprintVariant?: TPS7A02FootprintVariant;
};

export const TPS7A02 = ({
  footprintVariant = "sot_23_5",
  ...props
}: TPS7A02Props) => {
  if (footprintVariant === "sot_23_5") {
    return <TPS7A0230PDBVR {...props} />;
  }

  return <TPS7A0230PDBVR {...props} />;
};
