import type { ComponentProps } from "react";
import { TPS3850H33QDRCRQ1 } from "./TPS3850H33QDRCRQ1.circuit.tsx";

type TPS3850Props = ComponentProps<typeof TPS3850H33QDRCRQ1> & {
  footprintVariant?: "vson_10_drc_3x3" | (string & {});
};

export const TPS3850 = ({
  footprintVariant: _footprintVariant = "vson_10_drc_3x3",
  ...props
}: TPS3850Props) => <TPS3850H33QDRCRQ1 {...props} />;

export default TPS3850;
