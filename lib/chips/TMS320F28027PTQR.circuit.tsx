import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["SCITXDA", "1"],
  pin2: ["TRST", "2"],
  pin3: ["XRS", "3"],
  pin4: ["ADCINA6", "4"],
  pin5: ["COMP2A", "5"],
  pin6: ["ADCINA7", "6"],
  pin7: ["ADCINA3", "7"],
  pin8: ["ADCINA1", "8"],
  pin9: ["COMP1A", "9"],
  pin10: ["VREFHI", "10"],
  pin11: ["VDDA", "11"],
  pin12: ["VSSA", "12"],
  pin13: ["ADCINB1", "13"],
  pin14: ["COMP1B", "14"],
  pin15: ["ADCINB3", "15"],
  pin16: ["COMP2B", "16"],
  pin17: ["ADCINB6", "17"],
  pin18: ["ADCINB7", "18"],
  pin19: ["GPIO34", "19"],
  pin20: ["TDI", "20"],
  pin21: ["TMS", "21"],
  pin22: ["TDO", "22"],
  pin23: ["XCLKIN", "23"],
  pin24: ["XCLKOUT", "24"],
  pin25: ["GPIO19", "25"],
  pin26: ["SPISOMIA", "26"],
  pin27: ["SPISIMOA", "27"],
  pin28: ["EPWM1B", "28"],
  pin29: ["EPWM1A", "29"],
  pin30: ["TEST", "30"],
  pin31: ["SDAA", "31"],
  pin32: ["VDD", "32", "VDD_32"],
  pin33: ["VSS", "33", "VSS_33"],
  pin34: ["VREGENZ", "34"],
  pin35: ["VDDIO", "35"],
  pin36: ["SCLA", "36"],
  pin37: ["EPWM2A", "37"],
  pin38: ["EPWM2B", "38"],
  pin39: ["EPWM3A", "39"],
  pin40: ["EPWM3B", "40"],
  pin41: ["EPWM4A", "41"],
  pin42: ["EPWM4B", "42"],
  pin43: ["VDD", "43", "VDD_43"],
  pin44: ["VSS", "44", "VSS_44"],
  pin45: ["X1", "45"],
  pin46: ["X2", "46"],
  pin47: ["TZ1", "47"],
  pin48: ["SCIRXDA", "48"],
} as const;

const pinRoles = {
  pin1: "unknown",
  pin2: "unknown",
  pin3: "unknown",
  pin4: "unknown",
  pin5: "unknown",
  pin6: "unknown",
  pin7: "unknown",
  pin8: "unknown",
  pin9: "unknown",
  pin10: "power",
  pin11: "power",
  pin12: "ground",
  pin13: "unknown",
  pin14: "unknown",
  pin15: "unknown",
  pin16: "unknown",
  pin17: "unknown",
  pin18: "unknown",
  pin19: "bidirectional",
  pin20: "unknown",
  pin21: "unknown",
  pin22: "unknown",
  pin23: "unknown",
  pin24: "unknown",
  pin25: "bidirectional",
  pin26: "unknown",
  pin27: "unknown",
  pin28: "unknown",
  pin29: "unknown",
  pin30: "no-connect",
  pin31: "bidirectional",
  pin32: "power",
  pin33: "ground",
  pin34: "power",
  pin35: "power",
  pin36: "control",
  pin37: "unknown",
  pin38: "unknown",
  pin39: "unknown",
  pin40: "unknown",
  pin41: "unknown",
  pin42: "unknown",
  pin43: "power",
  pin44: "ground",
  pin45: "unknown",
  pin46: "unknown",
  pin47: "unknown",
  pin48: "unknown",
} as const;

const pinAttributes = {
  pin10: { requiresPower: true },
  pin11: { requiresPower: true },
  pin12: { requiresGround: true },
  pin30: { doNotConnect: true },
  pin32: { requiresPower: true },
  pin33: { requiresGround: true },
  pin34: { requiresPower: true },
  pin35: { requiresPower: true },
  pin43: { requiresPower: true },
  pin44: { requiresGround: true },
} as const;

export const TMS320F28027PTQR = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing PT0048A; donor F2800132PTR (JLCPCB C20345402)
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="TMS320F28027PTQR"
      footprint="qfn48_pillpads_p0.4999mm_h10.1001mm_pw0.28mm_pl1.8mm"
      {...props}
    />
  );
};

export default TMS320F28027PTQR;
