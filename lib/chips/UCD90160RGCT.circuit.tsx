import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["MON1"],
  pin2: ["MON2"],
  pin3: ["MON3"],
  pin4: ["MON4"],
  pin5: ["MON5"],
  pin6: ["MON6"],
  pin7: ["V33DIO1"],
  pin8: ["DVSS1"],
  pin9: ["RESET"],
  pin10: ["TRCK"],
  pin11: ["GPIO1"],
  pin12: ["GPIO2"],
  pin13: ["GPIO3"],
  pin14: ["GPIO4"],
  pin15: ["PMBUS_CLK"],
  pin16: ["PMBUS_DATA"],
  pin17: ["pin17"],
  pin18: ["pin18"],
  pin19: ["pin19"],
  pin20: ["pin20"],
  pin21: ["pin21"],
  pin22: ["pin22"],
  pin23: ["pin23"],
  pin24: ["pin24"],
  pin25: ["GPIO13"],
  pin26: ["DVSS2"],
  pin27: ["PMBUS_ALERT"],
  pin28: ["PMBUS_CNTRL"],
  pin29: ["GPIO14"],
  pin30: ["GPIO15"],
  pin31: ["pin31"],
  pin32: ["pin32"],
  pin33: ["GPIO16"],
  pin34: ["GPIO17"],
  pin35: ["GPIO18"],
  pin36: ["pin36"],
  pin37: ["pin37"],
  pin38: ["pin38"],
  pin39: ["pin39"],
  pin40: ["TRST"],
  pin41: ["pin41"],
  pin42: ["pin42"],
  pin43: ["DVSS3"],
  pin44: ["V33DIO2"],
  pin45: ["V33D"],
  pin46: ["V33A"],
  pin47: ["BPCAP"],
  pin48: ["AVSS2"],
  pin49: ["AVSS1"],
  pin50: ["MON14"],
  pin51: ["NC1"],
  pin52: ["MON15"],
  pin53: ["NC2"],
  pin54: ["MON16"],
  pin55: ["MON7"],
  pin56: ["MON8"],
  pin57: ["MON9"],
  pin58: ["MON10"],
  pin59: ["MON11"],
  pin60: ["PMBUS_ADDR1"],
  pin61: ["PMBUS_ADDR0"],
  pin62: ["MON12"],
  pin63: ["MON13"],
  pin64: ["AVSS3"],
  pin65: ["EP"],
} as const;

const pinAttributes = {
  pin51: { doNotConnect: true },
  pin53: { doNotConnect: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin65: [...pinLabels["pin65"], "thermalpad"],
} as const;

export const UCD90160RGCT = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2066123"],
      }}
      manufacturerPartNumber="UCD90160RGCT"
      footprint="qfn64_thermalpad4.7mmx4.7mm_pillpads_p0.4999mm_h9.9499mm_pw0.3mm_pl0.85mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2066123.obj?uuid=397b6c149af1450cb57bae20a58aa225",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2066123.step?uuid=397b6c149af1450cb57bae20a58aa225",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: 0.00012700000002041634,
          y: 0.000038099999983387534,
          z: -0.02,
        },
      }}
      {...props}
    />
  );
};

export default UCD90160RGCT;
