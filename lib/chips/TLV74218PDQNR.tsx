import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["OUT"],
  pin2: ["GND"],
  pin3: ["EN"],
  pin4: ["IN"],
  pin5: ["PAD"],
} as const;

const pinAttributes = {
  pin2: { requiresGround: true },
} as const;

export const TLV74218PDQNR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C485140"],
      }}
      manufacturerPartNumber="TLV74218PDQNR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin2"]}
            points={[
              { x: "0.2250694mm", y: "-0.4249928mm" },
              { x: "0.3800856mm", y: "-0.270002mm" },
              { x: "0.4350766mm", y: "-0.270002mm" },
              { x: "0.4350766mm", y: "-0.6300216mm" },
              { x: "0.2250694mm", y: "-0.6300216mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-0.000127mm"
            pcbY="-0.0000508mm"
            width="0.48006mm"
            height="0.48006mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            points={[
              { x: "-0.2250694mm", y: "-0.4249928mm" },
              { x: "-0.3800856mm", y: "-0.270002mm" },
              { x: "-0.4350766mm", y: "-0.270002mm" },
              { x: "-0.4350766mm", y: "-0.6300216mm" },
              { x: "-0.2250694mm", y: "-0.6300216mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin3"]}
            points={[
              { x: "0.2250694mm", y: "0.4249674mm" },
              { x: "0.3800856mm", y: "0.270002mm" },
              { x: "0.4350766mm", y: "0.270002mm" },
              { x: "0.4350766mm", y: "0.6299962mm" },
              { x: "0.2250694mm", y: "0.6299962mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin4"]}
            points={[
              { x: "-0.2250186mm", y: "0.4249928mm" },
              { x: "-0.3800348mm", y: "0.270002mm" },
              { x: "-0.4350258mm", y: "0.270002mm" },
              { x: "-0.4350258mm", y: "0.6300216mm" },
              { x: "-0.2250186mm", y: "0.6300216mm" },
            ]}
            shape="polygon"
          />
          <silkscreenpath
            route={[
              { x: -0.5841746000000967, y: -0.5079999999999245 },
              { x: -0.5841746000000967, y: 0.49199799999996685 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 0.5842507999998361, y: 0.5080000000000382 },
              { x: 0.5842507999998361, y: -0.49199799999996685 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.549782999999934, y: -0.7399527999999691 },
              { x: -0.550466732369614, y: -0.7451462629589969 },
              { x: -0.5524713342476844, y: -0.7499857999998767 },
              { x: -0.5556601953287554, y: -0.7541416046713039 },
              { x: -0.5598160000000689, y: -0.757330465752375 },
              { x: -0.5646555370409487, y: -0.7593350676303317 },
              { x: -0.5698489999999765, y: -0.7600188000000117 },
              { x: -0.575042462959118, y: -0.7593350676303317 },
              { x: -0.5798819999999978, y: -0.757330465752375 },
              { x: -0.584037804671425, y: -0.7541416046713039 },
              { x: -0.587226665752496, y: -0.7499857999998767 },
              { x: -0.5892312676304527, y: -0.7451462629589969 },
              { x: -0.5899150000001327, y: -0.7399527999999691 },
              { x: -0.5892312676304527, y: -0.7347593370408276 },
              { x: -0.587226665752496, y: -0.7299197999999478 },
              { x: -0.584037804671425, y: -0.725763995328748 },
              { x: -0.5798819999999978, y: -0.7225751342475633 },
              { x: -0.575042462959118, y: -0.7205705323694929 },
              { x: -0.5698489999999765, y: -0.7198867999998129 },
              { x: -0.5646555370409487, y: -0.7205705323694929 },
              { x: -0.5598160000000689, y: -0.7225751342475633 },
              { x: -0.5556601953287554, y: -0.725763995328748 },
              { x: -0.5524713342476844, y: -0.7299197999999478 },
              { x: -0.550466732369614, y: -0.7347593370408276 },
              { x: -0.549782999999934, y: -0.7399527999999691 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.000127mm"
            pcbY="1.6407912mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -0.8343270000000302, y: 0.8907911999999669 },
              { x: 0.8340729999998757, y: 0.8907911999999669 },
              { x: 0.8340729999998757, y: -1.0062087999999676 },
              { x: -0.8343270000000302, y: -1.0062087999999676 },
              { x: -0.8343270000000302, y: 0.8907911999999669 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C485140.obj?uuid=3dd4f44ed68f41e5809638063ba33d50",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C485140.step?uuid=3dd4f44ed68f41e5809638063ba33d50",
        pcbRotationOffset: 180,
        modelOriginPosition: { x: 0.000063500000123895, y: 0, z: 0 },
      }}
      {...props}
    />
  );
};

export default TLV74218PDQNR;
