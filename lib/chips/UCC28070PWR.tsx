import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["CDR"],
  pin2: ["RDM"],
  pin3: ["VAO"],
  pin4: ["VSENSE"],
  pin5: ["VINAC"],
  pin6: ["IMO"],
  pin7: ["RSYNTH"],
  pin8: ["CSB"],
  pin9: ["CSA"],
  pin10: ["PKLMT"],
  pin11: ["CAOB"],
  pin12: ["CAOA"],
  pin13: ["VREF"],
  pin14: ["GDA"],
  pin15: ["VCC"],
  pin16: ["GND"],
  pin17: ["GDB"],
  pin18: ["SS"],
  pin19: ["RT"],
  pin20: ["DMAX"],
} as const;

const pinAttributes = {
  pin15: { requiresPower: true },
  pin16: { requiresGround: true },
} as const;

export const UCC28070PWR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C138518"],
      }}
      manufacturerPartNumber="UCC28070PWR"
      footprint="dfn20_pillpads_p0.65mm_w7.4839mm_pw0.364mm_pl1.742mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C138518.obj?uuid=f8ba5b4174b9490d8c445fbe2ed40b80",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C138518.step?uuid=f8ba5b4174b9490d8c445fbe2ed40b80",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0, y: 0.000012700000070253736, z: -0.019205 },
      }}
      {...props}
    />
  );
};

export default UCC28070PWR;
