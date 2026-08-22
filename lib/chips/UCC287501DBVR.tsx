import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["GND"],
  pin2: ["FB"],
  pin3: ["FLT"],
  pin4: ["CS"],
  pin5: ["VDD"],
  pin6: ["DRV"],
} as const;

const pinAttributes = {
  pin1: { requiresGround: true },
  pin5: { requiresPower: true },
} as const;

export const UCC287501DBVR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C32489193"],
      }}
      manufacturerPartNumber="UCC287501DBVR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin6"]}
            pcbX="-0.94996mm"
            pcbY="1.149096mm"
            width="0.532003mm"
            height="1.072007mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-0mm"
            pcbY="1.149096mm"
            width="0.532003mm"
            height="1.072007mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0.94996mm"
            pcbY="1.149096mm"
            width="0.532003mm"
            height="1.072007mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0.94996mm"
            pcbY="-1.149096mm"
            width="0.532003mm"
            height="1.072007mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0mm"
            pcbY="-1.149096mm"
            width="0.532003mm"
            height="1.072007mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.94996mm"
            pcbY="-1.149096mm"
            width="0.532003mm"
            height="1.072007mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: 1.5264892000001282, y: -0.8892032000002246 },
              { x: 1.5264892000001282, y: 0.8892031999998835 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.5264892000000145, y: -0.8892032000002246 },
              { x: -1.5264892000000145, y: 0.8892031999998835 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.518158000000085, y: -1.3014960000001565 },
              { x: -1.5232730105125256, y: -1.3403483621366377 },
              { x: -1.5382694625362774, y: -1.3765530000001718 },
              { x: -1.562125372648893, y: -1.4076426273512652 },
              { x: -1.5932149999999865, y: -1.431498537463881 },
              { x: -1.6294196378635206, y: -1.4464949894876327 },
              { x: -1.6682720000000018, y: -1.4516100000000733 },
              { x: -1.7071243621365966, y: -1.4464949894876327 },
              { x: -1.743329000000017, y: -1.431498537463881 },
              { x: -1.7744186273511104, y: -1.4076426273512652 },
              { x: -1.7982745374637261, y: -1.3765530000001718 },
              { x: -1.813270989487478, y: -1.3403483621366377 },
              { x: -1.8183860000000323, y: -1.3014960000001565 },
              { x: -1.813270989487478, y: -1.2626436378635617 },
              { x: -1.7982745374637261, y: -1.2264390000000276 },
              { x: -1.7744186273511104, y: -1.1953493726491615 },
              { x: -1.743329000000017, y: -1.1714934625365458 },
              { x: -1.7071243621365966, y: -1.1564970105125667 },
              { x: -1.6682720000000018, y: -1.151382000000126 },
              { x: -1.6294196378635206, y: -1.1564970105125667 },
              { x: -1.5932149999999865, y: -1.1714934625365458 },
              { x: -1.562125372648893, y: -1.1953493726491615 },
              { x: -1.5382694625362774, y: -1.2264390000000276 },
              { x: -1.5232730105125256, y: -1.2626436378635617 },
              { x: -1.518158000000085, y: -1.3014960000001565 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.13716mm"
            pcbY="2.682496mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -2.0635600000000522, y: 1.932495999999901 },
              { x: 1.7892399999999498, y: 1.932495999999901 },
              { x: 1.7892399999999498, y: -2.021904000000063 },
              { x: -2.0635600000000522, y: -2.021904000000063 },
              { x: -2.0635600000000522, y: 1.932495999999901 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C32489193.obj?uuid=6f37130fd61d48febac97e962793fd76",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C32489193.step?uuid=6f37130fd61d48febac97e962793fd76",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: 0.000012699999956566899,
          y: -0.000012699999842880061,
          z: -0.75,
        },
      }}
      {...props}
    />
  );
};

export default UCC287501DBVR;
