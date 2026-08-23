import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["D1_POS"],
  pin2: ["D1_NEG"],
  pin3: ["GND1"],
  pin4: ["D2_POS"],
  pin5: ["D2_NEG"],
  pin6: ["NC1"],
  pin7: ["NC2"],
  pin8: ["GND2"],
  pin9: ["NC3"],
  pin10: ["NC4"],
} as const;

const pinAttributes = {
  pin3: { requiresGround: true },
  pin6: { doNotConnect: true },
  pin7: { doNotConnect: true },
  pin8: { requiresGround: true },
  pin9: { doNotConnect: true },
  pin10: { doNotConnect: true },
} as const;

export const TPD4E05U06DQAR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C22390021"],
      }}
      manufacturerPartNumber="TPD4E05U06DQAR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.999998mm"
            pcbY="-0.432816mm"
            width="0.1999996mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.499872mm"
            pcbY="-0.432816mm"
            width="0.1999996mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0mm"
            pcbY="-0.432816mm"
            width="0.3999992mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0.500126mm"
            pcbY="-0.432816mm"
            width="0.1999996mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="0.999998mm"
            pcbY="-0.432816mm"
            width="0.1999996mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0.999998mm"
            pcbY="0.432816mm"
            width="0.1999996mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="0.500126mm"
            pcbY="0.432816mm"
            width="0.1999996mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="0mm"
            pcbY="0.432816mm"
            width="0.3999992mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="-0.499872mm"
            pcbY="0.432816mm"
            width="0.1999996mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="-0.999998mm"
            pcbY="0.432816mm"
            width="0.1999996mm"
            height="0.6649974mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -1.326210200000105, y: -0.5761989999999741 },
              { x: -1.326210200000105, y: 0.5761990000000878 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.3262101999999913, y: -0.5761989999999741 },
              { x: 1.3262101999999913, y: 0.5761990000000878 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.9250680000000102, y: -1.0401299999999765 },
              { x: -0.9276211778361585, y: -1.0595233110494746 },
              { x: -0.935106716494488, y: -1.0775949999998602 },
              { x: -0.9470144888857703, y: -1.0931135111142112 },
              { x: -0.9625330000001213, y: -1.1050212835054936 },
              { x: -0.9806046889505069, y: -1.112506822163823 },
              { x: -0.999998000000005, y: -1.1150599999999713 },
              { x: -1.0193913110495032, y: -1.112506822163823 },
              { x: -1.0374630000000025, y: -1.1050212835054936 },
              { x: -1.0529815111143535, y: -1.0931135111142112 },
              { x: -1.0648892835056358, y: -1.0775949999998602 },
              { x: -1.0723748221639653, y: -1.0595233110494746 },
              { x: -1.0749280000001136, y: -1.0401299999999765 },
              { x: -1.0723748221639653, y: -1.0207366889504783 },
              { x: -1.0648892835056358, y: -1.002664999999979 },
              { x: -1.0529815111143535, y: -0.9871464888856281 },
              { x: -1.0374630000000025, y: -0.9752387164943457 },
              { x: -1.0193913110495032, y: -0.9677531778360162 },
              { x: -0.999998000000005, y: -0.9651999999998679 },
              { x: -0.9806046889505069, y: -0.9677531778360162 },
              { x: -0.9625330000001213, y: -0.9752387164943457 },
              { x: -0.9470144888857703, y: -0.9871464888856281 },
              { x: -0.935106716494488, y: -1.002664999999979 },
              { x: -0.9276211778361585, y: -1.0207366889504783 },
              { x: -0.9250680000000102, y: -1.0401299999999765 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="0mm"
            pcbY="1.762mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -1.570799999999963, y: 1.0119999999999436 },
              { x: 1.570799999999963, y: 1.0119999999999436 },
              { x: 1.570799999999963, y: -1.3675999999999249 },
              { x: -1.570799999999963, y: -1.3675999999999249 },
              { x: -1.570799999999963, y: 1.0119999999999436 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C22390021.obj?uuid=c621c5ebf1564e4cb1736da0647d163e",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C22390021.step?uuid=c621c5ebf1564e4cb1736da0647d163e",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0, y: 0.000012700000070253736, z: 0 },
      }}
      {...props}
    />
  );
};

export default TPD4E05U06DQAR;
