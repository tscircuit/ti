import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["MODE", "STBY", "1"],
  pin2: ["FB_B2", "2"],
  pin3: ["VLDO2", "3"],
  pin4: ["VSYS", "PVIN_LDO12", "4"],
  pin5: ["VLDO1", "5"],
  pin6: ["AGND", "6"],
  pin7: ["VDD1P8", "7"],
  pin8: ["FB_B1", "8"],
  pin9: ["GPO", "NWAKEUP", "9"],
  pin10: ["PGND", "10", "PGND_10"],
  pin11: ["LX_B1", "11"],
  pin12: ["PVIN_B1", "12"],
  pin13: ["SDA", "13"],
  pin14: ["SCL", "14"],
  pin15: ["NINT", "15"],
  pin16: ["GPIO", "VSEL", "16"],
  pin17: ["NRSTOUT", "17"],
  pin18: ["FB_B3", "18"],
  pin19: ["EN", "PB", "VSENSE", "19"],
  pin20: ["PVIN_B3", "20"],
  pin21: ["LX_B3", "21"],
  pin22: ["PGND", "22", "PGND_22"],
  pin23: ["LX_B2", "23"],
  pin24: ["PVIN_B2", "24"],
} as const;

const pinRoles = {
  pin1: "control",
  pin2: "input",
  pin3: "output",
  pin4: "power",
  pin5: "output",
  pin6: "ground",
  pin7: "power",
  pin8: "input",
  pin9: "output",
  pin10: "ground",
  pin11: "output",
  pin12: "power",
  pin13: "bidirectional",
  pin14: "control",
  pin15: "output",
  pin16: "output",
  pin17: "output",
  pin18: "input",
  pin19: "control",
  pin20: "power",
  pin21: "output",
  pin22: "ground",
  pin23: "output",
  pin24: "power",
} as const;

const pinAttributes = {
  pin4: { requiresPower: true },
  pin6: { requiresGround: true },
  pin7: { requiresPower: true },
  pin10: { requiresGround: true },
  pin12: { requiresPower: true },
  pin20: { requiresPower: true },
  pin22: { requiresGround: true },
  pin24: { requiresPower: true },
} as const;

