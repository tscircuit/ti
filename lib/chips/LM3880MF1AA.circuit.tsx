import type { ChipProps } from "@tscircuit/props";
import "tscircuit";

const pinLabels = {
  pin1: "VCC",
  pin2: "GND",
  pin3: "EN",
  pin4: "FLAG3",
  pin5: "FLAG2",
  pin6: "FLAG1",
} as const;

/** LM3880 sequence 1, 10 ms three-rail power sequencer in DBV (SOT-23-6). */
export const LM3880MF1AA = (props: ChipProps<typeof pinLabels>) => (
  <chip
    manufacturerPartNumber="LM3880MF-1AA/NOPB"
    supplierPartNumbers={{ jlcpcb: ["C486059"] }}
    pinLabels={pinLabels}
    pinAttributes={{
      VCC: { requiresPower: true },
      GND: { requiresGround: true },
      EN: { mustBeConnected: true },
      FLAG1: { mustBeConnected: true },
      FLAG2: { mustBeConnected: true },
      FLAG3: { mustBeConnected: true },
    }}
    footprint={
      <footprint>
        {/* TI DBV six-pin land pattern, 0.95 mm lead pitch. */}
        <smtpad
          portHints={["pin1"]}
          pcbX="-1.1mm"
          pcbY="-0.95mm"
          width="1mm"
          height="0.55mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin2"]}
          pcbX="-1.1mm"
          pcbY="0mm"
          width="1mm"
          height="0.55mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin3"]}
          pcbX="-1.1mm"
          pcbY="0.95mm"
          width="1mm"
          height="0.55mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin4"]}
          pcbX="1.1mm"
          pcbY="0.95mm"
          width="1mm"
          height="0.55mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin5"]}
          pcbX="1.1mm"
          pcbY="0mm"
          width="1mm"
          height="0.55mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin6"]}
          pcbX="1.1mm"
          pcbY="-0.95mm"
          width="1mm"
          height="0.55mm"
          shape="rect"
        />
        <silkscreenpath
          route={[
            { x: -0.8, y: -1.55 },
            { x: 0.8, y: -1.55 },
          ]}
          strokeWidth="0.15mm"
        />
        <silkscreenpath
          route={[
            { x: -0.8, y: 1.55 },
            { x: 0.8, y: 1.55 },
          ]}
          strokeWidth="0.15mm"
        />
        <silkscreentext
          text="1"
          pcbX="-1.75mm"
          pcbY="-1.25mm"
          fontSize="0.55mm"
        />
        <courtyardrect
          pcbX={0}
          pcbY={0}
          width="3.7mm"
          height="3.7mm"
          isFilled={false}
          hasStroke
          strokeWidth="0.05mm"
        />
      </footprint>
    }
    schWidth="2mm"
    schHeight="3.2mm"
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: [1, 3, 2],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: [6, 5, 4],
      },
    }}
    {...props}
  />
);

export default LM3880MF1AA;
