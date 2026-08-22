import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["S1"],
  pin2: ["S2"],
  pin3: ["S3"],
  pin4: ["G"],
  pin5: ["D1"],
  pin6: ["D2"],
  pin7: ["D3"],
  pin8: ["D4"],
  pin9: ["D5"],
} as const;

export const CSD17573Q5B = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C202231"],
      }}
      manufacturerPartNumber="CSD17573Q5B"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-1.905mm"
            pcbY="-3.025394mm"
            width="0.7999984mm"
            height="1.3210032mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.635mm"
            pcbY="-3.025394mm"
            width="0.7999984mm"
            height="1.3210032mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0.635mm"
            pcbY="-3.025394mm"
            width="0.7999984mm"
            height="1.3210032mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="1.905mm"
            pcbY="-3.025394mm"
            width="0.7999984mm"
            height="1.3210032mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="1.905mm"
            pcbY="3.025394mm"
            width="0.7999984mm"
            height="1.3210032mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0.635mm"
            pcbY="3.025394mm"
            width="0.7999984mm"
            height="1.3210032mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-0.635mm"
            pcbY="3.025394mm"
            width="0.7999984mm"
            height="1.3210032mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-1.905mm"
            pcbY="3.025394mm"
            width="0.7999984mm"
            height="1.3210032mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="0mm"
            pcbY="0.649986mm"
            width="4.5999908mm"
            height="3.5999928mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -2.3755096000001004, y: -3.101187600000003 },
              { x: -2.5862026000000924, y: -3.101187600000003 },
              { x: -2.5862026000000924, y: -3.101187600000003 },
              { x: -2.5862026000000924, y: 3.101187600000003 },
              { x: -2.5862026000000924, y: 3.101187600000003 },
              { x: -2.3755096000001004, y: 3.101187600000003 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 2.3755095999999867, y: -3.101187600000003 },
              { x: 2.5862025999999787, y: -3.101187600000003 },
              { x: 2.5862025999999787, y: -3.101187600000003 },
              { x: 2.5862025999999787, y: 3.101187600000003 },
              { x: 2.5862025999999787, y: 3.101187600000003 },
              { x: 2.3755095999999867, y: 3.101187600000003 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.6499820000000227, y: -3.8000939999999446 },
              { x: -2.6567933591763904, y: -3.851831409477768 },
              { x: -2.676763253834224, y: -3.9000429999998687 },
              { x: -2.708530768654441, y: -3.941443231345602 },
              { x: -2.749930999999947, y: -3.9732107461655914 },
              { x: -2.7981425905220476, y: -3.993180640823425 },
              { x: -2.8498799999999846, y: -3.999991999999793 },
              { x: -2.9016174094779217, y: -3.993180640823425 },
              { x: -2.9498290000000225, y: -3.9732107461655914 },
              { x: -2.991229231345528, y: -3.941443231345602 },
              { x: -3.022996746165745, y: -3.9000429999998687 },
              { x: -3.0429666408234652, y: -3.851831409477768 },
              { x: -3.0497779999999466, y: -3.8000939999999446 },
              { x: -3.0429666408234652, y: -3.7483565905220075 },
              { x: -3.022996746165745, y: -3.700144999999793 },
              { x: -2.991229231345528, y: -3.6587447686542873 },
              { x: -2.9498290000000225, y: -3.626977253834184 },
              { x: -2.9016174094779217, y: -3.607007359176464 },
              { x: -2.8498799999999846, y: -3.600195999999869 },
              { x: -2.7981425905220476, y: -3.607007359176464 },
              { x: -2.749930999999947, y: -3.626977253834184 },
              { x: -2.708530768654441, y: -3.6587447686542873 },
              { x: -2.676763253834224, y: -3.700144999999793 },
              { x: -2.6567933591763904, y: -3.7483565905220075 },
              { x: -2.6499820000000227, y: -3.8000939999999446 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.2032mm"
            pcbY="4.683mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -3.298000000000002, y: 3.9329999999999927 },
              { x: 2.891599999999926, y: 3.9329999999999927 },
              { x: 2.891599999999926, y: -4.2631999999999834 },
              { x: -3.298000000000002, y: -4.2631999999999834 },
              { x: -3.298000000000002, y: 3.9329999999999927 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C202231.obj?uuid=92497acca17b48098aa21a0e69681f58",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C202231.step?uuid=92497acca17b48098aa21a0e69681f58",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: -0.0058669999999998446,
          y: -0.000012700000070253736,
          z: 0,
        },
      }}
      {...props}
    />
  );
};

export default CSD17573Q5B;
