import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["GPIO29"],
  pin2: ["GPIO28"],
  pin3: ["XRSn"],
  pin4: ["VDD1"],
  pin5: ["VSS1"],
  pin6: ["A6"],
  pin7: ["B2_C6"],
  pin8: ["A3_B3_C5_VDAC"],
  pin9: ["A2_B6_C9"],
  pin10: ["A15_B9_C7"],
  pin11: ["A14_B14_C4"],
  pin12: ["A11_B10_C0"],
  pin13: ["A5_B12_C2"],
  pin14: ["A1_B7_DACB_OUT"],
  pin15: ["A0_B15_C15_DACA_OUT"],
  pin16: ["VREFHI"],
  pin17: ["VREFLO"],
  pin18: ["A12_C1"],
  pin19: ["A7_C3"],
  pin20: ["A8_B0_C11"],
  pin21: ["VSSA"],
  pin22: ["VDDA"],
  pin23: ["A4_B8_C14"],
  pin24: ["A9_B4_C8"],
  pin25: ["A10_B1_C10"],
  pin26: ["VSS2"],
  pin27: ["VDD2"],
  pin28: ["VDDIO1"],
  pin29: ["GPIO13"],
  pin30: ["GPIO12"],
  pin31: ["GPIO11"],
  pin32: ["GPIO33"],
  pin33: ["GPIO16"],
  pin34: ["GPIO17"],
  pin35: ["GPIO24"],
  pin36: ["TCK"],
  pin37: ["pin37"],
  pin38: ["TMS"],
  pin39: ["pin39"],
  pin40: ["GPIO32"],
  pin41: ["GPIO18_X2"],
  pin42: ["GPIO19_X1"],
  pin43: ["VDDIO2"],
  pin44: ["VDD3"],
  pin45: ["VSS3"],
  pin46: ["GPIO39"],
  pin47: ["GPIO8"],
  pin48: ["GPIO4"],
  pin49: ["GPIO3"],
  pin50: ["GPIO2"],
  pin51: ["GPIO1"],
  pin52: ["GPIO0"],
  pin53: ["GPIO40"],
  pin54: ["GPIO23"],
  pin55: ["GPIO41"],
  pin56: ["GPIO22"],
  pin57: ["GPIO7"],
  pin58: ["VSS4"],
  pin59: ["VDD4"],
  pin60: ["VDDIO3"],
  pin61: ["GPIO5"],
  pin62: ["GPIO9"],
  pin63: ["GPIO10"],
  pin64: ["GPIO6"],
} as const;

const pinAttributes = {
  pin4: { requiresPower: true },
  pin5: { requiresGround: true },
  pin22: { requiresPower: true },
  pin26: { requiresGround: true },
  pin27: { requiresPower: true },
  pin44: { requiresPower: true },
  pin45: { requiresGround: true },
  pin58: { requiresGround: true },
  pin59: { requiresPower: true },
} as const;

export const F280039CSPMR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C20345419"],
      }}
      manufacturerPartNumber="F280039CSPMR"
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
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C20345419.obj?uuid=7e9b9111dcfd48d3add0eab11d882721",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C20345419.step?uuid=7e9b9111dcfd48d3add0eab11d882721",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: -0.011810999999994465, z: 0.000795 },
      }}
      {...props}
    />
  );
};

export default F280039CSPMR;
