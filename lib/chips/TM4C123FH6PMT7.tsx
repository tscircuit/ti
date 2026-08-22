import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["PB6"],
  pin2: ["VDDA"],
  pin3: ["GNDA"],
  pin4: ["PB7"],
  pin5: ["PF4"],
  pin6: ["PE3"],
  pin7: ["PE2"],
  pin8: ["PE1"],
  pin9: ["PE0"],
  pin10: ["PD7"],
  pin11: ["VDD1"],
  pin12: ["GND1"],
  pin13: ["PC7"],
  pin14: ["PC6"],
  pin15: ["PC5"],
  pin16: ["PC4"],
  pin17: ["pin17"],
  pin18: ["pin18"],
  pin19: ["pin19"],
  pin20: ["pin20"],
  pin21: ["pin21"],
  pin22: ["pin22"],
  pin23: ["PA6"],
  pin24: ["PA7"],
  pin25: ["VDDC1"],
  pin26: ["VDD2"],
  pin27: ["GND2"],
  pin28: ["PF0"],
  pin29: ["PF1"],
  pin30: ["PF2"],
  pin31: ["PF3"],
  pin32: ["PG5"],
  pin33: ["PG4"],
  pin34: ["PG3"],
  pin35: ["PG2"],
  pin36: ["PG1"],
  pin37: ["PG0"],
  pin38: ["RST"],
  pin39: ["GND3"],
  pin40: ["OSC0"],
  pin41: ["OSC1"],
  pin42: ["VDD3"],
  pin43: ["PD4"],
  pin44: ["PD5"],
  pin45: ["pin45"],
  pin46: ["pin46"],
  pin47: ["pin47"],
  pin48: ["pin48"],
  pin49: ["pin49"],
  pin50: ["pin50"],
  pin51: ["pin51"],
  pin52: ["pin52"],
  pin53: ["PD6"],
  pin54: ["VDD4"],
  pin55: ["GND4"],
  pin56: ["VDDC2"],
  pin57: ["PB5"],
  pin58: ["PB4"],
  pin59: ["PE4"],
  pin60: ["PE5"],
  pin61: ["PD0"],
  pin62: ["PD1"],
  pin63: ["PD2"],
  pin64: ["PD3"],
} as const;

const pinAttributes = {
  pin2: { requiresPower: true },
  pin11: { requiresPower: true },
  pin12: { requiresGround: true },
  pin26: { requiresPower: true },
  pin27: { requiresGround: true },
  pin39: { requiresGround: true },
  pin42: { requiresPower: true },
  pin54: { requiresPower: true },
  pin55: { requiresGround: true },
} as const;

export const TM4C123FH6PMT7 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C1343273"],
      }}
      manufacturerPartNumber="TM4C123FH6PMT7"
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
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C1343273.obj?uuid=7e9b9111dcfd48d3add0eab11d882721",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C1343273.step?uuid=7e9b9111dcfd48d3add0eab11d882721",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: -0.011810999999994465, z: 0.000795 },
      }}
      {...props}
    />
  );
};

export default TM4C123FH6PMT7;
