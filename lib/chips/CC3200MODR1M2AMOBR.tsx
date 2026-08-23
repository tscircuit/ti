import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["GND2"],
  pin2: ["GND1"],
  pin3: ["GPIO10"],
  pin4: ["GPIO11"],
  pin5: ["GPIO14"],
  pin6: ["GPIO15"],
  pin7: ["GPIO16"],
  pin8: ["GPIO17"],
  pin9: ["GPIO12"],
  pin10: ["GPIO13"],
  pin11: ["GPIO22"],
  pin12: ["JTAG_TDI"],
  pin13: ["NC1"],
  pin14: ["NC2"],
  pin15: ["NC3"],
  pin16: ["GND3"],
  pin17: ["NC7"],
  pin18: ["JTAG_TDO"],
  pin19: ["GPIO28"],
  pin20: ["NC8"],
  pin21: ["JTAG_TCK"],
  pin22: ["JTAG_TMS"],
  pin23: ["SOP2"],
  pin24: ["SOP1"],
  pin25: ["ANTSEL1"],
  pin26: ["ANTSEL2"],
  pin27: ["GND9"],
  pin28: ["GND4"],
  pin29: ["NC4"],
  pin30: ["GND5"],
  pin31: ["RF_BG"],
  pin32: ["GND6"],
  pin33: ["NC5"],
  pin34: ["SOP0"],
  pin35: ["nRESET"],
  pin36: ["VBAT_DCDC_ANA"],
  pin37: ["VBAT_DCDC_PA"],
  pin38: ["GND8"],
  pin39: ["VDD_ANA2"],
  pin40: ["VBAT_DCDC_DIG_IO"],
  pin41: ["NC6"],
  pin42: ["GPIO30"],
  pin43: ["GND7"],
  pin44: ["GPIO0"],
  pin45: ["NC9"],
  pin46: ["GPIO1"],
  pin47: ["GPIO2"],
  pin48: ["GPIO3"],
  pin49: ["GPIO4"],
  pin50: ["GPIO5"],
  pin51: ["GPIO6"],
  pin52: ["GPIO7"],
  pin53: ["GPIO8"],
  pin54: ["GPIO9"],
  pin55: ["GND10"],
  pin56: ["GND11"],
  pin57: ["GND12"],
  pin58: ["GND13"],
  pin59: ["GND14"],
  pin60: ["GND15"],
  pin61: ["GND16"],
  pin62: ["GND17"],
  pin63: ["GND18"],
} as const;

const pinAttributes = {
  pin1: { requiresGround: true },
  pin2: { requiresGround: true },
  pin13: { doNotConnect: true },
  pin14: { doNotConnect: true },
  pin15: { doNotConnect: true },
  pin16: { requiresGround: true },
  pin17: { doNotConnect: true },
  pin20: { doNotConnect: true },
  pin27: { requiresGround: true },
  pin28: { requiresGround: true },
  pin29: { doNotConnect: true },
  pin30: { requiresGround: true },
  pin32: { requiresGround: true },
  pin33: { doNotConnect: true },
  pin38: { requiresGround: true },
  pin41: { doNotConnect: true },
  pin43: { requiresGround: true },
  pin45: { doNotConnect: true },
  pin55: { requiresGround: true },
  pin56: { requiresGround: true },
  pin57: { requiresGround: true },
  pin58: { requiresGround: true },
  pin59: { requiresGround: true },
  pin60: { requiresGround: true },
  pin61: { requiresGround: true },
  pin62: { requiresGround: true },
  pin63: { requiresGround: true },
} as const;

