import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["SCL_I2C1", "SCK_SPI", "1"],
  pin2: ["SDA_I2C1", "SDI_SPI", "2"],
  pin3: ["VCCA", "3"],
  pin4: ["FB_B1", "4"],
  pin5: ["AGND", "5", "AGND_5"],
  pin6: ["FB_B2", "6"],
  pin7: ["VOUT_LDOVINT", "7"],
  pin8: ["GPIO3", "8"],
  pin9: ["VMON1", "9"],
  pin10: ["GPIO4", "10"],
  pin11: ["GPIO5", "11"],
  pin12: ["PVIN_B3", "12"],
  pin13: ["SW_B3", "13"],
  pin14: ["PGND_B34", "14"],
  pin15: ["SW_B4", "15"],
  pin16: ["PVIN_B4", "16"],
  pin17: ["EN", "PB", "VSENSE", "17"],
  pin18: ["VIO", "18"],
  pin19: ["VOUT_LDO1", "19"],
  pin20: ["PVIN_LDO12", "20"],
  pin21: ["VOUT_LDO2", "21"],
  pin22: ["FB_B4", "22"],
  pin23: ["AGND", "23", "AGND_23"],
  pin24: ["FB_B3", "24"],
  pin25: ["VOUT_LDO3", "25"],
  pin26: ["PVIN_LDO3", "26"],
  pin27: ["N_INT", "EN_DRV", "27"],
  pin28: ["N_RSTOUT", "28"],
  pin29: ["GPIO6", "29"],
  pin30: ["PVIN_B2", "30"],
  pin31: ["SW_B2", "31"],
  pin32: ["PGND_B12", "32"],
  pin33: ["SW_B1", "33"],
  pin34: ["PVIN_B1", "34"],
  pin35: ["GPIO1", "SDA_I2C2", "SDO_SPI", "35"],
  pin36: ["GPIO2", "SCL_I2C2", "CS0_SPI", "36"],
} as const;

const pinRoles = {
  pin1: "control",
  pin2: "bidirectional",
  pin3: "power",
  pin4: "unknown",
  pin5: "ground",
  pin6: "unknown",
  pin7: "output",
  pin8: "bidirectional",
  pin9: "power",
  pin10: "bidirectional",
  pin11: "bidirectional",
  pin12: "unknown",
  pin13: "output",
  pin14: "ground",
  pin15: "output",
  pin16: "unknown",
  pin17: "control",
  pin18: "unknown",
  pin19: "output",
  pin20: "unknown",
  pin21: "output",
  pin22: "unknown",
  pin23: "ground",
  pin24: "unknown",
  pin25: "output",
  pin26: "unknown",
  pin27: "control",
  pin28: "control",
  pin29: "bidirectional",
  pin30: "unknown",
  pin31: "output",
  pin32: "ground",
  pin33: "output",
  pin34: "unknown",
  pin35: "bidirectional",
  pin36: "control",
} as const;

const pinAttributes = {
  pin3: { requiresPower: true },
  pin5: { requiresGround: true },
  pin9: { requiresPower: true },
  pin14: { requiresGround: true },
  pin23: { requiresGround: true },
  pin32: { requiresGround: true },
} as const;

