import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["CLKIN"],
  pin2: ["1G"],
  pin3: ["Y0"],
  pin4: ["GND"],
  pin5: ["NC2"],
  pin6: ["VDD"],
  pin7: ["NC1"],
  pin8: ["Y1"],
} as const;

const pinAttributes = {
  pin4: { requiresGround: true },
  pin5: { doNotConnect: true },
  pin6: { requiresPower: true },
  pin7: { doNotConnect: true },
} as const;

export const LMK1C1102PWR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2859546"],
      }}
      manufacturerPartNumber="LMK1C1102PWR"
      footprint="dfn8_pillpads_p0.65mm_w7.3082mm_pw0.353mm_pl1.454mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2859546.obj?uuid=2d0fd2703afb4f81a9dfc54e2181a624",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2859546.step?uuid=2d0fd2703afb4f81a9dfc54e2181a624",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  );
};

export default LMK1C1102PWR;
