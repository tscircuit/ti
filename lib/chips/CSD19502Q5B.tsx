import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["S1"],
  pin2: ["S2"],
  pin3: ["S3"],
  pin4: ["G"],
  pin5: ["D5"],
  pin6: ["D4"],
  pin7: ["D3"],
  pin8: ["D1"],
  pin9: ["pin8_alt1"],
} as const;

export const CSD19502Q5B = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C2864118"],
      }}
      manufacturerPartNumber="CSD19502Q5B"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-1.902968mm"
            pcbY="-2.9324935mm"
            width="0.6999986mm"
            height="1.27mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.635mm"
            pcbY="-2.9324935mm"
            width="0.6999986mm"
            height="1.27mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0.637032mm"
            pcbY="-2.9324935mm"
            width="0.6999986mm"
            height="1.27mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="1.907032mm"
            pcbY="-2.9324935mm"
            width="0.6999986mm"
            height="1.27mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="0mm"
            pcbY="0.4573905mm"
            width="4.8999902mm"
            height="4.499991mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="-1.905mm"
            pcbY="3.0674945mm"
            width="0.6999986mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-0.635mm"
            pcbY="3.0674945mm"
            width="0.6999986mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0.635mm"
            pcbY="3.0674945mm"
            width="0.6999986mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="1.905mm"
            pcbY="3.0674945mm"
            width="0.6999986mm"
            height="0.999998mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: 2.60101080000004, y: 3.067494500000066 },
              { x: 2.60101080000004, y: -2.932493499999964 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.5989788000000544, y: 3.067494500000066 },
              { x: -2.5989788000000544, y: -2.932493499999964 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.5420828000001165, y: -3.3935034999999516 },
              { x: -2.545657248970656, y: -3.420654135469249 },
              { x: -2.556137003092317, y: -3.4459544999999707 },
              { x: -2.5728078844401807, y: -3.4676804155599257 },
              { x: -2.5945338000001357, y: -3.484351296907789 },
              { x: -2.6198341645308574, y: -3.4948310510294505 },
              { x: -2.646984800000155, y: -3.49840549999999 },
              { x: -2.674135435469452, y: -3.4948310510294505 },
              { x: -2.6994358000000602, y: -3.484351296907789 },
              { x: -2.721161715560129, y: -3.4676804155599257 },
              { x: -2.7378325969079924, y: -3.4459544999999707 },
              { x: -2.7483123510294263, y: -3.420654135469249 },
              { x: -2.7518868000000793, y: -3.3935034999999516 },
              { x: -2.7483123510294263, y: -3.366352864530654 },
              { x: -2.7378325969079924, y: -3.3410524999999325 },
              { x: -2.721161715560129, y: -3.3193265844399775 },
              { x: -2.6994358000000602, y: -3.302655703092114 },
              { x: -2.674135435469452, y: -3.29217594897068 },
              { x: -2.646984800000155, y: -3.288601500000027 },
              { x: -2.6198341645308574, y: -3.29217594897068 },
              { x: -2.5945338000001357, y: -3.302655703092114 },
              { x: -2.5728078844401807, y: -3.3193265844399775 },
              { x: -2.556137003092317, y: -3.3410524999999325 },
              { x: -2.545657248970656, y: -3.366352864530654 },
              { x: -2.5420828000001165, y: -3.3935034999999516 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.0635mm"
            pcbY="4.5727005mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -2.9932000000001153, y: 3.8227005000002237 },
              { x: 2.8661999999999352, y: 3.8227005000002237 },
              { x: 2.8661999999999352, y: -3.814699499999847 },
              { x: -2.9932000000001153, y: -3.814699499999847 },
              { x: -2.9932000000001153, y: 3.8227005000002237 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2864118.obj?uuid=ed84f5dd80b4414bacf3798e6484c98f",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2864118.step?uuid=ed84f5dd80b4414bacf3798e6484c98f",
        pcbRotationOffset: 90,
        modelOriginPosition: {
          x: -0.06750050000005103,
          y: 0.001015999999935957,
          z: 0,
        },
      }}
      {...props}
    />
  );
};

export default CSD19502Q5B;
