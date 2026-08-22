import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["RESET"],
  pin2: ["VDD"],
  pin3: ["GND"],
  pin4: ["pin4"],
  pin5: ["CT"],
} as const;

const pinAttributes = {
  pin2: { requiresPower: true },
  pin3: { requiresGround: true },
} as const;

export const TPS3840DL28DBVR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2066416"],
      }}
      manufacturerPartNumber="TPS3840DL28DBVR"
      footprint="dfn6_missing(5)_p0.95mm_w3.2001mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2066416.obj?uuid=de83a77687e64788a98e316d865b3813",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2066416.step?uuid=de83a77687e64788a98e316d865b3813",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.75 },
      }}
      {...props}
    />
  );
};

export default TPS3840DL28DBVR;
