import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VBAT_SAFING"],
  pin2: ["VCP"],
  pin3: ["CP1"],
  pin4: ["CP2"],
  pin5: ["PGND2"],
  pin6: ["NRES"],
  pin7: ["DIAG_OUT"],
  pin8: ["NCS"],
  pin9: ["SDI"],
  pin10: ["SDO"],
  pin11: ["SCLK"],
  pin12: ["RSTEXT"],
  pin13: ["pin13"],
  pin14: ["CANWU"],
  pin15: ["VSFB1"],
  pin16: ["VSIN"],
  pin17: ["VSOUT1"],
  pin18: ["VTRACK1"],
  pin19: ["GND2"],
  pin20: ["VDD5"],
  pin21: ["pin21"],
  pin22: ["VDDIO"],
  pin23: ["GND1"],
  pin24: ["VDD1_SENSE"],
  pin25: ["PGND1"],
  pin26: ["VDD1_G"],
  pin27: ["VDD6"],
  pin28: ["SDN6"],
  pin29: ["VBATP"],
  pin30: ["IGN"],
  pin31: ["pin31"],
  pin32: ["ENDRV"],
  pin33: ["EP"],
} as const;

const pinAttributes = {
  pin5: { requiresGround: true },
  pin19: { requiresGround: true },
  pin20: { requiresPower: true },
  pin23: { requiresGround: true },
  pin25: { requiresGround: true },
  pin27: { requiresPower: true },
} as const;

