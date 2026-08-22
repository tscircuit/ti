import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["IN1"],
  pin2: ["IN2"],
  pin3: ["IN3"],
  pin4: ["IN4"],
  pin5: ["IN5"],
  pin6: ["IN6"],
  pin7: ["IN7"],
  pin8: ["GND"],
  pin9: ["COM"],
  pin10: ["OUT7"],
  pin11: ["OUT6"],
  pin12: ["OUT5"],
  pin13: ["OUT4"],
  pin14: ["OUT3"],
  pin15: ["OUT2"],
  pin16: ["OUT1"],
} as const;

export const TPL7407LADR = (props: ChipProps<typeof pinLabels>) => {
  const { name = "SW1", ...restProps } = props;

  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      name={name}
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C2149826"],
      }}
      manufacturerPartNumber="TPL7407LADR"
      footprint="soic16_pillpads_w7.4421mm_pw0.602mm_pl1.971mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2149826.obj?uuid=9adfdf34b7774b23880141fd3e8b4dbb",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2149826.step?uuid=9adfdf34b7774b23880141fd3e8b4dbb",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.000012699999842880061, y: 0, z: 0.000575 },
      }}
      {...restProps}
    />
  );
};

export default TPL7407LADR;
