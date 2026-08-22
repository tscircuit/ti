import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["RT"],
  pin2: ["PGOOD"],
  pin3: ["pin3"],
  pin4: ["VIN"],
  pin5: ["SW"],
  pin6: ["BOOT"],
  pin7: ["VCC"],
  pin8: ["pin8"],
  pin9: ["GND"],
} as const;

const pinAttributes = {
  pin4: { requiresPower: true },
  pin7: { requiresPower: true },
  pin9: { requiresGround: true },
} as const;

export const LMR36502F3RPER = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C20345529"],
      }}
      manufacturerPartNumber="LMR36502F3RPER"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin7"]}
            pcbX="0.8999093mm"
            pcbY="0.249936mm"
            width="0.5999988mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0.8999093mm"
            pcbY="-0.249936mm"
            width="0.5999988mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-0.8999347mm"
            pcbY="-0.249936mm"
            width="0.5999988mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.8999347mm"
            pcbY="0.249936mm"
            width="0.5999988mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="-0.0000127mm"
            pcbY="0.54991mm"
            width="0.350012mm"
            height="1.2999974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            points={[
              { x: "-1.1999595mm", y: "0.625094mm" },
              { x: "-0.4499737mm", y: "0.625094mm" },
              { x: "-0.4499737mm", y: "1.2000738mm" },
              { x: "-0.8499729mm", y: "1.2000738mm" },
              { x: "-0.8499729mm", y: "0.8500872mm" },
              { x: "-1.1999595mm", y: "0.8500872mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin8"]}
            points={[
              { x: "1.1999595mm", y: "0.6251448mm" },
              { x: "0.4499229mm", y: "0.6251448mm" },
              { x: "0.4499229mm", y: "1.2000738mm" },
              { x: "0.8499475mm", y: "1.2000738mm" },
              { x: "0.8499475mm", y: "0.850138mm" },
              { x: "1.1999595mm", y: "0.850138mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin4"]}
            points={[
              { x: "-1.1999341mm", y: "-0.6251448mm" },
              { x: "-0.4498975mm", y: "-0.6251448mm" },
              { x: "-0.4498975mm", y: "-1.2000738mm" },
              { x: "-0.8499221mm", y: "-1.2000738mm" },
              { x: "-0.8499221mm", y: "-0.850138mm" },
              { x: "-1.1999341mm", y: "-0.850138mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin5"]}
            points={[
              { x: "1.1999087mm", y: "-0.625094mm" },
              { x: "0.4499229mm", y: "-0.625094mm" },
              { x: "0.4499229mm", y: "-1.2000738mm" },
              { x: "0.8499221mm", y: "-1.2000738mm" },
              { x: "0.8499221mm", y: "-0.8500872mm" },
              { x: "1.1999087mm", y: "-0.8500872mm" },
            ]}
            shape="polygon"
          />
          <silkscreenpath
            route={[
              { x: -1.239761299999941, y: -1.0292841999998927 },
              { x: -1.239761299999941, y: -1.145031999999901 },
              { x: -1.1040236999999706, y: -1.145031999999901 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.1043031000000383, y: -1.145031999999901 },
              { x: 1.2402693000001364, y: -1.145031999999901 },
              { x: 1.2402693000001364, y: -1.0292841999998927 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.2402693000001364, y: 1.0390886000000137 },
              { x: 1.2402693000001364, y: 1.1750040000000581 },
              { x: 1.1044301000000587, y: 1.1750040000000581 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.1088750999998638, y: 1.1849354000000858 },
              { x: -1.239761299999941, y: 1.1849354000000858 },
              { x: -1.239761299999941, y: 1.0390378000000737 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.19879309999987527, y: -1.0500105999999505 },
              { x: 0.23882350000019414, y: -1.0500105999999505 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.0000127mm"
            pcbY="2.1938mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -1.4946126999998341, y: 1.4438000000000102 },
              { x: 1.4945873000001484, y: 1.4438000000000102 },
              { x: 1.4945873000001484, y: -1.4438000000001239 },
              { x: -1.4946126999998341, y: -1.4438000000001239 },
              { x: -1.4946126999998341, y: 1.4438000000000102 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C20345529.obj?uuid=6d2eaa3cc3234bec976ac22420d41d6e",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C20345529.step?uuid=6d2eaa3cc3234bec976ac22420d41d6e",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0.000012699999842880061, y: 0, z: -0.9 },
      }}
      {...props}
    />
  );
};

export default LMR36502F3RPER;
