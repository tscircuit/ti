import type { ChipProps } from "@tscircuit/props";

export const OPT3004DNPR_PIN_LABELS = {
  pin1: ["VDD"],
  pin2: ["ADDR"],
  pin3: ["GND"],
  pin4: ["SCL"],
  pin5: ["INT"],
  pin6: ["SDA"],
  pin7: ["EP", "thermalpad"],
} as const;

export const OPT3004DNPR = (
  props: ChipProps<typeof OPT3004DNPR_PIN_LABELS>,
) => (
  <chip
    pinLabels={OPT3004DNPR_PIN_LABELS}
    pinAttributes={{
      pin1: { requiresPower: true },
      pin3: { requiresGround: true },
    }}
    manufacturerPartNumber="OPT3004DNPR"
    supplierPartNumbers={{ jlcpcb: ["C2655153"] }}
    footprint="dfn6_thermalpad1mmx1.6mm_pillpads_p0.65mm_w2.6639mm_pw0.364mm_pl0.607mm"
    cadModel={{
      objUrl:
        "https://modelcdn.tscircuit.com/easyeda_models/assets/C2655153.obj?uuid=c909123e4a7a4da5a0270979fee6c02c",
      stepUrl:
        "https://modelcdn.tscircuit.com/easyeda_models/assets/C2655153.step?uuid=c909123e4a7a4da5a0270979fee6c02c",
      pcbRotationOffset: 0,
      modelOriginPosition: { x: 0, y: 0, z: 0 },
    }}
    {...props}
  />
);

export default OPT3004DNPR;
