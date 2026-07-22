import type { ChipProps } from "@tscircuit/props";
import "tscircuit";

export const TRF7960RHB = (props: ChipProps) => (
  <chip
    manufacturerPartNumber="TRF7960RHBT"
    schWidth="3.5mm"
    schHeight="9mm"
    pinLabels={{
      pin1: "VDD_A",
      pin2: "VIN",
      pin3: "VDD_RF",
      pin4: "VDD_PA",
      pin5: "TX_OUT",
      pin6: "VSS_PA",
      pin7: "VSS_RX",
      pin8: "RX_IN1",
      pin9: "RX_IN2",
      pin10: "VSS",
      pin11: "BAND_GAP",
      pin12: "ASK_OOK",
      pin13: "IRQ",
      pin14: "MOD",
      pin15: "VSS_A",
      pin16: "VDD_IO",
      pin17: "IO_0",
      pin18: "IO_1",
      pin19: "IO_2",
      pin20: "IO_3",
      pin21: "SLAVE_SELECT",
      pin22: "IO_5",
      pin23: "MISO",
      pin24: "MOSI",
      pin25: "EN2",
      pin26: "DATA_CLK",
      pin27: "SYS_CLK",
      pin28: "EN",
      pin29: "VSS_D",
      pin30: "OSC_OUT",
      pin31: "OSC_IN",
      pin32: "VDD_X",
      pin33: "TH_PAD",
    }}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: [
          28, 25, 21, 26, 24, 23, 27, 13, 14, 12, 2, 19, 18, 32, 16, 11, 4, 3,
          1,
        ],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: [30, 31, 5, 8, 9, 22, 20, 29, 17, 15, 10, 7, 6, 33],
      },
    }}
    schPinStyle={{
      pin28: { marginBottom: 0.2 },
      pin25: { marginBottom: 0.2 },
      pin21: { marginBottom: 0.2 },
      pin26: { marginBottom: 0.2 },
      pin24: { marginBottom: 0.2 },
      pin23: { marginBottom: 0.55 },
      pin27: { marginBottom: 0.2 },
      pin13: { marginBottom: 0.2 },
      pin14: { marginBottom: 0.2 },
      pin12: { marginBottom: 0.55 },
      pin2: { marginBottom: 0.2 },
      pin19: { marginBottom: 0.2 },
      pin18: { marginBottom: 1 },
      pin32: { marginBottom: 0.2 },
      pin16: { marginBottom: 0.2 },
      pin11: { marginBottom: 0.2 },
      pin4: { marginBottom: 0.2 },
      pin3: { marginBottom: 0.2 },
      pin30: { marginBottom: 0.45 },
      pin31: { marginBottom: 1 },
      pin5: { marginBottom: 1 },
      pin8: { marginBottom: 0.8 },
      pin9: { marginBottom: 0.8 },
      pin22: { marginBottom: 0.2 },
      pin20: { marginBottom: 0.2 },
      pin29: { marginBottom: 0.2 },
      pin17: { marginBottom: 0.2 },
      pin15: { marginBottom: 0.2 },
      pin10: { marginBottom: 0.2 },
      pin7: { marginBottom: 0.2 },
      pin6: { marginBottom: 0.2 },
    }}
    noConnect={["pin20", "pin22"]}
    {...props}
  />
);

export default TRF7960RHB;
