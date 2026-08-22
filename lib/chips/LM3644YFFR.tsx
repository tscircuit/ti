import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["GND", "A1"],
  pin2: ["IN", "A2"],
  pin3: ["SDA", "A3"],
  pin4: ["SW", "B1"],
  pin5: ["STROBE", "B2"],
  pin6: ["SCL", "B3"],
  pin7: ["OUT", "C1"],
  pin8: ["HWEN", "C2"],
  pin9: ["TORCH", "TEMP", "C3"],
  pin10: ["LED2", "D1"],
  pin11: ["TX", "D2"],
  pin12: ["LED1", "D3"],
} as const;

const pinRoles = {
  pin1: "ground",
  pin2: "power",
  pin3: "bidirectional",
  pin4: "power",
  pin5: "bidirectional",
  pin6: "bidirectional",
  pin7: "power",
  pin8: "bidirectional",
  pin9: "bidirectional",
  pin10: "power",
  pin11: "bidirectional",
  pin12: "power",
} as const;

const pinAttributes = {
  pin1: { requiresGround: true },
  pin2: { requiresPower: true },
  pin4: { requiresPower: true },
  pin7: { requiresPower: true },
  pin10: { requiresPower: true },
  pin12: { requiresPower: true },
} as const;

export const LM3644YFFR = (props: ChipProps<typeof pinLabels>) => {
  // Footprint provenance: TI drawing YFF0012; official source https://www.ti.com/lit/gpn/LM3644 pages 40
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      manufacturerPartNumber="LM3644YFFR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.4mm"
            pcbY="0.6mm"
            radius="0.115mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="0mm"
            pcbY="0.6mm"
            radius="0.115mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0.4mm"
            pcbY="0.6mm"
            radius="0.115mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-0.4mm"
            pcbY="0.2mm"
            radius="0.115mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="0mm"
            pcbY="0.2mm"
            radius="0.115mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0.4mm"
            pcbY="0.2mm"
            radius="0.115mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-0.4mm"
            pcbY="-0.2mm"
            radius="0.115mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="0mm"
            pcbY="-0.2mm"
            radius="0.115mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="0.4mm"
            pcbY="-0.2mm"
            radius="0.115mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="-0.4mm"
            pcbY="-0.6mm"
            radius="0.115mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="0mm"
            pcbY="-0.6mm"
            radius="0.115mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="0.4mm"
            pcbY="-0.6mm"
            radius="0.115mm"
            shape="circle"
          />
        </footprint>
      }
      {...props}
    />
  );
};

export default LM3644YFFR;
