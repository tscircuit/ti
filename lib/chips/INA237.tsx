import type { ComponentProps } from "react";

import { INA237AQDGSRQ1 } from "./INA237AQDGSRQ1";

type INA237FootprintVariant = "vssop_10" | (string & {});

type INA237Props = ComponentProps<typeof INA237AQDGSRQ1> & {
  footprintVariant?: INA237FootprintVariant;
};

export const INA237 = ({
  footprintVariant = "vssop_10",
  ...props
}: INA237Props) => {
  if (footprintVariant === "vssop_10") {
    return <INA237AQDGSRQ1 {...props} />;
  }

  return <INA237AQDGSRQ1 {...props} />;
};
