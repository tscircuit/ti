import type { ChipProps } from "@tscircuit/props";

export const MSPM0G5117SPMR_PIN_LABELS = {
  pin1: ["GPIO_PB13", "PB13"],
  pin2: ["GPIO_PB14", "PB14"],
  pin3: ["GPIO_PB15", "PB15"],
  pin4: ["GPIO_PB16", "PB16"],
  pin5: ["GPIO_PA12", "PA12"],
  pin6: ["GPIO_PA13", "PA13"],
  pin7: ["GPIO_PA14", "PA14"],
  pin8: ["GPIO_PA15", "PA15"],
  pin9: ["GPIO_PA16", "PA16"],
  pin10: ["GPIO_PA17", "PA17"],
  pin11: ["GPIO_PA18", "PA18"],
  pin12: ["GPIO_PA19", "PA19", "SWDIO"],
  pin13: ["GPIO_PA20", "PA20", "SWCLK"],
  pin14: ["GPIO_PB17", "PB17"],
  pin15: ["GPIO_PB18", "PB18"],
  pin16: ["GPIO_PB19", "PB19"],
  pin17: ["GPIO_PA21", "PA21"],
  pin18: ["GPIO_PA22", "PA22"],
  pin19: ["GPIO_PB20", "PB20"],
  pin20: ["GPIO_PB21", "PB21"],
  pin21: ["GPIO_PB22", "PB22"],
  pin22: ["GPIO_PB23", "PB23"],
  pin23: ["GPIO_PB24", "PB24"],
  pin24: ["GPIO_PA23", "PA23"],
  pin25: ["GPIO_PA24", "PA24"],
  pin26: ["GPIO_PA25", "PA25"],
  pin27: ["GPIO_PB25", "PB25"],
  pin28: ["GPIO_PB26", "PB26"],
  pin29: "VUSB33",
  pin30: ["GPIO_PA26", "PA26", "USB_DM"],
  pin31: ["GPIO_PA27", "PA27", "USB_DP"],
  pin32: "VCORE",
  pin33: ["GPIO_PA0", "PA0", "I2C0_SDA"],
  pin34: ["GPIO_PA1", "PA1", "I2C0_SCL"],
  pin35: ["GPIO_PA28", "PA28"],
  pin36: ["GPIO_PA29", "PA29"],
  pin37: ["GPIO_PA30", "PA30"],
  pin38: "NRST",
  pin39: ["GPIO_PA31", "PA31"],
  pin40: "VDD",
  pin41: "VSS",
  pin42: ["GPIO_PA2", "PA2", "ROSC"],
  pin43: ["GPIO_PA3", "PA3"],
  pin44: ["GPIO_PA4", "PA4"],
  pin45: ["GPIO_PA5", "PA5"],
  pin46: ["GPIO_PA6", "PA6"],
  pin47: ["GPIO_PB0", "PB0"],
  pin48: ["GPIO_PB1", "PB1"],
  pin49: ["GPIO_PA7", "PA7"],
  pin50: ["GPIO_PB2", "PB2"],
  pin51: ["GPIO_PB3", "PB3"],
  pin52: ["GPIO_PB4", "PB4"],
  pin53: ["GPIO_PB5", "PB5"],
  pin54: ["GPIO_PA8", "PA8"],
  pin55: ["GPIO_PA9", "PA9"],
  pin56: ["GPIO_PA10", "PA10"],
  pin57: ["GPIO_PA11", "PA11"],
  pin58: ["GPIO_PB6", "PB6"],
  pin59: ["GPIO_PB7", "PB7"],
  pin60: ["GPIO_PB8", "PB8"],
  pin61: ["GPIO_PB9", "PB9"],
  pin62: ["GPIO_PB10", "PB10"],
  pin63: ["GPIO_PB11", "PB11"],
  pin64: ["GPIO_PB12", "PB12"],
} as const;

export const MSPM0G5117SPMR = (
  props: ChipProps<typeof MSPM0G5117SPMR_PIN_LABELS>,
) => (
  <chip
    pinLabels={MSPM0G5117SPMR_PIN_LABELS}
    manufacturerPartNumber="MSPM0G5117SPMR"
    datasheetUrl="https://www.ti.com/lit/ds/symlink/mspm0g5117.pdf"
    footprint="qfp64_w10mm_h10mm_p0.5mm_pw0.3mm_pl1.5mm_legsoutside"
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: [
          "VDD",
          "VSS",
          "VCORE",
          "VUSB33",
          "NRST",
          "USB_DP",
          "PA8",
          "PA9",
          "PA15",
          "PA14",
        ],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: [
          "PA7",
          "USB_DM",
          "PA0",
          "PA1",
          "PA10",
          "PA11",
          "PA16",
          "PA2",
          "PA19",
          "PA20",
        ],
      },
    }}
    pinAttributes={{
      VDD: { requiresPower: true },
      VSS: { requiresGround: true },
      VCORE: { providesPower: true },
      VUSB33: { requiresPower: true },
      NRST: { requiresPower: true },
    }}
    schPinStyle={{
      VDD: { marginTop: -0.5 },
      VSS: { marginTop: 1.2 },
      VCORE: { marginTop: 0.3 },
      VUSB33: { marginTop: 0.3 },
      NRST: { marginTop: 1.5, marginBottom: 0.7 },
    }}
    schHeight={7.6}
    {...props}
  />
);
