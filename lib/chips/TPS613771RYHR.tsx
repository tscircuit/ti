import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VIN"],
  pin2: ["pin2"],
  pin3: ["MODE"],
  pin4: ["VSENSE"],
  pin5: ["VOUT"],
  pin6: ["SW"],
  pin7: ["PGND"],
  pin8: ["FB"],
  pin9: ["COMP"],
  pin10: ["ILIM"],
  pin11: ["VCC"],
  pin12: ["AGND"],
  pin13: ["BOOT"],
} as const;

const pinAttributes = {
  pin1: { requiresPower: true },
  pin7: { requiresGround: true },
  pin11: { requiresPower: true },
  pin12: { requiresGround: true },
} as const;

export const TPS613771RYHR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C22427757"],
      }}
      manufacturerPartNumber="TPS613771RYHR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.812546mm"
            pcbY="-1.087374mm"
            width="0.3750056mm"
            height="0.324993mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.249936mm"
            pcbY="-1.087374mm"
            width="0.2500122mm"
            height="0.324993mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0.249936mm"
            pcbY="-1.087374mm"
            width="0.2500122mm"
            height="0.324993mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0.812546mm"
            pcbY="-1.087374mm"
            width="0.3750056mm"
            height="0.324993mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="0.424942mm"
            pcbY="-0.499872mm"
            width="1.1500104mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0mm"
            pcbY="0mm"
            width="1.999996mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="0.424942mm"
            pcbY="0.500126mm"
            width="1.1500104mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="0.812546mm"
            pcbY="1.087628mm"
            width="0.3750056mm"
            height="0.324993mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="0.249936mm"
            pcbY="1.087628mm"
            width="0.2500122mm"
            height="0.324993mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="-0.249936mm"
            pcbY="1.087628mm"
            width="0.2500122mm"
            height="0.324993mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="-0.812546mm"
            pcbY="1.087628mm"
            width="0.3750056mm"
            height="0.324993mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="-0.837692mm"
            pcbY="0.500126mm"
            width="0.324993mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="-0.837692mm"
            pcbY="-0.499872mm"
            width="0.324993mm"
            height="0.2500122mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -0.7620000000000573, y: -1.9050000000000864 },
              { x: -0.7663274200613159, y: -1.9378700187279492 },
              { x: -0.7790147737194957, y: -1.9685000000000628 },
              { x: -0.7991974387892924, y: -1.9948025612106903 },
              { x: -0.8255000000000337, y: -2.0149852262806007 },
              { x: -0.8561299812719199, y: -2.0276725799387805 },
              { x: -0.88900000000001, y: -2.032000000000039 },
              { x: -0.9218700187279865, y: -2.0276725799387805 },
              { x: -0.9524999999999864, y: -2.0149852262806007 },
              { x: -0.9788025612107276, y: -1.9948025612106903 },
              { x: -0.998985226280638, y: -1.9685000000000628 },
              { x: -1.011672579938704, y: -1.9378700187279492 },
              { x: -1.0159999999999627, y: -1.9050000000000864 },
              { x: -1.011672579938704, y: -1.8721299812719963 },
              { x: -0.998985226280638, y: -1.84150000000011 },
              { x: -0.9788025612107276, y: -1.8151974387893688 },
              { x: -0.9524999999999864, y: -1.795014773719572 },
              { x: -0.9218700187279865, y: -1.7823274200613923 },
              { x: -0.88900000000001, y: -1.77800000000002 },
              { x: -0.8561299812719199, y: -1.7823274200613923 },
              { x: -0.8255000000000337, y: -1.795014773719572 },
              { x: -0.7991974387892924, y: -1.8151974387893688 },
              { x: -0.7790147737194957, y: -1.84150000000011 },
              { x: -0.7663274200613159, y: -1.8721299812719963 },
              { x: -0.7620000000000573, y: -1.9050000000000864 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.012192mm"
            pcbY="2.532128mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -1.5321920000001228, y: 1.7821279999999433 },
              { x: 1.5078079999999545, y: 1.7821279999999433 },
              { x: 1.5078079999999545, y: -2.273871999999983 },
              { x: -1.5321920000001228, y: -2.273871999999983 },
              { x: -1.5321920000001228, y: 1.7821279999999433 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C22427757.obj?uuid=bafcc0cff8254e69a5757e824ec292e5",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C22427757.step?uuid=bafcc0cff8254e69a5757e824ec292e5",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: 0.012560300000018287,
          y: -0.0001015999999935957,
          z: -0.01,
        },
      }}
      {...props}
    />
  );
};

export default TPS613771RYHR;