export const TPS6522430RAHRQ1 = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing RAH0036A; official source https://www.ti.com/lit/gpn/TPS65224-Q1 pages 11
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="TPS6522430RAHRQ1"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin2"]}
            pcbX="-2.775mm"
            pcbY="1.5mm"
            width="0.85mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin20"]}
            pcbX="2.775mm"
            pcbY="-1.5mm"
            width="0.85mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-2.7375mm"
            pcbY="1mm"
            width="0.925mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin21"]}
            pcbX="2.7375mm"
            pcbY="-1mm"
            width="0.925mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-2.675mm"
            pcbY="0.5mm"
            width="1.05mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin22"]}
            pcbX="2.675mm"
            pcbY="-0.5mm"
            width="1.05mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-2.675mm"
            pcbY="-0.5mm"
            width="1.05mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin24"]}
            pcbX="2.675mm"
            pcbY="0.5mm"
            width="1.05mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-2.7375mm"
            pcbY="-1mm"
            width="0.925mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin25"]}
            pcbX="2.7375mm"
            pcbY="1mm"
            width="0.925mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-2.775mm"
            pcbY="-1.5mm"
            width="0.85mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin26"]}
            pcbX="2.775mm"
            pcbY="1.5mm"
            width="0.85mm"
            height="0.25mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="-2mm"
            pcbY="-2.275mm"
            width="0.25mm"
            height="0.85mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin28"]}
            pcbX="2mm"
            pcbY="2.275mm"
            width="0.25mm"
            height="0.85mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="-1.5mm"
            pcbY="-2.275mm"
            width="0.25mm"
            height="0.85mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin29"]}
            pcbX="1.5mm"
            pcbY="2.275mm"
            width="0.25mm"
            height="0.85mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="-1mm"
            pcbY="-2.2375mm"
            width="0.25mm"
            height="0.925mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin30"]}
            pcbX="1mm"
            pcbY="2.2375mm"
            width="0.25mm"
            height="0.925mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="-0.5mm"
            pcbY="-2.2375mm"
            width="0.25mm"
            height="0.925mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin31"]}
            pcbX="0.5mm"
            pcbY="2.2375mm"
            width="0.25mm"
            height="0.925mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="0mm"
            pcbY="-1.85mm"
            width="0.25mm"
            height="1.7mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin32"]}
            pcbX="0mm"
            pcbY="1.85mm"
            width="0.25mm"
            height="1.7mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="0.5mm"
            pcbY="-2.2375mm"
            width="0.25mm"
            height="0.925mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin33"]}
            pcbX="-0.5mm"
            pcbY="2.2375mm"
            width="0.25mm"
            height="0.925mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="1mm"
            pcbY="-2.2375mm"
            width="0.25mm"
            height="0.925mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin34"]}
            pcbX="-1mm"
            pcbY="2.2375mm"
            width="0.25mm"
            height="0.925mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="1.5mm"
            pcbY="-2.275mm"
            width="0.25mm"
            height="0.85mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin35"]}
            pcbX="-1.5mm"
            pcbY="2.275mm"
            width="0.25mm"
            height="0.85mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="2mm"
            pcbY="-2.275mm"
            width="0.25mm"
            height="0.85mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin36"]}
            pcbX="-2mm"
            pcbY="2.275mm"
            width="0.25mm"
            height="0.85mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            points={[
              { x: "-3.15mm", y: "1.875mm" },
              { x: "-3.2mm", y: "1.925mm" },
              { x: "-3.2mm", y: "2.075mm" },
              { x: "-3.15mm", y: "2.125mm" },
              { x: "-2.745mm", y: "2.125mm" },
              { x: "-2.625mm", y: "2.245mm" },
              { x: "-2.625mm", y: "2.65mm" },
              { x: "-2.575mm", y: "2.7mm" },
              { x: "-2.425mm", y: "2.7mm" },
              { x: "-2.375mm", y: "2.65mm" },
              { x: "-2.375mm", y: "1.925mm" },
              { x: "-2.425mm", y: "1.875mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin9"]}
            points={[
              { x: "-3.15mm", y: "-1.875mm" },
              { x: "-3.2mm", y: "-1.925mm" },
              { x: "-3.2mm", y: "-2.075mm" },
              { x: "-3.15mm", y: "-2.125mm" },
              { x: "-2.745mm", y: "-2.125mm" },
              { x: "-2.625mm", y: "-2.245mm" },
              { x: "-2.625mm", y: "-2.65mm" },
              { x: "-2.575mm", y: "-2.7mm" },
              { x: "-2.425mm", y: "-2.7mm" },
              { x: "-2.375mm", y: "-2.65mm" },
              { x: "-2.375mm", y: "-1.925mm" },
              { x: "-2.425mm", y: "-1.875mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin19"]}
            points={[
              { x: "3.15mm", y: "-1.875mm" },
              { x: "3.2mm", y: "-1.925mm" },
              { x: "3.2mm", y: "-2.075mm" },
              { x: "3.15mm", y: "-2.125mm" },
              { x: "2.745mm", y: "-2.125mm" },
              { x: "2.625mm", y: "-2.245mm" },
              { x: "2.625mm", y: "-2.65mm" },
              { x: "2.575mm", y: "-2.7mm" },
              { x: "2.425mm", y: "-2.7mm" },
              { x: "2.375mm", y: "-2.65mm" },
              { x: "2.375mm", y: "-1.925mm" },
              { x: "2.425mm", y: "-1.875mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin27"]}
            points={[
              { x: "3.15mm", y: "1.875mm" },
              { x: "3.2mm", y: "1.925mm" },
              { x: "3.2mm", y: "2.075mm" },
              { x: "3.15mm", y: "2.125mm" },
              { x: "2.745mm", y: "2.125mm" },
              { x: "2.625mm", y: "2.245mm" },
              { x: "2.625mm", y: "2.65mm" },
              { x: "2.575mm", y: "2.7mm" },
              { x: "2.425mm", y: "2.7mm" },
              { x: "2.375mm", y: "2.65mm" },
              { x: "2.375mm", y: "1.925mm" },
              { x: "2.425mm", y: "1.875mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin5"]}
            points={[
              { x: "-3.15mm", y: "-0.125mm" },
              { x: "-3.2mm", y: "-0.075mm" },
              { x: "-3.2mm", y: "0.075mm" },
              { x: "-3.15mm", y: "0.125mm" },
              { x: "-0.85mm", y: "0.125mm" },
              { x: "-0.85mm", y: "0.55mm" },
              { x: "-0.8mm", y: "0.6mm" },
              { x: "-0.475mm", y: "0.6mm" },
              { x: "-0.425mm", y: "0.55mm" },
              { x: "-0.425mm", y: "0.52mm" },
              { x: "-0.305mm", y: "0.4mm" },
              { x: "0mm", y: "0.4mm" },
              { x: "0mm", y: "-0.4mm" },
              { x: "-0.305mm", y: "-0.4mm" },
              { x: "-0.425mm", y: "-0.52mm" },
              { x: "-0.425mm", y: "-0.55mm" },
              { x: "-0.475mm", y: "-0.6mm" },
              { x: "-0.8mm", y: "-0.6mm" },
              { x: "-0.85mm", y: "-0.55mm" },
              { x: "-0.85mm", y: "-0.125mm" },
            ]}
            shape="polygon"
          />
          <smtpad
            portHints={["pin23"]}
            points={[
              { x: "0mm", y: "0.4mm" },
              { x: "0.305mm", y: "0.4mm" },
              { x: "0.425mm", y: "0.52mm" },
              { x: "0.425mm", y: "0.55mm" },
              { x: "0.475mm", y: "0.6mm" },
              { x: "0.8mm", y: "0.6mm" },
              { x: "0.85mm", y: "0.55mm" },
              { x: "0.85mm", y: "0.125mm" },
              { x: "3.15mm", y: "0.125mm" },
              { x: "3.2mm", y: "0.075mm" },
              { x: "3.2mm", y: "-0.075mm" },
              { x: "3.15mm", y: "-0.125mm" },
              { x: "0.85mm", y: "-0.125mm" },
              { x: "0.85mm", y: "-0.55mm" },
              { x: "0.8mm", y: "-0.6mm" },
              { x: "0.475mm", y: "-0.6mm" },
              { x: "0.425mm", y: "-0.55mm" },
              { x: "0.425mm", y: "-0.52mm" },
              { x: "0.305mm", y: "-0.4mm" },
              { x: "0mm", y: "-0.4mm" },
            ]}
            shape="polygon"
          />
        </footprint>
      }
      {...props}
    />
  );
};

export default TPS6522430RAHRQ1;
