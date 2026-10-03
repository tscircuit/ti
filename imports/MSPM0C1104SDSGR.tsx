import type { ChipProps } from "@tscircuit/props";
import "tscircuit";

/** TI MSPM0C1104 DSG (8-pin WSON) package pin map. */
export const MSPM0C1104SDSGR_PIN_LABELS = {
  pin1: ["PA27", "A0"],
  pin2: ["PA1", "NRST"],
  pin3: ["VSS_3", "VSS"],
  pin4: "VDD",
  pin5: "PA0",
  pin6: ["PA19", "SWDIO"],
  pin7: ["PA20", "A6", "SWCLK"],
  pin8: ["PA24", "A3"],
  pin9: ["VSS_EP", "VSS", "THERMAL_PAD"],
} as const;

export const MSPM0C1104SDSGR = (
  props: ChipProps<typeof MSPM0C1104SDSGR_PIN_LABELS>,
) => {
  return (
    <chip
      pinLabels={MSPM0C1104SDSGR_PIN_LABELS}
      supplierPartNumbers={{
        jlcpcb: ["C35105978"],
      }}
      manufacturerPartNumber="MSPM0C1104SDSGR"
      datasheetUrl="https://www.ti.com/lit/ds/symlink/mspm0c1104.pdf"
      pinAttributes={{
        pin3: { requiresGround: true, mustBeConnected: true },
        pin4: {
          requiresPower: true,
          mustBeConnected: true,
          shouldHaveDecouplingCapacitor: true,
          recommendedDecouplingCapacitorCapacitance: "0.1uF",
        },
        pin9: { requiresGround: true, mustBeConnected: true },
      }}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: [1, 2, 3, 4, 9],
        },
        rightSide: {
          direction: "bottom-to-top",
          pins: [5, 6, 7, 8],
        },
      }}
      schWidth="5mm"
      schHeight="5mm"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin9"]}
            pcbX="-0.012573mm"
            pcbY="0mm"
            width="1.5999968mm"
            height="0.8999982mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-0.749935mm"
            pcbY="0.94996mm"
            width="0.2500122mm"
            height="0.5210048mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-0.250063mm"
            pcbY="0.94996mm"
            width="0.2500122mm"
            height="0.5210048mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0.250063mm"
            pcbY="0.94996mm"
            width="0.2500122mm"
            height="0.5210048mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="0.749935mm"
            pcbY="0.94996mm"
            width="0.2500122mm"
            height="0.5210048mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0.749935mm"
            pcbY="-0.94996mm"
            width="0.2500122mm"
            height="0.5210048mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0.250063mm"
            pcbY="-0.94996mm"
            width="0.2500122mm"
            height="0.5210048mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.250063mm"
            pcbY="-0.94996mm"
            width="0.2500122mm"
            height="0.5210048mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.749935mm"
            pcbY="-0.94996mm"
            width="0.2500122mm"
            height="0.5210048mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: 1.0600944000000254, y: -1.0399522000000019 },
              { x: 1.0600944000000254, y: 1.0590529999999987 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.0626089999999948, y: 1.0500867999999954 },
              { x: -1.0626089999999948, y: -1.0500359999999986 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.0669269999999926, y: -1.3969999999999985 },
              { x: -1.069523452036762, y: -1.416722011236807 },
              { x: -1.0771358642316216, y: -1.4350999999999985 },
              { x: -1.0892454632735848, y: -1.4508815367264134 },
              { x: -1.1050269999999927, y: -1.4629911357683767 },
              { x: -1.123404988763184, y: -1.4706035479632291 },
              { x: -1.1431269999999927, y: -1.4731999999999985 },
              { x: -1.1628490112368013, y: -1.4706035479632291 },
              { x: -1.1812269999999785, y: -1.4629911357683767 },
              { x: -1.1970085367264147, y: -1.4508815367264134 },
              { x: -1.2091181357683638, y: -1.4350999999999985 },
              { x: -1.2167305479632091, y: -1.416722011236807 },
              { x: -1.2193269999999927, y: -1.3969999999999985 },
              { x: -1.2167305479632091, y: -1.3772779887631899 },
              { x: -1.2091181357683638, y: -1.3588999999999984 },
              { x: -1.1970085367264147, y: -1.3431184632735835 },
              { x: -1.1812269999999785, y: -1.3310088642316273 },
              { x: -1.1628490112368013, y: -1.323396452036775 },
              { x: -1.1431269999999927, y: -1.3207999999999984 },
              { x: -1.123404988763184, y: -1.323396452036775 },
              { x: -1.1050269999999927, y: -1.3310088642316273 },
              { x: -1.0892454632735848, y: -1.3431184632735835 },
              { x: -1.0771358642316216, y: -1.3588999999999984 },
              { x: -1.069523452036762, y: -1.3772779887631899 },
              { x: -1.0669269999999926, y: -1.3969999999999985 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.065151mm"
            pcbY="2.220216mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -1.4581509999999867, y: 1.4702160000000006 },
              { x: 1.3278490000000147, y: 1.4702160000000006 },
              { x: 1.3278490000000147, y: -1.7221839999999986 },
              { x: -1.4581509999999867, y: -1.7221839999999986 },
              { x: -1.4581509999999867, y: 1.4702160000000006 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C35105978.obj?uuid=bdbb82cfec2f421cabcde62c239dd780",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C35105978.step?uuid=bdbb82cfec2f421cabcde62c239dd780",
        pcbRotationOffset: 90,
        modelOriginPosition: {
          x: -0.000025399999998398926,
          y: 0.000025400000026820635,
          z: 0,
        },
      }}
      {...props}
    />
  );
};
