import { ChipProps } from "tscircuit";

export const TPSM82823_PIN_LABELS = {
  pin1: "VIN",
  pin2: "EN",
  pin3: "GND",
  pin4: "PG",
  pin5: "FB",
  pin6: "VOUT",
};

export const TPSM82823 = (props: ChipProps<any>) => (
  <chip
    {...props}
    pinLabels={TPSM82823_PIN_LABELS}
    supplierPartNumbers={{
      jlcpcb: ["C5196953"],
    }}
    schPinStyle={{
      GND: {
        marginTop: 1.3,
      },
      VOUT: {
        marginBottom: 1.3,
      },
      EN: {
        marginTop: 0.3,
      },
      PG: {
        marginTop: 0.3,
      },
    }}
    footprint={
      <footprint>
        {/* Physical package is 10-pin (VIN x2, GND x2, VOUT x3); pads share
            the chip's logical 6 pins so the schematic symbol stays 6-pin. */}
        <smtpad
          portHints={["pin1"]}
          pcbX="-0.999998mm"
          pcbY="-0.857504mm"
          width="0.2500122mm"
          height="1.0649966mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin1"]}
          pcbX="-0.499872mm"
          pcbY="-0.857504mm"
          width="0.2500122mm"
          height="1.0649966mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin2"]}
          pcbX="0mm"
          pcbY="-0.857504mm"
          width="0.2500122mm"
          height="1.0649966mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin4"]}
          pcbX="0.500126mm"
          pcbY="-0.857504mm"
          width="0.2500122mm"
          height="1.0649966mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin6"]}
          pcbX="0.999998mm"
          pcbY="-0.857504mm"
          width="0.2500122mm"
          height="1.0649966mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin3"]}
          pcbX="-0.999998mm"
          pcbY="0.857504mm"
          width="0.2500122mm"
          height="1.0649966mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin3"]}
          pcbX="-0.499872mm"
          pcbY="0.857504mm"
          width="0.2500122mm"
          height="1.0649966mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin5"]}
          pcbX="0mm"
          pcbY="0.857504mm"
          width="0.2500122mm"
          height="1.0649966mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin6"]}
          pcbX="0.500126mm"
          pcbY="0.857504mm"
          width="0.2500122mm"
          height="1.0649966mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin6"]}
          pcbX="0.999998mm"
          pcbY="0.857504mm"
          width="0.2500122mm"
          height="1.0649966mm"
          shape="rect"
        />
        <silkscreenpath
          route={[
            { x: -1.2399264000000016, y: -1.1100562000000025 },
            { x: -1.3599667999999951, y: -1.1100562000000025 },
            { x: -1.3599667999999951, y: 1.0800079999999923 },
            { x: -1.2299442000000056, y: 1.0800079999999923 },
          ]}
        />
        <silkscreenpath
          route={[
            { x: 1.2400025999999968, y: 1.1100053999999915 },
            { x: 1.3599922000000078, y: 1.1100053999999915 },
            { x: 1.3599922000000078, y: -1.0800080000000207 },
            { x: 1.2299950000000024, y: -1.0800080000000207 },
          ]}
        />
        <silkscreenpath
          route={[
            { x: -1.3329919999999902, y: -1.2700000000000102 },
            { x: -1.3369818812965093, y: -1.3003061572672436 },
            { x: -1.3486796213692571, y: -1.3285470000000004 },
            { x: -1.3672880385637427, y: -1.3527979614362664 },
            { x: -1.3915389999999945, y: -1.3714063786307378 },
            { x: -1.4197798427327655, y: -1.3831041187034998 },
            { x: -1.4500859999999989, y: -1.3870940000000047 },
            { x: -1.4803921572672323, y: -1.3831041187034998 },
            { x: -1.5086330000000032, y: -1.3714063786307378 },
            { x: -1.532883961436255, y: -1.3527979614362664 },
            { x: -1.5514923786307406, y: -1.3285470000000004 },
            { x: -1.5631901187034885, y: -1.3003061572672436 },
            { x: -1.5671800000000076, y: -1.2700000000000102 },
            { x: -1.5631901187034885, y: -1.2396938427327768 },
            { x: -1.5514923786307406, y: -1.2114530000000059 },
            { x: -1.532883961436255, y: -1.1872020385637398 },
            { x: -1.5086330000000032, y: -1.1685936213692827 },
            { x: -1.4803921572672323, y: -1.1568958812965064 },
            { x: -1.4500859999999989, y: -1.1529060000000015 },
            { x: -1.4197798427327655, y: -1.1568958812965064 },
            { x: -1.3915389999999945, y: -1.1685936213692827 },
            { x: -1.3672880385637427, y: -1.1872020385637398 },
            { x: -1.3486796213692571, y: -1.2114530000000059 },
            { x: -1.3369818812965093, y: -1.2396938427327768 },
            { x: -1.3329919999999902, y: -1.2700000000000102 },
          ]}
        />
        <silkscreentext
          text="{NAME}"
          pcbX="-0.1143mm"
          pcbY="2.397mm"
          anchorAlignment="center"
          fontSize="1mm"
        />
        <courtyardoutline
          outline={[
            { x: -1.824799999999982, y: 1.6469999999999914 },
            { x: 1.5962000000000103, y: 1.6469999999999914 },
            { x: 1.5962000000000103, y: -1.6216000000000008 },
            { x: -1.824799999999982, y: -1.6216000000000008 },
            { x: -1.824799999999982, y: 1.6469999999999914 },
          ]}
        />
      </footprint>
    }
    cadModel={{
      objUrl:
        "https://modelcdn.tscircuit.com/easyeda_models/assets/C5196953.obj?uuid=f8dc55bb8e7e4af3a65abaa0221e33c1",
      stepUrl:
        "https://modelcdn.tscircuit.com/easyeda_models/assets/C5196953.step?uuid=f8dc55bb8e7e4af3a65abaa0221e33c1",
      pcbRotationOffset: 90,
      modelOriginPosition: { x: 0, y: 0.000012699999999199463, z: -0.01 },
    }}
  />
);
