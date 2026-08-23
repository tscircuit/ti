import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["CT"],
  pin2: ["NC"],
  pin3: ["VIN"],
  pin4: ["VBIAS"],
  pin5: ["ON"],
  pin6: ["GND"],
  pin7: ["PG"],
  pin8: ["VOUT1"],
  pin9: ["VOUT2"],
  pin10: ["VOUT3"],
  pin11: ["pin11"],
  pin12: ["pin10_alt1"],
} as const;

export const TPS22990DMLR = (props: ChipProps<typeof pinLabels>) => {
  const { name = "SW1", ...restProps } = props;

  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      name={name}
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C962990"],
      }}
      manufacturerPartNumber="TPS22990DMLR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin11"]}
            pcbX="0mm"
            pcbY="0mm"
            width="2.5999948mm"
            height="1.0999978mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0.999998mm"
            pcbY="0.9948418mm"
            width="0.2800096mm"
            height="0.5050028mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="0.500126mm"
            pcbY="0.9948418mm"
            width="0.2800096mm"
            height="0.5050028mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="0mm"
            pcbY="0.9948418mm"
            width="0.2800096mm"
            height="0.5050028mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="-0.499872mm"
            pcbY="0.9948418mm"
            width="0.2800096mm"
            height="0.5050028mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="-0.999998mm"
            pcbY="0.9948418mm"
            width="0.2800096mm"
            height="0.5050028mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="0.999998mm"
            pcbY="-0.9948418mm"
            width="0.2800096mm"
            height="0.5050028mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0.500126mm"
            pcbY="-0.9948418mm"
            width="0.2800096mm"
            height="0.5050028mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0mm"
            pcbY="-0.9948418mm"
            width="0.2800096mm"
            height="0.5050028mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.499872mm"
            pcbY="-0.9948418mm"
            width="0.2800096mm"
            height="0.5050028mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.999998mm"
            pcbY="-0.9948418mm"
            width="0.2800096mm"
            height="0.5050028mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            points={[
              { x: "-1.1400028mm", y: "0.7349998mm" },
              { x: "0.1400048mm", y: "0.7349998mm" },
              { x: "0.1400048mm", y: "1.0199878mm" },
              { x: "-1.1399774mm", y: "1.0199878mm" },
              { x: "-1.1400028mm", y: "1.0199878mm" },
            ]}
            shape="polygon"
          />
          <silkscreenpath
            route={[
              { x: 1.5762223999998923, y: 1.0762234000001172 },
              { x: 1.5762223999998923, y: -1.0762233999998898 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.576222400000006, y: -1.0762233999998898 },
              { x: -1.576222400000006, y: 1.0762234000001172 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.8999220000000605, y: -1.4800579999998718 },
              { x: -0.9033320070083164, y: -1.5059595747577532 },
              { x: -0.9133296416908934, y: -1.5300960000000714 },
              { x: -0.9292335817659705, y: -1.5508224182339063 },
              { x: -0.9499599999999191, y: -1.5667263583090971 },
              { x: -0.974096425242351, y: -1.576723992991674 },
              { x: -0.999998000000005, y: -1.5801339999998163 },
              { x: -1.0258995747576591, y: -1.576723992991674 },
              { x: -1.050036000000091, y: -1.5667263583090971 },
              { x: -1.070762418233926, y: -1.5508224182339063 },
              { x: -1.086666358309003, y: -1.5300960000000714 },
              { x: -1.09666399299158, y: -1.5059595747577532 },
              { x: -1.1000739999999496, y: -1.4800579999998718 },
              { x: -1.09666399299158, y: -1.4541564252422177 },
              { x: -1.086666358309003, y: -1.4300200000000132 },
              { x: -1.070762418233926, y: -1.4092935817660646 },
              { x: -1.050036000000091, y: -1.3933896416908738 },
              { x: -1.0258995747576591, y: -1.3833920070082968 },
              { x: -0.999998000000005, y: -1.3799820000001546 },
              { x: -0.974096425242351, y: -1.3833920070082968 },
              { x: -0.9499599999999191, y: -1.3933896416908738 },
              { x: -0.9292335817659705, y: -1.4092935817660646 },
              { x: -0.9133296416908934, y: -1.4300200000000132 },
              { x: -0.9033320070083164, y: -1.4541564252422177 },
              { x: -0.8999220000000605, y: -1.4800579999998718 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="0mm"
            pcbY="2.2446mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -1.824799999999982, y: 1.494600000000105 },
              { x: 1.8248000000000957, y: 1.494600000000105 },
              { x: 1.8248000000000957, y: -1.8247999999998683 },
              { x: -1.824799999999982, y: -1.8247999999998683 },
              { x: -1.824799999999982, y: 1.494600000000105 },
            ]}
          />
        </footprint>
      }
      {...restProps}
    />
  );
};

export default TPS22990DMLR;
