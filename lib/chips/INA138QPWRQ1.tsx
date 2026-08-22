import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["VIN_POS"],
  pin3: ["NC1"],
  pin4: ["GND"],
  pin5: ["NC3"],
  pin6: ["OUT"],
  pin7: ["NC2"],
  pin8: ["V_POS"],
} as const;

const pinAttributes = {
  pin3: { doNotConnect: true },
  pin4: { requiresGround: true },
  pin5: { doNotConnect: true },
  pin7: { doNotConnect: true },
} as const;

export const INA138QPWRQ1 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2155715"],
      }}
      manufacturerPartNumber="INA138QPWRQ1"
      footprint="dfn8_pillpads_p0.6502mm_w7.2998mm_pw0.4mm_pl1.5mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2155715.obj?uuid=58a414fcc9ba423684db74486b97e851",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2155715.step?uuid=58a414fcc9ba423684db74486b97e851",
        pcbRotationOffset: 270,
        modelOriginPosition: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  );
};

export default INA138QPWRQ1;
