import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VDD181"],
  pin2: ["VDDIO1"],
  pin3: ["VDDIO2"],
  pin4: ["XRS"],
  pin5: ["PA0_GPIO0"],
  pin6: ["PA1_GPIO1"],
  pin7: ["PA2_GPIO2"],
  pin8: ["PA3_GPIO3"],
  pin9: ["PA4_GPIO4"],
  pin10: ["VDDIO3"],
  pin11: ["VDD121"],
  pin12: ["PA5_GPIO5"],
  pin13: ["PA6_GPIO6"],
  pin14: ["PA7_GPIO7"],
  pin15: ["PB0_GPIO8"],
  pin16: ["FLT1"],
  pin17: ["VDDIO4"],
  pin18: ["PB1_GPIO9"],
  pin19: ["PB2_GPIO10"],
  pin20: ["PB3_GPIO11"],
  pin21: ["FLT2"],
  pin22: ["PE6_GPIO30"],
  pin23: ["PE7_GPIO31"],
  pin24: ["VDD122"],
  pin25: ["VDDIO5"],
  pin26: ["PB6_GPIO14"],
  pin27: ["PB7_GPIO15"],
  pin28: ["PD2_GPIO18"],
  pin29: ["PD3_GPIO19"],
  pin30: ["PB4_GPIO12"],
  pin31: ["PB5_GPIO13"],
  pin32: ["PE2_GPIO26"],
  pin33: ["PE3_GPIO27"],
  pin34: ["VDDIO6"],
  pin35: ["PH3_GPIO51"],
  pin36: ["PH2_GPIO50"],
  pin37: ["PC4_GPIO68"],
  pin38: ["PC5_GPIO69"],
  pin39: ["PC6_GPIO70"],
  pin40: ["PC7_GPIO71"],
  pin41: ["PH0_GPIO48"],
  pin42: ["PH1_GPIO49"],
  pin43: ["PE0_GPIO24"],
  pin44: ["VDDIO7"],
  pin45: ["PE1_GPIO25"],
  pin46: ["PH4_GPIO52"],
  pin47: ["PH5_GPIO53"],
  pin48: ["PF4_GPIO36"],
  pin49: ["PG0_GPIO40"],
  pin50: ["PG1_GPIO41"],
  pin51: ["PF5_GPIO37"],
  pin52: ["PG7_GPIO47"],
  pin53: ["PJ6_GPIO62"],
  pin54: ["VDDIO8"],
  pin55: ["VDD123"],
  pin56: ["PJ5_GPIO61"],
  pin57: ["PJ4_GPIO60"],
  pin58: ["VDD124"],
  pin59: ["VDDIO9"],
  pin60: ["PJ3_GPIO59"],
  pin61: ["PJ2_GPIO58"],
  pin62: ["PJ1_GPIO57"],
  pin63: ["PJ0_GPIO56"],
  pin64: ["PD5_GPIO21"],
  pin65: ["PD4_GPIO20"],
  pin66: ["VDD125"],
  pin67: ["VDDIO10"],
  pin68: ["PD7_GPIO23"],
  pin69: ["PF6_GPIO38"],
  pin70: ["PG6_GPIO46"],
  pin71: ["PG2_GPIO42"],
  pin72: ["PG5_GPIO45"],
  pin73: ["PD6_GPIO22"],
  pin74: ["VDDIO11"],
  pin75: ["VDD126"],
  pin76: ["PE5_GPIO29"],
  pin77: ["PE4_GPIO28"],
  pin78: ["PG3_GPIO43"],
  pin79: ["PH6_GPIO54"],
  pin80: ["PH7_GPIO55"],
  pin81: ["PF3_GPIO35"],
  pin82: ["PF2_GPIO34"],
  pin83: ["EMU0"],
  pin84: ["TDO"],
  pin85: ["TRST"],
  pin86: ["EMU1"],
  pin87: ["TMS"],
  pin88: ["TDI"],
  pin89: ["TCK"],
  pin90: ["VDD127"],
  pin91: ["NC"],
  pin92: ["VDDIO12"],
  pin93: ["X1"],
  pin94: ["VSSOSC"],
  pin95: ["X2"],
  pin96: ["VDDIO13"],
  pin97: ["PJ7_GPIO63"],
  pin98: ["PD1_GPIO17"],
  pin99: ["VDD128"],
  pin100: ["VDDIO14"],
  pin101: ["VREG12EN"],
  pin102: ["PD0_GPIO16"],
  pin103: ["PF1_GPIO33"],
  pin104: ["PF0_GPIO32"],
  pin105: ["VDDIO15"],
  pin106: ["VDDIO16"],
  pin107: ["VDDIO17"],
  pin108: ["VDD182"],
  pin109: ["pin109"],
  pin110: ["GPIO134"],
  pin111: ["pin111"],
  pin112: ["pin112"],
  pin113: ["VREG18EN"],
  pin114: ["ADC1INB7"],
  pin115: ["ADC1INB4"],
  pin116: ["ADC1INB3"],
  pin117: ["ADC1INB0"],
  pin118: ["VSSA1"],
  pin119: ["VDDA1"],
  pin120: ["ADC1VREFHI"],
  pin121: ["ADC1INA0"],
  pin122: ["ADC1INA2"],
  pin123: ["ADC1INA3"],
  pin124: ["ADC1INA4"],
  pin125: ["ADC1INA6"],
  pin126: ["ADC1INA7"],
  pin127: ["ADC2INA7"],
  pin128: ["ADC2INA6"],
  pin129: ["ADC2INA4"],
  pin130: ["ADC2INA3"],
  pin131: ["ADC2INA2"],
  pin132: ["ADC2INA0"],
  pin133: ["ADC2VREFHI"],
  pin134: ["VDDA2"],
  pin135: ["VSSA2"],
  pin136: ["ADC2INB0"],
  pin137: ["ADC2INB3"],
  pin138: ["ADC2INB4"],
  pin139: ["ADC2INB7"],
  pin140: ["GPIO128"],
  pin141: ["pin141"],
  pin142: ["pin142"],
  pin143: ["pin143"],
  pin144: ["ARS"],
  pin145: ["EP"],
} as const;

