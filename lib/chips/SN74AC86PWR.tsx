import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["1A"],
  pin2: ["1B"],
  pin3: ["1Y"],
  pin4: ["2A"],
  pin5: ["2B"],
  pin6: ["2Y"],
  pin7: ["GND"],
  pin8: ["3Y"],
  pin9: ["3A"],
  pin10: ["3B"],
  pin11: ["4Y"],
  pin12: ["4A"],
  pin13: ["4B"],
  pin14: ["VCC"],
} as const;

const pinAttributes = {
  pin7: { requiresGround: true },
  pin14: { requiresPower: true },
} as const;

export const SN74AC86PWR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2877138"],
      }}
      manufacturerPartNumber="SN74AC86PWR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin14"]}
            pcbX="-1.949958mm"
            pcbY="2.800096mm"
            width="0.3999992mm"
            height="1.6999966mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="-1.299972mm"
            pcbY="2.800096mm"
            width="0.3999992mm"
            height="1.6999966mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="-0.649986mm"
            pcbY="2.800096mm"
            width="0.3999992mm"
            height="1.6999966mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="0mm"
            pcbY="2.800096mm"
            width="0.3999992mm"
            height="1.6999966mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="0.649986mm"
            pcbY="2.800096mm"
            width="0.3999992mm"
            height="1.6999966mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="1.299972mm"
            pcbY="2.800096mm"
            width="0.3999992mm"
            height="1.6999966mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="1.949958mm"
            pcbY="2.800096mm"
            width="0.3999992mm"
            height="1.6999966mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="1.949958mm"
            pcbY="-2.800096mm"
            width="0.3999992mm"
            height="1.6999966mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="1.299972mm"
            pcbY="-2.800096mm"
            width="0.3999992mm"
            height="1.6999966mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="0.649986mm"
            pcbY="-2.800096mm"
            width="0.3999992mm"
            height="1.6999966mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0mm"
            pcbY="-2.800096mm"
            width="0.3999992mm"
            height="1.6999966mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-0.649986mm"
            pcbY="-2.800096mm"
            width="0.3999992mm"
            height="1.6999966mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-1.299972mm"
            pcbY="-2.800096mm"
            width="0.3999992mm"
            height="1.6999966mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="-1.949958mm"
            pcbY="-2.800096mm"
            width="0.3999992mm"
            height="1.6999966mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -2.5146000000000868, y: 1.4763749999999618 },
              { x: -2.5146000000000868, y: 1.740941399999997 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.5146000000000868, y: -1.6002000000000862 },
              { x: -2.5146000000000868, y: -1.751558599999953 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 2.499994999999899, y: 1.740941399999997 },
              { x: 2.499994999999899, y: -1.751558599999953 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.5146000000000868, y: 1.740941399999997 },
              { x: 2.499994999999899, y: 1.740941399999997 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.5146000000000868, y: -1.751558599999953 },
              { x: 2.499994999999899, y: -1.751558599999953 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.5146000000000868, y: -1.6002000000000862 },
              { x: -2.5146000000000868, y: -0.6858000000000857 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.5146000000000868, y: 0.6857999999998583 },
              { x: -2.5146000000000868, y: 1.6001999999999725 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.5781020000001718, y: -1.143000000000029 },
              { x: -1.5849133591765394, y: -1.1947374094779661 },
              { x: -1.6048832538343731, y: -1.242949000000067 },
              { x: -1.6366507686543628, y: -1.2843492313455727 },
              { x: -1.6780509999998685, y: -1.3161167461657897 },
              { x: -1.7262625905221967, y: -1.3360866408235097 },
              { x: -1.77800000000002, y: -1.342897999999991 },
              { x: -1.829737409477957, y: -1.3360866408235097 },
              { x: -1.8779490000001715, y: -1.3161167461657897 },
              { x: -1.9193492313456773, y: -1.2843492313455727 },
              { x: -1.9511167461656669, y: -1.242949000000067 },
              { x: -1.9710866408235006, y: -1.1947374094779661 },
              { x: -1.9778979999998683, y: -1.143000000000029 },
              { x: -1.9710866408235006, y: -1.091262590522092 },
              { x: -1.9511167461656669, y: -1.0430509999999913 },
              { x: -1.9193492313456773, y: -1.0016507686544855 },
              { x: -1.8779490000001715, y: -0.9698832538342685 },
              { x: -1.829737409477957, y: -0.9499133591766622 },
              { x: -1.77800000000002, y: -0.9431020000000672 },
              { x: -1.7262625905221967, y: -0.9499133591766622 },
              { x: -1.6780509999998685, y: -0.9698832538342685 },
              { x: -1.6366507686543628, y: -1.0016507686544855 },
              { x: -1.6048832538343731, y: -1.0430509999999913 },
              { x: -1.5849133591765394, y: -1.091262590522092 },
              { x: -1.5781020000001718, y: -1.143000000000029 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.5146000000000868, y: 0.6857999999998583 },
              { x: -2.5146000000000868, y: -0.6858000000000857 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.006858mm"
            pcbY="4.638296mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -2.7587579999999434, y: 3.8882959999999684 },
              { x: 2.7450419999998985, y: 3.8882959999999684 },
              { x: 2.7450419999998985, y: -3.9015039999999317 },
              { x: -2.7587579999999434, y: -3.9015039999999317 },
              { x: -2.7587579999999434, y: 3.8882959999999684 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2877138.obj?uuid=0d4be8094deb42719f0ebe4bb78043bb",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2877138.step?uuid=0d4be8094deb42719f0ebe4bb78043bb",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.55 },
      }}
      {...props}
    />
  );
};

export default SN74AC86PWR;
