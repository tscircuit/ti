import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VIN"],
  pin2: ["RON"],
  pin3: ["UDIM"],
  pin4: ["VOUT"],
  pin5: ["VREF"],
  pin6: ["IADJ"],
  pin7: ["COMP"],
  pin8: ["GND"],
  pin9: ["CS"],
  pin10: ["LG"],
  pin11: ["VCC"],
  pin12: ["BOOT"],
  pin13: ["SW"],
  pin14: ["HG"],
  pin15: ["pin15"],
} as const;

const pinAttributes = {
  pin1: { requiresPower: true },
  pin8: { requiresGround: true },
  pin11: { requiresPower: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin15: [...pinLabels["pin15"], "thermalpad"],
} as const;

export const TPS92640PWPR_NOPB = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C914101"],
      }}
      manufacturerPartNumber="TPS92640PWPR/NOPB"
      footprint="dfn14_thermalpad3mmx3mm_pillpads_p0.65mm_w7.463mm_pw0.343mm_pl1.7315mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C914101.obj?uuid=cff8dbd72f2f41ddb606727c44cf27b4",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C914101.step?uuid=cff8dbd72f2f41ddb606727c44cf27b4",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.55 },
      }}
      {...props}
    />
  );
};

export default TPS92640PWPR_NOPB;