const pinAttributes = {
  pin1: { requiresPower: true },
  pin11: { requiresPower: true },
  pin24: { requiresPower: true },
  pin55: { requiresPower: true },
  pin58: { requiresPower: true },
  pin66: { requiresPower: true },
  pin75: { requiresPower: true },
  pin90: { requiresPower: true },
  pin91: { doNotConnect: true },
  pin99: { requiresPower: true },
  pin108: { requiresPower: true },
  pin119: { requiresPower: true },
  pin134: { requiresPower: true },
} as const;

export const F28M35H52C1RFPQ = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C1338601"],
      }}
      manufacturerPartNumber="F28M35H52C1RFPQ"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-8.750046mm"
            pcbY="-10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-8.24992mm"
            pcbY="-10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-7.750048mm"
            pcbY="-10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-7.249922mm"
            pcbY="-10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-6.75005mm"
            pcbY="-10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-6.249924mm"
            pcbY="-10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-5.750052mm"
            pcbY="-10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-5.249926mm"
            pcbY="-10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="-4.750054mm"
            pcbY="-10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="-4.249928mm"
            pcbY="-10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="-3.750056mm"
            pcbY="-10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="-3.24993mm"
            pcbY="-10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="-2.750058mm"
            pcbY="-10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="-2.249932mm"
            pcbY="-10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="-1.75006mm"
            pcbY="-10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="-1.249934mm"
            pcbY="-10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="-0.750062mm"
            pcbY="-10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="-0.249936mm"
            pcbY="-10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin19"]}
            pcbX="0.249936mm"
            pcbY="-10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin20"]}
            pcbX="0.750062mm"
            pcbY="-10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin21"]}
            pcbX="1.249934mm"
            pcbY="-10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin22"]}
            pcbX="1.75006mm"
            pcbY="-10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin23"]}
            pcbX="2.249932mm"
            pcbY="-10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin24"]}
            pcbX="2.750058mm"
            pcbY="-10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin25"]}
            pcbX="3.24993mm"
            pcbY="-10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin26"]}
            pcbX="3.750056mm"
            pcbY="-10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin27"]}
            pcbX="4.249928mm"
            pcbY="-10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin28"]}
            pcbX="4.750054mm"
            pcbY="-10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin29"]}
            pcbX="5.249926mm"
            pcbY="-10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin30"]}
            pcbX="5.750052mm"
            pcbY="-10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin31"]}
            pcbX="6.249924mm"
            pcbY="-10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin32"]}
            pcbX="6.75005mm"
            pcbY="-10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin33"]}
            pcbX="7.249922mm"
            pcbY="-10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin34"]}
            pcbX="7.750048mm"
            pcbY="-10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin35"]}
            pcbX="8.24992mm"
            pcbY="-10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin36"]}
            pcbX="8.750046mm"
            pcbY="-10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin37"]}
            pcbX="10.54989mm"
            pcbY="-8.750046mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin38"]}
            pcbX="10.54989mm"
            pcbY="-8.24992mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin39"]}
            pcbX="10.54989mm"
            pcbY="-7.750048mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin40"]}
            pcbX="10.54989mm"
            pcbY="-7.249922mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin41"]}
            pcbX="10.54989mm"
            pcbY="-6.75005mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin42"]}
            pcbX="10.54989mm"
            pcbY="-6.249924mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin43"]}
            pcbX="10.54989mm"
            pcbY="-5.750052mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin44"]}
            pcbX="10.54989mm"
            pcbY="-5.249926mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin45"]}
            pcbX="10.54989mm"
            pcbY="-4.750054mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin46"]}
            pcbX="10.54989mm"
            pcbY="-4.249928mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin47"]}
            pcbX="10.54989mm"
            pcbY="-3.750056mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin48"]}
            pcbX="10.54989mm"
            pcbY="-3.24993mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin49"]}
            pcbX="10.54989mm"
            pcbY="-2.750058mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin50"]}
            pcbX="10.54989mm"
            pcbY="-2.249932mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin51"]}
            pcbX="10.54989mm"
            pcbY="-1.75006mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin52"]}
            pcbX="10.54989mm"
            pcbY="-1.249934mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin53"]}
            pcbX="10.54989mm"
            pcbY="-0.750062mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin54"]}
            pcbX="10.54989mm"
            pcbY="-0.249936mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin55"]}
            pcbX="10.54989mm"
            pcbY="0.249936mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin56"]}
            pcbX="10.54989mm"
            pcbY="0.750062mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin57"]}
            pcbX="10.54989mm"
            pcbY="1.249934mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin58"]}
            pcbX="10.54989mm"
            pcbY="1.75006mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin59"]}
            pcbX="10.54989mm"
            pcbY="2.249932mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin60"]}
            pcbX="10.54989mm"
            pcbY="2.750058mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin61"]}
            pcbX="10.54989mm"
            pcbY="3.24993mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin62"]}
            pcbX="10.54989mm"
            pcbY="3.750056mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin63"]}
            pcbX="10.54989mm"
            pcbY="4.249928mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin64"]}
            pcbX="10.54989mm"
            pcbY="4.750054mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin65"]}
            pcbX="10.54989mm"
            pcbY="5.249926mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin66"]}
            pcbX="10.54989mm"
            pcbY="5.750052mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin67"]}
            pcbX="10.54989mm"
            pcbY="6.249924mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin68"]}
            pcbX="10.54989mm"
            pcbY="6.75005mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin69"]}
            pcbX="10.54989mm"
            pcbY="7.249922mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin70"]}
            pcbX="10.54989mm"
            pcbY="7.750048mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin71"]}
            pcbX="10.54989mm"
            pcbY="8.24992mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin72"]}
            pcbX="10.54989mm"
            pcbY="8.750046mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin73"]}
            pcbX="8.750046mm"
            pcbY="10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin74"]}
            pcbX="8.24992mm"
            pcbY="10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin75"]}
            pcbX="7.750048mm"
            pcbY="10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin76"]}
            pcbX="7.249922mm"
            pcbY="10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin77"]}
            pcbX="6.75005mm"
            pcbY="10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin78"]}
            pcbX="6.249924mm"
            pcbY="10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin79"]}
            pcbX="5.750052mm"
            pcbY="10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin80"]}
            pcbX="5.249926mm"
            pcbY="10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin81"]}
            pcbX="4.750054mm"
            pcbY="10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin82"]}
            pcbX="4.249928mm"
            pcbY="10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin83"]}
            pcbX="3.750056mm"
            pcbY="10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin84"]}
            pcbX="3.24993mm"
            pcbY="10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin85"]}
            pcbX="2.750058mm"
            pcbY="10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin86"]}
            pcbX="2.249932mm"
            pcbY="10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin87"]}
            pcbX="1.75006mm"
            pcbY="10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin88"]}
            pcbX="1.249934mm"
            pcbY="10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin89"]}
            pcbX="0.750062mm"
            pcbY="10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin90"]}
            pcbX="0.249936mm"
            pcbY="10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin91"]}
            pcbX="-0.249936mm"
            pcbY="10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin92"]}
            pcbX="-0.750062mm"
            pcbY="10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin93"]}
            pcbX="-1.249934mm"
            pcbY="10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin94"]}
            pcbX="-1.75006mm"
            pcbY="10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin95"]}
            pcbX="-2.249932mm"
            pcbY="10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin96"]}
            pcbX="-2.750058mm"
            pcbY="10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin97"]}
            pcbX="-3.24993mm"
            pcbY="10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin98"]}
            pcbX="-3.750056mm"
            pcbY="10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin99"]}
            pcbX="-4.249928mm"
            pcbY="10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin100"]}
            pcbX="-4.750054mm"
            pcbY="10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin101"]}
            pcbX="-5.249926mm"
            pcbY="10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin102"]}
            pcbX="-5.750052mm"
            pcbY="10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin103"]}
            pcbX="-6.249924mm"
            pcbY="10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin104"]}
            pcbX="-6.75005mm"
            pcbY="10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin105"]}
            pcbX="-7.249922mm"
            pcbY="10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin106"]}
            pcbX="-7.750048mm"
            pcbY="10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin107"]}
            pcbX="-8.24992mm"
            pcbY="10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin108"]}
            pcbX="-8.750046mm"
            pcbY="10.54989mm"
            width="0.2800096mm"
            height="1.7999964mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin109"]}
            pcbX="-10.54989mm"
            pcbY="8.750046mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin110"]}
            pcbX="-10.54989mm"
            pcbY="8.24992mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin111"]}
            pcbX="-10.54989mm"
            pcbY="7.750048mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin112"]}
            pcbX="-10.54989mm"
            pcbY="7.249922mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin113"]}
            pcbX="-10.54989mm"
            pcbY="6.75005mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin114"]}
            pcbX="-10.54989mm"
            pcbY="6.249924mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin115"]}
            pcbX="-10.54989mm"
            pcbY="5.750052mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin116"]}
            pcbX="-10.54989mm"
            pcbY="5.249926mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin117"]}
            pcbX="-10.54989mm"
            pcbY="4.750054mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin118"]}
            pcbX="-10.54989mm"
            pcbY="4.249928mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin119"]}
            pcbX="-10.54989mm"
            pcbY="3.750056mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin120"]}
            pcbX="-10.54989mm"
            pcbY="3.24993mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin121"]}
            pcbX="-10.54989mm"
            pcbY="2.750058mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin122"]}
            pcbX="-10.54989mm"
            pcbY="2.249932mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin123"]}
            pcbX="-10.54989mm"
            pcbY="1.75006mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin124"]}
            pcbX="-10.54989mm"
            pcbY="1.249934mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin125"]}
            pcbX="-10.54989mm"
            pcbY="0.750062mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin126"]}
            pcbX="-10.54989mm"
            pcbY="0.249936mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin127"]}
            pcbX="-10.54989mm"
            pcbY="-0.249936mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin128"]}
            pcbX="-10.54989mm"
            pcbY="-0.750062mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin129"]}
            pcbX="-10.54989mm"
            pcbY="-1.249934mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin130"]}
            pcbX="-10.54989mm"
            pcbY="-1.75006mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin131"]}
            pcbX="-10.54989mm"
            pcbY="-2.249932mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin132"]}
            pcbX="-10.54989mm"
            pcbY="-2.750058mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin133"]}
            pcbX="-10.54989mm"
            pcbY="-3.24993mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin134"]}
            pcbX="-10.54989mm"
            pcbY="-3.750056mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin135"]}
            pcbX="-10.54989mm"
            pcbY="-4.249928mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin136"]}
            pcbX="-10.54989mm"
            pcbY="-4.750054mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin137"]}
            pcbX="-10.54989mm"
            pcbY="-5.249926mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin138"]}
            pcbX="-10.54989mm"
            pcbY="-5.750052mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin139"]}
            pcbX="-10.54989mm"
            pcbY="-6.249924mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin140"]}
            pcbX="-10.54989mm"
            pcbY="-6.75005mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin141"]}
            pcbX="-10.54989mm"
            pcbY="-7.249922mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin142"]}
            pcbX="-10.54989mm"
            pcbY="-7.750048mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin143"]}
            pcbX="-10.54989mm"
            pcbY="-8.24992mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin144"]}
            pcbX="-10.54989mm"
            pcbY="-8.750046mm"
            width="1.7999964mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin145"]}
            pcbX="-1.527048mm"
            pcbY="0mm"
            width="9.5000064mm"
            height="6.700012mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -9.249994200000003, y: 9.249994200000003 },
              { x: 9.249994199999989, y: 9.249994200000003 },
              { x: 9.249994199999989, y: -9.249994200000003 },
              { x: -9.249994200000003, y: -9.249994200000003 },
              { x: -9.249994200000003, y: 9.249994200000003 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -8.249920000000003, y: -7.950200000000002 },
              { x: -8.460854378607905, y: -7.860991640570063 },
              { x: -8.54737671176774, y: -7.648941341500581 },
              { x: -8.459062117039068, y: -7.4376312001708484 },
              { x: -8.247380000000021, y: -7.350211952880883 },
              { x: -8.03569788296096, y: -7.437631200170841 },
              { x: -7.947383288232274, y: -7.64894134150056 },
              { x: -8.033905621392108, y: -7.860991640570056 },
              { x: -8.244839999999996, y: -7.950200000000002 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -9.425940000000011, y: -10.70102 },
              { x: -9.574681055997672, y: -10.550377970296068 },
              { x: -9.424670000000006, y: -10.401000575985258 },
              { x: -9.27465894400234, y: -10.550377970296068 },
              { x: -9.4234, y: -10.70102 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="0.0127mm"
            pcbY="12.303mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -11.552999999999997, y: 11.552999999999997 },
              { x: 11.578400000000002, y: 11.552999999999997 },
              { x: 11.578400000000002, y: -11.578400000000002 },
              { x: -11.552999999999997, y: -11.578400000000002 },
              { x: -11.552999999999997, y: 11.552999999999997 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C1338601.obj?uuid=5f3d0f9b43204ebb9c77a8ad28c50891",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C1338601.step?uuid=5f3d0f9b43204ebb9c77a8ad28c50891",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  );
};

export default F28M35H52C1RFPQ;
