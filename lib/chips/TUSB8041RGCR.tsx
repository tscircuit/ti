import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["USB_DP_DN1"],
  pin2: ["USB_DM_DN1"],
  pin3: ["USB_SSTXP_DN1"],
  pin4: ["USB_SSTXM_DN1"],
  pin5: ["VDD8"],
  pin6: ["USB_SSRXP_DN1"],
  pin7: ["USB_SSRXM_DN1"],
  pin8: ["VDD7"],
  pin9: ["USB_DP_DN2"],
  pin10: ["USB_DM_DN2"],
  pin11: ["USB_SSTXP_DN2"],
  pin12: ["USB_SSTXM_DN2"],
  pin13: ["VDD6"],
  pin14: ["USB_SSRXP_DN2"],
  pin15: ["USB_SSRXM_DN2"],
  pin16: ["VDD334"],
  pin17: ["USB_DP_DN3"],
  pin18: ["USB_DM_DN3"],
  pin19: ["USB_SSTXP_DN3"],
  pin20: ["USB_SSTXM_DN3"],
  pin21: ["VDD5"],
  pin22: ["USB_SSRXP_DN3"],
  pin23: ["USB_SSRXM_DN3"],
  pin24: ["USB_DP_DN4"],
  pin25: ["USB_DM_DN4"],
  pin26: ["USB_SSTXP_DN4"],
  pin27: ["USB_SSTXM_DN4"],
  pin28: ["VDD4"],
  pin29: ["USB_SSRXP_DN4"],
  pin30: ["USB_SSRXM_DN4"],
  pin31: ["VDD3"],
  pin32: ["pin32"],
  pin33: ["pin33"],
  pin34: ["VDD333"],
  pin35: ["pin35"],
  pin36: ["pin36"],
  pin37: ["pin37"],
  pin38: ["pin38"],
  pin39: ["pin39"],
  pin40: ["pin40"],
  pin41: ["PWRCTL_POL"],
  pin42: ["pin42"],
  pin43: ["OVERCUR4z"],
  pin44: ["OVERCUR3z"],
  pin45: ["pin45"],
  pin46: ["OVERCUR1z"],
  pin47: ["OVERCUR2z"],
  pin48: ["USB_VBUS"],
  pin49: ["TEST"],
  pin50: ["GRSTz"],
  pin51: ["VDD2"],
  pin52: ["VDD332"],
  pin53: ["USB_DP_UP"],
  pin54: ["USB_DM_UP"],
  pin55: ["USB_SSTXP_UP"],
  pin56: ["USB_SSTXM_UP"],
  pin57: ["VDD1"],
  pin58: ["USB_SSRXP_UP"],
  pin59: ["USB_SSRXM_UP"],
  pin60: ["NC"],
  pin61: ["XO"],
  pin62: ["XI"],
  pin63: ["VDD331"],
  pin64: ["USB_R1"],
  pin65: ["VSS"],
} as const;

const pinAttributes = {
  pin5: { requiresPower: true },
  pin8: { requiresPower: true },
  pin13: { requiresPower: true },
  pin16: { requiresPower: true },
  pin21: { requiresPower: true },
  pin28: { requiresPower: true },
  pin31: { requiresPower: true },
  pin34: { requiresPower: true },
  pin51: { requiresPower: true },
  pin52: { requiresPower: true },
  pin57: { requiresPower: true },
  pin60: { doNotConnect: true },
  pin63: { requiresPower: true },
  pin65: { requiresGround: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin65: [...pinLabels["pin65"], "thermalpad"],
} as const;

export const TUSB8041RGCR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C486066"],
      }}
      manufacturerPartNumber="TUSB8041RGCR"
      footprint="qfn64_thermalpad6mmx6mm_pillpads_p0.4999mm_w10.1998mm_h10.2001mm_pw0.26mm_pl0.9mm_pin1location(bottomside,left)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C486066.obj?uuid=6c2af9d3f6594413b4109d6a55288186",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C486066.step?uuid=6c2af9d3f6594413b4109d6a55288186",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0, y: -0.00005079999993995443, z: 0.01 },
      }}
      {...props}
    />
  );
};

export default TUSB8041RGCR;
