import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VIN"],
  pin2: ["SW"],
  pin3: ["GND"],
  pin4: ["BST"],
  pin5: ["EN"],
  pin6: ["FB"],
} as const;

const pinAttributes = {
  pin1: { requiresPower: true },
  pin3: { requiresGround: true },
} as const;

export const TPS561243DRLR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C42040978"],
      }}
      manufacturerPartNumber="TPS561243DRLR"
      footprint="dfn6_p0.4999mm_w1.9602mm_pw0.28mm_pl0.68mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C42040978.obj?uuid=52c348d94bf141ea80650d0613706b8c",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C42040978.step?uuid=52c348d94bf141ea80650d0613706b8c",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.00005079999999679785, y: 0, z: 0 },
      }}
      {...props}
    />
  );
};

export default TPS561243DRLR;
