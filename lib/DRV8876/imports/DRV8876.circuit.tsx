import { ChipProps } from "tscircuit";

export const DRV8876_PIN_LABELS = {
  pin1: "EN",
  pin2: "PH",
  pin3: "nSLEEP",
  pin4: "nFAULT",
  pin5: "VREF",
  pin6: "IPROPI",
  pin7: "IMODE",
  pin8: "OUT1",
  pin9: "PGND",
  pin10: "OUT2",
  pin11: "VM",
  pin12: "VCP",
  pin13: "CPH",
  pin14: "CPL",
  pin15: "GND",
  pin16: "PMODE",
};

export const DRV8876 = (props: ChipProps<any>) => (
  <chip
    {...props}
    pinLabels={DRV8876_PIN_LABELS}
    supplierPartNumbers={{
      jlcpcb: ["C575551"],
    }}
    schPinStyle={{
      GND: {
        marginTop: 0.6,
        marginBottom: 0.6,
      },
      CPH: {
        marginTop: 0.6,
        marginBottom: 0.6,
      },
      VM: {
        marginTop: 0.6,
        marginBottom: 0.6,
      },
      OUT2: {
        marginBottom: 0.6,
      },
      IMODE: {
        marginTop: 0.6,
        marginBottom: 0.6,
      },
      nSLEEP: {
        marginTop: 0.6,
        marginBottom: 0.6,
      },
      VREF: {
        marginTop: 0.6,
        marginBottom: 0.6,
      },
      PH: {
        marginTop: 0.6,
      },
    }}
    footprint={
      <footprint>
        <smtpad
          portHints={["pin1"]}
          pcbX="-2.275078mm"
          pcbY="-2.873248mm"
          width="0.3430016mm"
          height="1.746504mm"
          radius="0.1715008mm"
          shape="pill"
        />
        <smtpad
          portHints={["pin2"]}
          pcbX="-1.625092mm"
          pcbY="-2.873248mm"
          width="0.3430016mm"
          height="1.746504mm"
          radius="0.1715008mm"
          shape="pill"
        />
        <smtpad
          portHints={["pin3"]}
          pcbX="-0.975106mm"
          pcbY="-2.873248mm"
          width="0.3430016mm"
          height="1.746504mm"
          radius="0.1715008mm"
          shape="pill"
        />
        <smtpad
          portHints={["pin4"]}
          pcbX="-0.324866mm"
          pcbY="-2.873248mm"
          width="0.3430016mm"
          height="1.746504mm"
          radius="0.1715008mm"
          shape="pill"
        />
        <smtpad
          portHints={["pin5"]}
          pcbX="0.32512mm"
          pcbY="-2.873248mm"
          width="0.3430016mm"
          height="1.746504mm"
          radius="0.1715008mm"
          shape="pill"
        />
        <smtpad
          portHints={["pin6"]}
          pcbX="0.975106mm"
          pcbY="-2.873248mm"
          width="0.3430016mm"
          height="1.746504mm"
          radius="0.1715008mm"
          shape="pill"
        />
        <smtpad
          portHints={["pin7"]}
          pcbX="1.625092mm"
          pcbY="-2.873248mm"
          width="0.3430016mm"
          height="1.746504mm"
          radius="0.1715008mm"
          shape="pill"
        />
        <smtpad
          portHints={["pin8"]}
          pcbX="2.275078mm"
          pcbY="-2.873248mm"
          width="0.3430016mm"
          height="1.746504mm"
          radius="0.1715008mm"
          shape="pill"
        />
        <smtpad
          portHints={["pin16"]}
          pcbX="-2.275078mm"
          pcbY="2.873248mm"
          width="0.3430016mm"
          height="1.746504mm"
          radius="0.1715008mm"
          shape="pill"
        />
        <smtpad
          portHints={["pin15"]}
          pcbX="-1.625092mm"
          pcbY="2.873248mm"
          width="0.3430016mm"
          height="1.746504mm"
          radius="0.1715008mm"
          shape="pill"
        />
        <smtpad
          portHints={["pin14"]}
          pcbX="-0.975106mm"
          pcbY="2.873248mm"
          width="0.3430016mm"
          height="1.746504mm"
          radius="0.1715008mm"
          shape="pill"
        />
        <smtpad
          portHints={["pin13"]}
          pcbX="-0.324866mm"
          pcbY="2.873248mm"
          width="0.3430016mm"
          height="1.746504mm"
          radius="0.1715008mm"
          shape="pill"
        />
        <smtpad
          portHints={["pin12"]}
          pcbX="0.32512mm"
          pcbY="2.873248mm"
          width="0.3430016mm"
          height="1.746504mm"
          radius="0.1715008mm"
          shape="pill"
        />
        <smtpad
          portHints={["pin11"]}
          pcbX="0.975106mm"
          pcbY="2.873248mm"
          width="0.3430016mm"
          height="1.746504mm"
          radius="0.1715008mm"
          shape="pill"
        />
        <smtpad
          portHints={["pin10"]}
          pcbX="1.625092mm"
          pcbY="2.873248mm"
          width="0.3430016mm"
          height="1.746504mm"
          radius="0.1715008mm"
          shape="pill"
        />
        <smtpad
          portHints={["pin9"]}
          pcbX="2.275078mm"
          pcbY="2.873248mm"
          width="0.3430016mm"
          height="1.746504mm"
          radius="0.1715008mm"
          shape="pill"
        />
        {/* Thermal pad tied to GND (pin15) */}
        <smtpad
          portHints={["pin15"]}
          pcbX="0mm"
          pcbY="0mm"
          width="3.5500056mm"
          height="2.45999mm"
          shape="rect"
        />
        <via
          pcbX="-0.499872mm"
          pcbY="0.499872mm"
          outerDiameter="0.6096mm"
          holeDiameter="0.3048mm"
          layers={["top", "bottom"]}
        />
        <via
          pcbX="0.500126mm"
          pcbY="0.499872mm"
          outerDiameter="0.6096mm"
          holeDiameter="0.3048mm"
          layers={["top", "bottom"]}
        />
        <via
          pcbX="-0.499872mm"
          pcbY="-0.500126mm"
          outerDiameter="0.6096mm"
          holeDiameter="0.3048mm"
          layers={["top", "bottom"]}
        />
        <via
          pcbX="0.500126mm"
          pcbY="-0.500126mm"
          outerDiameter="0.6096mm"
          holeDiameter="0.3048mm"
          layers={["top", "bottom"]}
        />
        <silkscreenpath
          route={[
            { x: -2.5761949999999842, y: -1.7713960000000952 },
            { x: -2.5761949999999842, y: 1.7713959999999815 },
            { x: 2.5761949999999842, y: 1.7713959999999815 },
            { x: 2.5761949999999842, y: -1.7713960000000952 },
            { x: -2.5761949999999842, y: -1.7713960000000952 },
          ]}
        />
        <silkscreenpath
          route={[
            { x: -2.124963999999977, y: -1.019047999999998 },
            { x: -2.130079010512418, y: -1.057900362136479 },
            { x: -2.145075462536397, y: -1.094105000000127 },
            { x: -2.1689313726490127, y: -1.1251946273511066 },
            { x: -2.2000209999998788, y: -1.1490505374637223 },
            { x: -2.236225637863413, y: -1.1640469894875878 },
            { x: -2.2750780000000077, y: -1.1691619999999148 },
            { x: -2.313930362136489, y: -1.1640469894875878 },
            { x: -2.350135000000023, y: -1.1490505374637223 },
            { x: -2.3812246273511164, y: -1.1251946273511066 },
            { x: -2.405080537463732, y: -1.094105000000127 },
            { x: -2.420076989487484, y: -1.057900362136479 },
            { x: -2.4251919999999245, y: -1.019047999999998 },
            { x: -2.420076989487484, y: -0.9801956378634031 },
            { x: -2.405080537463732, y: -0.943990999999869 },
            { x: -2.3812246273511164, y: -0.912901372649003 },
            { x: -2.350135000000023, y: -0.8890454625363873 },
            { x: -2.313930362136489, y: -0.8740490105124081 },
            { x: -2.2750780000000077, y: -0.8689340000000811 },
            { x: -2.236225637863413, y: -0.8740490105124081 },
            { x: -2.2000209999998788, y: -0.8890454625363873 },
            { x: -2.1689313726490127, y: -0.912901372649003 },
            { x: -2.145075462536397, y: -0.943990999999869 },
            { x: -2.130079010512418, y: -0.9801956378634031 },
            { x: -2.124963999999977, y: -1.019047999999998 },
          ]}
        />
        <silkscreenpath
          route={[
            { x: -2.7487879999999905, y: -2.8732479999999896 },
            { x: -2.753903010512545, y: -2.9121003621364707 },
            { x: -2.7688994625364103, y: -2.948304999999891 },
            { x: -2.792755372649026, y: -2.9793946273509846 },
            { x: -2.8238450000000057, y: -3.0032505374636003 },
            { x: -2.860049637863426, y: -3.018246989487352 },
            { x: -2.8989020000001346, y: -3.0233619999999064 },
            { x: -2.937754362136502, y: -3.018246989487352 },
            { x: -2.973959000000036, y: -3.0032505374636003 },
            { x: -3.0050486273511297, y: -2.9793946273509846 },
            { x: -3.0289045374637453, y: -2.948304999999891 },
            { x: -3.043900989487497, y: -2.9121003621364707 },
            { x: -3.0490159999999378, y: -2.8732479999999896 },
            { x: -3.043900989487497, y: -2.834395637863281 },
            { x: -3.0289045374637453, y: -2.7981909999998607 },
            { x: -3.0050486273511297, y: -2.767101372648881 },
            { x: -2.973959000000036, y: -2.7432454625362652 },
            { x: -2.937754362136502, y: -2.7282490105123998 },
            { x: -2.8989020000001346, y: -2.7231339999998454 },
            { x: -2.860049637863426, y: -2.7282490105123998 },
            { x: -2.8238450000000057, y: -2.7432454625362652 },
            { x: -2.792755372649026, y: -2.767101372648881 },
            { x: -2.7688994625364103, y: -2.7981909999998607 },
            { x: -2.753903010512545, y: -2.834395637863281 },
            { x: -2.7487879999999905, y: -2.8732479999999896 },
          ]}
        />
        <silkscreentext
          text="{NAME}"
          pcbX="-0.2413mm"
          pcbY="4.5814mm"
          anchorAlignment="center"
          fontSize="1mm"
        />
        <courtyardoutline
          outline={[
            { x: -3.298000000000002, y: 3.8314000000000306 },
            { x: 2.815399999999954, y: 3.8314000000000306 },
            { x: 2.815399999999954, y: -3.983799999999974 },
            { x: -3.298000000000002, y: -3.983799999999974 },
            { x: -3.298000000000002, y: 3.8314000000000306 },
          ]}
        />
      </footprint>
    }
    cadModel={{
      objUrl:
        "https://modelcdn.tscircuit.com/easyeda_models/assets/C575551.obj?uuid=89f85af05c9045c798a6d7a53851085c",
      stepUrl:
        "https://modelcdn.tscircuit.com/easyeda_models/assets/C575551.step?uuid=89f85af05c9045c798a6d7a53851085c",
      pcbRotationOffset: 0,
      modelOriginPosition: { x: 0, y: 0, z: 0 },
    }}
  />
);
