import type { ChipProps } from "@tscircuit/props";

import "tscircuit";

export const TPS6521835 = (props: ChipProps) => (
  <chip
    manufacturerPartNumber="TPS6521835RSLT"
    schWidth="6mm"
    schHeight="6mm"
    pinLabels={{
      pin1: "IN_DCDC1",
      pin2: ["I2C_SDA", "SDA"],
      pin3: ["I2C_SCL", "SCL"],
      pin4: "LDO1",
      pin5: "IN_LDO1",
      pin6: "IN_LS3",
      pin7: "LS3",
      pin8: "PGOOD",
      pin9: "AC_DET",
      pin10: "nPFO",
      pin11: "GPIO1",
      pin12: "IN_DCDC4",
      pin13: "L4A",
      pin14: "L4B",
      pin15: "DCDC4",
      pin16: "PFI",
      pin17: "DC34_SEL",
      pin18: "IN_nCC",
      pin19: "PGOOD_BU",
      pin20: "L5",
      pin21: "FB5",
      pin22: "FB6",
      pin23: "L6",
      pin24: "SYS_BU",
      pin25: "CC",
      pin26: "GPIO3",
      pin27: "IN_BU",
      pin28: ["NC", "NC1"],
      pin29: ["NC", "NC2"],
      pin30: "LS1",
      pin31: "IN_LS1",
      pin32: "IN_LS2",
      pin33: "LS2",
      pin34: "GPO2",
      pin35: "INT_LDO",
      pin36: "IN_BIAS",
      pin37: "IN_DCDC3",
      pin38: "L3",
      pin39: "FB3",
      pin40: "nWAKEUP",
      pin41: "FB2",
      pin42: "L2",
      pin43: "IN_DCDC2",
      pin44: "PB",
      pin45: "nINT",
      pin46: "PWR_EN",
      pin47: "FB1",
      pin48: "L1",
    }}
    schPinArrangement={{
      topSide: {
        direction: "left-to-right",
        pins: [36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: [24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13],
      },
      bottomSide: {
        direction: "left-to-right",
        pins: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      },
      leftSide: {
        direction: "top-to-bottom",
        pins: [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48],
      },
    }}
    schPinStyle={{
      pin25: {
        marginRight: -0.1,
      },
      pin26: {
        marginRight: 0.2,
      },
      pin27: {
        marginRight: 0.2,
      },
      pin28: {
        marginRight: 0.2,
      },
      pin29: {
        marginRight: 0.2,
      },
      pin30: {
        marginRight: 0.2,
      },
      pin31: {
        marginRight: 0.2,
      },
      pin32: {
        marginRight: 0.2,
      },
      pin33: {
        marginRight: 0.2,
      },
      pin34: {
        marginRight: 0.2,
      },
      pin35: {
        marginRight: 0.2,
      },
      pin36: {
        marginRight: 0.2,
      },
      pin12: {
        marginRight: -0.1,
      },
      pin11: {
        marginRight: 0.2,
      },
      pin10: {
        marginRight: 0.2,
      },
      pin9: {
        marginRight: 0.2,
      },
      pin8: {
        marginRight: 0.2,
      },
      pin7: {
        marginRight: 0.2,
      },
      pin6: {
        marginRight: 0.2,
      },
      pin5: {
        marginRight: 0.2,
      },
      pin4: {
        marginRight: 0.2,
      },
      pin3: {
        marginRight: 0.2,
      },
      pin2: {
        marginRight: 0.2,
      },
      pin1: {
        marginRight: 0.2,
      },
      pin48: {
        marginBottom: -0.1,
      },
      pin47: {
        marginBottom: 0.2,
      },
      pin46: {
        marginBottom: 0.2,
      },
      pin45: {
        marginBottom: 0.2,
      },
      pin44: {
        marginBottom: 0.2,
      },
      pin43: {
        marginBottom: 0.2,
      },
      pin42: {
        marginBottom: 0.2,
      },
      pin41: {
        marginBottom: 0.2,
      },
      pin40: {
        marginBottom: 0.2,
      },
      pin39: {
        marginBottom: 0.2,
      },
      pin38: {
        marginBottom: 0.2,
      },
      pin37: {
        marginBottom: 0.2,
      },
      pin13: {
        marginBottom: -0.9,
        marginTop: 0.8,
      },
      pin14: {
        marginBottom: 0.2,
      },
      pin16: {
        marginBottom: 0,
      },
      pin17: {
        marginBottom: 0.2,
      },
      pin18: {
        marginBottom: 0.2,
      },
      pin19: {
        marginBottom: 0.2,
      },
      pin20: {
        marginBottom: 0.2,
      },
      pin21: {
        marginBottom: 0.2,
      },
      pin22: {
        marginBottom: 0.2,
      },
      pin23: {
        marginBottom: 0.2,
      },
      pin24: {
        marginBottom: 0.2,
      },
    }}
    noConnect={["pin28", "pin29"]}
    {...props}
  />
);

export default TPS6521835;
