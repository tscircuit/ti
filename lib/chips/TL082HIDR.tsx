import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["NC", "1", "NC_1"],
  pin2: ["IN_N", "2"],
  pin3: ["IN_P", "3"],
  pin4: ["VCC_N", "4"],
  pin5: ["NC", "5", "NC_5"],
  pin6: ["OUT", "6"],
  pin7: ["VCC_P", "7"],
  pin8: ["NC", "8", "NC_8"],
} as const;

const pinRoles = {
  pin1: "no-connect",
  pin2: "input",
  pin3: "input",
  pin4: "power",
  pin5: "no-connect",
  pin6: "output",
  pin7: "power",
  pin8: "no-connect",
} as const;

const pinAttributes = {
  pin1: {
    doNotConnect: true,
  },
  pin4: {
    requiresPower: true,
  },
  pin5: {
    doNotConnect: true,
  },
  pin7: {
    requiresPower: true,
  },
  pin8: {
    doNotConnect: true,
  },
} as const;

export const TL082HIDR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C4370303"],
      }}
      manufacturerPartNumber="TL082HIDR"
      footprint="soic8_pillpads_w7.5898mm_pw0.588mm_pl2.045mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C4370303.obj?uuid=609550b54721441492dc8db43c2597ce",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C4370303.step?uuid=609550b54721441492dc8db43c2597ce",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.000012699999842880061, y: 0, z: -0.15 },
      }}
      {...props}
    />
  );
};

export default TL082HIDR;
