import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["GND", "1"],
  pin2: ["OUT", "2", "OUT_2", "TAB", "OUT_TAB"],
  pin3: ["IN", "3"],
} as const;

const pinRoles = {
  pin1: "ground",
  pin2: "output",
  pin3: "input",
} as const;

const pinAttributes = {
  pin1: { requiresGround: true },
} as const;

export const LM111733QKVURQ1 = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing KVU0003A; donor TLV76133KVUR (JLCPCB C41835077)
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="LM111733QKVURQ1"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin2"]}
            pcbX="-2.3670895mm"
            pcbY="0mm"
            width="6.5000124mm"
            height="5.999988mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="4.2170985mm"
            pcbY="-2.284984mm"
            width="2.7999944mm"
            height="1.2999974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="4.2170985mm"
            pcbY="2.284984mm"
            width="2.7999944mm"
            height="1.2999974mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -3.245091299999899, y: 3.2999426000000085 },
              { x: 2.1548979000000372, y: 3.2999426000000085 },
              { x: 2.1548979000000372, y: -3.300044200000002 },
              { x: -3.245091299999899, y: -3.300044200000002 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.0120015mm"
            pcbY="4.291078mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -5.875401499999839, y: 3.541078000000198 },
              { x: 5.851398500000073, y: 3.541078000000198 },
              { x: 5.851398500000073, y: -3.5883219999999483 },
              { x: -5.875401499999839, y: -3.5883219999999483 },
              { x: -5.875401499999839, y: 3.541078000000198 },
            ]}
          />
        </footprint>
      }
      {...props}
    />
  );
};

export default LM111733QKVURQ1;
