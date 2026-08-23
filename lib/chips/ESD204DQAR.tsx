import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["IO1"],
  pin2: ["IO2"],
  pin3: ["GND2"],
  pin4: ["IO3"],
  pin5: ["IO4"],
  pin6: ["NC1"],
  pin7: ["NC2"],
  pin8: ["GND1"],
  pin9: ["NC3"],
  pin10: ["NC4"],
} as const;

const pinAttributes = {
  pin3: { requiresGround: true },
  pin6: { doNotConnect: true },
  pin7: { doNotConnect: true },
  pin8: { requiresGround: true },
  pin9: { doNotConnect: true },
  pin10: { doNotConnect: true },
} as const;

export const ESD204DQAR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C553132"],
      }}
      manufacturerPartNumber="ESD204DQAR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin6"]}
            pcbX="0.999998mm"
            pcbY="0.3999992mm"
            width="0.1999996mm"
            height="0.5649976mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="0.500126mm"
            pcbY="0.3999992mm"
            width="0.1999996mm"
            height="0.5649976mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="0mm"
            pcbY="0.3999992mm"
            width="0.3999992mm"
            height="0.5649976mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="-0.499872mm"
            pcbY="0.3999992mm"
            width="0.1999996mm"
            height="0.5649976mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="-0.999998mm"
            pcbY="0.3999992mm"
            width="0.1999996mm"
            height="0.5649976mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="0.999998mm"
            pcbY="-0.3999992mm"
            width="0.1999996mm"
            height="0.5649976mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0.500126mm"
            pcbY="-0.3999992mm"
            width="0.1999996mm"
            height="0.5649976mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0mm"
            pcbY="-0.3999992mm"
            width="0.3999992mm"
            height="0.5649976mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.499872mm"
            pcbY="-0.3999992mm"
            width="0.1999996mm"
            height="0.5649976mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.999998mm"
            pcbY="-0.3999992mm"
            width="0.1999996mm"
            height="0.5649976mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -1.3261847999999645, y: -0.5762243999998873 },
              { x: -1.3261847999999645, y: 0.576224400000001 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.3261848000000782, y: 0.576224400000001 },
              { x: 1.3261848000000782, y: -0.5762243999998873 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.8999219999999468, y: -1.019047999999998 },
              { x: -0.9033320070083164, y: -1.044949574757652 },
              { x: -0.9133296416908934, y: -1.069086000000084 },
              { x: -0.9292335817659705, y: -1.0898124182340325 },
              { x: -0.9499600000000328, y: -1.1057163583091096 },
              { x: -0.9740964252422373, y: -1.1157139929916866 },
              { x: -0.9999979999998914, y: -1.1191239999999425 },
              { x: -1.0258995747575455, y: -1.1157139929916866 },
              { x: -1.050036000000091, y: -1.1057163583091096 },
              { x: -1.070762418233926, y: -1.0898124182340325 },
              { x: -1.086666358309003, y: -1.069086000000084 },
              { x: -1.09666399299158, y: -1.044949574757652 },
              { x: -1.100073999999836, y: -1.019047999999998 },
              { x: -1.09666399299158, y: -0.9931464252423439 },
              { x: -1.086666358309003, y: -0.9690100000000257 },
              { x: -1.070762418233926, y: -0.9482835817659634 },
              { x: -1.050036000000091, y: -0.9323796416908863 },
              { x: -1.0258995747575455, y: -0.9223820070083093 },
              { x: -0.9999979999998914, y: -0.9189720000000534 },
              { x: -0.9740964252422373, y: -0.9223820070083093 },
              { x: -0.9499600000000328, y: -0.9323796416908863 },
              { x: -0.9292335817659705, y: -0.9482835817659634 },
              { x: -0.9133296416908934, y: -0.9690100000000257 },
              { x: -0.9033320070083164, y: -0.9931464252423439 },
              { x: -0.8999219999999468, y: -1.019047999999998 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="0mm"
            pcbY="1.6858mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -1.5707999999998492, y: 0.935799999999972 },
              { x: 1.570799999999963, y: 0.935799999999972 },
              { x: 1.570799999999963, y: -1.3676000000000386 },
              { x: -1.5707999999998492, y: -1.3676000000000386 },
              { x: -1.5707999999998492, y: 0.935799999999972 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C553132.obj?uuid=df0eca6a71854020b6cf420855c3797f",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C553132.step?uuid=df0eca6a71854020b6cf420855c3797f",
        pcbRotationOffset: 90,
        modelOriginPosition: {
          x: 0.000012700000070253736,
          y: 0.000012699999956566899,
          z: 0,
        },
      }}
      {...props}
    />
  );
};

export default ESD204DQAR;
