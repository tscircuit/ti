import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["QB"],
  pin2: ["QC"],
  pin3: ["QD"],
  pin4: ["QE"],
  pin5: ["QF"],
  pin6: ["QG"],
  pin7: ["QH"],
  pin8: ["GND"],
  pin9: ["pin9"],
  pin10: ["SRCLR"],
  pin11: ["SRCLK"],
  pin12: ["RCLK"],
  pin13: ["OE"],
  pin14: ["SER"],
  pin15: ["QA"],
  pin16: ["VCC"],
  pin17: ["EP"],
} as const;

const pinAttributes = {
  pin8: { requiresGround: true },
  pin16: { requiresPower: true },
} as const;

export const SN74HCS595BQBR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2876392"],
      }}
      manufacturerPartNumber="SN74HCS595BQBR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin2"]}
            pcbX="-1.249934mm"
            pcbY="-1.157478mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-0.750062mm"
            pcbY="-1.157478mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-0.249936mm"
            pcbY="-1.157478mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="0.249936mm"
            pcbY="-1.157478mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0.750062mm"
            pcbY="-1.157478mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="1.249934mm"
            pcbY="-1.157478mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="1.657604mm"
            pcbY="-0.249936mm"
            width="0.6649974mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="1.657604mm"
            pcbY="0.249936mm"
            width="0.6649974mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="1.249934mm"
            pcbY="1.157478mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="0.750062mm"
            pcbY="1.157478mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="0.249936mm"
            pcbY="1.157478mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="-0.249936mm"
            pcbY="1.157478mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="-0.750062mm"
            pcbY="1.157478mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="-1.249934mm"
            pcbY="1.157478mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="-1.657604mm"
            pcbY="0.249936mm"
            width="0.6649974mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="-1.657604mm"
            pcbY="-0.249936mm"
            width="0.6649974mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="0mm"
            pcbY="0mm"
            width="2.1500084mm"
            height="1.1500104mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -1.8262092000001076, y: 0.580491600000073 },
              { x: -1.8262092000001076, y: 1.326210200000105 },
              { x: -1.580489600000078, y: 1.326210200000105 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.8262091999999939, y: 0.580491600000073 },
              { x: 1.8262091999999939, y: 1.326210200000105 },
              { x: 1.5804895999999644, y: 1.326210200000105 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.8262092000001076, y: -0.5804915999999594 },
              { x: -1.8262092000001076, y: -1.326210200000105 },
              { x: -1.580489600000078, y: -1.326210200000105 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.8262091999999939, y: -0.5804915999999594 },
              { x: 1.8262091999999939, y: -1.326210200000105 },
              { x: 1.5804895999999644, y: -1.326210200000105 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.9570700000000443, y: -0.6349999999999909 },
              { x: -1.9596231778361926, y: -0.6543933110494891 },
              { x: -1.967108716494522, y: -0.6724649999999883 },
              { x: -1.9790164888858044, y: -0.6879835111142256 },
              { x: -1.9945350000000417, y: -0.6998912835053943 },
              { x: -2.012606688950541, y: -0.7073768221637238 },
              { x: -2.032000000000039, y: -0.7099299999999857 },
              { x: -2.0513933110495373, y: -0.7073768221637238 },
              { x: -2.0694650000000365, y: -0.6998912835053943 },
              { x: -2.0849835111143875, y: -0.6879835111142256 },
              { x: -2.096891283505556, y: -0.6724649999999883 },
              { x: -2.1043768221638857, y: -0.6543933110494891 },
              { x: -2.1069300000001476, y: -0.6349999999999909 },
              { x: -2.1043768221638857, y: -0.6156066889504928 },
              { x: -2.096891283505556, y: -0.5975349999999935 },
              { x: -2.0849835111143875, y: -0.5820164888857562 },
              { x: -2.0694650000000365, y: -0.5701087164943601 },
              { x: -2.0513933110495373, y: -0.5626231778360307 },
              { x: -2.032000000000039, y: -0.5600699999999961 },
              { x: -2.012606688950541, y: -0.5626231778360307 },
              { x: -1.9945350000000417, y: -0.5701087164943601 },
              { x: -1.9790164888858044, y: -0.5820164888857562 },
              { x: -1.967108716494522, y: -0.5975349999999935 },
              { x: -1.9596231778361926, y: -0.6156066889504928 },
              { x: -1.9570700000000443, y: -0.6349999999999909 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.0635mm"
            pcbY="2.4986mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -2.3582000000000107, y: 1.7486000000000104 },
              { x: 2.2311999999998307, y: 1.7486000000000104 },
              { x: 2.2311999999998307, y: -1.7231999999999061 },
              { x: -2.3582000000000107, y: -1.7231999999999061 },
              { x: -2.3582000000000107, y: 1.7486000000000104 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2876392.obj?uuid=785c24efc5da4ba0b38de7c68d6a5913",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2876392.step?uuid=785c24efc5da4ba0b38de7c68d6a5913",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.01 },
      }}
      {...props}
    />
  );
};

export default SN74HCS595BQBR;
