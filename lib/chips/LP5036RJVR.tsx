import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["OUT0"],
  pin2: ["OUT1"],
  pin3: ["OUT2"],
  pin4: ["OUT3"],
  pin5: ["OUT4"],
  pin6: ["OUT5"],
  pin7: ["OUT6"],
  pin8: ["OUT7"],
  pin9: ["OUT8"],
  pin10: ["OUT9"],
  pin11: ["OUT10"],
  pin12: ["OUT11"],
  pin13: ["OUT12"],
  pin14: ["OUT13"],
  pin15: ["OUT14"],
  pin16: ["OUT15"],
  pin17: ["OUT16"],
  pin18: ["OUT17"],
  pin19: ["OUT18"],
  pin20: ["OUT19"],
  pin21: ["OUT20"],
  pin22: ["OUT21"],
  pin23: ["OUT22"],
  pin24: ["OUT23"],
  pin25: ["OUT24"],
  pin26: ["OUT25"],
  pin27: ["OUT26"],
  pin28: ["OUT27"],
  pin29: ["OUT28"],
  pin30: ["OUT29"],
  pin31: ["OUT30"],
  pin32: ["OUT31"],
  pin33: ["OUT32"],
  pin34: ["OUT33"],
  pin35: ["OUT34"],
  pin36: ["OUT35"],
  pin37: ["GND1"],
  pin38: ["ADDR0"],
  pin39: ["ADDR1"],
  pin40: ["VCC"],
  pin41: ["SDA"],
  pin42: ["SCL"],
  pin43: ["EN"],
  pin44: ["IREF"],
  pin45: ["VCAP"],
  pin46: ["GND2"],
  pin47: ["EP"],
} as const;

const pinAttributes = {
  pin37: { requiresGround: true },
  pin40: { requiresPower: true },
  pin46: { requiresGround: true },
} as const;

