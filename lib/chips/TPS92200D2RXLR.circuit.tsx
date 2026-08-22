import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["BOOT"],
  pin2: ["SW"],
  pin3: ["VIN"],
  pin4: ["GND"],
  pin5: ["DIM"],
  pin6: ["FB"],
} as const;

const pinAttributes = {
  pin3: { requiresPower: true },
  pin4: { requiresGround: true },
} as const;

export const TPS92200D2RXLR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C5122739"],
      }}
      manufacturerPartNumber="TPS92200D2RXLR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.50003075mm"
            pcbY="0.7500112mm"
            width="0.499999mm"
            height="0.1999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.50000535mm"
            pcbY="0.0499872mm"
            width="0.499999mm"
            height="0.1999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-0.50000535mm"
            pcbY="-0.7500112mm"
            width="0.499999mm"
            height="0.1999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0.55003065mm"
            pcbY="-0.7500112mm"
            width="0.3999992mm"
            height="0.1999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="0.55003065mm"
            pcbY="0.2749804mm"
            width="0.3999992mm"
            height="0.1999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            points={[
              { x: "0.75003025mm", y: "0.649986mm" },
              { x: "0.75003025mm", y: "0.8499856mm" },
              { x: "-0.04996815mm", y: "0.8499856mm" },
              { x: "-0.04996815mm", y: "0.8499602mm" },
              { x: "-0.04996815mm", y: "0.449961mm" },
              { x: "0.15003145mm", y: "0.449961mm" },
              { x: "0.15003145mm", y: "0.649986mm" },
            ]}
            shape="polygon"
          />
          <silkscreenpath
            route={[
              { x: -0.7549959500000796, y: 1.0199878000000808 },
              { x: 0.7450010499998143, y: 1.0199878000000808 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 0.7450010499998143, y: 0.01084579999997004 },
              { x: 0.7450010499998143, y: -0.4858765999999832 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 0.7450010499998143, y: -1.0299953999999616 },
              { x: -0.7549959500000796, y: -1.0299953999999616 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.7549959500000796, y: 0.3140456000000995 },
              { x: -0.7549959500000796, y: 0.4859528000000637 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.7549959500000796, y: -0.4859781999999768 },
              { x: -0.7549959500000796, y: -0.2140711999999212 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.914965150000171, y: 0.9899904000001243 },
              { x: -0.9166692880201026, y: 0.9770461866248752 },
              { x: -0.921665567890841, y: 0.9649841000001516 },
              { x: -0.9296135013953517, y: 0.9546261513952459 },
              { x: -0.9399714500001437, y: 0.9466782178908488 },
              { x: -0.952033536624981, y: 0.9416819380202242 },
              { x: -0.9649777500001164, y: 0.9399778000001788 },
              { x: -0.9779219633752518, y: 0.9416819380202242 },
              { x: -0.9899840499999755, y: 0.9466782178908488 },
              { x: -1.0003419986048812, y: 0.9546261513952459 },
              { x: -1.0082899321093919, y: 0.9649841000001516 },
              { x: -1.0132862119801302, y: 0.9770461866248752 },
              { x: -1.0149903500000619, y: 0.9899904000001243 },
              { x: -1.0132862119801302, y: 1.002934613375146 },
              { x: -1.0082899321093919, y: 1.014996700000097 },
              { x: -1.0003419986048812, y: 1.025354648604889 },
              { x: -0.9899840499999755, y: 1.0333025821093997 },
              { x: -0.9779219633752518, y: 1.0382988619800244 },
              { x: -0.9649777500001164, y: 1.0400030000000697 },
              { x: -0.952033536624981, y: 1.0382988619800244 },
              { x: -0.9399714500001437, y: 1.0333025821093997 },
              { x: -0.9296135013953517, y: 1.025354648604889 },
              { x: -0.921665567890841, y: 1.014996700000097 },
              { x: -0.9166692880201026, y: 1.002934613375146 },
              { x: -0.914965150000171, y: 0.9899904000001243 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.12774295mm"
            pcbY="2.0294112mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -1.254042950000212, y: 1.2794112000000268 },
              { x: 0.9985570499999312, y: 1.2794112000000268 },
              { x: 0.9985570499999312, y: -1.2779887999998891 },
              { x: -1.254042950000212, y: -1.2779887999998891 },
              { x: -1.254042950000212, y: 1.2794112000000268 },
            ]}
          />
        </footprint>
      }
      {...props}
    />
  );
};

export default TPS92200D2RXLR;
