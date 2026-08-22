import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["EN"],
  pin2: ["PG"],
  pin3: ["FB"],
  pin4: ["GND"],
  pin5: ["SW"],
  pin6: ["VIN"],
} as const;

const pinAttributes = {
  pin4: { requiresGround: true },
  pin6: { requiresPower: true },
} as const;

export const TPS62824ADMQR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2862909"],
      }}
      manufacturerPartNumber="TPS62824ADMQR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.6750558mm"
            pcbY="0.499999mm"
            width="0.5999988mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.6750558mm"
            pcbY="0.000127mm"
            width="0.5999988mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-0.6750558mm"
            pcbY="-0.499999mm"
            width="0.5999988mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0.4750562mm"
            pcbY="-0.499999mm"
            width="0.999998mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="0.4750562mm"
            pcbY="0.000127mm"
            width="0.999998mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0.4750562mm"
            pcbY="0.499999mm"
            width="0.999998mm"
            height="0.2500122mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -0.7250429999999142, y: -0.7998714000000291 },
              { x: 0.7749794000000065, y: -0.7998714000000291 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.7250429999999142, y: 0.8001254000000699 },
              { x: 0.7749794000000065, y: 0.8001254000000699 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.1347958000000062, y: 0.49009300000011535 },
              { x: -1.1371845358737573, y: 0.4719487496622605 },
              { x: -1.1441879550930025, y: 0.4550410000001648 },
              { x: -1.1553287862116122, y: 0.44052198621170646 },
              { x: -1.1698477999999568, y: 0.4293811550930968 },
              { x: -1.1867555496621662, y: 0.42237773587385163 },
              { x: -1.204899800000021, y: 0.41998900000010053 },
              { x: -1.2230440503378759, y: 0.42237773587385163 },
              { x: -1.2399517999999716, y: 0.4293811550930968 },
              { x: -1.25447081378843, y: 0.44052198621170646 },
              { x: -1.265611644906926, y: 0.4550410000001648 },
              { x: -1.2726150641260574, y: 0.4719487496622605 },
              { x: -1.2750037999999222, y: 0.49009300000011535 },
              { x: -1.2726150641260574, y: 0.5082372503379702 },
              { x: -1.265611644906926, y: 0.5251450000000659 },
              { x: -1.25447081378843, y: 0.5396640137884106 },
              { x: -1.2399517999999716, y: 0.5508048449070202 },
              { x: -1.2230440503378759, y: 0.5578082641262654 },
              { x: -1.204899800000021, y: 0.5601970000000165 },
              { x: -1.1867555496621662, y: 0.5578082641262654 },
              { x: -1.1698477999999568, y: 0.5508048449070202 },
              { x: -1.1553287862116122, y: 0.5396640137884106 },
              { x: -1.1441879550930025, y: 0.5251450000000659 },
              { x: -1.1371845358737573, y: 0.5082372503379702 },
              { x: -1.1347958000000062, y: 0.49009300000011535 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.1401318mm"
            pcbY="1.787527mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -1.5204317999998693, y: 1.0375270000000683 },
              { x: 1.2401682000001983, y: 1.0375270000000683 },
              { x: 1.2401682000001983, y: -1.0626730000001317 },
              { x: -1.5204317999998693, y: -1.0626730000001317 },
              { x: -1.5204317999998693, y: 1.0375270000000683 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2862909.obj?uuid=8f670b8e7b1f4fb285b2b8a3630f9ebe",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2862909.step?uuid=8f670b8e7b1f4fb285b2b8a3630f9ebe",
        pcbRotationOffset: 270,
        modelOriginPosition: {
          x: 0.000012700000070253736,
          y: -0.026034999999978936,
          z: -0.02,
        },
      }}
      {...props}
    />
  );
};

export default TPS62824ADMQR;
