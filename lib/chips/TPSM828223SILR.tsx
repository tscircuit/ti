import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VIN2"],
  pin2: ["VIN1"],
  pin3: ["EN"],
  pin4: ["PG"],
  pin5: ["VOUT3"],
  pin6: ["VOUT2"],
  pin7: ["VOUT1"],
  pin8: ["FB"],
  pin9: ["GND2"],
  pin10: ["GND1"],
} as const;

const pinAttributes = {
  pin1: { requiresPower: true },
  pin2: { requiresPower: true },
  pin9: { requiresGround: true },
  pin10: { requiresGround: true },
} as const;

export const TPSM828223SILR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C5219366"],
      }}
      manufacturerPartNumber="TPSM828223SILR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin10"]}
            pcbX="-0.999998mm"
            pcbY="0.6250178mm"
            width="0.2500122mm"
            height="0.6500114mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="-0.499872mm"
            pcbY="0.6250178mm"
            width="0.2500122mm"
            height="0.6500114mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-0mm"
            pcbY="0.6250178mm"
            width="0.2500122mm"
            height="0.6500114mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="0.500126mm"
            pcbY="0.6250178mm"
            width="0.2500122mm"
            height="0.6500114mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0.999998mm"
            pcbY="0.6250178mm"
            width="0.2500122mm"
            height="0.6500114mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="0.999998mm"
            pcbY="-0.6250178mm"
            width="0.2500122mm"
            height="0.6500114mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0.500126mm"
            pcbY="-0.6250178mm"
            width="0.2500122mm"
            height="0.6500114mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-0mm"
            pcbY="-0.6250178mm"
            width="0.2500122mm"
            height="0.6500114mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.499872mm"
            pcbY="-0.6250178mm"
            width="0.2500122mm"
            height="0.6500114mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.999998mm"
            pcbY="-0.6250178mm"
            width="0.2500122mm"
            height="0.6500114mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -1.3970000000000482, y: -1.1429491999999755 },
              { x: -1.3970000000000482, y: 1.1430508000000827 },
              { x: 1.3970000000000482, y: 1.1430508000000827 },
              { x: 1.3970000000000482, y: -1.1429491999999755 },
              { x: -1.3970000000000482, y: -1.1429491999999755 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.143000000000029, y: -1.5239491999999473 },
              { x: -1.1473274200612877, y: -1.5568192187280374 },
              { x: -1.1600147737193538, y: -1.5874491999999236 },
              { x: -1.1801974387892642, y: -1.6137517612107786 },
              { x: -1.2065000000000055, y: -1.6339344262805753 },
              { x: -1.2371299812720054, y: -1.6466217799386413 },
              { x: -1.2699999999999818, y: -1.6509492000000137 },
              { x: -1.302870018728072, y: -1.6466217799386413 },
              { x: -1.3334999999999582, y: -1.6339344262805753 },
              { x: -1.3598025612106994, y: -1.6137517612107786 },
              { x: -1.3799852262804961, y: -1.5874491999999236 },
              { x: -1.3926725799386759, y: -1.5568192187280374 },
              { x: -1.3970000000000482, y: -1.5239491999999473 },
              { x: -1.3926725799386759, y: -1.4910791812719708 },
              { x: -1.3799852262804961, y: -1.460449199999971 },
              { x: -1.3598025612106994, y: -1.4341466387893433 },
              { x: -1.3334999999999582, y: -1.4139639737193193 },
              { x: -1.302870018728072, y: -1.4012766200612532 },
              { x: -1.2699999999999818, y: -1.3969491999999946 },
              { x: -1.2371299812720054, y: -1.4012766200612532 },
              { x: -1.2065000000000055, y: -1.4139639737193193 },
              { x: -1.1801974387892642, y: -1.4341466387893433 },
              { x: -1.1600147737193538, y: -1.460449199999971 },
              { x: -1.1473274200612877, y: -1.4910791812719708 },
              { x: -1.143000000000029, y: -1.5239491999999473 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.009398mm"
            pcbY="2.1328908mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -1.6563979999998537, y: 1.382890800000041 },
              { x: 1.6376020000000153, y: 1.382890800000041 },
              { x: 1.6376020000000153, y: -1.9111091999999417 },
              { x: -1.6563979999998537, y: -1.9111091999999417 },
              { x: -1.6563979999998537, y: 1.382890800000041 },
            ]}
          />
        </footprint>
      }
      {...props}
    />
  );
};

export default TPSM828223SILR;
