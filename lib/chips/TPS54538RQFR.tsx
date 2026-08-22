import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["EN"],
  pin3: ["FB"],
  pin4: ["GND"],
  pin5: ["VIN1"],
  pin6: ["VIN2"],
  pin7: ["MODE"],
  pin8: ["SW"],
  pin9: ["pin9"],
} as const;

const pinAttributes = {
  pin4: { requiresGround: true },
  pin5: { requiresPower: true },
  pin6: { requiresPower: true },
} as const;

export const TPS54538RQFR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C45385272"],
      }}
      manufacturerPartNumber="TPS54538RQFR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.925068mm"
            pcbY="0.4998466mm"
            width="0.5500116mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.925068mm"
            pcbY="-0.0000254mm"
            width="0.5500116mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-0.925068mm"
            pcbY="-0.5001514mm"
            width="0.5500116mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-0.249936mm"
            pcbY="-0.4501134mm"
            width="0.2500122mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="0.925068mm"
            pcbY="-0.5001514mm"
            width="0.5500116mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0.925068mm"
            pcbY="-0.0000254mm"
            width="0.5500116mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="0.925068mm"
            pcbY="0.4998466mm"
            width="0.5500116mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="0.249936mm"
            pcbY="0.2999486mm"
            width="0.2500122mm"
            height="1.2999974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="-0.249936mm"
            pcbY="0.6751066mm"
            width="0.2500122mm"
            height="0.5500116mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: 0.554151799999886, y: 0.7999730000001364 },
              { x: 0.623722399999906, y: 0.7999730000001364 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 0.623722399999906, y: -0.8000237999999626 },
              { x: 0.054152799999997114, y: -0.8000237999999626 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.5541264000000865, y: -0.8000237999999626 },
              { x: -0.623722399999906, y: -0.8000237999999626 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.623722399999906, y: 0.7999730000001364 },
              { x: -0.5541264000000865, y: 0.7999730000001364 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.8877299999999195, y: 0.8800846000001457 },
              { x: -0.8901879745948236, y: 0.8614144293626396 },
              { x: -0.8973943914727442, y: 0.8440166000001454 },
              { x: -0.908858145232216, y: 0.8290767452324417 },
              { x: -0.9237980000000334, y: 0.8176129914727426 },
              { x: -0.9411958293626412, y: 0.8104065745949356 },
              { x: -0.9598660000001473, y: 0.8079486000001452 },
              { x: -0.9785361706375397, y: 0.8104065745949356 },
              { x: -0.9959339999999202, y: 0.8176129914727426 },
              { x: -1.0108738547678513, y: 0.8290767452324417 },
              { x: -1.0223376085274367, y: 0.8440166000001454 },
              { x: -1.0295440254052437, y: 0.8614144293626396 },
              { x: -1.0320020000001477, y: 0.8800846000001457 },
              { x: -1.0295440254052437, y: 0.8987547706376517 },
              { x: -1.0223376085274367, y: 0.9161526000001459 },
              { x: -1.0108738547678513, y: 0.9310924547678496 },
              { x: -0.9959339999999202, y: 0.9425562085275487 },
              { x: -0.9785361706375397, y: 0.9497626254053557 },
              { x: -0.9598660000001473, y: 0.9522206000001461 },
              { x: -0.9411958293626412, y: 0.9497626254053557 },
              { x: -0.9237980000000334, y: 0.9425562085275487 },
              { x: -0.908858145232216, y: 0.9310924547678496 },
              { x: -0.8973943914727442, y: 0.9161526000001459 },
              { x: -0.8901879745948236, y: 0.8987547706376517 },
              { x: -0.8877299999999195, y: 0.8800846000001457 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="0mm"
            pcbY="1.9397746mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -1.4438000000000102, y: 1.189774600000078 },
              { x: 1.4438000000000102, y: 1.189774600000078 },
              { x: 1.4438000000000102, y: -1.2152253999998948 },
              { x: -1.4438000000000102, y: -1.2152253999998948 },
              { x: -1.4438000000000102, y: 1.189774600000078 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C45385272.obj?uuid=10c2b329135143f69f4df1aeb7252e7e",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C45385272.step?uuid=10c2b329135143f69f4df1aeb7252e7e",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: -0.0019859000000342353, z: 0 },
      }}
      {...props}
    />
  );
};

export default TPS54538RQFR;
