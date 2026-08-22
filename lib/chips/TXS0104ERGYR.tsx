import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VCCA"],
  pin2: ["A1"],
  pin3: ["A2"],
  pin4: ["A3"],
  pin5: ["A4"],
  pin6: ["NC1"],
  pin7: ["GND"],
  pin8: ["OE"],
  pin9: ["NC2"],
  pin10: ["B4"],
  pin11: ["B3"],
  pin12: ["B2"],
  pin13: ["B1"],
  pin14: ["VCCB"],
  pin15: ["EP"],
} as const;

const pinAttributes = {
  pin6: { doNotConnect: true },
  pin7: { requiresGround: true },
  pin9: { doNotConnect: true },
} as const;

export const TXS0104ERGYR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C154926"],
      }}
      manufacturerPartNumber="TXS0104ERGYR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-1.75006mm"
            pcbY="-0.750062mm"
            width="0.7999984mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.998474mm"
            pcbY="-1.75006mm"
            width="0.2800096mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-0.498348mm"
            pcbY="-1.75006mm"
            width="0.2800096mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0.001524mm"
            pcbY="-1.75006mm"
            width="0.2800096mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="0.50165mm"
            pcbY="-1.75006mm"
            width="0.2800096mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="1.001522mm"
            pcbY="-1.75006mm"
            width="0.2800096mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="1.75006mm"
            pcbY="-0.750062mm"
            width="0.7999984mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="1.75006mm"
            pcbY="0.750062mm"
            width="0.7999984mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="0.999998mm"
            pcbY="1.75006mm"
            width="0.2800096mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="0.500126mm"
            pcbY="1.75006mm"
            width="0.2800096mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="0mm"
            pcbY="1.75006mm"
            width="0.2800096mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="-0.499872mm"
            pcbY="1.75006mm"
            width="0.2800096mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="-0.999998mm"
            pcbY="1.75006mm"
            width="0.2800096mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="-1.75006mm"
            pcbY="0.750062mm"
            width="0.7999984mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="0mm"
            pcbY="0mm"
            width="2.0500086mm"
            height="2.0500086mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: 1.7500092000000222, y: 1.7500092000000222 },
              { x: 1.3711428000000296, y: 1.7500092000000222 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.3711428000001433, y: 1.7500092000000222 },
              { x: -1.7500092000000222, y: 1.7500092000000222 },
              { x: -1.7500092000000222, y: 1.1211560000000418 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.7500092000000222, y: 0.3788663999998789 },
              { x: -1.7500092000000222, y: -0.3768089999998665 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.7500092000000222, y: -1.1190986000000294 },
              { x: -1.7500092000000222, y: -1.7500091999999086 },
              { x: -1.7500600000000759, y: -1.7500599999999622 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.7500600000000759, y: -1.7500599999999622 },
              { x: -1.3696187999998983, y: -1.7500599999999622 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.3726667999999336, y: -1.7500599999999622 },
              { x: 1.749958399999855, y: -1.7500599999999622 },
              { x: 1.7500092000000222, y: -1.7500091999999086 },
              { x: 1.7500092000000222, y: -1.121130600000015 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.7500092000000222, y: -0.3788409999999658 },
              { x: 1.7500092000000222, y: 0.3788663999998789 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.7500092000000222, y: 1.1211560000000418 },
              { x: 1.7500092000000222, y: 1.7500092000000222 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.99999600000001, y: -1.2999719999999115 },
              { x: -2.0034060070083797, y: -1.3258735747575656 },
              { x: -2.0134036416909566, y: -1.3500099999998838 },
              { x: -2.0293075817660338, y: -1.370736418233946 },
              { x: -2.0500339999999824, y: -1.3866403583090232 },
              { x: -2.0741704252423006, y: -1.3966379929916002 },
              { x: -2.1000719999999546, y: -1.400047999999856 },
              { x: -2.125973574757836, y: -1.3966379929916002 },
              { x: -2.1501100000000406, y: -1.3866403583090232 },
              { x: -2.170836418233989, y: -1.370736418233946 },
              { x: -2.1867403583090663, y: -1.3500099999998838 },
              { x: -2.196737992991757, y: -1.3258735747575656 },
              { x: -2.200147999999899, y: -1.2999719999999115 },
              { x: -2.196737992991757, y: -1.2740704252422574 },
              { x: -2.1867403583090663, y: -1.2499339999999393 },
              { x: -2.170836418233989, y: -1.229207581765877 },
              { x: -2.1501100000000406, y: -1.2133036416907999 },
              { x: -2.125973574757836, y: -1.2033060070082229 },
              { x: -2.1000719999999546, y: -1.199895999999967 },
              { x: -2.0741704252423006, y: -1.2033060070082229 },
              { x: -2.0500339999999824, y: -1.2133036416907999 },
              { x: -2.0293075817660338, y: -1.229207581765877 },
              { x: -2.0134036416909566, y: -1.2499339999999393 },
              { x: -2.0034060070083797, y: -1.2740704252422574 },
              { x: -1.99999600000001, y: -1.2999719999999115 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.1524mm"
            pcbY="3.159mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -2.6884000000000015, y: 2.408999999999992 },
              { x: 2.3836000000000013, y: 2.408999999999992 },
              { x: 2.3836000000000013, y: -2.3836000000000013 },
              { x: -2.6884000000000015, y: -2.3836000000000013 },
              { x: -2.6884000000000015, y: 2.408999999999992 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C154926.obj?uuid=cc9a7c4d6c3844ba9e2ed6c3b0f8d939",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C154926.step?uuid=cc9a7c4d6c3844ba9e2ed6c3b0f8d939",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.02 },
      }}
      {...props}
    />
  );
};

export default TXS0104ERGYR;
