import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["NC"],
  pin2: ["A"],
  pin3: ["GND"],
  pin4: ["Y"],
  pin5: ["VCC"],
} as const;

const pinAttributes = {
  pin1: { doNotConnect: true },
  pin3: { requiresGround: true },
  pin5: { requiresPower: true },
} as const;

export const SN74LVC1G14DRLR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C19829622"],
      }}
      manufacturerPartNumber="SN74LVC1G14DRLR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.499999mm"
            pcbY="-0.71755mm"
            width="0.2800096mm"
            height="0.580009mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.000127mm"
            pcbY="-0.71755mm"
            width="0.2800096mm"
            height="0.580009mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0.499999mm"
            pcbY="-0.71755mm"
            width="0.2800096mm"
            height="0.580009mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0.499999mm"
            pcbY="0.71755mm"
            width="0.2800096mm"
            height="0.580009mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-0.499999mm"
            pcbY="0.71755mm"
            width="0.2800096mm"
            height="0.580009mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: 0.8761983999999075, y: -0.6761226000000988 },
              { x: 0.8761983999999075, y: 0.676224199999865 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.8762491999998474, y: -0.6761226000000988 },
              { x: -0.8762491999998474, y: 0.676224199999865 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 0.13136880000013207, y: 0.676224199999865 },
              { x: -0.13141960000007202, y: 0.676224199999865 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.8400034000000005, y: -1.0800080000001344 },
              { x: -0.8434108105561791, y: -1.1058898527464862 },
              { x: -0.8534008328265372, y: -1.1300079000000096 },
              { x: -0.8692926633027582, y: -1.1507185366973545 },
              { x: -0.8900032999999894, y: -1.1666103671734618 },
              { x: -0.9141213472535128, y: -1.17660038944382 },
              { x: -0.9400031999999783, y: -1.1800078000002259 },
              { x: -0.9658850527463301, y: -1.17660038944382 },
              { x: -0.9900030999999672, y: -1.1666103671734618 },
              { x: -1.0107137366971983, y: -1.1507185366973545 },
              { x: -1.0266055671734193, y: -1.1300079000000096 },
              { x: -1.0365955894437775, y: -1.1058898527464862 },
              { x: -1.0400030000000697, y: -1.0800080000001344 },
              { x: -1.0365955894437775, y: -1.0541261472537826 },
              { x: -1.0266055671734193, y: -1.0300081000001455 },
              { x: -1.0107137366971983, y: -1.0092974633028007 },
              { x: -0.9900030999999672, y: -0.9934056328266934 },
              { x: -0.9658850527463301, y: -0.9834156105564489 },
              { x: -0.9400031999999783, y: -0.9800082000001566 },
              { x: -0.9141213472535128, y: -0.9834156105564489 },
              { x: -0.8900032999999894, y: -0.9934056328266934 },
              { x: -0.8692926633027582, y: -1.0092974633028007 },
              { x: -0.8534008328265372, y: -1.0300081000001455 },
              { x: -0.8434108105561791, y: -1.0541261472537826 },
              { x: -0.8400034000000005, y: -1.0800080000001344 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.086487mm"
            pcbY="2.003808mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -1.2889869999999064, y: 1.2538079999999354 },
              { x: 1.1160130000000663, y: 1.2538079999999354 },
              { x: 1.1160130000000663, y: -1.4305920000001606 },
              { x: -1.2889869999999064, y: -1.4305920000001606 },
              { x: -1.2889869999999064, y: 1.2538079999999354 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C19829622.obj?uuid=b74a526637684c2b841b7ddaecf870ce",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C19829622.step?uuid=b74a526637684c2b841b7ddaecf870ce",
        pcbRotationOffset: 90,
        modelOriginPosition: {
          x: 0.025908000000072207,
          y: 0.033807400000114285,
          z: 0,
        },
      }}
      {...props}
    />
  );
};

export default SN74LVC1G14DRLR;
