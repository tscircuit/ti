import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["PGOOD"],
  pin2: ["EN"],
  pin3: ["VIN"],
  pin4: ["VOUT"],
  pin5: ["SW2"],
  pin6: ["SW1"],
  pin7: ["BOOT"],
  pin8: ["VCC"],
  pin9: ["FB"],
  pin10: ["GND"],
  pin11: ["RT"],
} as const;

const pinAttributes = {
  pin3: { requiresPower: true },
  pin8: { requiresPower: true },
  pin10: { requiresGround: true },
} as const;

export const TLVM23625RDNR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C7588165"],
      }}
      manufacturerPartNumber="TLVM23625RDNR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-1.480185mm"
            pcbY="1.6749268mm"
            width="1.2999974mm"
            height="0.419989mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-1.499997mm"
            pcbY="0.8750808mm"
            width="1.2999974mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-1.499997mm"
            pcbY="0.3749548mm"
            width="1.2999974mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="1.499997mm"
            pcbY="0.3749548mm"
            width="1.2999974mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="1.499997mm"
            pcbY="0.8750808mm"
            width="1.2999974mm"
            height="0.2999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="1.459865mm"
            pcbY="1.6749268mm"
            width="1.2999974mm"
            height="0.419989mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="0.499999mm"
            pcbY="1.8499328mm"
            width="0.2999994mm"
            height="0.9500108mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="-0.000127mm"
            pcbY="1.4750288mm"
            width="0.3299968mm"
            height="1.6999966mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="-0.499999mm"
            pcbY="1.8499328mm"
            width="0.2999994mm"
            height="0.9500108mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-1.2599924mm"
            pcbY="-1.2750292mm"
            width="1.6999966mm"
            height="2.0999958mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="1.2599924mm"
            pcbY="-1.2750292mm"
            width="1.6999966mm"
            height="2.0999958mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: 1.9998689999999897, y: -2.556103599999915 },
              { x: 1.9998689999999897, y: -2.71249140000009 },
              { x: -2.000122999999917, y: -2.71249140000009 },
              { x: -2.000122999999917, y: -2.556103599999915 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 0.8810244000000012, y: 2.1874987999999576 },
              { x: 1.9998689999999897, y: 2.1874987999999576 },
              { x: 1.9998689999999897, y: 2.1161756000000196 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.000122999999917, y: 2.1161756000000196 },
              { x: -2.000122999999917, y: 2.1874987999999576 },
              { x: -0.8812530000000152, y: 2.1874987999999576 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.279527mm"
            pcbY="3.3157688mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -2.967926999999918, y: 2.565768799999887 },
              { x: 2.408873000000085, y: 2.565768799999887 },
              { x: 2.408873000000085, y: -2.963431200000173 },
              { x: -2.967926999999918, y: -2.963431200000173 },
              { x: -2.967926999999918, y: 2.565768799999887 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C7588165.obj?uuid=fe15034557584e3a96568248003fea5b",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C7588165.step?uuid=fe15034557584e3a96568248003fea5b",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: 0.000012699999956566899,
          y: 0.26304710000011977,
          z: -0.02,
        },
      }}
      {...props}
    />
  );
};

export default TLVM23625RDNR;
