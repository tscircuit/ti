import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["S3"],
  pin2: ["S2"],
  pin3: ["S1"],
  pin4: ["G"],
  pin5: ["D1"],
  pin6: ["D2"],
  pin7: ["D3"],
  pin8: ["D4"],
  pin9: ["pin8_alt1"],
} as const;

export const CSD18510Q5B = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C2876544"],
      }}
      manufacturerPartNumber="CSD18510Q5B"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin5"]}
            pcbX="1.905mm"
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
            portHints={["pin7"]}
            pcbX="-0.635mm"
            pcbY="3.0674945mm"
            width="0.6999986mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-1.905mm"
            pcbY="3.0674945mm"
            width="0.6999986mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="-0.001016mm"
            pcbY="0.8573897mm"
            width="4.499991mm"
            height="3.999992mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="1.905mm"
            pcbY="-2.9324935mm"
            width="0.6999986mm"
            height="1.27mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0.635mm"
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
            portHints={["pin1"]}
            pcbX="-1.905mm"
            pcbY="-2.9324935mm"
            width="0.6999986mm"
            height="1.27mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: 2.599994800000104, y: 3.067494500000066 },
              { x: 2.599994800000104, y: -2.932493499999964 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.599994800000104, y: 3.067494500000066 },
              { x: -2.599994800000104, y: -2.932493499999964 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.543047999999999, y: -3.3935034999999516 },
              { x: -2.546622448970652, y: -3.420654135469249 },
              { x: -2.557102203092086, y: -3.4459544999999707 },
              { x: -2.5737730844399493, y: -3.4676804155599257 },
              { x: -2.595499000000018, y: -3.484351296907789 },
              { x: -2.620799364530626, y: -3.494831051029223 },
              { x: -2.6479499999999234, y: -3.498405499999876 },
              { x: -2.6751006354693345, y: -3.494831051029223 },
              { x: -2.700400999999829, y: -3.484351296907789 },
              { x: -2.722126915560011, y: -3.4676804155599257 },
              { x: -2.738797796907761, y: -3.4459544999999707 },
              { x: -2.7492775510293086, y: -3.420654135469249 },
              { x: -2.7528519999999617, y: -3.3935034999999516 },
              { x: -2.7492775510293086, y: -3.366352864530654 },
              { x: -2.738797796907761, y: -3.341052500000046 },
              { x: -2.722126915560011, y: -3.3193265844399775 },
              { x: -2.700400999999829, y: -3.302655703092114 },
              { x: -2.6751006354693345, y: -3.2921759489705664 },
              { x: -2.6479499999999234, y: -3.2886014999999134 },
              { x: -2.620799364530626, y: -3.2921759489705664 },
              { x: -2.595499000000018, y: -3.302655703092114 },
              { x: -2.5737730844399493, y: -3.3193265844399775 },
              { x: -2.557102203092086, y: -3.341052500000046 },
              { x: -2.546622448970652, y: -3.366352864530654 },
              { x: -2.543047999999999, y: -3.3935034999999516 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.064516mm"
            pcbY="4.5561905mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -2.9942160000000513, y: 3.8061905000000706 },
              { x: 2.8651839999998856, y: 3.8061905000000706 },
              { x: 2.8651839999998856, y: -3.8312094999998862 },
              { x: -2.9942160000000513, y: -3.8312094999998862 },
              { x: -2.9942160000000513, y: 3.8061905000000706 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2876544.obj?uuid=413bd20409f44b4db32d60ad0b1136ce",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2876544.step?uuid=413bd20409f44b4db32d60ad0b1136ce",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: 0.000012700000070253736,
          y: -0.06751320000012129,
          z: -0.01,
        },
      }}
      {...props}
    />
  );
};

export default CSD18510Q5B;
