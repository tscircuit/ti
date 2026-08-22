import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["IN1"],
  pin2: ["IN2"],
  pin3: ["EN_UV"],
  pin4: ["PG"],
  pin5: ["FB_PG"],
  pin6: ["GND"],
  pin7: ["pin7"],
  pin8: ["SNS"],
  pin9: ["OUT1"],
  pin10: ["OUT2"],
  pin11: ["EP"],
} as const;

const pinAttributes = {
  pin6: { requiresGround: true },
} as const;

export const TPS7A9401DSCR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C5220127"],
      }}
      manufacturerPartNumber="TPS7A9401DSCR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-1.400048mm"
            pcbY="1.0008108mm"
            width="0.5999988mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-1.400048mm"
            pcbY="0.5004308mm"
            width="0.5999988mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-1.400048mm"
            pcbY="0.0000508mm"
            width="0.5999988mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-1.400048mm"
            pcbY="-0.5003292mm"
            width="0.5999988mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-1.400048mm"
            pcbY="-1.0007092mm"
            width="0.5999988mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="1.400048mm"
            pcbY="-1.0007092mm"
            width="0.5999988mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="1.400048mm"
            pcbY="-0.5003292mm"
            width="0.5999988mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="1.400048mm"
            pcbY="0.0000508mm"
            width="0.5999988mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="1.400048mm"
            pcbY="0.5004308mm"
            width="0.5999988mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="1.400048mm"
            pcbY="1.0008108mm"
            width="0.5999988mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            points={[
              { x: "-0.1249934mm", y: "1.6999966mm" },
              { x: "-0.1249934mm", y: "1.1999976mm" },
              { x: "0.1249934mm", y: "1.1999976mm" },
              { x: "0.1249934mm", y: "1.6999966mm" },
              { x: "0.3750056mm", y: "1.6999966mm" },
              { x: "0.3750056mm", y: "1.1999976mm" },
              { x: "0.824992mm", y: "1.1999976mm" },
              { x: "0.824992mm", y: "-1.1999976mm" },
              { x: "0.3750056mm", y: "-1.1999976mm" },
              { x: "0.3750056mm", y: "-1.6999966mm" },
              { x: "0.1249934mm", y: "-1.6999966mm" },
              { x: "0.1249934mm", y: "-1.1999976mm" },
              { x: "-0.1249934mm", y: "-1.1999976mm" },
              { x: "-0.1249934mm", y: "-1.6999966mm" },
              { x: "-0.1249934mm", y: "-1.6999966mm" },
              { x: "-0.3750056mm", y: "-1.6999966mm" },
              { x: "-0.3750056mm", y: "-1.1999976mm" },
              { x: "-0.824992mm", y: "-1.1999976mm" },
              { x: "-0.824992mm", y: "1.1999976mm" },
              { x: "-0.3750056mm", y: "1.1999976mm" },
              { x: "-0.3750056mm", y: "1.6999966mm" },
            ]}
            shape="polygon"
          />
          <silkscreenpath
            route={[
              { x: 1.5239999999998872, y: 1.5239746000002015 },
              { x: 0.5541517999999996, y: 1.5239746000002015 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.5541263999999728, y: 1.5239746000002015 },
              { x: -1.5240000000001146, y: 1.5239746000002015 },
              { x: -1.5240000000001146, y: 1.3048742000000857 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.5240000000001146, y: -1.304874199999972 },
              { x: -1.5240000000001146, y: -1.5240253999998004 },
              { x: -0.5541263999999728, y: -1.5240253999998004 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 0.5541517999999996, y: -1.5240253999998004 },
              { x: 1.5239999999998872, y: -1.5240253999998004 },
              { x: 1.5239999999998872, y: -1.304874199999972 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.5239999999998872, y: 1.3048742000000857 },
              { x: 1.5239999999998872, y: 1.5239746000002015 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.2700000000000955, y: 1.9049999999999727 },
              { x: -1.0896408304843135, y: 2.0074405237317023 },
              { x: -1.0896408304844272, y: 1.8000194762682895 },
              { x: -1.2700000000000955, y: 1.9024600000001328 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.229108mm"
            pcbY="3.0356068mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -2.40950799999996, y: 2.285606800000096 },
              { x: 1.9512919999999667, y: 2.285606800000096 },
              { x: 1.9512919999999667, y: -1.9481931999998778 },
              { x: -2.40950799999996, y: -1.9481931999998778 },
              { x: -2.40950799999996, y: 2.285606800000096 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C5220127.obj?uuid=156e205a83594893a980adc9e51e4d53",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C5220127.step?uuid=156e205a83594893a980adc9e51e4d53",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: -0.000038099999983387534,
          y: 0.00008889999980965513,
          z: 0,
        },
      }}
      {...props}
    />
  );
};

export default TPS7A9401DSCR;
