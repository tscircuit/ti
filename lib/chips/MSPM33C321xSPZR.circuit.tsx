import type { ChipProps } from "@tscircuit/props";
import "tscircuit";

/**
 * Complete MSPM33C321x PZ (100-pin, 0.5 mm-pitch LQFP) package pin map.
 *
 * Source: MSPM33C321x data sheet, SLASFB6, Figure 6-2.
 * https://www.ti.com/lit/ds/symlink/mspm33c321a.pdf
 */
export const MSPM33C321XSPZR_PIN_LABELS = {
  pin1: "PA0",
  pin2: "PA1",
  pin3: "PA28",
  pin4: "PA29",
  pin5: "PA30",
  pin6: "NRST",
  pin7: "VBAT",
  pin8: ["VDD1", "VDD"],
  pin9: ["VSS1", "VSS"],
  pin10: "PC12",
  pin11: "PC15",
  pin12: "PC13",
  pin13: "PC14",
  pin14: "PC28",
  pin15: "PA2",
  pin16: "PA3",
  pin17: "PA4",
  pin18: "PA5",
  pin19: "PA6",
  pin20: "PB0",
  pin21: "PB1",
  pin22: "PA7",
  pin23: "PB2",
  pin24: "PB3",
  pin25: "PB4",
  pin26: "PB5",
  pin27: "PA8",
  pin28: "TDO",
  pin29: "PB28",
  pin30: "PB29",
  pin31: "PB30",
  pin32: "PB31",
  pin33: "PA10",
  pin34: "PA11",
  pin35: "PC16",
  pin36: "PC17",
  pin37: "PC29",
  pin38: "PC18",
  pin39: "PC19",
  pin40: "PB6",
  pin41: "PB7",
  pin42: "PB8",
  pin43: "PB9",
  pin44: "PB10",
  pin45: "PB11",
  pin46: "PB12",
  pin47: "PB13",
  pin48: "PB14",
  pin49: "PB15",
  pin50: "PB16",
  pin51: "PA12",
  pin52: "PA13",
  pin53: "PA14",
  pin54: "PA15",
  pin55: "PA16",
  pin56: "PC0",
  pin57: "PC1",
  pin58: "PC20",
  pin59: "PC21",
  pin60: "PC22",
  pin61: "PC23",
  pin62: "PC24",
  pin63: ["VSS2", "VSS"],
  pin64: ["VDD2", "VDD"],
  pin65: "PC2",
  pin66: "PC3",
  pin67: "PC4",
  pin68: "PC5",
  pin69: "PA17",
  pin70: "PA18",
  pin71: "SWDIO",
  pin72: "SWCLK",
  pin73: "PB17",
  pin74: "PB18",
  pin75: "PB19",
  pin76: "PA21",
  pin77: "TDI",
  pin78: "PC6",
  pin79: "PC7",
  pin80: "PC8",
  pin81: "PC9",
  pin82: "PB20",
  pin83: "PB21",
  pin84: "PB22",
  pin85: "PB23",
  pin86: "PB24",
  pin87: "PC10",
  pin88: "PC11",
  pin89: "PC25",
  pin90: "PC26",
  pin91: "PC27",
  pin92: "PA23",
  pin93: "PA24",
  pin94: "PA25",
  pin95: "PB25",
  pin96: "PB26",
  pin97: "PB27",
  pin98: "PA26",
  pin99: "PA27",
  pin100: "VCORE",
} as const;

type MSPM33C321xSPZRPartNumber = "MSPM33C321ASPZR" | "MSPM33C3219SPZR";

type MSPM33C321xSPZRProps = ChipProps<typeof MSPM33C321XSPZR_PIN_LABELS> & {
  manufacturerPartNumber: MSPM33C321xSPZRPartNumber;
};

const MSPM33C321xSPZR = ({
  manufacturerPartNumber,
  ...props
}: MSPM33C321xSPZRProps) => (
  <chip
    manufacturerPartNumber={manufacturerPartNumber}
    datasheetUrl="https://www.ti.com/lit/ds/symlink/mspm33c321a.pdf"
    footprint="lqfp100_w14mm_h14mm_p0.5mm_pw0.3mm_pl1.5mm"
    pinLabels={MSPM33C321XSPZR_PIN_LABELS}
    pinAttributes={{
      pin8: {
        requiresPower: true,
        mustBeConnected: true,
        shouldHaveDecouplingCapacitor: true,
      },
      pin9: { requiresGround: true, mustBeConnected: true },
      pin63: { requiresGround: true, mustBeConnected: true },
      pin64: {
        requiresPower: true,
        mustBeConnected: true,
        shouldHaveDecouplingCapacitor: true,
      },
      pin100: {
        providesPower: true,
        mustBeConnected: true,
        shouldHaveDecouplingCapacitor: true,
      },
    }}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: Array.from({ length: 25 }, (_, index) => index + 1),
      },
      bottomSide: {
        direction: "left-to-right",
        pins: Array.from({ length: 25 }, (_, index) => index + 26),
      },
      rightSide: {
        direction: "bottom-to-top",
        pins: Array.from({ length: 25 }, (_, index) => index + 51),
      },
      topSide: {
        direction: "right-to-left",
        pins: Array.from({ length: 25 }, (_, index) => index + 76),
      },
    }}
    schWidth="12mm"
    schHeight="12mm"
    {...props}
  />
);

export const MSPM33C321ASPZR = (
  props: Omit<MSPM33C321xSPZRProps, "manufacturerPartNumber">,
) => <MSPM33C321xSPZR manufacturerPartNumber="MSPM33C321ASPZR" {...props} />;

export const MSPM33C3219SPZR = (
  props: Omit<MSPM33C321xSPZRProps, "manufacturerPartNumber">,
) => <MSPM33C321xSPZR manufacturerPartNumber="MSPM33C3219SPZR" {...props} />;

/** Default-package alias for the 1 MB MSPM33C321A. */
export const MSPM33C321A = MSPM33C321ASPZR;

/** Default-package alias for the 512 KB MSPM33C3219. */
export const MSPM33C3219 = MSPM33C3219SPZR;

export default MSPM33C321ASPZR;
