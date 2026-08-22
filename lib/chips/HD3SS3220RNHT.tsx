import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["CC2"],
  pin2: ["CC1"],
  pin3: ["CURRENT_MODE"],
  pin4: ["PORT"],
  pin5: ["VBUS_DET"],
  pin6: ["TXp"],
  pin7: ["TXn"],
  pin8: ["VCC33"],
  pin9: ["RXp"],
  pin10: ["RXn"],
  pin11: ["DIR"],
  pin12: ["ENn_MUX"],
  pin13: ["GND1"],
  pin14: ["RX1n"],
  pin15: ["RX1p"],
  pin16: ["TX1n"],
  pin17: ["TX1p"],
  pin18: ["RX2n"],
  pin19: ["RX2p"],
  pin20: ["TX2n"],
  pin21: ["TX2p"],
  pin22: ["ADDR"],
  pin23: ["pin23"],
  pin24: ["VCONN_FAULT_N"],
  pin25: ["pin25"],
  pin26: ["pin26"],
  pin27: ["ID"],
  pin28: ["GND2"],
  pin29: ["ENn_CC"],
  pin30: ["VDD5"],
  pin31: ["EP"],
} as const;

export const HD3SS3220RNHT = (props: ChipProps<typeof pinLabels>) => {
  const { name = "SW1", ...restProps } = props;

  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      name={name}
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C2155924"],
      }}
      manufacturerPartNumber="HD3SS3220RNHT"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin2"]}
            pcbX="-1.400048mm"
            pcbY="-1.199896mm"
            width="0.1999996mm"
            height="0.5050028mm"
            radius="0.0999998mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-0.999998mm"
            pcbY="-1.199896mm"
            width="0.1999996mm"
            height="0.5050028mm"
            radius="0.0999998mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-0.599948mm"
            pcbY="-1.199896mm"
            width="0.1999996mm"
            height="0.5050028mm"
            radius="0.0999998mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-0.199898mm"
            pcbY="-1.199896mm"
            width="0.1999996mm"
            height="0.5050028mm"
            radius="0.0999998mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0.199898mm"
            pcbY="-1.199896mm"
            width="0.1999996mm"
            height="0.5050028mm"
            radius="0.0999998mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="0.599948mm"
            pcbY="-1.199896mm"
            width="0.1999996mm"
            height="0.5050028mm"
            radius="0.0999998mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="0.999998mm"
            pcbY="-1.199896mm"
            width="0.1999996mm"
            height="0.5050028mm"
            radius="0.0999998mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="1.400048mm"
            pcbY="-1.199896mm"
            width="0.1999996mm"
            height="0.5050028mm"
            radius="0.0999998mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="2.199894mm"
            pcbY="-0.40005mm"
            width="0.5050028mm"
            height="0.1999996mm"
            radius="0.0999998mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="2.199894mm"
            pcbY="0mm"
            width="0.5050028mm"
            height="0.1999996mm"
            radius="0.0999998mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="2.199894mm"
            pcbY="0.40005mm"
            width="0.5050028mm"
            height="0.1999996mm"
            radius="0.0999998mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="1.400048mm"
            pcbY="1.199896mm"
            width="0.1999996mm"
            height="0.5050028mm"
            radius="0.0999998mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="0.999998mm"
            pcbY="1.199896mm"
            width="0.1999996mm"
            height="0.5050028mm"
            radius="0.0999998mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin19"]}
            pcbX="0.599948mm"
            pcbY="1.199896mm"
            width="0.1999996mm"
            height="0.5050028mm"
            radius="0.0999998mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin20"]}
            pcbX="0.199898mm"
            pcbY="1.199896mm"
            width="0.1999996mm"
            height="0.5050028mm"
            radius="0.0999998mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin21"]}
            pcbX="-0.199898mm"
            pcbY="1.199896mm"
            width="0.1999996mm"
            height="0.5050028mm"
            radius="0.0999998mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin22"]}
            pcbX="-0.599948mm"
            pcbY="1.199896mm"
            width="0.1999996mm"
            height="0.5050028mm"
            radius="0.0999998mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin23"]}
            pcbX="-0.999998mm"
            pcbY="1.199896mm"
            width="0.1999996mm"
            height="0.5050028mm"
            radius="0.0999998mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin24"]}
            pcbX="-1.400048mm"
            pcbY="1.199896mm"
            width="0.1999996mm"
            height="0.5050028mm"
            radius="0.0999998mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin27"]}
            pcbX="-2.199894mm"
            pcbY="0.40005mm"
            width="0.5050028mm"
            height="0.1999996mm"
            radius="0.0999998mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin28"]}
            pcbX="-2.199894mm"
            pcbY="0mm"
            width="0.5050028mm"
            height="0.1999996mm"
            radius="0.0999998mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin29"]}
            pcbX="-2.199894mm"
            pcbY="-0.40005mm"
            width="0.5050028mm"
            height="0.1999996mm"
            radius="0.0999998mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin31"]}
            pcbX="0mm"
            pcbY="0mm"
            width="3.1999936mm"
            height="1.1999976mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            points={[
              { x: "2.4500078mm", y: "0.8999982mm" },
              { x: "2.4500078mm", y: "0.6999986mm" },
              { x: "1.9500088mm", y: "0.700024mm" },
              { x: "1.9500088mm", y: "0.7001256mm" },
              { x: "1.9500088mm", y: "0.8000492mm" },
              { x: "1.9500088mm", y: "0.8000492mm" },
              { x: "2.0500086mm", y: "0.8999982mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin16"]}
            points={[
              { x: "1.8999962mm", y: "1.4499844mm" },
              { x: "1.6999712mm", y: "1.4499844mm" },
              { x: "1.700022mm", y: "0.9500362mm" },
              { x: "1.7001998mm", y: "0.9500362mm" },
              { x: "1.8000218mm", y: "0.9500362mm" },
              { x: "1.8000218mm", y: "0.9500362mm" },
              { x: "1.8999962mm", y: "1.0499852mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin1"]}
            points={[
              { x: "-1.900047mm", y: "-1.4499844mm" },
              { x: "-1.700022mm", y: "-1.4499844mm" },
              { x: "-1.7000728mm", y: "-0.9500362mm" },
              { x: "-1.7002506mm", y: "-0.9500362mm" },
              { x: "-1.8000726mm", y: "-0.9500362mm" },
              { x: "-1.8000726mm", y: "-0.9500362mm" },
              { x: "-1.900047mm", y: "-1.0499852mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin30"]}
            points={[
              { x: "-2.4500332mm", y: "-0.8999728mm" },
              { x: "-2.4500332mm", y: "-0.6999986mm" },
              { x: "-1.9500596mm", y: "-0.700024mm" },
              { x: "-1.9500596mm", y: "-0.7001002mm" },
              { x: "-1.9500596mm", y: "-0.8000492mm" },
              { x: "-1.9500596mm", y: "-0.8000492mm" },
              { x: "-2.0500594mm", y: "-0.8999728mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin26"]}
            points={[
              { x: "-2.4499316mm", y: "0.8998712mm" },
              { x: "-2.4499316mm", y: "0.699897mm" },
              { x: "-1.9499326mm", y: "0.6999478mm" },
              { x: "-1.9499326mm", y: "0.7000748mm" },
              { x: "-1.9499326mm", y: "0.7999476mm" },
              { x: "-1.9499326mm", y: "0.7999476mm" },
              { x: "-2.0499832mm", y: "0.8999982mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin25"]}
            points={[
              { x: "-1.900047mm", y: "1.4499336mm" },
              { x: "-1.700022mm", y: "1.4498828mm" },
              { x: "-1.7001236mm", y: "0.9499854mm" },
              { x: "-1.7002506mm", y: "0.9499346mm" },
              { x: "-1.8000472mm", y: "0.9499346mm" },
              { x: "-1.8000472mm", y: "0.9499346mm" },
              { x: "-1.900047mm", y: "1.0498074mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin10"]}
            points={[
              { x: "1.900047mm", y: "-1.450086mm" },
              { x: "1.6999712mm", y: "-1.4500606mm" },
              { x: "1.7000474mm", y: "-0.9501378mm" },
              { x: "1.7002252mm", y: "-0.9501378mm" },
              { x: "1.7999964mm", y: "-0.9501124mm" },
              { x: "1.7999964mm", y: "-0.9501124mm" },
              { x: "1.9001232mm", y: "-1.0499852mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin11"]}
            points={[
              { x: "2.449957mm", y: "-0.899922mm" },
              { x: "2.449957mm", y: "-0.6999986mm" },
              { x: "1.9499326mm", y: "-0.6999986mm" },
              { x: "1.9499326mm", y: "-0.7001256mm" },
              { x: "1.9499326mm", y: "-0.8000492mm" },
              { x: "1.9499326mm", y: "-0.8000492mm" },
              { x: "2.0499832mm", y: "-0.899922mm" },
            ]}
            shape="polygon"
          />
          <silkscreenpath
            route={[
              { x: -2.3262081999999964, y: 1.1025124000000233 },
              { x: -2.3262081999999964, y: 1.326210200000105 },
              { x: -2.1025103999999146, y: 1.326210200000105 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 2.3262081999999964, y: 1.1025124000000233 },
              { x: 2.3262081999999964, y: 1.326210200000105 },
              { x: 2.1025104000000283, y: 1.326210200000105 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.3262081999999964, y: -1.1025124000000233 },
              { x: -2.3262081999999964, y: -1.326210200000105 },
              { x: -2.1025103999999146, y: -1.326210200000105 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 2.3262081999999964, y: -1.1025124000000233 },
              { x: 2.3262081999999964, y: -1.326210200000105 },
              { x: 2.1025104000000283, y: -1.326210200000105 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.7251680000000533, y: -1.7299940000000333 },
              { x: -1.7277211778362016, y: -1.7493873110495315 },
              { x: -1.735206716494531, y: -1.7674590000000308 },
              { x: -1.7471144888858134, y: -1.782977511114268 },
              { x: -1.7626330000000507, y: -1.7948852835054367 },
              { x: -1.7807046889504363, y: -1.8023708221637662 },
              { x: -1.8000979999999345, y: -1.8049240000000282 },
              { x: -1.8194913110494326, y: -1.8023708221637662 },
              { x: -1.8375630000000456, y: -1.7948852835054367 },
              { x: -1.8530815111143966, y: -1.782977511114268 },
              { x: -1.864989283505679, y: -1.7674590000000308 },
              { x: -1.8724748221640084, y: -1.7493873110495315 },
              { x: -1.8750280000001567, y: -1.7299940000000333 },
              { x: -1.8724748221640084, y: -1.7106006889505352 },
              { x: -1.864989283505679, y: -1.692529000000036 },
              { x: -1.8530815111143966, y: -1.6770104888857986 },
              { x: -1.8375630000000456, y: -1.6651027164944026 },
              { x: -1.8194913110494326, y: -1.657617177836073 },
              { x: -1.8000979999999345, y: -1.6550640000000385 },
              { x: -1.7807046889504363, y: -1.657617177836073 },
              { x: -1.7626330000000507, y: -1.6651027164944026 },
              { x: -1.7471144888858134, y: -1.6770104888857986 },
              { x: -1.735206716494531, y: -1.692529000000036 },
              { x: -1.7277211778362016, y: -1.7106006889505352 },
              { x: -1.7251680000000533, y: -1.7299940000000333 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.0127mm"
            pcbY="2.4478mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -2.713799999999992, y: 1.6977999999999156 },
              { x: 2.6884000000000015, y: 1.6977999999999156 },
              { x: 2.6884000000000015, y: -2.0534000000000106 },
              { x: -2.713799999999992, y: -2.0534000000000106 },
              { x: -2.713799999999992, y: 1.6977999999999156 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2155924.obj?uuid=db8cca3278554dd79dd0e7b7f825ecec",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2155924.step?uuid=db8cca3278554dd79dd0e7b7f825ecec",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: 0.000012700000070253736,
          y: 0.000012699999842880061,
          z: -0.025,
        },
      }}
      {...restProps}
    />
  );
};

export default HD3SS3220RNHT;
