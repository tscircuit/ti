import type { ChipProps } from "@tscircuit/props";

const pinLabels = {
  pin1: "PB13",
  pin2: "PB14",
  pin3: "PB15",
  pin4: "PB16",
  pin5: "PA12",
  pin6: ["PA13", "COMP0_IN2_N"],
  pin7: ["PA14", "A0_12", "COMP0_IN2_P"],
  pin8: [
    "PA15",
    "A1_0",
    "DAC_OUT",
    "OPA0_IN2_P",
    "OPA1_IN2_P",
    "COMP0_IN3_P",
    "COMP1_IN3_P",
  ],
  pin9: ["PA16", "A1_1", "OPA1_OUT"],
  pin10: ["PA17", "A1_2", "OPA1_IN1_N", "COMP0_IN1_N"],
  pin11: ["PA18", "A1_3", "OPA1_IN1_P", "COMP0_IN1_P", "GPAMP_IN_N"],
  pin12: ["PA19", "SWDIO"],
  pin13: ["PA20", "SWCLK"],
  pin14: ["PB17", "A1_4", "COMP1_IN2_N"],
  pin15: ["PB18", "A1_5", "COMP1_IN2_P"],
  pin16: ["PB19", "A1_6", "COMP2_IN1_P", "OPA1_IN0_P"],
  pin17: ["PA21", "A1_7", "COMP2_IN1_N", "VREF_N"],
  pin18: ["PA22", "A0_7", "GPAMP_OUT", "OPA0_OUT"],
  pin19: ["PB20", "A0_6", "OPA1_IN0_N"],
  pin20: ["PB21", "COMP2_IN0_P"],
  pin21: ["PB22", "COMP2_IN0_N"],
  pin22: "PB23",
  pin23: ["PB24", "A0_5", "COMP1_IN1_P"],
  pin24: ["PA23", "COMP1_IN1_N", "VREF_P"],
  pin25: ["PA24", "A0_3", "OPA0_IN1_N"],
  pin26: ["PA25", "A0_2", "OPA0_IN1_P"],
  pin27: ["PB25", "A0_4"],
  pin28: ["PB26", "COMP1_IN0_P"],
  pin29: ["PB27", "COMP1_IN0_N"],
  pin30: ["PA26", "A0_1", "COMP0_IN0_P", "OPA0_IN0_P", "GPAMP_IN_P"],
  pin31: ["PA27", "A0_0", "COMP0_IN0_N", "OPA0_IN0_N"],
  pin32: "VCORE",
  pin33: "PA0",
  pin34: "PA1",
  pin35: "PA28",
  pin36: "PA29",
  pin37: "PA30",
  pin38: "NRST",
  pin39: "PA31",
  pin40: "VDD",
  pin41: "VSS",
  pin42: ["PA2", "ROSC"],
  pin43: ["PA3", "LFXIN"],
  pin44: ["PA4", "LFXOUT"],
  pin45: ["PA5", "HFXIN"],
  pin46: ["PA6", "HFXOUT"],
  pin47: "PB0",
  pin48: "PB1",
  pin49: "PA7",
  pin50: "PB2",
  pin51: "PB3",
  pin52: "PB4",
  pin53: "PB5",
  pin54: "PA8",
  pin55: "PA9",
  pin56: "PA10",
  pin57: "PA11",
  pin58: "PB6",
  pin59: "PB7",
  pin60: "PB8",
  pin61: "PB9",
  pin62: "PB10",
  pin63: "PB11",
  pin64: "PB12",
} as const;

