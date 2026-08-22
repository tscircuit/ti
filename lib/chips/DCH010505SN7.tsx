import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VI_P"],
  pin2: ["VI_N"],
  pin5: ["VO_N"],
  pin7: ["VO_P"],
} as const;

export const DCH010505SN7 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C19096"],
      }}
      manufacturerPartNumber="DCH010505SN7"
      footprint={
        <footprint>
          <platedhole
            portHints={["pin2"]}
            pcbX="-5.08mm"
            pcbY="0mm"
            outerDiameter="1.5999968mm"
            holeDiameter="0.999998mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin1"]}
            pcbX="-7.62mm"
            pcbY="0mm"
            outerDiameter="1.5999968mm"
            holeDiameter="0.999998mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin5"]}
            pcbX="2.54mm"
            pcbY="0mm"
            outerDiameter="1.5999968mm"
            holeDiameter="0.999998mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin7"]}
            pcbX="7.62mm"
            pcbY="0mm"
            outerDiameter="1.5999968mm"
            holeDiameter="0.999998mm"
            shape="circle"
          />
          <silkscreenpath
            route={[
              { x: -9.77897459999997, y: -0.3809999999998581 },
              { x: -9.77897459999997, y: 1.2699999999999818 },
              { x: 8.127974599999902, y: 1.2699999999999818 },
              { x: 9.77897459999997, y: 1.2699999999999818 },
              { x: 9.77897459999997, y: -1.9049999999999727 },
              { x: 3.047999999999888, y: -1.9049999999999727 },
              { x: 3.047999999999888, y: -6.349999999999909 },
              { x: -4.953000000000088, y: -6.349999999999909 },
              { x: -4.953000000000088, y: -1.9049999999999727 },
              { x: -9.77897459999997, y: -1.9049999999999727 },
              { x: -9.77897459999997, y: -0.2539999999999054 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.3937mm"
            pcbY="2.397mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -10.943399999999997, y: 1.6469999999999345 },
              { x: 10.155999999999949, y: 1.6469999999999345 },
              { x: 10.155999999999949, y: -7.51439999999991 },
              { x: -10.943399999999997, y: -7.51439999999991 },
              { x: -10.943399999999997, y: 1.6469999999999345 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C19096.obj?uuid=947d2eae18784622ae4764c50258ee37",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C19096.step?uuid=947d2eae18784622ae4764c50258ee37",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: 0.014998699999978271,
          y: 0.009998699999941962,
          z: -0.010007600000000227,
        },
      }}
      {...props}
    />
  );
};

export default DCH010505SN7;
