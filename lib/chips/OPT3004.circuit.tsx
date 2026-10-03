import type { ComponentProps } from "react";
import { OPT3004DNPR } from "./OPT3004DNPR.circuit.tsx";

type OPT3004FootprintVariant = "uson_6_ep_2x2" | (string & {});

type OPT3004Props = ComponentProps<typeof OPT3004DNPR> & {
  footprintVariant?: OPT3004FootprintVariant;
};

export const OPT3004 = ({
  footprintVariant = "uson_6_ep_2x2",
  ...props
}: OPT3004Props) => {
  if (footprintVariant === "uson_6_ep_2x2") {
    return <OPT3004DNPR {...props} />;
  }

  return <OPT3004DNPR {...props} />;
};

export default OPT3004;
