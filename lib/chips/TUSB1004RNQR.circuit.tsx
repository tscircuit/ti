import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VCC", "1", "VCC_1"],
  pin2: ["SSEQ1", "A1", "2"],
  pin3: ["EQCFG", "3"],
  pin4: ["SLP_S0", "4"],
  pin5: ["NC", "5", "NC_5"],
  pin6: ["VCC", "6", "VCC_6"],
  pin7: ["TESTOUT1", "7"],
  pin8: ["TESTOUT2", "8"],
  pin9: ["SSTX2P", "9"],
  pin10: ["SSTX2N", "10"],
  pin11: ["NC", "11", "NC_11"],
  pin12: ["SSRX2P", "12"],
  pin13: ["SSRX2N", "13"],
  pin14: ["VIO_SEL", "14"],
  pin15: ["SSTX1P", "15"],
  pin16: ["SSTX1N", "16"],
  pin17: ["MODE", "17"],
  pin18: ["SSRX1P", "18"],
  pin19: ["SSRX1N", "19"],
  pin20: ["VCC", "20", "VCC_20"],
  pin21: ["TEST2", "SCL", "21"],
  pin22: ["AEQENZ", "SDA", "22"],
  pin23: ["AEQCFG", "23"],
  pin24: ["NC", "24", "NC_24"],
  pin25: ["NC", "25", "NC_25"],
  pin26: ["EN", "26"],
  pin27: ["TEST1", "27"],
  pin28: ["VCC", "28", "VCC_28"],
  pin29: ["CEQ1", "29"],
  pin30: ["CRX1N", "30"],
  pin31: ["CRX1P", "31"],
  pin32: ["NC", "32", "NC_32"],
  pin33: ["CTX1N", "33"],
  pin34: ["CTX1P", "34"],
  pin35: ["SSEQ0", "A0", "35"],
  pin36: ["CRX2N", "36"],
  pin37: ["CRX2P", "37"],
  pin38: ["CEQ0", "38"],
  pin39: ["CTX2N", "39"],
  pin40: ["CTX2P", "40"],
  pin41: ["THERMAL_PAD"],
} as const;

const pinRoles = {
  pin1: "power",
  pin2: "control",
  pin3: "input",
  pin4: "input",
  pin5: "no-connect",
  pin6: "power",
  pin7: "output",
  pin8: "output",
  pin9: "control",
  pin10: "control",
  pin11: "no-connect",
  pin12: "output",
  pin13: "output",
  pin14: "control",
  pin15: "control",
  pin16: "control",
  pin17: "control",
  pin18: "output",
  pin19: "output",
  pin20: "power",
  pin21: "control",
  pin22: "bidirectional",
  pin23: "input",
  pin24: "no-connect",
  pin25: "no-connect",
  pin26: "control",
  pin27: "control",
  pin28: "power",
  pin29: "control",
  pin30: "input",
  pin31: "input",
  pin32: "no-connect",
  pin33: "output",
  pin34: "output",
  pin35: "control",
  pin36: "input",
  pin37: "input",
  pin38: "control",
  pin39: "output",
  pin40: "output",
  pin41: "ground",
} as const;

const pinAttributes = {
  pin1: { requiresPower: true },
  pin5: { doNotConnect: true },
  pin6: { requiresPower: true },
  pin11: { doNotConnect: true },
  pin20: { requiresPower: true },
  pin24: { doNotConnect: true },
  pin25: { doNotConnect: true },
  pin28: { requiresPower: true },
  pin32: { doNotConnect: true },
  pin41: { requiresGround: true },
} as const;

