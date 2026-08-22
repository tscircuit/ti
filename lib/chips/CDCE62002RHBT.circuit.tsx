import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VCC_AUX"],
  pin2: ["AUX_IN"],
  pin3: ["VBB"],
  pin4: ["VCC_PLLD"],
  pin5: ["REG_CAP1"],
  pin6: ["PD"],
  pin7: ["SPI_MISO"],
  pin8: ["SPI_MOSI"],
  pin9: ["VCC_OUT01"],
  pin10: ["U0N"],
  pin11: ["U0P"],
  pin12: ["VCC_OUT02"],
  pin13: ["VCC_OUT11"],
  pin14: ["U1N"],
  pin15: ["U1P"],
  pin16: ["VCC_OUT12"],
  pin17: ["SPI_CLK"],
  pin18: ["SPI_LE"],
  pin19: ["TESTSYNC"],
  pin20: ["REG_CAP3"],
  pin21: ["GND_PLLDIV"],
  pin22: ["VCC_PLLDIV"],
  pin23: ["REG_CAP4"],
  pin24: ["VCC_VCO"],
  pin25: ["EXT_LFP"],
  pin26: ["EXT_LFN"],
  pin27: ["REG_CAP2"],
  pin28: ["VCC_PLLA"],
  pin29: ["REF_IN_POS"],
  pin30: ["REF_IN_NEG"],
  pin31: ["VCC_IN"],
  pin32: ["PLL_LOCK"],
  pin33: ["EP"],
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin33: [...pinLabels["pin33"], "thermalpad"],
} as const;

export const CDCE62002RHBT = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C2651211"],
      }}
      manufacturerPartNumber="CDCE62002RHBT"
      footprint="qfn32_thermalpad3.45mmx3.45mm_p0.4999mm_h5.6798mm_pw0.28mm_pl0.665mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2651211.obj?uuid=8b11b4b75acf4c5eaea11a6ae95d6a9c",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2651211.step?uuid=8b11b4b75acf4c5eaea11a6ae95d6a9c",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.02 },
      }}
      {...props}
    />
  );
};

export default CDCE62002RHBT;
