import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["OUT"],
  pin2: ["pin2"],
  pin3: ["PG"],
  pin4: ["GND"],
  pin5: ["EN"],
  pin6: ["NC"],
  pin7: ["DELAY"],
  pin8: ["IN"],
  pin9: ["EP"],
} as const;

const pinAttributes = {
  pin4: { requiresGround: true },
  pin6: { doNotConnect: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin9: [...pinLabels["pin9"], "thermalpad"],
} as const;

export const TPS7A1633DGNR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C181239"],
      }}
      manufacturerPartNumber="TPS7A1633DGNR"
      footprint="dfn8_thermalpad1.5mmx1.8mm_pillpads_p0.65mm_w5.9241mm_pw0.364mm_pl1.662mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C181239.obj?uuid=579554954b0946ca87bf676d9e26a8a1",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C181239.step?uuid=579554954b0946ca87bf676d9e26a8a1",
        pcbRotationOffset: 270,
        modelOriginPosition: { x: 0.000012700000070253736, y: 0, z: 0 },
      }}
      {...props}
    />
  );
};

export default TPS7A1633DGNR;
