import type { ChipProps } from "@tscircuit/props";

const pinLabels = {
  pin1: ["GPIO10"],
  pin2: ["GPIO11"],
  pin3: ["GPIO12"],
  pin4: ["GPIO13"],
  pin5: ["GPIO14"],
  pin6: ["GPIO15"],
  pin7: ["GPIO16"],
  pin8: ["GPIO17"],
  pin9: ["VDD_DIG1"],
  pin10: ["VIN_IO1"],
  pin11: ["FLASH_SPI_CLK"],
  pin12: ["FLASH_SPI_DOUT"],
  pin13: ["FLASH_SPI_DIN"],
  pin14: ["FLASH_SPI_CS"],
  pin15: ["GPIO22"],
  pin16: ["TDI"],
  pin17: ["TDO"],
  pin18: ["GPIO28"],
  pin19: ["TCK"],
  pin20: ["TMS"],
  pin21: ["SOP2"],
  pin22: ["WLAN_XTAL_N"],
  pin23: ["WLAN_XTAL_P"],
  pin24: ["VDD_PLL"],
  pin25: ["LDO_IN2"],
  pin26: ["NC"],
  pin27: ["A_RX"],
  pin28: ["A_TX"],
  pin29: ["GND1"],
  pin30: ["GND2"],
  pin31: ["RF_BG"],
  pin32: ["N_RESET"],
  pin33: ["VDD_PA_IN"],
  pin34: ["SOP1"],
  pin35: ["SOP0"],
  pin36: ["LDO_IN1"],
  pin37: ["VIN_DCDC_ANA"],
  pin38: ["DCDC_ANA_SW"],
  pin39: ["VIN_DCDC_PA"],
  pin40: ["DCDC_PA_SW_P"],
  pin41: ["DCDC_PA_SW_N"],
  pin42: ["DCDC_PA_OUT"],
  pin43: ["DCDC_DIG_SW"],
  pin44: ["VIN_DCDC_DIG"],
  pin45: ["DCDC_ANA2_SW_P"],
  pin46: ["DCDC_ANA2_SW_N"],
  pin47: ["VDD_ANA2"],
  pin48: ["VDD_ANA1"],
  pin49: ["VDD_RAM"],
  pin50: ["GPIO0"],
  pin51: ["RTC_XTAL_P"],
  pin52: ["RTC_XTAL_N"],
  pin53: ["GPIO30"],
  pin54: ["VIN_1O2"],
  pin55: ["GPIO1"],
  pin56: ["VDD_DIG2"],
  pin57: ["GPIO2"],
  pin58: ["GPIO3"],
  pin59: ["GPIO4"],
  pin60: ["GPIO5"],
  pin61: ["GPIO6"],
  pin62: ["GPIO7"],
  pin63: ["GPIO8"],
  pin64: ["GPIO9"],
  pin65: ["EP"],
} as const;

