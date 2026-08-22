import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["DIO_26"],
  pin2: ["DIO_27"],
  pin3: ["DIO_28"],
  pin4: ["nRESET"],
  pin5: ["GND1"],
  pin6: ["NC1"],
  pin7: ["DIO_29"],
  pin8: ["DIO_30"],
  pin9: ["GND2"],
  pin10: ["GND3"],
  pin11: ["GND4"],
  pin12: ["GND5"],
  pin13: ["GND6"],
  pin14: ["NC2"],
  pin15: ["NC3"],
  pin16: ["GND7"],
  pin17: ["GND8"],
  pin18: ["RF"],
  pin19: ["GND9"],
  pin20: ["DIO_2"],
  pin21: ["DIO_1"],
  pin22: ["DIO_4"],
  pin23: ["DIO_5"],
  pin24: ["DIO_6"],
  pin25: ["DIO_7"],
  pin26: ["DIO_8"],
  pin27: ["DIO_9"],
  pin28: ["DIO_10"],
  pin29: ["DIO_11"],
  pin30: ["DIO_12"],
  pin31: ["DIO_13"],
  pin32: ["DIO_14"],
  pin33: ["DIO_15"],
  pin34: ["JTAG_TMSC"],
  pin35: ["JTAG_TCKC"],
  pin36: ["DIO_16"],
  pin37: ["DIO_17"],
  pin38: ["DIO_31"],
  pin39: ["DIO_18"],
  pin40: ["DIO_19"],
  pin41: ["DIO_20"],
  pin42: ["DIO_21"],
  pin43: ["DIO_22"],
  pin44: ["DIO_23"],
  pin45: ["DIO_24"],
  pin46: ["VDDS"],
  pin47: ["VDDS_PU"],
  pin48: ["DIO_25"],
  pin49: ["GND10"],
  pin50: ["GND11"],
  pin51: ["GND12"],
  pin52: ["GND13"],
  pin53: ["GND14"],
  pin54: ["GND15"],
  pin55: ["GND16"],
  pin56: ["GND17"],
  pin57: ["GND18"],
  pin58: ["GND19"],
  pin59: ["GND20"],
  pin60: ["GND21"],
  pin61: ["GND22"],
  pin62: ["GND23"],
  pin63: ["GND24"],
  pin64: ["GND25"],
  pin65: ["GND26"],
  pin66: ["GND27"],
  pin67: ["GND28"],
  pin68: ["GND29"],
  pin69: ["GND30"],
  pin70: ["GND31"],
  pin71: ["GND32"],
  pin72: ["GND33"],
  pin73: ["GND34"],
} as const;

const pinAttributes = {
  pin5: { requiresGround: true },
  pin6: { doNotConnect: true },
  pin9: { requiresGround: true },
  pin10: { requiresGround: true },
  pin11: { requiresGround: true },
  pin12: { requiresGround: true },
  pin13: { requiresGround: true },
  pin14: { doNotConnect: true },
  pin15: { doNotConnect: true },
  pin16: { requiresGround: true },
  pin17: { requiresGround: true },
  pin19: { requiresGround: true },
  pin49: { requiresGround: true },
  pin50: { requiresGround: true },
  pin51: { requiresGround: true },
  pin52: { requiresGround: true },
  pin53: { requiresGround: true },
  pin54: { requiresGround: true },
  pin55: { requiresGround: true },
  pin56: { requiresGround: true },
  pin57: { requiresGround: true },
  pin58: { requiresGround: true },
  pin59: { requiresGround: true },
  pin60: { requiresGround: true },
  pin61: { requiresGround: true },
  pin62: { requiresGround: true },
  pin63: { requiresGround: true },
  pin64: { requiresGround: true },
  pin65: { requiresGround: true },
  pin66: { requiresGround: true },
  pin67: { requiresGround: true },
  pin68: { requiresGround: true },
  pin69: { requiresGround: true },
  pin70: { requiresGround: true },
  pin71: { requiresGround: true },
  pin72: { requiresGround: true },
  pin73: { requiresGround: true },
} as const;

