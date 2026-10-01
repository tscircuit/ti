// TI MCU+ SDK source revision e7e068494bbd5714d6d34c55b10184a5bd84ed30
// records this product identity and uses SysConfig 1.14.0+2667.
export const am2434Profile = {
  context: "r5fss0-0",
  part: "ALV",
  package: "ALV",
  sdkName: "MCU_PLUS_SDK",
  sdkVersion: "07.03.01",
  sysconfigVersion: "1.14.0+2667",
  // TI ALV package ball and MCU GPIO mapping, independently checked by TI output.
  gpioByBall: {
    A7: { peripheral: "MCU_GPIO0", pin: 5, devicePin: "MCU_SPI1_CS0" },
    B7: { peripheral: "MCU_GPIO0", pin: 6, devicePin: "MCU_SPI1_CS1" },
  },
};
