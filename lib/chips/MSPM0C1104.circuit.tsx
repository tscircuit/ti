import type { ChipProps } from "@tscircuit/props";
import { MSPM0C1104SDGS20R } from "../../imports/MSPM0C1104SDGS20R.tsx";
import { MSPM0C1104SDSGR } from "../../imports/MSPM0C1104SDSGR.tsx";

type MSPM0C1104FootprintVariant = "vssop_20_dgs" | "wson_8_dsg";

type MSPM0C1104Props = ChipProps<any> & {
  footprintVariant?: MSPM0C1104FootprintVariant;
};

/** MSPM0C1104 package selector. Defaults to TI's 20-pin DGS VSSOP package. */
export const MSPM0C1104 = ({
  footprintVariant = "vssop_20_dgs",
  ...props
}: MSPM0C1104Props) => {
  if (footprintVariant === "wson_8_dsg") {
    return <MSPM0C1104SDSGR {...props} />;
  }

  return <MSPM0C1104SDGS20R {...props} />;
};

export default MSPM0C1104;