export const LP5036RJVR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C701961"],
      }}
      manufacturerPartNumber="LP5036RJVR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-2.417572mm"
            pcbY="2.400046mm"
            width="0.6849872mm"
            height="0.2240026mm"
            radius="0.1120013mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-2.417572mm"
            pcbY="1.999996mm"
            width="0.6849872mm"
            height="0.2240026mm"
            radius="0.1120013mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-2.417572mm"
            pcbY="1.599946mm"
            width="0.6849872mm"
            height="0.2240026mm"
            radius="0.1120013mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-2.417572mm"
            pcbY="1.199896mm"
            width="0.6849872mm"
            height="0.2240026mm"
            radius="0.1120013mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-2.417572mm"
            pcbY="0.8001mm"
            width="0.6849872mm"
            height="0.2240026mm"
            radius="0.1120013mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-2.417572mm"
            pcbY="0.40005mm"
            width="0.6849872mm"
            height="0.2240026mm"
            radius="0.1120013mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-2.417572mm"
            pcbY="-0mm"
            width="0.6849872mm"
            height="0.2240026mm"
            radius="0.1120013mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-2.417572mm"
            pcbY="-0.40005mm"
            width="0.6849872mm"
            height="0.2240026mm"
            radius="0.1120013mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="-2.417572mm"
            pcbY="-0.8001mm"
            width="0.6849872mm"
            height="0.2240026mm"
            radius="0.1120013mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="-2.417572mm"
            pcbY="-1.199896mm"
            width="0.6849872mm"
            height="0.2240026mm"
            radius="0.1120013mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="-2.417572mm"
            pcbY="-1.599946mm"
            width="0.6849872mm"
            height="0.2240026mm"
            radius="0.1120013mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="-2.417572mm"
            pcbY="-1.999996mm"
            width="0.6849872mm"
            height="0.2240026mm"
            radius="0.1120013mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="-2.417572mm"
            pcbY="-2.400046mm"
            width="0.6849872mm"
            height="0.2240026mm"
            radius="0.1120013mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="-1.800098mm"
            pcbY="-2.917444mm"
            width="0.2240026mm"
            height="0.6849872mm"
            radius="0.1120013mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="-1.400048mm"
            pcbY="-2.917444mm"
            width="0.2240026mm"
            height="0.6849872mm"
            radius="0.1120013mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="-0.999998mm"
            pcbY="-2.917444mm"
            width="0.2240026mm"
            height="0.6849872mm"
            radius="0.1120013mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="-0.599948mm"
            pcbY="-2.917444mm"
            width="0.2240026mm"
            height="0.6849872mm"
            radius="0.1120013mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="-0.199898mm"
            pcbY="-2.917444mm"
            width="0.2240026mm"
            height="0.6849872mm"
            radius="0.1120013mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin19"]}
            pcbX="0.199898mm"
            pcbY="-2.917444mm"
            width="0.2240026mm"
            height="0.6849872mm"
            radius="0.1120013mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin20"]}
            pcbX="0.599948mm"
            pcbY="-2.917444mm"
            width="0.2240026mm"
            height="0.6849872mm"
            radius="0.1120013mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin21"]}
            pcbX="0.999998mm"
            pcbY="-2.917444mm"
            width="0.2240026mm"
            height="0.6849872mm"
            radius="0.1120013mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin22"]}
            pcbX="1.400048mm"
            pcbY="-2.917444mm"
            width="0.2240026mm"
            height="0.6849872mm"
            radius="0.1120013mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin23"]}
            pcbX="1.800098mm"
            pcbY="-2.917444mm"
            width="0.2240026mm"
            height="0.6849872mm"
            radius="0.1120013mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin24"]}
            pcbX="2.417572mm"
            pcbY="-2.400046mm"
            width="0.6849872mm"
            height="0.2240026mm"
            radius="0.1120013mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin25"]}
            pcbX="2.417572mm"
            pcbY="-1.999996mm"
            width="0.6849872mm"
            height="0.2240026mm"
            radius="0.1120013mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin26"]}
            pcbX="2.417572mm"
            pcbY="-1.599946mm"
            width="0.6849872mm"
            height="0.2240026mm"
            radius="0.1120013mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin27"]}
            pcbX="2.417572mm"
            pcbY="-1.199896mm"
            width="0.6849872mm"
            height="0.2240026mm"
            radius="0.1120013mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin28"]}
            pcbX="2.417572mm"
            pcbY="-0.8001mm"
            width="0.6849872mm"
            height="0.2240026mm"
            radius="0.1120013mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin29"]}
            pcbX="2.417572mm"
            pcbY="-0.40005mm"
            width="0.6849872mm"
            height="0.2240026mm"
            radius="0.1120013mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin30"]}
            pcbX="2.417572mm"
            pcbY="-0mm"
            width="0.6849872mm"
            height="0.2240026mm"
            radius="0.1120013mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin31"]}
            pcbX="2.417572mm"
            pcbY="0.40005mm"
            width="0.6849872mm"
            height="0.2240026mm"
            radius="0.1120013mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin32"]}
            pcbX="2.417572mm"
            pcbY="0.8001mm"
            width="0.6849872mm"
            height="0.2240026mm"
            radius="0.1120013mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin33"]}
            pcbX="2.417572mm"
            pcbY="1.199896mm"
            width="0.6849872mm"
            height="0.2240026mm"
            radius="0.1120013mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin34"]}
            pcbX="2.417572mm"
            pcbY="1.599946mm"
            width="0.6849872mm"
            height="0.2240026mm"
            radius="0.1120013mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin35"]}
            pcbX="2.417572mm"
            pcbY="1.999996mm"
            width="0.6849872mm"
            height="0.2240026mm"
            radius="0.1120013mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin36"]}
            pcbX="2.417572mm"
            pcbY="2.400046mm"
            width="0.6849872mm"
            height="0.2240026mm"
            radius="0.1120013mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin37"]}
            pcbX="1.800098mm"
            pcbY="2.917444mm"
            width="0.2240026mm"
            height="0.6849872mm"
            radius="0.1120013mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin38"]}
            pcbX="1.400048mm"
            pcbY="2.917444mm"
            width="0.2240026mm"
            height="0.6849872mm"
            radius="0.1120013mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin39"]}
            pcbX="0.999998mm"
            pcbY="2.917444mm"
            width="0.2240026mm"
            height="0.6849872mm"
            radius="0.1120013mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin40"]}
            pcbX="0.599948mm"
            pcbY="2.917444mm"
            width="0.2240026mm"
            height="0.6849872mm"
            radius="0.1120013mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin41"]}
            pcbX="0.199898mm"
            pcbY="2.917444mm"
            width="0.2240026mm"
            height="0.6849872mm"
            radius="0.1120013mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin42"]}
            pcbX="-0.199898mm"
            pcbY="2.917444mm"
            width="0.2240026mm"
            height="0.6849872mm"
            radius="0.1120013mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin43"]}
            pcbX="-0.599948mm"
            pcbY="2.917444mm"
            width="0.2240026mm"
            height="0.6849872mm"
            radius="0.1120013mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin44"]}
            pcbX="-0.999998mm"
            pcbY="2.917444mm"
            width="0.2240026mm"
            height="0.6849872mm"
            radius="0.1120013mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin45"]}
            pcbX="-1.400048mm"
            pcbY="2.917444mm"
            width="0.2240026mm"
            height="0.6849872mm"
            radius="0.1120013mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin46"]}
            pcbX="-1.800098mm"
            pcbY="2.917444mm"
            width="0.2240026mm"
            height="0.6849872mm"
            radius="0.1120013mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin47"]}
            pcbX="0mm"
            pcbY="-0mm"
            width="2.7999944mm"
            height="3.7999924mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -2.5761949999999985, y: 2.664383799999996 },
              { x: -2.5761949999999985, y: 3.0761939999999868 },
              { x: -2.0643850000000015, y: 3.0761939999999868 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 2.5761949999999985, y: 2.664383799999996 },
              { x: 2.5761949999999985, y: 3.0761939999999868 },
              { x: 2.0643850000000015, y: 3.0761939999999868 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 2.5761949999999985, y: -2.66438380000001 },
              { x: 2.5761949999999985, y: -3.076194000000001 },
              { x: 2.0643850000000015, y: -3.076194000000001 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.5761949999999985, y: -2.66438380000001 },
              { x: -2.5761949999999985, y: -3.076194000000001 },
              { x: -2.0643850000000015, y: -3.076194000000001 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.960877999999994, y: 2.400045999999989 },
              { x: -2.9642880070082924, y: 2.3741444252423207 },
              { x: -2.974285641690855, y: 2.3500080000000025 },
              { x: -2.990189581765975, y: 2.3292815817659687 },
              { x: -3.0109159999999804, y: 2.313377641690863 },
              { x: -3.035052425242327, y: 2.3033800070083004 },
              { x: -3.0609539999999953, y: 2.299970000000002 },
              { x: -3.0868555747576636, y: 2.3033800070083004 },
              { x: -3.11099200000001, y: 2.313377641690863 },
              { x: -3.1317184182340156, y: 2.3292815817659687 },
              { x: -3.1476223583091354, y: 2.3500080000000025 },
              { x: -3.157619992991698, y: 2.3741444252423207 },
              { x: -3.1610299999999967, y: 2.400045999999989 },
              { x: -3.157619992991698, y: 2.4259475747576715 },
              { x: -3.1476223583091354, y: 2.4500839999999897 },
              { x: -3.1317184182340156, y: 2.4708104182340236 },
              { x: -3.11099200000001, y: 2.486714358309115 },
              { x: -3.0868555747576636, y: 2.496711992991692 },
              { x: -3.0609539999999953, y: 2.5001219999999904 },
              { x: -3.035052425242327, y: 2.496711992991692 },
              { x: -3.0109159999999804, y: 2.486714358309115 },
              { x: -2.990189581765975, y: 2.4708104182340236 },
              { x: -2.974285641690855, y: 2.4500839999999897 },
              { x: -2.9642880070082924, y: 2.4259475747576715 },
              { x: -2.960877999999994, y: 2.400045999999989 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.2413mm"
            pcbY="4.1496mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -3.3995999999999924, y: 3.3995999999999924 },
              { x: 2.9170000000000016, y: 3.3995999999999924 },
              { x: 2.9170000000000016, y: -3.399600000000021 },
              { x: -3.3995999999999924, y: -3.399600000000021 },
              { x: -3.3995999999999924, y: 3.3995999999999924 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C701961.obj?uuid=981c957296194e9ab0a46f12d1c37e64",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C701961.step?uuid=981c957296194e9ab0a46f12d1c37e64",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.000012699999984988608, y: 0, z: -0.02 },
      }}
      {...props}
    />
  );
};

export default LP5036RJVR;
