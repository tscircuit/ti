import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["C_SBU1"],
  pin2: ["C_SBU2"],
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
  pin15: ["SBU1"],
  pin16: ["EPR_EN"],
  pin17: ["EPR_BLK_G"],
  pin18: ["GND1"],
  pin19: ["VBUS_LV"],
  pin20: ["VBUS"],
  pin21: ["EP"],
} as const;

const pinAttributes = {
  pin8: { requiresGround: true },
  pin13: { requiresGround: true },
  pin18: { requiresGround: true },
} as const;

export const TPD4S480RUKR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C43131250"],
      }}
      manufacturerPartNumber="TPD4S480RUKR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin21"]}
            pcbX="0.000127mm"
            pcbY="-0.000127mm"
            width="1.6999966mm"
            height="1.6999966mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin20"]}
            pcbX="-1.499997mm"
            pcbY="-0.799973mm"
            width="0.7999984mm"
            height="0.1999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin19"]}
            pcbX="-1.499997mm"
            pcbY="-0.399923mm"
            width="0.7999984mm"
            height="0.1999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="-1.499997mm"
            pcbY="0.000127mm"
            width="0.7999984mm"
            height="0.1999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="-1.499997mm"
            pcbY="0.399923mm"
            width="0.7999984mm"
            height="0.1999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="-1.499997mm"
            pcbY="0.799973mm"
            width="0.7999984mm"
            height="0.1999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="-0.799973mm"
            pcbY="1.499997mm"
            width="0.1999996mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="-0.399923mm"
            pcbY="1.499997mm"
            width="0.1999996mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="0.000127mm"
            pcbY="1.499997mm"
            width="0.1999996mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="0.400177mm"
            pcbY="1.499997mm"
            width="0.1999996mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="0.800227mm"
            pcbY="1.499997mm"
            width="0.1999996mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="1.499997mm"
            pcbY="0.799719mm"
            width="0.7999984mm"
            height="0.1999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="1.499997mm"
            pcbY="0.399669mm"
            width="0.7999984mm"
            height="0.1999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="1.499997mm"
            pcbY="-0.000127mm"
            width="0.7999984mm"
            height="0.1999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="1.499997mm"
            pcbY="-0.400177mm"
            width="0.7999984mm"
            height="0.1999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="1.499997mm"
            pcbY="-0.800227mm"
            width="0.7999984mm"
            height="0.1999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="0.800227mm"
            pcbY="-1.499997mm"
            width="0.1999996mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0.400177mm"
            pcbY="-1.499997mm"
            width="0.1999996mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0.000127mm"
            pcbY="-1.499997mm"
            width="0.1999996mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.399923mm"
            pcbY="-1.499997mm"
            width="0.1999996mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.799973mm"
            pcbY="-1.499997mm"
            width="0.1999996mm"
            height="0.7999984mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -1.5499079999999594, y: 0.9999725999999782 },
              { x: -1.5499079999999594, y: 1.5499079999999594 },
              { x: -0.9999725999999782, y: 1.5499079999999594 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.549958800000013, y: -1.0000233999999182 },
              { x: 1.549958800000013, y: -1.549958800000013 },
              { x: 1.0000234000000319, y: -1.549958800000013 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 0.9499854000000596, y: 1.5499079999999594 },
              { x: 1.549958800000013, y: 1.5499079999999594 },
              { x: 1.549958800000013, y: 0.9999725999999782 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.5499079999999594, y: -1.1001247999998895 },
              { x: -1.5499079999999594, y: -1.549958800000013 },
              { x: -1.0500105999999505, y: -1.549958800000013 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.2965429999999287, y: -1.9048729999999523 },
              { x: -1.2999530070082983, y: -1.93077457475772 },
              { x: -1.3099506416908753, y: -1.9549110000000383 },
              { x: -1.3258545817659524, y: -1.9756374182339869 },
              { x: -1.3465810000000147, y: -1.991541358309064 },
              { x: -1.3707174252422192, y: -2.0015389929917546 },
              { x: -1.3966189999998733, y: -2.004948999999897 },
              { x: -1.4225205747575274, y: -2.0015389929917546 },
              { x: -1.446657000000073, y: -1.991541358309064 },
              { x: -1.4673834182339078, y: -1.9756374182339869 },
              { x: -1.483287358308985, y: -1.9549110000000383 },
              { x: -1.493284992991562, y: -1.93077457475772 },
              { x: -1.4966949999998178, y: -1.9048729999999523 },
              { x: -1.493284992991562, y: -1.8789714252422982 },
              { x: -1.483287358308985, y: -1.85483499999998 },
              { x: -1.4673834182339078, y: -1.8341085817659177 },
              { x: -1.446657000000073, y: -1.8182046416908406 },
              { x: -1.4225205747575274, y: -1.8082070070082636 },
              { x: -1.3966189999998733, y: -1.8047970000000078 },
              { x: -1.3707174252422192, y: -1.8082070070082636 },
              { x: -1.3465810000000147, y: -1.8182046416908406 },
              { x: -1.3258545817659524, y: -1.8341085817659177 },
              { x: -1.3099506416908753, y: -1.85483499999998 },
              { x: -1.2999530070082983, y: -1.8789714252422982 },
              { x: -1.2965429999999287, y: -1.9048729999999523 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="0.001651mm"
            pcbY="2.903349mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -2.1533489999999347, y: 2.1533490000000484 },
              { x: 2.1566510000000108, y: 2.1533490000000484 },
              { x: 2.1566510000000108, y: -2.2582510000000866 },
              { x: -2.1533489999999347, y: -2.2582510000000866 },
              { x: -2.1533489999999347, y: 2.1533490000000484 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C43131250.obj?uuid=71760926877f42c6b0f5954e672bfe89",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C43131250.step?uuid=71760926877f42c6b0f5954e672bfe89",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: -0.00015240000004723697,
          y: -0.0001015999999935957,
          z: 0,
        },
      }}
      {...props}
    />
  );
};

export default TPD4S480RUKR;
