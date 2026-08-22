import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["TX_EN"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["LED0"],
  pin5: ["RST_N"],
  pin6: ["VDDA3V3"],
  pin7: ["RD_M"],
  pin8: ["RD_P"],
  pin9: ["GND2"],
  pin10: ["TD_M"],
  pin11: ["TD_P"],
  pin12: ["XO"],
  pin13: ["pin13"],
  pin14: ["RBIAS"],
  pin15: ["MDIO"],
  pin16: ["MDC"],
  pin17: ["RX_D1"],
  pin18: ["RX_D0"],
  pin19: ["VDDIO"],
  pin20: ["CRS_DV"],
  pin21: ["GND1"],
  pin22: ["RX_ER"],
  pin23: ["TX_D0"],
  pin24: ["TX_D1"],
  pin25: ["EP"],
} as const;

const pinAttributes = {
  pin9: { requiresGround: true },
  pin21: { requiresGround: true },
} as const;

export const DP83825IRMQT = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C1849400"],
      }}
      manufacturerPartNumber="DP83825IRMQT"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin12"]}
            pcbX="1.324864mm"
            pcbY="-1.324864mm"
            width="0.2500122mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="1.325118mm"
            pcbY="1.324864mm"
            width="0.2500122mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-1.325118mm"
            pcbY="-1.325118mm"
            width="0.2500122mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin24"]}
            pcbX="-1.325118mm"
            pcbY="1.324864mm"
            width="0.2500122mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="1.474978mm"
            pcbY="-0.899922mm"
            width="0.4500118mm"
            height="0.1999996mm"
            radius="0.0999998mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="1.474978mm"
            pcbY="-0.500126mm"
            width="0.4500118mm"
            height="0.1999996mm"
            radius="0.0999998mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="1.474978mm"
            pcbY="0mm"
            width="0.4500118mm"
            height="0.3999992mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="1.474978mm"
            pcbY="0.499872mm"
            width="0.4500118mm"
            height="0.1999996mm"
            radius="0.0999998mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="1.474978mm"
            pcbY="0.899922mm"
            width="0.4500118mm"
            height="0.1999996mm"
            radius="0.0999998mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="-1.474978mm"
            pcbY="0.899922mm"
            width="0.4500118mm"
            height="0.1999996mm"
            radius="0.0999998mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-1.474978mm"
            pcbY="0.499872mm"
            width="0.4500118mm"
            height="0.1999996mm"
            radius="0.0999998mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-1.474978mm"
            pcbY="0mm"
            width="0.4500118mm"
            height="0.3999992mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-1.474978mm"
            pcbY="-0.500126mm"
            width="0.4500118mm"
            height="0.1999996mm"
            radius="0.0999998mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-1.474978mm"
            pcbY="-0.899922mm"
            width="0.4500118mm"
            height="0.1999996mm"
            radius="0.0999998mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin25"]}
            pcbX="-0mm"
            pcbY="0mm"
            width="1.8999962mm"
            height="1.8999962mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin23"]}
            pcbX="-0.899922mm"
            pcbY="1.474978mm"
            width="0.1999996mm"
            height="0.4500118mm"
            radius="0.0999998mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin22"]}
            pcbX="-0.499872mm"
            pcbY="1.474978mm"
            width="0.1999996mm"
            height="0.4500118mm"
            radius="0.0999998mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin21"]}
            pcbX="-0mm"
            pcbY="1.474978mm"
            width="0.3999992mm"
            height="0.4500118mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin20"]}
            pcbX="0.500126mm"
            pcbY="1.474978mm"
            width="0.1999996mm"
            height="0.4500118mm"
            radius="0.0999998mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin19"]}
            pcbX="0.899922mm"
            pcbY="1.474978mm"
            width="0.1999996mm"
            height="0.4500118mm"
            radius="0.0999998mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="0.899922mm"
            pcbY="-1.474978mm"
            width="0.1999996mm"
            height="0.4500118mm"
            radius="0.0999998mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="0.500126mm"
            pcbY="-1.474978mm"
            width="0.1999996mm"
            height="0.4500118mm"
            radius="0.0999998mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="-0mm"
            pcbY="-1.474978mm"
            width="0.3999992mm"
            height="0.4500118mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-0.499872mm"
            pcbY="-1.474978mm"
            width="0.1999996mm"
            height="0.4500118mm"
            radius="0.0999998mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-0.899922mm"
            pcbY="-1.474978mm"
            width="0.1999996mm"
            height="0.4500118mm"
            radius="0.0999998mm"
            shape="pill"
          />
          <silkscreenpath
            route={[
              { x: 1.1658853999999792, y: 1.5999967999999853 },
              { x: 1.5900146000000177, y: 1.5999967999999853 },
              { x: 1.5900146000000177, y: 1.1661393999999063 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.5999714000000722, y: -1.1658599999999524 },
              { x: 1.5999714000000722, y: -1.5899891999999909 },
              { x: 1.1661139999998795, y: -1.5899891999999909 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.1658092000001261, y: -1.5999460000000454 },
              { x: -1.589963799999964, y: -1.5999460000000454 },
              { x: -1.589963799999964, y: -1.1660885999999664 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.5999460000000454, y: 1.1658599999999524 },
              { x: -1.5999460000000454, y: 1.5899891999999909 },
              { x: -1.16608860000008, y: 1.5899891999999909 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.8549365999999736, y: 0.8889999999998963 },
              { x: -1.8566416035040447, y: 0.876049212621183 },
              { x: -1.8616404208453332, y: 0.863980999999967 },
              { x: -1.8695923908828718, y: 0.8536177908829359 },
              { x: -1.8799556000000166, y: 0.8456658208453973 },
              { x: -1.8920238126211189, y: 0.8406670035039951 },
              { x: -1.904974599999946, y: 0.8389620000000377 },
              { x: -1.917925387378773, y: 0.8406670035039951 },
              { x: -1.9299935999999889, y: 0.8456658208453973 },
              { x: -1.94035680911702, y: 0.8536177908829359 },
              { x: -1.9483087791545586, y: 0.863980999999967 },
              { x: -1.953307596495847, y: 0.876049212621183 },
              { x: -1.9550125999999182, y: 0.8889999999998963 },
              { x: -1.953307596495847, y: 0.901950787378837 },
              { x: -1.9483087791545586, y: 0.9140189999999393 },
              { x: -1.94035680911702, y: 0.9243822091170841 },
              { x: -1.9299935999999889, y: 0.9323341791546227 },
              { x: -1.917925387378773, y: 0.9373329964957975 },
              { x: -1.904974599999946, y: 0.9390379999999823 },
              { x: -1.8920238126211189, y: 0.9373329964957975 },
              { x: -1.8799556000000166, y: 0.9323341791546227 },
              { x: -1.8695923908828718, y: 0.9243822091170841 },
              { x: -1.8616404208453332, y: 0.9140189999999393 },
              { x: -1.8566416035040447, y: 0.901950787378837 },
              { x: -1.8549365999999736, y: 0.8889999999998963 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.126746mm"
            pcbY="2.69926mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -2.2055460000000267, y: 1.9492600000000948 },
              { x: 1.9520539999998618, y: 1.9492600000000948 },
              { x: 1.9520539999998618, y: -1.954340000000002 },
              { x: -2.2055460000000267, y: -1.954340000000002 },
              { x: -2.2055460000000267, y: 1.9492600000000948 },
            ]}
          />
        </footprint>
      }
      {...props}
    />
  );
};

export default DP83825IRMQT;
