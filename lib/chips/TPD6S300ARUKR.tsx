import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["C_SUB1"],
  pin2: ["C_SUB2"],
  pin3: ["VBIAS"],
  pin4: ["C_CC1"],
  pin5: ["C_CC2"],
  pin6: ["RPD_G2"],
  pin7: ["RPD_G1"],
  pin8: ["GND3"],
  pin9: ["FLT"],
  pin10: ["VPWR"],
  pin11: ["CC2"],
  pin12: ["CC1"],
  pin13: ["GND2"],
  pin14: ["SBU2"],
  pin15: ["SUB1"],
  pin16: ["pin16"],
  pin17: ["pin17"],
  pin18: ["GND1"],
  pin19: ["D2"],
  pin20: ["D1"],
  pin21: ["PAD"],
} as const;

const pinAttributes = {
  pin8: { requiresGround: true },
  pin13: { requiresGround: true },
  pin18: { requiresGround: true },
} as const;

export const TPD6S300ARUKR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2876380"],
      }}
      manufacturerPartNumber="TPD6S300ARUKR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin21"]}
            pcbX="-0.000127mm"
            pcbY="0.000127mm"
            width="1.6999966mm"
            height="1.6999966mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin20"]}
            pcbX="-0.799973mm"
            pcbY="1.499997mm"
            width="0.1999996mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin19"]}
            pcbX="-0.399923mm"
            pcbY="1.499997mm"
            width="0.1999996mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="0.000127mm"
            pcbY="1.499997mm"
            width="0.1999996mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="0.399923mm"
            pcbY="1.499997mm"
            width="0.1999996mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="0.799973mm"
            pcbY="1.499997mm"
            width="0.1999996mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="1.499997mm"
            pcbY="0.800227mm"
            width="0.7999984mm"
            height="0.1999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="1.499997mm"
            pcbY="0.400177mm"
            width="0.7999984mm"
            height="0.1999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="1.499997mm"
            pcbY="0.000127mm"
            width="0.7999984mm"
            height="0.1999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="1.499997mm"
            pcbY="-0.399923mm"
            width="0.7999984mm"
            height="0.1999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="1.499997mm"
            pcbY="-0.799973mm"
            width="0.7999984mm"
            height="0.1999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="0.799719mm"
            pcbY="-1.499997mm"
            width="0.1999996mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="0.399669mm"
            pcbY="-1.499997mm"
            width="0.1999996mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-0.000127mm"
            pcbY="-1.499997mm"
            width="0.1999996mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-0.400177mm"
            pcbY="-1.499997mm"
            width="0.1999996mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-0.800227mm"
            pcbY="-1.499997mm"
            width="0.1999996mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-1.499997mm"
            pcbY="-0.799973mm"
            width="0.7999984mm"
            height="0.1999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-1.499997mm"
            pcbY="-0.399923mm"
            width="0.7999984mm"
            height="0.1999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-1.499997mm"
            pcbY="0.000127mm"
            width="0.7999984mm"
            height="0.1999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-1.499997mm"
            pcbY="0.400177mm"
            width="0.7999984mm"
            height="0.1999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="-1.499997mm"
            pcbY="0.800227mm"
            width="0.7999984mm"
            height="0.1999996mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -1.0001249999999118, y: -1.5498063999999658 },
              { x: -1.550060399999893, y: -1.5498063999999658 },
              { x: -1.550060399999893, y: -0.9998710000000983 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.5498064000000795, y: -0.9498330000000124 },
              { x: 1.5498064000000795, y: -1.5498063999999658 },
              { x: 0.9998710000000983, y: -1.5498063999999658 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 0.9998710000000983, y: 1.550060399999893 },
              { x: 1.5498064000000795, y: 1.550060399999893 },
              { x: 1.5498064000000795, y: 1.0001249999999118 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.1002263999999968, y: 1.550060399999893 },
              { x: -1.550060399999893, y: 1.550060399999893 },
              { x: -1.550060399999893, y: 1.050162999999884 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.804796999999894, y: 1.396872999999914 },
              { x: -1.80820700700815, y: 1.37097142524226 },
              { x: -1.818204641690727, y: 1.3468349999998281 },
              { x: -1.834108581765804, y: 1.3261085817658795 },
              { x: -1.8548349999998663, y: 1.3102046416908024 },
              { x: -1.8789714252421845, y: 1.3002070070082254 },
              { x: -1.9048729999998386, y: 1.2967969999999696 },
              { x: -1.9307745747574927, y: 1.3002070070082254 },
              { x: -1.9549109999998109, y: 1.3102046416908024 },
              { x: -1.9756374182338732, y: 1.3261085817658795 },
              { x: -1.9915413583089503, y: 1.3468349999998281 },
              { x: -2.0015389929915273, y: 1.37097142524226 },
              { x: -2.004948999999783, y: 1.396872999999914 },
              { x: -2.0015389929915273, y: 1.4227745747575682 },
              { x: -1.9915413583089503, y: 1.4469109999998864 },
              { x: -1.9756374182338732, y: 1.4676374182339487 },
              { x: -1.9549109999998109, y: 1.4835413583090258 },
              { x: -1.9307745747574927, y: 1.4935389929916028 },
              { x: -1.9048729999998386, y: 1.4969489999998586 },
              { x: -1.8789714252421845, y: 1.4935389929916028 },
              { x: -1.8548349999998663, y: 1.4835413583090258 },
              { x: -1.834108581765804, y: 1.4676374182339487 },
              { x: -1.818204641690727, y: 1.4469109999998864 },
              { x: -1.80820700700815, y: 1.4227745747575682 },
              { x: -1.804796999999894, y: 1.396872999999914 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.050927mm"
            pcbY="2.905127mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -2.2567269999999553, y: 2.1551269999998794 },
              { x: 2.154873000000066, y: 2.1551269999998794 },
              { x: 2.154873000000066, y: -2.154873000000066 },
              { x: -2.2567269999999553, y: -2.154873000000066 },
              { x: -2.2567269999999553, y: 2.1551269999998794 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2876380.obj?uuid=71760926877f42c6b0f5954e672bfe89",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2876380.step?uuid=71760926877f42c6b0f5954e672bfe89",
        pcbRotationOffset: 270,
        modelOriginPosition: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  );
};

export default TPD6S300ARUKR;
