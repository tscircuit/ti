import { ChipProps } from "tscircuit";

export const TPS6293_PIN_LABELS = {
  pin1: "VIN",
  pin2: "EN",
  pin3: "SS",
  pin4: "RT",
  pin5: "GND",
  pin6: "FB",
  pin7: "SW",
  pin8: "BST",
};

export const TPS6293 = (props: ChipProps<any>) => (
  <chip
    {...props}
    pinLabels={TPS6293_PIN_LABELS}
    supplierPartNumbers={{
      jlcpcb: ["C3200405"],
    }}
    schPinStyle={{
      VIN: {
        marginBottom: 0.2,
      },
      EN: {
        marginBottom: 0.2,
      },
      SS: {
        marginBottom: 0.2,
      },
      BST: {
        marginBottom: 0.2,
      },
      SW: {
        marginBottom: 0.2,
      },
      FB: {
        marginBottom: 0.2,
      },
    }}
    footprint={
      <footprint>
        <smtpad
          portHints={["pin6"]}
          pcbX="-0.640207mm"
          pcbY="-0.750062mm"
          width="0.6800088mm"
          height="0.2800096mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin3"]}
          pcbX="-0.640207mm"
          pcbY="-0.249936mm"
          width="0.6800088mm"
          height="0.2800096mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin8"]}
          pcbX="-0.640207mm"
          pcbY="0.249936mm"
          width="0.6800088mm"
          height="0.2800096mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin7"]}
          pcbX="-0.640207mm"
          pcbY="0.750062mm"
          width="0.6800088mm"
          height="0.2800096mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin5"]}
          pcbX="0.640207mm"
          pcbY="0.750062mm"
          width="0.6800088mm"
          height="0.2800096mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin1"]}
          pcbX="0.640207mm"
          pcbY="0.249936mm"
          width="0.6800088mm"
          height="0.2800096mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin2"]}
          pcbX="0.640207mm"
          pcbY="-0.249936mm"
          width="0.6800088mm"
          height="0.2800096mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin4"]}
          pcbX="0.640207mm"
          pcbY="-0.750062mm"
          width="0.6800088mm"
          height="0.2800096mm"
          shape="rect"
        />
        <silkscreenpath
          route={[
            { x: 0.5080000000000382, y: 1.1429491999999755 },
            { x: -0.5080000000000382, y: 1.1429491999999755 },
          ]}
        />
        <silkscreenpath
          route={[
            { x: -0.5080000000000382, y: -1.1430508000000827 },
            { x: 0.5080000000000382, y: -1.1430508000000827 },
          ]}
        />
        <silkscreenpath
          route={[
            { x: 0.9251950000000306, y: -1.1998960000000807 },
            { x: 0.922641822163996, y: -1.2192893110495788 },
            { x: 0.9151562835056666, y: -1.2373609999999644 },
            { x: 0.9032485111142705, y: -1.2528795111143154 },
            { x: 0.8877300000000332, y: -1.2647872835055978 },
            { x: 0.8696583110494203, y: -1.2722728221639272 },
            { x: 0.8502649999999221, y: -1.2748260000000755 },
            { x: 0.830871688950424, y: -1.2722728221639272 },
            { x: 0.8128000000000384, y: -1.2647872835055978 },
            { x: 0.7972814888858011, y: -1.2528795111143154 },
            { x: 0.785373716494405, y: -1.2373609999999644 },
            { x: 0.7778881778360756, y: -1.2192893110495788 },
            { x: 0.775335000000041, y: -1.1998960000000807 },
            { x: 0.7778881778360756, y: -1.1805026889505825 },
            { x: 0.785373716494405, y: -1.1624309999999696 },
            { x: 0.7972814888858011, y: -1.1469124888857323 },
            { x: 0.8128000000000384, y: -1.1350047164945636 },
            { x: 0.830871688950424, y: -1.1275191778362341 },
            { x: 0.8502649999999221, y: -1.1249659999999722 },
            { x: 0.8696583110494203, y: -1.1275191778362341 },
            { x: 0.8877300000000332, y: -1.1350047164945636 },
            { x: 0.9032485111142705, y: -1.1469124888857323 },
            { x: 0.9151562835056666, y: -1.1624309999999696 },
            { x: 0.922641822163996, y: -1.1805026889505825 },
            { x: 0.9251950000000306, y: -1.1998960000000807 },
          ]}
        />
        <silkscreentext
          text="{NAME}"
          pcbX="-0.011811mm"
          pcbY="2.131062mm"
          anchorAlignment="center"
          fontSize="1mm"
        />
        <courtyardoutline
          outline={[
            { x: -1.2397110000000566, y: 1.381061999999929 },
            { x: 1.2160889999998972, y: 1.381061999999929 },
            { x: 1.2160889999998972, y: -1.5319379999999683 },
            { x: -1.2397110000000566, y: -1.5319379999999683 },
            { x: -1.2397110000000566, y: 1.381061999999929 },
          ]}
        />
      </footprint>
    }
    cadModel={{
      objUrl:
        "https://modelcdn.tscircuit.com/easyeda_models/assets/C3200405.obj?uuid=36a9e7915d7846da9e342bb5ad15102b",
      stepUrl:
        "https://modelcdn.tscircuit.com/easyeda_models/assets/C3200405.step?uuid=36a9e7915d7846da9e342bb5ad15102b",
      pcbRotationOffset: 0,
      modelOriginPosition: { x: 0, y: -0.0022879000000165517, z: -0.135 },
    }}
  />
);
