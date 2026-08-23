import type { ComponentProps } from "react";
import { TLC59116IPWR } from "./TLC59116IPWR.tsx";

export type TLC59116Props = ComponentProps<typeof TLC59116IPWR> & {
  footprintVariant?: "tssop_28";
};

/** TLC59116 16-channel constant-current LED driver in the PW package. */
export const TLC59116 = ({
  footprintVariant: _footprintVariant = "tssop_28",
  ...props
}: TLC59116Props) => <TLC59116IPWR {...props} />;

export default TLC59116;
