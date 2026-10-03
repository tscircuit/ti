import type { ChipProps } from "@tscircuit/props";

export const TMP116NAIDRVR_PIN_LABELS = {
  pin1: ["SCL"],
  pin2: ["GND"],
  pin3: ["ALERT"],
  pin4: ["ADD0"],
  pin5: ["V_POS", "VDD"],
  pin6: ["SDA"],
  pin7: ["EP", "thermalpad"],
} as const;

export const TMP116NAIDRVR = (
  props: ChipProps<typeof TMP116NAIDRVR_PIN_LABELS>,
) => (
  <chip
    pinLabels={TMP116NAIDRVR_PIN_LABELS}
    pinAttributes={{
      pin2: { requiresGround: true },
      pin5: { requiresPower: true },
    }}
    manufacturerPartNumber="TMP116NAIDRVR"
    supplierPartNumbers={{ jlcpcb: ["C182074"] }}
    footprint="dfn6_thermalpad1mmx1.6mm_pillpads_p0.65mm_w2.6639mm_pw0.364mm_pl0.607mm"
    cadModel={{
      objUrl:
        "https://modelcdn.tscircuit.com/easyeda_models/assets/C182074.obj?uuid=c909123e4a7a4da5a0270979fee6c02c",
      stepUrl:
        "https://modelcdn.tscircuit.com/easyeda_models/assets/C182074.step?uuid=c909123e4a7a4da5a0270979fee6c02c",
      pcbRotationOffset: 0,
      modelOriginPosition: { x: 0, y: 0, z: 0 },
    }}
    {...props}
  />
);

export default TMP116NAIDRVR;
