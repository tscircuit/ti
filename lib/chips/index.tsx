import type { ReactElement } from "react";

import { BQ24074RGTR } from "./BQ24074RGTR";
import { BQ25895RTWR } from "./BQ25895RTWR";
import { BQ27441DRZR_G1B } from "./BQ27441DRZR_G1B";
import { CC2340R5 } from "./CC2340R5";
import { CC3235SF12RGKR } from "./CC3235SF12RGKR";
import { DRV8833 } from "./DRV8833";
import { DRV8876 } from "./DRV8876";
import { HDC2080DMBR } from "./HDC2080DMBR";
import { HDC3020DEFR } from "./HDC3020DEFR";
import { HDC3022DEJR } from "./HDC3022DEJR";
import { INA237AQDGSRQ1 } from "./INA237AQDGSRQ1";
import { MSPM0G3507SPMR } from "./MSPM0G3507SPMR";
import { TMP1075DSGR } from "./TMP1075DSGR";
import { TPS22919 } from "./TPS22919";
import { TPS6293 } from "./TPS6293";
import { TPS63802DLAR } from "./TPS63802DLAR";
import { TPS7A0230PDBVR } from "./TPS7A0230PDBVR";
import { TPSM82823 } from "./TPSM82823";

type ChipWithFootprintVariantProps<TProps, TVariant extends string> = Omit<
  TProps,
  "footprintVariant"
> & {
  footprintVariant?: TVariant;
};

function createChipWithFootprintVariant<
  TProps extends object,
  TVariant extends string,
>(
  componentName: string,
  defaultVariant: TVariant,
  variants: Record<TVariant, (props: TProps) => ReactElement>,
) {
  const ChipWithFootprintVariant = ({
    footprintVariant = defaultVariant,
    ...props
  }: ChipWithFootprintVariantProps<TProps, TVariant>) => {
    const Chip = variants[footprintVariant] ?? variants[defaultVariant];

    return Chip(props as TProps);
  };

  ChipWithFootprintVariant.displayName = componentName;

  return ChipWithFootprintVariant;
}

export const BQ24074 = createChipWithFootprintVariant("BQ24074", "rgtr", {
  rgtr: BQ24074RGTR,
});

export const BQ25895 = createChipWithFootprintVariant("BQ25895", "rtwr", {
  rtwr: BQ25895RTWR,
});

export const BQ27441G1 = createChipWithFootprintVariant(
  "BQ27441G1",
  "drzr_g1b",
  {
    drzr_g1b: BQ27441DRZR_G1B,
  },
);

export const CC3235SF = createChipWithFootprintVariant("CC3235SF", "12rgkr", {
  "12rgkr": CC3235SF12RGKR,
});

export const HDC2080 = createChipWithFootprintVariant("HDC2080", "dmbr", {
  dmbr: HDC2080DMBR,
});

export const HDC3020 = createChipWithFootprintVariant("HDC3020", "defr", {
  defr: HDC3020DEFR,
});

export const HDC3022 = createChipWithFootprintVariant("HDC3022", "dejr", {
  dejr: HDC3022DEJR,
});

export const INA237 = createChipWithFootprintVariant("INA237", "aqdgsrq1", {
  aqdgsrq1: INA237AQDGSRQ1,
});

export const MSPM0G3507 = createChipWithFootprintVariant("MSPM0G3507", "spmr", {
  spmr: MSPM0G3507SPMR,
});

export const TMP1075 = createChipWithFootprintVariant("TMP1075", "dsgr", {
  dsgr: TMP1075DSGR,
});

export const TPS63802 = createChipWithFootprintVariant("TPS63802", "dlar", {
  dlar: TPS63802DLAR,
});

export const TPS7A02 = createChipWithFootprintVariant("TPS7A02", "30pdbvr", {
  "30pdbvr": TPS7A0230PDBVR,
});

export {
  BQ24074RGTR,
  BQ25895RTWR,
  BQ27441DRZR_G1B,
  CC2340R5,
  CC3235SF12RGKR,
  DRV8833,
  DRV8876,
  HDC2080DMBR,
  HDC3020DEFR,
  HDC3022DEJR,
  INA237AQDGSRQ1,
  MSPM0G3507SPMR,
  TMP1075DSGR,
  TPS22919,
  TPS6293,
  TPS63802DLAR,
  TPS7A0230PDBVR,
  TPSM82823,
};
