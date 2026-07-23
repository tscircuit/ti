import type { ChipProps } from "@tscircuit/props";
import "tscircuit";

export const TLC59116 = (props: ChipProps) => (
  <chip
    manufacturerPartNumber="TLC59116IPW"
    schWidth="5mm"
    schHeight="7.5mm"
    pinLabels={{
      pin1: "REXT",
      pin2: ["I2C_ADDR0", "A0"],
      pin3: ["I2C_ADDR1", "A1"],
      pin4: ["I2C_ADDR2", "A2"],
      pin5: ["I2C_ADDR3", "A3"],
      pin6: "N_OUT0",
      pin7: "N_OUT1",
      pin8: "N_OUT2",
      pin9: "N_OUT3",
      pin10: ["GND"],
      pin11: "N_OUT4",
      pin12: "N_OUT5",
      pin13: "N_OUT6",
      pin14: "N_OUT7",
      pin15: "N_OUT8",
      pin16: "N_OUT9",
      pin17: "N_OUT10",
      pin18: "N_OUT11",
      pin19: "VDD",
      pin20: "N_OUT12",
      pin21: "N_OUT13",
      pin22: "N_OUT14",
      pin23: "N_OUT15",
      pin25: "N_RESET",
      pin26: ["I2C_SCL", "SCL"],
      pin27: ["I2C_SDA", "SDA"],
    }}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: [26, 27, 25, 2, 3, 4, 5, 1],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: [19, 23, 22, 21, 20, 18, 17, 16, 15, 14, 13, 12, 11, 9, 8, 7, 6],
      },
      bottomSide: {
        direction: "left-to-right",
        pins: [10],
      },
    }}
    schPinStyle={{
      pin7: {
        marginBottom: 0.2,
      },
      pin8: {
        marginBottom: 0.2,
      },
      pin9: {
        marginBottom: 0.2,
      },
      pin11: {
        marginBottom: 0.2,
      },
      pin12: {
        marginBottom: 0.2,
      },
      pin13: {
        marginBottom: 0.2,
      },
      pin14: {
        marginBottom: 0.2,
      },
      pin15: {
        marginBottom: 0.2,
      },
      pin16: {
        marginBottom: 0.2,
      },
      pin17: {
        marginBottom: 0.2,
      },
      pin18: {
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
      pin19: {
        marginBottom: 0.2,
      },
      pin26: {
        marginBottom: 0.2,
      },
      pin27: {
        marginBottom: 0.2,
      },
      pin25: {
        marginBottom: 0.2,
      },
      pin2: {
        marginBottom: 0.2,
      },
      pin3: {
        marginBottom: 0.2,
      },
      pin4: {
        marginBottom: 0.2,
      },
      pin5: {
        marginBottom: 4,
      },
      pin1: {
        marginBottom: -0.1,
        marginTop: 0.1,
      },
    }}
    {...props}
  />
);

export default TLC59116;
