import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["PWRHOLD"],
  pin2: ["VMMC"],
  pin3: ["VCC3"],
  pin4: ["VAUX33"],
  pin5: ["VDIG2"],
  pin6: ["VCC6"],
  pin7: ["VDIG1"],
  pin8: ["SDA"],
  pin9: ["SCL"],
  pin10: ["pin10"],
  pin11: ["pin11"],
  pin12: ["VDDIO"],
  pin13: ["VCCIO"],
  pin14: ["SWIO"],
  pin15: ["GNDIO"],
  pin16: ["VFBIO"],
  pin17: ["REFGND"],
  pin18: ["VREF"],
  pin19: ["BOOT1"],
  pin20: ["OSC32KIN"],
  pin21: ["OSC32KOUT"],
  pin22: ["VDAC"],
  pin23: ["VCC5"],
  pin24: ["VPLL"],
  pin25: ["TESTV"],
  pin26: ["BOOT0"],
  pin27: ["VBACKUP"],
  pin28: ["VCC7"],
  pin29: ["VRRTC"],
  pin30: ["VFB3"],
  pin31: ["SW3"],
  pin32: ["VFB1"],
  pin33: ["PWRON"],
  pin34: ["GND1"],
  pin35: ["SW1"],
  pin36: ["VCC1"],
  pin37: ["SLEEP"],
  pin38: ["CLK32KOUT"],
  pin39: ["pin39"],
  pin40: ["NRESPWRON"],
  pin41: ["VCC2"],
  pin42: ["SW2"],
  pin43: ["GND2"],
  pin44: ["VFB2"],
  pin45: ["INT1"],
  pin46: ["VAUX1"],
  pin47: ["VCC4"],
  pin48: ["VAUX2"],
  pin49: ["EP"],
} as const;

const pinAttributes = {
  pin3: { requiresPower: true },
  pin6: { requiresPower: true },
  pin23: { requiresPower: true },
  pin28: { requiresPower: true },
  pin34: { requiresGround: true },
  pin36: { requiresPower: true },
  pin41: { requiresPower: true },
  pin43: { requiresGround: true },
  pin47: { requiresPower: true },
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin49: [...pinLabels["pin49"], "thermalpad"],
} as const;

export const TPS65910A31A1RSLR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={footprinterPinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C478467"],
      }}
      manufacturerPartNumber="TPS65910A31A1RSLR"
      footprint="qfn48_thermalpad4.4mmx4.4mm_p0.4mm_h6.6801mm_pw0.2mm_pl0.665mm_pin1location(bottomside,left)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C478467.obj?uuid=20620f3de18b4da785d0896e0f3b8d5b",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C478467.step?uuid=20620f3de18b4da785d0896e0f3b8d5b",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  );
};

export default TPS65910A31A1RSLR;