export const CC3200MODR1M2AMOBR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2151603"],
      }}
      manufacturerPartNumber="CC3200MODR1M2AMOBR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin8"]}
            pcbX="-0.6350127mm"
            pcbY="-8.0499966mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-1.9050127mm"
            pcbY="-8.0499966mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-3.1750127mm"
            pcbY="-8.0499966mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-4.4450127mm"
            pcbY="-8.0499966mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-5.7150127mm"
            pcbY="-8.0499966mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-6.9850127mm"
            pcbY="-8.0499966mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-8.2550127mm"
            pcbY="-8.0499966mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="-9.5250127mm"
            pcbY="-8.0499966mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="0.6349873mm"
            pcbY="-8.0499966mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="1.9049873mm"
            pcbY="-8.0499966mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="3.1749873mm"
            pcbY="-8.0499966mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="4.4449873mm"
            pcbY="-8.0499966mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="5.7149873mm"
            pcbY="-8.0499966mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="6.9849873mm"
            pcbY="-8.0499966mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="8.2549873mm"
            pcbY="-8.0499966mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="9.5249873mm"
            pcbY="-8.0499966mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin28"]}
            pcbX="9.5249873mm"
            pcbY="8.0499966mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin29"]}
            pcbX="8.2549873mm"
            pcbY="8.0499966mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin30"]}
            pcbX="6.9849873mm"
            pcbY="8.0499966mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin31"]}
            pcbX="5.7149873mm"
            pcbY="8.0499966mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin32"]}
            pcbX="4.4449873mm"
            pcbY="8.0499966mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin33"]}
            pcbX="3.1749873mm"
            pcbY="8.0499966mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin34"]}
            pcbX="1.9049873mm"
            pcbY="8.0499966mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin35"]}
            pcbX="0.6349873mm"
            pcbY="8.0499966mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin43"]}
            pcbX="-9.5250127mm"
            pcbY="8.0499966mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin42"]}
            pcbX="-8.2550127mm"
            pcbY="8.0499966mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin41"]}
            pcbX="-6.9850127mm"
            pcbY="8.0499966mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin40"]}
            pcbX="-5.7150127mm"
            pcbY="8.0499966mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin39"]}
            pcbX="-4.4450127mm"
            pcbY="8.0499966mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin38"]}
            pcbX="-3.1750127mm"
            pcbY="8.0499966mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin37"]}
            pcbX="-1.9050127mm"
            pcbY="8.0499966mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin36"]}
            pcbX="-0.6350127mm"
            pcbY="8.0499966mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin19"]}
            pcbX="9.5499809mm"
            pcbY="-3.8049962mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="9.5499809mm"
            pcbY="-5.0749962mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="9.5499809mm"
            pcbY="-6.3449962mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin20"]}
            pcbX="9.5499809mm"
            pcbY="-2.54mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin21"]}
            pcbX="9.5499809mm"
            pcbY="-1.27mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin22"]}
            pcbX="9.5499809mm"
            pcbY="-0mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin23"]}
            pcbX="9.5499809mm"
            pcbY="1.27mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin24"]}
            pcbX="9.5499809mm"
            pcbY="2.54mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin25"]}
            pcbX="9.5499809mm"
            pcbY="3.81mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin26"]}
            pcbX="9.5499809mm"
            pcbY="5.08mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin27"]}
            pcbX="9.5499809mm"
            pcbY="6.35mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin52"]}
            pcbX="-9.5500063mm"
            pcbY="-3.8049962mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin53"]}
            pcbX="-9.5500063mm"
            pcbY="-5.0749962mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin54"]}
            pcbX="-9.5500063mm"
            pcbY="-6.3449962mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin51"]}
            pcbX="-9.5500063mm"
            pcbY="-2.54mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin50"]}
            pcbX="-9.5500063mm"
            pcbY="-1.27mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin49"]}
            pcbX="-9.5500063mm"
            pcbY="-0mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin48"]}
            pcbX="-9.5500063mm"
            pcbY="1.27mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin47"]}
            pcbX="-9.5500063mm"
            pcbY="2.54mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin46"]}
            pcbX="-9.5500063mm"
            pcbY="3.81mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin45"]}
            pcbX="-9.5500063mm"
            pcbY="5.08mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin44"]}
            pcbX="-9.5500063mm"
            pcbY="6.35mm"
            width="0.810006mm"
            height="0.810006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin55"]}
            pcbX="-4.5000037mm"
            pcbY="-4.499991mm"
            width="1.999996mm"
            height="1.999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin56"]}
            pcbX="-1.5000097mm"
            pcbY="-4.499991mm"
            width="1.999996mm"
            height="1.999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin57"]}
            pcbX="1.4999843mm"
            pcbY="-4.499991mm"
            width="1.999996mm"
            height="1.999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin58"]}
            pcbX="-4.5000037mm"
            pcbY="-1.499997mm"
            width="1.999996mm"
            height="1.999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin59"]}
            pcbX="-1.5000097mm"
            pcbY="-1.499997mm"
            width="1.999996mm"
            height="1.999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin60"]}
            pcbX="1.4999843mm"
            pcbY="-1.499997mm"
            width="1.999996mm"
            height="1.999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin61"]}
            pcbX="-4.5000037mm"
            pcbY="1.499997mm"
            width="1.999996mm"
            height="1.999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin62"]}
            pcbX="-1.5000097mm"
            pcbY="1.499997mm"
            width="1.999996mm"
            height="1.999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin63"]}
            pcbX="1.4999843mm"
            pcbY="1.499997mm"
            width="1.999996mm"
            height="1.999996mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -9.402000500000213, y: -10.03300000000013 },
              { x: -9.410519459132729, y: -10.097707918868082 },
              { x: -9.43549578354407, y: -10.15800610000008 },
              { x: -9.475227378000682, y: -10.209785321999448 },
              { x: -9.52700660000005, y: -10.249516916456173 },
              { x: -9.587304781132275, y: -10.2744932408674 },
              { x: -9.652012700000114, y: -10.283012200000144 },
              { x: -9.716720618868067, y: -10.2744932408674 },
              { x: -9.777018800000178, y: -10.249516916456173 },
              { x: -9.828798021999432, y: -10.209785321999448 },
              { x: -9.868529616456271, y: -10.15800610000008 },
              { x: -9.893505940867499, y: -10.097707918868082 },
              { x: -9.902024900000129, y: -10.03300000000013 },
              { x: -9.893505940867499, y: -9.968292081132063 },
              { x: -9.868529616456271, y: -9.907993900000065 },
              { x: -9.828798021999432, y: -9.856214678000697 },
              { x: -9.777018800000178, y: -9.816483083543972 },
              { x: -9.716720618868067, y: -9.791506759132744 },
              { x: -9.652012700000114, y: -9.7829878 },
              { x: -9.587304781132275, y: -9.791506759132744 },
              { x: -9.52700660000005, y: -9.816483083543972 },
              { x: -9.475227378000682, y: -9.856214678000697 },
              { x: -9.43549578354407, y: -9.907993900000065 },
              { x: -9.410519459132729, y: -9.968292081132063 },
              { x: -9.402000500000213, y: -10.03300000000013 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.0127127mm"
            pcbY="9.7376mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -10.511612700000114, y: 8.98759999999993 },
              { x: 10.486187299999756, y: 8.98759999999993 },
              { x: 10.486187299999756, y: -10.537000000000148 },
              { x: -10.511612700000114, y: -10.537000000000148 },
              { x: -10.511612700000114, y: 8.98759999999993 },
            ]}
          />
        </footprint>
      }
      {...props}
    />
  );
};

export default CC3200MODR1M2AMOBR;
