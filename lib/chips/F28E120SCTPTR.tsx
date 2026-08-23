import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["GPIO29"],
  pin2: ["pin2"],
  pin3: ["XRSn"],
  pin4: ["pin4"],
  pin5: ["pin5"],
  pin6: ["pin6"],
  pin7: ["pin7"],
  pin8: ["pin8"],
  pin9: ["A5"],
  pin10: ["A1"],
  pin11: ["pin11"],
  pin12: ["VREFHI"],
  pin13: ["VREFLO"],
  pin14: ["A12"],
  pin15: ["A7"],
  pin16: ["pin16"],
  pin17: ["VSSA"],
  pin18: ["VDDA"],
  pin19: ["pin19"],
  pin20: ["pin20"],
  pin21: ["pin21"],
  pin22: ["VSS1"],
  pin23: ["pin23"],
  pin24: ["pin24"],
  pin25: ["GPIO33"],
  pin26: ["GPIO16"],
  pin27: ["GPIO24"],
  pin28: ["TCK"],
  pin29: ["pin29"],
  pin30: ["TMS"],
  pin31: ["pin31"],
  pin32: ["GPIO32"],
  pin33: ["pin33"],
  pin34: ["pin34"],
  pin35: ["VDDIO1"],
  pin36: ["GPIO43"],
  pin37: ["VSS2"],
  pin38: ["GPIO4"],
  pin39: ["GPIO3"],
  pin40: ["GPIO2"],
  pin41: ["GPIO1"],
  pin42: ["GPIO0"],
  pin43: ["GPIO7"],
  pin44: ["VSS3"],
  pin45: ["GPIO45"],
  pin46: ["VDDIO2"],
  pin47: ["GPIO5"],
  pin48: ["GPIO6"],
} as const;

const pinAttributes = {
  pin18: { requiresPower: true },
  pin22: { requiresGround: true },
  pin37: { requiresGround: true },
  pin44: { requiresGround: true },
} as const;

export const F28E120SCTPTR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C52263017"],
      }}
      manufacturerPartNumber="F28E120SCTPTR"
      footprint="qfn48_pillpads_p0.4999mm_h10.3mm_pw0.28mm_pl1.5mm_pin1location(bottomside,left)"
      {...props}
    />
  );
};

export default F28E120SCTPTR;
