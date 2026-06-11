import type { ChipProps } from "@tscircuit/props";

const pinLabels = {
  pin1: ["IN"],
  pin2: ["GND"],
  pin3: ["EN"],
  pin4: ["NC"],
  pin5: ["OUT"],
} as const;

export const TPS7A0230PDBVR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C3747031"],
      }}
      manufacturerPartNumber="TPS7A0230PDBVR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin2"]}
            pcbX="1.100074mm"
            pcbY="-0.000127mm"
            width="0.999998mm"
            height="0.5999988mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="1.100074mm"
            pcbY="0.949833mm"
            width="0.999998mm"
            height="0.5999988mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="1.100074mm"
            pcbY="-0.949833mm"
            width="0.999998mm"
            height="0.5999988mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-1.100074mm"
            pcbY="0.950087mm"
            width="0.999998mm"
            height="0.5999988mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-1.100074mm"
            pcbY="-0.950087mm"
            width="0.999998mm"
            height="0.5999988mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -0.6984238000000005, y: -1.523974599999974 },
              { x: 0.6985507999999072, y: -1.5240254000000277 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.42237660000012056, y: 1.3969745999999077 },
              { x: 0.42240199999992, y: 1.3969745999999077 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.88894920000007, y: -0.38097460000005867 },
              { x: -0.88894920000007, y: 0.38097460000005867 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 2.1600921999998945, y: -0.9602216000000681 },
              { x: 2.154977189487454, y: -0.9990739621365492 },
              { x: 2.139980737463702, y: -1.0352785999999696 },
              { x: 2.1161248273510864, y: -1.0663682273509494 },
              { x: 2.085035199999993, y: -1.090224137463565 },
              { x: 2.0488305621365726, y: -1.1052205894874305 },
              { x: 2.0099781999999777, y: -1.1103355999999849 },
              { x: 1.971125837863383, y: -1.1052205894874305 },
              { x: 1.9349211999998488, y: -1.090224137463565 },
              { x: 1.903831572648869, y: -1.0663682273509494 },
              { x: 1.8799756625362534, y: -1.0352785999999696 },
              { x: 1.864979210512388, y: -0.9990739621365492 },
              { x: 1.859864200000061, y: -0.9602216000000681 },
              { x: 1.864979210512388, y: -0.9213692378634732 },
              { x: 1.8799756625362534, y: -0.8851645999999391 },
              { x: 1.903831572648869, y: -0.8540749726489594 },
              { x: 1.9349211999998488, y: -0.8302190625363437 },
              { x: 1.971125837863383, y: -0.8152226105124782 },
              { x: 2.0099781999999777, y: -0.8101076000000376 },
              { x: 2.0488305621365726, y: -0.8152226105124782 },
              { x: 2.085035199999993, y: -0.8302190625363437 },
              { x: 2.1161248273510864, y: -0.8540749726489594 },
              { x: 2.139980737463702, y: -0.8851645999999391 },
              { x: 2.154977189487454, y: -0.9213692378634732 },
              { x: 2.1600921999998945, y: -0.9602216000000681 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="0.283972mm"
            pcbY="2.448689mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -1.8456280000000334, y: 1.6986889999999448 },
              { x: 2.413571999999931, y: 1.6986889999999448 },
              { x: 2.413571999999931, y: -1.7731110000000854 },
              { x: -1.8456280000000334, y: -1.7731110000000854 },
              { x: -1.8456280000000334, y: 1.6986889999999448 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C3747031.obj?uuid=8c971aea3af54c53b74baeb1f489d393",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C3747031.step?uuid=8c971aea3af54c53b74baeb1f489d393",
        pcbRotationOffset: 90,
        modelOriginPosition: {
          x: -0.000012699999956566899,
          y: 0.00006349999989652133,
          z: -0.7,
        },
      }}
      {...props}
    />
  );
};
