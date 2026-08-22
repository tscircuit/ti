import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["PGND2"],
  pin2: ["VIN2"],
  pin3: ["NC"],
  pin4: ["BOOT"],
  pin5: ["VCC"],
  pin6: ["AGND"],
  pin7: ["FB"],
  pin8: ["PG"],
  pin9: ["EN"],
  pin10: ["VIN1"],
  pin11: ["PGND1"],
  pin12: ["SW"],
} as const;

const pinAttributes = {
  pin1: { requiresGround: true },
  pin2: { requiresPower: true },
  pin3: { doNotConnect: true },
  pin5: { requiresPower: true },
  pin6: { requiresGround: true },
  pin10: { requiresPower: true },
  pin11: { requiresGround: true },
} as const;

export const LMR33630CRNXR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2071783"],
      }}
      manufacturerPartNumber="LMR33630CRNXR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin12"]}
            pcbX="-0.7875143mm"
            pcbY="0mm"
            width="1.82499mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="-1.1250041mm"
            pcbY="0.899922mm"
            width="0.2500122mm"
            height="0.5999988mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="-0.4750181mm"
            pcbY="0.899922mm"
            width="0.2500122mm"
            height="0.5999988mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="0.1749679mm"
            pcbY="0.899922mm"
            width="0.2500122mm"
            height="0.5999988mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="0.6755003mm"
            pcbY="0.899922mm"
            width="0.2500122mm"
            height="0.5999988mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="1.4000099mm"
            pcbY="0.499872mm"
            width="0.5999988mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="1.4000099mm"
            pcbY="0mm"
            width="0.5999988mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="1.4000099mm"
            pcbY="-0.500126mm"
            width="0.5999988mm"
            height="0.2500122mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0.6750939mm"
            pcbY="-0.899922mm"
            width="0.2500122mm"
            height="0.5999988mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0.1749679mm"
            pcbY="-0.899922mm"
            width="0.2500122mm"
            height="0.5999988mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.4750181mm"
            pcbY="-0.899922mm"
            width="0.2500122mm"
            height="0.5999988mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="-1.1250041mm"
            pcbY="-0.899922mm"
            width="0.2500122mm"
            height="0.5999988mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: 1.0311003000000483, y: -0.999998000000005 },
              { x: 1.4999588999999105, y: -0.999998000000005 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.5000351000001046, y: -0.999998000000005 },
              { x: -1.4811882999999852, y: -0.999998000000005 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.0311003000000483, y: 0.999998000000005 },
              { x: 1.4999588999999105, y: 0.999998000000005 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.5000351000001046, y: 0.999998000000005 },
              { x: -1.4811882999999852, y: 0.999998000000005 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.4999588999999105, y: -0.8561324000000923 },
              { x: 1.4999588999999105, y: -0.999998000000005 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.5000351000001046, y: 0.35613340000008975 },
              { x: -1.5000351000001046, y: 0.999998000000005 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.5000351000001046, y: -0.999998000000005 },
              { x: -1.5000351000001046, y: -0.3561333999998624 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.4999588999999105, y: 0.999998000000005 },
              { x: 1.4999588999999105, y: 0.8561324000000923 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.0300081000000318, y: -1.5100299999999152 },
              { x: -1.0334181070082877, y: -1.5359315747575693 },
              { x: -1.0434157416908647, y: -1.5600680000000011 },
              { x: -1.0593196817659418, y: -1.5807944182339497 },
              { x: -1.0800461000000041, y: -1.5966983583090268 },
              { x: -1.1041825252423223, y: -1.6066959929916038 },
              { x: -1.1300840999999764, y: -1.6101059999998597 },
              { x: -1.1559856747576305, y: -1.6066959929916038 },
              { x: -1.1801221000000623, y: -1.5966983583090268 },
              { x: -1.2008485182338973, y: -1.5807944182339497 },
              { x: -1.2167524583089744, y: -1.5600680000000011 },
              { x: -1.2267500929915514, y: -1.5359315747575693 },
              { x: -1.230160099999921, y: -1.5100299999999152 },
              { x: -1.2267500929915514, y: -1.484128425242261 },
              { x: -1.2167524583089744, y: -1.459991999999943 },
              { x: -1.2008485182338973, y: -1.4392655817659943 },
              { x: -1.1801221000000623, y: -1.4233616416909172 },
              { x: -1.1559856747576305, y: -1.4133640070083402 },
              { x: -1.1300840999999764, y: -1.4099539999999706 },
              { x: -1.1041825252423223, y: -1.4133640070083402 },
              { x: -1.0800461000000041, y: -1.4233616416909172 },
              { x: -1.0593196817659418, y: -1.4392655817659943 },
              { x: -1.0434157416908647, y: -1.459991999999943 },
              { x: -1.0334181070082877, y: -1.484128425242261 },
              { x: -1.0300081000000318, y: -1.5100299999999152 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="0.0108839mm"
            pcbY="2.1938mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -1.9409160999999813, y: 1.4438000000000102 },
              { x: 1.9626839000000018, y: 1.4438000000000102 },
              { x: 1.9626839000000018, y: -1.8755999999998494 },
              { x: -1.9409160999999813, y: -1.8755999999998494 },
              { x: -1.9409160999999813, y: 1.4438000000000102 },
            ]}
          />
        </footprint>
      }
      {...props}
    />
  );
};

export default LMR33630CRNXR;
