import type { ComponentProps } from "react";

import { AM62L32BOGHAANBR } from "./AM62L32BOGHAANBR.circuit.tsx";

type AM62LFootprintVariant = "fccsp_bga_373_11p9x11p9_0p5" | (string & {});

type AM62LProps = ComponentProps<typeof AM62L32BOGHAANBR> & {
  footprintVariant?: AM62LFootprintVariant;
};

export const AM62L = ({
  footprintVariant = "fccsp_bga_373_11p9x11p9_0p5",
  ...props
}: AM62LProps) => {
  if (footprintVariant === "fccsp_bga_373_11p9x11p9_0p5") {
    return <AM62L32BOGHAANBR {...props} />;
  }

  return <AM62L32BOGHAANBR {...props} />;
};
