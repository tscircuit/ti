import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["VBIAS"],
  pin2: ["VIN"],
  pin3: ["ON"],
  pin4: ["GND"],
  pin5: ["VOUT"],
  pin6: ["CT"],
} as const;

export const TPS22995RZFR = (props: ChipProps<typeof pinLabels>) => {
  const { name = "SW1", ...restProps } = props;

  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      name={name}
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C17562944"],
      }}
      manufacturerPartNumber="TPS22995RZFR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.199898mm"
            pcbY="0.525018mm"
            width="0.1999996mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.299974mm"
            pcbY="0mm"
            width="0.350012mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-0.199898mm"
            pcbY="-0.525018mm"
            width="0.1999996mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0.199898mm"
            pcbY="-0.525018mm"
            width="0.1999996mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="0.299974mm"
            pcbY="0mm"
            width="0.350012mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0.199898mm"
            pcbY="0.525018mm"
            width="0.1999996mm"
            height="0.2999994mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -1.0429239999999709, y: 0.5080000000000382 },
              { x: -1.0463340070083404, y: 0.4820984252423841 },
              { x: -1.0563316416909174, y: 0.45796199999995224 },
              { x: -1.0722355817659945, y: 0.4372355817661173 },
              { x: -1.0929619999998295, y: 0.4213316416910402 },
              { x: -1.1170984252422613, y: 0.41133400700846323 },
              { x: -1.1429999999999154, y: 0.40792400000009366 },
              { x: -1.1689015747575695, y: 0.41133400700846323 },
              { x: -1.1930379999998877, y: 0.4213316416910402 },
              { x: -1.21376441823395, y: 0.4372355817661173 },
              { x: -1.229668358309027, y: 0.45796199999995224 },
              { x: -1.239665992991604, y: 0.4820984252423841 },
              { x: -1.24307599999986, y: 0.5080000000000382 },
              { x: -1.239665992991604, y: 0.5339015747576923 },
              { x: -1.229668358309027, y: 0.5580380000000105 },
              { x: -1.21376441823395, y: 0.5787644182340728 },
              { x: -1.1930379999998877, y: 0.5946683583091499 },
              { x: -1.1689015747575695, y: 0.6046659929917269 },
              { x: -1.1429999999999154, y: 0.6080759999999827 },
              { x: -1.1170984252422613, y: 0.6046659929917269 },
              { x: -1.0929619999998295, y: 0.5946683583091499 },
              { x: -1.0722355817659945, y: 0.5787644182340728 },
              { x: -1.0563316416909174, y: 0.5580380000000105 },
              { x: -1.0463340070083404, y: 0.5339015747576923 },
              { x: -1.0429239999999709, y: 0.5080000000000382 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.2794mm"
            pcbY="1.9144mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -1.4945999999998776, y: 1.1644000000000005 },
              { x: 0.9358000000000857, y: 1.1644000000000005 },
              { x: 0.9358000000000857, y: -1.1898000000001048 },
              { x: -1.4945999999998776, y: -1.1898000000001048 },
              { x: -1.4945999999998776, y: 1.1644000000000005 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C17562944.obj?uuid=f0b945e5fb6b47dbbd0cdc5c7d8653ba",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C17562944.step?uuid=f0b945e5fb6b47dbbd0cdc5c7d8653ba",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0.000012700000070253736, z: -0.01 },
      }}
      {...restProps}
    />
  );
};

export default TPS22995RZFR;
