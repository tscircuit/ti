import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["EN"],
  pin2: ["NC1"],
  pin3: ["VIN"],
  pin4: ["NC2"],
  pin5: ["NC5"],
  pin6: ["PGND"],
  pin7: ["SW"],
  pin8: ["BOOT"],
  pin9: ["NC3"],
  pin10: ["VCC"],
  pin11: ["pin11"],
  pin12: ["NC4"],
  pin13: ["pin13"],
  pin14: ["PG"],
  pin15: ["GND"],
} as const;

const pinAttributes = {
  pin2: { doNotConnect: true },
  pin3: { requiresPower: true },
  pin4: { doNotConnect: true },
  pin5: { doNotConnect: true },
  pin6: { requiresGround: true },
  pin9: { doNotConnect: true },
  pin10: { requiresPower: true },
  pin12: { doNotConnect: true },
  pin15: { requiresGround: true },
} as const;

export const LMQ66430MA3RXBRQ1 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C33608934"],
      }}
      manufacturerPartNumber="LMQ66430MA3RXBRQ1"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin2"]}
            pcbX="-1.15000405mm"
            pcbY="0.499872mm"
            width="0.6999986mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-1.15000405mm"
            pcbY="0mm"
            width="0.6999986mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-1.15000405mm"
            pcbY="-0.500126mm"
            width="0.6999986mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="1.14996595mm"
            pcbY="-0.500126mm"
            width="0.6999986mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="1.14996595mm"
            pcbY="0mm"
            width="0.6999986mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="1.14996595mm"
            pcbY="0.499872mm"
            width="0.6999986mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            points={[
              { x: "-0.62000765mm", y: "1.4800072mm" },
              { x: "-0.62000765mm", y: "0.8800084mm" },
              { x: "-1.49999065mm", y: "0.8800084mm" },
              { x: "-1.49999065mm", y: "1.1299952mm" },
              { x: "-0.88000205mm", y: "1.1299952mm" },
              { x: "-0.88000205mm", y: "1.4800072mm" },
              { x: "-0.62000765mm", y: "1.4800072mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin12"]}
            points={[
              { x: "0.61996955mm", y: "1.4748256mm" },
              { x: "0.61996955mm", y: "0.8748014mm" },
              { x: "1.50000335mm", y: "0.8748014mm" },
              { x: "1.50000335mm", y: "1.124712mm" },
              { x: "0.88001475mm", y: "1.124712mm" },
              { x: "0.88001475mm", y: "1.4748256mm" },
              { x: "0.61996955mm", y: "1.4748256mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin8"]}
            points={[
              { x: "0.62004575mm", y: "-1.4750796mm" },
              { x: "0.62004575mm", y: "-0.8751062mm" },
              { x: "1.50000335mm", y: "-0.8751062mm" },
              { x: "1.50000335mm", y: "-1.1251438mm" },
              { x: "0.88001475mm", y: "-1.1251438mm" },
              { x: "0.88001475mm", y: "-1.4750796mm" },
              { x: "0.62004575mm", y: "-1.4750796mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin5"]}
            points={[
              { x: "-0.62008385mm", y: "-1.4750034mm" },
              { x: "-0.62008385mm", y: "-0.8750046mm" },
              { x: "-1.49999065mm", y: "-0.8750046mm" },
              { x: "-1.49999065mm", y: "-1.1249914mm" },
              { x: "-0.88000205mm", y: "-1.1249914mm" },
              { x: "-0.88000205mm", y: "-1.4750034mm" },
              { x: "-0.62008385mm", y: "-1.4750034mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-0.25008205mm"
            pcbY="-1.147572mm"
            width="0.2500122mm"
            height="0.6999986mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="0.25004395mm"
            pcbY="-1.147572mm"
            width="0.2500122mm"
            height="0.6999986mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="-0.24982805mm"
            pcbY="1.147572mm"
            width="0.2500122mm"
            height="0.6999986mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="0.25004395mm"
            pcbY="1.147572mm"
            width="0.2500122mm"
            height="0.6999986mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="0.00010795mm"
            pcbY="0.00254mm"
            width="0.999998mm"
            height="0.999998mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: 1.3899959499999994, y: -1.41000480000001 },
              { x: 1.3899959499999994, y: -1.3562838 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.1111547499999972, y: -1.41000480000001 },
              { x: 1.3899959499999994, y: -1.41000480000001 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.3999908499999947, y: -1.41000480000001 },
              { x: -1.111142049999998, y: -1.41000480000001 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.3999908499999947, y: -1.3561313999999953 },
              { x: -1.3999908499999947, y: -1.41000480000001 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.4000035499999939, y: 1.3999971999999872 },
              { x: 1.4000035499999939, y: 1.3558519999999987 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.3999908499999947, y: 1.3999971999999872 },
              { x: -1.3999908499999947, y: 1.3611352000000068 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.111142049999998, y: 1.3999971999999872 },
              { x: -1.3999908499999947, y: 1.3999971999999872 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.4000035499999939, y: 1.3999971999999872 },
              { x: 1.1111547499999972, y: 1.3999971999999872 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.8317400500000076, y: 1.1498579999999947 },
              { x: -1.8327007372536173, y: 1.142560855842376 },
              { x: -1.8355173297657075, y: 1.135760999999988 },
              { x: -1.8399978814112359, y: 1.1299218314112238 },
              { x: -1.8458370500000143, y: 1.1254412797656812 },
              { x: -1.8526369058423882, y: 1.1226246872536052 },
              { x: -1.859934050000021, y: 1.1216639999999956 },
              { x: -1.8672311941576254, y: 1.1226246872536052 },
              { x: -1.8740310500000135, y: 1.1254412797656812 },
              { x: -1.8798702185887919, y: 1.1299218314112238 },
              { x: -1.884350770234306, y: 1.135760999999988 },
              { x: -1.8871673627463963, y: 1.142560855842376 },
              { x: -1.888128050000006, y: 1.1498579999999947 },
              { x: -1.8871673627463963, y: 1.1571551441575991 },
              { x: -1.884350770234306, y: 1.1639549999999872 },
              { x: -1.8798702185887919, y: 1.1697941685887656 },
              { x: -1.8740310500000135, y: 1.1742747202342798 },
              { x: -1.8672311941576254, y: 1.1770913127463842 },
              { x: -1.859934050000021, y: 1.1780519999999797 },
              { x: -1.8526369058423882, y: 1.1770913127463842 },
              { x: -1.8458370500000143, y: 1.1742747202342798 },
              { x: -1.8399978814112359, y: 1.1697941685887656 },
              { x: -1.8355173297657075, y: 1.1639549999999872 },
              { x: -1.8327007372536173, y: 1.1571551441575991 },
              { x: -1.8317400500000076, y: 1.1498579999999947 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.19750405mm"
            pcbY="2.507998mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -2.1366040500000025, y: 1.7579980000000006 },
              { x: 1.7415959500000042, y: 1.7579980000000006 },
              { x: 1.7415959500000042, y: -1.739202000000006 },
              { x: -2.1366040500000025, y: -1.739202000000006 },
              { x: -2.1366040500000025, y: 1.7579980000000006 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C33608934.obj?uuid=85f04e68b40e45bda806c782d7805dcb",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C33608934.step?uuid=85f04e68b40e45bda806c782d7805dcb",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: -0.000019049999991693767,
          y: -0.000012699999984988608,
          z: -0.02,
        },
      }}
      {...props}
    />
  );
};

export default LMQ66430MA3RXBRQ1;
