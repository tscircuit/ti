import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin4: ["GND", "4"],
  pin2: ["IN_1", "2", "IN_1_2"],
  pin3: ["IN_1", "3", "IN_1_3"],
  pin8: ["IN_2", "8", "IN_2_8"],
  pin7: ["IN_2", "7", "IN_2_7"],
  pin1: ["OUT1", "1"],
  pin9: ["OUT2", "9"],
  pin5: ["REF1", "5"],
  pin6: ["REF2", "6"],
  pin10: ["VS", "10"],
} as const;

const pinRoles = {
  pin4: "ground",
  pin10: "power",
} as const;

const pinAttributes = {
  pin4: {
    requiresGround: true,
  },
  pin10: {
    requiresPower: true,
  },
} as const;

export const INA2181A2IDGSR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2058654"],
      }}
      manufacturerPartNumber="INA2181A2IDGSR"
      footprint="ssop10_p0.4964mm_w4.4528mm_pw0.3023mm_pl1.3096mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2058654.obj?uuid=854098f5cce54b6caab82164a7d3deef",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2058654.step?uuid=854098f5cce54b6caab82164a7d3deef",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0.000012699999999199463, y: 0, z: -0.149083 },
      }}
      {...props}
    />
  );
};

export default INA2181A2IDGSR;
