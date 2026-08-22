import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VBIAS"],
  pin2: ["VIN"],
  pin3: ["PG"],
  pin4: ["GND"],
  pin5: ["QOD"],
  pin6: ["VOUT"],
  pin7: ["CT"],
  pin8: ["ON"],
} as const;

const pinAttributes = {
  pin2: { requiresPower: true },
  pin4: { requiresGround: true },
} as const;

export const TPS22992SRXNR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C3229354"],
      }}
      manufacturerPartNumber="TPS22992SRXNR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.40005mm"
            pcbY="0.599948mm"
            width="0.1999996mm"
            height="0.4500118mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.47498mm"
            pcbY="0mm"
            width="0.6999986mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-0.40005mm"
            pcbY="-0.599948mm"
            width="0.1999996mm"
            height="0.4500118mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0mm"
            pcbY="-0.599948mm"
            width="0.1999996mm"
            height="0.4500118mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="0.40005mm"
            pcbY="-0.599948mm"
            width="0.1999996mm"
            height="0.4500118mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0.47498mm"
            pcbY="0mm"
            width="0.6999986mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="0.40005mm"
            pcbY="0.599948mm"
            width="0.1999996mm"
            height="0.4500118mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="0mm"
            pcbY="0.599948mm"
            width="0.1999996mm"
            height="0.4500118mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -0.68018660000007, y: 0.6999478000000181 },
              { x: -0.7000494000000117, y: 0.6999478000000181 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 0.6999477999999044, y: 0.30507940000006784 },
              { x: 0.6999477999999044, y: 0.6999478000000181 },
              { x: 0.6800849999999627, y: 0.6999478000000181 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 0.6800849999999627, y: -0.7000494000000117 },
              { x: 0.6999477999999044, y: -0.7000494000000117 },
              { x: 0.6999477999999044, y: -0.30518099999994774 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.7000494000000117, y: -0.30518099999994774 },
              { x: -0.7000494000000117, y: -0.7000494000000117 },
              { x: -0.68018660000007, y: -0.7000494000000117 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.7000494000000117, y: 0.6999478000000181 },
              { x: -0.7000494000000117, y: 0.30507940000006784 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.6586220000000367, y: 0.9999980000001187 },
              { x: -0.6634427459483732, y: 0.9633807991370986 },
              { x: -0.677576457923351, y: 0.9292590000000018 },
              { x: -0.7000599468112796, y: 0.8999579468113552 },
              { x: -0.7293610000000399, y: 0.8774744579234266 },
              { x: -0.7634827991369093, y: 0.8633407459483351 },
              { x: -0.8000999999999294, y: 0.8585199999999986 },
              { x: -0.8367172008629495, y: 0.8633407459483351 },
              { x: -0.8708389999999326, y: 0.8774744579234266 },
              { x: -0.900140053188693, y: 0.8999579468113552 },
              { x: -0.9226235420765079, y: 0.9292590000000018 },
              { x: -0.9367572540515994, y: 0.9633807991370986 },
              { x: -0.9415779999998222, y: 0.9999980000001187 },
              { x: -0.9367572540515994, y: 1.0366152008630252 },
              { x: -0.9226235420765079, y: 1.0707370000000083 },
              { x: -0.900140053188693, y: 1.1000380531886549 },
              { x: -0.8708389999999326, y: 1.1225215420765835 },
              { x: -0.8367172008629495, y: 1.136655254051675 },
              { x: -0.8000999999999294, y: 1.1414760000000115 },
              { x: -0.7634827991369093, y: 1.136655254051675 },
              { x: -0.7293610000000399, y: 1.1225215420765835 },
              { x: -0.7000599468112796, y: 1.1000380531886549 },
              { x: -0.677576457923351, y: 1.0707370000000083 },
              { x: -0.6634427459483732, y: 1.0366152008630252 },
              { x: -0.6586220000000367, y: 0.9999980000001187 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.04445mm"
            pcbY="2.133348mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -1.1834499999999935, y: 1.383348000000069 },
              { x: 1.0945500000000266, y: 1.383348000000069 },
              { x: 1.0945500000000266, y: -1.0724519999998847 },
              { x: -1.1834499999999935, y: -1.0724519999998847 },
              { x: -1.1834499999999935, y: 1.383348000000069 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C3229354.obj?uuid=00695f36b2a24d6888d5663f789186ea",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C3229354.step?uuid=00695f36b2a24d6888d5663f789186ea",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: 0.000038099999983387534,
          y: 0.00005079999993995443,
          z: -0.02,
        },
      }}
      {...props}
    />
  );
};

export default TPS22992SRXNR;
