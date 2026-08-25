import type { ComponentProps } from "react";
import { MSP430FR6007IPZ } from "./MSP430FR6007IPZ.circuit.tsx";

type MSP430FR6007FootprintVariant = "lqfp_100" | (string & {});

type MSP430FR6007Props = ComponentProps<typeof MSP430FR6007IPZ> & {
  footprintVariant?: MSP430FR6007FootprintVariant;
};

/** MSP430FR6007 package selector; TI currently offers only the 100-pin PZ. */
export const MSP430FR6007 = ({
  footprintVariant = "lqfp_100",
  ...props
}: MSP430FR6007Props) => {
  if (footprintVariant === "lqfp_100") {
    return <MSP430FR6007IPZ {...props} />;
  }

  return <MSP430FR6007IPZ {...props} />;
};

export default MSP430FR6007;
