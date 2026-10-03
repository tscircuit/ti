import type { ComponentProps } from "react";
import { TLV1805QDBVRQ1 } from "./TLV1805QDBVRQ1.circuit.tsx";

type TLV1805Props = ComponentProps<typeof TLV1805QDBVRQ1> & {
  footprintVariant?: "sot_23_6" | (string & {});
};

export const TLV1805 = ({
  footprintVariant: _footprintVariant = "sot_23_6",
  ...props
}: TLV1805Props) => <TLV1805QDBVRQ1 {...props} />;

export default TLV1805;