export const CC1312PSIPMOTR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C33446057"],
      }}
      manufacturerPartNumber="CC1312PSIPMOTR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-3.099943mm"
            pcbY="3.10007mm"
            width="0.499999mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-3.099943mm"
            pcbY="2.500122mm"
            width="0.499999mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-3.099943mm"
            pcbY="1.999996mm"
            width="0.499999mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-3.099943mm"
            pcbY="1.500124mm"
            width="0.499999mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-3.099943mm"
            pcbY="0.999998mm"
            width="0.499999mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-3.099943mm"
            pcbY="0.500126mm"
            width="0.499999mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-3.099943mm"
            pcbY="0mm"
            width="0.499999mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-3.099943mm"
            pcbY="-0.499872mm"
            width="0.499999mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="-3.099943mm"
            pcbY="-0.999998mm"
            width="0.499999mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="-3.099943mm"
            pcbY="-1.49987mm"
            width="0.499999mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="-3.099943mm"
            pcbY="-1.999996mm"
            width="0.499999mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="-3.099943mm"
            pcbY="-2.499868mm"
            width="0.499999mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="-3.099943mm"
            pcbY="-3.10007mm"
            width="0.499999mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="-2.499995mm"
            pcbY="-3.10007mm"
            width="0.2999994mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="-1.999869mm"
            pcbY="-3.10007mm"
            width="0.2999994mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="-1.499997mm"
            pcbY="-3.10007mm"
            width="0.2999994mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="-0.999871mm"
            pcbY="-3.10007mm"
            width="0.2999994mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="-0.499999mm"
            pcbY="-3.10007mm"
            width="0.2999994mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin19"]}
            pcbX="0.000127mm"
            pcbY="-3.10007mm"
            width="0.2999994mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin20"]}
            pcbX="0.499999mm"
            pcbY="-3.10007mm"
            width="0.2999994mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin21"]}
            pcbX="1.000125mm"
            pcbY="-3.10007mm"
            width="0.2999994mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin22"]}
            pcbX="1.499997mm"
            pcbY="-3.10007mm"
            width="0.2999994mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin23"]}
            pcbX="2.000123mm"
            pcbY="-3.10007mm"
            width="0.2999994mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin24"]}
            pcbX="2.499995mm"
            pcbY="-3.10007mm"
            width="0.2999994mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin25"]}
            pcbX="3.099943mm"
            pcbY="-3.10007mm"
            width="0.499999mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin26"]}
            pcbX="3.099943mm"
            pcbY="-2.499868mm"
            width="0.499999mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin27"]}
            pcbX="3.099943mm"
            pcbY="-1.999996mm"
            width="0.499999mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin28"]}
            pcbX="3.099943mm"
            pcbY="-1.49987mm"
            width="0.499999mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin29"]}
            pcbX="3.099943mm"
            pcbY="-0.999998mm"
            width="0.499999mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin30"]}
            pcbX="3.099943mm"
            pcbY="-0.499872mm"
            width="0.499999mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin31"]}
            pcbX="3.099943mm"
            pcbY="0mm"
            width="0.499999mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin32"]}
            pcbX="3.099943mm"
            pcbY="0.500126mm"
            width="0.499999mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin33"]}
            pcbX="3.099943mm"
            pcbY="0.999998mm"
            width="0.499999mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin34"]}
            pcbX="3.099943mm"
            pcbY="1.500124mm"
            width="0.499999mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin35"]}
            pcbX="3.099943mm"
            pcbY="1.999996mm"
            width="0.499999mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin36"]}
            pcbX="3.099943mm"
            pcbY="2.500122mm"
            width="0.499999mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin37"]}
            pcbX="3.099943mm"
            pcbY="3.10007mm"
            width="0.499999mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin38"]}
            pcbX="2.499995mm"
            pcbY="3.10007mm"
            width="0.2999994mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin39"]}
            pcbX="2.000123mm"
            pcbY="3.10007mm"
            width="0.2999994mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin40"]}
            pcbX="1.499997mm"
            pcbY="3.10007mm"
            width="0.2999994mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin41"]}
            pcbX="1.000125mm"
            pcbY="3.10007mm"
            width="0.2999994mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin42"]}
            pcbX="0.499999mm"
            pcbY="3.10007mm"
            width="0.2999994mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin43"]}
            pcbX="0.000127mm"
            pcbY="3.10007mm"
            width="0.2999994mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin44"]}
            pcbX="-0.499999mm"
            pcbY="3.10007mm"
            width="0.2999994mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin45"]}
            pcbX="-0.999871mm"
            pcbY="3.10007mm"
            width="0.2999994mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin46"]}
            pcbX="-1.499997mm"
            pcbY="3.10007mm"
            width="0.2999994mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin47"]}
            pcbX="-1.999869mm"
            pcbY="3.10007mm"
            width="0.2999994mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin48"]}
            pcbX="-2.499995mm"
            pcbY="3.10007mm"
            width="0.2999994mm"
            height="0.499999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin49"]}
            pcbX="-1.000125mm"
            pcbY="0.999998mm"
            width="0.2999994mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin50"]}
            pcbX="-0.499999mm"
            pcbY="0.999998mm"
            width="0.2999994mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin51"]}
            pcbX="0.000127mm"
            pcbY="0.999998mm"
            width="0.2999994mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin52"]}
            pcbX="0.499999mm"
            pcbY="0.999998mm"
            width="0.2999994mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin53"]}
            pcbX="1.000125mm"
            pcbY="0.999998mm"
            width="0.2999994mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin54"]}
            pcbX="-0.999871mm"
            pcbY="0.500126mm"
            width="0.2999994mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin55"]}
            pcbX="-0.499999mm"
            pcbY="0.500126mm"
            width="0.2999994mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin56"]}
            pcbX="0.000127mm"
            pcbY="0.500126mm"
            width="0.2999994mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin57"]}
            pcbX="0.499999mm"
            pcbY="0.500126mm"
            width="0.2999994mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin58"]}
            pcbX="1.000125mm"
            pcbY="0.500126mm"
            width="0.2999994mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin59"]}
            pcbX="-0.999871mm"
            pcbY="0mm"
            width="0.2999994mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin60"]}
            pcbX="-0.499999mm"
            pcbY="0mm"
            width="0.2999994mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin61"]}
            pcbX="0.000127mm"
            pcbY="0mm"
            width="0.2999994mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin62"]}
            pcbX="0.499999mm"
            pcbY="0mm"
            width="0.2999994mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin63"]}
            pcbX="1.000125mm"
            pcbY="0mm"
            width="0.2999994mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin64"]}
            pcbX="-0.999871mm"
            pcbY="-0.499872mm"
            width="0.2999994mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin65"]}
            pcbX="-0.499999mm"
            pcbY="-0.499872mm"
            width="0.2999994mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin66"]}
            pcbX="0.000127mm"
            pcbY="-0.499872mm"
            width="0.2999994mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin67"]}
            pcbX="0.499999mm"
            pcbY="-0.499872mm"
            width="0.2999994mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin68"]}
            pcbX="1.000125mm"
            pcbY="-0.499872mm"
            width="0.2999994mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin69"]}
            pcbX="-0.999871mm"
            pcbY="-0.999998mm"
            width="0.2999994mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin70"]}
            pcbX="-0.499999mm"
            pcbY="-0.999998mm"
            width="0.2999994mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin71"]}
            pcbX="0.000127mm"
            pcbY="-0.999998mm"
            width="0.2999994mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin72"]}
            pcbX="0.499999mm"
            pcbY="-0.999998mm"
            width="0.2999994mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin73"]}
            pcbX="1.000125mm"
            pcbY="-0.999998mm"
            width="0.2999994mm"
            height="0.2999994mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -3.5999927999999954, y: 3.6000436000001628 },
              { x: -3.5999927999999954, y: -3.599941999999942 },
              { x: 3.5999927999998818, y: -3.599941999999942 },
              { x: 3.5999927999998818, y: 3.6000436000001628 },
              { x: -3.5999927999999954, y: 3.6000436000001628 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.007493mm"
            pcbY="4.597656mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -3.85159299999998, y: 3.8476560000001427 },
              { x: 3.8366070000001855, y: 3.8476560000001427 },
              { x: 3.8366070000001855, y: -3.840543999999909 },
              { x: -3.85159299999998, y: -3.840543999999909 },
              { x: -3.85159299999998, y: 3.8476560000001427 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C33446057.obj?uuid=98e85ade0c314f6f8c940115c2767190",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C33446057.step?uuid=98e85ade0c314f6f8c940115c2767190",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: -0.00005080000005364127, z: -0.01 },
      }}
      {...props}
    />
  );
};

export default CC1312PSIPMOTR;