export const MSPM0G3507SPMR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C22389960"],
      }}
      manufacturerPartNumber="MSPM0G3507SPMR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-3.750056mm"
            pcbY="-5.688203mm"
            width="0.2999994mm"
            height="1.499997mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-3.24993mm"
            pcbY="-5.688203mm"
            width="0.2999994mm"
            height="1.499997mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-2.750058mm"
            pcbY="-5.688203mm"
            width="0.2999994mm"
            height="1.499997mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-2.249932mm"
            pcbY="-5.688203mm"
            width="0.2999994mm"
            height="1.499997mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-1.75006mm"
            pcbY="-5.688203mm"
            width="0.2999994mm"
            height="1.499997mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-1.249934mm"
            pcbY="-5.688203mm"
            width="0.2999994mm"
            height="1.499997mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-0.750062mm"
            pcbY="-5.688203mm"
            width="0.2999994mm"
            height="1.499997mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-0.249936mm"
            pcbY="-5.688203mm"
            width="0.2999994mm"
            height="1.499997mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="0.249936mm"
            pcbY="-5.688203mm"
            width="0.2999994mm"
            height="1.499997mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="0.750062mm"
            pcbY="-5.688203mm"
            width="0.2999994mm"
            height="1.499997mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="1.249934mm"
            pcbY="-5.688203mm"
            width="0.2999994mm"
            height="1.499997mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="1.75006mm"
            pcbY="-5.688203mm"
            width="0.2999994mm"
            height="1.499997mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="2.249932mm"
            pcbY="-5.688203mm"
            width="0.2999994mm"
            height="1.499997mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="2.750058mm"
            pcbY="-5.688203mm"
            width="0.2999994mm"
            height="1.499997mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="3.24993mm"
            pcbY="-5.688203mm"
            width="0.2999994mm"
            height="1.499997mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="3.750056mm"
            pcbY="-5.688203mm"
            width="0.2999994mm"
            height="1.499997mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="5.700014mm"
            pcbY="-3.738245mm"
            width="1.499997mm"
            height="0.2999994mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="5.700014mm"
            pcbY="-3.238119mm"
            width="1.499997mm"
            height="0.2999994mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin19"]}
            pcbX="5.700014mm"
            pcbY="-2.738247mm"
            width="1.499997mm"
            height="0.2999994mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin20"]}
            pcbX="5.700014mm"
            pcbY="-2.238121mm"
            width="1.499997mm"
            height="0.2999994mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin21"]}
            pcbX="5.700014mm"
            pcbY="-1.738249mm"
            width="1.499997mm"
            height="0.2999994mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin22"]}
            pcbX="5.700014mm"
            pcbY="-1.238123mm"
            width="1.499997mm"
            height="0.2999994mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin23"]}
            pcbX="5.700014mm"
            pcbY="-0.738251mm"
            width="1.499997mm"
            height="0.2999994mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin24"]}
            pcbX="5.700014mm"
            pcbY="-0.238125mm"
            width="1.499997mm"
            height="0.2999994mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin25"]}
            pcbX="5.700014mm"
            pcbY="0.261747mm"
            width="1.499997mm"
            height="0.2999994mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin26"]}
            pcbX="5.700014mm"
            pcbY="0.761873mm"
            width="1.499997mm"
            height="0.2999994mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin27"]}
            pcbX="5.700014mm"
            pcbY="1.261745mm"
            width="1.499997mm"
            height="0.2999994mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin28"]}
            pcbX="5.700014mm"
            pcbY="1.761871mm"
            width="1.499997mm"
            height="0.2999994mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin29"]}
            pcbX="5.700014mm"
            pcbY="2.261743mm"
            width="1.499997mm"
            height="0.2999994mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin30"]}
            pcbX="5.700014mm"
            pcbY="2.761869mm"
            width="1.499997mm"
            height="0.2999994mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin31"]}
            pcbX="5.700014mm"
            pcbY="3.261741mm"
            width="1.499997mm"
            height="0.2999994mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin32"]}
            pcbX="5.700014mm"
            pcbY="3.761867mm"
            width="1.499997mm"
            height="0.2999994mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin33"]}
            pcbX="3.750056mm"
            pcbY="5.688203mm"
            width="0.2999994mm"
            height="1.499997mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin34"]}
            pcbX="3.24993mm"
            pcbY="5.688203mm"
            width="0.2999994mm"
            height="1.499997mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin35"]}
            pcbX="2.750058mm"
            pcbY="5.688203mm"
            width="0.2999994mm"
            height="1.499997mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin36"]}
            pcbX="2.249932mm"
            pcbY="5.688203mm"
            width="0.2999994mm"
            height="1.499997mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin37"]}
            pcbX="1.75006mm"
            pcbY="5.688203mm"
            width="0.2999994mm"
            height="1.499997mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin38"]}
            pcbX="1.249934mm"
            pcbY="5.688203mm"
            width="0.2999994mm"
            height="1.499997mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin39"]}
            pcbX="0.750062mm"
            pcbY="5.688203mm"
            width="0.2999994mm"
            height="1.499997mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin40"]}
            pcbX="0.249936mm"
            pcbY="5.688203mm"
            width="0.2999994mm"
            height="1.499997mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin41"]}
            pcbX="-0.249936mm"
            pcbY="5.688203mm"
            width="0.2999994mm"
            height="1.499997mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin42"]}
            pcbX="-0.750062mm"
            pcbY="5.688203mm"
            width="0.2999994mm"
            height="1.499997mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin43"]}
            pcbX="-1.249934mm"
            pcbY="5.688203mm"
            width="0.2999994mm"
            height="1.499997mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin44"]}
            pcbX="-1.75006mm"
            pcbY="5.688203mm"
            width="0.2999994mm"
            height="1.499997mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin45"]}
            pcbX="-2.249932mm"
            pcbY="5.688203mm"
            width="0.2999994mm"
            height="1.499997mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin46"]}
            pcbX="-2.750058mm"
            pcbY="5.688203mm"
            width="0.2999994mm"
            height="1.499997mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin47"]}
            pcbX="-3.24993mm"
            pcbY="5.688203mm"
            width="0.2999994mm"
            height="1.499997mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin48"]}
            pcbX="-3.750056mm"
            pcbY="5.688203mm"
            width="0.2999994mm"
            height="1.499997mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin49"]}
            pcbX="-5.700014mm"
            pcbY="3.761867mm"
            width="1.499997mm"
            height="0.2999994mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin50"]}
            pcbX="-5.700014mm"
            pcbY="3.261741mm"
            width="1.499997mm"
            height="0.2999994mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin51"]}
            pcbX="-5.700014mm"
            pcbY="2.761869mm"
            width="1.499997mm"
            height="0.2999994mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin52"]}
            pcbX="-5.700014mm"
            pcbY="2.261743mm"
            width="1.499997mm"
            height="0.2999994mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin53"]}
            pcbX="-5.700014mm"
            pcbY="1.761871mm"
            width="1.499997mm"
            height="0.2999994mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin54"]}
            pcbX="-5.700014mm"
            pcbY="1.261745mm"
            width="1.499997mm"
            height="0.2999994mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin55"]}
            pcbX="-5.700014mm"
            pcbY="0.761873mm"
            width="1.499997mm"
            height="0.2999994mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin56"]}
            pcbX="-5.700014mm"
            pcbY="0.261747mm"
            width="1.499997mm"
            height="0.2999994mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin57"]}
            pcbX="-5.700014mm"
            pcbY="-0.238125mm"
            width="1.499997mm"
            height="0.2999994mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin58"]}
            pcbX="-5.700014mm"
            pcbY="-0.738251mm"
            width="1.499997mm"
            height="0.2999994mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin59"]}
            pcbX="-5.700014mm"
            pcbY="-1.238123mm"
            width="1.499997mm"
            height="0.2999994mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin60"]}
            pcbX="-5.700014mm"
            pcbY="-1.738249mm"
            width="1.499997mm"
            height="0.2999994mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin61"]}
            pcbX="-5.700014mm"
            pcbY="-2.238121mm"
            width="1.499997mm"
            height="0.2999994mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin62"]}
            pcbX="-5.700014mm"
            pcbY="-2.738247mm"
            width="1.499997mm"
            height="0.2999994mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin63"]}
            pcbX="-5.700014mm"
            pcbY="-3.238119mm"
            width="1.499997mm"
            height="0.2999994mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin64"]}
            pcbX="-5.700014mm"
            pcbY="-3.738245mm"
            width="1.499997mm"
            height="0.2999994mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <silkscreenpath
            route={[
              { x: -4.999989999999997, y: -4.119397400000011 },
              { x: -4.999964599999998, y: -4.119397400000011 },
              { x: -4.131183000000021, y: -4.9881790000000095 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 4.999989999999968, y: 5.011800999999991 },
              { x: 4.131208399999991, y: 5.011800999999991 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 4.999989999999968, y: 5.011800999999991 },
              { x: 4.999989999999968, y: 4.142993999999987 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -4.999989999999997, y: 4.142993999999987 },
              { x: -4.999989999999997, y: 5.011800999999991 },
              { x: -4.131183000000021, y: 5.011800999999991 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -4.131183000000021, y: -4.9881790000000095 },
              { x: -4.999989999999997, y: -4.9881790000000095 },
              { x: -4.999989999999997, y: -4.119397400000011 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 4.999989999999968, y: -4.119397400000011 },
              { x: 4.999989999999968, y: -4.9881790000000095 },
              { x: 4.131182999999993, y: -4.9881790000000095 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -4.2500042000000064, y: 4.261815199999987 },
              { x: -4.2500042000000064, y: -4.238193200000012 },
              { x: 4.2500042000000064, y: -4.238193200000012 },
              { x: 4.2500042000000064, y: 4.261815199999987 },
              { x: -4.2500042000000064, y: 4.261815199999987 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -3.2994600000000105, y: -3.013329000000013 },
              { x: -3.510394378607913, y: -2.9241206405700666 },
              { x: -3.5969167117677614, y: -2.712070341500585 },
              { x: -3.508602117039061, y: -2.500760200170852 },
              { x: -3.2969200000000285, y: -2.413340952880887 },
              { x: -3.0852378829609677, y: -2.500760200170852 },
              { x: -2.996923288232267, y: -2.712070341500585 },
              { x: -3.0834456213921158, y: -2.9241206405700666 },
              { x: -3.294380000000018, y: -3.013329000000013 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -4.361256200000014, y: -5.47817040000001 },
              { x: -4.509997255997689, y: -5.327528370296079 },
              { x: -4.359986200000009, y: -5.178150975985275 },
              { x: -4.209975144002357, y: -5.327528370296079 },
              { x: -4.3587162000000035, y: -5.47817040000001 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="0mm"
            pcbY="7.285611mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -6.549200000000013, y: 6.535610999999989 },
              { x: 6.549199999999985, y: 6.535610999999989 },
              { x: 6.549199999999985, y: -6.715189000000009 },
              { x: -6.549200000000013, y: -6.715189000000009 },
              { x: -6.549200000000013, y: 6.535610999999989 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C22389960.obj?uuid=7e9b9111dcfd48d3add0eab11d882721",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C22389960.step?uuid=7e9b9111dcfd48d3add0eab11d882721",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: -0.011810999999994465, z: 0.000795 },
      }}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["VDD", "VSS", "VCORE", "NRST"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["PA2", "PA0", "PA1", "PA19", "PA20"],
        },
      }}
      schPinStyle={{
        VDD: {
          marginTop: -0.5,
        },
        VSS: {
          marginTop: 1.2,
        },
        VCORE: {
          marginTop: 0.3,
        },
        NRST: {
          marginTop: 1.5,
        },
        PA2: {
          marginTop: 0.4,
        },
        PA0: {
          marginTop: 1.9,
        },
        PA1: {
          marginTop: 0.3,
        },
        PA19: {
          marginTop: 1.2,
        },
        PA20: {
          marginTop: 0.3,
        },
      }}
      schHeight={5.3}
      {...props}
    />
  );
};
