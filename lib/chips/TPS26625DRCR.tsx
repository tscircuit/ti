import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["IN"],
  pin2: ["UVLO"],
  pin3: ["OVP"],
  pin4: ["SHDN"],
  pin5: ["RTN"],
  pin6: ["GND"],
  pin7: ["ILIM"],
  pin8: ["dVdT"],
  pin9: ["FLT"],
  pin10: ["OUT"],
  pin11: ["EP"],
} as const;

const pinAttributes = {
  pin6: { requiresGround: true },
} as const;

export const TPS26625DRCR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2862873"],
      }}
      manufacturerPartNumber="TPS26625DRCR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin9"]}
            pcbX="1.49987mm"
            pcbY="0.507873mm"
            width="0.7999984mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="1.49987mm"
            pcbY="1.007745mm"
            width="0.7999984mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            points={[
              { x: "-0.758571mm", y: "1.194816mm" },
              { x: "-0.3735578mm", y: "1.194816mm" },
              { x: "-0.3735578mm", y: "1.7100042mm" },
              { x: "-0.1235456mm", y: "1.7100042mm" },
              { x: "-0.1235456mm", y: "1.194816mm" },
              { x: "0.1264412mm", y: "1.194816mm" },
              { x: "0.1264412mm", y: "1.7100042mm" },
              { x: "0.3764534mm", y: "1.7100042mm" },
              { x: "0.3764534mm", y: "1.194816mm" },
              { x: "0.7613904mm", y: "1.194816mm" },
              { x: "0.7613904mm", y: "-1.2051792mm" },
              { x: "0.3764534mm", y: "-1.2051792mm" },
              { x: "0.3764534mm", y: "-1.7100042mm" },
              { x: "0.1264412mm", y: "-1.7100042mm" },
              { x: "0.1264412mm", y: "-1.2051792mm" },
              { x: "-0.1235456mm", y: "-1.2051792mm" },
              { x: "-0.1235456mm", y: "-1.7100042mm" },
              { x: "-0.3735578mm", y: "-1.7100042mm" },
              { x: "-0.3735578mm", y: "-1.2051792mm" },
              { x: "-0.7585964mm", y: "-1.2051792mm" },
              { x: "-0.7585964mm", y: "0.8899906mm" },
              { x: "-0.758571mm", y: "0.890016mm" },
              { x: "-0.758571mm", y: "0.890016mm" },
              { x: "-0.758571mm", y: "0.890016mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="1.49987mm"
            pcbY="0.007747mm"
            width="0.7999984mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="1.49987mm"
            pcbY="-0.492125mm"
            width="0.7999984mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="1.49987mm"
            pcbY="-0.992251mm"
            width="0.7999984mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-1.49987mm"
            pcbY="-1.000125mm"
            width="0.7999984mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-1.49987mm"
            pcbY="-0.499999mm"
            width="0.7999984mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-1.49987mm"
            pcbY="-0.000127mm"
            width="0.7999984mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-1.49987mm"
            pcbY="0.499999mm"
            width="0.7999984mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="-1.49987mm"
            pcbY="0.999871mm"
            width="0.7999984mm"
            height="0.2999994mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: 0.0005333999999947991, y: 1.4999970000001213 },
              { x: 0.0022860000000264336, y: 1.4999970000001213 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.4986000000000104, y: -1.3491209999999683 },
              { x: -1.4986000000000104, y: -1.4999970000000076 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.647725400000013, y: -1.4999970000000076 },
              { x: -1.4986000000000104, y: -1.4999970000000076 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 0.0022860000000264336, y: -1.4999970000000076 },
              { x: 0.0005333999999947991, y: -1.4999970000000076 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.5014194000000316, y: -1.4999970000000076 },
              { x: 0.6505448000000342, y: -1.4999970000000076 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 0.650570200000061, y: 1.4999970000001213 },
              { x: 1.5013940000000048, y: 1.4999970000001213 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.4986000000000104, y: 1.4999970000001213 },
              { x: -0.647725400000013, y: 1.4999970000001213 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.4986000000000104, y: 1.4999970000001213 },
              { x: -1.4986000000000104, y: 1.349121000000082 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.5014194000000316, y: -1.2941807999999355 },
              { x: 1.5014194000000316, y: -1.4999970000000076 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.5014194000000316, y: 1.4999970000001213 },
              { x: 1.5014194000000316, y: 1.2941299999999956 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.8300699999999779, y: 1.5276830000000245 },
              { x: -1.8326231778361262, y: 1.5082896889505264 },
              { x: -1.8401087164944556, y: 1.4902180000000271 },
              { x: -1.852016488885738, y: 1.4746994888856761 },
              { x: -1.8675349999999753, y: 1.4627917164945075 },
              { x: -1.8856066889504746, y: 1.455306177836178 },
              { x: -1.9049999999999727, y: 1.4527530000001434 },
              { x: -1.9243933110494709, y: 1.455306177836178 },
              { x: -1.9424649999999701, y: 1.4627917164945075 },
              { x: -1.9579835111143211, y: 1.4746994888856761 },
              { x: -1.9698912835056035, y: 1.4902180000000271 },
              { x: -1.977376822163933, y: 1.5082896889505264 },
              { x: -1.9799300000000812, y: 1.5276830000000245 },
              { x: -1.977376822163933, y: 1.5470763110495227 },
              { x: -1.9698912835056035, y: 1.5651480000001357 },
              { x: -1.9579835111143211, y: 1.5806665111142593 },
              { x: -1.9424649999999701, y: 1.5925742835055416 },
              { x: -1.9243933110494709, y: 1.600059822163871 },
              { x: -1.9049999999999727, y: 1.6026130000000194 },
              { x: -1.8856066889504746, y: 1.600059822163871 },
              { x: -1.8675349999999753, y: 1.5925742835055416 },
              { x: -1.852016488885738, y: 1.5806665111142593 },
              { x: -1.8401087164944556, y: 1.5651480000001357 },
              { x: -1.8326231778361262, y: 1.5470763110495227 },
              { x: -1.8300699999999779, y: 1.5276830000000245 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.028448mm"
            pcbY="2.720469mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -2.2215479999999843, y: 1.97046899999998 },
              { x: 2.1646520000000464, y: 1.97046899999998 },
              { x: 2.1646520000000464, y: -1.9585309999999936 },
              { x: -2.2215479999999843, y: -1.9585309999999936 },
              { x: -2.2215479999999843, y: 1.97046899999998 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2862873.obj?uuid=f788d5c8e1d5440dbc825949aa164fbc",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2862873.step?uuid=f788d5c8e1d5440dbc825949aa164fbc",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: 0.0000762000000804619,
          y: -0.0038354000000708766,
          z: 0,
        },
      }}
      {...props}
    />
  );
};

export default TPS26625DRCR;
