import type { ComponentProps } from "react";
import { INA350ABSIDSGR } from "./INA350ABSIDSGR.circuit.tsx";

type INA350Props = ComponentProps<typeof INA350ABSIDSGR> & {
  footprintVariant?: "wson_8_ep_2x2";
};

export const INA350 = ({
  footprintVariant = "wson_8_ep_2x2",
  ...props
}: INA350Props) => {
  if (footprintVariant !== "wson_8_ep_2x2") {
    throw new Error(
      `Unsupported INA350 footprint variant: ${footprintVariant}`,
    );
  }
  return <INA350ABSIDSGR {...props} />;
};

export default INA350;
