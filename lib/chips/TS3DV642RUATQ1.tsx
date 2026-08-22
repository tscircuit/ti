import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VCC"],
  pin2: ["EN"],
  pin3: ["SCL"],
  pin4: ["SDA"],
  pin5: ["D0_POS"],
  pin6: ["D0_NEG"],
  pin7: ["D1_POS"],
  pin8: ["D1_NEG"],
  pin9: ["NC2"],
  pin10: ["D2_POS"],
  pin11: ["D2_NEG"],
  pin12: ["D3_POS"],
  pin13: ["D3_NEG"],
  pin14: ["HPD"],
  pin15: ["CEC"],
  pin16: ["SEL1"],
  pin17: ["SEL2"],
  pin18: ["CEC_A"],
  pin19: ["HPD_A"],
  pin20: ["CEC_B"],
  pin21: ["HPD_B"],
  pin22: ["D3_N_B"],
  pin23: ["D3_P_B"],
  pin24: ["D2_N_B"],
  pin25: ["D2_P_B"],
  pin26: ["D1_N_B"],
  pin27: ["D1_P_B"],
  pin28: ["D0_N_B"],
  pin29: ["D0_P_B"],
  pin30: ["NC1"],
  pin31: ["D3_N_A"],
  pin32: ["D3_P_A"],
  pin33: ["D2_N_A"],
  pin34: ["D2_P_A"],
  pin35: ["D1_N_A"],
  pin36: ["D1_P_A"],
  pin37: ["D0_N_A"],
  pin38: ["D0_P_A"],
  pin39: ["SDA_B"],
  pin40: ["SCL_B"],
  pin41: ["SDA_A"],
  pin42: ["SCL_A"],
  pin43: ["GND"],
} as const;

const pinAttributes = {
  pin1: { requiresPower: true },
  pin9: { doNotConnect: true },
  pin30: { doNotConnect: true },
  pin43: { requiresGround: true },
} as const;

