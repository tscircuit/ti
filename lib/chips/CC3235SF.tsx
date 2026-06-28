import type { ComponentProps } from "react";

import { CC3235SF12RGKR } from "./CC3235SF12RGKR";

type CC3235SFFootprintVariant = "vqfn-64-ep" | (string & {});

type CC3235SFProps = ComponentProps<typeof CC3235SF12RGKR> & {
  footprintVariant?: CC3235SFFootprintVariant;
};

export const CC3235SF = ({
  footprintVariant = "vqfn-64-ep",
  ...props
}: CC3235SFProps) => {
  if (footprintVariant === "vqfn-64-ep") {
    return <CC3235SF12RGKR {...props} />;
  }

  return <CC3235SF12RGKR {...props} />;
};
