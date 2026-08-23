import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["FB"],
  pin3: ["PGOOD"],
  pin4: ["COMP"],
  pin5: ["VIN1"],
  pin6: ["VIN2"],
  pin7: ["SW1"],
  pin8: ["SW2"],
  pin9: ["GND1"],
  pin10: ["GND2"],
  pin11: ["GND3"],
  pin12: ["AGND"],
  pin13: ["SW4"],
  pin14: ["SW3"],
  pin15: ["VIN4"],
  pin16: ["VIN3"],
  pin17: ["BOOT"],
  pin18: ["VCC"],
  pin19: ["EN"],
  pin20: ["RT"],
  pin21: ["EP"],
} as const;

const pinAttributes = {
  pin5: { requiresPower: true },
  pin6: { requiresPower: true },
  pin9: { requiresGround: true },
  pin10: { requiresGround: true },
  pin11: { requiresGround: true },
  pin12: { requiresGround: true },
  pin15: { requiresPower: true },
  pin16: { requiresPower: true },
  pin18: { requiresPower: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin21: [...pinLabels["pin21"], "thermalpad"],
} as const;

export const LM20242MHX_NOPB = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C179681"],
      }}
      manufacturerPartNumber="LM20242MHX/NOPB"
      footprint="dfn20_thermalpad3mmx4.2mm_pillpads_p0.65mm_w7.493mm_pw0.343mm_pl1.7465mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C179681.obj?uuid=8e6015adf3634b5f88b85fbae678277b",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C179681.step?uuid=8e6015adf3634b5f88b85fbae678277b",
        pcbRotationOffset: 90,
        modelOriginPosition: {
          x: -0.000012700000070253736,
          y: 0.000012700000070253736,
          z: -0.099083,
        },
      }}
      {...props}
    />
  );
};

export default LM20242MHX_NOPB;
