import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["IN"],
  pin2: ["GND"],
  pin3: ["ON"],
  pin4: ["pin4"],
  pin5: ["FLT"],
  pin6: ["OUT"],
} as const;

export const TPS22948DCKR = (props: ChipProps<typeof pinLabels>) => {
  const { name = "SW1", ...restProps } = props;

  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      name={name}
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C1849487"],
      }}
      manufacturerPartNumber="TPS22948DCKR"
      footprint="dfn6_p0.65mm_w2.4999mm_pw0.42mm_pl0.6mm_pin1location(rightside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C1849487.obj?uuid=a5d40c04f23243b2af27dc3bf34f18d3",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C1849487.step?uuid=a5d40c04f23243b2af27dc3bf34f18d3",
        pcbRotationOffset: 180,
        modelOriginPosition: { x: 0.000012700000013410317, y: 0, z: -0.1 },
      }}
      {...restProps}
    />
  );
};

export default TPS22948DCKR;
