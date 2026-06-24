import type { ChipProps } from "@tscircuit/props";

const pinLabels = {
  pin1: ["EN"],
  pin2: ["MODE"],
  pin3: ["AGND"],
  pin4: ["FB"],
  pin5: ["PG"],
  pin6: ["VOUT"],
  pin7: ["L2"],
  pin8: ["GND"],
  pin9: ["L1"],
  pin10: ["VIN"],
} as const;

export const TPS63802DLAR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C2845237"],
      }}
      manufacturerPartNumber="TPS63802DLAR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin10"]}
            pcbX="0.74994135mm"
            pcbY="0.999998mm"
            width="0.8999982mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="0.74994135mm"
            pcbY="0.499872mm"
            width="0.8999982mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="0.55004335mm"
            pcbY="0mm"
            width="1.2999974mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="0.74994135mm"
            pcbY="-0.500126mm"
            width="0.8999982mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0.74994135mm"
            pcbY="-0.999998mm"
            width="0.8999982mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-0.90004265mm"
            pcbY="-0.999998mm"
            width="0.5999988mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-0.90004265mm"
            pcbY="-0.500126mm"
            width="0.5999988mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-0.90004265mm"
            pcbY="0mm"
            width="0.5999988mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.90004265mm"
            pcbY="0.499872mm"
            width="0.5999988mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.90004265mm"
            pcbY="0.999998mm"
            width="0.5999988mm"
            height="0.2999994mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: 1.0680255500000158, y: 1.330121800000029 },
              { x: 1.0680255500000158, y: 1.5240000000001146 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.0909744500000897, y: -1.330121800000029 },
              { x: -1.0909744500000897, y: -1.5239999999998872 },
              { x: 1.0680255500000158, y: -1.5239999999998872 },
              { x: 1.0680255500000158, y: -1.330121800000029 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.0680255500000158, y: 1.5240000000001146 },
              { x: -1.0909744500000897, y: 1.5240000000001146 },
              { x: -1.0909744500000897, y: 1.330121800000029 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.297044650000089, y: 1.5240000000001146 },
              { x: -1.3004546570083448, y: 1.4980984252424605 },
              { x: -1.3104522916909218, y: 1.4739620000000286 },
              { x: -1.326356231765999, y: 1.45323558176608 },
              { x: -1.3470826499998338, y: 1.437331641691003 },
              { x: -1.3712190752423794, y: 1.427334007008426 },
              { x: -1.3971206500000335, y: 1.42392400000017 },
              { x: -1.4230222247576876, y: 1.427334007008426 },
              { x: -1.4471586500000058, y: 1.437331641691003 },
              { x: -1.467885068234068, y: 1.45323558176608 },
              { x: -1.4837890083091452, y: 1.4739620000000286 },
              { x: -1.4937866429917221, y: 1.4980984252424605 },
              { x: -1.497196649999978, y: 1.5240000000001146 },
              { x: -1.4937866429917221, y: 1.5499015747577687 },
              { x: -1.4837890083091452, y: 1.5740380000000869 },
              { x: -1.467885068234068, y: 1.5947644182340355 },
              { x: -1.4471586500000058, y: 1.6106683583091126 },
              { x: -1.4230222247576876, y: 1.6206659929916896 },
              { x: -1.3971206500000335, y: 1.6240760000000591 },
              { x: -1.3712190752423794, y: 1.6206659929916896 },
              { x: -1.3470826499998338, y: 1.6106683583091126 },
              { x: -1.326356231765999, y: 1.5947644182340355 },
              { x: -1.3104522916909218, y: 1.5740380000000869 },
              { x: -1.3004546570083448, y: 1.5499015747577687 },
              { x: -1.297044650000089, y: 1.5240000000001146 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.14972665mm"
            pcbY="2.63576mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -1.7459266500000012, y: 1.8857600000000048 },
              { x: 1.4464733499999056, y: 1.8857600000000048 },
              { x: 1.4464733499999056, y: -1.7638399999999592 },
              { x: -1.7459266500000012, y: -1.7638399999999592 },
              { x: -1.7459266500000012, y: 1.8857600000000048 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2845237.obj?uuid=aaec7da25c23451ca65c9907eea57d42",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2845237.step?uuid=aaec7da25c23451ca65c9907eea57d42",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0.07497445000001335, y: 0, z: -0.95 },
      }}
      {...props}
    />
  );
};
