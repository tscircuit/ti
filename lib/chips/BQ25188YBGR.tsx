import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin2: ["IN", "A2"],
  pin4: ["SYS", "B2"],
  pin6: ["BAT", "C2"],
  pin8: ["GND", "D2"],
  pin3: ["SCL", "B1"],
  pin5: ["SDA", "C1"],
  pin1: ["N_INT", "A1"],
  pin7: ["TS_MR", "D1"],
} as const;

const pinRoles = {
  pin2: "power",
  pin4: "power",
  pin6: "power",
  pin8: "ground",
  pin3: "bidirectional",
  pin5: "bidirectional",
  pin1: "output",
  pin7: "bidirectional",
} as const;

const pinAttributes = {
  pin2: {
    requiresPower: true,
  },
  pin4: {
    requiresPower: true,
  },
  pin6: {
    requiresPower: true,
  },
  pin8: {
    requiresGround: true,
  },
} as const;

export const BQ25188YBGR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C43043524"],
      }}
      manufacturerPartNumber="BQ25188YBGR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.200025mm"
            pcbY="0.599948mm"
            radius="0.0999998mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="0.200025mm"
            pcbY="0.599948mm"
            radius="0.0999998mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-0.200025mm"
            pcbY="0.199898mm"
            radius="0.0999998mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0.200025mm"
            pcbY="0.199898mm"
            radius="0.0999998mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-0.200025mm"
            pcbY="-0.200152mm"
            radius="0.0999998mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0.200025mm"
            pcbY="-0.200152mm"
            radius="0.0999998mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-0.200025mm"
            pcbY="-0.599948mm"
            radius="0.0999998mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="0.200025mm"
            pcbY="-0.599948mm"
            radius="0.0999998mm"
            shape="circle"
          />
          <silkscreenpath
            route={[
              { x: -0.7000239999997575, y: 0.5999480000000403 },
              { x: -0.7000239999997575, y: 0.9999472000000651 },
              { x: -0.20002499999986867, y: 0.9999472000000651 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 0.5500624000001153, y: -0.8500618000000486 },
              { x: -0.5499607999997806, y: -0.8500618000000486 },
              { x: -0.5499607999997806, y: 0.8499094000001151 },
              { x: 0.5499862000001485, y: 0.8499094000001151 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 0.5500624000001153, y: 0.8499094000001151 },
              { x: 0.5500624000001153, y: -0.8500618000000486 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.085725mm"
            pcbY="2.006348mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -0.9580249999996795, y: 1.2563480000000027 },
              { x: 0.7865750000003118, y: 1.2563480000000027 },
              { x: 0.7865750000003118, y: -1.0978520000001026 },
              { x: -0.9580249999996795, y: -1.0978520000001026 },
              { x: -0.9580249999996795, y: 1.2563480000000027 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C43043524.obj?uuid=3d1a5469ceb6429992df21d8450a353a",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C43043524.step?uuid=3d1a5469ceb6429992df21d8450a353a",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: -0.000012700000070253736, z: -0.052 },
      }}
      {...props}
    />
  );
};

export default BQ25188YBGR;
