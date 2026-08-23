import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["AGND", "1", "AGND_1"],
  pin2: ["RCLK_R", "F", "2"],
  pin3: ["REFCLK", "3"],
  pin4: ["AVCC", "4", "AVCC_4"],
  pin5: ["RI", "5", "RI_5"],
  pin6: ["RI", "6", "RI_6"],
  pin7: ["PWRDN", "7"],
  pin8: ["REN", "8"],
  pin9: ["RCLK", "9"],
  pin10: ["LOCK", "10"],
  pin11: ["AVCC", "11", "AVCC_11"],
  pin12: ["AGND", "12", "AGND_12"],
  pin13: ["AGND", "13", "AGND_13"],
  pin14: ["DGND", "14", "DGND_14"],
  pin15: ["ROUT9", "15"],
  pin16: ["ROUT8", "16"],
  pin17: ["ROUT7", "17"],
  pin18: ["ROUT6", "18"],
  pin19: ["ROUT5", "19"],
  pin20: ["DGND", "20", "DGND_20"],
  pin21: ["DVCC", "21", "DVCC_21"],
  pin22: ["DGND", "22", "DGND_22"],
  pin23: ["DVCC", "23", "DVCC_23"],
  pin24: ["ROUT4", "24"],
  pin25: ["ROUT3", "25"],
  pin26: ["ROUT2", "26"],
  pin27: ["ROUT1", "27"],
  pin28: ["ROUT0", "28"],
} as const;

const pinRoles = {
  pin1: "ground",
  pin2: "unknown",
  pin3: "unknown",
  pin4: "power",
  pin5: "unknown",
  pin6: "unknown",
  pin7: "unknown",
  pin8: "unknown",
  pin9: "unknown",
  pin10: "output",
  pin11: "power",
  pin12: "ground",
  pin13: "ground",
  pin14: "ground",
  pin15: "unknown",
  pin16: "unknown",
  pin17: "unknown",
  pin18: "unknown",
  pin19: "unknown",
  pin20: "ground",
  pin21: "power",
  pin22: "ground",
  pin23: "power",
  pin24: "unknown",
  pin25: "unknown",
  pin26: "unknown",
  pin27: "unknown",
  pin28: "unknown",
} as const;

const pinAttributes = {
  pin1: { requiresGround: true },
  pin4: { requiresPower: true },
  pin11: { requiresPower: true },
  pin12: { requiresGround: true },
  pin13: { requiresGround: true },
  pin14: { requiresGround: true },
  pin20: { requiresGround: true },
  pin21: { requiresPower: true },
  pin22: { requiresGround: true },
  pin23: { requiresPower: true },
} as const;

export const SN65LV1224BDB = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing DB0028A; donor SN65LV1023ADB (JLCPCB C2863118)
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="SN65LV1224BDB"
      footprint="dfn28_pillpads_p0.65mm_w8.9258mm_pw0.364mm_pl2.0155mm_pin1location(leftside,bottom)"
      {...props}
    />
  );
};

export default SN65LV1224BDB;
