import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["IN", "1", "IN_1"],
  pin2: ["IN", "2", "IN_2"],
  pin3: ["EN", "3"],
  pin4: ["NR", "SS", "4"],
  pin5: ["BIAS", "5"],
  pin6: ["GND", "6", "GND_6"],
  pin7: ["GND", "7", "GND_7"],
  pin8: ["PG", "8"],
  pin9: ["FB", "9"],
  pin10: ["OUT", "10", "OUT_10"],
  pin11: ["OUT", "11", "OUT_11"],
  pin12: ["GND", "12", "GND_12"],
} as const;

const pinRoles = {
  pin1: "power",
  pin2: "power",
  pin3: "control",
  pin4: "control",
  pin5: "input",
  pin6: "ground",
  pin7: "ground",
  pin8: "output",
  pin9: "input",
  pin10: "output",
  pin11: "output",
  pin12: "ground",
} as const;

const pinAttributes = {
  pin1: { requiresPower: true },
  pin2: { requiresPower: true },
  pin6: { requiresGround: true },
  pin7: { requiresGround: true },
  pin12: { requiresGround: true },
} as const;

export const TPS7A5301BRPSR = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing RPS0012A; official source https://www.ti.com/lit/gpn/TPS7A53B pages 41
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="TPS7A5301BRPSR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.775mm"
            pcbY="0.5mm"
            width="1.05mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-1mm"
            pcbY="0mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-1mm"
            pcbY="-0.5mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0mm"
            pcbY="-1.05mm"
            width="0.25mm"
            height="0.8mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="1mm"
            pcbY="-0.5mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="1mm"
            pcbY="0mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="0.775mm"
            pcbY="0.5mm"
            width="1.05mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="0mm"
            pcbY="1.15mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            points={[
              { x: "-0.95mm", y: "1.45mm" },
              { x: "-0.95mm", y: "1.1mm" },
              { x: "-1.3mm", y: "1.1mm" },
              { x: "-1.3mm", y: "0.875mm" },
              { x: "-0.55mm", y: "0.875mm" },
              { x: "-0.55mm", y: "1.45mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin5"]}
            points={[
              { x: "-0.95mm", y: "-1.45mm" },
              { x: "-0.95mm", y: "-1.1mm" },
              { x: "-1.3mm", y: "-1.1mm" },
              { x: "-1.3mm", y: "-0.875mm" },
              { x: "-0.55mm", y: "-0.875mm" },
              { x: "-0.55mm", y: "-1.45mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin7"]}
            points={[
              { x: "0.95mm", y: "-1.45mm" },
              { x: "0.95mm", y: "-1.1mm" },
              { x: "1.3mm", y: "-1.1mm" },
              { x: "1.3mm", y: "-0.875mm" },
              { x: "0.55mm", y: "-0.875mm" },
              { x: "0.55mm", y: "-1.45mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin11"]}
            points={[
              { x: "0.95mm", y: "1.45mm" },
              { x: "0.95mm", y: "1.1mm" },
              { x: "1.3mm", y: "1.1mm" },
              { x: "1.3mm", y: "0.875mm" },
              { x: "0.55mm", y: "0.875mm" },
              { x: "0.55mm", y: "1.45mm" },
            ]}
            shape="polygon"
          />
        </footprint>
      }
      {...props}
    />
  );
};

export default TPS7A5301BRPSR;
