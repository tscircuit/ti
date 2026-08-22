import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["CLKIN"],
  pin2: ["1G"],
  pin3: ["Y0"],
  pin4: ["GND"],
  pin5: ["Y2"],
  pin6: ["VDD"],
  pin7: ["Y3"],
  pin8: ["Y1"],
} as const;

const pinAttributes = {
  pin4: { requiresGround: true },
  pin6: { requiresPower: true },
} as const;

export const LMK1C1104DQFR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C3613454"],
      }}
      manufacturerPartNumber="LMK1C1104DQFR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.8437245mm"
            pcbY="0.750062mm"
            width="0.999998mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.8437245mm"
            pcbY="0.249936mm"
            width="0.824992mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-0.8437245mm"
            pcbY="-0.249936mm"
            width="0.824992mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-0.8437245mm"
            pcbY="-0.750062mm"
            width="0.824992mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="0.9312275mm"
            pcbY="0.750062mm"
            width="0.824992mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="0.9312275mm"
            pcbY="0.249936mm"
            width="0.824992mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0.9312275mm"
            pcbY="-0.249936mm"
            width="0.824992mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="0.9312275mm"
            pcbY="-0.750062mm"
            width="0.824992mm"
            height="0.2800096mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -1.0324972999999318, y: 1.0762234000000035 },
              { x: 1.1200003000001288, y: 1.0762234000000035 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.1200003000001288, y: -1.0762234000000035 },
              { x: -1.0324972999999318, y: -1.0762234000000035 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.7611725000000433, y: 0.7619999999999436 },
              { x: -1.7645825070082992, y: 0.7360984252422895 },
              { x: -1.7745801416908762, y: 0.7119619999998577 },
              { x: -1.7904840817659533, y: 0.691235581765909 },
              { x: -1.8112104999997882, y: 0.6753316416908319 },
              { x: -1.8353469252423338, y: 0.665334007008255 },
              { x: -1.8612484999999879, y: 0.6619239999999991 },
              { x: -1.887150074757642, y: 0.665334007008255 },
              { x: -1.9112864999999601, y: 0.6753316416908319 },
              { x: -1.9320129182340224, y: 0.691235581765909 },
              { x: -1.9479168583090996, y: 0.7119619999998577 },
              { x: -1.9579144929916765, y: 0.7360984252422895 },
              { x: -1.9613244999999324, y: 0.7619999999999436 },
              { x: -1.9579144929916765, y: 0.7879015747575977 },
              { x: -1.9479168583090996, y: 0.8120379999999159 },
              { x: -1.9320129182340224, y: 0.8327644182338645 },
              { x: -1.9112864999999601, y: 0.8486683583089416 },
              { x: -1.887150074757642, y: 0.8586659929915186 },
              { x: -1.8612484999999879, y: 0.8620759999998882 },
              { x: -1.8353469252423338, y: 0.8586659929915186 },
              { x: -1.8112104999997882, y: 0.8486683583089416 },
              { x: -1.7904840817659533, y: 0.8327644182338645 },
              { x: -1.7745801416908762, y: 0.8120379999999159 },
              { x: -1.7645825070082992, y: 0.7879015747575977 },
              { x: -1.7611725000000433, y: 0.7619999999999436 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.3118485mm"
            pcbY="2.0668254mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -2.21284849999995, y: 1.316825399999857 },
              { x: 1.5891515000000709, y: 1.316825399999857 },
              { x: 1.5891515000000709, y: -1.3421746000000212 },
              { x: -2.21284849999995, y: -1.3421746000000212 },
              { x: -2.21284849999995, y: 1.316825399999857 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C3613454.obj?uuid=bdbb82cfec2f421cabcde62c239dd780",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C3613454.step?uuid=bdbb82cfec2f421cabcde62c239dd780",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: -0.04375150000009853,
          y: -0.000025399999913133797,
          z: 0,
        },
      }}
      {...props}
    />
  );
};

export default LMK1C1104DQFR;
