import type { ComponentProps } from "react";
import { TPS61222DCKR } from "./TPS61222DCKR.tsx";

export type TPS61222Props = ComponentProps<typeof TPS61222DCKR> & {
  footprintVariant?: "sot_23_6";
};

/** TPS61222 low-input-voltage boost converter in the DCK package. */
export const TPS61222 = ({
  footprintVariant: _footprintVariant = "sot_23_6",
  ...props
}: TPS61222Props) => <TPS61222DCKR {...props} />;

export default TPS61222;
