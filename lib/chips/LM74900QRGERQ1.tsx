import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["DGATE"],
  pin2: ["A"],
  pin3: ["SW"],
  pin4: ["UVLO"],
  pin5: ["OV"],
  pin6: ["EN"],
  pin7: ["SLEEP"],
  pin8: ["NC1"],
  pin9: ["TMR"],
  pin10: ["IMON"],
  pin11: ["ILIM"],
  pin12: ["FLT"],
  pin13: ["GND"],
  pin14: ["HGATE"],
  pin15: ["OUT"],
  pin16: ["SLEEP_OV"],
  pin17: ["NC2"],
  pin18: ["ISCP"],
  pin19: ["CS_NEG"],
  pin20: ["CS_POS"],
  pin21: ["NC3"],
  pin22: ["VS"],
  pin23: ["CAP"],
  pin24: ["C"],
  pin25: ["EPAD"],
} as const;

export const LM74900QRGERQ1 = (props: ChipProps<typeof pinLabels>) => {
  const { name = "SW1", ...restProps } = props;

  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      name={name}
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C20345498"],
      }}
      manufacturerPartNumber="LM74900QRGERQ1"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-2.024888mm"
            pcbY="1.244854mm"
            width="0.8499856mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-2.024888mm"
            pcbY="0.74422mm"
            width="0.8499856mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-2.024888mm"
            pcbY="0.24384mm"
            width="0.8499856mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-2.024888mm"
            pcbY="-0.25654mm"
            width="0.8499856mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-2.024888mm"
            pcbY="-0.75438mm"
            width="0.8499856mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-2.024888mm"
            pcbY="-1.25476mm"
            width="0.8499856mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-1.253998mm"
            pcbY="-2.024888mm"
            width="0.2500122mm"
            height="0.8499856mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-0.756412mm"
            pcbY="-2.024888mm"
            width="0.2500122mm"
            height="0.8499856mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="-0.256032mm"
            pcbY="-2.024888mm"
            width="0.2500122mm"
            height="0.8499856mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="0.244348mm"
            pcbY="-2.024888mm"
            width="0.2500122mm"
            height="0.8499856mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="0.744728mm"
            pcbY="-2.024888mm"
            width="0.2500122mm"
            height="0.8499856mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="1.245108mm"
            pcbY="-2.024888mm"
            width="0.2500122mm"
            height="0.8499856mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="2.024888mm"
            pcbY="-1.255014mm"
            width="0.8499856mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="2.024888mm"
            pcbY="-0.75438mm"
            width="0.8499856mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="2.024888mm"
            pcbY="-0.25654mm"
            width="0.8499856mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="2.024888mm"
            pcbY="0.24384mm"
            width="0.8499856mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="2.024888mm"
            pcbY="0.74422mm"
            width="0.8499856mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="2.024888mm"
            pcbY="1.2446mm"
            width="0.8499856mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin19"]}
            pcbX="1.245108mm"
            pcbY="2.024888mm"
            width="0.2500122mm"
            height="0.8499856mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin20"]}
            pcbX="0.744728mm"
            pcbY="2.024888mm"
            width="0.2500122mm"
            height="0.8499856mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin21"]}
            pcbX="0.244348mm"
            pcbY="2.024888mm"
            width="0.2500122mm"
            height="0.8499856mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin22"]}
            pcbX="-0.256032mm"
            pcbY="2.024888mm"
            width="0.2500122mm"
            height="0.8499856mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin23"]}
            pcbX="-0.756412mm"
            pcbY="2.024888mm"
            width="0.2500122mm"
            height="0.8499856mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin24"]}
            pcbX="-1.253998mm"
            pcbY="2.024888mm"
            width="0.2500122mm"
            height="0.8499856mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin25"]}
            pcbX="0.000508mm"
            pcbY="0mm"
            width="2.0999958mm"
            height="2.0999958mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -1.6354297999999972, y: 2.133676199999968 },
              { x: -1.8058383999999705, y: 2.133676199999968 },
              { x: -2.164994399999955, y: 1.772996199999966 },
              { x: -2.164994399999955, y: 1.6459962000000132 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.6208248000000367, y: -2.1563584000000446 },
              { x: 2.1440648000000238, y: -2.1563584000000446 },
              { x: 2.1440648000000238, y: -1.6305783999998766 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.6303243999999495, y: -2.1563584000000446 },
              { x: -2.1561298000000306, y: -2.1563584000000446 },
              { x: -2.1561298000000306, y: -1.6305783999998766 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.6208248000000367, y: 2.1438362000001234 },
              { x: 2.1440648000000238, y: 2.1438362000001234 },
              { x: 2.1440648000000238, y: 1.6206469999999626 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.5712927999999238, y: 1.264919999999961 },
              { x: -2.5738892520367926, y: 1.245197988763266 },
              { x: -2.5815016642317232, y: 1.2268199999999752 },
              { x: -2.593611263273715, y: 1.2110384632735531 },
              { x: -2.6093927999999096, y: 1.1989288642315614 },
              { x: -2.6277707887632005, y: 1.1913164520367445 },
              { x: -2.6474927999998954, y: 1.1887199999999893 },
              { x: -2.6672148112369314, y: 1.1913164520367445 },
              { x: -2.685592799999995, y: 1.1989288642315614 },
              { x: -2.701374336726417, y: 1.2110384632735531 },
              { x: -2.713483935768295, y: 1.2268199999999752 },
              { x: -2.721096347963112, y: 1.245197988763266 },
              { x: -2.7236927999999807, y: 1.264919999999961 },
              { x: -2.721096347963112, y: 1.2846420112367696 },
              { x: -2.713483935768295, y: 1.3030200000000605 },
              { x: -2.701374336726417, y: 1.3188015367263688 },
              { x: -2.685592799999995, y: 1.3309111357682468 },
              { x: -2.6672148112369314, y: 1.3385235479631774 },
              { x: -2.6474927999998954, y: 1.3411200000000463 },
              { x: -2.6277707887632005, y: 1.3385235479631774 },
              { x: -2.6093927999999096, y: 1.3309111357682468 },
              { x: -2.593611263273715, y: 1.3188015367263688 },
              { x: -2.5815016642317232, y: 1.3030200000000605 },
              { x: -2.5738892520367926, y: 1.2846420112367696 },
              { x: -2.5712927999999238, y: 1.264919999999961 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.125984mm"
            pcbY="3.44348mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -2.966784000000075, y: 2.6934800000000223 },
              { x: 2.7148160000000416, y: 2.6934800000000223 },
              { x: 2.7148160000000416, y: -2.708720000000085 },
              { x: -2.966784000000075, y: -2.708720000000085 },
              { x: -2.966784000000075, y: 2.6934800000000223 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C20345498.obj?uuid=7eefadb7b37f47f2bf5af1b46b290104",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C20345498.step?uuid=7eefadb7b37f47f2bf5af1b46b290104",
        pcbRotationOffset: 270,
        modelOriginPosition: {
          x: -0.044818299999860756,
          y: -0.1541780000001154,
          z: -0.02,
        },
      }}
      {...restProps}
    />
  );
};

export default LM74900QRGERQ1;
