import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["S4"],
  pin2: ["S6"],
  pin3: ["D"],
  pin4: ["S7"],
  pin5: ["S5"],
  pin6: ["EN"],
  pin7: ["VSS"],
  pin8: ["GND"],
  pin9: ["A2"],
  pin10: ["A1"],
  pin11: ["A0"],
  pin12: ["S3"],
  pin13: ["S0"],
  pin14: ["S1"],
  pin15: ["S2"],
  pin16: ["VDD"],
  pin17: ["EP"],
} as const;

const pinAttributes = {
  pin7: { requiresGround: true },
  pin8: { requiresGround: true },
  pin16: { requiresPower: true },
} as const;

export const TMUX4051BQBR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C20549631"],
      }}
      manufacturerPartNumber="TMUX4051BQBR"
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
            width="1.999996mm"
            height="0.999998mm"
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
              { x: -2.2110700000000634, y: -0.6349999999999909 },
              { x: -2.2136231778362117, y: -0.6543933110494891 },
              { x: -2.221108716494541, y: -0.6724649999999883 },
              { x: -2.23301648888571, y: -0.6879835111142256 },
              { x: -2.248534999999947, y: -0.6998912835053943 },
              { x: -2.26660668895056, y: -0.7073768221637238 },
              { x: -2.286000000000058, y: -0.7099299999999857 },
              { x: -2.3053933110495564, y: -0.7073768221637238 },
              { x: -2.3234650000001693, y: -0.6998912835053943 },
              { x: -2.338983511114293, y: -0.6879835111142256 },
              { x: -2.3508912835055753, y: -0.6724649999999883 },
              { x: -2.3583768221639048, y: -0.6543933110494891 },
              { x: -2.360930000000053, y: -0.6349999999999909 },
              { x: -2.3583768221639048, y: -0.6156066889504928 },
              { x: -2.3508912835055753, y: -0.5975349999999935 },
              { x: -2.338983511114293, y: -0.5820164888857562 },
              { x: -2.3234650000001693, y: -0.5701087164943601 },
              { x: -2.3053933110495564, y: -0.5626231778360307 },
              { x: -2.286000000000058, y: -0.5600699999999961 },
              { x: -2.26660668895056, y: -0.5626231778360307 },
              { x: -2.248534999999947, y: -0.5701087164943601 },
              { x: -2.23301648888571, y: -0.5820164888857562 },
              { x: -2.221108716494541, y: -0.5975349999999935 },
              { x: -2.2136231778362117, y: -0.6156066889504928 },
              { x: -2.2110700000000634, y: -0.6349999999999909 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.1905mm"
            pcbY="2.4986mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -2.61220000000003, y: 1.7486000000000104 },
              { x: 2.2311999999998307, y: 1.7486000000000104 },
              { x: 2.2311999999998307, y: -1.7231999999999061 },
              { x: -2.61220000000003, y: -1.7231999999999061 },
              { x: -2.61220000000003, y: 1.7486000000000104 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C20549631.obj?uuid=d7ad6cf1f0f24adebab4c383e7fe5bbe",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C20549631.step?uuid=d7ad6cf1f0f24adebab4c383e7fe5bbe",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.02 },
      }}
      {...props}
    />
  );
};

export default TMUX4051BQBR;
