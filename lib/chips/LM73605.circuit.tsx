import type { ComponentProps } from "react";
import { LM73605QRNPRQ1 } from "./LM73605QRNPRQ1.circuit.tsx";

type LM73605Props = ComponentProps<typeof LM73605QRNPRQ1> & {
  footprintVariant?: "wqfn_30_rnp_4x6" | (string & {});
};

export const LM73605 = ({
  footprintVariant: _footprintVariant = "wqfn_30_rnp_4x6",
  ...props
}: LM73605Props) => <LM73605QRNPRQ1 {...props} />;

export default LM73605;