export const TPS65381AQDAPRQ1 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C702333"],
      }}
      manufacturerPartNumber="TPS65381AQDAPRQ1"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin32"]}
            pcbX="-4.875022mm"
            pcbY="3.715766mm"
            width="0.3430016mm"
            height="1.7314926mm"
            radius="0.1715008mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin31"]}
            pcbX="-4.225036mm"
            pcbY="3.715766mm"
            width="0.3430016mm"
            height="1.7314926mm"
            radius="0.1715008mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin30"]}
            pcbX="-3.57505mm"
            pcbY="3.715766mm"
            width="0.3430016mm"
            height="1.7314926mm"
            radius="0.1715008mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin29"]}
            pcbX="-2.925064mm"
            pcbY="3.715766mm"
            width="0.3430016mm"
            height="1.7314926mm"
            radius="0.1715008mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin28"]}
            pcbX="-2.275078mm"
            pcbY="3.715766mm"
            width="0.3430016mm"
            height="1.7314926mm"
            radius="0.1715008mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin27"]}
            pcbX="-1.625092mm"
            pcbY="3.715766mm"
            width="0.3430016mm"
            height="1.7314926mm"
            radius="0.1715008mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin26"]}
            pcbX="-0.975106mm"
            pcbY="3.715766mm"
            width="0.3430016mm"
            height="1.7314926mm"
            radius="0.1715008mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin25"]}
            pcbX="-0.324866mm"
            pcbY="3.715766mm"
            width="0.3430016mm"
            height="1.7314926mm"
            radius="0.1715008mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin24"]}
            pcbX="0.32512mm"
            pcbY="3.715766mm"
            width="0.3430016mm"
            height="1.7314926mm"
            radius="0.1715008mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin23"]}
            pcbX="0.975106mm"
            pcbY="3.715766mm"
            width="0.3430016mm"
            height="1.7314926mm"
            radius="0.1715008mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin22"]}
            pcbX="1.625092mm"
            pcbY="3.715766mm"
            width="0.3430016mm"
            height="1.7314926mm"
            radius="0.1715008mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin21"]}
            pcbX="2.275078mm"
            pcbY="3.715766mm"
            width="0.3430016mm"
            height="1.7314926mm"
            radius="0.1715008mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin20"]}
            pcbX="2.925064mm"
            pcbY="3.715766mm"
            width="0.3430016mm"
            height="1.7314926mm"
            radius="0.1715008mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin19"]}
            pcbX="3.57505mm"
            pcbY="3.715766mm"
            width="0.3430016mm"
            height="1.7314926mm"
            radius="0.1715008mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="4.225036mm"
            pcbY="3.715766mm"
            width="0.3430016mm"
            height="1.7314926mm"
            radius="0.1715008mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="4.875022mm"
            pcbY="3.715766mm"
            width="0.3430016mm"
            height="1.7314926mm"
            radius="0.1715008mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="4.875022mm"
            pcbY="-3.715766mm"
            width="0.3430016mm"
            height="1.7314926mm"
            radius="0.1715008mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="4.225036mm"
            pcbY="-3.715766mm"
            width="0.3430016mm"
            height="1.7314926mm"
            radius="0.1715008mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="3.57505mm"
            pcbY="-3.715766mm"
            width="0.3430016mm"
            height="1.7314926mm"
            radius="0.1715008mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="2.925064mm"
            pcbY="-3.715766mm"
            width="0.3430016mm"
            height="1.7314926mm"
            radius="0.1715008mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="2.275078mm"
            pcbY="-3.715766mm"
            width="0.3430016mm"
            height="1.7314926mm"
            radius="0.1715008mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="1.625092mm"
            pcbY="-3.715766mm"
            width="0.3430016mm"
            height="1.7314926mm"
            radius="0.1715008mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="0.975106mm"
            pcbY="-3.715766mm"
            width="0.3430016mm"
            height="1.7314926mm"
            radius="0.1715008mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="0.32512mm"
            pcbY="-3.715766mm"
            width="0.3430016mm"
            height="1.7314926mm"
            radius="0.1715008mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-0.324866mm"
            pcbY="-3.715766mm"
            width="0.3430016mm"
            height="1.7314926mm"
            radius="0.1715008mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-0.975106mm"
            pcbY="-3.715766mm"
            width="0.3430016mm"
            height="1.7314926mm"
            radius="0.1715008mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-1.625092mm"
            pcbY="-3.715766mm"
            width="0.3430016mm"
            height="1.7314926mm"
            radius="0.1715008mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-2.275078mm"
            pcbY="-3.715766mm"
            width="0.3430016mm"
            height="1.7314926mm"
            radius="0.1715008mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-2.925064mm"
            pcbY="-3.715766mm"
            width="0.3430016mm"
            height="1.7314926mm"
            radius="0.1715008mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-3.57505mm"
            pcbY="-3.715766mm"
            width="0.3430016mm"
            height="1.7314926mm"
            radius="0.1715008mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-4.225036mm"
            pcbY="-3.715766mm"
            width="0.3430016mm"
            height="1.7314926mm"
            radius="0.1715008mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="-4.875022mm"
            pcbY="-3.715766mm"
            width="0.3430016mm"
            height="1.7314926mm"
            radius="0.1715008mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin33"]}
            pcbX="0mm"
            pcbY="0mm"
            width="5.2999894mm"
            height="3.7399976mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -5.576188999999886, y: -2.6214069999999765 },
              { x: -5.576188999999886, y: 2.6214069999999765 },
              { x: 5.576189000000113, y: 2.6214069999999765 },
              { x: 5.576189000000113, y: -2.6214069999999765 },
              { x: -5.576188999999886, y: -2.6214069999999765 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -5.348731999999927, y: -3.7157660000000305 },
              { x: -5.353847010512368, y: -3.7546183621365117 },
              { x: -5.368843462536233, y: -3.790823000000046 },
              { x: -5.392699372648849, y: -3.8219126273511392 },
              { x: -5.423788999999829, y: -3.845768537463755 },
              { x: -5.459993637863363, y: -3.8607649894875067 },
              { x: -5.498845999999958, y: -3.8658799999999474 },
              { x: -5.537698362136439, y: -3.8607649894875067 },
              { x: -5.573902999999973, y: -3.845768537463755 },
              { x: -5.604992627351066, y: -3.8219126273511392 },
              { x: -5.628848537463682, y: -3.790823000000046 },
              { x: -5.643844989487434, y: -3.7546183621365117 },
              { x: -5.6489599999998745, y: -3.7157660000000305 },
              { x: -5.643844989487434, y: -3.6769136378634357 },
              { x: -5.628848537463682, y: -3.6407089999999016 },
              { x: -5.604992627351066, y: -3.609619372648922 },
              { x: -5.573902999999973, y: -3.585763462536306 },
              { x: -5.537698362136439, y: -3.5707670105124407 },
              { x: -5.498845999999958, y: -3.565652 },
              { x: -5.459993637863363, y: -3.5707670105124407 },
              { x: -5.423788999999829, y: -3.585763462536306 },
              { x: -5.392699372648849, y: -3.609619372648922 },
              { x: -5.368843462536233, y: -3.6407089999999016 },
              { x: -5.353847010512368, y: -3.6769136378634357 },
              { x: -5.348731999999927, y: -3.7157660000000305 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -4.724908000000028, y: -1.8689320000000862 },
              { x: -4.730023010512468, y: -1.9077843621365673 },
              { x: -4.745019462536334, y: -1.9439889999999878 },
              { x: -4.7688753726489495, y: -1.9750786273511949 },
              { x: -4.799964999999929, y: -1.9989345374638106 },
              { x: -4.836169637863463, y: -2.0139309894875623 },
              { x: -4.875022000000058, y: -2.019046000000003 },
              { x: -4.913874362136539, y: -2.0139309894875623 },
              { x: -4.95007899999996, y: -1.9989345374638106 },
              { x: -4.981168627351167, y: -1.9750786273511949 },
              { x: -5.0050245374637825, y: -1.9439889999999878 },
              { x: -5.020020989487421, y: -1.9077843621365673 },
              { x: -5.025135999999975, y: -1.8689320000000862 },
              { x: -5.020020989487421, y: -1.8300796378634914 },
              { x: -5.0050245374637825, y: -1.7938749999999573 },
              { x: -4.981168627351167, y: -1.7627853726489775 },
              { x: -4.95007899999996, y: -1.7389294625363618 },
              { x: -4.913874362136539, y: -1.7239330105124964 },
              { x: -4.875022000000058, y: -1.7188180000000557 },
              { x: -4.836169637863463, y: -1.7239330105124964 },
              { x: -4.799964999999929, y: -1.7389294625363618 },
              { x: -4.7688753726489495, y: -1.7627853726489775 },
              { x: -4.745019462536334, y: -1.7938749999999573 },
              { x: -4.730023010512468, y: -1.8300796378634914 },
              { x: -4.724908000000028, y: -1.8689320000000862 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.0254mm"
            pcbY="5.4196mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -5.8887999999999465, y: 4.6696000000000595 },
              { x: 5.838000000000079, y: 4.6696000000000595 },
              { x: 5.838000000000079, y: -4.847399999999993 },
              { x: -5.8887999999999465, y: -4.847399999999993 },
              { x: -5.8887999999999465, y: 4.6696000000000595 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C702333.obj?uuid=3aaa0d1b9f7541b7b843976deac531b1",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C702333.step?uuid=3aaa0d1b9f7541b7b843976deac531b1",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0.000012699999956566899, z: -0.65 },
      }}
      {...props}
    />
  );
};

export default TPS65381AQDAPRQ1;
