import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin5: ["ADD0", "C1"],
  pin6: ["ALERT", "C2"],
  pin4: ["GND", "B2"],
  pin2: ["SCL", "A2"],
  pin1: ["SDA", "A1"],
  pin3: ["V_P", "B1"],
} as const;

const pinRoles = {
  pin5: "input",
  pin6: "output",
  pin4: "ground",
  pin2: "input",
  pin1: "bidirectional",
  pin3: "power",
} as const;

const pinAttributes = {
  pin4: {
    requiresGround: true,
  },
  pin3: {
    requiresPower: true,
  },
} as const;

export const TMP119AIYBGR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C22428347"],
      }}
      manufacturerPartNumber="TMP119AIYBGR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.40005mm"
            pcbY="-0.199898mm"
            radius="0.1149985mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.40005mm"
            pcbY="0.199898mm"
            radius="0.1149985mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0mm"
            pcbY="-0.199898mm"
            radius="0.1149985mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0mm"
            pcbY="0.199898mm"
            radius="0.1149985mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="0.40005mm"
            pcbY="-0.199898mm"
            radius="0.1149985mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0.40005mm"
            pcbY="0.199898mm"
            radius="0.1149985mm"
            shape="circle"
          />
          <silkscreenpath
            route={[
              { x: -0.8261857999999904, y: 0.5761989999999884 },
              { x: 0.8262111999999888, y: 0.5761989999999884 },
              { x: 0.8262111999999888, y: -0.5761990000000026 },
              { x: -0.8261857999999904, y: -0.5761990000000026 },
              { x: -0.8261857999999904, y: 0.5761989999999884 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.7119619999999998, y: -0.7620000000000005 },
              { x: -0.7136670035041419, y: -0.7749507873788417 },
              { x: -0.7186658208454304, y: -0.787019000000015 },
              { x: -0.726617790882969, y: -0.7973822091170177 },
              { x: -0.7369809999999859, y: -0.8053341791545847 },
              { x: -0.7490492126211734, y: -0.810332996495859 },
              { x: -0.7620000000000005, y: -0.8120380000000154 },
              { x: -0.7749507873788417, y: -0.810332996495859 },
              { x: -0.7870190000000008, y: -0.8053341791545847 },
              { x: -0.7973822091170177, y: -0.7973822091170177 },
              { x: -0.8053341791545705, y: -0.787019000000015 },
              { x: -0.8103329964958448, y: -0.7749507873788417 },
              { x: -0.8120380000000011, y: -0.7620000000000005 },
              { x: -0.8103329964958448, y: -0.7490492126211734 },
              { x: -0.8053341791545705, y: -0.7369810000000143 },
              { x: -0.7973822091170177, y: -0.7266177908829974 },
              { x: -0.7870190000000008, y: -0.7186658208454304 },
              { x: -0.7749507873788417, y: -0.7136670035041561 },
              { x: -0.7620000000000005, y: -0.7119619999999998 },
              { x: -0.7490492126211734, y: -0.7136670035041561 },
              { x: -0.7369809999999859, y: -0.7186658208454304 },
              { x: -0.726617790882969, y: -0.7266177908829974 },
              { x: -0.7186658208454304, y: -0.7369810000000143 },
              { x: -0.7136670035041419, y: -0.7490492126211734 },
              { x: -0.7119619999999998, y: -0.7620000000000005 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.0254mm"
            pcbY="1.5842mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -1.113599999999991, y: 0.8341999999999956 },
              { x: 1.0628000000000242, y: 0.8341999999999956 },
              { x: 1.0628000000000242, y: -1.06280000000001 },
              { x: -1.113599999999991, y: -1.06280000000001 },
              { x: -1.113599999999991, y: 0.8341999999999956 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C22428347.obj?uuid=b7ce441a45ac4e84b306147eb83d2169",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C22428347.step?uuid=b7ce441a45ac4e84b306147eb83d2169",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0.000012700000013410317, y: 0, z: -0.481 },
      }}
      {...props}
    />
  );
};

export default TMP119AIYBGR;
