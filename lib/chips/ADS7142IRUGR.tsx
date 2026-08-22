import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["AVDD"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["ADDR"],
  pin5: ["pin5"],
  pin6: ["ALERT"],
  pin7: ["SDA"],
  pin8: ["SCL"],
  pin9: ["DVDD"],
  pin10: ["GND"],
} as const;

const pinAttributes = {
  pin10: { requiresGround: true },
} as const;

export const ADS7142IRUGR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2669859"],
      }}
      manufacturerPartNumber="ADS7142IRUGR"
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
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2669859.obj?uuid=06d848c39838422d8100eb441be481f5",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2669859.step?uuid=06d848c39838422d8100eb441be481f5",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0.00006350000001020817, y: 0, z: -0.01 },
      }}
      {...props}
    />
  );
};

export default ADS7142IRUGR;
