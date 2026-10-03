import type { ChipProps } from "@tscircuit/props";
import "tscircuit";

/** TI MSPM0C1104 DGS (20-pin VSSOP) package pin map. */
export const MSPM0C1104SDGS20R_PIN_LABELS = {
  pin1: ["PA26", "A1"],
  pin2: ["PA27", "A0"],
  pin3: ["PA28", "A5"],
  pin4: "PA0",
  pin5: ["PA1", "NRST"],
  pin6: "VDD",
  pin7: "VSS",
  pin8: "PA2",
  pin9: "PA4",
  pin10: "PA6",
  pin11: "PA11",
  pin12: ["PA16", "A8"],
  pin13: ["PA17", "A9"],
  pin14: ["PA18", "A7"],
  pin15: ["PA19", "SWDIO"],
  pin16: ["PA20", "A6", "SWCLK"],
  pin17: ["PA22", "A4"],
  pin18: "PA23",
  pin19: ["PA24", "A3"],
  pin20: ["PA25", "A2"],
} as const;

export const MSPM0C1104SDGS20R = (
  props: ChipProps<typeof MSPM0C1104SDGS20R_PIN_LABELS>,
) => {
  return (
    <chip
      pinLabels={MSPM0C1104SDGS20R_PIN_LABELS}
      supplierPartNumbers={{
        jlcpcb: ["C41936040"],
      }}
      manufacturerPartNumber="MSPM0C1104SDGS20R"
      datasheetUrl="https://www.ti.com/lit/ds/symlink/mspm0c1104.pdf"
      pinAttributes={{
        pin6: {
          requiresPower: true,
          mustBeConnected: true,
          shouldHaveDecouplingCapacitor: true,
          recommendedDecouplingCapacitorCapacitance: "0.1uF",
        },
        pin7: { requiresGround: true, mustBeConnected: true },
      }}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: Array.from({ length: 10 }, (_, index) => index + 1),
        },
        rightSide: {
          direction: "bottom-to-top",
          pins: Array.from({ length: 10 }, (_, index) => index + 11),
        },
      }}
      schWidth="6mm"
      schHeight="8mm"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin11"]}
            pcbX="2.249932mm"
            pcbY="2.199894mm"
            width="0.2999994mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="1.75006mm"
            pcbY="2.199894mm"
            width="0.2999994mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="1.249934mm"
            pcbY="2.199894mm"
            width="0.2999994mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="0.750062mm"
            pcbY="2.199894mm"
            width="0.2999994mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="0.249936mm"
            pcbY="2.199894mm"
            width="0.2999994mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="-0.249936mm"
            pcbY="2.199894mm"
            width="0.2999994mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="-0.750062mm"
            pcbY="2.199894mm"
            width="0.2999994mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="-1.249934mm"
            pcbY="2.199894mm"
            width="0.2999994mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin19"]}
            pcbX="-1.75006mm"
            pcbY="2.199894mm"
            width="0.2999994mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin20"]}
            pcbX="-2.249932mm"
            pcbY="2.199894mm"
            width="0.2999994mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="2.249932mm"
            pcbY="-2.199894mm"
            width="0.2999994mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="1.75006mm"
            pcbY="-2.199894mm"
            width="0.2999994mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="1.249934mm"
            pcbY="-2.199894mm"
            width="0.2999994mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="0.750062mm"
            pcbY="-2.199894mm"
            width="0.2999994mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0.249936mm"
            pcbY="-2.199894mm"
            width="0.2999994mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-0.249936mm"
            pcbY="-2.199894mm"
            width="0.2999994mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-0.750062mm"
            pcbY="-2.199894mm"
            width="0.2999994mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-1.249934mm"
            pcbY="-2.199894mm"
            width="0.2999994mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-1.75006mm"
            pcbY="-2.199894mm"
            width="0.2999994mm"
            height="0.999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="-2.249932mm"
            pcbY="-2.199894mm"
            width="0.2999994mm"
            height="0.999998mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: 2.5999440000000504, y: -1.450009800000089 },
              { x: 2.5999440000000504, y: 1.459991999999943 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.6000455999999303, y: -0.6114542000000256 },
              { x: -2.6000455999999303, y: -1.450009800000089 },
              { x: 2.5999440000000504, y: -1.450009800000089 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.6000455999999303, y: 0.5823457999999846 },
              { x: -2.6000455999999303, y: 1.459991999999943 },
              { x: 2.5999440000000504, y: 1.459991999999943 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.6000455999999303, y: -0.6114542000000256 },
              { x: -2.6000455999999303, y: 0.5823457999999846 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.003048mm"
            pcbY="3.711196mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -2.856547999999975, y: 2.9611960000000863 },
              { x: 2.8504520000000184, y: 2.9611960000000863 },
              { x: 2.8504520000000184, y: -2.9490039999999453 },
              { x: -2.856547999999975, y: -2.9490039999999453 },
              { x: -2.856547999999975, y: 2.9611960000000863 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C41936040.obj?uuid=bab62e2d64044af5b779fe29bc643ea7",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C41936040.step?uuid=bab62e2d64044af5b779fe29bc643ea7",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: 0.0007153000000537091,
          y: -0.000012699999956566899,
          z: -0.6,
        },
      }}
      {...props}
    />
  );
};
