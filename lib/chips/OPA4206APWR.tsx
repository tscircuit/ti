import type { ChipProps } from "@tscircuit/props";
import { getTiSchematicLayout } from "./get-ti-schematic-layout.ts";

const pinLabels = {
  pin3: ["IN_A", "3", "IN_A_3"],
  pin5: ["IN_B", "5", "IN_B_5"],
  pin10: ["IN_C", "10", "IN_C_10"],
  pin12: ["IN_D", "12", "IN_D_12"],
  pin2: ["IN_A", "2", "IN_A_2"],
  pin6: ["IN_B", "6", "IN_B_6"],
  pin9: ["IN_C", "9", "IN_C_9"],
  pin13: ["IN_D", "13", "IN_D_13"],
  pin1: ["OUT_A", "1"],
  pin7: ["OUT_B", "7"],
  pin8: ["OUT_C", "8"],
  pin14: ["OUT_D", "14"],
  pin4: ["V_P", "4"],
  pin11: ["V_N", "11"],
} as const;

const pinRoles = {
  pin3: "input",
  pin5: "input",
  pin10: "input",
  pin12: "input",
  pin2: "input",
  pin6: "input",
  pin9: "input",
  pin13: "input",
  pin1: "output",
  pin7: "output",
  pin8: "output",
  pin14: "output",
  pin4: "power",
  pin11: "power",
} as const;

const pinAttributes = {
  pin4: {
    requiresPower: true,
  },
  pin11: {
    requiresPower: true,
  },
} as const;

export const OPA4206APWR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...getTiSchematicLayout(pinLabels, { pinRoles })}
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C34381825"],
      }}
      manufacturerPartNumber="OPA4206APWR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-1.949958mm"
            pcbY="-2.800096mm"
            width="0.3999992mm"
            height="1.6999966mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-1.299972mm"
            pcbY="-2.800096mm"
            width="0.3999992mm"
            height="1.6999966mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-0.649986mm"
            pcbY="-2.800096mm"
            width="0.3999992mm"
            height="1.6999966mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0mm"
            pcbY="-2.800096mm"
            width="0.3999992mm"
            height="1.6999966mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="0.649986mm"
            pcbY="-2.800096mm"
            width="0.3999992mm"
            height="1.6999966mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="1.299972mm"
            pcbY="-2.800096mm"
            width="0.3999992mm"
            height="1.6999966mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="1.949958mm"
            pcbY="-2.800096mm"
            width="0.3999992mm"
            height="1.6999966mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="1.949958mm"
            pcbY="2.800096mm"
            width="0.3999992mm"
            height="1.6999966mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="1.299972mm"
            pcbY="2.800096mm"
            width="0.3999992mm"
            height="1.6999966mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="0.649986mm"
            pcbY="2.800096mm"
            width="0.3999992mm"
            height="1.6999966mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="0mm"
            pcbY="2.800096mm"
            width="0.3999992mm"
            height="1.6999966mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="-0.649986mm"
            pcbY="2.800096mm"
            width="0.3999992mm"
            height="1.6999966mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="-1.299972mm"
            pcbY="2.800096mm"
            width="0.3999992mm"
            height="1.6999966mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="-1.949958mm"
            pcbY="2.800096mm"
            width="0.3999992mm"
            height="1.6999966mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: 2.4999949999999984, y: 1.7432782000000202 },
              { x: 2.4999949999999984, y: -1.7401539999999898 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.5146000000000015, y: 0.6858000000000004 },
              { x: -2.5146000000000015, y: 1.7432782000000202 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.5146000000000015, y: -1.6001999999999867 },
              { x: -2.5146000000000015, y: -0.6857999999999862 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.5146000000000015, y: -1.7401539999999898 },
              { x: 2.4999949999999984, y: -1.7401539999999898 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.5146000000000015, y: 1.7432782000000202 },
              { x: 2.4999949999999984, y: 1.7432782000000202 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.5146000000000015, y: 0.6858000000000004 },
              { x: -2.2800426027520473, y: 0.6444411824873129 },
              { x: -2.0737762936569197, y: 0.525353256474375 },
              { x: -1.9206798308624684, y: 0.34289998171723823 },
              { x: -1.839218905095663, y: 0.11908791331384805 },
              { x: -1.839218905095663, y: -0.11908791331383384 },
              { x: -1.9206798308624684, y: -0.3428999817172098 },
              { x: -2.0737762936569197, y: -0.5253532564743608 },
              { x: -2.2800426027520473, y: -0.6444411824872986 },
              { x: -2.5146000000000015, y: -0.6857999999999862 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.4300962000000084, y: -1.1100053999999915 },
              { x: -1.4369075591764755, y: -1.1617428094778859 },
              { x: -1.4568774538342808, y: -1.2099544000000009 },
              { x: -1.48864496865437, y: -1.2513546313456203 },
              { x: -1.5300451999999893, y: -1.2831221461656952 },
              { x: -1.5782567905220901, y: -1.3030920408235147 },
              { x: -1.6299941999999987, y: -1.3099033999999818 },
              { x: -1.6817316094778931, y: -1.3030920408235147 },
              { x: -1.7299432000000081, y: -1.2831221461656952 },
              { x: -1.7713434313456276, y: -1.2513546313456203 },
              { x: -1.8031109461657024, y: -1.2099544000000009 },
              { x: -1.823080840823522, y: -1.1617428094778859 },
              { x: -1.829892199999989, y: -1.1100053999999915 },
              { x: -1.823080840823522, y: -1.0582679905220829 },
              { x: -1.8031109461657024, y: -1.010056399999982 },
              { x: -1.7713434313456276, y: -0.9686561686543484 },
              { x: -1.7299432000000081, y: -0.9368886538342736 },
              { x: -1.6817316094778931, y: -0.916918759176454 },
              { x: -1.6299941999999987, y: -0.9101074000000011 },
              { x: -1.5782567905220901, y: -0.916918759176454 },
              { x: -1.5300451999999893, y: -0.9368886538342736 },
              { x: -1.48864496865437, y: -0.9686561686543484 },
              { x: -1.4568774538342808, y: -1.010056399999982 },
              { x: -1.4369075591764755, y: -1.0582679905220829 },
              { x: -1.4300962000000084, y: -1.1100053999999915 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.0127mm"
            pcbY="4.6576mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -2.7646000000000015, y: 3.9076000000000164 },
              { x: 2.739200000000011, y: 3.9076000000000164 },
              { x: 2.739200000000011, y: -4.059999999999974 },
              { x: -2.7646000000000015, y: -4.059999999999974 },
              { x: -2.7646000000000015, y: 3.9076000000000164 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C34381825.obj?uuid=5377177da492449fa1a3111d646cac17",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C34381825.step?uuid=5377177da492449fa1a3111d646cac17",
        pcbRotationOffset: 90,
        modelOriginPosition: {
          x: -0.000012700000013410317,
          y: 0,
          z: -0.069083,
        },
      }}
      {...props}
    />
  );
};

export default OPA4206APWR;