export const TUSB1004RNQR = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing RNQ0040A; donor TUSB1046-DCIRNQR (JLCPCB C2151061)
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="TUSB1004RNQR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin41"]}
            pcbX="0mm"
            pcbY="0mm"
            width="4.6999906mm"
            height="2.6999946mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-2.999994mm"
            pcbY="0.199898mm"
            width="0.7999984mm"
            height="0.1999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-2.999994mm"
            pcbY="-0.200406mm"
            width="0.7999984mm"
            height="0.1999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-2.999994mm"
            pcbY="0.599948mm"
            width="0.7999984mm"
            height="0.1999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="-2.999994mm"
            pcbY="1.399794mm"
            width="0.7999984mm"
            height="0.1999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-2.999994mm"
            pcbY="0.999744mm"
            width="0.7999984mm"
            height="0.1999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-2.999994mm"
            pcbY="-1.000252mm"
            width="0.7999984mm"
            height="0.1999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-2.999994mm"
            pcbY="-0.600202mm"
            width="0.7999984mm"
            height="0.1999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-2.999994mm"
            pcbY="-1.400048mm"
            width="0.7999984mm"
            height="0.1999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin19"]}
            pcbX="1.799844mm"
            pcbY="-1.999996mm"
            width="0.1999996mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="0.999744mm"
            pcbY="-1.999996mm"
            width="0.1999996mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="1.399794mm"
            pcbY="-1.999996mm"
            width="0.1999996mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="-0.600202mm"
            pcbY="-1.999996mm"
            width="0.1999996mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="-1.000252mm"
            pcbY="-1.999996mm"
            width="0.1999996mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="-0.200152mm"
            pcbY="-1.999996mm"
            width="0.1999996mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="0.199644mm"
            pcbY="-1.999996mm"
            width="0.1999996mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="0.599694mm"
            pcbY="-1.999996mm"
            width="0.1999996mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="-1.400302mm"
            pcbY="-1.999996mm"
            width="0.1999996mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="-2.200402mm"
            pcbY="-1.999996mm"
            width="0.1999996mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="-1.800352mm"
            pcbY="-1.999996mm"
            width="0.1999996mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin20"]}
            pcbX="2.199894mm"
            pcbY="-1.999996mm"
            width="0.1999996mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin40"]}
            pcbX="-2.200148mm"
            pcbY="1.999996mm"
            width="0.1999996mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin30"]}
            pcbX="1.800098mm"
            pcbY="1.999996mm"
            width="0.1999996mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin29"]}
            pcbX="2.200148mm"
            pcbY="1.999996mm"
            width="0.1999996mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin31"]}
            pcbX="1.400048mm"
            pcbY="1.999996mm"
            width="0.1999996mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin36"]}
            pcbX="-0.599948mm"
            pcbY="1.999996mm"
            width="0.1999996mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin35"]}
            pcbX="-0.199898mm"
            pcbY="1.999996mm"
            width="0.1999996mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin34"]}
            pcbX="0.199898mm"
            pcbY="1.999996mm"
            width="0.1999996mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin32"]}
            pcbX="0.999998mm"
            pcbY="1.999996mm"
            width="0.1999996mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin33"]}
            pcbX="0.599948mm"
            pcbY="1.999996mm"
            width="0.1999996mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin38"]}
            pcbX="-1.400048mm"
            pcbY="1.999996mm"
            width="0.1999996mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin37"]}
            pcbX="-0.999998mm"
            pcbY="1.999996mm"
            width="0.1999996mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin39"]}
            pcbX="-1.800098mm"
            pcbY="1.999996mm"
            width="0.1999996mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin28"]}
            pcbX="2.999994mm"
            pcbY="1.400048mm"
            width="0.7999984mm"
            height="0.1999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin26"]}
            pcbX="2.999994mm"
            pcbY="0.600202mm"
            width="0.7999984mm"
            height="0.1999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin27"]}
            pcbX="2.999994mm"
            pcbY="1.000252mm"
            width="0.7999984mm"
            height="0.1999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin22"]}
            pcbX="2.999994mm"
            pcbY="-0.999744mm"
            width="0.7999984mm"
            height="0.1999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin21"]}
            pcbX="2.999994mm"
            pcbY="-1.399794mm"
            width="0.7999984mm"
            height="0.1999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin23"]}
            pcbX="2.999994mm"
            pcbY="-0.599948mm"
            width="0.7999984mm"
            height="0.1999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin24"]}
            pcbX="2.999994mm"
            pcbY="-0.199898mm"
            width="0.7999984mm"
            height="0.1999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin25"]}
            pcbX="2.999994mm"
            pcbY="0.200152mm"
            width="0.7999984mm"
            height="0.1999996mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -3.0699455999999827, y: 2.1099526000000424 },
              { x: -2.650439199999937, y: 2.1099526000000424 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.549982200000045, y: -2.1000973999999815 },
              { x: -3.079978600000004, y: -2.1000973999999815 },
              { x: -3.079978600000004, y: -1.7562321999998858 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -3.0699455999999827, y: 1.7860772000001361 },
              { x: -3.0699455999999827, y: 2.1099526000000424 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 3.0700217999999495, y: -1.766036599999893 },
              { x: 3.0700217999999495, y: -2.1000973999999815 },
              { x: 2.506091000000083, y: -2.1000973999999815 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 2.5400000000000773, y: 2.1099526000000424 },
              { x: 3.049981199999934, y: 2.1099526000000424 },
              { x: 3.049981199999934, y: 1.7499838000001091 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -3.540251999999896, y: 1.8999200000000656 },
              { x: -3.5443370845378013, y: 1.8688907023207548 },
              { x: -3.5563139463910147, y: 1.8399760000002061 },
              { x: -3.5753663822169983, y: 1.8151463822172218 },
              { x: -3.6001959999999826, y: 1.7960939463912382 },
              { x: -3.6291107023207587, y: 1.7841170845380248 },
              { x: -3.6601399999999558, y: 1.7800320000001193 },
              { x: -3.6911692976792665, y: 1.7841170845380248 },
              { x: -3.720083999999929, y: 1.7960939463912382 },
              { x: -3.7449136177827995, y: 1.8151463822172218 },
              { x: -3.763966053608783, y: 1.8399760000002061 },
              { x: -3.7759429154621102, y: 1.8688907023207548 },
              { x: -3.7800280000000157, y: 1.8999200000000656 },
              { x: -3.7759429154621102, y: 1.93094929767949 },
              { x: -3.763966053608783, y: 1.9598640000001524 },
              { x: -3.7449136177827995, y: 1.984693617783023 },
              { x: -3.720083999999929, y: 2.0037460536090066 },
              { x: -3.6911692976792665, y: 2.0157229154623337 },
              { x: -3.6601399999999558, y: 2.019808000000239 },
              { x: -3.6291107023207587, y: 2.0157229154623337 },
              { x: -3.6001959999999826, y: 2.0037460536090066 },
              { x: -3.5753663822169983, y: 1.984693617783023 },
              { x: -3.5563139463910147, y: 1.9598640000001524 },
              { x: -3.5443370845378013, y: 1.93094929767949 },
              { x: -3.540251999999896, y: 1.8999200000000656 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.180594mm"
            pcbY="3.390902mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -4.024693999999954, y: 2.6409020000000965 },
              { x: 3.6635060000000976, y: 2.6409020000000965 },
              { x: 3.6635060000000976, y: -2.659697999999935 },
              { x: -4.024693999999954, y: -2.659697999999935 },
              { x: -4.024693999999954, y: 2.6409020000000965 },
            ]}
          />
        </footprint>
      }
      {...props}
    />
  );
};

export default TUSB1004RNQR;
