import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["I2C_SDA", "SDA"],
  pin2: ["I2C_ADDR", "ADDR"],
  pin3: ["ALERT"],
  pin4: ["I2C_SCL", "SCL"],
  pin5: ["VDD"],
  pin6: ["RESET"],
  pin7: ["I2C_ADDR1", "ADDR1"],
  pin8: ["GND"],
  pin9: ["EP"],
} as const;

export const HDC3020DEFR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C7472806"],
      }}
      manufacturerPartNumber="HDC3020DEFR"
      footprint="dfn8_thermalpad1.2mmx1.9mm_p0.5mm_w2.3mm_pw0.25mm_pl0.6mm_pin1location(leftside,top)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C7472806.obj?uuid=de01b87c3fde450bafb3798419858b29",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C7472806.step?uuid=de01b87c3fde450bafb3798419858b29",
        pcbRotationOffset: 90,
        modelOriginPosition: {
          x: 0.0000889000000370288,
          y: -0.0000889000000370288,
          z: 0,
        },
      }}
      {...props}
    />
  );
};

export default HDC3020DEFR;
