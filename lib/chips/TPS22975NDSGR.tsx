import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VIN1"],
  pin2: ["VIN2"],
  pin3: ["ON"],
  pin4: ["VBIAS"],
  pin5: ["GND"],
  pin6: ["CT"],
  pin7: ["VOUT1"],
  pin8: ["VOUT2"],
  pin9: ["EP"],
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin9: [...pinLabels["pin9"], "thermalpad"],
} as const;

export const TPS22975NDSGR = (props: ChipProps<typeof pinLabels>) => {
  const { name = "SW1", ...restProps } = props;

  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      name={name}
      pinLabels={footprinterPinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C2149871"],
      }}
      manufacturerPartNumber="TPS22975NDSGR"
      footprint="dfn8_thermalpad0.9mmx1.6mm_p0.5001mm_w2.4209mm_pw0.25mm_pl0.521mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2149871.obj?uuid=2be2baea8d8242eebd2ce617314d92a1",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2149871.step?uuid=2be2baea8d8242eebd2ce617314d92a1",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: 0 },
      }}
      {...restProps}
    />
  );
};

export default TPS22975NDSGR;
