import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["ANODE"],
  pin2: ["NC"],
  pin3: ["CATHODE"],
  pin4: ["VSS"],
  pin5: ["OUT"],
  pin6: ["VDD"],
} as const;

const pinAttributes = {
  pin2: { doNotConnect: true },
  pin4: { requiresGround: true },
  pin6: { requiresPower: true },
} as const;

export const UCC23525CDWYR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C49279569"],
      }}
      manufacturerPartNumber="UCC23525CDWYR"
      footprint="soic6_w12.5603mm_pw0.76mm_pl2.16mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C49279569.obj?uuid=07970afa328649e9acb00959d048987b",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C49279569.step?uuid=07970afa328649e9acb00959d048987b",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: -0.000038099999983387534,
          y: -0.0001142999999501626,
          z: -1.79,
        },
      }}
      {...props}
    />
  );
};

export default UCC23525CDWYR;