export const CC3235SF12RGKR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C2871569"],
      }}
      manufacturerPartNumber="CC3235SF12RGKR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-4.407408mm"
            pcbY="3.750056mm"
            width="0.6649974mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-4.407408mm"
            pcbY="3.24993mm"
            width="0.6649974mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-4.407408mm"
            pcbY="2.750058mm"
            width="0.6649974mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-4.407408mm"
            pcbY="2.249932mm"
            width="0.6649974mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-4.407408mm"
            pcbY="1.75006mm"
            width="0.6649974mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-4.407408mm"
            pcbY="1.249934mm"
            width="0.6649974mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-4.407408mm"
            pcbY="0.750062mm"
            width="0.6649974mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-4.407408mm"
            pcbY="0.249936mm"
            width="0.6649974mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="-4.407408mm"
            pcbY="-0.249936mm"
            width="0.6649974mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="-4.407408mm"
            pcbY="-0.750062mm"
            width="0.6649974mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="-4.407408mm"
            pcbY="-1.249934mm"
            width="0.6649974mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="-4.407408mm"
            pcbY="-1.75006mm"
            width="0.6649974mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="-4.407408mm"
            pcbY="-2.249932mm"
            width="0.6649974mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="-4.407408mm"
            pcbY="-2.750058mm"
            width="0.6649974mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="-4.407408mm"
            pcbY="-3.24993mm"
            width="0.6649974mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="-4.407408mm"
            pcbY="-3.750056mm"
            width="0.6649974mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="-3.750056mm"
            pcbY="-4.407408mm"
            width="0.2800096mm"
            height="0.6649974mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="-3.24993mm"
            pcbY="-4.407408mm"
            width="0.2800096mm"
            height="0.6649974mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin19"]}
            pcbX="-2.750058mm"
            pcbY="-4.407408mm"
            width="0.2800096mm"
            height="0.6649974mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin20"]}
            pcbX="-2.249932mm"
            pcbY="-4.407408mm"
            width="0.2800096mm"
            height="0.6649974mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin21"]}
            pcbX="-1.75006mm"
            pcbY="-4.407408mm"
            width="0.2800096mm"
            height="0.6649974mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin22"]}
            pcbX="-1.249934mm"
            pcbY="-4.407408mm"
            width="0.2800096mm"
            height="0.6649974mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin23"]}
            pcbX="-0.750062mm"
            pcbY="-4.407408mm"
            width="0.2800096mm"
            height="0.6649974mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin24"]}
            pcbX="-0.249936mm"
            pcbY="-4.407408mm"
            width="0.2800096mm"
            height="0.6649974mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin25"]}
            pcbX="0.249936mm"
            pcbY="-4.407408mm"
            width="0.2800096mm"
            height="0.6649974mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin26"]}
            pcbX="0.750062mm"
            pcbY="-4.407408mm"
            width="0.2800096mm"
            height="0.6649974mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin27"]}
            pcbX="1.249934mm"
            pcbY="-4.407408mm"
            width="0.2800096mm"
            height="0.6649974mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin28"]}
            pcbX="1.75006mm"
            pcbY="-4.407408mm"
            width="0.2800096mm"
            height="0.6649974mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin29"]}
            pcbX="2.249932mm"
            pcbY="-4.407408mm"
            width="0.2800096mm"
            height="0.6649974mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin30"]}
            pcbX="2.750058mm"
            pcbY="-4.407408mm"
            width="0.2800096mm"
            height="0.6649974mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin31"]}
            pcbX="3.24993mm"
            pcbY="-4.407408mm"
            width="0.2800096mm"
            height="0.6649974mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin32"]}
            pcbX="3.750056mm"
            pcbY="-4.407408mm"
            width="0.2800096mm"
            height="0.6649974mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin33"]}
            pcbX="4.407408mm"
            pcbY="-3.750056mm"
            width="0.6649974mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin34"]}
            pcbX="4.407408mm"
            pcbY="-3.24993mm"
            width="0.6649974mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin35"]}
            pcbX="4.407408mm"
            pcbY="-2.750058mm"
            width="0.6649974mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin36"]}
            pcbX="4.407408mm"
            pcbY="-2.249932mm"
            width="0.6649974mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin37"]}
            pcbX="4.407408mm"
            pcbY="-1.75006mm"
            width="0.6649974mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin38"]}
            pcbX="4.407408mm"
            pcbY="-1.249934mm"
            width="0.6649974mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin39"]}
            pcbX="4.407408mm"
            pcbY="-0.750062mm"
            width="0.6649974mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin40"]}
            pcbX="4.407408mm"
            pcbY="-0.249936mm"
            width="0.6649974mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin41"]}
            pcbX="4.407408mm"
            pcbY="0.249936mm"
            width="0.6649974mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin42"]}
            pcbX="4.407408mm"
            pcbY="0.750062mm"
            width="0.6649974mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin43"]}
            pcbX="4.407408mm"
            pcbY="1.249934mm"
            width="0.6649974mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin44"]}
            pcbX="4.407408mm"
            pcbY="1.75006mm"
            width="0.6649974mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin45"]}
            pcbX="4.407408mm"
            pcbY="2.249932mm"
            width="0.6649974mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin46"]}
            pcbX="4.407408mm"
            pcbY="2.750058mm"
            width="0.6649974mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin47"]}
            pcbX="4.407408mm"
            pcbY="3.24993mm"
            width="0.6649974mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin48"]}
            pcbX="4.407408mm"
            pcbY="3.750056mm"
            width="0.6649974mm"
            height="0.2800096mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin49"]}
            pcbX="3.750056mm"
            pcbY="4.407408mm"
            width="0.2800096mm"
            height="0.6649974mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin50"]}
            pcbX="3.24993mm"
            pcbY="4.407408mm"
            width="0.2800096mm"
            height="0.6649974mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin51"]}
            pcbX="2.750058mm"
            pcbY="4.407408mm"
            width="0.2800096mm"
            height="0.6649974mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin52"]}
            pcbX="2.249932mm"
            pcbY="4.407408mm"
            width="0.2800096mm"
            height="0.6649974mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin53"]}
            pcbX="1.75006mm"
            pcbY="4.407408mm"
            width="0.2800096mm"
            height="0.6649974mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin54"]}
            pcbX="1.249934mm"
            pcbY="4.407408mm"
            width="0.2800096mm"
            height="0.6649974mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin55"]}
            pcbX="0.750062mm"
            pcbY="4.407408mm"
            width="0.2800096mm"
            height="0.6649974mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin56"]}
            pcbX="0.249936mm"
            pcbY="4.407408mm"
            width="0.2800096mm"
            height="0.6649974mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin57"]}
            pcbX="-0.249936mm"
            pcbY="4.407408mm"
            width="0.2800096mm"
            height="0.6649974mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin58"]}
            pcbX="-0.750062mm"
            pcbY="4.407408mm"
            width="0.2800096mm"
            height="0.6649974mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin59"]}
            pcbX="-1.249934mm"
            pcbY="4.407408mm"
            width="0.2800096mm"
            height="0.6649974mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin60"]}
            pcbX="-1.75006mm"
            pcbY="4.407408mm"
            width="0.2800096mm"
            height="0.6649974mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin61"]}
            pcbX="-2.249932mm"
            pcbY="4.407408mm"
            width="0.2800096mm"
            height="0.6649974mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin62"]}
            pcbX="-2.750058mm"
            pcbY="4.407408mm"
            width="0.2800096mm"
            height="0.6649974mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin63"]}
            pcbX="-3.24993mm"
            pcbY="4.407408mm"
            width="0.2800096mm"
            height="0.6649974mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin64"]}
            pcbX="-3.750056mm"
            pcbY="4.407408mm"
            width="0.2800096mm"
            height="0.6649974mm"
            radius="0.1400048mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin65"]}
            pcbX="0mm"
            pcbY="0mm"
            width="6.2999874mm"
            height="6.2999874mm"
            shape="rect"
          />
          <via
            pcbX="1.500124mm"
            pcbY="1.49987mm"
            outerDiameter="0.6096mm"
            holeDiameter="0.3048mm"
            layers={["top", "bottom"]}
          />
          <via
            pcbX="0.500126mm"
            pcbY="1.49987mm"
            outerDiameter="0.6096mm"
            holeDiameter="0.3048mm"
            layers={["top", "bottom"]}
          />
          <via
            pcbX="-0.499872mm"
            pcbY="1.49987mm"
            outerDiameter="0.6096mm"
            holeDiameter="0.3048mm"
            layers={["top", "bottom"]}
          />
          <via
            pcbX="-1.49987mm"
            pcbY="1.49987mm"
            outerDiameter="0.6096mm"
            holeDiameter="0.3048mm"
            layers={["top", "bottom"]}
          />
          <via
            pcbX="-1.49987mm"
            pcbY="0.499872mm"
            outerDiameter="0.6096mm"
            holeDiameter="0.3048mm"
            layers={["top", "bottom"]}
          />
          <via
            pcbX="-0.499872mm"
            pcbY="0.499872mm"
            outerDiameter="0.6096mm"
            holeDiameter="0.3048mm"
            layers={["top", "bottom"]}
          />
          <via
            pcbX="0.500126mm"
            pcbY="0.499872mm"
            outerDiameter="0.6096mm"
            holeDiameter="0.3048mm"
            layers={["top", "bottom"]}
          />
          <via
            pcbX="1.500124mm"
            pcbY="0.499872mm"
            outerDiameter="0.6096mm"
            holeDiameter="0.3048mm"
            layers={["top", "bottom"]}
          />
          <via
            pcbX="1.500124mm"
            pcbY="-0.500126mm"
            outerDiameter="0.6096mm"
            holeDiameter="0.3048mm"
            layers={["top", "bottom"]}
          />
          <via
            pcbX="0.500126mm"
            pcbY="-0.500126mm"
            outerDiameter="0.6096mm"
            holeDiameter="0.3048mm"
            layers={["top", "bottom"]}
          />
          <via
            pcbX="-0.499872mm"
            pcbY="-0.500126mm"
            outerDiameter="0.6096mm"
            holeDiameter="0.3048mm"
            layers={["top", "bottom"]}
          />
          <via
            pcbX="-1.49987mm"
            pcbY="-0.500126mm"
            outerDiameter="0.6096mm"
            holeDiameter="0.3048mm"
            layers={["top", "bottom"]}
          />
          <via
            pcbX="-1.49987mm"
            pcbY="-1.500124mm"
            outerDiameter="0.6096mm"
            holeDiameter="0.3048mm"
            layers={["top", "bottom"]}
          />
          <via
            pcbX="-0.499872mm"
            pcbY="-1.500124mm"
            outerDiameter="0.6096mm"
            holeDiameter="0.3048mm"
            layers={["top", "bottom"]}
          />
          <via
            pcbX="0.500126mm"
            pcbY="-1.500124mm"
            outerDiameter="0.6096mm"
            holeDiameter="0.3048mm"
            layers={["top", "bottom"]}
          />
          <via
            pcbX="1.500124mm"
            pcbY="-1.500124mm"
            outerDiameter="0.6096mm"
            holeDiameter="0.3048mm"
            layers={["top", "bottom"]}
          />
          <silkscreenpath
            route={[
              { x: 4.080433799999923, y: 4.576140199999941 },
              { x: 4.5761655999999675, y: 4.576140199999941 },
              { x: 4.5761655999999675, y: 4.080433800000037 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 4.080433799999923, y: -4.576292599999988 },
              { x: 4.5761655999999675, y: -4.576292599999988 },
              { x: 4.5761655999999675, y: -4.080560799999944 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -4.0805608000000575, y: 4.576140199999941 },
              { x: -4.576267199999961, y: 4.576140199999941 },
              { x: -4.576267199999961, y: 4.080433800000037 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -4.0805608000000575, y: -4.576292599999988 },
              { x: -4.576267199999961, y: -4.576292599999988 },
              { x: -4.576267199999961, y: -4.080560799999944 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -4.964938000000075, y: 3.750056000000086 },
              { x: -4.967491177836109, y: 3.730662688950588 },
              { x: -4.974976716494439, y: 3.712590999999975 },
              { x: -4.986884488885835, y: 3.6970724888858513 },
              { x: -5.002403000000072, y: 3.685164716494569 },
              { x: -5.020474688950571, y: 3.6776791778362394 },
              { x: -5.0398680000000695, y: 3.675126000000091 },
              { x: -5.059261311049568, y: 3.6776791778362394 },
              { x: -5.077333000000067, y: 3.685164716494569 },
              { x: -5.092851511114304, y: 3.6970724888858513 },
              { x: -5.1047592835057, y: 3.712590999999975 },
              { x: -5.11224482216403, y: 3.730662688950588 },
              { x: -5.114798000000064, y: 3.750056000000086 },
              { x: -5.11224482216403, y: 3.769449311049584 },
              { x: -5.1047592835057, y: 3.7875210000000834 },
              { x: -5.092851511114304, y: 3.8030395111143207 },
              { x: -5.077333000000067, y: 3.814947283505603 },
              { x: -5.059261311049568, y: 3.8224328221639325 },
              { x: -5.0398680000000695, y: 3.824986000000081 },
              { x: -5.020474688950571, y: 3.8224328221639325 },
              { x: -5.002403000000072, y: 3.814947283505603 },
              { x: -4.986884488885835, y: 3.8030395111143207 },
              { x: -4.974976716494439, y: 3.7875210000000834 },
              { x: -4.967491177836109, y: 3.769449311049584 },
              { x: -4.964938000000075, y: 3.750056000000086 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.1778mm"
            pcbY="5.7498mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -5.355399999999918, y: 4.99980000000005 },
              { x: 4.9997999999999365, y: 4.99980000000005 },
              { x: 4.9997999999999365, y: -4.97440000000006 },
              { x: -5.355399999999918, y: -4.97440000000006 },
              { x: -5.355399999999918, y: 4.99980000000005 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2871569.obj?uuid=b7201d931fc94275b12dff14351927d7",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2871569.step?uuid=b7201d931fc94275b12dff14351927d7",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: -0.000012700000070253736,
          y: -0.000012700000070253736,
          z: -0.01,
        },
      }}
      {...props}
    />
  );
};
