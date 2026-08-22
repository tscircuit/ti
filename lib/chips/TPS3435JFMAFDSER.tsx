import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["SET0", "1"],
  pin2: ["WD_EN", "2"],
  pin3: ["WDI", "3"],
  pin4: ["GND", "4"],
  pin5: ["WDO", "5"],
  pin6: ["VDD", "6"],
} as const;

const pinRoles = {
  pin1: "input",
  pin2: "control",
  pin3: "input",
  pin4: "ground",
  pin5: "output",
  pin6: "power",
} as const;

const pinAttributes = {
  pin4: { requiresGround: true },
  pin6: { requiresPower: true },
} as const;

export const TPS3435JFMAFDSER = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing DSE0006A; donor TPS389030DSER (JLCPCB C2066942)
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="TPS3435JFMAFDSER"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.581025mm"
            pcbY="0.499999mm"
            width="0.8400034mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.636143mm"
            pcbY="0.000127mm"
            width="0.7500112mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-0.636143mm"
            pcbY="-0.499999mm"
            width="0.7500112mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0.636143mm"
            pcbY="-0.499999mm"
            width="0.7500112mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="0.636143mm"
            pcbY="0.000127mm"
            width="0.7500112mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0.636143mm"
            pcbY="0.499999mm"
            width="0.7500112mm"
            height="0.2800096mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -1.0417809999999008, y: -0.8888729999999896 },
              { x: 1.0562589999999545, y: -0.8888729999999896 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.0570209999999634, y: 0.914527000000021 },
              { x: 1.0410190000000057, y: 0.914527000000021 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.2830810000000383, y: 0.5081270000000586 },
              { x: -1.2852447100307245, y: 0.49169199063601354 },
              { x: -1.2915883868597575, y: 0.47637700000007044 },
              { x: -1.3016797193946559, y: 0.4632257193946998 },
              { x: -1.3148310000001402, y: 0.45313438685980145 },
              { x: -1.3301459906359696, y: 0.4467907100307684 },
              { x: -1.3465810000000147, y: 0.4446269999999686 },
              { x: -1.3630160093640598, y: 0.4467907100307684 },
              { x: -1.3783310000001165, y: 0.45313438685980145 },
              { x: -1.3914822806052598, y: 0.4632257193946998 },
              { x: -1.4015736131403855, y: 0.47637700000007044 },
              { x: -1.4079172899694186, y: 0.49169199063601354 },
              { x: -1.410080999999991, y: 0.5081270000000586 },
              { x: -1.4079172899694186, y: 0.5245620093641037 },
              { x: -1.4015736131403855, y: 0.5398770000000468 },
              { x: -1.3914822806052598, y: 0.5530282806053037 },
              { x: -1.3783310000001165, y: 0.5631196131404295 },
              { x: -1.3630160093640598, y: 0.5694632899694625 },
              { x: -1.3465810000000147, y: 0.571627000000035 },
              { x: -1.3301459906359696, y: 0.5694632899694625 },
              { x: -1.3148310000001402, y: 0.5631196131404295 },
              { x: -1.3016797193946559, y: 0.5530282806053037 },
              { x: -1.2915883868597575, y: 0.5398770000000468 },
              { x: -1.2852447100307245, y: 0.5245620093641037 },
              { x: -1.2830810000000383, y: 0.5081270000000586 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.181737mm"
            pcbY="1.906399mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -1.663637000000108, y: 1.1563989999999649 },
              { x: 1.300162999999884, y: 1.1563989999999649 },
              { x: 1.300162999999884, y: -1.1470010000000457 },
              { x: -1.663637000000108, y: -1.1470010000000457 },
              { x: -1.663637000000108, y: 1.1563989999999649 },
            ]}
          />
        </footprint>
      }
      {...props}
    />
  );
};

export default TPS3435JFMAFDSER;
