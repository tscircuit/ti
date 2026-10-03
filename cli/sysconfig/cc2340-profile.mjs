// TI SWRS272F RGE pin table; the converter has an independent mapping checked
// against the same datasheet in circuit-json-to-sysconfig.
export const cc2340Profile = {
  device: "CC2340R5RGE",
  part: "Default",
  package: "RGE",
  rtos: "nortos",
  sdkName: "simplelink_lowpower_f3_sdk",
  sdkVersion: "9.21.00.36",
  sysconfigVersion: "1.28.1+4785",
  dioByPackagePin: {
    3: 8,
    4: 11,
    5: 12,
    6: 13,
    7: 16,
    8: 17,
    9: 20,
    10: 21,
    12: 24,
    14: 3,
    15: 4,
    19: 6,
  },
};