export const TS3DV642RUATQ1 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C3226203"],
      }}
      manufacturerPartNumber="TS3DV642RUATQ1"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin43"]}
            pcbX="0.000127mm"
            pcbY="-0.000127mm"
            width="7.5499976mm"
            height="2.0500086mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin42"]}
            pcbX="-4.407535mm"
            pcbY="-0.750189mm"
            width="0.6649974mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin41"]}
            pcbX="-4.407535mm"
            pcbY="-0.250063mm"
            width="0.6649974mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin40"]}
            pcbX="-4.407535mm"
            pcbY="0.249809mm"
            width="0.6649974mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin39"]}
            pcbX="-4.407535mm"
            pcbY="0.749935mm"
            width="0.6649974mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin38"]}
            pcbX="-3.999865mm"
            pcbY="1.657477mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin37"]}
            pcbX="-3.499993mm"
            pcbY="1.657477mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin36"]}
            pcbX="-2.999867mm"
            pcbY="1.657477mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin35"]}
            pcbX="-2.499995mm"
            pcbY="1.657477mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin34"]}
            pcbX="-1.999869mm"
            pcbY="1.657477mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin33"]}
            pcbX="-1.499997mm"
            pcbY="1.657477mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin32"]}
            pcbX="-0.999871mm"
            pcbY="1.657477mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin31"]}
            pcbX="-0.499999mm"
            pcbY="1.657477mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin30"]}
            pcbX="0.000127mm"
            pcbY="1.657477mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin29"]}
            pcbX="0.499999mm"
            pcbY="1.657477mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin28"]}
            pcbX="1.000125mm"
            pcbY="1.657477mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin27"]}
            pcbX="1.499997mm"
            pcbY="1.657477mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin26"]}
            pcbX="2.000123mm"
            pcbY="1.657477mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin25"]}
            pcbX="2.499995mm"
            pcbY="1.657477mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin24"]}
            pcbX="3.000121mm"
            pcbY="1.657477mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin23"]}
            pcbX="3.499993mm"
            pcbY="1.657477mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin22"]}
            pcbX="4.000119mm"
            pcbY="1.657477mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin21"]}
            pcbX="4.407535mm"
            pcbY="0.749935mm"
            width="0.6649974mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin20"]}
            pcbX="4.407535mm"
            pcbY="0.249809mm"
            width="0.6649974mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin19"]}
            pcbX="4.407535mm"
            pcbY="-0.250063mm"
            width="0.6649974mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="4.407535mm"
            pcbY="-0.750189mm"
            width="0.6649974mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="4.000119mm"
            pcbY="-1.657477mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="3.499993mm"
            pcbY="-1.657477mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="3.000121mm"
            pcbY="-1.657477mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="2.499995mm"
            pcbY="-1.657477mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="2.000123mm"
            pcbY="-1.657477mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="1.499997mm"
            pcbY="-1.657477mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="1.000125mm"
            pcbY="-1.657477mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="0.499999mm"
            pcbY="-1.657477mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="0.000127mm"
            pcbY="-1.657477mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-0.499999mm"
            pcbY="-1.657477mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-0.999871mm"
            pcbY="-1.657477mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-1.499997mm"
            pcbY="-1.657477mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-1.999869mm"
            pcbY="-1.657477mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-2.499995mm"
            pcbY="-1.657477mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-2.999867mm"
            pcbY="-1.657477mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-3.499993mm"
            pcbY="-1.657477mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="-3.999865mm"
            pcbY="-1.657477mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -4.576190999999994, y: 1.080389000000082 },
              { x: -4.576190999999994, y: 1.8260821999999735 },
              { x: -4.330496800000105, y: 1.8260821999999735 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 4.576241799999934, y: 1.080389000000082 },
              { x: 4.576241799999934, y: 1.8260821999999735 },
              { x: 4.330547600000045, y: 1.8260821999999735 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -4.576190999999994, y: -1.0805921999999555 },
              { x: -4.576190999999994, y: -1.8262853999999606 },
              { x: -4.330496800000105, y: -1.8262853999999606 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 4.576241799999934, y: -1.0805921999999555 },
              { x: 4.576241799999934, y: -1.8262853999999606 },
              { x: 4.330547600000045, y: -1.8262853999999606 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -3.924935000000005, y: -2.290190999999936 },
              { x: -3.9274881778361532, y: -2.3095843110494343 },
              { x: -3.9349737164944827, y: -2.3276559999999336 },
              { x: -3.946881488885765, y: -2.3431745111142845 },
              { x: -3.962400000000116, y: -2.355082283505567 },
              { x: -3.9804716889506153, y: -2.3625678221638964 },
              { x: -3.9998650000001135, y: -2.3651210000000447 },
              { x: -4.019258311049612, y: -2.3625678221638964 },
              { x: -4.037329999999997, y: -2.355082283505567 },
              { x: -4.052848511114348, y: -2.3431745111142845 },
              { x: -4.064756283505631, y: -2.3276559999999336 },
              { x: -4.07224182216396, y: -2.3095843110494343 },
              { x: -4.074795000000108, y: -2.290190999999936 },
              { x: -4.07224182216396, y: -2.270797688950438 },
              { x: -4.064756283505631, y: -2.2527259999999387 },
              { x: -4.052848511114348, y: -2.2372074888857014 },
              { x: -4.037329999999997, y: -2.225299716494419 },
              { x: -4.019258311049612, y: -2.2178141778360896 },
              { x: -3.9998650000001135, y: -2.2152609999999413 },
              { x: -3.9804716889506153, y: -2.2178141778360896 },
              { x: -3.962400000000116, y: -2.225299716494419 },
              { x: -3.946881488885765, y: -2.2372074888857014 },
              { x: -3.9349737164944827, y: -2.2527259999999387 },
              { x: -3.9274881778361532, y: -2.270797688950438 },
              { x: -3.924935000000005, y: -2.290190999999936 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="0.008509mm"
            pcbY="2.994789mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -4.978590999999938, y: 2.244788999999969 },
              { x: 4.995608999999945, y: 2.244788999999969 },
              { x: 4.995608999999945, y: -2.5986109999998916 },
              { x: -4.978590999999938, y: -2.5986109999998916 },
              { x: -4.978590999999938, y: 2.244788999999969 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C3226203.obj?uuid=534c77f4186a49ceb297beee1f7e8304",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C3226203.step?uuid=534c77f4186a49ceb297beee1f7e8304",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: -0.000025399999913133797,
          y: 0.0001142999999501626,
          z: -0.02,
        },
      }}
      {...props}
    />
  );
};

export default TS3DV642RUATQ1;