export const TPS6521401VAFR = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing VAF0024A; official source https://www.ti.com/lit/gpn/TPS65214 pages 139
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="TPS6521401VAFR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin2"]}
            pcbX="-1.65mm"
            pcbY="1mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-1.65mm"
            pcbY="0.5mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-1.65mm"
            pcbY="0mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-1.65mm"
            pcbY="-0.5mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-1.65mm"
            pcbY="-1mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-1mm"
            pcbY="-1.65mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="-0.5mm"
            pcbY="-1.65mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="0.5mm"
            pcbY="-1.65mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="1mm"
            pcbY="-1.65mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="1.65mm"
            pcbY="-1mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="1.65mm"
            pcbY="-0.5mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="1.65mm"
            pcbY="0mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="1.65mm"
            pcbY="0.5mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="1.65mm"
            pcbY="1mm"
            width="0.6mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin20"]}
            pcbX="1mm"
            pcbY="1.65mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin21"]}
            pcbX="0.5mm"
            pcbY="1.65mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin23"]}
            pcbX="-0.5mm"
            pcbY="1.65mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin24"]}
            pcbX="-1mm"
            pcbY="1.65mm"
            width="0.25mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            points={[
              { x: "-1.9mm", y: "1.375mm" },
              { x: "-1.95mm", y: "1.425mm" },
              { x: "-1.95mm", y: "1.55mm" },
              { x: "-1.9mm", y: "1.6mm" },
              { x: "-1.6mm", y: "1.6mm" },
              { x: "-1.6mm", y: "1.9mm" },
              { x: "-1.55mm", y: "1.95mm" },
              { x: "-1.425mm", y: "1.95mm" },
              { x: "-1.375mm", y: "1.9mm" },
              { x: "-1.375mm", y: "1.425mm" },
              { x: "-1.425mm", y: "1.375mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin7"]}
            points={[
              { x: "-1.9mm", y: "-1.375mm" },
              { x: "-1.95mm", y: "-1.425mm" },
              { x: "-1.95mm", y: "-1.55mm" },
              { x: "-1.9mm", y: "-1.6mm" },
              { x: "-1.6mm", y: "-1.6mm" },
              { x: "-1.6mm", y: "-1.9mm" },
              { x: "-1.55mm", y: "-1.95mm" },
              { x: "-1.425mm", y: "-1.95mm" },
              { x: "-1.375mm", y: "-1.9mm" },
              { x: "-1.375mm", y: "-1.425mm" },
              { x: "-1.425mm", y: "-1.375mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin13"]}
            points={[
              { x: "1.9mm", y: "-1.375mm" },
              { x: "1.95mm", y: "-1.425mm" },
              { x: "1.95mm", y: "-1.55mm" },
              { x: "1.9mm", y: "-1.6mm" },
              { x: "1.6mm", y: "-1.6mm" },
              { x: "1.6mm", y: "-1.9mm" },
              { x: "1.55mm", y: "-1.95mm" },
              { x: "1.425mm", y: "-1.95mm" },
              { x: "1.375mm", y: "-1.9mm" },
              { x: "1.375mm", y: "-1.425mm" },
              { x: "1.425mm", y: "-1.375mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin19"]}
            points={[
              { x: "1.9mm", y: "1.375mm" },
              { x: "1.95mm", y: "1.425mm" },
              { x: "1.95mm", y: "1.55mm" },
              { x: "1.9mm", y: "1.6mm" },
              { x: "1.6mm", y: "1.6mm" },
              { x: "1.6mm", y: "1.9mm" },
              { x: "1.55mm", y: "1.95mm" },
              { x: "1.425mm", y: "1.95mm" },
              { x: "1.375mm", y: "1.9mm" },
              { x: "1.375mm", y: "1.425mm" },
              { x: "1.425mm", y: "1.375mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin22"]}
            points={[
              { x: "-0.5mm", y: "0mm" },
              { x: "-0.5mm", y: "0.2865mm" },
              { x: "-0.45mm", y: "0.3365mm" },
              { x: "-0.1mm", y: "0.3365mm" },
              { x: "-0.1mm", y: "1.357mm" },
              { x: "-0.125mm", y: "1.4mm" },
              { x: "-0.125mm", y: "1.9mm" },
              { x: "-0.075mm", y: "1.95mm" },
              { x: "0.075mm", y: "1.95mm" },
              { x: "0.125mm", y: "1.9mm" },
              { x: "0.125mm", y: "1.4mm" },
              { x: "0.1mm", y: "1.357mm" },
              { x: "0.1mm", y: "0.3365mm" },
              { x: "0.45mm", y: "0.3365mm" },
              { x: "0.5mm", y: "0.2865mm" },
              { x: "0.5mm", y: "0mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin10"]}
            points={[
              { x: "-0.5mm", y: "0mm" },
              { x: "-0.5mm", y: "-0.2865mm" },
              { x: "-0.45mm", y: "-0.3365mm" },
              { x: "-0.1mm", y: "-0.3365mm" },
              { x: "-0.1mm", y: "-1.357mm" },
              { x: "-0.125mm", y: "-1.4mm" },
              { x: "-0.125mm", y: "-1.9mm" },
              { x: "-0.075mm", y: "-1.95mm" },
              { x: "0.075mm", y: "-1.95mm" },
              { x: "0.125mm", y: "-1.9mm" },
              { x: "0.125mm", y: "-1.4mm" },
              { x: "0.1mm", y: "-1.357mm" },
              { x: "0.1mm", y: "-0.3365mm" },
              { x: "0.45mm", y: "-0.3365mm" },
              { x: "0.5mm", y: "-0.2865mm" },
              { x: "0.5mm", y: "0mm" },
            ]}
            shape="polygon"
          />
        </footprint>
      }
      {...props}
    />
  );
};

export default TPS6521401VAFR;
