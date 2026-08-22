import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["ADDR"],
  pin2: ["NC"],
  pin3: ["GND"],
  pin4: ["AIN0"],
  pin5: ["AIN1"],
  pin6: ["AIN2"],
  pin7: ["AIN3"],
  pin8: ["VDD"],
  pin9: ["SDA"],
  pin10: ["SCL"],
} as const;

const pinAttributes = {
  pin2: { doNotConnect: true },
  pin3: { requiresGround: true },
  pin8: { requiresPower: true },
} as const;

export const TLA2024IRUGR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2876104"],
      }}
      manufacturerPartNumber="TLA2024IRUGR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.750062mm"
            pcbY="-0.635mm"
            width="0.2999994mm"
            height="0.580009mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.249936mm"
            pcbY="-0.635mm"
            width="0.2500122mm"
            height="0.580009mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0.249936mm"
            pcbY="-0.635mm"
            width="0.2500122mm"
            height="0.580009mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0.750062mm"
            pcbY="-0.635mm"
            width="0.2999994mm"
            height="0.580009mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0.750062mm"
            pcbY="0.635mm"
            width="0.2999994mm"
            height="0.580009mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="0.249936mm"
            pcbY="0.635mm"
            width="0.2500122mm"
            height="0.580009mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-0.249936mm"
            pcbY="0.635mm"
            width="0.2500122mm"
            height="0.580009mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="-0.750062mm"
            pcbY="0.635mm"
            width="0.2999994mm"
            height="0.580009mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="-0.860044mm"
            pcbY="0mm"
            width="0.6299962mm"
            height="0.350012mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="0.860044mm"
            pcbY="0mm"
            width="0.6299962mm"
            height="0.350012mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -1.0542016000000558, y: 0.7620000000000573 },
              { x: -1.1430508000000827, y: 0.7620000000000573 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.1429491999999755, y: 0.3291332000000011 },
              { x: 1.1429491999999755, y: 0.7620000000000573 },
              { x: 1.0540999999999485, y: 0.7620000000000573 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.0540999999999485, y: -0.7619999999999436 },
              { x: 1.1429491999999755, y: -0.7619999999999436 },
              { x: 1.1429491999999755, y: -0.32915859999991426 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.1430508000000827, y: -0.32915859999991426 },
              { x: -1.1430508000000827, y: -0.7619999999999436 },
              { x: -1.0542016000000558, y: -0.7619999999999436 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.1430508000000827, y: 0.7620000000000573 },
              { x: -1.1430508000000827, y: 0.3291332000000011 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.0629900000000134, y: -0.88900000000001 },
              { x: -1.0657162746385893, y: -0.9097081117985226 },
              { x: -1.0737093074432096, y: -0.929004999999961 },
              { x: -1.0864243864372156, y: -0.9455756135627098 },
              { x: -1.102995000000078, y: -0.9582906925568295 },
              { x: -1.1222918882014028, y: -0.9662837253613361 },
              { x: -1.1429999999999154, y: -0.969009999999912 },
              { x: -1.1637081117986554, y: -0.9662837253613361 },
              { x: -1.18300499999998, y: -0.9582906925568295 },
              { x: -1.199575613562729, y: -0.9455756135627098 },
              { x: -1.2122906925568486, y: -0.929004999999961 },
              { x: -1.220283725361469, y: -0.9097081117985226 },
              { x: -1.2230100000000448, y: -0.88900000000001 },
              { x: -1.220283725361469, y: -0.8682918882013837 },
              { x: -1.2122906925568486, y: -0.8489949999999453 },
              { x: -1.199575613562729, y: -0.8324243864373102 },
              { x: -1.18300499999998, y: -0.8197093074430768 },
              { x: -1.1637081117986554, y: -0.8117162746384565 },
              { x: -1.1429999999999154, y: -0.8089899999999943 },
              { x: -1.1222918882014028, y: -0.8117162746384565 },
              { x: -1.102995000000078, y: -0.8197093074430768 },
              { x: -1.0864243864372156, y: -0.8324243864373102 },
              { x: -1.0737093074432096, y: -0.8489949999999453 },
              { x: -1.0657162746385893, y: -0.8682918882013837 },
              { x: -1.0629900000000134, y: -0.88900000000001 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.038862mm"
            pcbY="1.937006mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -1.4826620000000048, y: 1.1870059999999967 },
              { x: 1.4049380000000156, y: 1.1870059999999967 },
              { x: 1.4049380000000156, y: -1.217993999999976 },
              { x: -1.4826620000000048, y: -1.217993999999976 },
              { x: -1.4826620000000048, y: 1.1870059999999967 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2876104.obj?uuid=06d848c39838422d8100eb441be481f5",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2876104.step?uuid=06d848c39838422d8100eb441be481f5",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0.00006350000001020817, y: 0, z: -0.01 },
      }}
      {...props}
    />
  );
};

export default TLA2024IRUGR;
