import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["GND"],
  pin2: ["OUT"],
  pin3: ["IN"],
} as const;

const pinAttributes = {
  pin1: { requiresGround: true },
} as const;

export const TLV76133KVUR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C41835077"],
      }}
      manufacturerPartNumber="TLV76133KVUR"
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
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C41835077.obj?uuid=9aa7a0eadfaa4b8eac48494dee2e6800",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C41835077.step?uuid=9aa7a0eadfaa4b8eac48494dee2e6800",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: 0.9000254999999244,
          y: 0.00012700000002041634,
          z: -0.05,
        },
      }}
      {...props}
    />
  );
};

export default TLV76133KVUR;
