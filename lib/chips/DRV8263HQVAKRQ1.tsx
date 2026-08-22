import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin1: ["nFAULT"],
  pin2: ["IPROPI"],
  pin3: ["nSLEEP"],
  pin4: ["VM"],
  pin5: ["OUT2"],
  pin6: ["GND"],
  pin7: ["OUT1"],
  pin8: ["DRVOFF"],
  pin9: ["pin9"],
  pin10: ["pin10"],
  pin11: ["VDD"],
  pin12: ["DIAG"],
  pin13: ["SR"],
  pin14: ["ITRIP"],
  pin15: ["MODE"],
} as const;

const pinAttributes = {
  pin6: { requiresGround: true },
  pin11: { requiresPower: true },
} as const;

export const DRV8263HQVAKRQ1 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels)}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C51831427"],
      }}
      manufacturerPartNumber="DRV8263HQVAKRQ1"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-1.625092mm"
            pcbY="2.3999825mm"
            width="0.6500114mm"
            height="0.25019mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-1.625092mm"
            pcbY="1.8998565mm"
            width="0.6500114mm"
            height="0.249936mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-1.625092mm"
            pcbY="1.3999845mm"
            width="0.6500114mm"
            height="0.25019mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0mm"
            pcbY="0.3748405mm"
            width="3.8999922mm"
            height="0.499872mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-1.124966mm"
            pcbY="-0.9251315mm"
            width="1.649984mm"
            height="0.900176mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0mm"
            pcbY="-2.6000075mm"
            width="3.8999922mm"
            height="1.249934mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="1.124966mm"
            pcbY="-0.9251315mm"
            width="1.649984mm"
            height="0.900176mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="1.625092mm"
            pcbY="1.3999845mm"
            width="0.6500114mm"
            height="0.25019mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="1.625092mm"
            pcbY="1.8998565mm"
            width="0.6500114mm"
            height="0.249936mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="1.625092mm"
            pcbY="2.3999825mm"
            width="0.6500114mm"
            height="0.25019mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="0.999998mm"
            pcbY="2.8998545mm"
            width="0.2499868mm"
            height="0.65024mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="0.500126mm"
            pcbY="2.8998545mm"
            width="0.2499868mm"
            height="0.65024mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="0mm"
            pcbY="2.8998545mm"
            width="0.2499868mm"
            height="0.65024mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="-0.500126mm"
            pcbY="2.8998545mm"
            width="0.2499868mm"
            height="0.65024mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="-0.999998mm"
            pcbY="2.8998545mm"
            width="0.2499868mm"
            height="0.65024mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -1.7780000000001337, y: 2.706179499999962 },
              { x: -1.7780000000001337, y: 2.989821300000017 },
              { x: -1.7780000000001337, y: 2.989821300000017 },
              { x: -1.3561314000000948, y: 2.989821300000017 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.77800000000002, y: -1.6063595000000532 },
              { x: 1.77800000000002, y: -1.7439004999999952 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.77800000000002, y: -0.10623550000002524 },
              { x: 1.77800000000002, y: -0.24390349999998762 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.77800000000002, y: 0.9937115000000176 },
              { x: 1.77800000000002, y: 0.8559164999999211 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.3561313999999811, y: 2.989821300000017 },
              { x: 1.77800000000002, y: 2.989821300000017 },
              { x: 1.77800000000002, y: 2.706179499999962 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.7780000000001337, y: 0.8559164999999211 },
              { x: -1.7780000000001337, y: 0.9937115000000176 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.7780000000001337, y: -0.24390349999998762 },
              { x: -1.7780000000001337, y: -0.10623550000002524 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.7780000000001337, y: -1.7439004999999952 },
              { x: -1.7780000000001337, y: -1.6063595000000532 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.1590000000001055, y: 2.791904499999987 },
              { x: -2.163327420061364, y: 2.759034481272124 },
              { x: -2.176014773719544, y: 2.7284045000000106 },
              { x: -2.1961974387893406, y: 2.702101938789383 },
              { x: -2.222500000000082, y: 2.6819192737194726 },
              { x: -2.253129981271968, y: 2.669231920061293 },
              { x: -2.286000000000058, y: 2.664904500000034 },
              { x: -2.3188700187281484, y: 2.669231920061293 },
              { x: -2.3495000000000346, y: 2.6819192737194726 },
              { x: -2.375802561210662, y: 2.702101938789383 },
              { x: -2.3959852262805725, y: 2.7284045000000106 },
              { x: -2.4086725799387523, y: 2.759034481272124 },
              { x: -2.413000000000011, y: 2.791904499999987 },
              { x: -2.4086725799387523, y: 2.824774518728077 },
              { x: -2.3959852262805725, y: 2.8554044999999633 },
              { x: -2.375802561210662, y: 2.881707061210818 },
              { x: -2.3495000000000346, y: 2.901889726280615 },
              { x: -2.3188700187281484, y: 2.914577079938681 },
              { x: -2.286000000000058, y: 2.9189044999999396 },
              { x: -2.253129981271968, y: 2.914577079938681 },
              { x: -2.222500000000082, y: 2.901889726280615 },
              { x: -2.1961974387893406, y: 2.881707061210818 },
              { x: -2.176014773719544, y: 2.8554044999999633 },
              { x: -2.163327420061364, y: 2.824774518728077 },
              { x: -2.1590000000001055, y: 2.791904499999987 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.2286mm"
            pcbY="4.2262445mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -2.663000000000011, y: 3.4762445000001208 },
              { x: 2.20579999999984, y: 3.4762445000001208 },
              { x: 2.20579999999984, y: -3.475355499999978 },
              { x: -2.663000000000011, y: -3.475355499999978 },
              { x: -2.663000000000011, y: 3.4762445000001208 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C51831427.obj?uuid=eb14473efb8b43ac867369bf91ecdb53",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C51831427.step?uuid=eb14473efb8b43ac867369bf91ecdb53",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: -0.000012700000070253736,
          y: -0.019913600000109,
          z: -0.01,
        },
      }}
      {...props}
    />
  );
};

export default DRV8263HQVAKRQ1;
